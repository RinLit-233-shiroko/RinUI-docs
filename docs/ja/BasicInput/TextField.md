# TextField（テキストフィールド）

TextField は、標準の QML TextField に似ていますが、カスタムスタイルと機能を追加した1行テキスト入力コントロールです。テキストの入力、選択、編集をサポートし、カスタムスタイルオプションを提供します。

## 基本使用

<div align="center">
  <img src="/assets/images/docs/TextField/example-2.png" alt="基本使用">
</div>

```qml
TextField {
    id: control
    width: 240
    placeholderText: qsTr("Enter text...")
}
```
```

## クリアボタン付きのテキストフィールド

<div align="center">
  <img src="/assets/images/docs/TextField/example-3.png" alt="クリアボタン付きのテキストフィールド">
</div>

```qml
TextField {
    id: control
    width: 240
    placeholderText: qsTr("Search...")
    clearEnabled: true
}
```
```

## カスタムスタイル

<div align="center">
  <img src="/assets/images/docs/TextField/example-4.png" alt="カスタムスタイル">
</div>

```qml
TextField {
    id: control
    width: 240
    placeholderText: qsTr("Enter text...")
    primaryColor: "#3A86FF"
}
```
```

## フレームレスモード

<div align="center">
  <img src="/assets/images/docs/TextField/example-5.png" alt="フレームレスモード">
</div>

```qml
TextField {
    id: control
    width: 240
    placeholderText: qsTr("Enter text...")
    frameless: true
}
```
```

## 読み取り専用モード

<div align="center">
  <img src="/assets/images/docs/TextField/example.png" alt="読み取り専用モード">
</div>

```qml
TextField {
    id: control
    width: 240
    text: qsTr("Read-only text")
    editable: false
}
```
```

## 重要なプロパティ

- `text`: コントロールに表示されるテキスト
- `placeholderText`: コントロールが空のときに表示されるプレースホルダーテキスト
- `editable`: ユーザーがテキストを編集できるかどうか
- `clearEnabled`: クリアボタンを表示するかどうか
- `frameless`: ボーダーを表示するかどうか
- `primaryColor`: カスタムテーマ色
- `selectByMouse`: マウスでテキストを選択できるかどうか