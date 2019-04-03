const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

router.get('/list', async(ctx) => {
  const Category = mongoose.model('Category')
  let category = await Category.find()
  ctx.body = {
    status: 200,
    result: category,
    message: 'ok'
  }
})

module.exports = router.routes()