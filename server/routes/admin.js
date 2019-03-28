const Router = require('koa-router')
const router = new Router()
const category = require('./admin/category')
const page = require('./admin/page')
// const category = require('./admin/category')

router.get('/', async (ctx, next) => {
  ctx.body = '后台管理接口'
})

router.use('/page', page).use('/category', category)

module.exports = router.routes()