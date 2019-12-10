const {User, products} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }

    res.send({
      message: `Hello ${req.body.email}, you are registered`
    })
  },

  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'No user by that email'
        })
      }

      const isPasswordValid = await user.comparePassword(password)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'Password is incorrect'
        })
      }

      const userJson = user.toJSON()

      res.send({
        user:userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'Error occurred trying to log in'
      })
    }
  },










  async product (req, res) {
    try {
      await products.findOne().then(function (item) {
        console.log("this is the item: ", item)
        res.send(item.toJSON())
      })
    } catch (err) {
      res.status(400).send({
        error: 'cannot find one item'
      })
    }
  }
}