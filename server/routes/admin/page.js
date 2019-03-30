const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

router.get('/list', async(ctx) => {
  try {
    const Page = mongoose.model('Page')
    const pageData = await Page.find({}).populate('author').populate('category').populate('comment')
    console.log('pageData', pageData)
    ctx.body = {
      status: 200,
      result: pageData,
      message: 'ok'
    }
  } catch(err) {
    console.log(err)
    ctx.status = 500
    ctx.status = {
      status: 500,
      result: false,
      message: '获取列表数据失败'
    }
  }
})

router.get('/', async(ctx) => {
  try {
    const { id } = ctx.request.query
    console.log(id)
    const Page = mongoose.model('Page')
    const pageData = await Page.findOne({_id: id})
    console.log('pageData', pageData)
    ctx.body = {
      status: 200,
      result: pageData,
      message: 'ok'
    }
  } catch(err) {
    console.log(err)
    ctx.status = 500
    ctx.status = {
      status: 500,
      result: false,
      message: '获取文章数据失败'
    }
  }
})

router.post('/add', async (ctx, next) => {
  const Page = mongoose.model('Page')
  try {
    const pageData = ctx.request.body
    const data = await Page.insertMany(pageData)
    console.log('pagedata', data)
    ctx.body = {
      status: 200,
      result: data[0]['_id'],
      message: 'ok'
    }
  } catch (err) {
    console.log(err)
    ctx.status = 500
    ctx.status = {
      status: 500,
      result: false,
      message: '保存失败'
    }
  }
})

router.post('/update', async(ctx) => {
  try {
    const pageData = ctx.request.body
    const Page = mongoose.model('Page')
    const { id, ...pageInfo } = pageData
    await Page.findByIdAndUpdate(id, pageInfo)
    ctx.body = {
      status: 200,
      result: true,
      message: 'ok'
    }
  } catch(err) {
    console.log(err)
    ctx.status = 500
    ctx.status = {
      status: 500,
      result: false,
      message: '保存失败'
    }
  }
})

module.exports = router.routes()