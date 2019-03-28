const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const md5 = require('md5')

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  nickname: String,
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  desc: String,
  page: [{
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

userSchema.pre('save', next => {
  if (this.isNew) {
    this.createAt = this.updateAt = Date.now()
  } else {
    this.updateAt = Date.now()
  }
  next()
})

userSchema.pre('save', next => {
  if (!user.isModified('password')) return next()
  this.password = md5(this.password)
  next()
})

mongoose.model('User', userSchema)