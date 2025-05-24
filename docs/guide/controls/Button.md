# Button

## Introduction

<mcurl name="Button" url="https://learn.microsoft.com/en-us/windows/apps/design/controls/buttons"></mcurl>

Buttons are interactive elements that enable users to initiate an action. Use buttons to command immediate actions.

## Examples

### A simple Button with text content.

::: code-group

```qml
Button {
    text: qsTr("Standard QML Button")
}
```

:::

### A Button with graphical content.

::: code-group

```qml
Row {
    spacing: 8
    Button {
        icon.source: Qt.resolvedUrl("../../assets/BA_Pic_Shiroko-chibi.png")
        text: qsTr("Sunaookami Shiroko")
    }
    Button {
        icon.name: "ic_fluent_button_20_regular"
        text: qsTr("Button with Icon")
    }
}
```

:::

### Wrapping Buttons with large content.

::: code-group

```qml
Column {
    spacing: 8
    Button {
        width: parent.width
        text: qsTr("This is some text that is too long and the text will get cut off.")
    }
    RowLayout {
        width: parent.width
        spacing: 8
        Button {
            text: qsTr("This is some text \nthat is too long \nbut with wrapping.")
        }
        Button {
            Layout.fillWidth: true
            text: qsTr("This is some text that is too long and the text will get cut off.")
        }
    }
}
```

:::

### Accent style applied to Button.

::: code-group

```qml
Button {
    highlighted: true
    text: qsTr("Accent Style Button")
}
```

:::

### Flat style applied to Button.

::: code-group

```qml
Button {
    flat: true
    text: qsTr("Flat Style Button")
}
```

:::