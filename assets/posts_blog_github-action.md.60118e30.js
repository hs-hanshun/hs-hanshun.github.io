import{_ as e,o as t,c as n,f as a}from"./app.0387de29.js";const g='{"title":"Github Action\u81EA\u52A8\u5316\u90E8\u7F72\u9759\u6001\u9875\u9762","description":"\u57FA\u4E8EGithub Action\u81EA\u52A8\u5316\u90E8\u7F72\u9759\u6001\u9875\u9762","frontmatter":{"date":"2021-07-31T00:00:00.000Z","title":"Github Action\u81EA\u52A8\u5316\u90E8\u7F72\u9759\u6001\u9875\u9762","tags":["VitePress","Github Action"],"description":"\u57FA\u4E8EGithub Action\u81EA\u52A8\u5316\u90E8\u7F72\u9759\u6001\u9875\u9762"},"headers":[{"level":2,"title":"VitePress\u3001Github Pages\u81EA\u52A8\u5316\u90E8\u7F72","slug":"vitepress\u3001github-pages\u81EA\u52A8\u5316\u90E8\u7F72"},{"level":2,"title":"\u586B\u5751","slug":"\u586B\u5751"}],"relativePath":"posts/blog/github-action.md"}',i={},s=a(`<h1 id="github-action\u81EA\u52A8\u5316\u90E8\u7F72\u9759\u6001\u9875\u9762" tabindex="-1">Github Action\u81EA\u52A8\u5316\u90E8\u7F72\u9759\u6001\u9875\u9762 <a class="header-anchor" href="#github-action\u81EA\u52A8\u5316\u90E8\u7F72\u9759\u6001\u9875\u9762" aria-hidden="true">#</a></h1><h2 id="vitepress\u3001github-pages\u81EA\u52A8\u5316\u90E8\u7F72" tabindex="-1">VitePress\u3001Github Pages\u81EA\u52A8\u5316\u90E8\u7F72 <a class="header-anchor" href="#vitepress\u3001github-pages\u81EA\u52A8\u5316\u90E8\u7F72" aria-hidden="true">#</a></h2><p>\u63A5\u4E0A\u7BC7\u535A\u5BA2\u300AVitePress\u3001Github Pages\u642D\u5EFA\u535A\u5BA2\u7F51\u7AD9\u300B\uFF0C\u672C\u7BC7\u535A\u5BA2\u6211\u4EEC\u901A\u8FC7Github\u7684Action\u5B9E\u73B0\u63D0\u4EA4\u4EE3\u7801\u81EA\u52A8\u5316\u90E8\u7F72\uFF0C\u4E0D\u7528\u6BCF\u6B21\u81EA\u5DF1\u6253\u5305\uFF0C\u518D\u4E0A\u4F20\u5230\u9879\u76EE\u4E2D\u8FD9\u4E48\u9EBB\u70E6\u4E86\u3002\u9996\u9009\u5728Github\u4E2D\u521B\u5EFA\u4E00\u4E2A\u7A7A\u767D\u7684\u5206\u652F\uFF0C\u8FD9\u91CC\u6211\u4EEC\u8981\u628A\u6253\u5305\u597D\u7684\u4EE3\u7801\u653E\u5230\u8FD9\u4E2A\u5206\u652F\u4E2D\uFF0C\u6BD4\u5982\uFF0C\u8FD9\u91CC\u6211\u521B\u5EFA\u7684\u662Fblog-pages\u5206\u652F\uFF0CGithub\u4F1A\u628A\u6253\u5305\u597D\u7684\u524D\u7AEF\u6587\u4EF6\u653E\u5230blog-pages\u8FD9\u4E2A\u5206\u652F\u4E2D\uFF0C\u540C\u65F6\u6211\u4EEC\u9700\u8981\u4FEE\u6539Github Pages\u9879\u76EE\uFF0C\u8BBF\u95EE\u7684\u9875\u9762\u6307\u5411blog-pages\u5206\u652F\u7684\u6839\u76EE\u5F55\u4E0B\u9762\uFF0C\u8FD9\u91CC\u7684\u64CD\u4F5C\u6CA1\u6709\u4EC0\u4E48\u6280\u672F\u542B\u91CF\u4E0D\u518D\u505A\u8D58\u8FF0\uFF0C\u4E0B\u9762\u6211\u628Aworkflow\u6587\u4EF6\u8D34\u51FA\u6765\uFF0C\u91CD\u70B9\u8BF4\u660E\u4E00\u4E0B</p><div class="language-"><pre><code># name \u53EF\u4EE5\u81EA\u5B9A\u4E49
name: Deploy GitHub Pages

# \u89E6\u53D1\u6761\u4EF6\uFF1A\u5728 push \u5230 main/master \u5206\u652F\u540E\uFF0C\u65B0\u7684 Github \u9879\u76EE \u5E94\u8BE5\u90FD\u662F main\uFF0C\u800C\u4E4B\u524D\u7684\u9879\u76EE\u4E00\u822C\u90FD\u662F master
on:
  push:
    branches:
      - main

# \u4EFB\u52A1
jobs:
  build-and-deploy:
    # \u670D\u52A1\u5668\u73AF\u5883\uFF1A\u6700\u65B0\u7248 Ubuntu
    runs-on: ubuntu-latest
    steps:
      # \u62C9\u53D6\u4EE3\u7801
      - name: Checkout
        uses: actions/checkout@v3
        with:
          persist-credentials: false

      # \u751F\u6210\u9759\u6001\u6587\u4EF6
      - name: Install and Build
        run: |
          npm ci
          npm run build

      # \u90E8\u7F72\u5230 GitHub Pages
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          token: \${{ secrets.ACCESS_TOKEN }} # \u4E5F\u5C31\u662F\u6211\u4EEC\u521A\u624D\u751F\u6210\u7684 secret
          branch: blog-pages # \u90E8\u7F72\u5230 blog-pages \u5206\u652F\uFF0C\u56E0\u4E3A main \u5206\u652F\u5B58\u653E\u7684\u4E00\u822C\u662F\u6E90\u7801\uFF0C\u800C blog-pages \u5206\u652F\u5219\u7528\u6765\u5B58\u653E\u751F\u6210\u7684\u9759\u6001\u6587\u4EF6
          folder: .vitepress/dist # github \u6253\u5305\u751F\u6210\u9759\u6001\u6587\u4EF6\u7684\u76EE\u5F55\uFF0Caction\u590D\u5236\u6B64\u76EE\u5F55\u7684\u6587\u4EF6\u5230blog-pages\u5206\u652F
</code></pre></div><h2 id="\u586B\u5751" tabindex="-1">\u586B\u5751 <a class="header-anchor" href="#\u586B\u5751" aria-hidden="true">#</a></h2><p>\u53C2\u6570\u5DF2\u7ECF\u5728\u4EE3\u7801\u4E2D\u505A\u4E86\u8BF4\u660E\uFF0C\u51E0\u4E4E\u4E0D\u9700\u8981\u4FEE\u6539\u5C31\u53EF\u4EE5\u4F7F\u7528\uFF0C\u4F46\u662F\u6700\u9700\u8981\u6CE8\u610F\u7684\u4E00\u9879\u662FDeploy\u8FD9\u4E00\u6B65\uFF0CFOLDER\u53C2\u6570\u4E00\u5B9A\u8981\u9009\u5BF9\uFF0C\u4E00\u5B9A\u8981\u662FGithub\u6253\u5305\u751F\u6210\u9759\u6001\u6587\u4EF6\u7684\u76EE\u5F55\uFF0C\u8981\u4E0D\u7136\u4F1A\u90E8\u7F72\u5931\u8D25\u7684\uFF0C\u672C\u5730\u53EF\u4EE5\u5148\u6253\u5305\u770B\u4E0B\u9879\u76EE\u751F\u6210\u7684\u9759\u6001\u6587\u4EF6\u4F4D\u7F6E\uFF0C\u4E00\u822C\u5728Github\u4E0A\u4E5F\u662F\u8FD9\u4E2A\u4F4D\u7F6E\u3002\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5728Github\u4E2D\u521B\u5EFA2\u4E2A\u9879\u76EE\uFF0C\u4E00\u4E2A\u662F\u5B58\u653E\u6211\u4EEC\u6E90\u4EE3\u7801\u7684\u5730\u65B9\uFF0C\u4E00\u4E2A\u662F\u914D\u7F6EGithub Pages\u9875\u9762\u7684\u4ED3\u5E93\uFF0C\u8FD9\u4E2A\u53EF\u4EE5\u505A\u5230\u6E90\u7801\u548C\u9759\u6001\u6587\u4EF6\u5206\u79BB\uFF0C\u522B\u4EBA\u4E5F\u4E0D\u4F1A\u5F71\u54CD\u5230\u4F60\u5199\u7684\u5185\u5BB9\uFF0C\u914D\u7F6E\u7684\u65F6\u5019\u53C2\u8003JamesIves/github-pages-deploy-action\u8BF4\u660E\u6587\u6863\u3002</p>`,6),o=[s];function h(r,u,c,b,l,p){return t(),n("div",null,o)}var _=e(i,[["render",h]]);export{g as __pageData,_ as default};