# 信息条（InfoBar）

## 介绍

<mcurl name="InfoBar" url="https://learn.microsoft.com/zh-cn/windows/apps/design/controls/info-bar"></mcurl>

当需要通知用户、让用户确认或对应用程序状态变化采取行动时，可以使用信息条控件。默认情况下，通知将保留在内容区域中，直到用户关闭，但不会强制中断用户流程。

## 示例

### 可关闭的信息条，可选择更改其严重性

::: code-group

```qml
InfoBar {
    severity: Severity.Info
    title: qsTr("Title")
    text: qsTr("Essential app message for your users to be informed of, acknowledge, or take action on.")
    closable: true
}
```

:::

### 可关闭的信息条，带有长或短文本消息和各种按钮

::: code-group

```qml
InfoBar {
    title: qsTr("World Setting")
    text: qsTr("A story of friendship, youth, and love is about to unfold.")
    closable: true

    customContent: [
        Button {
            text: qsTr("Action")
        }
    ]
}

InfoBar {
    title: qsTr("World Setting")
    text: qsTr("Kivotos — a mysterious and vast land where girls with strange halos above their heads live. However, the peaceful life under the management of the Prime Student Council is shattered when the president suddenly disappears without a trace.")
    closable: true

    customContent: [
        Hyperlink {
            text: qsTr("What is Blue Archive?")
            openUrl: "https://bluearchive.nexon.com/"
        }
    ]
}
```

:::

### 可关闭的信息条，可选择显示关闭按钮和图标

::: code-group

```qml
InfoBar {
    title: qsTr("Title")
    text: qsTr("Essential app message for your users to be informed of, acknowledge, or take action on.")
    closable: false
    iconVisible: false
}
```

:::

### 具有不同弹出位置和样式的信息条

::: code-group

```qml
Column {
    spacing: 6
    InfoBar {
        title: qsTr("InfoBar with TopLeft popup position")
        text: qsTr("This is a InfoBar with TopLeft popup position.")
        popupPosition: Position.TopLeft
    }
    InfoBar {
        title: qsTr("InfoBar with TopCenter popup position")
        text: qsTr("This is a InfoBar with TopCenter popup position.")
        popupPosition: Position.TopCenter
    }
    InfoBar {
        title: qsTr("InfoBar with TopRight popup position")
        text: qsTr("This is a InfoBar with TopRight popup position.")
        popupPosition: Position.TopRight
    }
    InfoBar {
        title: qsTr("InfoBar with BottomLeft popup position")
        text: qsTr("This is a InfoBar with BottomLeft popup position.")
        popupPosition: Position.BottomLeft
    }
    InfoBar {
        title: qsTr("InfoBar with BottomCenter popup position")
        text: qsTr("This is a InfoBar with BottomCenter popup position.")
        popupPosition: Position.BottomCenter
    }
    InfoBar {
        title: qsTr("InfoBar with BottomRight popup position")
        text: qsTr("This is a InfoBar with BottomRight popup position.")
        popupPosition: Position.BottomRight
    }
}
```

:::