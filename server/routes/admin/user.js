const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

router.post('/register', async (ctx, next) => {
  const registerInfo = ctx.request.body
  const { username, email } = registerInfo
  const User = mongoose.model('User')
  const user = await User.findOne({
    $or: [
      { username: username },
      { email: email }
    ]
  }).exec()

  if (user) {
    ctx.status = 500
    ctx.body = {
      status: 500,
      result: false,
      message: '用户名或邮箱已被注册'
    }
  } else {
    if (registerInfo.username === 'wuxiaoquan' && registerInfo.email === 'wuxq1991@163.com') {
      registerInfo['role'] = 'admin'
    }
    const newUser = new User(registerInfo)
    newUser.save()
    ctx.body = {
      status: 200,
      result: true,
      message: '注册成功'
    }
  }
})

router.post('/login', async (ctx) => {
  let match = false
  const registerInfo = ctx.request.body
  const { username, email, password } = registerInfo
  const User = mongoose.model('User')
  const user = await User.findOne({
    $or: [
      { username: username },
      { email: email }
    ]
  }).exec()
  console.log(user)
  if (user) {
    match = await user.comparePassword(password, user.password)
  }
  if (match) {
    const { username, email, role, _id, gender, desc, nickname } = user
    const userInfo = { username, email, role, _id, gender, desc, nickname }
    ctx.body = {
      status: 200,
      result: userInfo,
      message: '登录成功'
    }
  } else {
    ctx.status = 500
    ctx.body = {
      status: 500,
      result: false,
      message: '用户名或密码错误'
    }
  }
})
module.exports = router.routes()