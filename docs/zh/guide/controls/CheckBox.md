# 复选框（CheckBox）

## 介绍

<mcurl name="CheckBox" url="https://learn.microsoft.com/zh-cn/windows/apps/design/controls/checkbox"></mcurl>

复选框控件允许用户选择二进制选项的组合。相比之下，单选按钮控件允许用户从互斥选项中进行选择。不确定状态用于指示某些（但不是所有）子选项都设置了某个选项。不要允许用户直接设置不确定状态来指示第三个选项。

## 示例

### 一个 2 态复选框。

::: code-group

```qml
CheckBox {
    text: qsTr("Two-state CheckBox")
}
```

:::

### 一个 3 态复选框。

::: code-group

```qml
CheckBox {
    tristate: true
    text: qsTr("Three-state CheckBox")
}
```

:::

### 使用 3 态复选框。

::: code-group

```qml
ButtonGroup {
    id: childGroup
    exclusive: false
    checkState: parentBox.checkState
}

CheckBox {
    id: parentBox
    text: qsTr("Select all")
    checkState: childGroup.checkState
}

CheckBox {
    checked: true
    text: qsTr("Option 1")
    leftPadding: indicator.width
    ButtonGroup.group: childGroup
}

CheckBox {
    text: qsTr("Option 2")
    leftPadding: indicator.width
    ButtonGroup.group: childGroup
}

CheckBox {
    text: qsTr("Option 3")
    leftPadding: indicator.width
    ButtonGroup.group: childGroup
}
```

:::