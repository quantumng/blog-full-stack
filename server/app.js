const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session')

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

const index = require('./routes/index')
const admin = require('./routes/admin')
const mobile = require('./routes/mobile')

const { connect, initShema } = require('./model')
;(async () => {
  await connect()
  initShema()
})()

const app = new Koa()
const router = new Router()

app.keys = ['this is a blog']

router.use('/admin', admin)
router.use('/mobile', mobile)
router.use(index)

app
  .use(session(CONFIG, app))
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)