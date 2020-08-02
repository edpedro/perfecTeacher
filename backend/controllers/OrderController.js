const connection = require('../database/connection')

module.exports = {
  async order(req, res) {

    const { course_id, user_id, name, data, address, cel, information, teacher_id } = req.body

    try {
      const orderPedi = await connection('order').insert({
        course_id,
        user_id,
        name,
        data,
        address,
        cel,
        information,
        teacher_id,
        active: false,
        notifications: true,
      })
      res.status(200).json(orderPedi)
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Erro no pedido" })
    }
  },
  async show(req, res) {
    const { id } = req.params

    try {
      const showOrder = await connection('order')
        .where('order.teacher_id', '=', id)
        .orWhere('order.user_id', '=', id)

      const showAl = await connection('order')
        .where('order.teacher_id', '=', id)
        .join('users', 'users.id', '=', 'order.user_id')
        .select('users.id', 'users.name', 'users.email', 'users.city', 'users.uf', 'users.image', 'users.type')

      const showProf = await connection('order')
        .where('order.user_id', '=', id)
        .join('courses', 'courses.id', '=', 'order.course_id')
        .join('users', 'users.id', '=', 'courses.user_id')
        .select('users.id', 'users.name', 'users.email', 'users.city', 'users.uf', 'users.image', 'users.type')

      if (!showOrder) {
        res.status(400).json({ messsage: "Favor cadastrar pedido" })

        return
      }

      res.status(200).json({ showOrder, showAl, showProf })
    } catch (error) {
      res.status(400).json(error)
    }
  },

  async deleteOrder(req, res) {
    const { id } = req.params

    try {
      const response = await connection('order').where('order.user_id', '=', id).del()

      if (!response) {

        await connection('order').where('order.teacher_id', '=', id).del()

        return res.status(200).json({ message: "Pedido deletado com sucesso!" })
      }

      res.status(200).json({ message: "Pedido deletado com sucesso!" })

    } catch (error) {
      res.status(400).josn({ message: "Erro ao delatar pedido" })
    }
  }
}