const express = require('express')
const Router = express.Router()
const User = require('../models/User')
const mongoose = require('mongoose')

Router.route('/api/users')
  .get((req, res) => {
    User.find((err, users) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({msg: 'SUCCESS on GET', data: users})
      }
    })
  })
  .post((req, res) => {
    const user = new User()
    user.save((err, savedUser) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({msg: 'SUCCESS on POST,', data: savedUser})
      }
    })
  })

// Router.route('/:userId')
//   .get((req, res) => {
//     const userId = req.params.userId
//     User.findById({_id: userId})
//     if (err) {
//       res.json({error: err})
//     } else {
//       res.json({msg: `Found ${userId}`, data: user})
//     }
//   })

module.exports = Router
