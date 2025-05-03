# Button

Button represents a button control that the user can press or click. Buttons are typically used to perform an action or answer a question. Typical buttons include Ok, Apply, Cancel, Close, Yes, No, and Help.

Button inherits APIs from AbstractButton. For example, you can use the AbstractButton APIs to set the text, display an icon, and respond to user clicks.

When the button is activated by the user, it emits the clicked() signal. Connect to this signal to perform the button's action. Button also provides the canceled(), doubleClicked(), pressed(), released(), and pressAndHold() signals, the last of which is for long presses.

## Examples

### A Basic Button

<div align="center">
<img src="/assets/images/BasicInput/Button/Button.png">
</div>

```qml
Button {
    text: qsTr("Standard QML Button")
    enabled: !buttonSwitch.checked
}
```

### Button with an Icon

<div align="center">
<img src="/assets/images/BasicInput/Button/IconButton.png">
</div>

```qml
Button {
    icon.source: Qt.resolvedUrl("../../assets/BA_Pic_Shiroko-chibi.png")
    text: qsTr("Sunaookami Shiroko")
    ToolTip {
        delay: 500
        text: qsTr("icon.source: Qt.resolvedUrl(\"../../assets/BA_Pic_Shiroko-chibi.png\")")
        visible: parent.hovered
    }
}
Button {
    icon.name: "ic_fluent_button_20_regular"
    text: qsTr("Button with Icon")
    ToolTip {
        delay: 500
        text: qsTr("icon.name: \"ic_fluent_button_20_regular\"")
        visible: parent.hovered
    }
}
```

### Accent Style Button

<div align="center">
<img src="/assets/images/BasicInput/Button/AccentStyleButton.png">
</div>

```qml
Button {
    highlighted: true
    text: qsTr("Accent Style Button")
}
```

### Plain Style Button

<div align="center">
<img src="/assets/images/BasicInput/Button/PlainStyleButton.png">
</div>

```qml
Button {
    flat: true
    text: qsTr("Plain Style Button")
}
```

## Remarks

## See Also
