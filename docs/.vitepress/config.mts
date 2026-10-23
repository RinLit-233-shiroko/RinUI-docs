import { defineConfig } from 'vitepress'

const currentYear = new Date().getFullYear()

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RinUI Documentation",
  description: "RinUI development documentation - A Fluent Design-like UI library for Qt Quick (QML)",
  head: [
      ['link', { rel: 'icon', href: '/assets/images/home/rinui-app.png' }]  // 添加网站图标
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
              { text: 'Iconography', link: '/Design/Iconography.md' },
            ]
          },
          {
            text: 'BasicInput',
            items: [
              { text: 'Button', link: '/BasicInput/Button.md' },
              { text: 'CheckBox', link: '/BasicInput/CheckBox.md' },
              { text: 'ColorPicker', link: '/BasicInput/ColorPicker.md' },
              { text: 'ComboBox', link: '/BasicInput/ComboBox.md' },
              { text: 'DropDownButton', link: '/BasicInput/DropDownButton.md' },
              { text: 'Hyperlink', link: '/BasicInput/Hyperlink.md' },
              { text: 'PillButton', link: '/BasicInput/PillButton.md' },
              { text: 'RadioButton', link: '/BasicInput/RadioButton.md' },
              { text: 'RoundButton', link: '/BasicInput/RoundButton.md' },
              { text: 'Slider', link: '/BasicInput/Slider.md' },
              { text: 'Switch', link: '/BasicInput/Switch.md' },
              { text: 'TextArea', link: '/BasicInput/TextArea.md' },
              { text: 'TextField', link: '/BasicInput/TextField.md' },
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
              { text: 'SettingItem', link: '/Layout/SettingItem.md' },
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
              { text: 'MenuBar', link: '/MenusAndToolbars/MenuBar.md' },
            ]
          },
          {
            text: 'Navigation',
            items: [
              { text: 'NavigationView', link: '/Navigation/NavigationView.md' },
              { text: 'Segmented', link: '/Navigation/Segmented.md' },
              { text: 'SelectorBar', link: '/Navigation/SelectorBar.md' },
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
              { text: 'ToolTip', link: '/StatusAndInfo/ToolTip.md' }
            ]
          },
          {
            text: 'Text',
            items: [
              { text: 'AutoSuggestBox', link: '/BasicInput/AutoSuggestBox.md' },
              { text: 'ScrollableTextArea', link: '/Text/ScrollableTextArea.md' },
              { text: 'SpinBox', link: '/BasicInput/SpinBox.md' },
              { text: 'TextArea', link: '/BasicInput/TextArea.md' },
              { text: 'TextField', link: '/BasicInput/TextField.md' }
            ]
          },
          {
            text: 'Windowing',
            items: [
              { text: 'FluentWindow', link: '/Windowing/FluentWindow.md' },
              { text: 'FluentPage', link: '/Windowing/FluentPage.md' }
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
              { text: '浮层管理器', link: '/zh/core/floatLayer' },
              { text: '图标', link: '/zh/Design/Iconography.md' }
            ]
          },
          {
            text: '基本输入',
            items: [
              { text: '按钮 (Button)', link: '/zh/BasicInput/Button.md' },
              { text: '复选框 (CheckBox)', link: '/zh/BasicInput/CheckBox.md' },
              { text: '颜色选择器 (ColorPicker)', link: '/zh/BasicInput/ColorPicker.md' },
              { text: '组合框 (ComboBox)', link: '/zh/BasicInput/ComboBox.md' },
              { text: '下拉按钮 (DropDownButton)', link: '/zh/BasicInput/DropDownButton.md' },
              { text: '超链接 (Hyperlink)', link: '/zh/BasicInput/Hyperlink.md' },
              { text: '胶囊按钮 (PillButton)', link: '/zh/BasicInput/PillButton.md' },
              { text: '单选按钮 (RadioButton)', link: '/zh/BasicInput/RadioButton.md' },
              { text: '圆形按钮 (RoundButton)', link: '/zh/BasicInput/RoundButton.md' },
              { text: '滑块 (Slider)', link: '/zh/BasicInput/Slider.md' },
              { text: '开关 (Switch)', link: '/zh/BasicInput/Switch.md' },
              { text: '文本域 (TextArea)', link: '/zh/BasicInput/TextArea.md' },
              { text: '文本框 (TextField)', link: '/zh/BasicInput/TextField.md' },
              { text: '切换按钮 (ToggleButton)', link: '/zh/BasicInput/ToggleButton.md' },
              { text: '工具按钮 (ToolButton)', link: '/zh/BasicInput/ToolButton.md' }
            ]
          },
          {
            text: '日期和时间',
            items: [
              { text: '日历 (Calendar)', link: '/zh/DateAndTime/Calendar.md' },
              { text: '日历日期选择器 (CalendarDatePicker)', link: '/zh/DateAndTime/CalendarDatePicker.md' },
              { text: '日期选择器 (DatePicker)', link: '/zh/DateAndTime/DatePicker.md' },
              { text: '时间选择器 (TimePicker)', link: '/zh/DateAndTime/TimePicker.md' }
            ]
          },
          {
            text: '对话框和浮出控件',
            items: [
              { text: '对话框 (Dialog)', link: '/zh/DialogsAndFlyouts/Dialog.md' },
              { text: '浮出控件 (Flyout)', link: '/zh/DialogsAndFlyouts/Flyout.md' },
              { text: '弹出窗口 (Popup)', link: '/zh/DialogsAndFlyouts/Popup.md' }
            ]
          },
          {
            text: '布局',
            items: [
              { text: '展开器 (Expander)', link: '/zh/Layout/Expander.md' },
              { text: '设置展开器 (SettingExpander)', link: '/zh/Layout/SettingExpander.md' },
              { text: '设置项 (SettingItem)', link: '/zh/Layout/SettingItem.md' },
            ]
          },
          {
            text: '列表和集合',
            items: [
              { text: 'Clip (可交互表面) (Clip)', link: '/zh/ListAndCollections/Clip.md' },
              { text: '框架 (Frame)', link: '/zh/ListAndCollections/Frame.md' },
              { text: '列表视图 (ListView)', link: '/zh/ListAndCollections/ListView.md' },
              { text: '设置卡片 (SettingCard)', link: '/zh/ListAndCollections/SettingCard.md' },
              { text: '表格视图 (TableView)', link: '/zh/ListAndCollections/TableView.md' }
            ]
          },
          {
            text: '媒体',
            items: [
              { text: '头像 (Avatar)', link: '/zh/Media/Avatar.md' }
            ]
          },
          {
            text: '菜单和工具栏',
            items: [
              { text: '菜单 (Menu)', link: '/zh/MenusAndToolbars/Menu.md' },
              { text: '菜单栏 (MenuBar)', link: '/zh/MenusAndToolbars/MenuBar.md' },
            ]
          },
          {
            text: '导航',
            items: [
              { text: '导航视图 (NavigationView)', link: '/zh/Navigation/NavigationView.md' },
              { text: '分段控件 (Segmented)', link: '/zh/Navigation/Segmented.md' },
              { text: '选择器栏 (SelectorBar)', link: '/zh/Navigation/SelectorBar.md' }
            ]
          },
          {
            text: '状态和信息',
            items: [
              { text: '忙碌指示器 (BusyIndicator)', link: '/zh/StatusAndInfo/BusyIndicator.md' },
              { text: '信息徽章 (InfoBadge)', link: '/zh/StatusAndInfo/InfoBadge.md' },
              { text: '信息栏 (InfoBar)', link: '/zh/StatusAndInfo/InfoBar.md' },
              { text: '进度条 (ProgressBar)', link: '/zh/StatusAndInfo/ProgressBar.md' },
              { text: '进度环 (ProgressRing)', link: '/zh/StatusAndInfo/ProgressRing.md' },
              { text: '工具提示 (ToolTip)', link: '/zh/StatusAndInfo/ToolTip.md' }
            ]
          },
          {
            text: '文本',
            items: [
              { text: '自动建议框 (AutoSuggestBox)', link: '/zh/BasicInput/AutoSuggestBox.md' },
              { text: '可滚动文本域 (ScrollableTextArea)', link: '/zh/Text/ScrollableTextArea.md' },
              { text: '旋转框 (SpinBox)', link: '/zh/BasicInput/SpinBox.md' },
              { text: '文本域 (TextArea)', link: '/zh/BasicInput/TextArea.md' },
              { text: '文本框 (TextField)', link: '/zh/BasicInput/TextField.md' }
            ]
          },
          {
            text: '窗口管理',
            items: [
              { text: 'FluentWindow', link: '/zh/Windowing/FluentWindow.md' },
              { text: 'FluentPage', link: '/zh/Windowing/FluentPage.md' }
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
              { text: 'フロートレイヤーマネージャー', link: '/ja/core/floatLayer' },
              { text: 'アイコンビジュアル', link: '/ja/Design/Iconography.md' }
            ]
          },
          {
            text: '基本入力',
            items: [
              { text: 'ボタン', link: '/ja/BasicInput/Button.md' },
              { text: 'チェックボックス', link: '/ja/BasicInput/CheckBox.md' },
              { text: 'カラーピッカー', link: '/ja/BasicInput/ColorPicker.md' },
              { text: 'コンボボックス', link: '/ja/BasicInput/ComboBox.md' },
              { text: 'ドロップダウンボタン', link: '/ja/BasicInput/DropDownButton.md' },
              { text: 'ハイパーリンク', link: '/ja/BasicInput/Hyperlink.md' },
              { text: 'ピルボタン', link: '/ja/BasicInput/PillButton.md' },
              { text: 'ラジオボタン', link: '/ja/BasicInput/RadioButton.md' },
              { text: 'ラウンドボタン', link: '/ja/BasicInput/RoundButton.md' },
              { text: 'スライダー', link: '/ja/BasicInput/Slider.md' },
              { text: 'スイッチ', link: '/ja/BasicInput/Switch.md' },
              { text: 'テキストエリア', link: '/ja/BasicInput/TextArea.md' },
              { text: 'テキストフィールド', link: '/ja/BasicInput/TextField.md' },
              { text: 'トグルボタン', link: '/ja/BasicInput/ToggleButton.md' },
              { text: 'ツールボタン', link: '/ja/BasicInput/ToolButton.md' }
            ]
          },
          {
            text: '日付と時刻',
            items: [
              { text: 'カレンダー', link: '/ja/DateAndTime/Calendar.md' },
              { text: 'カレンダー日付ピッカー', link: '/ja/DateAndTime/CalendarDatePicker.md' },
              { text: '日付ピッカー', link: '/ja/DateAndTime/DatePicker.md' },
              { text: '時刻ピッカー', link: '/ja/DateAndTime/TimePicker.md' }
            ]
          },
          {
            text: 'ダイアログとフライアウト',
            items: [
              { text: 'ダイアログ', link: '/ja/DialogsAndFlyouts/Dialog.md' },
              { text: 'フライアウト', link: '/ja/DialogsAndFlyouts/Flyout.md' },
              { text: 'ポップアップ', link: '/ja/DialogsAndFlyouts/Popup.md' }
            ]
          },
          {
            text: 'レイアウト',
            items: [
              { text: 'エキスパンダー', link: '/ja/Layout/Expander.md' },
              { text: '設定エキスパンダー', link: '/ja/Layout/SettingExpander.md' },
              { text: '設定項目', link: '/ja/Layout/SettingItem.md' },
            ]
          },
          {
            text: 'リストとコレクション',
            items: [
              { text: 'Clip (インタラクティブサーフェス)', link: '/ja/ListAndCollections/Clip.md' },
              { text: 'フレーム', link: '/ja/ListAndCollections/Frame.md' },
              { text: 'リストビュー', link: '/ja/ListAndCollections/ListView.md' },
              { text: '設定カード', link: '/ja/ListAndCollections/SettingCard.md' },
              { text: 'テーブルビュー', link: '/ja/ListAndCollections/TableView.md' }
            ]
          },
          {
            text: 'メディア',
            items: [
              { text: 'アバター', link: '/ja/Media/Avatar.md' }
            ]
          },
          {
            text: 'メニューとツールバー',
            items: [
              { text: 'メニュー', link: '/ja/MenusAndToolbars/Menu.md' },
              { text: 'メニューバー', link: '/ja/MenusAndToolbars/MenuBar.md' },
            ]
          },
          {
            text: 'ナビゲーション',
            items: [
              { text: 'ナビゲーションビュー', link: '/ja/Navigation/NavigationView.md' },
              { text: 'セグメント', link: '/ja/Navigation/Segmented.md' },
              { text: 'セレクターバー', link: '/ja/Navigation/SelectorBar.md' }
            ]
          },
          {
            text: '状態と情報',
            items: [
              { text: 'ビジーインジケーター', link: '/ja/StatusAndInfo/BusyIndicator.md' },
              { text: '情報バッジ', link: '/ja/StatusAndInfo/InfoBadge.md' },
              { text: 'インフォバー', link: '/ja/StatusAndInfo/InfoBar.md' },
              { text: 'プログレスバー', link: '/ja/StatusAndInfo/ProgressBar.md' },
              { text: 'プログレスリング', link: '/ja/StatusAndInfo/ProgressRing.md' },
              { text: 'ツールチップ', link: '/ja/StatusAndInfo/ToolTip.md' }
            ]
          },
          {
            text: 'テキスト',
            items: [
              { text: 'オートサジェストボックス', link: '/ja/BasicInput/AutoSuggestBox.md' },
              { text: 'スクロール可能テキストエリア', link: '/ja/Text/ScrollableTextArea.md' },
              { text: 'スピンボックス', link: '/ja/BasicInput/SpinBox.md' },
              { text: 'テキストエリア', link: '/ja/BasicInput/TextArea.md' },
              { text: 'テキストフィールド', link: '/ja/BasicInput/TextField.md' }
            ]
          },
          {
            text: 'ウィンドウ管理',
            items: [
              { text: 'FluentWindow', link: '/ja/Windowing/FluentWindow.md' },
              { text: 'FluentPage', link: '/ja/Windowing/FluentPage.md' }
            ]
          }
        ],
      }
    }
  },

  themeConfig: {
    logo: '/assets/images/home/rinui-app.png',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/RinLit-233-shiroko/Rin-UI' }
    ],

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${currentYear} RinLit · <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer"><strong>琼ICP备2026014960号-1</strong></a>`
    }
  }
})
