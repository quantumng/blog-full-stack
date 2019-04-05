const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

router.get('/overview', async(ctx) => {
  const Category = mongoose.model('Category')
  const Page = mongoose.model('Page')
  const User = mongoose.model('User')
  const Comment = mongoose.model('Comment')
  let category = await Category.find({}).select('name pages')
  let user = await User.find({}).select('nickname username page').populate('page')
  let page = await Page.find({}).select('creatAt comment').populate('comment')
  let comment = await Comment.find({})
  // console.log(category)
  ctx.body = {
    status: 200,
    result: { page, category, comment, user },
    message: 'ok'
  }
})

module.exports = router.routes()