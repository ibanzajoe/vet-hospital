const Joi = require('joi')


module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error, value} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email' :
          res.status(400).send({
            error: 'you must provide valid email'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Invalid Password:' +
              '<br>' +
              '1. Must contain only following: alpha numeric' +
              '2. Must be at least 8 characters and less than 32'
          })
          break
        default:
          res.status(400).send({
            error: 'invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}