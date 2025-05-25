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
              { text: 'CheckBox', link: '/BasicInput/CheckBox.md' },
              { text: 'ComboBox', link: '/BasicInput/ComboBox.md' },
              { text: 'DropDownButton', link: '/BasicInput/DropDownButton.md' },
              { text: 'Hyperlink', link: '/BasicInput/Hyperlink.md' },
              { text: 'PillButton', link: '/BasicInput/PillButton.md' },
              { text: 'RadioButton', link: '/BasicInput/RadioButton.md' },
              { text: 'RoundButton', link: '/BasicInput/RoundButton.md' },
              { text: 'Slider', link: '/BasicInput/Slider.md' },
              { text: 'Switch', link: '/BasicInput/Switch.md' },
              { text: 'ToggleButton', link: '/BasicInput/ToggleButton.md' },
              { text: 'ToolButton', link: '/BasicInput/ToolButton.md' }
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
              { text: '复选框', link: '/zh/BasicInput/CheckBox.md' },
              { text: '组合框', link: '/zh/BasicInput/ComboBox.md' },
              { text: '下拉按钮', link: '/zh/BasicInput/DropDownButton.md' },
              { text: '超链接', link: '/zh/BasicInput/Hyperlink.md' },
              { text: '胶囊按钮', link: '/zh/BasicInput/PillButton.md' },
              { text: '单选按钮', link: '/zh/BasicInput/RadioButton.md' },
              { text: '圆形按钮', link: '/zh/BasicInput/RoundButton.md' },
              { text: '滑块', link: '/zh/BasicInput/Slider.md' },
              { text: '开关', link: '/zh/BasicInput/Switch.md' },
              { text: '切换按钮', link: '/zh/BasicInput/ToggleButton.md' },
              { text: '工具按钮', link: '/zh/BasicInput/ToolButton.md' }
            ]
          }
        ],
      }
    },

    ja: {
      label: "日本語",
      lang: "ja",
      title: 'RinUI ドキュメンテーション',

      themeConfig: {
        // 导航
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'ガイド', link: '/ja/guide/' },
        ],

        // 侧边栏
        sidebar: [
          {
            text: 'RinUI 紹介',
            items: [
              { text: 'RinUIとは？', link: '/ja/guide/' },
              { text: 'はじめに', link: '/ja/guide/getting-started' },
            ]
          },
          {
            text: 'RinUI コア',
            items: [
              { text: 'テーマ', link: '/ja/core/theme' },
              { text: 'ユーティリティ', link: '/ja/core/utils' },
              { text: 'フロートレイヤーマネージャー', link: '/ja/core/floatLayer' }
            ]
          },
          {
            text: '基本入力',
            items: [
              { text: 'ボタン', link: '/ja/BasicInput/Button.md' },
              { text: 'チェックボックス', link: '/ja/BasicInput/CheckBox.md' },
              { text: 'コンボボックス', link: '/ja/BasicInput/ComboBox.md' },
              { text: 'ドロップダウンボタン', link: '/ja/BasicInput/DropDownButton.md' },
              { text: 'ハイパーリンク', link: '/ja/BasicInput/Hyperlink.md' },
              { text: 'ピルボタン', link: '/ja/BasicInput/PillButton.md' },
              { text: 'ラジオボタン', link: '/ja/BasicInput/RadioButton.md' },
              { text: 'ラウンドボタン', link: '/ja/BasicInput/RoundButton.md' },
              { text: 'スライダー', link: '/ja/BasicInput/Slider.md' },
              { text: 'スイッチ', link: '/ja/BasicInput/Switch.md' },
              { text: 'トグルボタン', link: '/ja/BasicInput/ToggleButton.md' },
              { text: 'ツールボタン', link: '/ja/BasicInput/ToolButton.md' }
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
