# 卡片 (Clip)

`Clip` 组件位于“列表和集合”类别下，是一个专门的 `Button`，用作具有可自定义框架外观的可点击表面。它使用内部 `Frame` 组件作为其背景，并公开用于控制此框架颜色、圆角半径和边框的属性。

尽管名为 `Clip`，但它主要功能并非传统 QML 意义上的图形裁剪子内容（即通过 `Item` 的 `clip: true` 属性）；相反，它提供了一个带样式的交互式表面。

## 基本用法

`Clip` 可以用作具有确定外观的基本可点击区域。由于其 `contentItem`（继承自 `Button`）在此组件的源码中默认为空 `Item`，因此它并非设计为像标准 `Button` 的 `text` 或 `icon.name` 属性那样直接显示文本或图标。如果需要显示内容，通常应将 QML 项作为 `Clip` 的子项放置，它们将显示在其带样式的背景之上。

<div align="center">
  <img src="/assets/images/ListAndCollections/Clip/clip-basic.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

Clip {
    id: myClickableSurface
    width: 200
    height: 100
    
    // 使用 'backgroundColor' 或别名 'color' 设置表面颜色
    backgroundColor: Theme.currentTheme.colors.controlColor 
    radius: 8
    borderColor: Theme.currentTheme.colors.controlBorderColor
    borderWidth: 1
    
    onClicked: {
        console.log("Clip surface clicked!");
    }

    // 在顶部添加内容的可视化示例
    Text {
        anchors.centerIn: parent
        text: qsTr("Clickable Area")
    }
}
```

## 主要属性

*   `color`: `color` (内部 `Frame` 背景颜色的别名，也与 `Button` 的 `backgroundColor` 相关联) - 设置表面的背景颜色。可以与 `backgroundColor` 互换使用。
*   `radius`: `real` (内部 `Frame` 的 `radius` 别名) - 设置表面的圆角半径。
*   `borderColor`: `color` (内部 `Frame` 的 `borderColor` 别名) - 设置表面的边框颜色。
*   `borderWidth`: `real` (内部 `Frame` 的 `borderWidth` 别名) - 设置表面的边框宽度。

**继承自 `Button`:**
*   `backgroundColor`: `color` - 此属性直接控制内部 `Frame` 的背景颜色。`Clip` 的 `color` 属性是此属性的别名。
*   标准的 `Button` 属性，如 `enabled`、`flat`、`highlighted`、`checkable`、视觉状态属性等均可用，并将影响 `Clip` 的外观和行为。

## 信号

*   `onClicked()`: 当 `Clip` 区域被点击时发出。
*   `Button` 的其他信号（例如 `pressedChanged`、`released`）也可用。

## 注意

*   **内容显示**：此 `Clip` 组件的 `contentItem` 是一个空 `Item`。要像典型按钮那样在 `Clip` 的交互区域内显示文本或图标作为其定义内容的一部分（使用 `text` 或 `icon.name`），您需要自定义或替换 `contentItem`。如果只是简单地将视觉效果置于其上，则将它们作为 `Clip` 本身的子项（如示例中所示）即可。
*   **命名**：如果期望一个主要执行其子项图形裁剪的项，那么名称“Clip”可能会有些误导。它更多地用作一个可交互的、带样式的表面或“FrameButton”。
*   **背景 Frame**：提供视觉背景的实际组件是 `Frame`。理解 `Frame` 组件（如果单独记录）可能会提供有关其特定样式功能的更多上下文。

```
