# 圆角按钮（RoundButton）

## 介绍

圆角按钮看起来像一个按钮，不同之处在于它有一个 radius 属性，允许在不自定义背景的情况下使角变圆。

## 示例

### 一个简单的圆角按钮。

::: code-group

```qml
RoundButton {
    text: qsTr("RoundButton")
    enabled: !buttonSwitch.checked // 假设 buttonSwitch 在其他地方定义
}
```

:::