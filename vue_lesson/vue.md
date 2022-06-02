## Vue 
Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。
目前流行的框架  vue  react  小程序  

### 搭建 vue 开发环境
- 安装 node
- 安装 vue-cli (官方推荐的搭建vue项目开发环境的工具 当前版本是 5.0.4)  `npm i -g @vue/cli`, 安装好了之后 vue 命令就可以使用了。

### 利用 vuecli 工具搭建开发环境
  1. 使用 vue ui 命令调出 创建开发环境的图形化界面工具(vue 项目管理器)， 前提是 vuecli 的版本是 3+ 
  2. 使用 vue 命令直接在命令行搭建项目。创建命令 `vue create 项目名`

### 如何运行项目
  - 如果是使用 vue-cli 官方脚手架创建的项目环境，那么 package.json 的 scripts 字段没有被修改的话，项目启动命令是 `npm rum serve`, 也可以使用 vue ui 启动可视化工具来启动项目，前提是 vuecli 版本是 3+
  - 不知道是怎么搭建的环境，直接去 package.json 找 scripts 字段，一般 serve 或者 start 命令就是启动项目命令。需要使用 `npm run 命令` 启动。

### vue-cli 创建的项目的项目构成
- README.md 项目的说明文档，创建时自带的
- package.json 和 package-lock.json  node 项目的标志 ， 着重看 package.json 中的 scripts 字段
- .gitignore 当你的项目是 git 仓库时，忽略上传的文件和文件夹都写在 .ignore 内
- babel.config.js 是 js 编译(就是高版本的 js 编译成低版本的， 比如 es6 + 编译成 es5)的配置。
- jsconfig.js 项目的 js 的配置文件。
- vue.config.js vuecli 的配置文件。
- node_modules node 项目包存放的地方
- public 项目的首页模版页面
- src 开发源代码, 开发的主要工作。

### 单页面应用（SPA）
现在的框架基本上搭建出来的页面都是单页面应用(可以做多页应用).整个项目只有一个页面，利用框架的路由功能实现多页效果。

### src 文件夹
项目开发主要就在这个文件夹内。
- main.js 项目的入口文件。是 webpack 打包的文件。
- App.vue 组件。vue 项目中都是以组件为基础组成页面，一个组件就是页面中的一部分结构(包括 html css js)。
- components 其他组件
- assets 放图片 css 字体等资源

### 组件
.vue 后缀的就是组件，有三部分构成 template  script  style
template 只能有一个子级，里面可以嵌入 vue 语法

script 需要默认导出一个对象，对象内需要严格遵守 vue 语法, 一般导出的对象内需要写一个 name 属性，属性的属性值是组件名字符串，其实可以不写，对象内如果不需要添加任何内容可以省略 script 标签

style 就是样式 但是样式是全局的(可能和其他组件的样式冲突),

组件名 两种命名方式
1. 首字母大写 大驼峰方式  比如  HelloWorld.vue  ShoppingCart.vue
2. 烤串方式  比如 hello-world.vue

组件如何划分？

### 组件的嵌套（父组件中如何展示子组件）
- 在父组件中的 script 内导入需要使用的子组件(默认导入即可，导入的名字跟组件名一致)

- 在 script 默认导出的对象内，的 components 属性(该属性的属性值是一个对象)内注册子组件。就是写个属性属性值是组件(导入的那个)，属性名和组件名一致。

- 在 template 内使用 components 内注册好的属性名当成标签直接使用


### 组件的复用之 prop
当我们有些组件大部分一样，个别地方不一样，那么我们就需要针对个别的地方使用 prop 。
prop 就是一个组件标签的属性,作用是可以让父组件提供内容给子组件，让子组件更方便复用。 比如替换图片文字等

组件的 prop 是只读的，不能被修改。如果想要修改的话，需要让父组件提供修改的方法，然后子组件调用这个方法


### 模板语法
其实就是 js 怎么在 template 中使用， 使用的时候必须是一个值

使用方式
- {{}}
  当你想要将 js 写在开始闭合标签之间的时候使用例如 `<span>{{js内容}}<span>`

- 指令
  v-bind 指令， 当你想要在属性值中使用 js 的话需要使用该指令. 例如 `<img v-bind:src='js内容' />`
  指令可以简写成 :

