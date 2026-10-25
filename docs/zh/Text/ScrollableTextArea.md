# ScrollableTextArea（可滚动文本区域）

ScrollableTextArea 是一个包含可滚动 TextArea 的控件。它为 TextArea 组件提供滚动功能，可以像标准 TextArea 一样自定义。

<VPImage
  :image="{
    light: '/assets/images/examples/ScrollableTextArea-light.png',
    dark: '/assets/images/examples/ScrollableTextArea-dark.png',
    alt: 'ScrollableTextArea 组件示例（亮色与暗色）'
  }"
  width="1000"
/>

## 基本可滚动文本区域


<div align="center">
  <img src="/assets/images/docs/ScrollableTextArea/example-2.png" alt="基本可滚动文本区域 示例">
</div>

```qml
ScrollableTextArea {
    id: control
    text: qsTr("这是一个可滚动的文本区域，包含很长的文本内容，可以垂直滚动。")
    width: 300
    height: 150
}
```

## 带占位符的可滚动文本区域


<div align="center">
  <img src="/assets/images/docs/ScrollableTextArea/example-3.png" alt="带占位符的可滚动文本区域 示例">
</div>

```qml
ScrollableTextArea {
    id: control
    placeholderText: qsTr("Type here...")
    width: 300
    height: 150
}
```

## 只读可滚动文本区域


<div align="center">
  <img src="/assets/images/docs/ScrollableTextArea/example.png" alt="只读可滚动文本区域 示例">
</div>

```qml
ScrollableTextArea {
    id: control
    text: qsTr("这是一个只读的可滚动文本区域，显示内容但不能编辑。")
    readOnly: true
    width: 300
    height: 150
}
```

## 重要属性

- `text`: 在可滚动文本区域中显示的文本内容
- `placeholderText`: 文本区域为空时显示的占位符文本
- `textFormat`: 文本格式（PlainText 或 RichText）
- `wrapMode`: 文本换行模式
- `readOnly`: 文本区域是否为只读
- `selectionColor`: 选中文本的颜色
- `textArea`: ScrollView 内部包含的 TextArea 组件

## 重要信号

- `textChanged()`: 当文本发生变化时发出
