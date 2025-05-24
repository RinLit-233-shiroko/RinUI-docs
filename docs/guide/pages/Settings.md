# Settings Page

## Introduction

The Settings page in the RinUI Gallery example demonstrates how to use various RinUI controls to create a settings interface. It includes examples of changing the application theme, window backdrop effect, and language, as well as providing information about the gallery and its dependencies.

## Examples

### Appearance Settings

This section shows how to use `SettingCard` and `ComboBox` to allow users to change the application theme and window backdrop effect.

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

### Language Settings

This section demonstrates using `SettingCard` and `ComboBox` for language selection.

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