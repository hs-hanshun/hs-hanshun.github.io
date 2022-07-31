---
date: 2022-07-31
title: Github Action自动化部署静态页面
tags:
- VitePress
- Github Action
description: 基于Github Action自动化部署静态页面
---
## VitePress、Github Pages自动化部署
接上篇博客《VitePress、Github Pages搭建博客网站》，本篇博客我们通过Github的Action实现提交代码自动化部署，不用每次自己打包，再上传到项目中这么麻烦了。首选在Github中创建一个空白的分支，这里我们要把打包好的代码放到这个分支中，比如，这里我创建的是blog-pages分支，Github会把打包好的前端文件放到blog-pages这个分支中，同时我们需要修改Github Pages项目，访问的页面指向blog-pages分支的根目录下面，这里的操作没有什么技术含量不再做赘述，下面我把workflow文件贴出来，重点说明一下
```
# name 可以自定义
name: Deploy GitHub Pages

# 触发条件：在 push 到 main/master 分支后，新的 Github 项目 应该都是 main，而之前的项目一般都是 master
on:
  push:
    branches:
      - main

# 任务
jobs:
  build-and-deploy:
    # 服务器环境：最新版 Ubuntu
    runs-on: ubuntu-latest
    steps:
      # 拉取代码
      - name: Checkout
        uses: actions/checkout@v3
        with:
          persist-credentials: false

      # 生成静态文件
      - name: Install and Build
        run: |
          npm ci
          npm run build

      # 部署到 GitHub Pages
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }} # 也就是我们刚才生成的 secret
          BRANCH: blog-pages # 部署到 blog-pages 分支，因为 main 分支存放的一般是源码，而 blog-pages 分支则用来存放生成的静态文件
          FOLDER: .vitepress/dist # github 打包生成静态文件的目录，action复制此目录的文件到blog-pages分支
```

## 填坑
参数已经在代码中做了说明，几乎不需要修改就可以使用，但是最需要注意的一项是Deploy这一步，FOLDER参数一定要选对，一定要是Github打包生成静态文件的目录，要不然会部署失败的，本地可以先打包看下项目生成的静态文件位置，一般在Github上也是这个位置。