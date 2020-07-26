const connection = require('../database/connection')

module.exports = {
  
    async search(req, res) {
    const { search_query } = req.query

    console.log(search_query)
    try {
      //Consultar no curso
      const serach = await connection('courses')
        .where('title', 'like', `%${search_query}%`)
        .orWhere('competence', 'like', `%${search_query}%`)
        .join('users', 'users.id', '=', 'courses.user_id')
        .join('subjects', 'subjects.id', '=', 'courses.subjects_id')
        .join('sub_subjects', 'sub_subjects.id', '=', 'courses.sub_subjects_id')
        .select(['courses.*',
          'sub_subjects.subMatter',
          'subjects.matter',
          'users.name',
          'users.city',
          'users.uf',
          'users.image'])

      if (serach.length <= 0) {
        //Consultar na materia
        const serachMatter = await connection('subjects')
          .where('matter', 'like', `%${search_query}%`)
          .join('users', 'users.id', '=', 'subjects.user_id')
          .join('courses', 'courses.id', '=', 'courses.subjects_id')
          .join('sub_subjects', 'sub_subjects.id', '=', 'courses.sub_subjects_id')
          .select(['courses.*',
            'sub_subjects.subMatter',
            'subjects.matter',
            'users.name',
            'users.city',
            'users.uf',
            'users.image'])

        if (serachMatter.length <= 0) {
          //Consultar na sub materia
          const serachSubMatter = await connection('sub_subjects')
            .where('subMatter', 'like', `%${search_query}%`)
            .join('users', 'users.id', '=', 'sub_subjects.user_id')
            .join('courses', 'courses.id', '=', 'courses.sub_subjects_id')
            .join('subjects', 'subjects.id', '=', 'courses.subjects_id')
            .select(['courses.*',
              'sub_subjects.subMatter',
              'subjects.matter',
              'users.name',
              'users.city',
              'users.uf',
              'users.image'])

          return res.status(200).json(serachSubMatter)

        }
        return res.status(200).json(serachMatter)
      }
    
      return res.status(200).json(serach)
      

    } catch (error) {
      res.status(400).json({ message: "Não encontrado" })
    }
  }
}
