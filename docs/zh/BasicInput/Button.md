# 按钮

Button 是一个按钮控件，用户可以按下或单击该控件。按钮通常用于执行作或回答问题。

与QtQuick原生组件一样，当按钮被用户激活时，会发出 clicked()信号，将此信号连接起来以执行按钮的操作。

### 基本按钮

<div align="center">
<img src="/assets/images/BasicInput/Button/Button.png">
</div>

```qml
Button {
    text: qsTr("Standard QML Button")
    enabled: !buttonSwitch.checked
}
```

### 带图标的按钮

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

### primary风格按钮

<div align="center">
<img src="/assets/images/BasicInput/Button/AccentStyleButton.png">
</div>

```qml
Button {
    highlighted: true
    text: qsTr("Accent Style Button")
}
```

### transparent风格按钮

<div align="center">
<img src="/assets/images/BasicInput/Button/PlainStyleButton.png">
</div>

```qml
Button {
    flat: true
    text: qsTr("Plain Style Button")
}
```


就这样（
