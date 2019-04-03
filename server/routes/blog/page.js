const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

router.post('/list', async(ctx) => {
  try {
    let currentPage = 0
    const { id, page } = ctx.request.body
    console.log(ctx.request.body)
    const Page = mongoose.model('Page')
    let pageData = []
    if (id) {
      pageData = await Page.find({isDelete: false, category: id}).sort({'_id': -1}).populate('author').populate('category').populate('comment')
      // console.log('idpage', pageData)
    } else {
      if (page) currentPage = page
      const skipCount = Number(currentPage) * 5
      console.log(skipCount)
      pageData = await Page.find({isDelete: false}).sort({'_id': -1}).skip(skipCount).limit(5).populate('author').populate('category').populate('comment')
      console.log('nopage', pageData)
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
    // console.log(id)
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