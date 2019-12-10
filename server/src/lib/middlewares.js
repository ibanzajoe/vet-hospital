const {User} = require('../models')
const jwt = require('jsonwebtoken')

exports.populateJWTUser = async (req,res,next) => {
  let auth = req.get('authorization')

  if (!auth) return next()

  let token = auth.split(" ").pop()

  try {
    const decoded = jwt.decode(token)
    console.log('this is the decoded: ******** ', decoded)
    const {id} = decoded

    const user = await User.findOne({
      where: {
        id: id
      }
    })

    req.$current_user = user
    return next()

  } catch (err) {
    console.error(err)
    return next()
  }
}