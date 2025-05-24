# 下拉按钮（DropDownButton）

## 介绍

<mcurl name="DropDownButton" url="https://learn.microsoft.com/zh-cn/windows/apps/design/controls/buttons#split-buttons"></mcurl>

下拉按钮看起来像一个按钮，但功能类似于复选框。它通常有两个状态：选中（开）或未选中（关）。

## 示例

### 带有文本内容的简单下拉按钮

::: code-group

```qml
DropDownButton {
    text: qsTr("电子邮件")

    MenuItem {
        text: qsTr("发送")
    }
    MenuItem {
        text: qsTr("回复")
    }
    MenuItem {
        text: qsTr("全部回复")
    }
}
```

:::

### 带有图标的下拉按钮

::: code-group

```qml
DropDownButton {
    icon.name: "ic_fluent_mail_20_regular"
    text: qsTr("电子邮件")

    MenuItem {
        icon.name: "ic_fluent_send_20_filled"
        text: qsTr("发送")
    }
    MenuItem {
        icon.name: "ic_fluent_mail_arrow_up_20_regular"
        text: qsTr("回复")
    }
    MenuItem {
        icon.name: "ic_fluent_mail_arrow_double_back_20_regular"
        text: qsTr("全部回复")
    }
}
```

:::