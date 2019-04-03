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

router.post('/add', async (ctx, next) => {
  const Page = mongoose.model('Page')
  try {
    const pageData = ctx.request.body
    const data = await Page.insertMany(pageData)
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

router.post('/delete', async (ctx, next) => {
  try {
    const { id } = ctx.request.query
    const page = mongoose.model('Page')
    let data = await page.findById(id)
    console.log('deletedata', data)
    if (data.isDelete) {
      await page.findByIdAndDelete(id)
    } else {
      await page.findByIdAndUpdate(id, { isDelete: true })
    }
    ctx.body = {
      status: 200,
      result: true,
      message: 'ok'
    }
  } catch (err) {
    console.log(err)
    ctx.status = 500
    ctx.body = {
      status: 500,
      result: false,
      message: '删除失败'
    }
  }
})

module.exports = router.routes()