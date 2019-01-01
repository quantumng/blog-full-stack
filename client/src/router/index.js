import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/main'
import PageList from '@/views/page/page-list'
import PageEdit from '@/views/page/page-edit'

Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'index',
    component: Main,
    children: [
      {
        path: 'page',
        name: 'PageList',
        component: PageList
      },
      {
        path: 'page/edit',
        name: 'PageEdit',
        component: PageEdit
      }
    ]
  }
]
const router = new Router({
  routes
})
router.beforeEach((to, from, next) => {
  next()
})

export default router
