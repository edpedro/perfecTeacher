const connection = require('../database/connection')
module.exports = {

  async search(req, res) {

    const { page = 1 } = req.query
    const [count] = await connection('courses').count()
    try {
      const search = await connection('courses')
        .join('sub_subjects', 'sub_subjects.id', '=', 'courses.sub_subjects_id')
        .join('users', 'users.id', '=', 'courses.user_id')
        .join('subjects', 'subjects.id', '=', 'courses.subjects_id')
        .limit(6).offset((page - 1) * 6)
        .select(['courses.*', 'sub_subjects.subMatter', 'subjects.matter',
          'users.name', 'users.city', 'users.uf'])

      res.header('X-Total-Count', count['count(*)'])
      res.status(200).json(search)
    } catch (error) {
      res.status(400).json({ message: "Erro na buscar" })
    }

  }
}