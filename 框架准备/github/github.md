## 介绍
github 网站是一个代码托管平台。


## github 免费服务器
用户名.github.io 下的 main 分支是服务器
其他仓库下的 gh-pages 分支是服务器


## 实际的托管流程


### 本地没有项目
- github 网上新建一个空仓库并初始化一个 README.md 文件
- 将仓库下载到本地  需要使用 git 软件(安装 gitbash 默认安装好了 git 软件)
  - 找到存储仓库的目录(目录不能是其他的仓库目录  仓库不能嵌套)
  - 在当前目录打开命令行工具
  - 使用 git clone 仓库地址 下载
- 使用编辑器编辑项目（项目开发）
- 新的需求做完了，或者一天的工作完事了等等，需要提交记录(做版本，让 github 记录你的修改) 将本地的修改上传到github
  - 在仓库内打开命令行
  - 执行 `git add .`   .可以替换成你修改的文件名  .的意思是所有修改的文件。 命令的作用是，让远端记录本次的修改内容到远端缓存。
  - 执行 `git commit -m'留言版本信息(就是修改了什么)'` 作用是将缓存内的修改，制作成版本让远端记录
      - 第一次本地和github执行 git commit 命令的时候会失败,因为远端不知道你是谁，按照提示提供用户名和邮箱(一个系统的一个用户只需要提供一次即可)
        ![xx](./images/%E7%AC%AC%E4%B8%80%E6%AC%A1%E6%8F%90%E4%BA%A4.png)
      - 提供邮箱的用户名之后，再次执行 git commit 命令

  - 执行 `git push` 将做好的版本上传到远端 
    - 第一次上传需要输入用户名密码( window10 会弹窗)
      ![xx](./images/%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%B8%8A%E4%BC%A0.png)
    - 授权验证之后命令中就会提示上传成功了，打开github网站刷新自己的仓库，就会看到修改的内容

- 以后再次修改的话直接执行 git 三步上传即可 （git add |  git commit | git push）

### 空的仓库如何上传本地的项目
- 在 github 网站上新建一个空仓库(不要初始化任何文件)，仓库名最好和项目名一直
- 找到本地的项目进入到项目根目录打开命令行
- 执行 `git init` 命令将本地的项目制作成 git 仓库(会生成 .git 文件夹)
- 将本地项目的内容做初始版本提交 (git add  git commit   git push) 参考 github 网站空仓库下的提示
  - git add .
  - git commit -m'11'
  - git branch -M main  修改分支名
  - git remote add origin git@github.com:Sunny-zz/demo.git 给本地仓库添加远端地址命名成 origin
  - git push -u origin main 第一次将本地传到远端的时候需要提供远端地址 origin 以及 main 分支名

当执行 git remote add 执行错了之后，再次执行没有用，需要先删除 remote origin。 `git remote rm origin`


***本地使用 git init 创建空仓库的时候 默认的仓库主分支是 master 但是 github 创建的都是 main，所以需要将 master 修改成 main***

### 非 用户名.github.io 仓库如何使用 github 免费服务器
- 保证 github 仓库内 mian 分支上传的项目可以正常访问
- 在当前项目内打开命令行工具
- 执行 `git checkout -b gh-pages` 创建一个新的分支 gh-pages，并且切换过去。 新的分支默认内容和当时创建的时候 main 中的内容一致
- 需要直接将创建好的分支传到网上。执行 `git push` 但是远端没有 gh-pages 分支。需要告诉远端让他创建并上传。需要执行 `git push --set-upstream origin gh-pages`
- 直接使用 `Sunny-zz.github.io/仓库名` 就可以访问 gh-pages 下的内容

***现在的 github 可以直接让任何的仓库分支当作 github 免费服务器(默认是 gh-pages 分支)，参考仓库的 Pages 设置***


### github 团队合作(分支操作)
默认创建仓库的时候只有 main 分支。main 分支一般都是放成品的项目代码，开发一般都在其他的分支操作。
`git branch 分支名` 新建分支
`git checkout 分支名` 切换到已有分支
`git checkout -b 分支名` 创建新的分支并切换过去
`git branch` 查看本地分支  可以加 -a 参数查看所有分支(本地和远端)      -r|--remote 查看远端分支
`git push --set-upstream origin 新的分支名` 第一次将本地分支上传到网上执行此命令
创建分支的时候，分支内是有内容的。比如 在 mian 分支创建的新分支， 新分支的内容和 main 一样。

#### 多个人同时维护一个分支

- 有一个现成的仓库，里面有一点内容
- 新建一个 dev 分支，并且添加项目的合作者
- 让合作者也去下载这个项目
- 先让同事修改项目并上传
- 然后自己在修改上传，此时会上传失败提示远端存在本地不存在的更新，需要使用 git pull 拉取远端的更新到本地
  - git pull 拉取更新的时候，如果两个版本的更新不是同一个文件(没有冲突)，github 会自动合并成一个新的版本，让你提交留言(有默认的留言)，直接按 shift + z + z 保存并退出
  - git pull 拉取更新的时候是同一个文件， github 就会提示让手动处理冲突， 处理完毕之后在执行 三步上传。
- 切换到主分支，主分支拉取 dev 分支的更新 `git merge dev`, 并且使用 `git push` 上传到远端

当需要执行 git push 的时候，需要满足 远端的版本低于本地的版本，而且本地包含所有远端的版本

#### 多个人合作一个人一个分支





### 添加 ssh
- 电脑任意位置打开命令行
- 执行 `ssh-keygen`  一路回车，知道看到一个编码为止。
- 执行 `cd ~/.ssh` 命令
- 执行 `cat id_rsa.pub` 查看公钥内容，复制其内容
- 打开github网站，找到个人中心的 setting 找到 ssh 选项，添加新的 ssh
- 添加 ssh 的作用是让你的系统直接关联 github

### git 上传下载失败
- git config --global --unset http.proxy  取消代理
- git config --global http.sslVerify "false" 取消 ssl 认证


### 提示
- 仓库内的 .git 隐藏文件, 表示当前文件夹是一个 git 仓库。
- 仓库不可嵌套



### git 常用命令
- git init 初始化文件夹为 github 仓库
- git add .  将本次的所有修改记录到远端，缓存下来
- git commit -m'留言' 将所有的缓存修改制作版本
- git push  将版本上传   
  - 有些情况直接 push 会失败，需要执行其他的 push 命令。`git push -u origin master   git push --up-stream origin dev`
- git pull 拉取远端更新到本地 也可以使用 git pull origin master 拉取主分支的更新
- git merge 合并分支更新
- git status 查看当前仓库的状态
- git branch 新建查看分支
- git checkout 切换    -b 参数新建并切换
- git config --global 设置 git 的全局配置
- git remote add  给本地仓库添加远端地址(将本地和远端连接起来)
- git clone 克隆项目到本地

### .gitignore  
当你的仓库根目录设置了 .gitignore 文件的时候 该文件内输入的文件名以及文件夹的名字，上传到 github 网站的时候会被忽略掉，也就是不会上传