import VueRouter from 'vue-router'
import Vue from 'vue'
import HomeView from '../views/HomeView.vue'
import PostList from '../views/PostList.vue'
// import AboutView from '../views/AboutView.vue'
Vue.use(VueRouter)

const routes = [

  {
    path: '/about',
    // 懒加载 只有在匹配到当前页面时候 才会导入 AboutView   利用的是 import 方法的导入
    component: () => import('../views/AboutView')
  },

  // 路由对象  每一个路由就是一个页面
  // 一般有两个属性
  // 1. path  页面地址   / 表示的是服务器根地址
  // 2. component  页面组件
  {
    path: '/',
    component: HomeView,
    children: [
      // 当父路由有默认匹配 也就是地址和父路由完全相同的时候，需要展示一个子路由，此时 path 设置成 '' 就是默认展示的子路由
      {
        path: '',
        component: PostList
      },
      {
        // 子路由地址最前面不需要写  / 
        // 要设置成动态路由 因为多个地址展示一个页面组件
        // path 内有变量
        path: ':type',   // type 就是一个变量  当地址是 localhost:8080/x 的时候那么 type 就是 x,传递的 type 并不是想要的话，需要在组件内判断
        component: PostList
      }
    ]
  },
  // 因为子路由 :type  跟  /about 路由冲突了， 所以要将 about 提前
  
]

// 页面地址会在 routes 路由数组中 path 去匹配对应的页面组件  匹配机制是完全相等, 而且是从上至下，匹配一个就结束


// 创建路由实例，初始化路由
// 一般添加 两三个配置
// 1. routes  必填项，将路由数组制作成对应的页面
// 2. mode  路由模式  有 hash  和 history 区别是跳转页面的时候前者使用 锚点跳转， 后者模拟 浏览器历史记录跳转，前者地址栏会多个 #，后者没有。  默认值是 hash
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router