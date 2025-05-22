import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RinUI Documentation",
  description: "RinUI development documentation - A Fluent Design-like UI library for Qt Quick (QML)",
  head: [
      ['link', { rel: 'icon', href: '/assets/favicon.ico' }]  // 添加网站图标
  ],

  // 国际化 / internationalization
  locales: {
    root: {
      label: "English",
      lang: "en",

      themeConfig: {
        // 导航
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide' },
        ],

        // sidebar
        sidebar: [
          {
            text: 'Introduction',
            items: [
              { text: 'What is RinUI?', link: '/guide/' },
              { text: 'Getting Started', link: '/guide/getting-started' },
            ]
          },
          {
            text: 'RinUI Core',
            items: [
              { text: 'Theme', link: '/core/theme' },
              { text: 'Utils', link: '/core/utils' },
              { text: 'Float Layer Manager', link: '/core/floatLayer' },
            ]
          },
          {
            text: 'BasicInput',
            items: [
              { text: 'Button', link: '/BasicInput/Button.md' },
            ]
          }
        ]
      }
    },

    zh: {
      label: "简体中文",
      lang: "zh",
      title: 'RinUI 开发文档',

      themeConfig: {
        // 导航
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', link: '/zh/guide' },
        ],

        // 侧边栏
        sidebar: [
          {
            text: 'RinUI 简介',
            items: [
              { text: '何为 RinUI?', link: '/zh/guide/' },
              { text: '快速开始', link: '/zh/guide/getting-started' },
            ]
          },
          {
            text: 'RinUI 核心',
            items: [
              { text: '主题', link: '/zh/core/theme' },
              { text: '工具', link: '/zh/core/utils' },
              { text: '浮层管理器', link: '/zh/core/floatLayer' }
            ]
          },
          {
            text: '基本输入',
            items: [
              { text: '按钮', link: '/zh/BasicInput/Button.md' },
            ]
          }
        ],
      }
    }
  },

  themeConfig: {
    logo: '/assets/favicon.ico',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/RinLit-233-shiroko/Rin-UI' }
    ],

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 RinLit'
    }
  }
})
