# MenuItem（メニュー項目）

MenuItem は、メニュー内の単一の項目を表すコンポーネントです。テキスト、アイコン、またはその両方を含めることができます。MenuItem はアクションを実行するため、または選択可能なオプションを表すために使用できます。

## 基本的な MenuItem

<div align="center">
  <img src="/assets/images/docs/MenuItem/example-2.png" alt="基本的な MenuItem">
</div>

```qml
MenuItem {
    text: qsTr("新規作成")
    icon.name: "ic_fluent_document_add_20_regular"
    onTriggered: console.log("新しいファイル")
}
```

## チェックボックス付き MenuItem

<div align="center">
  <img src="/assets/images/docs/MenuItem/example-3.png" alt="チェックボックス付き MenuItem">
</div>

```qml
MenuItem {
    text: qsTr("太字")
    checkable: true
    checked: textFormat.bold
    onTriggered: textFormat.bold = !textFormat.bold
}
```

## ラジオボタン付き MenuItem

<div align="center">
  <img src="/assets/images/docs/MenuItem/example.png" alt="ラジオボタン付き MenuItem">
</div>

```qml
MenuItemGroup {
    id: alignmentGroup
}

MenuItem {
    text: qsTr("左寄せ")
    checkable: true
    checked: alignment === Text.AlignLeft
    group: alignmentGroup
    onTriggered: alignment = Text.AlignLeft
}

MenuItem {
    text: qsTr("中央寄せ")
    checkable: true
    checked: alignment === Text.AlignHCenter
    group: alignmentGroup
    onTriggered: alignment = Text.AlignHCenter
}

MenuItem {
    text: qsTr("右寄せ")
    checkable: true
    checked: alignment === Text.AlignRight
    group: alignmentGroup
    onTriggered: alignment = Text.AlignRight
}
```

## 重要なプロパティ

- `text`：表示するテキスト
- `icon`：表示するアイコン
- `checkable`：メニュー項目をチェック可能かどうか
- `checked`：メニュー項目がチェックされているかどうか
- `group`：このメニュー項目が属するメニュー項目グループ
- `enabled`：メニュー項目が有効かどうか
- `visible`：メニュー項目が表示されるかどうか

## 重要なシグナル

- `triggered()`：メニュー項目がクリックされたときに送出されます