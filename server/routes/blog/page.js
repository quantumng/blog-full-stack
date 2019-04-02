const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

router.get('/list', async(ctx) => {
  try {
    const { isDelete } = ctx.request.query
    const Page = mongoose.model('Page')
    const pageData = await Page.find({isDelete}).populate('author').populate('category').populate('comment')
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
  console.log('666666')
  try {
    const { id } = ctx.request.query
    console.log(id)
    const Page = mongoose.model('Page')
    const pageData = await Page.findOne({_id: id})
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

module.exports = router.routes()