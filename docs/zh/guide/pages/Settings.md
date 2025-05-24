# 设置页面（Settings Page）

## 介绍

RinUI Gallery 示例中的设置页面演示了如何使用各种 RinUI 控件创建设置界面。它包括更改应用程序主题、窗口背景效果和语言的示例，以及提供有关 Gallery 及其依赖项的信息。

## 示例

### 外观设置

本节展示了如何使用 `SettingCard` 和 `ComboBox` 允许用户更改应用程序主题和窗口背景效果。

::: code-group

```qml
Column {
    Layout.fillWidth: true
    spacing: 3
    Text {
        typography: Typography.BodyStrong
        text: qsTr("Appearance")
    }

    SettingCard {
        width: parent.width
        title: qsTr("App Theme")
        description: qsTr("Select which app theme to display")
        icon: "ic_fluent_paint_brush_20_regular"

        ComboBox {
            property var data: [Theme.mode.Light, Theme.mode.Dark, Theme.mode.Auto]
            model: ListModel {
                ListElement { text: qsTr("Light") }
                ListElement { text: qsTr("Dark") }
                ListElement { text: qsTr("Use system setting") }
            }
            currentIndex: data.indexOf(Theme.getTheme())
            onCurrentIndexChanged: {
                Theme.setTheme(data[currentIndex])
            }
        }
    }

    SettingCard {
        width: parent.width
        title: qsTr("Window Backdrop Effect")
        description: qsTr("Adjust the appearance of the window background (Only available on Windows platform, some styles may only support on Windows 11)")
        icon: "ic_fluent_square_hint_sparkles_20_regular"

        ComboBox {
            property var data: ["mica", "acrylic", "tabbed", "none"]
            model: ListModel {
                ListElement { text: qsTr("Mica") }
                ListElement { text: qsTr("Acrylic") }
                ListElement { text: qsTr("Tabbed") }
                ListElement { text: qsTr("None") }
            }
            currentIndex: data.indexOf(Theme.getBackdropEffect())
            onCurrentIndexChanged: {
                Theme.setBackdropEffect(data[currentIndex])
            }
        }
    }
}
```

:::

### 语言设置

本节演示了如何使用 `SettingCard` 和 `ComboBox` 进行语言选择。

::: code-group

```qml
Column {
    Layout.fillWidth: true
    spacing: 3
    Text {
        typography: Typography.BodyStrong
        text: qsTr("Language")
    }

    SettingCard {
        width: parent.width
        title: qsTr("Display Language")
        description: qsTr("Set your preferred language for the gallery")
        icon: "ic_fluent_translate_20_regular"

        ComboBox {
            property var data: [Backend.getSystemLanguage(), "en_US", "zh_CN"]
            property bool initialized: false
            model: ListModel {
                ListElement { text: qsTr("Use System Language") }
                ListElement { text: "English (US)" }
                ListElement { text: "简体中文" }
            }
            Component.onCompleted: {
                currentIndex = data.indexOf(Backend.getLanguage())
                initialized = true
            }

            onCurrentIndexChanged: {
                if (initialized) {
                    Backend.setLanguage(data[currentIndex])
                }