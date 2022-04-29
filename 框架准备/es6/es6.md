## javascript 历史
ECMAScript   es3   es5   es6(新js 下一代的js)   es7  8  9  10  11  12

## es6 

### let 和 const

### 变量的解构赋值


### 模板字符串

### Math 方法扩展
.trunc 方法

### 数据类型 BigInt

### 函数的扩展
- 函数参数默认值
- 箭头函数
- rest 剩余参数

### 数组的扩展
- 扩展运算符

### 对象的扩展
- 对象的简洁表示  **
- 对象的属性名表达式
- 对象的可枚举和遍历
- 对象的扩展运算符 **

### 运算符的扩展
- 链判断运算符   ?.
- null 判断运算符  ??

### Symbol 

### Set

### Map

### class

### Promise 

### module
es6 模块默认采用严格模式
javascript 严格模式
进入严格模式使用  'use strict'
- 变量必须声明后再使用
- 函数的参数不能有同名属性，否则报错
- 不能使用with语句
- 不能对只读属性赋值，否则报错
- 不能使用前缀 0 表示八进制数，否则报错
- 不能删除不可删除的属性，否则报错
- 不能删除变量delete prop，会报错，只能删除属性delete global[prop]
- eval不会在它的外层作用域引入变量
- eval和arguments不能被重新赋值
- arguments不会自动反映函数参数的变化
- 不能使用arguments.callee
- 不能使用arguments.caller
- 禁止this指向全局对象
- 不能使用fn.caller和fn.arguments获取函数调用的堆栈
- 增加了保留字（比如protected、static和interface）

es6 模块分为两种  第三方  自定义

#### 模块语法
- 导入

- 导出