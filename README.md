# 简易官网 EasyHomePage

个人主页，本项目参考：[EasyHomePage](https://github.com/jason5ng32/EasyHomePage)。

## 项目结构

* 页面代码在 `src` 目录下，`public` 目录下是一些静态资源。
* 根目录下的 `contents` 目录是用来存放 Markdown 文件的，这些文件在编译时会被读取，然后生成对应的页面。
* `.github/workflows` 目录下是 Github Actions 的配置文件，用来自动部署到 Github Pages。

## 如何使用

1. 克隆这个项目
2. 在你的项目里创建一个新分支：`gh-pages` ，然后在项目设置里配置好你的域名
3. 在项目的 Actions 里配置，允许 Workflow 进行读写操作
4. 修改 `contents` 目录下的 Markdown 文件，以及你希望修改的其它页面，推送回 `main` 分支
5. 等待 Actions 自动部署，然后访问你的域名，搞定！

当然，你也可以在本地运行这个项目，方法也非常简单：

进入开发环境：

```bash
npm install && npm run dev
```

写完后，构建和运行：

```bash
npm run build && npm start
```

程序会运行在 `localhost:18772` 上。

接着用 Nginx 或你喜欢的服务器程序设置一下反向代理，套个 SSL 证书，就可以直接访问了。
