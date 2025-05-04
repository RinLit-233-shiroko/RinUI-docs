# Button

The Button represents a button control that the user can press or click. Buttons are typically used to perform an action or answer a question.

As with QtQuick native components, the Button emits the clicked() signal when it is activated by the user. Connect this signal to execute the button's action.

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

### Highlighted Style Button

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
