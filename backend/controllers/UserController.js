const connection = require('../database/connection')
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.JWT_TOKEN

module.exports = {
    async create(req, res) {
        console.log(req.body)
        try {
            const { name, email, password, type } = req.body           
            const checkEmail = await connection('users')
                .where('email', email).first()


            if (checkEmail) {
                res.status(401).json({ message: 'Email já cadastrado!' })

            } else {

                const hasePassword = await bcrypt.hash(password, 10)
                const token = jwt.sign({ email }, secret, { expiresIn: '1d' })
                const [id] = await connection('users').insert({
                    name,
                    email,
                    hasePassword,
                    type                  
                })
                return res.status(201).json({ token, type, id })
            }

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
                const token = jwt.sign({ email }, secret, { expiresIn: '2h' })
                res.status(200).json({ token, user })
            } else {
                res.status(500).json({ message: 'Email e Senha invalida!' })
            }

        } catch (error) {
            res.status(500).json({ message: 'Email e Senha invalida!' })
        }
    },
    async list(req, res) {
        try {

            const user = await connection('users').select('*')
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({ message: 'Email e Senha invalida!' })
        }
    },
    async authLogin(req, res) {
        const token = req.headers['x-access-token']

        if (!token) {
            res.status(401).json({ message: 'Login não autorizado' })
        } else {

            try {
                const decodedToken = await jwt.verify(token, secret)

                const user = await connection('users')
                    .where('email', decodedToken.email)
                    .first()
                res.status(200).json(user)

            } catch (error) {
                res.status(500).json({ error })
            }
        }
    },
    async upload(req, res) {      
       try {
            const id = req.params.id
            const image = req.file.filename
           await connection('users').where('users.id', '=',id).update({
               image,
             })    
            res.status(200).json({image})
        } catch (error) {
            res.status(500).json({ error })
        }
    }
}

