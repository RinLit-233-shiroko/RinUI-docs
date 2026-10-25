# NavigationBar（ナビゲーションバー）

NavigationBar は、垂直のナビゲーション領域を提供するコントロールです。 折り畳み可能で、クリック可能なナビゲーション項目を含み、異なるページ間の移動に使用できます。

## 基本ナビゲーションバー

<div align="center">
  <img src="/assets/images/docs/NavigationBar/example-2.png" alt="基本ナビゲーションバー">
</div>

```qml
NavigationBar {
    id: navigationBar
    windowTitle: qsTr("アプリケーション")
    windowIcon: "qrc:/images/icon.png"
    windowWidth: 1200
    
    navigationItems: [
        {title: qsTr("ホーム"), page: "HomePage.qml", icon: "ic_fluent_home_20_regular"},
        {title: qsTr("設定"), page: "SettingsPage.qml", icon: "ic_fluent_settings_20_regular"},
        {title: qsTr("概要"), page: "AboutPage.qml", icon: "ic_fluent_info_20_regular"}
    ]
}
```

## 折り畳まれたナビゲーションバー

<div align="center">
  <img src="/assets/images/docs/NavigationBar/example.png" alt="折り畳まれたナビゲーションバー">
</div>

```qml
NavigationBar {
    id: navigationBar
    windowTitle: qsTr("アプリケーション")
    windowIcon: "qrc:/images/icon.png"
    windowWidth: 800
    collapsed: true
    
    navigationItems: [
        {title: qsTr("ホーム"), page: "HomePage.qml", icon: "ic_fluent_home_20_regular"},
        {title: qsTr("設定"), page: "SettingsPage.qml", icon: "ic_fluent_settings_20_regular"},
        {title: qsTr("概要"), page: "AboutPage.qml", icon: "ic_fluent_info_20_regular"}
    ]
}
```

## 重要なプロパティ

- `collapsed`: ナビゲーションバーが折り畳まれるかどうか
- `navigationItems`: タイトル、ページ、アイコンを持つナビゲーション項目の配列
- `titleBarEnabled`: ナビゲーションバーの上部にタイトルバーを表示するかどうか
- `expandWidth`: 展開されたナビゲーションバーの幅
- `minimumExpandWidth`: ナビゲーションバーを展開する最小幅
- `windowTitle`: タイトルバーに表示するタイトル
- `windowIcon`: タイトルバーに表示するアイコン
- `windowWidth`: ウィンドウの幅
- `stackView`: ページナビゲーションに使用する StackView
- `currentPage`: 現在のページの URL

## 重要なメソッド

- `isNotOverMinimumWidth()`: ウィンドウが最小幅より小さい場合は true を返す