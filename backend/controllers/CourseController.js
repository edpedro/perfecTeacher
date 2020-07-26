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
  }
}
