import { request } from 'http';

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  local: {
    userName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
  }
})

User.methods.setUserData = function (requestBody) {
  this.userName = requestBody.userName || this.userName
  this.email = requestBody.email || this.email
  this.password = request.password || this.password
}

module.exports = mongoose.model('User', User)
