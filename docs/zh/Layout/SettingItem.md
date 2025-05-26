# 设置项

`SettingItem` 是一个布局组件，继承自 `Frame`，设计用于表示设置页面或列表中的单个项目或行。它提供了一个结构化布局，包含 `title`、可选的 `description`，以及右侧用于控件（例如 `Switch`、`ComboBox`、`Button`、`TextField`）的插槽（`content` 属性）。

## 基本设置项

`SettingItem` 通常包含一个 `title` 和放置在其 `content` 区域的控件。可选的 `description` 可以提供更多上下文。`content` 属性是默认属性，因此如果子项未明确分配给其他属性，则会自动分配给它。

<div align="center">
  <img src="/assets/images/Layout/SettingItem/settingitem-basic.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

Column { // 示例容器
    width: 400
    spacing: 0 // SettingItem 本身带有底部分隔线/边框

    SettingItem {
        // Layout.fillWidth: true // 如果 SettingItem 在 ColumnLayout 内部，则使用
        title: qsTr("Enable Notifications")
        description: qsTr("Allow the application to send you notifications.")

        // 通过 'content' 默认属性放置在右侧的控件
        Switch {
            checked: true
            // ...
        }
    }

    SettingItem {
        title: qsTr("Username")
        description: qsTr("Your display name in the application.")
        content: TextField { // 明确使用 'content' 属性
            width: 150 // 根据控件需要调整宽度
            text: "CurrentUser"
            placeholderText: qsTr("Enter username")
        }
    }
}
```

## 不带描述的设置项

如果 `description` 属性未设置或为空字符串，则其空间将折叠，如果适用，`title` 将垂直居中。

<div align="center">
  <img src="/assets/images/Layout/SettingItem/settingitem-no-desc.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
import RinUI // Consistent import

SettingItem {
    title: qsTr("Advanced Settings")
    // 未提供描述
    content: Button {
        text: qsTr("Configure...")
        onClicked: { /* ... */ }
    }
}
```

## 用于信息显示的设置项

如果 `content` 插槽中没有放置任何项（即未添加子控件），则 `SettingItem` 可纯粹用于以一致的样式显示文本信息。

<div align="center">
  <img src="/assets/images/Layout/SettingItem/settingitem-info.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
import RinUI // Consistent import

SettingItem {
    title: qsTr("Version Information")
    description: qsTr("Application Version: 1.2.3
Build Date: 2023-10-27")
    // 'content' 区域未添加控件
}
```

## 主要属性

*   `title`: `string` - 设置项的主要文本标签。显示在 `Text` 元素中。
*   `description`: `string` - 显示在 `title` 下方的可选描述文本。显示在具有辅助颜色的 `Text` 元素中。
*   `content`: `Item` (`rightContent.data` 的默认属性别名) - 允许在设置项的右侧添加 QML 项（通常是单个控件，如 `Switch`、`ComboBox`、`Button` 或 `TextField`）。
*   Padding 属性 (`leftPadding`, `rightPadding`, `topPadding`, `bottomPadding`): 继承自 `Frame`。`SettingItem` 设置了特定的默认值（例如 `leftPadding: 15 + 35`，`rightPadding: 15`，`topPadding: 13`，`bottomPadding: 13`）。
*   `Layout.fillWidth`: `bool` - 继承自 `Frame`。当 `SettingItem` 在父 `ColumnLayout` 中使用时，通常应设置为 `true` 以使其跨越宽度。

`SettingItem` 默认包含一个底部边框，当多个 `SettingItem` 堆叠在列表中时，它充当视觉分隔符。

## 与 `SettingExpander` 一起使用

`SettingItem` 通常在 `SettingExpander` 的可折叠内容区域内使用，以创建详细或相关设置的列表，保持一致的外观和感觉。

```qml
import RinUI // Consistent import

SettingExpander {
    width: 400
    icon: "ic_fluent_preferences_20_regular"
    title: qsTr("User Preferences")
    description: qsTr("Manage your application preferences.")

    // 使用 SettingItems 的可折叠内容
    SettingItem {
        title: qsTr("Enable Auto-Save")
        content: Switch { checked: true }
    }
    SettingItem {
        title: qsTr("Sync Interval")
        description: qsTr("Frequency of automatic synchronization.")
        content: ComboBox { model: ["5 minutes", "15 minutes", "1 hour"] }
    }
}
```

## 相关组件

*   `Frame`: `SettingItem` 从其继承的基组件，提供背景和边框功能。
*   `SettingExpander`: `SettingItem` 经常嵌套在 `SettingExpander` 的内容区域内。

```
