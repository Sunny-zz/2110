import VueRouter from 'vue-router'
import Vue from 'vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import MainView from '../views/MainView.vue'
import TopicsView from '../views/TopicsView.vue'
import TopicView from '../views/TopicView.vue'
import UserView from '../views/UserView.vue'
import NotFound from '../views/NotFound.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/',
    component: MainView,
    children: [
      {
        path: '/notfound',
        component: NotFound
      },
      {
        path: '',
        component: HomeView,
        children: [
          {
            path: '',
            name: 'home',
            component: TopicsView
          },
          {
            path: ':tab',
            name: 'topics',
            props: true,
            component: TopicsView
          }
        ]
      },
      {
        path: '/topic/:id',
        props: true,
        name: 'topic',
        component: TopicView
      },
      {
        path: '/user/:loginname',
        props: true,
        name: 'user',
        component: UserView
      },
      
    ]
  }
  
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

// 路由导航守卫

export default router