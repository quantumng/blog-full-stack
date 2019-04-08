const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')
const crypto = require('crypto')

router.get('/checkLogin', async (ctx, next) => {
  const cookies = ctx.cookies.get('username')
  console.log('cookies', cookies)
  if (cookies) {
    const User = mongoose.model('User')
    const { username, email, role, _id, gender, desc, nickname } = await User.findOne({ 'username': cookies }).exec()
    ctx.body = {
      status: 200,
      result: { username, email, role, _id, gender, desc, nickname },
      message: '登录成功'
    }
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

router.get('/', async (ctx, next) => {
  try {
    const { username } = ctx.request.query
    const User = mongoose.model('User')
    const data = await User.findOne({username}).select({ password: 0 })
    ctx.body = {
      status: 200,
      result: data,
      message: 'ok'
    }
  } catch (err) {
    console.log(err)
    ctx.status = 500
    ctx.body = {
      status: 500,
      result: false,
      message: '获取用户数据失败'
    }
  }
})

router.post('/update', async (ctx, next) => {
  try {
    const { id, username, ...data } = ctx.request.body
    const User = mongoose.model('User')
    await User.findOneAndUpdate({'username': username, '_id': id}, data)
    ctx.body = {
      status: 200,
      result: true,
      message: 'ok'
    }
  } catch (err) {
    console.log(err)
    ctx.body = {
      status: 500,
      result: false,
      message: '修改用户数据失败'
    }
  }
})

router.post('/updatePassword', async (ctx, next) => {
  try {
    let match = false
    let { username, oldPassword, newPassword } = ctx.request.body
    const User = mongoose.model('User')
    const user = await User.findOne({ username: username }).exec()
    if (user) {
      match = await user.comparePassword(oldPassword, user.password)
    }
    if (match) {
      const md5 = crypto.createHash('md5')
      password = md5.update(newPassword).digest('hex')
      await User.findOneAndUpdate({username: username}, {password})
      ctx.body = {
        status: 200,
        result: true,
        message: '密码修改成功'
      }
    } else {
      ctx.status = 500
      ctx.body = {
        status: 500,
        result: false,
        message: '原始密码错误'
      }
    }
  } catch (err) {
    console.log(err)
    ctx.status = 500
    ctx.body = {
      status: 500,
      result: false,
      message: '密码修改失败'
    }
  }
})

module.exports = router.routes()