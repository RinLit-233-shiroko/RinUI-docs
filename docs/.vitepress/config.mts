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
              { text: 'AutoSuggestBox', link: '/BasicInput/AutoSuggestBox.md' },
              { text: 'Button', link: '/BasicInput/Button.md' },
              { text: 'CheckBox', link: '/BasicInput/CheckBox.md' },
              { text: 'ComboBox', link: '/BasicInput/ComboBox.md' },
              { text: 'DropDownButton', link: '/BasicInput/DropDownButton.md' },
              { text: 'Hyperlink', link: '/BasicInput/Hyperlink.md' },
              { text: 'PillButton', link: '/BasicInput/PillButton.md' },
              { text: 'RadioButton', link: '/BasicInput/RadioButton.md' },
              { text: 'RoundButton', link: '/BasicInput/RoundButton.md' },
              { text: 'Slider', link: '/BasicInput/Slider.md' },
              { text: 'SpinBox', link: '/BasicInput/SpinBox.md' },
              { text: 'Switch', link: '/BasicInput/Switch.md' },
              { text: 'TextField', link: '/BasicInput/TextField.md' },
              { text: 'TextArea', link: '/BasicInput/TextArea.md' },
              { text: 'ToggleButton', link: '/BasicInput/ToggleButton.md' },
              { text: 'ToolButton', link: '/BasicInput/ToolButton.md' }
            ]
          },
          {
            text: 'Date and Time',
            items: [
              { text: 'Calendar', link: '/DateAndTime/Calendar.md' },
              { text: 'CalendarDatePicker', link: '/DateAndTime/CalendarDatePicker.md' },
              { text: 'DatePicker', link: '/DateAndTime/DatePicker.md' },
              { text: 'TimePicker', link: '/DateAndTime/TimePicker.md' }
            ]
          },
          {
            text: 'Dialogs and Flyouts',
            items: [
              { text: 'Dialog', link: '/DialogsAndFlyouts/Dialog.md' },
              { text: 'Flyout', link: '/DialogsAndFlyouts/Flyout.md' },
              { text: 'Popup', link: '/DialogsAndFlyouts/Popup.md' }
            ]
          },
          {
            text: 'Layout',
            items: [
              { text: 'Expander', link: '/Layout/Expander.md' },
              { text: 'SettingExpander', link: '/Layout/SettingExpander.md' },
            ]
          },
          {
            text: 'Lists and Collections',
            items: [
              { text: 'Clip (Interactive Surface)', link: '/ListAndCollections/Clip.md' },
              { text: 'Frame', link: '/ListAndCollections/Frame.md' },
              { text: 'ListView', link: '/ListAndCollections/ListView.md' },
              { text: 'SettingCard', link: '/ListAndCollections/SettingCard.md' },
              { text: 'TableView', link: '/ListAndCollections/TableView.md' }
            ]
          },
          {
            text: 'Media',
            items: [
              { text: 'Avatar', link: '/Media/Avatar.md' }
            ]
          },
          {
            text: 'Menus and Toolbars',
            items: [
              { text: 'Menu', link: '/MenusAndToolbars/Menu.md' },
              { text: 'MenuBar', link: '/MenusAndToolbars/MenuBar.md' }
            ]
          },
          {
            text: 'Navigation',
            items: [
              { text: 'NavigationView', link: '/Navigation/NavigationView.md' },
              { text: 'Segmented', link: '/Navigation/Segmented.md' },
              { text: 'SelectorBar', link: '/Navigation/SelectorBar.md' }
            ]
          },
          {
            text: 'Status and Info',
            items: [
              { text: 'BusyIndicator', link: '/StatusAndInfo/BusyIndicator.md' },
              { text: 'InfoBadge', link: '/StatusAndInfo/InfoBadge.md' },
              { text: 'InfoBar', link: '/StatusAndInfo/InfoBar.md' },
              { text: 'ProgressBar', link: '/StatusAndInfo/ProgressBar.md' },
              { text: 'ProgressRing', link: '/StatusAndInfo/ProgressRing.md' },
              { text: 'Toast', link: '/StatusAndInfo/Toast.md' },
              { text: 'ToolTip', link: '/StatusAndInfo/ToolTip.md' }
            ]
          },
          {
            text: 'Text',
            items: [
              { text: 'AutoSuggestBox', link: '/Text/AutoSuggestBox.md' },
              { text: 'ScrollableTextArea', link: '/Text/ScrollableTextArea.md' },
              { text: 'SpinBox', link: '/Text/SpinBox.md' },
              { text: 'Text', link: '/Text/Text.md' },
              { text: 'TextArea', link: '/Text/TextArea.md' },
              { text: 'TextField', link: '/Text/TextField.md' }
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
              { text: '自动建议框', link: '/zh/BasicInput/AutoSuggestBox.md' },
              { text: '按钮', link: '/zh/BasicInput/Button.md' },
              { text: '复选框', link: '/zh/BasicInput/CheckBox.md' },
              { text: '组合框', link: '/zh/BasicInput/ComboBox.md' },
              { text: '下拉按钮', link: '/zh/BasicInput/DropDownButton.md' },
              { text: '超链接', link: '/zh/BasicInput/Hyperlink.md' },
              { text: '胶囊按钮', link: '/zh/BasicInput/PillButton.md' },
              { text: '单选按钮', link: '/zh/BasicInput/RadioButton.md' },
              { text: '圆形按钮', link: '/zh/BasicInput/RoundButton.md' },
              { text: '滑块', link: '/zh/BasicInput/Slider.md' },
              { text: '旋转框', link: '/zh/BasicInput/SpinBox.md' },
              { text: '开关', link: '/zh/BasicInput/Switch.md' },
              { text: '文本框', link: '/zh/BasicInput/TextField.md' },
              { text: '文本域', link: '/zh/BasicInput/TextArea.md' },
              { text: '切换按钮', link: '/zh/BasicInput/ToggleButton.md' },
              { text: '工具按钮', link: '/zh/BasicInput/ToolButton.md' }
            ]
          },
          {
            text: '日期和时间',
            items: [
              { text: '日历', link: '/zh/DateAndTime/Calendar.md' },
              { text: '日历日期选择器', link: '/zh/DateAndTime/CalendarDatePicker.md' },
              { text: '日期选择器', link: '/zh/DateAndTime/DatePicker.md' },
              { text: '时间选择器', link: '/zh/DateAndTime/TimePicker.md' }
            ]
          },
          {
            text: '对话框和浮出控件',
            items: [
              { text: '对话框', link: '/zh/DialogsAndFlyouts/Dialog.md' },
              { text: '浮出控件', link: '/zh/DialogsAndFlyouts/Flyout.md' },
              { text: '弹出窗口', link: '/zh/DialogsAndFlyouts/Popup.md' }
            ]
          },
          {
            text: '布局',
            items: [
              { text: '展开器', link: '/zh/Layout/Expander.md' },
              { text: '设置展开器', link: '/zh/Layout/SettingExpander.md' },
            ]
          },
          {
            text: '列表和集合',
            items: [
              { text: 'Clip (可交互表面)', link: '/zh/ListAndCollections/Clip.md' },
              { text: '框架', link: '/zh/ListAndCollections/Frame.md' },
              { text: '列表视图', link: '/zh/ListAndCollections/ListView.md' },
              { text: '设置卡片', link: '/zh/ListAndCollections/SettingCard.md' },
              { text: '表格视图', link: '/zh/ListAndCollections/TableView.md' }
            ]
          },
          {
            text: '媒体',
            items: [
              { text: '头像', link: '/zh/Media/Avatar.md' }
            ]
          },
          {
            text: '菜单和工具栏',
            items: [
              { text: '菜单', link: '/zh/MenusAndToolbars/Menu.md' },
              { text: '菜单栏', link: '/zh/MenusAndToolbars/MenuBar.md' }
            ]
          },
          {
            text: '导航',
            items: [
              { text: '导航视图', link: '/zh/Navigation/NavigationView.md' },
              { text: '分段控件', link: '/zh/Navigation/Segmented.md' },
              { text: '选择器栏', link: '/zh/Navigation/SelectorBar.md' }
            ]
          },
          {
            text: '状态和信息',
            items: [
              { text: '忙碌指示器', link: '/zh/StatusAndInfo/BusyIndicator.md' },
              { text: '信息徽章', link: '/zh/StatusAndInfo/InfoBadge.md' },
              { text: '信息栏', link: '/zh/StatusAndInfo/InfoBar.md' },
              { text: '进度条', link: '/zh/StatusAndInfo/ProgressBar.md' },
              { text: '进度环', link: '/zh/StatusAndInfo/ProgressRing.md' },
              { text: '提示框', link: '/zh/StatusAndInfo/Toast.md' },
              { text: '工具提示', link: '/zh/StatusAndInfo/ToolTip.md' }
            ]
          },
          {
            text: '文本',
            items: [
              { text: '自动建议框', link: '/zh/Text/AutoSuggestBox.md' },
              { text: '可滚动文本域', link: '/zh/Text/ScrollableTextArea.md' },
              { text: '旋转框', link: '/zh/Text/SpinBox.md' },
              { text: '文本', link: '/zh/Text/Text.md' },
              { text: '文本域', link: '/zh/Text/TextArea.md' },
              { text: '文本框', link: '/zh/Text/TextField.md' }
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
            ]
          },
          {
            text: 'リストとコレクション',
            items: [
              { text: 'Clip (インタラクティブサーフェス)', link: '/ja/ListAndCollections/Clip.md' },
              { text: 'フレーム', link: '/ja/ListAndCollections/Frame.md' },
              { text: 'リストビュー', link: '/ja/ListAndCollections/ListView.md' },
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
