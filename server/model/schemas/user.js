const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const crypto = require('crypto')

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
  gender: {
    type: String,
    enum: ['male', 'female']
  },
  age: {
    type: Number
  },
  role: {
    type: String,
    default: 'writer',
    enum: ['passenger', 'writer', 'admin']
  },
  avatar: {
    type: String
  },
  desc: String,
  page: [{
    type: ObjectId,
    ref: 'Page'
  }],
  comment: [{
    type: ObjectId,
    ref: 'Comment'
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

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next()
  const md5 = crypto.createHash('md5')
  this.password = md5.update(this.password).digest('hex');
  next()
})

userSchema.methods = {
  comparePassword: (newv, prev) => {
    return new Promise((resolve, reject) => {
      const md5 = crypto.createHash('md5')
      newv = md5.update(newv).digest('hex')
      if (prev === newv) {
        resolve({ isMatch: true })
      } else {
        reject(new Error('密码不对！'))
      }
    })
  }
}

mongoose.model('User', userSchema)