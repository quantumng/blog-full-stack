import Vue from 'vue'
import store from '@/store'
import Router from 'vue-router'
import Main from '@/views/main'
import Login from '../views/login/login.vue'
import Register from '../views/login/register.vue'
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
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]
const router = new Router({
  routes
})
router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  const passRoute = ['login', 'register']
  if (!passRoute.includes(to.name)) {
    const isLogin = store.getters.isLogin
    if (!isLogin) {
      next({name: 'login', query: { url: from.name }})
      return
    }
  }
  next()
})

export default router
