# NavigationView（ナビゲーションビュー）

`NavigationView` は縦方向のナビゲーションバー、ページスタック、コンテンツカードを組み合わせ、RinUI アプリのトップレベルページ切り替えを担当します。`FluentWindow` には既に含まれているため、手動で作成するのはカスタムウィンドウや埋め込みレイアウトの場合だけです。

## FluentWindow での使用

最も簡単な方法は `FluentWindow` にナビゲーション項目を宣言することです：

<div align="center">
  <img src="/assets/images/docs/NavigationView/example-2.png" alt="FluentWindow での使用">
</div>

```qml
FluentWindow {
    width: 1100
    height: 720

    navigationItems: [
        {
            title: qsTr("ホーム"),
            page: Qt.resolvedUrl("pages/Home.qml"),
            icon: "ic_fluent_home_20_regular"
        },
        {
            title: qsTr("ドキュメント"),
            page: Qt.resolvedUrl("pages/Docs.qml"),
            icon: "ic_fluent_document_20_regular",
            subItems: [
                {
                    title: qsTr("はじめに"),
                    page: Qt.resolvedUrl("pages/GettingStarted.qml")
                }
            ]
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

`page` には QML ファイルパス、`Qt.resolvedUrl()` の結果、または `Component` を指定できます。`position` は `Position.Top`、`Position.Center`、`Position.None`、`Position.Bottom` を受け付けます。

## 単体での使用

<div align="center">
  <img src="/assets/images/docs/NavigationView/example-3.png" alt="単体での使用">
</div>

```qml
FluentWindow {
    width: 1100
    height: 720
    defaultPage: homePage

    navigationItems: [
        {
            title: qsTr("Home"),
            page: homePage,
            icon: "ic_fluent_home_20_regular"
        }
    ]

    Component {
        id: homePage
        Item {
            Text {
                anchors.centerIn: parent
                text: qsTr("Home page")
                font.pixelSize: 24
            }
        }
    }
}
```
```

単体で使用する場合は、ウィンドウサイズ、タイトル、ウィンドウ操作状態を参照できるよう `window` を指定する必要があります。

## ナビゲーションの動作

- `defaultPage` が空の場合は最初のナビゲーション項目を読み込みます。
- ウィンドウ幅が `minimumExpandWidth`（既定 `900`）未満になるとナビゲーションバーが自動的に折りたたまれます。
- `navExpandWidth: 0` はタイトルに基づく動的幅、`0` より大きい値は固定幅です。
- 動的幅は `minNavbarWidth` と `maxNavbarWidth` の間（既定約 `200`～`400`）に制限されます。
- `appLayerEnabled` はコンテンツカード背景、`contentCornerClipEnabled` は角丸クリップを制御します。

## ページ切り替えメソッド

### `push(page, properties)`

現在のページを履歴に追加して移動します。`properties` は対象ページに渡されます：

```qml
navigationView.push(Qt.resolvedUrl("pages/Detail.qml"), {
    itemId: 42
})
```
```

### `pushStack(page, properties)`

`pushStack()` は `safePush(page, false, true, properties)` の簡易入口で、ナビゲーションバー由来の遷移として扱います。内部では `safePush()` を経由し、`stackView.replace(...)` で現在のページを置き換えるため、独立した StackView 履歴を作るものではありません。

戻る履歴は `NavigationView.lastPages` が管理し、直近 2 ページを保持します。アプリケーション側で遷移フローを明示的に制御する場合に利用できますが、Qt の `StackView.push()` を直接呼ぶ操作とは異なります。

### `pop()` / `safePop()`

前のページへ戻ります。`safePop()` は履歴が空でも安全に何も行わず、ナビゲーションバーの戻るボタンでも使用されます。

### `safePush(page, reload, fromNavigation, properties)`

詳細な制御が必要な低レベルメソッドです。通常のアプリケーションコードでは `push()` を優先してください。

## シグナル

`pageChanged()` は `currentPage` の更新後、`stackView.replace(...)` の遷移が完了する前に発行されます。ナビゲーション状態、タイトル、選択表示の同期には使えますが、対象ページの進入アニメーションはまだ完了していない可能性があります：

```qml
NavigationView {
    onPageChanged: {
        console.log("現在のページ:", currentPage)
    }
}
```

対象ページのレイアウトやアニメーション完了後に処理したい場合は、`pageChanged()` を完了通知とみなさず、対象ページ自身の `Component.completed`、`StackView.statusChanged`、または対応するアニメーション終了イベントを監視してください。

## 主なプロパティ

| プロパティ | 既定値 | 説明 |
| --- | --- | --- |
| `navigationItems` | `[]` | ナビゲーション項目の配列。 |
| `currentPage` | `""` | 現在のページキーまたは URL。 |
| `defaultPage` | `""` | 起動ページ。 |
| `lastPages` | `[]` | 最大 2 ページを保持する戻る履歴。 |
| `navExpandWidth` | `0` | 展開幅。`0` は動的幅。 |
| `navMinimumExpandWidth` | `900` | 自動折りたたみのウィンドウ幅しきい値。 |
| `appLayerEnabled` | `true` | コンテンツ領域のアプリレイヤー背景。 |
| `contentCornerClipEnabled` | `true` | コンテンツカードの角丸クリップ。 |
| `pushEnterFromY` | `height / 2` | ページ進入アニメーションの開始 Y オフセット。 |

## 関連コンポーネント

- [NavigationBar](/ja/Navigation/NavigationBar)：基盤となる縦方向ナビゲーションバー。
- [FluentWindow](/ja/Windowing/FluentWindow)：`NavigationView` を内蔵するウィンドウ。
- [FluentPage](/ja/Windowing/FluentPage)：ナビゲーションページの標準コンテナ。
- [Segmented](/ja/Navigation/Segmented) と [SelectorBar](/ja/Navigation/SelectorBar)：その他のナビゲーションコントロール。
