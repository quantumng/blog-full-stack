const Router = require('koa-router')
const router = new Router()

router.get('/', async (ctx, next) => {
  ctx.body = '首页'
})

module.exports = router.routes()