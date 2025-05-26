# 列表项委托 (ListViewDelegate)

`ListViewDelegate` 是一个用于定义 `ListView` 中每个项目视觉表现的组件。它继承自 `QtQuick.Controls.Basic.ItemDelegate`，并提供了一个结构化布局，包含可自定义区域：`leftArea`（一个 `Row`）、`middleArea`（一个 `ColumnLayout`）和 `rightArea`（一个 `RowLayout`）。

此组件通常用作 `ListView` 的 `delegate`，以创建丰富且可交互的列表项。

## 结构和自定义区域

`ListViewDelegate`将其内容组织为三个主要部分，从而实现灵活的项目布局：

*   **`leftArea`**: 位于左侧。非常适合放置图标、头像、复选框或其他前导视觉元素。添加到此处的项目排列在一个 `Row` 中。
*   **`middleArea`**: 占据中心空间。设计用于主要和次要文本内容，在 `ColumnLayout` 中垂直排列。如果将单个 `Text` 项分配给 `middleArea`，它将在该项在列中分配的空间内垂直居中。如果提供项目列表，它们将被堆叠。
*   **`rightArea`**: 位于右侧。适用于元数据、时间戳、操作按钮或其他尾随元素，排列在一个 `RowLayout` 中。

您可以通过将 QML 项或 QML 项列表分配给它们各自的别名属性（`leftArea`、`middleArea`、`rightArea`）来填充这些区域。

<div align="center">
  <img src="/assets/images/ListAndCollections/ListViewDelegate/listviewdelegate-structure.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

ListView {
    width: 350
    height: 300
    model: ListModel {
        ListElement { titleText: "Meeting Notes", dateText: "Yesterday", iconSymbol: "ic_fluent_star_20_filled" }
        ListElement { titleText: "Project Alpha", dateText: "2023-10-26", iconSymbol: "ic_fluent_folder_20_filled" }
        ListElement { titleText: "Quick Reminder", dateText: "10:30 AM", iconSymbol: "ic_fluent_alert_20_regular" }
    }

    delegate: ListViewDelegate {
        // width 通常由委托本身绑定到 ListView.view.width
        // height 默认情况下根据内容自适应 (contents.implicitHeight + 20)

        leftArea: IconWidget {
            icon.name: model.iconSymbol // 直接访问模型数据
            size: 22
            Layout.alignment: Qt.AlignVCenter // 在 leftArea Row 内对齐图标
        }

        middleArea: [ // middleArea 接受一个项目列表作为其 ColumnLayout 的子项
            Text {
                text: model.titleText // 来自模型的主要文本
                font.bold: true
                elide: Text.ElideRight
                Layout.fillWidth: true
            },
            Text {
                text: model.dateText // 来自模型的次要文本
                font.pixelSize: 12
                color: Theme.currentTheme.colors.textSecondaryColor
                elide: Text.ElideRight
                Layout.fillWidth: true
            }
        ]

        rightArea: ToolButton { // 示例：右侧的 ToolButton
            icon.name: "ic_fluent_chevron_right_20_regular"
            flat: true
            size: 16
            Layout.alignment: Qt.AlignVCenter // 在 rightArea RowLayout 内对齐按钮
            onClicked: {
                console.log("More options for:", model.titleText);
            }
        }
        
        onClicked: {
            console.log("Clicked on item:", model.titleText);
            // ListView.view.currentIndex 由委托的默认 onClicked 处理程序自动更新
        }
    }
}
```

## `ListViewDelegate` 主要属性

*   `leftArea`: `list<Item>` (`leftArea.data` 的别名) - 放置在委托左侧部分的 QML 项。
*   `middleArea`: `list<Item>` (`middleArea.data` 的别名) - 放置在中央垂直堆叠部分的 QML 项列表。
*   `rightArea`: `list<Item>` (`rightArea.data` 的别名) - 放置在委托右侧部分的 QML 项。
*   `contents`: `list<Item>` (`contents.data` 的别名) - 引用包含 `leftArea`、`middleArea` 和 `rightArea` 的主要内部 `RowLayout`。直接自定义通常通过特定的区域属性完成。
*   `highlighted`: `bool` (继承自 `ItemDelegate`) - 指示项目是否为 `ListView` 中的当前项目。RinUI 的 `ListViewDelegate` 将此绑定到 `ListView.isCurrentItem`。
*   `focusPolicy`: `Qt.FocusPolicy` - 默认为 `Qt.StrongFocus`，允许委托接收键盘焦点。

`ListViewDelegate` 的背景是一个 `Rectangle`，其样式会响应 `pressed`、`highlighted` 和 `hovered` 状态，并且在 `highlighted` 时包含一个视觉 `Indicator`（一个小的垂直条）。

## 继承的属性和信号

由于 `ListViewDelegate` 继承自 `QtQuick.Controls.Basic.ItemDelegate`，它可以访问标准的委托上下文：
*   `item`: (来自 `ItemDelegate` 的属性) 此委托实例所属的 `ListView` 项。
*   `index`: (来自 `ItemDelegate` 的属性) 此委托在 `ListView` 模型中的索引。
*   `model`: (上下文属性) 提供对当前项模型数据的直接访问（`model.roleName` 或简单模型的 `modelData`）。
*   `selected`: `bool` - 项目是否被选中（如果 `ListView` 支持选择）。
*   `pressed`: `bool` - 当用户按下委托时为 true。

以及像这样的信号：
*   `clicked()`: 当委托被点击时发出。RinUI 的 `ListViewDelegate` 使用它来设置 `ListView.view.currentIndex = index`。
*   `pressAndHold()`、`released()`、`doubleClicked()`: `ItemDelegate` 的标准信号。

## 使用说明

*   向 `leftArea`、`middleArea` 或 `rightArea` 提供项目时，请确保它们适合内部布局类型（左/右为 Row，中间为 ColumnLayout）。如果需要，请使用 `Layout` 附加属性进行对齐。
*   委托的默认 `height` 根据其内容自适应。
*   委托的默认 `width` 通常绑定到 `ListView.view.width`。

此组件是自定义 RinUI `ListView` 中项目外观的关键，提供了一种结构化且灵活的方式来定义项目布局。
```
