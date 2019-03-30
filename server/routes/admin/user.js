const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

router.get('/checkLogin', async (ctx, next) => {
  const username = ctx.cookies.get('username')
  console.log('cookie', username)
  if (username) {
    ctx.body = true
  } else {
    ctx.status = 401
    ctx.body = {
      status: 401,
      result: false,
      message: '登录信息失效，请重新登录'
    }
  }
})

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

  if (user) {
    match = await user.comparePassword(password, user.password)
  }
  if (match) {
    const { username, email, role, _id, gender, desc, nickname } = user
    const userInfo = { username, email, role, _id, gender, desc, nickname }
    ctx.cookies.set('username', username)
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

router.post('/logout', async (ctx) => {
  const { username } = ctx.request.body
  // const User = mongoose.model('User')
  await ctx.cookies.set('username', null)
  ctx.body = {
    status: 200,
    result: true,
    message: '退出成功'
  }
})

router.get('/list', async (ctx) => {
  const User = mongoose.model('User')
  const data = await User.find({}).select({ password: 0 })
  ctx.body = {
    status: 200,
    result: data,
    message: 'ok'
  }
})

module.exports = router.routes()