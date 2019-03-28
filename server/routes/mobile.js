const Router = require('koa-router')
const router = new Router()

router.get('/', async (ctx, next) => {
  ctx.body = '移动接口'
})

module.exports = router.routes()