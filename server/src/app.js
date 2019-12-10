const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')
const middlewares = require('./lib/middlewares')

const cookieParser = require('cookie-parser')


const app = express()
app.use(morgan('combined'))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(cors())

app.use(middlewares.populateJWTUser)

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port || 8081)
    console.log(`Server started on port ${config.port}`)
  })
