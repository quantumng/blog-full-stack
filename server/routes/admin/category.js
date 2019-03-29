const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

router.get('/list', async(ctx) => {
  const Category = mongoose.model('Category')
  let category = await Category.find()
  console.log(category)
  ctx.body = category
})

router.get('/:id', async(ctx) => {

})

router.post('/add', async(ctx) => {
  const params = ctx.request.body
  const Category = mongoose.model('Category')
  await Category.insertMany(params)
  ctx.body = true
})

router.post('/update', async(ctx) => {

})
router.post('/delete'), async (ctx) => {

}

module.exports = router.routes()