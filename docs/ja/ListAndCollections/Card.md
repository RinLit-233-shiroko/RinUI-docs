# カード (Card)

::: warning
このコントロールは `Clip` から `Card` に名称変更されました。互換性のため `qmldir` には従来の `clip` 名が残っていますが、新しいコードでは `Card` を使用してください。
:::

`Card` はカスタマイズ可能なフレーム風の外観を持つ、`Button` を基にしたクリック可能なサーフェスです。内部の `Frame` を背景として使用し、背景色、角丸、境界線を制御するプロパティを公開します。

名前にかかわらず、`Card` は `Item.clip: true` のように子項目をグラフィカルに切り抜くためのコンポーネントではありません。スタイル付きのインタラクティブなサーフェスを提供します。

## 基本的な使い方

<div align="center">
  <img src="/assets/images/docs/Clip/example.png" alt="Card インタラクティブサーフェスの例">
</div>

`Card` は外観を定義したクリック可能領域として使用できます。継承元の `contentItem` は既定で空の `Item` なので、通常のボタンのように `text` や `icon.name` を直接表示する用途には設計されていません。QML 項目を子として追加すると、スタイル付き背景の上に表示できます。

```qml
import QtQuick 2.15
import RinUI

Card {
    id: myClickableSurface
    width: 200
    height: 100
    backgroundColor: Theme.currentTheme.colors.controlColor
    radius: 8
    borderColor: Theme.currentTheme.colors.controlBorderColor
    borderWidth: 1

    onClicked: console.log("Card surface clicked!")

    Text {
        anchors.centerIn: parent
        text: qsTr("Clickable Area")
    }
}
```

## プロパティ

- `color`: 内部フレームの背景色のエイリアス。`backgroundColor` と同様に使えます。
- `radius`: サーフェスの角丸半径。
- `borderColor`: 境界線の色。
- `borderWidth`: 境界線の幅。
- `backgroundColor`: 内部フレームに適用される背景色。
- `enabled`、`flat`、`highlighted`、`checkable` など、標準の `Button` プロパティも使用できます。

## シグナル

- `onClicked()`: Card のサーフェスがクリックされたときに発生します。
- `pressedChanged`、`released` など、その他の `Button` シグナルも使用できます。

## 注意事項

- 既定の `contentItem` は空です。ボタン風のテキストやアイコンを表示するには `contentItem` をカスタマイズまたは置換してください。単純な表示項目は `Card` の子として追加できます。
- `Card` はスタイル付きの操作可能なサーフェスであり、子項目を切り抜くコンポーネントではありません。
- 視覚的な背景は `Frame` が提供します。
