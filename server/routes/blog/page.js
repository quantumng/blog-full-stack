const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

router.post('/list', async(ctx) => {
  try {
    const { id, page, size } = ctx.request.body
    const category = id || null
    const currentPage = page || 1
    const pageSize = size || 5

    const Page = mongoose.model('Page')
    let pageData = []
    if (id) {
      pageData = await Page.find({isDelete: false, category: id}).sort({'_id': -1}).populate('author').populate('category').populate('comment')
    } else {
      const skipCount = (page - 1) * pageSize
      pageData = await Page.find({isDelete: false}).sort({'_id': -1}).skip(skipCount).limit(pageSize).populate('author').populate('category').populate('comment')
    }
    
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
    const Page = mongoose.model('Page')
    const pageData = await Page.findOne({_id: id}).populate('author').populate('category').populate('comment')
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