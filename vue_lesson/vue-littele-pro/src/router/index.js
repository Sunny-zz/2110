import VueRouter from 'vue-router'
import Vue from 'vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import MainView from '../views/MainView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainView,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// 路由导航守卫

export default router