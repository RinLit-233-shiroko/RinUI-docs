# 框架

RinUI 中的 `Frame` 组件是一个带样式的容器，继承自 `QtQuick.Controls.Basic.Frame`。它提供可自定义的背景，具有颜色、边框和圆角半径属性，并包含可选的悬停效果。它通常用作其他组件的基础或用于将相关 UI 元素与通用视觉样式分组。默认情况下，`clip` 设置为 `true`。

## 基本框架

`Frame` 可用于直观地对内容进行分组。您可以将子项直接放置在 `Frame` 内；这些子项将成为 `Frame` 的 `contentItem` 的父项。标准填充属性可用于在框架边缘及其内容之间创建空间。

<div align="center">
  <img src="/assets/images/ListAndCollections/Frame/frame-basic.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

Frame {
    width: 200
    height: 150
    padding: 10 // 内容放置在此填充内

    // 自定义外观属性
    color: Theme.currentTheme.colors.subtleSecondaryColor // 背景颜色
    radius: 8 // 圆角半径
    borderColor: Qt.rgba(0, 0, 0, 0.1) // 边框颜色
    borderWidth: 1 // 边框宽度

    Text {
        anchors.centerIn: parent // 相对于 contentItem 区域锚定
        text: qsTr("Content inside a Frame")
    }
}
```

## 无框模式

将 `frameless` 属性设置为 `true`，以使 `Frame` 的可见背景（颜色和边框）消失。`Frame` 本身仍然作为布局容器存在，如果 `clip` 为 `true`，则将继续裁剪其内容。这对于分组和裁剪而不添加视觉装饰非常有用。

```qml
import RinUI // Consistent import

Frame {
    width: 150
    height: 100
    frameless: true
    padding: 5 // 填充仍适用于内容定位
    clip: true // 内容被裁剪到 Frame 的边界

    Rectangle {
        // 此矩形是 Frame 的 contentItem 的子项
        anchors.fill: parent
        // 如果边距为负或内容大于框架，则会被裁剪
        anchors.margins: -10 // 示例：内容大于框架
        color: "lightblue" 
        Text { anchors.centerIn: parent; text: "Clipped Content"; }
    }
}
```

## 悬停效果

如果 `hoverable` 为 `true`（默认值），则鼠标悬停时 `Frame` 背景的不透明度会略有变化，提供视觉反馈。`hover` 属性可用于对此状态做出反应。

```qml
import RinUI // Consistent import

Frame {
    width: 100
    height: 100
    color: "lightgray"
    hoverable: true // 默认值

    Text {
        anchors.centerIn: parent
        text: parent.hover ? qsTr("Hovered!") : qsTr("Hover me")
    }
}
```

## 主要属性

*   `color`: `color` - 框架的背景颜色。默认为 `Theme.currentTheme.colors.cardColor`。
*   `radius`: `real` (背景 `Rectangle` 的 `radius` 别名) - 框架背景的圆角半径。默认为 `Theme.currentTheme.appearance.smallRadius`。
*   `borderColor`: `color` - 框架边框的颜色。默认为 `Theme.currentTheme.colors.cardBorderColor`。
*   `borderWidth`: `int` - 框架边框的宽度。默认为 `Theme.currentTheme.appearance.borderWidth`。
*   `frameless`: `bool` - 如果为 `true`，则背景矩形（显示颜色和边框）不可见。默认为 `false`。
*   `hoverable`: `bool` - 如果为 `true`，则在背景上启用悬停检测和视觉反馈（不透明度更改）。默认为 `true`。
*   `hover`: `bool` (只读) - 指示鼠标当前是否悬停在框架上（前提是 `hoverable` 为 `true`）。
*   `clip`: `bool` - (继承自 `Item`，在 RinUI 的 `Frame` 中默认为 `true`) 确定子项是否被裁剪到框架的边界。

**继承自 `QtQuick.Controls.Basic.Frame`:**
*   `contentItem`: `Item` - 子项的实际容器。在 QML 中声明为 `Frame` 直接子项的子项会自动重新父化到此 `contentItem`。
*   Padding 属性 (`padding`, `topPadding`, `leftPadding`, `rightPadding`, `horizontalPadding`, `verticalPadding`) - 这些属性控制框架外边缘和 `contentItem` 之间的空间。

## 用作基础组件

RinUI 利用 `Frame` 作为其他组件的基础构建块。例如：
*   `SettingItem` 继承自 `Frame`，为设置页面中的各个行提供一致的结构。
*   `Clip` 组件内部使用 `Frame` 作为其带样式的背景。

这展示了 `Frame` 在创建具有一致主题的带样式容器方面的实用性。
```
