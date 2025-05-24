# 单选按钮（RadioButton）

## 介绍

<mcurl name="RadioButton" url="https://learn.microsoft.com/zh-cn/windows/apps/design/controls/radio-button"></mcurl>

使用单选按钮让用户在相互排斥的相关选项中进行选择。通常包含在单选按钮组控件中。

## 示例

### 布局组中的一组单选按钮控件。

::: code-group

```qml
Column {
    spacing: 4

    RadioButton {
        text: qsTr("选项 1")
    }
    RadioButton {
        text: qsTr("选项 2")
    }
    RadioButton {
        text: qsTr("选项 3")
    }
}
```

:::