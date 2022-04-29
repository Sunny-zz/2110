let a = 100
let b = 200
const add = (num1, num2) => num1 + num2 

// es6 模块导出
// 1. 命名导出  export  {}
// 命名导出可以使用多次
export {a,b}
// export {add}

// 2. 默认导出  export default 值
// 默认导出只能导出一次, 可以和命名导出一起使用
export default add 