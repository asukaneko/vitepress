import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

export default defineConfig({
  title: "Neko bot",
  description: "A QQ bot by napcat",
  head: [['link', { rel: 'icon', href: '/neko.png' }]],
  themeConfig: {
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    }, 
    outline: { 
      level: [2,4], // 显示2-4级标题
      label: '当前页大纲' // 文字显示
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },
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
      },
      {
        text:'远程部署',
        collapsed: false,
        items: [
          { text: 'docker 部署指南', link: 'https://asukablog.iepose.cn/archives/5f583afd-c9b1-420f-bc4b-41f4dfc039d3' },
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
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    math: true,
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
    // 组件插入h1标题下
    config(md) {
      // 创建 markdown-it 插件
      md.use(groupIconMdPlugin) //代码组图标
      md.use((md) => {
        const defaultRender = md.render
        md.render = function (...args) {
          const [content, env] = args
          const isHomePage = env.path === '/' || env.relativePath === 'index.md'  // 判断是否是首页

          if (isHomePage) {
            return defaultRender.apply(md, args) // 如果是首页，直接渲染内容
          }
          // 在每个 md 文件内容的开头插入组件
          const defaultContent = defaultRender.apply(md, args)
          const component = '<ArticleMetadata />\n'
          return component + defaultContent
        }
      })
    }
  },
  vite: { 
    plugins: [
      groupIconVitePlugin() //代码组图标
    ],
  },
  lastUpdated: true
})