哪些 js 内容可以直接使用？
1. 组件接收的 prop 
使用的时候将本地(项目文件夹内的)图片当做 prop 写成路径使用的时候，vuecli 环境是无法解析的。只能解析原本 html 或者 css 原来自带的。那么需要使用网图或者将图片当作模块导入进来, 然后制作成 data 再使用。 导入的图片是可以被解析使用的

2. 组件的 data 


### 组件的 data
当页面的内容需要发生改变的时候(按照以前的说法要使用 js 控制页面变化的时候)，vue 中需要将这个变化的值定义为 data，并且将这个 data 绑定到 template 中，在 script 直接修改 这个 data 页面自动回响应 data 的变化，从而更新页面内容

data变页面变  |  页面的变化必须由 data 控制

data 可以直接在 template 中使用

如何使用 获取 data 
1. 在 tempalte 中直接使用模板语法就可以使用 data
2. 在 script 中使用 this.data名 可以获取 data

如何修改 data
直接使用 `this.data名 = 新的值`  即可

### 组件中的 this
组件中的 this 指的就是组件实例，就是组件本身。

当函数内想要使用 this 表示组件本身的话，最外层函数需要写成普通函数，嵌套的内层函数需要写成箭头函数,或者在外层函数内定义变量存储 this 再拿到内层使用

通过 this 可以访问 data  props  methods computed 等


### 事件处理
vue 中的事件绑定有点像原生的 行内事件绑定
在 vue 中 使用 v-on 指令绑定事件 例如
```html
<button v-on:click='事件名' >按钮</button>
```
v-on: 可以简写成 @

事件需要定义在 script 导出的对象下的 methods 属性内，methods 属性的属性值是一个对象，该对象下的方法就是可以当做事件函数

```js
export default {
  methods: {
    myClick(){
      console.log('啊哈哈哈哈哈')
    }
  }
}
```

事件的其他绑定方式
- 直接将事件需要的操作(一般只有一句就是修改 data)写在 template 中
- 将函数调用写在事件内 一般传递参数的时候才这样写

如何获取事件对象 event
- 普通的事件绑定 @click='函数名' 在函数内 直接设置参数第一个参数 就是事件对象

- 直接写操作的话， 操作内直接使用 $event 表示事件对象

- 写成函数调用的话 需要将参数 $event 在函数调用的时候传递

事件修饰符
- .stop  阻止事件冒泡
- .prevent 阻止默认行为
- .capture  用的少 
- .self  当点击的那个真正的元素绑定了事件的话才会触发
- .once  只触发一次
- .passive 

按键修饰符

### class 与 style 绑定
vue 中提供了 class 与 style 的其他写法
style 绑定
- 对象语法  就是将 style 的值写成对象，对象的属性名就是样式名，属性值就是样式的值。

- 数组语法  就是将 style 的值写成数组，数组内写对象  [对象,对象] 用的很少


class 绑定
- 对象语法 就是将 class 的值写成对象，对象的属性名就是class 名，属性值是 true class 就生效

- 数组语法 就是将 class 的值写成数组，数组的一项就是 class 名，默认直接生效.当数组的一项是 '' 的时候，什么class 都没有

- 数组对象语法 上面两个语法的组合  数组内可以使用对象语法

- 用在组件上 在父组件使用子组件的时候 传递 class 属性，这个 class 会被绑定到子组件的根元素身上，并不会覆盖原来的 class


### 条件渲染
就是元素的消失和出现
两个指令的值都是布尔值，填写别的值会自动转化成布尔值，转化方式就是 Boolean
1. 样式的消失和出现 使用 v-show 指令实现

2. 结构的消失和出现 使用 v-if 指令实现
v-else v-else-if

v-show 和 v-if 的区别
v-show 用于切换次数较多的功能，并且 v-show 的元素上来无论是什么状态都会渲染出来
v-if 用于切换次数较少的功能，并且初始状态为 false 的话，那么不会渲染任何元素在浏览器中


v-if 可以在 template 标签上使用, 也可以直接在组件标签上使用
v-show 也可以在组件标签上

