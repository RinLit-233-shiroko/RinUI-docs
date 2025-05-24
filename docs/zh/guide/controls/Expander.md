# 扩展器（Expander）

## 介绍

<mcurl name="Expander" url="https://learn.microsoft.com/zh-cn/windows/apps/design/controls/expander"></mcurl>

扩展器有一个标题，可以展开以显示包含更多内容的正文。当某些内容仅在部分时间相关时（例如，阅读更多信息或访问项目的附加选项），请使用扩展器。

## 示例

### 标题和内容区域带有文本的扩展器

::: code-group

```qml
Expander {
    width: 228
    contentHeight: 50
    expandDirection: Expander.Down
    text: qsTr("This text is in the header")

    Text {
        Layout.fillWidth: true
        horizontalAlignment: Text.AlignHCenter
        text: qsTr("This is in th content")
    }
}
```

:::

### 标题和内容中带有其他控件的扩展器

::: code-group

```qml
Expander {
    header: ToggleButton {
        text: qsTr("This is a ToggleButton in the header")
    }

    Button {
        Layout.alignment: Qt.AlignHCenter
        text: qsTr("This is a Button in the content")
    }
}
```

:::

### 修改扩展器的内容对齐方式

::: code-group

```qml
Expander {
    width: 500
    header: ToggleButton {
        Layout.alignment: Qt.AlignHCenter
        text: qsTr("This ToggleButton is centered")
    }

    Button {
        Layout.alignment: Qt.AlignLeft
        text: qsTr("This Button is left aligned")
    }
}
```

:::