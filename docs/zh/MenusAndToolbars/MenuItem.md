# MenuItem（菜单项）

MenuItem 是表示菜单中单个项的组件。它可以包含文本、图标或两者。MenuItem 可用于执行操作或表示可选择的选项。

## 基本菜单项


<div align="center">
  <img src="/assets/images/docs/MenuItem/example-2.png" alt="基本菜单项 示例">
</div>

```qml
MenuItem {
    text: qsTr("新建")
    icon.name: "ic_fluent_document_add_20_regular"
    onTriggered: console.log("新建文件")
}
```

## 带复选框的菜单项


<div align="center">
  <img src="/assets/images/docs/MenuItem/example-3.png" alt="带复选框的菜单项 示例">
</div>

```qml
MenuItem {
    text: qsTr("粗体")
    checkable: true
    checked: textFormat.bold
    onTriggered: textFormat.bold = !textFormat.bold
}
```

## 带单选按钮的菜单项


<div align="center">
  <img src="/assets/images/docs/MenuItem/example.png" alt="带单选按钮的菜单项 示例">
</div>

```qml
MenuItemGroup {
    id: alignmentGroup
}

MenuItem {
    text: qsTr("左对齐")
    checkable: true
    checked: alignment === Text.AlignLeft
    group: alignmentGroup
    onTriggered: alignment = Text.AlignLeft
}

MenuItem {
    text: qsTr("居中")
    checkable: true
    checked: alignment === Text.AlignHCenter
    group: alignmentGroup
    onTriggered: alignment = Text.AlignHCenter
}

MenuItem {
    text: qsTr("右对齐")
    checkable: true
    checked: alignment === Text.AlignRight
    group: alignmentGroup
    onTriggered: alignment = Text.AlignRight
}
```

## 重要属性

- `text`：要显示的文本
- `icon`：要显示的图标
- `checkable`：菜单项是否可以选中
- `checked`：菜单项是否已选中
- `group`：此菜单项所属的菜单项组
- `enabled`：菜单项是否启用
- `visible`：菜单项是否可见

## 重要信号

- `triggered()`：在点击菜单项时发出
