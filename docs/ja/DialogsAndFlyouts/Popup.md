# Popup（ポップアップ）

Popup は、インターフェースの上にフローティングコンテンツを表示するためのコントロールです。ツールチップ、確認、またはメインインターフェースの上にフロートする必要がある他のコンテンツに使用できます。

## 基本ポップアップ

<div align="center">
  <img src="/assets/images/docs/Popup/example-2.png" alt="基本ポップアップ">
</div>

```qml
Popup {
    id: popup
    width: 200
    height: 100
    Text {
        anchors.centerIn: parent
        text: qsTr("これはポップアップです")
    }
}
```

## 位置付きポップアップ

<div align="center">
  <img src="/assets/images/docs/Popup/example-3.png" alt="位置付きポップアップ">
</div>

```qml
Button {
    id: button
    text: qsTr("ポップアップを表示")
    onClicked: {
        popup.position = Position.Top
        popup.open()
    }
}

Popup {
    id: popup
    width: 200
    height: 100
    position: Position.Top
    Text {
        anchors.centerIn: parent
        text: qsTr("ボタン上部のポップアップ")
    }
}
```

## アンカー付きポップアップ

<div align="center">
  <img src="/assets/images/docs/Popup/example.png" alt="アンカー付きポップアップ">
</div>

```qml
Rectangle {
    id: anchorRect
    width: 100
    height: 50
    color: "lightblue"
    
    Text {
        anchors.centerIn: parent
        text: qsTr("アンカー")
    }
    
    MouseArea {
        anchors.fill: parent
        onClicked: {
            popup.anchorItem = anchorRect
            popup.position = Position.Right
            popup.open()
        }
    }
}

Popup {
    id: popup
    width: 200
    height: 100
    anchorItem: anchorRect
    position: Position.Right
    Text {
        anchors.centerIn: parent
        text: qsTr("矩形にアンカーされたポップアップ")
    }
}
```

## 重要なプロパティ

- `position`: アンカー項目に対するポップアップの位置（Top、Bottom、Left、Right、TopLeft、TopRight、BottomLeft、BottomRight、Center、None）
- `anchorItem`: ポップアップの位置決定の基準点として使用する項目
- `posX` と `posY`: ポップアップのカスタムX座標とY座標（位置とアンカー項目に基づいて自動計算）