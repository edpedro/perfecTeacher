const connetcion = require('../database/connection')

module.exports = {
  async create(req, res) {
    try {
      const { competence,
        teach,
        homeClasses,
        webCamClasses,
        studentClasses,
        title,
        methodology,
        presentation,
        code,
        city,
        district,
        uf,
        hourValue,
        offsetValue,
        webValue,
        packageValue,
        subjects_id,
        sub_subjects_id,
        user_id,
      } = req.body

      //Adicionar curso 
      const course = await connetcion('courses').insert({
        competence,
        teach,
        homeClasses,
        webCamClasses,
        studentClasses,
        title,
        methodology,
        presentation,
        hourValue,
        offsetValue,
        webValue,
        packageValue,
        user_id,
        subjects_id,
        sub_subjects_id
      })

      //Atualizar usuario
      if (code && city && district && uf) {
        const update = await connetcion('users').where('users.id', '=', user_id).update({
          code,
          city,
          district,
          uf,
        })
      }


      return res.status(201).json(course)
    } catch (error) {
      console.log(error)
    }
  },
  async show(req, res) {
    const { id } = req.params

    try {

      const course = await connetcion('courses')
        .where('courses.user_id', '=', id)
        .join('sub_subjects', 'sub_subjects.id', '=', 'courses.sub_subjects_id')
        .join('users', 'users.id', '=', 'courses.user_id')
        .join('subjects', 'subjects.id', '=', 'courses.subjects_id')
        .select(['courses.*', 'sub_subjects.subMatter', 'subjects.matter', 'users.name'])


      if (!course) {
        res.status(400).json({ message: "Favor cadastrar anuncio" })
      }

      res.status(200).json(course)

    } catch (error) {
      res.json({ message: "Erro", error })
    }
  },
  async showId(req, res) {
    const { id } = req.params

    try {

      const course = await connetcion('courses')
        .where('courses.id', '=', id)
        .join('sub_subjects', 'sub_subjects.id', '=', 'courses.sub_subjects_id')
        .join('users', 'users.id', '=', 'courses.user_id')
        .join('subjects', 'subjects.id', '=', 'courses.subjects_id')
        .select(['courses.*', 'sub_subjects.subMatter', 'subjects.matter', 'users.name','users.image',])

      res.status(200).json(course)

    } catch (error) {
      res.json({ message: "Erro", error })
    }
  },
  async edit(req, res) {
    const { id } = req.params

    try {
      const { competence,
        teach,
        homeClasses,
        webCamClasses,
        studentClasses,
        title,
        methodology,
        presentation,
        hourValue,
        offsetValue,
        webValue,
        packageValue,
        subjects_id,
        sub_subjects_id
      } = req.body


      await connetcion('courses').where('courses.id', '=', id).update({
        competence,
        teach,
        homeClasses,
        webCamClasses,
        studentClasses,
        title,
        methodology,
        presentation,
        hourValue,
        offsetValue,
        webValue,
        packageValue,
        subjects_id,
        sub_subjects_id
      })
      res.status(200).json(id)
    } catch (error) {
      res.status(400).json({ message: "Erro ao atualizar o curso" })
    }

  },
  async delete(req, res) {
    const { id } = req.params

    try {

      await connetcion('courses').where('id', '=', id).del()

      res.status(200).json({ message: "Deletado" })
    } catch (error) {
      res.status(400).json({ message: "Erro ao deletar o curso" })
    }

  },
  async search(req, res) {
    const { search_query } = req.query

    console.log(search_query)
    try {
      //Consultar no curso
      const serach = await connetcion('courses')
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
        const serachMatter = await connetcion('subjects')
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
          const serachSubMatter = await connetcion('sub_subjects')
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
