const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

router.get('/list', async(ctx) => {
  const Category = mongoose.model('Category')
  let category = await Category.find()
  console.log(category)
  ctx.body = category
})

router.get('/', async(ctx) => {
  const Category = mongoose.model('Category')
  const { id } = ctx.request.query
  let data = await Category.findById(id, {alias: 1, desc: 1, name: 1, _id: 1})
  ctx.body = {
    status: 200,
    result: data,
    message: 'ok'
  }
})

router.post('/add', async(ctx) => {
  const params = ctx.request.body
  const Category = mongoose.model('Category')
  await Category.insertMany(params)
  ctx.body = true
})

router.post('/update', async (ctx) => {
  const Category = mongoose.model('Category')
  try {
    const { _id, ...data } = ctx.request.body
    console.log(data)
    await Category.findByIdAndUpdate(_id, data)
    ctx.body = {
      status: 200,
      result: true,
      message: '更新成功'
    }
  } catch (err) {
    console.log(err)
    ctx.status = 500
    ctx.body = {
      status: 500,
      result: false,
      message: '更新失败'
    }
  }
})

router.post('/delete', async (ctx, next) => {
  const Category = mongoose.model('Category')
  try {
    const { id } = ctx.request.query
    await Category.findByIdAndDelete(id)
    ctx.body = {
      status: 200,
      result: true,
      message: '删除成功'
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