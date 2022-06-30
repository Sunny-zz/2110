import { createApp } from 'vue'
import App from './App.vue'

import { ElButton } from 'element-plus'

const app = createApp(App)

app.use(ElButton)
app.config.globalProperties.$axios = 'http'
// app.config.globalProperties   ----  Vue.prototype

app.mount('#app')
// app.directive






// 如果 vue ui 无法安装 vue3 
// 或者 vue create 依然无法安装 vue3
// 降级 node 版本为 12

// 找现成的环境下载下来装包启动

