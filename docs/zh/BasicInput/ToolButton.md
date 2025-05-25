# 工具按钮

`ToolButton` 是一种专门的 `Button`，通常用于工具栏或类似紧凑 UI 区域中的操作。它通常配置为仅显示图标，但也可以显示文本。RinUI 的 `ToolButton` 提供了方便的别名（`size` 和 `color`）来控制其内部 `IconWidget` 的方面。

## 基本工具按钮（仅图标）

`ToolButton` 经常用作仅图标按钮，通常设置 `flat: true` 以获得适合工具栏的、不那么突兀的外观。

<div align="center">
  <img src="/assets/images/BasicInput/ToolButton/toolbutton-icon.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

ToolButton {
    icon.name: "ic_fluent_gear_20_regular"
    // size: 24 // 调整内部 IconWidget 的尺寸 (默认为 20)
    // color: Theme.currentTheme.colors.textPrimaryColor // 设置图标颜色
    flat: true // 工具按钮的常见样式
    ToolTip.text: qsTr("Settings") // 建议为仅图标按钮提供可访问性提示
    onClicked: {
        console.log("Settings ToolButton clicked");
    }
}
```

## 带文本和图标的工具按钮

`ToolButton` 也可以在图标旁边或代替图标显示文本。内部布局同时放置了 `Text` 项和 `IconWidget`。

<div align="center">
  <img src="/assets/images/BasicInput/ToolButton/toolbutton-text-icon.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
ToolButton {
    text: qsTr("Edit")
    icon.name: "ic_fluent_edit_20_regular"
    flat: true
    // 按钮内文本和图标的布局可能取决于主题和特定尺寸约束。
    onClicked: {
        console.log("Edit ToolButton clicked");
    }
}
```
> **关于图标显示的 `icon.name` 与 `text` 的重要说明**：`ToolButton` 的内部 `IconWidget` 主要使用 `toolBtn.icon.name` 来确定图标。如果 `toolBtn.icon.name` 未设置，它会尝试使用 `toolBtn.text` 作为图标名称。为了清晰起见，通常不建议使用此回退方式。**始终使用 `icon.name` 指定图标。**

## 主要属性

*   `icon.name`: `string` - 通过内部 `IconWidget` 显示的 Fluent 图标的名称。这是设置图标的**推荐**方式。
*   `text`: `string` - 显示在按钮上的文本。
*   `size`: `real` - (别名) 设置内部 `IconWidget` 的 `size` 属性，控制图标的视觉大小。在 `ToolButton` 的 `IconWidget` 定义中默认为 `20`。
*   `color`: `color` - (别名) 设置内部 `IconWidget` 的 `color` 属性。
*   `flat`: `bool` - 继承自 `Button`。虽然 `Button` 默认为 `false`，但 `ToolButton` 通常明确设置为 `flat: true` 以获得典型的工具栏外观。
*   `enabled`: `bool` - 控件是否可交互。默认为 `true`。

由于 `ToolButton` 继承自 `Button`，所有标准的 `Button` 属性（如 `highlighted`、`checkable`、`primaryColor`、不同状态的样式）和信号（如 `onClicked`）都可用。

## 示例：用作 ComboBox 指示器

RinUI 的 `ComboBox` 内部使用 `ToolButton` 作为其下拉箭头指示器：
```qml
// ComboBox.qml 中指示器的代码片段
ToolButton {
    flat: true
    icon.name: "ic_fluent_chevron_down_20_regular"
    size: 14 
    color: Theme.currentTheme.colors.textSecondaryColor
    // ... 其他属性
}
```
这演示了一个扁平化、仅图标 `ToolButton` 的常见用例。

```
