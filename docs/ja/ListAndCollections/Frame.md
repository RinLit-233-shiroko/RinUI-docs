# フレーム

RinUI の `Frame` コンポーネントは、`QtQuick.Controls.Basic.Frame` から継承するスタイル付きコンテナです。色、境界線、角の半径のプロパティを持つカスタマイズ可能な背景を提供し、オプションのホバー効果が含まれています。他のコンポーネントのベースとして、または関連するUI要素を共通の視覚スタイルでグループ化するためによく使用されます。デフォルトでは、`clip` は `true` に設定されています。

## 基本的なフレーム

`Frame` は、コンテンツを視覚的にグループ化するために使用できます。子アイテムを `Frame` 内に直接配置できます。これらの子は `Frame` の `contentItem` に親子化されます。標準のパディングプロパティを使用して、フレームの端とそのコンテンツの間にスペースを作成できます。

<div align="center">
  <img src="/assets/images/ListAndCollections/Frame/frame-basic.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

Frame {
    width: 200
    height: 150
    padding: 10 // コンテンツはこのパディング内に配置されます

    // カスタム外観プロパティ
    color: Theme.currentTheme.colors.subtleSecondaryColor // 背景色
    radius: 8 // 角の半径
    borderColor: Qt.rgba(0, 0, 0, 0.1) // 境界線の色
    borderWidth: 1 // 境界線の幅

    Text {
        anchors.centerIn: parent // contentItem の領域に対してアンカーされます
        text: qsTr("Content inside a Frame")
    }
}
```

## フレームレスモード

`frameless` プロパティを `true` に設定すると、`Frame` の表示される背景（色と境界線）が非表示になります。`Frame` 自体はレイアウトコンテナとして引き続き存在し、`clip` が `true` の場合はコンテンツをクリッピングします。これは、視覚的な装飾を追加せずにグループ化およびクリッピングする場合に便利です。

```qml
Frame {
    width: 150
    height: 100
    frameless: true
    padding: 5 // パディングはコンテンツの配置に引き続き適用されます
    clip: true // コンテンツは Frame の境界にクリップされます

    Rectangle {
        // この矩形は Frame の contentItem の子です
        anchors.fill: parent
        // マージンが負であるか、コンテンツがフレームより大きい場合、クリップされます
        anchors.margins: -10 // 例：コンテンツがフレームより大きい
        color: "lightblue" 
        Text { anchors.centerIn: parent; text: "Clipped Content"; }
    }
}
```

## ホバー効果

`hoverable` が `true`（デフォルト）の場合、マウスホバー時に `Frame` の背景の不透明度がわずかに変化し、視覚的なフィードバックを提供します。`hover` プロパティを使用して、この状態に反応できます。

```qml
Frame {
    width: 100
    height: 100
    color: "lightgray"
    hoverable: true // デフォルト

    Text {
        anchors.centerIn: parent
        text: parent.hover ? qsTr("Hovered!") : qsTr("Hover me")
    }
}
```

## 主なプロパティ

*   `color`: `color` - フレームの背景色。デフォルトは `Theme.currentTheme.colors.cardColor` です。
*   `radius`: `real` (背景 `Rectangle` の `radius` エイリアス) - フレーム背景の角の半径。デフォルトは `Theme.currentTheme.appearance.smallRadius` です。
*   `borderColor`: `color` - フレームの境界線の色。デフォルトは `Theme.currentTheme.colors.cardBorderColor` です。
*   `borderWidth`: `int` - フレームの境界線の幅。デフォルトは `Theme.currentTheme.appearance.borderWidth` です。
*   `frameless`: `bool` - `true` の場合、背景の矩形（色と境界線を表示）は非表示になります。デフォルトは `false` です。
*   `hoverable`: `bool` - `true` の場合、背景でのホバー検出と視覚的フィードバック（不透明度の変更）を有効にします。デフォルトは `true` です。
*   `hover`: `bool` (読み取り専用) - マウスが現在フレーム上にあるかどうかを示します（`hoverable` が `true` の場合）。
*   `clip`: `bool` - (`Item` から継承、RinUI の `Frame` ではデフォルトで `true` に設定) 子がフレームの境界にクリップされるかどうかを決定します。

**`QtQuick.Controls.Basic.Frame` から継承:**
*   `contentItem`: `Item` - 子アイテムの実際のコンテナ。QML で `Frame` の直接の子として宣言された子は、自動的にこの `contentItem` に再親子化されます。
*   パディングプロパティ (`padding`, `topPadding`, `leftPadding`, `rightPadding`, `horizontalPadding`, `verticalPadding`) - これらはフレームの外側の端と `contentItem` の間のスペースを制御します。

## ベースコンポーネントとしての使用

RinUI は `Frame` を他のコンポーネントの基礎的な構成要素として利用します。たとえば：
*   `SettingItem` は `Frame` から継承し、設定ページ内の個々の行に一貫した構造を提供します。
*   `Clip` コンポーネントは、スタイル付きの背景として内部的に `Frame` を使用します。

これは、一貫したテーマを持つスタイル付きコンテナを作成する上での `Frame` の有用性を示しています。
```
