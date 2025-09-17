---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Neko bot"
  text: "A QQ bot by Napcat"
  tagline: 一个基于 Napcat 的 QQ 机器人
  image:
    #src: https://youke1.picui.cn/s1/2025/09/03/68b860a5ccac5.png
    src: /neko.png
    alt: VitePress
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/quick-start.md
    - theme: alt
      text: 项目指南
      link: /guide/guide.md
    - theme: alt
      text: napcat基础
      link: /napcat/index.md

features:
  - icon:
      src: /svg/typescript.png
    title: 基于 napcat 开发
    details: 基于 napcat 开发，采用 ncatbot Python Sdk
  - icon: 🔧
    title: 模块化
    details: 模块化设计，支持自定义模块
  - icon: 🖱️
    title: 易于使用
    details: 简单易用，无需复杂配置
  - icon: 
      src: /svg/github.svg
    title: 开源
    details: 开源项目，欢迎贡献
    link: https://github.com/asukaneko/comic-downloader
    linkText: 仓库
---
<confetti />
