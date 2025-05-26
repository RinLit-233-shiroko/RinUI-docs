# Clip (インタラクティブサーフェス)

「リストとコレクション」カテゴリにある `Clip` コンポーネントは、カスタマイズ可能なフレームのような外観を持つクリック可能なサーフェスとして機能する特殊な `Button` です。内部の `Frame` コンポーネントを背景に使用し、このフレームの色、角の半径、および境界線を制御するプロパティを公開します。

その名前にもかかわらず、`Clip` は主に伝統的な QML の意味での子コンテンツのグラフィカルクリッピング（つまり、`Item` の `clip: true` プロパティを介して）を実行するものではありません。代わりに、スタイル付きのインタラクティブなサーフェスを提供します。

## 基本的な使用法

`Clip` は、定義された外観を持つ基本的なクリック可能領域として使用できます。その `contentItem`（`Button` から継承）はこのコンポーネントのソースではデフォルトで空の `Item` であるため、標準の `Button` の `text` や `icon.name` プロパティのように直接テキストやアイコンを表示するようには設計されていません。コンテンツを表示する必要がある場合は、通常、QML アイテムを `Clip` の子として配置し、それらがスタイル付きの背景の上に表示されるようにします。

<div align="center">
  <img src="/assets/images/ListAndCollections/Clip/clip-basic.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

Clip {
    id: myClickableSurface
    width: 200
    height: 100
    
    // 'backgroundColor' またはエイリアス 'color' を使用してサーフェスの色を設定します
    backgroundColor: Theme.currentTheme.colors.controlColor 
    radius: 8
    borderColor: Theme.currentTheme.colors.controlBorderColor
    borderWidth: 1
    
    onClicked: {
        console.log("Clip surface clicked!");
    }

    // 上にコンテンツを視覚的に追加する例
    Text {
        anchors.centerIn: parent
        text: qsTr("Clickable Area")
    }
}
```

## 主なプロパティ

*   `color`: `color` (内部 `Frame` の背景色のエイリアスで、`Button` の `backgroundColor` にも関連付けられています) - サーフェスの背景色を設定します。`backgroundColor` と同じように使用できます。
*   `radius`: `real` (内部 `Frame` の `radius` エイリアス) - サーフェスの角の半径を設定します。
*   `borderColor`: `color` (内部 `Frame` の `borderColor` エイリアス) - サーフェスの境界線の色を設定します。
*   `borderWidth`: `real` (内部 `Frame` の `borderWidth` エイリアス) - サーフェスの境界線の幅を設定します。

**`Button` から継承:**
*   `backgroundColor`: `color` - このプロパティは内部 `Frame` の背景色を直接制御します。`Clip` の `color` プロパティはこれのエイリアスです。
*   `enabled`、`flat`、`highlighted`、`checkable`、视覚状態プロパティなどの標準的な `Button` プロパティが利用可能で、`Clip` の外観と動作に影響します。

## シグナル

*   `onClicked()`: `Clip` 領域がクリックされたときに発行されます。
*   `Button` の他のシグナル（例：`pressedChanged`、`released`）も利用可能です。

## 注釈

*   **コンテンツ表示**：この `Clip` コンポーネントの `contentItem` は空の `Item` です。典型的なボタンのように `Clip` のインタラクティブ領域内にテキストやアイコンを定義済みコンテンツの一部として表示する（`text` や `icon.name` を使用する）には、`contentItem` をカスタマイズまたは置換する必要があります。単に視覚要素を上に配置する場合は、`Clip` 自体の子にする（例のように）ことで機能します。
*   **命名**：主に子のグラフィックをクリッピングするアイテムを期待している場合、「Clip」という名前は少し誤解を招く可能性があります。これはむしろ、インタラクティブでスタイル付きのサーフェス、または「FrameButton」として機能します。
*   **背景フレーム**: 視覚的な背景を提供する実際のコンポーネントは `Frame` です。`Frame` コンポーネント（別途文書化されている場合）を理解すると、その特定のスタイリング機能に関するより多くのコンテキストが得られる可能性があります。

```
