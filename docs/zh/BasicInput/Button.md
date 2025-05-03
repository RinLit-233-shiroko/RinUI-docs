# 按钮

Button 表示一个按钮控件，用户可以按下或单击该控件。按钮通常用于执行作或回答问题。典型的按钮包括 Ok、Apply、Cancel、Close、Yes、No 和 Help。

按钮继承自 AbstractButton 的 API。例如，您可以使用 AbstractButton API 设置文本、显示图标以及响应用户的点击。

当按钮被用户激活时，会发出 clicked()信号。将此信号连接起来以执行按钮的操作。按钮还提供了 canceled()、doubleClicked()、pressed()、released()和 pressAndHold()信号，用于长按。

## 示例

### 一个基本按钮

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

### 强调风格按钮

<div align="center">
<img src="/assets/images/BasicInput/Button/AccentStyleButton.png">
</div>

```qml
Button {
    highlighted: true
    text: qsTr("Accent Style Button")
}
```

### 平面样式的按钮

<div align="center">
<img src="/assets/images/BasicInput/Button/PlainStyleButton.png">
</div>

```qml
Button {
    flat: true
    text: qsTr("Plain Style Button")
}
```

## 备注

## 另请参阅
