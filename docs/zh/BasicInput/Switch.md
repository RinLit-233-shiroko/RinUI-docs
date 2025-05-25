# 开关

`Switch` 控件是一个拨动开关，允许用户在两个互斥选项（通常表示“开”或“关”状态）之间进行选择。选择一个选项会立即提交该状态。它继承自标准的 `QtQuick.Controls.Switch`。

## 基本开关

`Switch` 显示一个在两种状态之间滑动的可视化旋钮。默认情况下，如果未设置主 `text` 属性，它可以根据其状态显示“On”或“Off”文本。

<div align="center">
  <img src="/assets/images/BasicInput/Switch/switch-basic.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

Switch {
    // checked: true // 用于初始设为“开”状态
    onCheckedChanged: {
        if (checked) {
            console.log("Switch is ON. Default text might be '" + checkedText + "'");
        } else {
            console.log("Switch is OFF. Default text might be '" + uncheckedText + "'");
        }
    }
}
```

## 带自定义标签文本的开关

您可以使用其 `text` 属性为 `Switch` 提供持久的自定义文本标签。无论开关状态如何，此标签都保持不变。

<div align="center">
  <img src="/assets/images/BasicInput/Switch/switch-custom-text.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
Switch {
    text: qsTr("Enable Feature") // 此文本将始终显示
    checked: true
}
```

## 带自定义开/关状态文本的开关

如果主 `text` 属性为空，则 `Switch` 可以通过设置 `checkedText` 和 `uncheckedText` 来根据其 `checked` 状态显示不同的文本标签。

<div align="center">
  <img src="/assets/images/BasicInput/Switch/switch-on-off-text.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
Switch {
    checked: false
    // text: "" // 确保主文本属性为空以使用这些文本
    checkedText: qsTr("Working")    // checked 为 true 时显示的文本
    uncheckedText: qsTr("Do work")  // checked 为 false 时显示的文本
}
```

## 主要属性

*   `checked`: `bool` - 确定开关是处于“开” (`true`) 还是“关” (`false`) 状态。
*   `text`: `string` - 开关的可选持久标签。如果设置，它将覆盖 `checkedText` 和 `uncheckedText` 的显示。
*   `checkedText`: `string` - 当 `checked` 为 `true` 且 `text` 属性为空时，开关旁边显示的文本。默认为“On”（或其本地化等效项）。
*   `uncheckedText`: `string` - 当 `checked` 为 `false` 且 `text` 属性为空时，开关旁边显示的文本。默认为“Off”（或其本地化等效项）。
*   `primaryColor`: `color` - `checked` 为 `true` 时开关轨道的背景颜色。
*   `backgroundColor`: `color` - `checked` 为 `false` 且未悬停时开关轨道的背景颜色。
*   `enabled`: `bool` - 控件是否可交互。默认为 `true`。

## 信号

*   `onCheckedChanged()`: 当 `checked` 状态更改时发出。这是响应状态更改最常用的信号。
*   `onClicked()`: 当用户点击开关时发出。此操作也会切换 `checked` 状态。

```
