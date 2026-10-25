# ScrollableTextArea（スクロール可能なテキストエリア）

ScrollableTextArea は、スクロール可能な TextArea を含むコントロールです。 TextArea コンポーネントにスクロール機能を提供し、標準の TextArea のようにカスタマイズできます。

<VPImage
  :image="{
    light: '/assets/images/examples/ScrollableTextArea-light.png',
    dark: '/assets/images/examples/ScrollableTextArea-dark.png',
    alt: 'ScrollableTextArea コンポーネントのライト／ダーク例'
  }"
  width="1000"
/>

## 基本スクロール可能なテキストエリア

<div align="center">
  <img src="/assets/images/docs/ScrollableTextArea/example-2.png" alt="基本スクロール可能なテキストエリア">
</div>

```qml
ScrollableTextArea {
    id: control
    text: qsTr("これは、垂直にスクロールできる長いテキストコンテンツを含むスクロール可能なテキストエリアです。")
    width: 300
    height: 150
}
```

## プレースホルダー付きスクロール可能なテキストエリア

<div align="center">
  <img src="/assets/images/docs/ScrollableTextArea/example-3.png" alt="プレースホルダー付きスクロール可能なテキストエリア">
</div>

```qml
ScrollableTextArea {
    id: control
    placeholderText: qsTr("Type here...")
    width: 300
    height: 150
}
```
```

## 読み取り専用スクロール可能なテキストエリア

<div align="center">
  <img src="/assets/images/docs/ScrollableTextArea/example.png" alt="読み取り専用スクロール可能なテキストエリア">
</div>

```qml
ScrollableTextArea {
    id: control
    text: qsTr("これは、コンテンツを表示하지만は編集できない読み取り専用スクロール可能なテキストエリアです。")
    readOnly: true
    width: 300
    height: 150
}
```

## 重要なプロパティ

- `text`: スクロール可能なテキストエリアに表示されるテキストコンテンツ
- `placeholderText`: テキストエリアが空のときに表示されるプレースホルダーテキスト
- `textFormat`: テキストの形式（PlainText または RichText）
- `wrapMode`: テキストの折り返しモード
- `readOnly`: テキストエリアが読み取り専用かどうか
- `selectionColor`: 選択されたテキストの色
- `textArea`: ScrollView 内に含まれる TextArea コンポーネント

## 重要な信号

- `textChanged()`: テキストが変更されたときに发出される