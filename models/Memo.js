const mongoose = require('mongoose')

const MemoSchema = new mongoose.Schema({
    memo: {
      type: String,
      required: true,
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
  })
  
  module.exports = mongoose.model('Memo', MemoSchema)
  