const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

router.get('/', async(ctx) => {
  const Category = mongoose.model('Category')
  const Page = mongoose.model('Page')
  let category = await Category.find({})
  const page = 1
  const pageSize = 5
  const skipCount = (page - 1) * pageSize
  let pageData = await Page.find({isDelete: false}).sort({'_id': -1}).skip(skipCount).limit(pageSize).populate('author').populate('category').populate('comment')
  await ctx.render('index', { category, pageData })
})

router.post('/list', async (ctx, next) => {
  let { page, size } = ctx.request.body
  const Page = mongoose.model('Page')
  let pageData = []
  if (page && size) {
    page = parseInt(page)
    size = parseInt(size)
  }
  const skipCount = (page - 1) * size
  pageData = await Page.find({isDelete: false}).sort({'_id': -1}).skip(skipCount).limit(size).populate('author').populate('category').populate('comment')
  await ctx.render('page-item', { pageData })
})

router.get('/category/:alias', async(ctx) => {
  const { alias } = ctx.params
  const aliasStr = alias.split('.')[0]
  console.log('category', aliasStr)
  const Page = mongoose.model('Page')
  const Category = mongoose.model('Category')
  let categoryQuery = Category.find({})
  let category = await categoryQuery.exec()
  let currentCate = await categoryQuery.findOne({'alias': aliasStr})
  console.log('category', category)
  let pageData = await Page.find({isDelete: false, category: currentCate['_id'] }).sort({'_id': -1}).populate('author').populate('category').populate('comment')
  console.log('pageList', pageData)
  await ctx.render('category', { category, pageData })
})

router.get('/page/:alias', async (ctx) => {
  const { alias } = ctx.params
  const aliasStr = alias.split('.')[0]
  console.log('category', aliasStr)
  const Page = mongoose.model('Page')
  let page = await Page.findOne({'alias': aliasStr}).populate('author').populate('category').populate('comment')
  ctx.render('detail', { page })
})

module.exports = router.routes()