const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

const index = require('./routes/index')
const admin = require('./routes/admin')
const mobile = require('./routes/mobile')

const app = new Koa()
const router = new Router()

router.use('/admin', admin)
router.use('/mobile', mobile)
router.use(index)

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(bodyParser())

app.listen(3000)