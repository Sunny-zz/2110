## node
Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时. 有了 node 就可以使用 js 写后端了。
node 其实相当于偏后端的内容，作为前端的我们使用的其实是 node 的 npm 工具

## npm 
node 安装完毕之后就自带了 npm 工具
node package manager    node 的包管理工具 
node 的包(node 的插件)，不仅包括后端包，也包括几乎所有前端的包。

与 npm 类似的  yarn   pnpm

## 使用
- 将项目制作成 npm 项目 进入项目 执行 `npm init -y`,项目内会生成一个 package.json 文件， 该文件就是 npm 帮助你管理项目以依赖的文件
- 想要使用依赖必须使用 npm 下载，这样才能帮助你管理。 打开命令行工具 执行 `npm i jquery`, 下载 jquery 到你的项目


## 如何下载包
- `npm install(i) 包名 -g` 全局下载一个包，这个下载的包安装在系统内,在电脑的任何地方都可以使用(一般安装的是 node 的开发工具包)
- `npm install(i) 包名 --save(-S)`  下载一个项目必须的包，必须的包只要运行就需要的，在 package.json 的 dependencies 字段可以看到
- `npm install(i) 包名 --save-dev(-D)` 下载一个项目非必须的包，非必须的包一般项目运行就执行一次 在 package.json 的 devDependencies 字段可以看到
- `npm uninstall(uni) 包名 -g(可有可无)` 卸载包 加不加 -g 就是卸不卸载全局的
所有的包名都可以设置版本号 `jquery@2.1.2` 下载对应的版本 版本号可以不写全 会下载当前版本的最高版本 比如 `jquery@3` 3 大版本下的最新稳定版

在 npm 官网可以查询包的各种信息

## 合作
合作的时候就需要知道所有包的版本以及传递对应的包，那么 npm 管理之后，无需传递包文件，直接找到 package.json 里面记录了所有安装过的包，直接执行 `npm i` 就会把所有对应的包全部下载回来

## npm 的设置
- npm 替换镜像来源  替换成淘宝镜像 ,执行如下命令
  ```shell
  npm config set registry https://registry.npm.taobao.org
  ```
- npm 设置 http 响应显示 执行如下命令
  ```shell
  npm config set loglevel=http
  ```

## 前端模块概念
CommonJs、AMD、CMD以及ES6
CommonJs --> node.js
AMD --> require.js
CMD --> sea.js
es6

## node 中的 模块概念
一个 js 就是一个模块，模块拥有作用域，模块可以相互导入
- 核心模块     node 自带的包
- 第三方模块   node 的第三方包
- 自定义模块   自己写 js 文件

## 如何使用 webpack 
- 进入项目打开命令行工具安装webpack 以及 weboack-cli `npm install webpack webpack-cli --save-dev`
- 在项目内新建 src ，src 下写一些模块的语法
- 在项目内打开命令行工具，执行 `npx webpack` 命令
- 执行完毕之后，会生成一个 dist 文件夹，里面有 js 文件
- html 导入 main.js 在运行
npx webpack 执行的是 webpack 的默认行为，包括解析 js 语法，包括模块打捆，然后生成到 dist 下的 main.js, 必须是 src 下的 index.js