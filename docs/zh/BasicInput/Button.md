# 按钮

Button 是一个按钮控件，用户可以按下或单击该控件。按钮通常用于执行操作或回答问题。

与 QtQuick 原生组件一样，当按钮被用户激活时，会发出 `clicked()` 信号，将此信号连接起来以执行按钮的操作。
使用方法也与原生控件完全一致。

## 按钮

<div align="center">
<img src="/assets/images/BasicInput/Button/Button.png">
</div>

```qml
Button {
    text: qsTr("Standard QML Button")
}
```

## 图标按钮

<div align="center">
<img src="/assets/images/BasicInput/Button/IconButton.png">
</div>

```qml
Button {
    icon.source: Qt.resolvedUrl("../../assets/BA_Pic_Shiroko-chibi.png")   // [!code highlight]
    text: qsTr("Sunaookami Shiroko")
}

Button {
    icon.name: "ic_fluent_button_20_regular"  // [!code highlight]
    text: qsTr("Button with Icon")
}
```

## 高亮按钮（Highlighted）

<div align="center">
<img src="/assets/images/BasicInput/Button/AccentStyleButton.png">
</div>

```qml
Button {
    highlighted: true
    text: qsTr("Accent Style Button")
}
```

## 扁平按钮（Flat）

<div align="center">
<img src="/assets/images/BasicInput/Button/PlainStyleButton.png">
</div>

```qml
Button {
    flat: true
    text: qsTr("Plain Style Button")
}
```

## 自定义按钮（Highlighted）

<div align="center">
<img src="/assets/images/BasicInput/Button/ButtonWithCustomColor.png">
</div>

```qml
Button {
    highlighted: true
    primaryColor: "#444"
    text: qsTr("Button with Custom Color")
}
```

