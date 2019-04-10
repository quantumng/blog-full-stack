const Router = require('koa-router')
const router = new Router()
const category = require('./mobile/category')
const page = require('./mobile/page')

router.use('/page', page).use('/category', category)

module.exports = router.routes()