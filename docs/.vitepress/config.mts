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
          },
          {
            text: 'Date and Time',
            items: [
              { text: 'DatePicker', link: '/DateAndTime/DatePicker.md' },
              { text: 'TimePicker', link: '/DateAndTime/TimePicker.md' }
            ]
          },
          {
            text: 'Dialogs and Flyouts',
            items: [
              { text: 'Dialog', link: '/DialogsAndFlyouts/Dialog.md' },
              { text: 'Flyout', link: '/DialogsAndFlyouts/Flyout.md' }
            ]
          },
          {
            text: 'Layout',
            items: [
              { text: 'Expander', link: '/Layout/Expander.md' },
              { text: 'SettingExpander', link: '/Layout/SettingExpander.md' },
              { text: 'SettingItem', link: '/Layout/SettingItem.md' }
            ]
          },
          {
            text: 'Lists and Collections',
            items: [
              { text: 'Clip (Interactive Surface)', link: '/ListAndCollections/Clip.md' },
              { text: 'Frame', link: '/ListAndCollections/Frame.md' },
              { text: 'ListView', link: '/ListAndCollections/ListView.md' },
              { text: 'ListViewDelegate', link: '/ListAndCollections/ListViewDelegate.md' },
              { text: 'SettingCard', link: '/ListAndCollections/SettingCard.md' }
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
          },
          {
            text: '日期和时间',
            items: [
              { text: '日期选择器', link: '/zh/DateAndTime/DatePicker.md' },
              { text: '时间选择器', link: '/zh/DateAndTime/TimePicker.md' }
            ]
          },
          {
            text: '对话框和浮出控件',
            items: [
              { text: '对话框', link: '/zh/DialogsAndFlyouts/Dialog.md' },
              { text: '浮出控件', link: '/zh/DialogsAndFlyouts/Flyout.md' }
            ]
          },
          {
            text: '布局',
            items: [
              { text: '展开器', link: '/zh/Layout/Expander.md' },
              { text: '设置展开器', link: '/zh/Layout/SettingExpander.md' },
              { text: '设置项', link: '/zh/Layout/SettingItem.md' }
            ]
          },
          {
            text: '列表和集合',
            items: [
              { text: 'Clip (可交互表面)', link: '/zh/ListAndCollections/Clip.md' },
              { text: '框架', link: '/zh/ListAndCollections/Frame.md' },
              { text: '列表视图', link: '/zh/ListAndCollections/ListView.md' },
              { text: '列表项委托', link: '/zh/ListAndCollections/ListViewDelegate.md' },
              { text: '设置卡片', link: '/zh/ListAndCollections/SettingCard.md' }
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
          },
          {
            text: '日付と時刻',
            items: [
              { text: '日付ピッカー', link: '/ja/DateAndTime/DatePicker.md' },
              { text: '時刻ピッカー', link: '/ja/DateAndTime/TimePicker.md' }
            ]
          },
          {
            text: 'ダイアログとフライアウト',
            items: [
              { text: 'ダイアログ', link: '/ja/DialogsAndFlyouts/Dialog.md' },
              { text: 'フライアウト', link: '/ja/DialogsAndFlyouts/Flyout.md' }
            ]
          },
          {
            text: 'レイアウト',
            items: [
              { text: 'エキスパンダー', link: '/ja/Layout/Expander.md' },
              { text: '設定エキスパンダー', link: '/ja/Layout/SettingExpander.md' },
              { text: '設定アイテム', link: '/ja/Layout/SettingItem.md' }
            ]
          },
          {
            text: 'リストとコレクション',
            items: [
              { text: 'Clip (インタラクティブサーフェス)', link: '/ja/ListAndCollections/Clip.md' },
              { text: 'フレーム', link: '/ja/ListAndCollections/Frame.md' },
              { text: 'リストビュー', link: '/ja/ListAndCollections/ListView.md' },
              { text: 'リストビューデリゲート', link: '/ja/ListAndCollections/ListViewDelegate.md' },
              { text: '設定カード', link: '/ja/ListAndCollections/SettingCard.md' }
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
