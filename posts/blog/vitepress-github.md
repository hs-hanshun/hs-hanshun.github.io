---
date: 2021-07-30
title: VitePress、Github Pages搭建博客网站
tags:
- VitePress
- 博客
description: 基于VitePress、Github Pages搭建一个属于自己的博客网站
---
# VitePress、Github Pages搭建博客网站
## 起因
身为一个技术人，谁没有折腾过自己的博客，我也搭建过很多属于自己的博客。我是一个Java后端开发，最近一次搭建博客使用的技术栈是Spring Boot、Vue，使用的是腾讯云的EVM，2019年的时候通过新注册的方式，薅的腾讯的羊毛，一共花了300多块钱，之前也有使用过华为云和阿里云，每次都是通过薅羊毛的方式，每次都是使用三年，如果续费的话，费用很贵，这也导致我不停的迁移服务，不停的备案，讨厌了这种方式。哈哈哈。。。应该是自己穷啊，本来打算买个树莓派，自己在家里搭建一个服务器，但是又需要一个外网IP，很是麻烦，所以这个方案放弃了。最重要的一个最近遇到一个朋友的个人网站遭到攻击，CDN使用的费用和OSS的费用被消耗一空，如果要开启防护，又是一笔很大的开支，只能眼看着自己的网站被攻击，而且每次迁移的时候很是麻烦，数据库和各种文件都需要迁移。促使我即想找一个比较方便的方式进行写作，又不用担心攻击等一系列的问题，不用担心迁移相关问题，不花钱是最重要的。比较巧的是，最近在学习Vue，看到通过VitePress加Github搭建一个免费的博客，而且我所产生的文件始终是在我自己的手中，如果以后Github网络不好的话，我随时可以迁移到Gitee等相关的网站，不用在自己搭建相关的环境，真香啊。

## VitePress
具体的怎么使用VitePress创建静态网页，请参考[VitePress](https://vitepress.vuejs.org/)官网，这里我不再赘述。当然了，如果想更省事，请上Github上搜索一下，有很多的基于VitePress的模板，都可以拿过来使用的，在这里我着重的讲述一下，怎么配置Github使用。

## Github创建项目
登录Github，点击创建仓库的按钮，在这里一定要注意仓库的名称一定要是你Github的名称加上`github.io`，如下图所示
![alt](/images/blog/create_repo.png)，比如我的Github名称是hs-hanshun，在这里我应该填写的是`hs-hanshun.github.io`，切记，要不外设置配置的时候路径很长的。

## 设置Github Pages设置
首先要确定一下你是怎么部署的方式，我在这里部署的方式是把打包好的文件放到项目中的docs文件中，然后再设置Pages，这里把我项目作如下图所示 ![alt](/images/blog/project_arch.png)，因为设置Github Pages的时候只要指向docs文件即可，Github Pages设置如下图所示 ![alt](/images/blog/github_pages.png)，到目前为止，已经设置好了，我们只要把写好的博客打包放在项目中的docs文件夹中，即可通过Pages中的域名正常访问，下一步可以做成自动化的，通过Github直接打包，把打包好的文件放到docs文件夹中即可。