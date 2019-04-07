const Router = require('koa-router')
const router = new Router()
const category = require('./blog/category')
const page = require('./blog/page')

router.use('/page', page).use('/category', category)

module.exports = router.routes()