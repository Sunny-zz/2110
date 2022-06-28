// typescript
// 基础类型 
// 布尔  数字  字符串  数组  元组  枚举  any  never void null undefined object
// 布尔
var bool = true;
// 数字  :Number
var num = 100;
// 字符串 :Sring 
var str = 'hello';
// 数组 
var numArr = [1, 2, 3];
var numArr1 = [1, 2, 3];
// 元组
var arr = [1, '2'];
// 枚举  特殊的对象
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color.Green);
// any 任意类型
var a = '9i90';
var b = 123;
b = a;
console.log(b);
