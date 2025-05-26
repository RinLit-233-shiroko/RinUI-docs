# 展开器

`Expander` 控件允许在可折叠部分中显示或隐藏内容。它由一个始终可见的标题区域和一个内容区域组成，内容区域可以通过与标题区域交互（通常是点击它或其中的展开/折叠按钮）来展开或折叠。

## 基本展开器

基本 `Expander` 可以在其默认标题中包含文本标题，并以 QML 项作为其内容。子项会添加到 `contentData` 属性（这是默认属性）。

<div align="center">
  <img src="/assets/images/Layout/Expander/expander-basic.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

Expander {
    width: 300
    text: qsTr("More Details") // 默认标题区域的文本

    // 内容项作为子项添加，并成为 'contentData' 的一部分
    Text {
        text: qsTr("This is the collapsible content of the Expander. It can contain various QML items arranged in a column.")
        wrapMode: Text.WordWrap // 确保文本在可用宽度内换行
        Layout.fillWidth: true // 如果 Expander 的内容区域内部使用布局 (它确实使用 ColumnLayout)
    }
    Button {
        text: qsTr("A button in the content")
        Layout.alignment: Qt.AlignHCenter // 在内部 ColumnLayout 中对齐
    }
}
```

## 自定义标题

`Expander` 的标题可以通过将 `Item` 分配给 `header` 属性来完全替换为自定义 QML 内容。

<div align="center">
  <img src="/assets/images/Layout/Expander/expander-custom-header.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
Expander {
    width: 300
    // 如果设置了 'header'，则不显示默认的 'text' 属性和展开器图标。
    // 您需要负责整个标题的内容和行为。
    header: Item {
        id: customHeaderItem
        implicitHeight: 48 // 为自定义标题定义高度
        width: parent.width // 使其填充 Expander 的宽度

        RowLayout { // 自定义标题的示例布局
            anchors.fill: parent
            anchors.leftMargin: 10
            anchors.rightMargin: 10 // 根据需要调整边距

            Text {
                text: qsTr("Custom Header Title")
                Layout.fillWidth: true
                font.bold: true
                verticalAlignment: Text.AlignVCenter
            }
            IconWidget { // 假设 IconWidget 可用
                icon.name: "ic_fluent_info_20_regular"
                size: 20
                Layout.alignment: Qt.AlignVCenter
            }
        }
        // 重要：要使自定义标题切换展开器：
        MouseArea {
            anchors.fill: parent
            onClicked: parentExpander.expanded = !parentExpander.expanded 
                       // 其中 parentExpander 是 Expander 的 id
        }
    }
    // 如果从自定义标题内部引用，请为您的 Expander 指定一个 id
    id: parentExpander 

    Text {
        text: qsTr("Content area for the expander with a custom header.")
        padding: 10 // 如果需要，添加填充
    }
}
```
> **注意**：如果提供自定义 `header`，则还必须实现切换 `Expander` 的 `expanded` 状态的机制（例如，如上所示使用 `MouseArea`）。默认的展开/折叠按钮及其旋转动画是默认标题结构的一部分，如果覆盖 `header` 属性，则不会出现。

## 展开方向

`expandDirection` 属性控制内容区域是从标题向上扩展还是向下扩展。

*   `Expander.Down` (默认)：内容在标题下方展开。
*   `Expander.Up`：内容在标题上方展开。

<div align="center">
  <img src="/assets/images/Layout/Expander/expander-direction.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
Expander {
    text: qsTr("Expand Upwards Example")
    expandDirection: Expander.Up
    width: 300

    Text {
        text: qsTr("This content expands upwards from the header.")
    }
}
```

## 主要属性

*   `expanded`: `bool` - 控制内容区域是可见 (`true`) 还是隐藏 (`false`)。默认为 `false`。可以切换。
*   `text`: `string` - 显示在默认标题结构中的文本。如果提供了自定义 `header` 项，则忽略此属性。
*   `header`: `Item` (`headerCustom.data` 的别名) - 允许提供自定义 QML `Item` 作为标题。此项的子项将填充自定义标题区域。
*   `contentData`: `list<Item>` (`contentLayout.data` 的默认属性别名) - 此处放置的子 QML 项构成可折叠部分的内容。它们被父化到内部 `ColumnLayout`。
*   `expandDirection`: `enumeration` - 可以是 `Expander.Down` (默认) 或 `Expander.Up`。确定内容区域展开的方向。
*   `headerHeight`: `real` (别名) - 引用标题部分的计算高度。
*   `contentHeight`: `real` (别名) - 引用展开时内容部分的计算高度。
*   `contentPadding`: `real` (别名) - 内容 `Frame` 内的填充。默认为 `7`。
*   `contentSpacing`: `real` (别名) - 保存 `contentData` 的内部 `ColumnLayout` 的间距。
*   `radius`: `real` - 整个 `Expander` 组件的圆角半径。默认为 `Theme.currentTheme.appearance.windowRadius`。
*   `enabled`: `bool` - 展开器是否可交互（例如，点击以展开/折叠）。默认为 `true`。

## 动画

`Expander` 包含用于展开/折叠过程（高度和y位置更改）以及标题中默认展开/折叠指示器图标旋转的内置动画。
```
