const Data = require('../models')

module.exports = {
  async product (req, res) {
    try {
      await Data.products.findOne().then(function (item) {
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