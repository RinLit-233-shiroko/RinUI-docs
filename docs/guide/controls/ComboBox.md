# ComboBox

## Introduction

<mcurl name="ComboBox" url="https://learn.microsoft.com/en-us/windows/apps/design/controls/combobox"></mcurl>

Use a ComboBox when you need to conserve on-screen space and when users select only one option at a time. A ComboBox shows only the currently selected item.

## Examples

### A ComboBox with items defined inline and its width set.

::: code-group

```qml
ComboBox {
    id: comboBox
    width: 200
    model: ["Blue", "Green", "Red", "Yellow"]
    currentIndex: -1
    placeholderText: qsTr("Pick a color")
}

Rectangle {
    width: 100
    height: 30
    color: {
        if (comboBox.currentIndex === 0) {
            return "#0000FF"  // Blue
        } else if (comboBox.currentIndex === 1) {
            return "#008000"  // Green
        } else if (comboBox.currentIndex === 2) {
            return "#FF0000"  // Red
        } else if (comboBox.currentIndex === 3) {
            return "#FFFF00"  // Yellow
        } else {
            return "transparent"
        }
    }
}
```

:::

### A ComboBox with its Model set.

::: code-group

```qml
ComboBox {
    id: comboBoxFont
    width: 200
    model: ["Arial", "Comic Sans MS", "Courier New", "Segoe UI", "Times New Roman"]
    currentIndex: 2
    placeholderText: qsTr("Pick a font")
}

Text {
    text: qsTr("The quick brown fox jumps over the lazy dog")
    font.family: comboBoxFont.currentText
    font.pixelSize: 14
}
```

:::

### An editable ComboBox with its Model set.

::: code-group

```qml
ComboBox {
    id: comboBoxSize
    width: 200
    editable: true
    model: ListModel {
        id: sizeModel
        ListElement { value: 8 }
        ListElement { value: 9 }
        ListElement { value: 10 }
        ListElement { value: 11 }
        ListElement { value: 12 }
        ListElement { value: 14 }
        ListElement { value: 16 }
        ListElement { value: 18 }
        ListElement { value: 20 }
        ListElement { value: 24 }
        ListElement { value: 28 }
        ListElement { value: 36 }
        ListElement { value: 48 }
        ListElement { value: 72 }
    }
    currentIndex: 2
    placeholderText: qsTr("Pick a size")

    onAccepted: {
        if (find(editText) === -1) {
            let num = Number(editText)
            if (!isNaN(num)) {
                sizeModel.append({ value: num })
            } else {
                warnDialog.open()
            }
        }
    }
}

Text {
    typography: Typography.Body
    font.pixelSize: comboBoxSize.currentText
    text: qsTr("The quick brown fox jumps over the lazy dog")
}

Dialog {
    id: warnDialog
    modal: true
    Text {
        Layout.fillWidth: true
        text: qsTr("The font size must be a number.")
    }
    standardButtons: Dialog.Ok
}
```

:::