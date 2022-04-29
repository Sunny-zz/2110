// es6 模块
// es6 模块导入
// 1. 命名导入   对应命名导出   
// import {a,b} from '包名|路径'   {a,b} 名字必须和导出的一致 可以使用 as 换名字 {a as x, b}  
// 导入的时候可以使用* 一次性将所有导出都获取到
// import {a as x, b, add} from './about'
// console.log(x,b)
// const res = add(x,b)
// console.log(res)

// import * as test from './about'
// test 就是一个对象   里面包括所有导出的内容
// {a: 100, b: 200, add: (num1, num2)=> num1 + num2 }
// console.log(test)

// 2. 默认导入
// import x from './about'   x 可以换成任意的名字导入的是默认导出的内容
// import x from './about'  
// import {a,b} from './about'
import x, {a,b} from './about'
console.log(x)
console.log(a, b)

// import * as test from './about'  
// test 是导出的所有内容组成的对象，默认导出的话属性名是 default 
// test -->  {a: 100, b: 200, default: (m,n)=> m+n}
// console.log(test.a)
// console.log(test.b)
// console.log(test.default)

// 所有的导入都必须写在文件的顶端

// import()
// 默认的导入必须写在模块顶端，当需要写在一些语句中，可以使用 import 方法
// import 方法返回的是一个 promise ，promise 的 then 方法内参数是模块的整个导出
if(a < b ){
  import('./test').then(module => {
    // module 就相当于使用 * as module 导入了整个 test.js 的导出
    console.log(module)
  })
}