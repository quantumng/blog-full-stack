const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const categorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  alias: {
    type: String,
    unique: true
  },
  desc: String,
  pages: [{
    type: ObjectId,
    ref: 'Page'
  }],
  createAt: {
    type: Date,
    default: Date.now()
  },
  updateAt: {
    type: Date,
    default: Date.now()
  }
})

categorySchema.pre('save', next => {
  if (this.isNew) {
    this.createAt = this.updateAt = Date.now()
  } else {
    this.updateAt = Date.now()
  }
  next()
})

mongoose.model('Category', categorySchema)