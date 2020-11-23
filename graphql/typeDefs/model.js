const { model } = require("mongoose")

const Model = `
type User {
    _id:ID,
    name:String,
    lastName:String,
    email:String,
    password:String,
  }
`


module.exports = Model