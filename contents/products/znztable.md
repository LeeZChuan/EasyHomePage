---
date: '2024-03'
title: '多业务场景封装的原生表格'
cover: 'znztable.jpg'
url: ''
tags:
  - 业务封装
  - 原生
  - 低版本浏览器兼容
---

为了支持低版本（win7或者xp系统）下的浏览器的表格展示，目前市面上的表格组件都不支持左侧固定列的展示需求，于是封装了一套表格组件满足多种场景：带有虚拟滚动、分页和子列展开等逻辑；本次封装在Vue框架下采用了OOP的开发模式，可以在多种业务组件内调用不同种类的方法，并且各种类相互继承以减少不必要的代码开发。
