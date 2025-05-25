# 复选框

CheckBox 控件允许用户进行二元选择，例如选择或取消选择某个选项。复选框也可用于表示三态选择，通常用于“全选”场景。

## 基本复选框

CheckBox 可用于简单的布尔值选择。

<div align="center">
  <img src="/assets/images/BasicInput/CheckBox/checkbox-basic.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

CheckBox {
    text: qsTr("Standard CheckBox")
    // checked: true // 用于初始选中
}
```

## 三态复选框

将 `tristate` 属性设置为 `true` 可启用第三种“不确定”状态。这种状态在视觉上是独特的，通常用于指示某个选项已为部分（而非全部）子项设置。

`checkState` 属性可以是：
- `Qt.Checked` （选中）
- `Qt.Unchecked` （未选中）
- `Qt.PartiallyChecked` （部分选中，当 `tristate` 为 true 时）

<div align="center">
  <img src="/assets/images/BasicInput/CheckBox/checkbox-tristate.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
CheckBox {
    text: qsTr("Three-state CheckBox")
    tristate: true
    // P编程方式设置:
    // checkState: Qt.PartiallyChecked 
}
```

## 复选框组

复选框可用于控制父级的“全选”复选框。示例 `examples/pages/controls/CheckBox.qml` 演示了如何使用 `ButtonGroup` 实现此功能。

<div align="center">
  <img src="/assets/images/BasicInput/CheckBox/checkbox-grouped.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
// 简化概念；完整用法请参考 examples/pages/controls/CheckBox.qml 中的 ButtonGroup
Column {
    CheckBox {
        id: parentBox
        text: qsTr("Select all")
        tristate: true 
        // 实际场景中，parentBox.checkState 会根据子项状态进行管理
    }

    CheckBox {
        text: qsTr("Option 1")
        // 将选中状态连接到更新 parentBox 的逻辑
    }

    CheckBox {
        text: qsTr("Option 2")
        // 将选中状态连接到更新 parentBox 的逻辑
    }
}
```
> 注意：`Rin-UI/examples/pages/controls/CheckBox.qml` 中的示例提供了使用 `ButtonGroup` 实现复选框组的完整实现。

## 主要属性

*   `text`: `string` - CheckBox 旁边显示的标签文本。
*   `checked`: `bool` - 对于两态复选框，如果选中则为 `true`，否则为 `false`。
*   `checkState`: `enumeration` - 当前状态（`Qt.Unchecked`、`Qt.Checked`、`Qt.PartiallyChecked`）。
*   `tristate`: `bool` - 如果为 `true`，CheckBox 支持三种状态。默认为 `false`。
*   `primaryColor`: `color` - 选中或部分选中时复选标记和指示器的颜色。
*   `backgroundColor`: `color` - 未选中时指示器框的背景颜色。
*   `spacing`: `real` - 指示器和文本标签之间的间距。
*   `enabled`: `bool` - 控件是否可交互。
```
