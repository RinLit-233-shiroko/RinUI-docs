# TextArea（多行文本框）

TextArea 是一个多行文本输入控件，类似于标准 QML TextArea，但增加了自定义样式和功能。它支持多行文本输入，可以调整大小，并支持文本选择和编辑。

## 基本使用


<div align="center">
  <img src="/assets/images/docs/TextArea/example-2.png" alt="基本使用 示例">
</div>

```qml
TextArea {
    id: control
    width: 300
    height: 120
    placeholderText: qsTr("Type here...")
}
```

## 自定义样式


<div align="center">
  <img src="/assets/images/docs/TextArea/example-3.png" alt="自定义样式 示例">
</div>

```qml
TextArea {
    id: control
    width: 300
    height: 120
    placeholderText: qsTr("Type here...")
    primaryColor: "#3A86FF"
}
```

## 无边框模式


<div align="center">
  <img src="/assets/images/docs/TextArea/example-4.png" alt="无边框模式 示例">
</div>

```qml
TextArea {
    id: control
    width: 300
    height: 120
    placeholderText: qsTr("Type here...")
    frameless: true
}
```

## 只读模式


<div align="center">
  <img src="/assets/images/docs/TextArea/example.png" alt="只读模式 示例">
</div>

```qml
TextArea {
    id: control
    width: 300
    height: 120
    text: qsTr("This is a read-only multiline text field.")
    editable: false
}
```

## 重要属性

- `text`: 控件中显示的文本
- `placeholderText`: 当控件为空时显示的占位符文本
- `editable`: 是否允许用户编辑文本
- `frameless`: 是否显示边框
- `primaryColor`: 自定义主题颜色
- `selectByMouse`: 是否允许通过鼠标选择文本
