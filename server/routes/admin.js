const Router = require('koa-router')
const router = new Router()
const category = require('./admin/category')
const page = require('./admin/page')
const user = require('./admin/user')
// const category = require('./admin/category')

router.use('/page', page).use('/category', category).use('/user', user)

module.exports = router.routes()