const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session')
const render = require('koa-art-template')
const static = require('koa-static')
const path = require('path')

// 数据库相关
const { connect, initShema } = require('./model')
;(async () => {
  await connect()
  await initShema()
})()

// session cookie配置
const CONFIG = {
  key: 'koa:sess',
  maxAge: 3600000,
  autoCommit: true,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: true,
}
app.keys = ['this is a blog']

// 模板引擎
render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.art',
  debug: process.env.NODE_ENV !== 'production'
})

// 路由
const router = new Router()
const index = require('./routes/index')
const api = require('./routes/api')
router.use('/api', api).use(index)

// 中间件
app
  .use(static(path.join(__dirname, 'static')))
  .use(session(CONFIG, app))
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(5500)