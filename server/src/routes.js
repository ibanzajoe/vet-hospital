const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const { User, Products, Patient } = require('./models')
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

  app.get('/getPatients', async (req, res) => {
    try {
      
      await Patient.findAll().then(function(patients) {
        console.log('this is the patients: ', patients)
        res.send(patients)
      })
    } catch (err) {
      console.log('this is the err: ', err)
      res.status(400).send({
        error: 'cannot retrieve patients'
      })
    }
  })

  app.post('/createNewPatient', async (req,res) => {
    try {
      console.log('does this update changes: ')
      console.log('this is the payload: ', req.body)
      const payload = req.body.payload
      const patient = await Patient.create(payload)
      res.send(patient.toJSON())
    } catch (err) {
      console.log('this is the err: ', err)
      res.status(400).send({
        error: 'Cannot create patient'
      })
    }
  })
}
