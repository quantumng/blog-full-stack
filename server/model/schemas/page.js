const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const pageSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  alias: String,
  category: {
    type: ObjectId,
    ref: 'Category'
  },
  author: {
    type: ObjectId,
    ref: 'User'
  },
  publisher: {
    type: ObjectId,
    ref: 'User'
  },
  content: String,
  isDelete: {
    type: Boolean,
    default: false
  },
  createAt: {
    type: Date,
    default: Date.now()
  },
  updateAt: {
    type: Date,
    default: Date.now()
  }
})

pageSchema.pre('save', next => {
  if (this.isNew) {
    this.createAt = this.updateAt = Date.now()
  } else {
    this.updateAt = Date.now()
  }
})

mongoose.model('Page', pageSchema)