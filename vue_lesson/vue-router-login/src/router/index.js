// 路由

import VueRouter from "vue-router";
import Vue from "vue";
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/main/HomeView.vue'
import MainView from '../views/MainView.vue'
import PostList from '../views/main/PostList.vue'
// import AboutView from '../views/AboutView.vue'
Vue.use(VueRouter)

const routes = [
  // 路由独享守卫， 写在路由对象内的守卫  beforeEnter
  {
    path: '/login',
    component: LoginView,
    // beforeEnter:(to, from ,next) => {
    //   console.log(to)
    //   next()
    // }
  },
  {
    path: '/',
    component: MainView,
    children: [
      // 重定向，访问 about 重定向到 new
      {
        path: 'about',
        redirect: 'new'
      },
      {
        path: 'new',
        // 别名
        alias: 'xin',
        component: () => import('../views/main/AboutView.vue')
      },
      {
        path: '',
        component: HomeView,
        children: [
          {
            path: '',
            component: PostList
          },
          {
            path: ':type',
            component: PostList
          }
        ]
      },

    ]
  }
]




const router = new VueRouter({
  routes,
  mode: 'history'
})


// 全局导航守卫 写在创建路由实例之后
// 守卫其实就是当路由跳转的时候会自动执行的一些钩子
// 1. 全局前置守卫    beforeEach   当所有地址跳转的时候都会触发 跳转前触发 全局前置守卫
// 在函数内必须使用 next 放行，否则无法跳转
router.beforeEach((to, from, next) => {
  // to 要去的地址
  // from 来源地址 
  // next 通行方法
  // 例如  /login  --->   /      to就是  /  from 就是 /login
  // console.log(to)
  // console.log(from)
  if (to.path === '/login' || sessionStorage.getItem('user')) {
    next()
  } else {
    next('/login')
  }
})


// 2. 全局解析守卫 beforeResolve  就是将前置守卫换个名字    执行时机比 前置守卫稍后一点 跳转前触发

// 3. 全局后置钩子 afterEach  不接受 next 函数也不会改变导航本身



export default router