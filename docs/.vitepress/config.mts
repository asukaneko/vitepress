import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Neko bot",
  description: "A QQ bot by napcat",
  head: [['link', { rel: 'icon', href: 'https://youke1.picui.cn/s1/2025/09/03/68b860a5ccac5.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo:'https://youke1.picui.cn/s1/2025/09/03/68b860a5ccac5.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '快速开始', link: '/quick-start.md' }
    ],

    sidebar: [
      {
        text: '快速上手',
        collapsed: false,
        items: [
          { text: '快速开始', link: '/quick-start.md' },
          { text: '所有命令', link: '/commands.md' },
        ]
      },
      {
        text: '项目开发',
        collapsed: false,
        items: [
          { text: '项目指南', link: '/guide.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/asukaneko/Ncatbot-comic-QQbot' }
    ],

    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the <a href="https://github.com/asukaneko/Ncatbot-comic-QQbot/blob/master/LICENSE">Apache 2.0 License</a>.',
      copyright: 'Copyright © 2025-present <a href="https://github.com/asukaneko">Asukaneko</a>'
    }
  },
  ignoreDeadLinks: true,
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  }
})
