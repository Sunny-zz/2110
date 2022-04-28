const x = require('./about')
const $ = require('jquery')
// require 
// 导入获取到 对应模块的导出
// 导入的同时会执行模块的代码
// 模块的导入方式
// 1. 核心模块以及第三方模块直接 require('模块名')
// 2. 自定义模块导入路径  可以省略 js 后缀
console.log(x)
$('.btn').click(function () {
  $('h1').css('color', 'red')
})