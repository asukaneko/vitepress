import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

export default defineConfig({
  title: "Neko bot",
  description: "A QQ bot by napcat",
  head: [['link', { rel: 'icon', href: '/neko.png' }]],
  themeConfig: {
    logo:'/neko.png',
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
    },
    editLink: {
      pattern: 'https://github.com/asukaneko/vitepress',
      text: '在GitHub上编辑此页'
    }
  },
  ignoreDeadLinks: true,
  markdown: {
    config(md) { 
      md.use(groupIconMdPlugin) //代码组图标
    },
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },
  vite: { 
    plugins: [
      groupIconVitePlugin() //代码组图标
    ],
  },
  lastUpdated: true
})
