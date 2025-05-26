# 设置展开器

`SettingExpander` 是 `Expander` 组件的一个专门版本，专为在设置页面或列表中创建项目而设计。它提供了一个结构化的标题，包含图标、标题、描述以及标题右侧控件的插槽。与标准 `Expander` 一样，它也具有一个可折叠的内容区域，用于显示其他详细信息或子设置。

## 基本设置展开器

`SettingExpander` 的标题显示图标、标题和描述。`content` 属性允许在此标题的右侧放置控件（如 `Switch` 或 `ComboBox`）。主要的可折叠区域（继承自 `Expander` 的 `contentData` 默认属性）通过将 QML 项作为 `SettingExpander` 的子项添加来填充。

<div align="center">
  <img src="/assets/images/Layout/SettingExpander/settingexpander-basic.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

SettingExpander {
    width: 400 // 示例宽度，根据需要调整
    icon: "ic_fluent_settings_20_regular" // 标题的 Fluent 图标名称
    title: qsTr("Appearance Settings")
    description: qsTr("Customize the look and feel of the application.")

    // 通过 'content' 属性放置在标题右侧的控件
    content: Switch {
        // 此开关可能控制全局外观设置
        checked: true 
        // 注意：如果此处需要多个项目或复杂布局，
        // 'content' 插槽内的布局可能需要特定处理。
    }

    // 可折叠内容（作为子项添加，填充 'contentData'）
    Text {
        text: qsTr("More detailed appearance options can be placed here, inside the collapsible area.")
        padding: 10 // 由于 SettingExpander 的基础 Expander 的 contentPadding 为 0，因此添加填充
        wrapMode: Text.WordWrap
        Layout.fillWidth: true
    }
    Button {
        text: qsTr("Advanced Options")
        Layout.alignment: Qt.AlignHCenter
        // 根据需要添加填充或边距
    }
}
```

## 在可折叠区域中使用 `SettingItem`

`SettingExpander` 的可折叠内容区域通常用 `SettingItem` 组件填充，以保持子设置列表的一致布局。

<div align="center">
  <img src="/assets/images/Layout/SettingExpander/settingexpander-with-items.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
SettingExpander {
    width: 400
    icon: "ic_fluent_paint_brush_20_regular"
    title: qsTr("Theme Options")
    description: qsTr("Select your preferred application theme and accent color.")
    expanded: false // 示例：初始折叠

    // 标题右侧的控件
    content: ComboBox {
        width: 120 // 给它一个合理的宽度
        model: ["Light", "Dark", "System"]
    }

    // 用 SettingItem 填充的可折叠内容
    SettingItem {
        title: qsTr("Accent Color")
        description: qsTr("Choose a primary accent color for the application.")
        // SettingItem 的 'content'（SettingItem 标题的右侧）
        content: Button { text: qsTr("Select Color...") } 
    }
    SettingItem {
        title: qsTr("Font Size")
        // 此 SettingItem 没有描述
        content: Slider { width: 100; from: 10; to: 16; value: 12 }
    }
}
```

## 主要属性

继承自 `Expander` 的所有属性（如 `expanded`、`expandDirection`、`enabled`、`radius`），以及为其结构化标题添加的特定属性：

*   `title`: `string` - 显示在标题部分的主要文本标题。
*   `description`: `string` - 显示在标题中 `title` 下方的小描述文本。
*   `icon`: `string` (内部 `IconWidget` 的 `icon` 属性的别名) - 显示在标题左侧的 Fluent 图标名称。
*   `source`: `url` (内部 `IconWidget` 的 `source` 属性的别名) - 用作标题图标的自定义图像的 URL。
*   `iconSize`: `real` (内部 `IconWidget` 的 `size` 属性的别名) - 标题中图标的大小。默认为 `20`。
*   `content`: `Item` (`rightContent.data` 的别名) - 允许在标题区域右侧添加 QML 项（通常是单个控件，如 `Switch`、`ComboBox` 或 `Button`）。

默认的可折叠内容区域通过 `contentData` 默认属性（继承自 `Expander`）填充。请注意，`SettingExpander` 将基础 `Expander` 的 `contentPadding` 和 `contentSpacing` 设置为 `0`，因此您需要自己管理可折叠区域内项目的间距和填充（例如，通过向子项添加 `padding` 或使用布局）。

## 相关组件

*   `Expander`: `SettingExpander` 从其继承大部分功能的基组件。
*   `SettingItem`: 通常在 `SettingExpander` 的可折叠 `contentData` 区域内使用，以列出更详细的设置或选项。

```
