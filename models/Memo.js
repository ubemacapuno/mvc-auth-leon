const mongoose = require('mongoose')

const MemoSchema = new mongoose.Schema({
    memo: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    highPoints: {
      type: String,
      required: false,
    },
    typeOfConnection: {
        type: String,
        required: false,
      },
    dateOfConnection: {
        type: String,
        required: true,
    },
    dateMemoEntered: {
        type: Date,
        default: Date.now
    },
    userId: {
      type: String,
      required: true
    }
  })
  
  module.exports = mongoose.model('Memo', MemoSchema)
  