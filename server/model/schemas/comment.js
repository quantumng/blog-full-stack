const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const commentSchema = new Schema({
  content: String,
  username: {
    type: ObjectId,
    ref: 'User'
  },
  page: {
    type: ObjectId,
    ref: 'Page'
  },
  isShow: Boolean,
  createAt: {
    type: Date,
    default: Date.now()
  },
  updateAt: {
    type: Date,
    default: Date.now()
  }
})

commentSchema.pre('save', next => {
  if (this.isNew) {
    this.createAt = this.updateAt = Date.now()
  } else {
    this.updateAt = Date.now()
  }
})

mongoose.model('Comment', commentSchema)