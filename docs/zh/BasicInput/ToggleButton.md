# 切换按钮

`ToggleButton` 是一个可以在两个状态之间切换的按钮：选中（开）和未选中（关）。它的功能类似于复选框，但外观上是标准按钮。其视觉状态（例如背景颜色）通常会因其 `highlighted` 属性自动绑定到其 `checked` 状态而改变，以指示其是否被选中。

## 基本切换按钮

`ToggleButton` 显示文本和/或图标，并保持一个选中状态。它默认是 `checkable` 的。

<div align="center">
  <img src="/assets/images/BasicInput/ToggleButton/togglebutton-basic.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

ToggleButton {
    text: qsTr("Mute")
    checked: false // 初始状态
    onCheckedChanged: {
        if (checked) {
            console.log("Mute is ON");
            // 应用静音操作
        } else {
            console.log("Mute is OFF");
            // 取消静音操作
        }
    }
}
```

## 带图标的切换按钮

与 `Button` 派生的其他按钮一样，`ToggleButton` 也可以包含图标和文本，或者仅包含图标。

<div align="center">
  <img src="/assets/images/BasicInput/ToggleButton/togglebutton-icon.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
ToggleButton {
    icon.name: "ic_fluent_mic_off_20_regular"
    // text: qsTr("Mic") // 可选文本
    // 初始状态为未选中，图标显示“麦克风关闭”

    onCheckedChanged: {
        if (checked) {
            // 示例：选中时将图标更改为 "ic_fluent_mic_20_filled"
            icon.name = "ic_fluent_mic_20_filled"; 
            console.log("Microphone ON");
        } else {
            icon.name = "ic_fluent_mic_off_20_regular";
            console.log("Microphone OFF");
        }
    }
}
```

## 主要属性

*   `text`: `string` - 显示在按钮上的文本标签。
*   `icon.name`: `string` - 按钮的 fluent 图标名称。
*   `icon.source`: `url` - 按钮的自定义图像图标的 URL。
*   `checked`: `bool` - 确定按钮是处于选中（开）还是未选中（关）状态。
*   `checkable`: `bool` - 指示按钮是否可以被选中。对于 `ToggleButton`，默认为 `true`。
*   `highlighted`: `bool` - 自动反映 `checked` 状态。此属性通常被按钮的样式用来在按钮被选中/高亮时更改其外观。
*   `enabled`: `bool` - 控件是否可交互。默认为 `true`。

由于 `ToggleButton` 继承自 `Button`，因此 `Button` 的其他样式和行为属性（如 `flat`、`primaryColor`）也可以应用。

## 信号

*   `onCheckedChanged()`: 当 `checked` 状态更改时发出。这是响应切换操作的主要信号。
*   `onClicked()`: 当按钮被点击时发出。由于它默认是 `checkable` 的，点击也会切换 `checked` 状态。

```
