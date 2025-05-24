# 对话框（Dialog）

## 介绍

<mcurl name="ContentDialog" url="https://learn.microsoft.com/zh-cn/windows/apps/design/controls/dialogs"></mcurl>

使用内容对话框显示相关信息或提供可以显示任何 QML 内容的模态对话框体验。

## 示例

### 带有基本内容的对话框。

::: code-group

```qml
Dialog {
    title: qsTr("这是一个对话框")
    modal: true
    Text {
        Layout.fillWidth: true
        text: qsTr("这是一个带有基本内容的对话框。\n喵")
    }
    standardButtons: Dialog.Ok | Dialog.Cancel
}
```

:::

### 带有自定义内容的对话框。

::: code-group

```qml
Dialog {
    title: qsTr("对话框喵")
    modal: true
    width: 500
    Text {
        Layout.fillWidth: true
        text: qsTr("这是一个带有自定义内容的对话框。")
    }
    InfoBar {
        Layout.fillWidth: true
        severity: Severity.Info
        title: qsTr("注意")
        text: qsTr("您可以自定义标题、文本和严重性来弹出自定义信息条。")
        closable: false
    }
    RowLayout {
        Layout.fillWidth: true
        spacing: 8
        Column {
            Layout.fillWidth: true
            spacing: 4
            TextField {
                placeholderText: qsTr("信息条标题")
                text: qsTr("自定义标题")
            }
            TextField {
                placeholderText: qsTr("信息条文本")
                text: qsTr("自定义文本")
            }
        }
        Column {
            Layout.fillWidth: true
            Text {
                text: qsTr("严重性")
            }
            ComboBox {
                model: ListModel {
                    ListElement { text: "信息"; state: Severity.Info }
                    ListElement { text: "成功"; state: Severity.Success }
                    ListElement { text: "警告"; state: Severity.Warning }
                    ListElement { text: "错误"; state: Severity.Error }
                }
                textRole: "text"
                currentIndex: 0
            }
        }
    }
    standardButtons: Dialog.Ok | Dialog.Cancel
}
```

:::