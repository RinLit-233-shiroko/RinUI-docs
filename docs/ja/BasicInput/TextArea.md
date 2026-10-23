# TextArea（テキストエリア）

TextArea は、標準の QML TextArea に似ていますが、カスタムスタイルと機能を追加した複数行テキスト入力コントロールです。複数行のテキスト入力、サイズ調整、テキスト選択と編集をサポートしています。

<VPImage
  :image="{
    light: '/assets/images/examples/TextArea-light.png',
    dark: '/assets/images/examples/TextArea-dark.png',
    alt: 'TextArea コンポーネントのライト／ダーク例'
  }"
  width="1000"
/>

## 基本使用

```qml
TextArea {
    id: control
    width: 300
    height: 120
    placeholderText: qsTr("ここにテキストを入力...")
}
```

## カスタムスタイル

```qml
TextArea {
    id: control
    width: 300
    height: 120
    placeholderText: qsTr("ここにテキストを入力...")
    primaryColor: "#3A86FF"
}
```

## フレームレスモード

```qml
TextArea {
    id: control
    width: 300
    height: 120
    placeholderText: qsTr("ここにテキストを入力...")
    frameless: true
}
```

## 読み取り専用モード

```qml
TextArea {
    id: control
    width: 300
    height: 120
    text: qsTr("これは読み取り専用のテキストエリアです")
    editable: false
}
```

## 重要なプロパティ

- `text`: コントロールに表示されるテキスト
- `placeholderText`: コントロールが空のときに表示されるプレースホルダーテキスト
- `editable`: ユーザーがテキストを編集できるかどうか
- `frameless`: ボーダーを表示するかどうか
- `primaryColor`: カスタムテーマ色
- `selectByMouse`: マウスでテキストを選択できるかどうか