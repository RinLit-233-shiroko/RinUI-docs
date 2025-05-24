# Dialog

## Introduction

<mcurl name="ContentDialog" url="https://learn.microsoft.com/en-us/windows/apps/design/controls/dialogs"></mcurl>

Use a ContentDialog to show relavant information or to provide a modal dialog experience that can show any QML content.

## Examples

### A dialog with basic content.

::: code-group

```qml
Dialog {
    title: qsTr("This is a dialog")
    modal: true
    Text {
        Layout.fillWidth: true
        text: qsTr("This a dialog with basic content. \nMeow")
    }
    standardButtons: Dialog.Ok | Dialog.Cancel
}
```

:::

### A dialog with custom content.

::: code-group

```qml
Dialog {
    title: qsTr("Dialog Meow")
    modal: true
    width: 500
    Text {
        Layout.fillWidth: true
        text: qsTr("This a dialog with custom content.")
    }
    InfoBar {
        Layout.fillWidth: true
        severity: Severity.Info
        title: qsTr("Attention")
        text: qsTr("You can customize the title, text, and severity to popup a custom InfoBar.")
        closable: false
    }
    RowLayout {
        Layout.fillWidth: true
        spacing: 8
        Column {
            Layout.fillWidth: true
            spacing: 4
            TextField {
                placeholderText: qsTr("InfoBarTitle")
                text: qsTr("Custom Title")
            }
            TextField {
                placeholderText: qsTr("InfoBarText")
                text: qsTr("Custom Text")
            }
        }
        Column {
            Layout.fillWidth: true
            Text {
                text: qsTr("Severity")
            }
            ComboBox {
                model: ListModel {
                    ListElement { text: "Info"; state: Severity.Info }
                    ListElement { text: "Success"; state: Severity.Success }
                    ListElement { text: "Warning"; state: Severity.Warning }
                    ListElement { text: "Error"; state: Severity.Error }
                }
                textRole: "text"
                currentIndex: 0
            }
        }
    }
    standardButtons: Dialog.Ok | Dialog.Cancel
}
```

:::