const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  todo: {
    type: String,
    required: false,
  },
  completed: {
    type: Boolean,
    required: false,
  },
  companyName: {
    type: String,
    required: true,
  },
  spark: {
    type: String,
    required: true,
  },
  followUp: {
    type: String,
    required: true,
  },
  addedOnLinkedIn: {
    type: String,
    required: true,
  },
  addedOnTwitter: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
