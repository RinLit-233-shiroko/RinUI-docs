# Expander

## Introduction

<mcurl name="Expander" url="https://learn.microsoft.com/en-us/windows/apps/design/controls/expander"></mcurl>

The Expander has a header and can expand to show a body with more content. Use an Expander when some content is only relevant some of the time (for example to read more information or access additional options for an item).

## Examples

### An Expander with text in the header and content areas

::: code-group

```qml
Expander {
    width: 228
    contentHeight: 50
    expandDirection: Expander.Down
    text: qsTr("This text is in the header")

    Text {
        Layout.fillWidth: true
        horizontalAlignment: Text.AlignHCenter
        text: qsTr("This is in th content")
    }
}
```

:::

### An Expander with other controls in the header and content

::: code-group

```qml
Expander {
    header: ToggleButton {
        text: qsTr("This is a ToggleButton in the header")
    }

    Button {
        Layout.alignment: Qt.AlignHCenter
        text: qsTr("This is a Button in the content")
    }
}
```

:::

### Modifying Expanders content alignment

::: code-group

```qml
Expander {
    width: 500
    header: ToggleButton {
        Layout.alignment: Qt.AlignHCenter
        text: qsTr("This ToggleButton is centered")
    }

    Button {
        Layout.alignment: Qt.AlignLeft
        text: qsTr("This Button is left aligned")
    }
}
```

:::