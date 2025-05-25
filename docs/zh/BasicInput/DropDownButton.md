# 下拉按钮

DropDownButton 是一种按钮，点击后会显示一个选项菜单。它结合了按钮的外观和下拉菜单的功能。

## 基本下拉按钮

DropDownButton 通常有一个文本标签和一个下拉指示器。菜单项被定义为其子项，用以填充其内部菜单。

<div align="center">
  <img src="/assets/images/BasicInput/DropDownButton/dropdownbutton-basic.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

DropDownButton {
    text: qsTr("File")

    MenuItem {
        text: qsTr("New")
        onTriggered: console.log("New clicked")
    }
    MenuItem {
        text: qsTr("Open")
        onTriggered: console.log("Open clicked")
    }
    // 假设 MenuSeparator 可用且兼容：
    // MenuSeparator { } 
    MenuItem {
        text: qsTr("Save")
        onTriggered: console.log("Save clicked")
    }
}
```

## 带图标的下拉按钮

按钮本身及其菜单项都可以包含图标。

<div align="center">
  <img src="/assets/images/BasicInput/DropDownButton/dropdownbutton-icons.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
DropDownButton {
    text: qsTr("Email")
    icon.name: "ic_fluent_mail_20_regular" // 设置按钮部分的图标

    MenuItem {
        text: qsTr("Send")
        icon.name: "ic_fluent_send_20_filled" // 菜单项的图标
        onTriggered: console.log("Send email")
    }
    MenuItem {
        text: qsTr("Reply")
        icon.name: "ic_fluent_mail_arrow_up_20_regular"
        onTriggered: console.log("Reply email")
    }
}
```

## 主要属性

*   `text`: `string` - 显示在按钮部分的文本标签。
*   `icon.name`: `string` - 按钮部分的 fluent 图标名称。
*   `icon.source`: `url` - 按钮部分的自定义图像图标的 URL。
*   `contentData`: `list<Item>` - (默认属性) 用于填充下拉菜单的项，通常是 `MenuItem` 和 `MenuSeparator` 组件。
*   `enabled`: `bool` - 控件是否可交互。默认为 `true`。

`DropDownButton` 从基础 `Button` 组件继承了许多属性（如 `flat`、`highlighted`、`primaryColor`），用于设置主按钮外观的样式。下拉菜单本身由内部 `Menu` 组件管理。

## 相关组件

*   `MenuItem`: 用于在 `DropDownButton` 菜单中定义可单独选择的项。主要属性包括 `text`、`icon.name`、`icon.source` 和 `onTriggered` 信号。
*   `MenuSeparator`: （如果可用）用于在 `MenuItem` 组之间创建视觉分隔。

```
