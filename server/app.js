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

const { connect, initShema } = require('./model')

;(async () => {
  await connect()
  await initShema()
})()

const app = new Koa()
const router = new Router()
const index = require('./routes/index')

app.keys = ['this is a blog']

router.use('/api', index)

app
  .use(session(CONFIG, app))
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(5500)