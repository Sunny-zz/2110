// 路由

import VueRouter from "vue-router";
import Vue from "vue";
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/main/HomeView.vue'
import MainView from '../views/MainView.vue'
// import AboutView from '../views/AboutView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: MainView,
    children: [
      {
        path: '',
        component: HomeView
      },
      {
        path: 'about',
        component: () => import('../views/main/AboutView.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router