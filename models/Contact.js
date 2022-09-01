const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  spark: {
    type: String,
    required: true,
  },
  email: {
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
  addedOntwitter: {
    type: String,
    required: true,
  },
  dateContactCreated: {
    type: Date,
    default: Date.now
}
})

module.exports = mongoose.model('Contact', ContactSchema)
