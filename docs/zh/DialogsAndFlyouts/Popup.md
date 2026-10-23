# Popup（弹出窗口）

Popup 是一个用于在界面上方显示浮动内容的控件。它可以用于工具提示、确认对话框或其他需要浮在主界面上方的内容。

<VPImage
  :image="{
    light: '/assets/images/examples/Popup-light.png',
    dark: '/assets/images/examples/Popup-dark.png',
    alt: 'Popup 组件示例（亮色与暗色）'
  }"
  width="1000"
/>

## 基本弹出窗口


<div align="center">
  <img src="/assets/images/docs/Popup/基本弹出窗口.png" alt="基本弹出窗口 示例">
</div>

```qml
Popup {
    id: popup
    width: 200
    height: 100
    Text {
        anchors.centerIn: parent
        text: qsTr("这是一个弹出窗口")
    }
}
```

## 带位置的弹出窗口


<div align="center">
  <img src="/assets/images/docs/Popup/带位置的弹出窗口.png" alt="带位置的弹出窗口 示例">
</div>

```qml
Button {
    id: button
    text: qsTr("显示弹出窗口")
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
        text: qsTr("弹出窗口在按钮上方")
    }
}
```

## 带锚点项的弹出窗口


<div align="center">
  <img src="/assets/images/docs/Popup/带锚点项的弹出窗口.png" alt="带锚点项的弹出窗口 示例">
</div>

```qml
Rectangle {
    id: anchorRect
    width: 100
    height: 50
    color: "lightblue"
    
    Text {
        anchors.centerIn: parent
        text: qsTr("锚点")
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
        text: qsTr("弹出窗口锚定在矩形上")
    }
}
```

## 重要属性

- `position`: 弹出窗口相对于其锚点项的位置（Top, Bottom, Left, Right, TopLeft, TopRight, BottomLeft, BottomRight, Center, None）
- `anchorItem`: 用作定位弹出窗口参考点的项
- `posX` 和 `posY`: 弹出窗口的自定义 X 和 Y 坐标（根据位置和锚点项自动计算）