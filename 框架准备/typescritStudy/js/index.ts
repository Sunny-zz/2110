// typescript

// 基础类型 
// 布尔  数字  字符串  数组  元组  枚举  any  never void null undefined object

// 布尔
let bool:Boolean = true
// 数字  :Number
let num:Number = 100
// 字符串 :Sring 
let str:String = 'hello'

// 数组 
let numArr:Array<Number> = [1,2,3] 

let numArr1:Number[] = [1,2,3]

// 元组
let arr:[Number, String] = [1, '2']

// 枚举  特殊的对象
enum Color {Red, Green, Blue}
console.log(Color)


// any 任意类型
// any 类型可以被赋值成任意类型
// 任意类型可以被赋值成any
let a:any = '9i90'

let b:Number = 123
b = a
console.log(b)

// Null 和 Undefined  Never

// void  函数的返回值类型

// 对象类型的定义 
// 1. 接口
// 2. 类