### 列表渲染
主要作用就是将数组数据的内容展示到页面
使用 v-for 指令完成数组内容的展示, 也可以循环对象


### 表单的输入绑定
vue 中用户在表单中输入内容也认为是页面发生改变，那么这个改变就需要使用 data 去控制。

input:text 以及 textarea 的数据绑定  

### 自定义事件( 特殊的 props)
就是当你想要给子组件传递方法(函数)的时候，可以使用 自定义事件方式向下传递
父组件写法 
<ChlidComponent @xx='父组件的函数' />
子组件写法  相当于接收并调用
$emit('xx', 参数)  

给子组件的根元素绑定原生事件  .native 修饰符   <ChlidComponent @click.native='父组件的函数' />

.sync 修饰符  当子组件想要使用和修改(赋值修改)父组件的 data 时， 使用 .sync 简化




### vue 中的各种数据在 tempalte 中 和 script 如何使用
数据包括 data   props  methods  
在 tempalte 中直接使用其名字即可

在 script 中需要使用 this.名字 获取。需要注意 this 的指向


### vue 组件的生命周期
每一个组件的创建过程都需要经过一系列的初始化，比如  数据的监听  模板的编辑   dom 渲染   数据变化dom更新...,在这些过程中会自动触发一些生命周期函数，开发者可以在这些函数内添加自己的代码。
其实就是组件从创建到页面展示到消失这些阶段会有一些生命周期函数触发。
所有的生命周期函数都是同步的

初始渲染
- beforeCreate
- created    组件的 data 已经处理完毕，可以被修改了
- beforeMount 
- mounted    组件初始渲染完毕，已经展示到页面上了。在这可以获取原生的真实 dom


更新 (data 的变化)
- beforeUpdate 开始变化
- updated 变化完毕(data 修改完毕，并且页面更新渲染完毕)，可以获取更新后的 真实 dom

卸载 (组件真正消失)
比如给组件的标签写 v-if,  组件的 v-for 删除一项的时候
- beforeDestory
- destory


### vue 组件间的交互
父组件传递数据给子组件：  props   自定义事件    插槽    
子组件传数据给父组件：借助函数(父组件传递的)参数向父组件传值
兄弟组件： 跟父组件交互间接实现兄弟组件之间的交互         （子组件的数据放到父组件中）


### ref
ref 用来获取标签的真实 dom， 还可以设置在组件上，用于获取组件

### 插槽
当父组件想要展示各种各样的标签内容给子组件，那么就需要使用 插槽 来实现。

## 组件注册
如何全局注册组件

## 处理边界情况



## vue 路由   vue-router
在 vue 项目的单页面(spa)应用中,需要使用路由功能来实现多页面的效果。官方提供了 vue-router 插件来实现。

### 安装
- 使用 vue ui 创建项目的时候，可以手动选择配置添加上 vue-router。 也可以直接找到插件 vue-router 选择安装。这种方式会修改项目代码，自动添加 vue-router 小案例，适合在初始化项目的时候使用。

- 使用命令行直接安装 vue-router 包 `npm i vue-router` ,需要添加路由的使用在项目中。


### 使用
1. 创建路由页面(并不是创建整个项目的所有页面)， 也就是创建页面组件， 一般选择在根目录新建  views 文件夹 存放页面组件
2. 在 src 新建 router 文件夹， 文件夹内新建 index.js  用于存放 路由 配置代码,创建路由
   - 导入路由 类 `import VueRouter from 'vue-router'`, 以及导入 Vue 
   - 使用 Vue.use(VueRouter) 将 VueRouter 内置的组件制作成全局的
   - 创建路由数组，是由页面路由对象组成
   - 创建路由实例(初始化路由)  new VueRouter({配置}) 并导出
   - 在 main.js 导入创建好的路由,并且添加到 new Vue 配置中
3. 找到需要展示路由组件的组件，使用 router-view 组件展示路由

### router-link 组件
- to
- active-class  
  页面地址和 router-link 的 to 匹配的时候， 会添加的 class。 默认值是 router-link-active， 匹配默认是包含匹配
- exact-active-class 
  页面地址和 router-link 的 to 完全相等给的时候 会添加的 class。默认值是 router-link-exact-active