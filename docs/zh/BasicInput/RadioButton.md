# 单选按钮

`RadioButton` 控件允许用户从一组互斥选项中选择一个。当组中的一个 `RadioButton` 被选中时，同一组中任何先前选中的 `RadioButton` 都会自动取消选中。

## 基本单选按钮

`RadioButton` 通常用于组中，以呈现一组相关选项，其中一次只能激活一个。为强制实现互斥性，应将它们分配给 `ButtonGroup`。

<div align="center">
  <img src="/assets/images/BasicInput/RadioButton/radiobutton-basic.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
import QtQuick 2.15
import QtQuick.Controls 2.15 // 用于 ButtonGroup
import RinUI

// ...

Column {
    spacing: 10

    // ButtonGroup 对于互斥性至关重要
    ButtonGroup { id: myExclusiveGroup }

    RadioButton {
        text: qsTr("Option 1")
        ButtonGroup.group: myExclusiveGroup
        checked: true // 为组设置初始选项
    }

    RadioButton {
        text: qsTr("Option 2")
        ButtonGroup.group: myExclusiveGroup
    }

    RadioButton {
        text: qsTr("Option 3")
        ButtonGroup.group: myExclusiveGroup
    }
}

```
> 注意：`Rin-UI/examples/pages/controls/RadioButton.qml` 中的示例显示了多个 RadioButton。为使它们互斥，请将它们分配给同一个 `ButtonGroup`。

## 主要属性

*   `text`: `string` - `RadioButton` 旁边显示的标签文本。
*   `checked`: `bool` - 指示 `RadioButton` 当前是否被选中。在 `ButtonGroup` 中，一次只能有一个 `RadioButton` 被 `checked`。
*   `primaryColor`: `color` - 用于选中状态指示器的主要颜色。
*   `backgroundColor`: `color` - 未选中时 `RadioButton` 圆形指示器的背景颜色。
*   `spacing`: `real` - 指示器和文本之间的间距。
*   `enabled`: `bool` - 控件是否可交互。默认为 `true`。

## 对单选按钮进行分组

为确保一组中一次只能选择一个 `RadioButton`（这是它们的主要用途），您必须将它们分配给 `ButtonGroup`。
1.  实例化一个 `ButtonGroup` 项。
2.  对于逻辑组中的每个 `RadioButton`，将其 `ButtonGroup.group` 附加属性设置为您的 `ButtonGroup` 实例。

这样可以确保当该组中的一个 `RadioButton` 被选中时，同一组中任何其他先前选中的 `RadioButton` 都会变为未选中状态。
```
