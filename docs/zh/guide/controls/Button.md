# 按钮（Button）

## 介绍

<mcurl name="Button" url="https://learn.microsoft.com/zh-cn/windows/apps/design/controls/buttons"></mcurl>

按钮是允许用户启动操作的交互式元素。使用按钮来执行即时操作。

## 示例

### 一个带有文本内容的简单按钮。

::: code-group

```qml
Button {
    text: qsTr("Standard QML Button")
}
```

:::

### 一个带有图形内容的按钮。

::: code-group

```qml
Row {
    spacing: 8
    Button {
        icon.source: Qt.resolvedUrl("../../assets/BA_Pic_Shiroko-chibi.png")
        text: qsTr("Sunaookami Shiroko")
    }
    Button {
        icon.name: "ic_fluent_button_20_regular"
        text: qsTr("Button with Icon")
    }
}
```

:::

### 内容过长时换行的按钮。

::: code-group

```qml
Column {
    spacing: 8
    Button {
        width: parent.width
        text: qsTr("This is some text that is too long and the text will get cut off.")
    }
    RowLayout {
        width: parent.width
        spacing: 8
        Button {
            text: qsTr("This is some text \nthat is too long \nbut with wrapping.")
        }
        Button {
            Layout.fillWidth: true
            text: qsTr("This is some text that is too long and the text will get cut off.")
        }
    }
}
```

:::

### 应用了强调样式的按钮。

::: code-group

```qml
Button {
    highlighted: true
    text: qsTr("Accent Style Button")
}
```

:::

### 应用了平面样式的按钮。

::: code-group

```qml
Button {
    flat: true
    text: qsTr("Flat Style Button")
}
```

:::