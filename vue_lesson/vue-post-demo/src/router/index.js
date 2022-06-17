import VueRouter from "vue-router";
import Vue from "vue";
import HomeView from "../views/HomeView.vue"
import TopicList from "../views/TopicList.vue"
import TopicDetail from "../views/TopicDetail.vue"
import OtherView from "../views/OtherView.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/other',
    component: OtherView
  },
  {
    path: '/',
    component: HomeView,
    children: [
      {
        path: '',
        component: TopicList
      },
      //  /ask  /job
      {
        path: ':tab',
        component: TopicList,
        props: true
      }
    ]
  },
  {
    // /topic/xjygdgfash1213123
    path: '/topic/:id',
    component: TopicDetail,
    props: true,
    // 当 path 很长的时候 使用 name 跳转比较方便
    name: 'topic'
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

// 思考路由跳转拦截

export default router

