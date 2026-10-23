# TextField（テキストフィールド）

TextField は、標準の QML TextField に似ていますが、カスタムスタイルと機能を追加した1行テキスト入力コントロールです。テキストの入力、選択、編集をサポートし、カスタムスタイルオプションを提供します。

<VPImage
  :image="{
    light: '/assets/images/examples/TextField-light.png',
    dark: '/assets/images/examples/TextField-dark.png',
    alt: 'TextField コンポーネントのライト／ダーク例'
  }"
  width="1000"
/>

## 基本使用

```qml
TextField {
    id: control
    width: 240
    placeholderText: qsTr("テキストを入力...")
}
```

## クリアボタン付きのテキストフィールド

```qml
TextField {
    id: control
    width: 240
    placeholderText: qsTr("検索するには入力...")
    clearEnabled: true
}
```

## カスタムスタイル

```qml
TextField {
    id: control
    width: 240
    placeholderText: qsTr("テキストを入力...")
    primaryColor: "#3A86FF"
}
```

## フレームレスモード

```qml
TextField {
    id: control
    width: 240
    placeholderText: qsTr("テキストを入力...")
    frameless: true
}
```

## 読み取り専用モード

```qml
TextField {
    id: control
    width: 240
    text: qsTr("これは読み取り専用テキストです")
    editable: false
}
```

## 重要なプロパティ

- `text`: コントロールに表示されるテキスト
- `placeholderText`: コントロールが空のときに表示されるプレースホルダーテキスト
- `editable`: ユーザーがテキストを編集できるかどうか
- `clearEnabled`: クリアボタンを表示するかどうか
- `frameless`: ボーダーを表示するかどうか
- `primaryColor`: カスタムテーマ色
- `selectByMouse`: マウスでテキストを選択できるかどうか