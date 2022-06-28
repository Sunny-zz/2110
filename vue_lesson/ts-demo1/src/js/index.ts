// typescript
import { User } from './about'

// 基础类型 
// 布尔  数字  字符串  数组  元组  枚举  any  never void null undefined object

// 布尔
let bool: boolean = true
// 数字  :Number
let num: number = 100
// 字符串 :Sring 
let str: string = 'hello'

// 数组 
let numArr: Array<number> = [1, 2, 3]

let numArr1 = [1, 2, 3]

// 元组
let arr: [number, string] = [1, '2']

// 枚举  特殊的对象
enum Color { Red, Green, Blue }
console.log(Color)


// any 任意类型
// any 类型可以被赋值成任意类型
// 任意类型可以被赋值成any
let a: any = '9i90'

let b: number = 123
b = a
console.log(b)

// Null 和 Undefined  Never

// void  函数的返回值类型


// 对象类型的定义 
// 1. 接口
// 2. 类
let user: User = {
  username: 'vue',
  userage: 10
}

// user.username = '7y8u8'  不可修改

user.hobby = '篮球'
user.hobby1 = '篮1球'

console.log(user)

// 联合类型
let val: number | string | boolean = true

// 类型别名  type

type sOrn = string | number

let str1: sOrn = 1223

// 函数类型  (需要声明 参数和返回值类型， 以及函数类型)
//  void 是函数的返回值类型  无返回值写成 void
// function fun(a, b) {
//   return a + b
// }
const fun: (a: number, b: number) => void = function (a: number, b: number): void {
  console.log(a + b)
}

// 函数可选参数 参数默认值  剩余参数

const fn = (time: string = '默认时间', type?: string, ...rest: number[]) => '格式化的时间'

// fn('时间', '类型', '12', '34')


// 类型推论

let sale = 1000
// 类型推论 会自动根据初始值推论类型
// sale = 'hello'

const fun1 = function (a: number, b: number) {
  console.log(a + b)
}


// 类
class Cat {
  // 成员变量
  name: string
  age: number
  // !: 确定赋值断言 
  number!: number

  // 静态属性 无法被外面访问  只能通过类本身(Cat)去访问
  static sayText = '喵喵'

  // 构造函数  给成员变量赋值
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  // 成员方法
  say() {
    console.log(Cat.sayText)
  }

  // 静态方法
  static getName() {
    return this.name
  }

  // get 方法
  // set 方法
}

// const cat = new Cat('大白', 2)
// // console.log(cat)
// cat.say()
// cat.number = 12321

class LitteleCat extends Cat {
  constructor(name: string, age: number) {
    super(name, age)
  }
}

const littleCat = new LitteleCat('小花', 2)
littleCat.number = 400
console.log(littleCat)

// 断言
// 类型断言  非空断言  确定赋值断言 

// 类型断言
let x: any = '100'
// x 是任意类型  length 属性是 字符串或者数组的属性  如果直接对 any 的值使用 length 可能会报错
// 我们可以 断言 x 的类型是 string 类型
// let xx: number = (<string>x).length
let xx: number = (x as string).length
console.log(xx)

// 非空断言

const func = (name: string | null | undefined) => {
  // 传递了 null 或者 undefined 也是有值的意思
  const str: string = name!
  console.log(str)
}

func(null)

// 确定赋值断言


// 泛型

const xxx = <T>(data: T): T[] => {
  const list: T[] = []
  for (let i = 0; i < 3; i++) {
    list.push(data)
  }
  return list
}

// 上述函数接收任意类型 返回的数组内也是任意类型
// 我想当我传递给函数 数字的时候 期望返回值是 数字数组

const res = xxx('1111')
const num5 = res[res.length - 1]
