const connection = require('../database/connection')
const WithAuth = require('../private/auth')

module.exports = {
  //Materia
  async createSubjects(req, res) {
    try {
      const { matter, user_id } = req.body
      await connection('subjects').insert({
        matter,
        user_id
      })
      res.status(200).json({ matter, user_id })
    } catch (error) {
      res.status(400).json({ message: "Erro ao cadastrar materia", error })
    }
  },
  async showSubjects(req, res) {
    const subject = await connection('subjects').select('*')

    res.status(200).json({ subject })
  },
  //Sub materia
  async createSub_Subjects(req, res) {
    try {
      const { subMatter, user_id, subjects_id } = req.body
      await connection('sub_subjects').insert({
        subMatter,
        user_id,
        subjects_id
      })
      return res.status(200).json({ subMatter, user_id, subjects_id })
    } catch (error) {
      return res.status(400).json({ message: "Erro ao cadastrar subMateria", error })
    }
  },
  async showSub_Subjects(req, res) {
    const sub_subjects = await connection('sub_subjects')
      .join('subjects', 'subjects.id', '=', 'sub_subjects.subjects_id')
      .select(['sub_subjects.*', 'subjects.matter'])

    return res.json(sub_subjects)
  }

}