const Router = require('koa-router')
const router = new Router()
const category = require('./admin/category')
const page = require('./admin/page')
const user = require('./admin/user')
const summary = require('./admin/summary')

router.use('/page', page).use('/category', category).use('/user', user).use('/summary', summary)

module.exports = router.routes()