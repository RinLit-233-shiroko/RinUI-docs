# ツールチップ (ToolTip)

`ToolTip` はボタンやアイコンなどに短い説明を補足する軽量なポップアップです。Qt Quick Controls の `ToolTip` を基にし、現在のテーマに合わせた背景、境界線、文字、影を描画します。

## 基本的な使い方

`ToolTip` を対象コントロールの子として宣言し、表示テキストを設定します。`visible` をホバー状態にバインドすると、マウスを重ねたときに表示されます。

<div align="center">
  <img src="/assets/images/docs/ToolTip/example-2.png" alt="基本的な使い方">
</div>

```qml
Button {
    text: qsTr("Save")
    hoverEnabled: true

    ToolTip {
        text: qsTr("Save your changes")
        visible: parent.hovered
    }
}
```
```

## 表示遅延と表示時間

`delay` は表示までの待ち時間、`timeout` は表示時間をミリ秒で指定します。RinUI の `ToolTip` は既定で `timeout` が `-1` のため、自動的には閉じません。自動的に閉じる場合は時間を指定します。

<div align="center">
  <img src="/assets/images/docs/ToolTip/example-3.png" alt="表示遅延と表示時間">
</div>

```qml
Button {
    text: qsTr("Delete")
    hoverEnabled: true

    ToolTip {
        text: qsTr("This action cannot be undone")
        visible: parent.hovered
        delay: 500
        timeout: 3000
    }
}
```
```

## テーマカラーの変更

特定の用途に合わせて色プロパティを上書きできます。指定しない場合は RinUI の現在のテーマに追従します。

<div align="center">
  <img src="/assets/images/docs/ToolTip/example.png" alt="テーマカラーの変更">
</div>

```qml
Button {
    text: qsTr("Help")
    hoverEnabled: true

    ToolTip {
        text: qsTr("Open help")
        visible: parent.hovered
        backgroundColor: "#202020"
        borderColor: "#505050"
        textColor: "white"
    }
}
```
```

## 主なプロパティ

- `text`: ツールチップの内容。
- `visible`: 表示するかどうか。通常は対象コントロールのホバーまたはフォーカス状態にバインドします。
- `delay`: 表示までの遅延時間（ミリ秒）。
- `timeout`: 表示時間（ミリ秒）。`-1` は自動的に閉じないことを示します。
- `backgroundColor`: 背景色。既定ではテーマのアクリル背景色。
- `borderColor`: 境界線色。既定ではテーマのカード境界色。
- `textColor`: 文字色。既定ではテーマの文字色。
- `controlRadius`: 背景の角丸。既定ではテーマのボタン角丸。
