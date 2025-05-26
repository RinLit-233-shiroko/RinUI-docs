# 圆形按钮

`RoundButton` 是一个标准的 `Button`，其样式具有完全圆角。其实际形状取决于其 `width` 和 `height` 属性：如果它们相等，它将是一个圆形；如果 `width` 大于 `height`，它将形成药丸或胶囊形状。

本身可勾选的 `PillButton` 组件派生自 `RoundButton`。

## 基本圆形按钮示例

`RoundButton` 可以像标准 `Button`一样使用，其形状会适应其尺寸。

**药丸形状 (宽度 > 高度):**
<div align="center">
  <img src="/assets/images/BasicInput/RoundButton/roundbutton-pill.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

RoundButton {
    text: qsTr("Submit")
    width: 120 // 宽度大于高度
    height: 40 
    onClicked: console.log("Pill-shaped RoundButton clicked")
}
```

**圆形 (宽度 == 高度):**
<div align="center">
  <img src="/assets/images/BasicInput/RoundButton/roundbutton-circle.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
RoundButton {
    icon.name: "ic_fluent_checkmark_20_regular"
    width: 40 // 等宽等高形成圆形
    height: 40
    // ToolTip.text: qsTr("Confirm") // 可选：为仅图标按钮添加工具提示
    onClicked: console.log("Circular RoundButton clicked")
}
```

## 主要属性

*   `radius`: `real` - (背景圆角的别名) 控制圆角半径。在 `RoundButton` 中，背景的 `radius` 动态绑定到 `height / 2`，确保完全圆角并适应按钮高度。
*   `text`: `string` - 按钮的文本标签。
*   `icon.name`: `string` - 按钮的 fluent 图标名称。
*   `icon.source`: `url` - 按钮的自定义图像图标的 URL。
*   `highlighted`: `bool` - 如果为 `true`，通常会将 `backgroundColor` 更改为主题的主颜色。
*   `flat`: `bool` - 如果为 `true`，通常会移除边框并使背景透明，除非悬停或高亮。
*   `enabled`: `bool` - 控件是否可交互。默认为 `true`。

由于 `RoundButton` 继承自 `Button`，所有标准的 `Button` 属性（如 `primaryColor`、特定状态的 `backgroundColor`）和信号（如 `onClicked`）都可用。其主要区别在于强制的完全圆角背景。

## 使用说明

*   要创建完美的圆形按钮，请确保 `width` 和 `height` 属性设置为相同的值。这些按钮通常非常适合仅图标按钮。
*   如果 `width` 大于 `height`，按钮自然会呈现药丸或胶囊形状。
*   `PillButton` 组件是一个专门的 `RoundButton`，默认情况下增加了 `checkable` 行为，并将其 `checked` 状态链接到 `highlighted` 视觉状态。如果您需要一个可勾选的圆形按钮，`PillButton` 可能更直接。

```
