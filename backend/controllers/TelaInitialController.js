const connection = require('../database/connection')
module.exports = {
  async show(req, res) {
    try {
      const user = await connection('users').select('name', 'image',
        'code', 'city', ' district', 'uf', 'Street')

      res.status(200).json(user)
    } catch (error) {
      res.status(404).json({ message: 'Erro na pagina!' })
    }

  }
}