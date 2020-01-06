const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (patient, options) {
  const SALT_FACTOR = 8

  if (!patient.changed('password')) {
    return
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(patient.password, salt, null))
    .then(hash => {
      patient.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    pet_name: DataTypes.STRING,
    pet_type: DataTypes.STRING,
    pet_dob: DataTypes.DATE,
    status: DataTypes.STRING,
    pet_image: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    country: DataTypes.STRING,
    owner_first_name: DataTypes.STRING,
    owner_last_name: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: hashPassword
    }
  })

  Patient.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }

  return Patient
}
