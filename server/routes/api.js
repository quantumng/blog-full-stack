const Router = require('koa-router')
const router = new Router()
const admin = require('./admin')
const mobile = require('./mobile')

router.use('/admin', admin)
router.use('/mobile', mobile)

module.exports = router.routes()