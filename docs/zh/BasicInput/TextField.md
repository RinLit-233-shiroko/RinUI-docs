# TextField（文本框）

TextField 是一个单行文本输入控件，类似于标准 QML TextField，但增加了自定义样式和功能。它支持文本输入、选择和编辑，并提供自定义样式选项。

## 基本使用


<div align="center">
  <img src="/assets/images/docs/TextField/基本使用.png" alt="基本使用 示例">
</div>

```qml
TextField {
    id: control
    width: 240
    placeholderText: qsTr("Enter text...")
}
```

## 带清除按钮的文本框


<div align="center">
  <img src="/assets/images/docs/TextField/带清除按钮的文本框.png" alt="带清除按钮的文本框 示例">
</div>

```qml
TextField {
    id: control
    width: 240
    placeholderText: qsTr("Search...")
    clearEnabled: true
}
```

## 自定义样式


<div align="center">
  <img src="/assets/images/docs/TextField/自定义样式.png" alt="自定义样式 示例">
</div>

```qml
TextField {
    id: control
    width: 240
    placeholderText: qsTr("Enter text...")
    primaryColor: "#3A86FF"
}
```

## 无边框模式


<div align="center">
  <img src="/assets/images/docs/TextField/无边框模式.png" alt="无边框模式 示例">
</div>

```qml
TextField {
    id: control
    width: 240
    placeholderText: qsTr("Enter text...")
    frameless: true
}
```

## 只读模式


<div align="center">
  <img src="/assets/images/docs/TextField/只读模式.png" alt="只读模式 示例">
</div>

```qml
TextField {
    id: control
    width: 240
    text: qsTr("Read-only text")
    editable: false
}
```

## 重要属性

- `text`: 控件中显示的文本
- `placeholderText`: 当控件为空时显示的占位符文本
- `editable`: 是否允许用户编辑文本
- `clearEnabled`: 是否显示清除按钮
- `frameless`: 是否显示边框
- `primaryColor`: 自定义主题颜色
- `selectByMouse`: 是否允许通过鼠标选择文本
