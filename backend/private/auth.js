const connection = require('../database/connection')

require('dotenv').config()
const secret = process.env.JWT_TOKEN
const jwt = require('jsonwebtoken')

const WithAuth =(req, res, next) => {
  const token = req.headers['x-access-token']
  if (!token) {
    res.status(401).json({ message: 'Login não autorizado' })
  }
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      res.status(401).json({ message: 'Token invalido' })
    } else {
      try {
        req.email = decoded.email
        const user = connection('users').where('email', decoded.email).first()
        req.user = user
        
        next()
      } catch (error) {
        res.status(401).json({ error })
      }

    }
  })

}
module.exports = WithAuth