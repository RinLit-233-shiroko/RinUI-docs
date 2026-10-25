# スワイプビュー (SwipeView)

`SwipeView` はコレクション内のページを一度に 1 つ表示し、ページ間の移動を可能にします。画像ギャラリー、ステップ形式のコンテンツ、カルーセルなどに適しています。RinUI のコンポーネントは `Item` をベースとし、内部の Qt Quick `SwipeView` の主要なプロパティを公開します。

## 基本的な使い方

各ページを `SwipeView` の子項目として宣言します。ページはビュー領域全体に表示されます。

<div align="center">
  <img src="/assets/images/docs/SwipeView/basic-usage.png" alt="基本的な使い方">
</div>

```qml
SwipeView {
    id: view
    width: 400
    height: 270
    currentIndex: 0

    Rectangle { color: "#E74856" }
    Rectangle { color: "#0078D4" }
    Rectangle { color: "#6B69D6" }
}
```
```

## 垂直方向

`orientation` に `Qt.Vertical` を設定すると、上下方向にページを切り替えます。


```qml
SwipeView {
    width: 400
    height: 270
    orientation: Qt.Vertical

    Rectangle { color: "#E74856" }
    Rectangle { color: "#0078D4" }
    Rectangle { color: "#6B69D6" }
}
```
```

## 現在のページと操作

現在のページは `currentIndex` で取得・設定します。`interactive: false` にするとジェスチャーによる切り替えを無効にできますが、コードからのインデックス変更は可能です。


```qml
SwipeView {
    id: pages
    currentIndex: 1
    interactive: true
}

Button {
    text: qsTr("Next")
    onClicked: pages.currentIndex = (pages.currentIndex + 1) % pages.count
}
```
```

## 主なプロパティ

| プロパティ | 説明 |
| --- | --- |
| `currentIndex` | 現在のページのインデックス。 |
| `count` | ページ数。 |
| `interactive` | ジェスチャーでページを切り替えられるかどうか。 |
| `orientation` | ページ方向。`Qt.Horizontal` または `Qt.Vertical`。 |
| `horizontal` / `vertical` | 方向を指定するための便宜プロパティ。 |
| `carel` | ホバー時に前後移動ボタンを表示するかどうか（コンポーネント API の綴りをそのまま使用）。 |

## PageIndicator との連携

現在位置を示すには、[PageIndicator](/ja/PageIndicator) の `currentIndex` と `count` を連携させます。
