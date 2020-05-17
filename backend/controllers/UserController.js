const connection = require('../database/connection')
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.JWT_TOKEN

module.exports = {
    async create(req, res) {
        try {
            const { name, email, password, type } = req.body
            const checkEmail = await connection('users')
                .where('email', email).first()

            if (checkEmail) {
                res.status(401).json({ message: 'Email já cadastrado!' })
            }

            const hasePassword = await bcrypt.hash(password, 10)

            await connection('users').insert({
                name,
                email,
                hasePassword,
                type
            })
            return res.status(201).json(name)
        } catch (error) {
            res.status(500).json({ message: 'Erro ao cadastrar!' })
        }
    },
    async login(req, res) {
        try {
            const { email, hasePassword } = req.body
            const user = await connection('users')
                .where('email', email)
                .first()

            if (await bcrypt.compare(hasePassword, user.hasePassword)) {
                const token = jwt.sign({ email }, secret, { expiresIn: '1d' })
                res.status(200).json({token, user})
            } else {
                res.status(500).json({ message: 'Email e Senha invalida!' })
            }

        } catch (error) {
            res.status(500).json({ message: 'Email e Senha invalida!' })
        }
    }
}