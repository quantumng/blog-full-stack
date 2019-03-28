import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/main'
import Login from '../views/login/login.vue'
import PageList from '@/views/page/page-list'
import PageEdit from '@/views/page/page-edit'
import PageRecycle from '@/views/page/page-recycle'
import CategoryList from '@/views/category/category-list'
import CategoryEdit from '@/views/category/category-edit'

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
      },
      {
        path: 'page/recycle',
        name: 'PageRecycle',
        component: PageRecycle
      },
      {
        path: 'category',
        name: 'CategoryList',
        component: CategoryList
      },
      {
        path: 'category/edit',
        name: 'CategoryEdit',
        component: CategoryEdit
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]
const router = new Router({
  routes
})
router.beforeEach((to, from, next) => {
  next()
})

export default router
