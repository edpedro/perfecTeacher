const connection = require('../database/connection')

module.exports = {
  async order(req, res) {
    const { courses_id, user_id } = req.body
    try {
      const orderPedi = await connection('order').insert({
        courses_id,
        user_id
      })
      res.status(200).json(orderPedi)
    } catch (error) {
      res.status(500).json({ message: "Erro no pedido" })
    }
  },
  async show(req, res) {
    const { id } = req.params
    try {
      const showOrder = await connection('order').where('order.id', '=', id)
        .join('users', 'users.id', 'order.user_id')
        .join('courses', 'courses.id', 'order.courses_id')
        .select('order.*', 'users.name', 'courses.hourValue')


      if (!showOrder) {
        res.status(400).json({ messsage: "Favor cadastrar pedido" })
      }

      res.status(200).json(showOrder)
    } catch (error) {
      res.status(400).json({ messsage: "Favor cadastrar pedido" })
    }
  },
  async deleteOrder(req, res) {
    const { id } = req.body

    try {
      await connection('order').where('id', '=', id).del()

      res.status(200).json({ message: "Pedido deletado com sucesso!" })
    } catch (error) {
      res.status(400).josn({ message: "Erro ao delatar pedido" })
    }
  }
}