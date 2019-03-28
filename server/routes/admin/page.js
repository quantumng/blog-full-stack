const Router = require('koa-router')
const router = new Router()

router.get('/list', async(ctx) => {
  ctx.body = '文章列表'
})

router.get('/:id', async(ctx) => {

})

router.post('/save', async(ctx) => {

})

router.post('/edit', async(ctx) => {

})

module.exports = router.routes()