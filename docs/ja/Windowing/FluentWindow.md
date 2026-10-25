# FluentWindow（Fluent ウィンドウ）

`FluentWindow` は RinUI のデスクトップアプリケーション向け標準ウィンドウです。`FluentWindowBase` のタイトルバー、ウィンドウ枠、背景効果に、`NavigationView` とページコンテンツ領域を組み合わせています。通常はウィンドウサイズ、`navigationItems`、各ページを宣言するだけで使用できます。

<VPImage
  :image="{
    light: '/assets/images/examples/FluentWindow-light.png',
    dark: '/assets/images/examples/FluentWindow-dark.png',
    alt: 'FluentWindow コンポーネントのライト／ダーク例'
  }"
  width="1000"
/>

## 基本的な使い方

<div align="center">
  <img src="/assets/images/docs/FluentWindow/example.png" alt="基本的な使い方">
</div>

```qml
import QtQuick
import RinUI

FluentWindow {
    visible: true
    width: 1100
    height: 720

    navigationItems: [
        {
            title: qsTr("ホーム"),
            page: Qt.resolvedUrl("pages/Home.qml"),
            icon: "ic_fluent_home_20_regular"
        },
        {
            title: qsTr("設定"),
            page: Qt.resolvedUrl("pages/Settings.qml"),
            icon: "ic_fluent_settings_20_regular",
            position: Position.Bottom
        }
    ]
}
```

`defaultPage` が空の場合、`NavigationView` は `navigationItems` の最初の項目を読み込みます。開始ページを固定する場合は `defaultPage` を明示します。

## Python からの起動

`RinUIWindow` を作成する前に `QApplication` が必要です：

```python
import sys

from PySide6.QtWidgets import QApplication
from RinUI import BackdropEffect, RinUIWindow, Theme

app = QApplication(sys.argv)
window = RinUIWindow("main.qml")

window.setIcon("assets/app-icon.png")
window.setTheme(Theme.Auto)
window.setBackdropEffect(BackdropEffect.Mica)

sys.exit(app.exec())
```

背景効果は Windows 専用です。その他のプラットフォームでは `BackdropEffect.None_` を使用してください。それ以外の値を指定すると `OSError` になります。

## 主なプロパティ

| プロパティ | 型 | 説明 |
| --- | --- | --- |
| `navigationView` | `NavigationView` | 内部のナビゲーションコンテナ。 |
| `navigationItems` | `var` | `NavigationView.navigationItems` に転送されるナビゲーション項目。 |
| `currentPage` | `string` | 現在のページ識別子。 |
| `defaultPage` | `string` | 起動ページ。空の場合は最初の項目を使用。 |
| `appLayerEnabled` | `bool` | コンテンツ領域のアプリレイヤー背景。 |
| `titleBarHeight` | `int` | タイトルバーの高さ。既定値はテーマの `windowTitleBarHeight`。 |
| `titleEnabled` | `bool` | タイトル文字を表示するか。 |
| `titleBarArea` | `Item` | 検索や状態表示を置くタイトルバー中央領域。 |

`FluentWindow` の既定プロパティは `content` です。直接の子要素は自由コンテンツ領域に配置されます。ページをナビゲーションスタックに含めるには、`FluentPage` を直接重ねず `navigationItems` で宣言してください。

## タイトルバーの内容

<div align="center">
  <img src="/assets/images/docs/FluentWindow/example-2.png" alt="タイトルバーの内容">
</div>

```qml
FluentWindow {
    title: "RinUI Gallery"

    titleBarArea: AutoSuggestBox {
        width: 320
        placeholderText: qsTr("Search controls...")
    }
}
```
```

`titleBarArea` はタイトルバー中央に配置されます。先頭のアイコン、戻るボタン、ウィンドウボタンはナビゲーションバーと `FluentWindowBase` が管理します。

## ウィンドウの外観

背景、角丸、枠線、テーマ変更は `FluentWindowBase` が処理します。Windows では Mica、Acrylic、Tabbed、背景なしを選択できます。macOS ではネイティブのトラフィックライトを使用し、その他のシステムでは通常のウィンドウ背景にフォールバックします。

テーマについては[テーマシステム](/ja/core/theme)を参照してください。

## ページコンテンツ

ナビゲーションページは通常 `FluentPage` を継承します：

<div align="center">
  <img src="/assets/images/docs/FluentWindow/example.png" alt="ページコンテンツ">
</div>

```qml
// pages/Home.qml
import QtQuick
import RinUI

FluentPage {
    title: qsTr("ホーム")

    Text {
        Layout.fillWidth: true
        typography: Typography.Body
        text: qsTr("ホームページの内容です。")
    }
}
```

意図的に埋め込みナビゲーションを作る場合を除き、`FluentWindow` の外側に別のトップレベル `NavigationView` を追加しないでください。

## 関連コンポーネント

- [FluentPage](/ja/Windowing/FluentPage)：ページ本文、ヘッダー、フッター、幅制約。
- [NavigationView](/ja/Navigation/NavigationView)：ページスタックとナビゲーション。
