const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

router.get('/overview', async(ctx) => {
  const Category = mongoose.model('Category')
  const Page = mongoose.model('Page')
  const User = mongoose.model('User')
  let category = await Category.find({}).select('name pages _id')
  let user = await User.find({}).select('nickname username _id')
  let page = await Page.find({}).select('createAt comment title _id author category')
  // console.log(category)
  ctx.body = {
    status: 200,
    result: { page, category, user },
    message: 'ok'
  }
})

module.exports = router.routes()