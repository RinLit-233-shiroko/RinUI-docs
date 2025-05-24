# 药丸按钮（PillButton）

## 介绍

药丸按钮看起来和工作方式类似于 ToggleButton。它通常有两个状态：选中（开）或未选中（关）。

## 示例

### 一个简单的药丸按钮。

::: code-group

```qml
PillButton {
    text: qsTr("PillButton")
    enabled: !buttonSwitch.checked // 假设 buttonSwitch 在其他地方定义
}
```

:::