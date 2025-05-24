# 开关（Switch）

## 介绍

<mcurl name="Switch" url="https://learn.microsoft.com/zh-cn/windows/apps/design/controls/toggles"></mcurl>

使用开关控件向用户提供两个互斥的选项（例如开/关），选择一个选项会立即提交。开关应具有单个标签。

## 示例

### 一个简单的开关

::: code-group

```qml
Switch {
    // ... existing code ...
}
```

:::

### 带有选中和未选中文本的开关

::: code-group

```qml
Switch {
    checked: true
    checkedText: qsTr("工作")
    uncheckedText: qsTr("开始工作")
}
```

:::