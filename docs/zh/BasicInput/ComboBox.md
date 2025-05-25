# 组合框

ComboBox 允许用户从下拉列表中选择一个选项。它可以配置为可编辑，允许用户输入列表中不存在的值。

## 基本组合框

包含字符串项目列表的标准组合框。

<div align="center">
  <img src="/assets/images/BasicInput/ComboBox/combobox-basic.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

ComboBox {
    width: 200
    model: ["Blue", "Green", "Red", "Yellow"]
    placeholderText: qsTr("Pick a color")
    // currentIndex: 0 // 用于初始选择 "Blue"
}
```

## 使用 ListModel 的组合框

对于更复杂的项目或当模型需要动态时，可以使用 `ListModel`。模型中的每个 `ListElement` 都应具有可用于显示的属性（例如 `text` 或 `value`）。

<div align="center">
  <img src="/assets/images/BasicInput/ComboBox/combobox-listmodel.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
import QtQuick.Controls 2.15 // 如果 ListModel 未隐式提供，则导入

ComboBox {
    width: 200
    model: ListModel {
        ListElement { text: "Arial" }
        ListElement { text: "Comic Sans MS" }
        ListElement { text: "Courier New" }
    }
    // RinUI 的 ComboBox 通常会从模型推断显示文本。
    // 如果您的模型元素是对象，请确保它们具有 'text' 或 'value' 属性，
    // 或检查 RinUI ComboBox 实现是否支持特定的显示角色。
    placeholderText: qsTr("Select a font")
}
```

## 可编辑组合框

将 `editable` 设置为 `true` 以允许用户键入值。`accepted()` 信号可用于处理新的输入。输入字段是一个 `TextField`。

<div align="center">
  <img src="/assets/images/BasicInput/ComboBox/combobox-editable.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
ComboBox {
    width: 200
    editable: true
    model: ListModel {
        id: sizeModel
        ListElement { value: 8 } // 'value' 将用于 currentText 显示
        ListElement { value: 10 }
        ListElement { value: 12 }
    }
    placeholderText: qsTr("Enter or select a size")

    onAccepted: {
        // 示例：将新的唯一数值添加到模型中
        if (find(editText) === -1) { // editText 包含输入字段中的文本
            let num = Number(editText)
            if (!isNaN(num)) {
                sizeModel.append({ value: num })
                // 可选：将 currentIndex 设置为新添加的项
                // currentIndex = count - 1 
            } else {
                console.log("Invalid input:", editText)
            }
        }
    }
}
```
> 注意：有关更详细的示例，请参阅 `Rin-UI/examples/pages/controls/ComboBox.qml`。

## 主要属性

*   `model`: `any` - 提供数据的模型（例如，字符串列表、`ListModel`）。
*   `currentIndex`: `int` - 模型中当前选定项的索引。
*   `currentText`: `string` - 当前选定项的文本。(只读)
*   `displayText`: `string` - ComboBox 输入字段中显示的文本，尤其在 `editable` 时。(非可编辑时只读)
*   `placeholderText`: `string` - 未选择任何项或 `editable` 且为空时显示的文本。
*   `editable`: `bool` - 如果为 `true`，用户可以键入文本。默认为 `false`。
*   `maxHeight`: `real` - 下拉菜单的最大高度 (menu.maxHeight 的别名)。
*   `headerText`: `string` - 下拉菜单中可选的标题文本。
*   `controlRadius`: `real` - ComboBox 控件的圆角半径。
*   `enabled`: `bool` - 控件是否可交互。
*   `popup`: `Popup` (在 RinUI 中特指 `ContextMenu`) - 下拉列表。
*   `indicator`: `Item` - 下拉箭头指示器项。

## 信号

*   `accepted()`: 当用户在可编辑 ComboBox 中接受文本时（例如，通过按 Enter 键）发出。
*   `activated(int index)`: 当用户通过单击或按 Enter 键选择一个项时发出。`index` 参数是激活项的索引。如果 `editable` 且文本与任何项都不匹配，则 `index` 将为 -1。
```
