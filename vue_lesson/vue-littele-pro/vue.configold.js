const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.vue-js.com/api/v1',
        // target: 'https://www.vue-js.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
// 遇到 /api 开头的请求就会拦截
// 将 target 拼接到请求地址前面 然后发请求
// 如果写了  pathRewrite 的话 会将 开头的那个 /api 重写
