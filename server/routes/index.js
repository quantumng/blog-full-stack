const Router = require('koa-router')
const router = new Router()
const blog = require('./blog')

router.use('/', blog)

module.exports = router.routes()