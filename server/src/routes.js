const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const { User, Products } = require('./models')
const jwt = require('jsonwebtoken')

module.exports = (app) => {
  app.get('/', function (req, res) {
    console.log("/ hit")
    console.log('this is req.get: ', req.get('authorization'))
  })

  app.get('/currentUser', async (req,res) => {
    return res.send(req.$current_user)
  })

  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login', AuthenticationController.login)

  app.get('/product', AuthenticationController.product)
}
