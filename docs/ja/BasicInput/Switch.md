# スイッチ

`Switch` コントロールは、ユーザーが相互に排他的な2つのオプション（通常は「オン」または「オフ」の状態を表す）から選択できるようにするトグルです。オプションを選択すると、その状態がすぐにコミットされます。これは標準の `QtQuick.Controls.Switch` から継承されます。

## 基本的なスイッチ

`Switch` は、2つの状態間をスライドする視覚的なノブを表示します。デフォルトでは、メインの `text` プロパティが設定されていない場合、状態に基づいて「On」または「Off」のテキストを表示できます。

<div align="center">
  <img src="/assets/images/BasicInput/Switch/switch-basic.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

Switch {
    // checked: true // 初期状態で「オン」にする場合
    onCheckedChanged: {
        if (checked) {
            console.log("Switch is ON. Default text might be '" + checkedText + "'");
        } else {
            console.log("Switch is OFF. Default text might be '" + uncheckedText + "'");
        }
    }
}
```

## カスタムラベルテキスト付きスイッチ

`text` プロパティを使用して、`Switch` に永続的なカスタムテキストラベルを提供できます。このラベルは、オン/オフの状態に関係なく同じままです。

<div align="center">
  <img src="/assets/images/BasicInput/Switch/switch-custom-text.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
Switch {
    text: qsTr("Enable Feature") // このテキストが常に表示されます
    checked: true
}
```

## カスタムオン/オフ状態テキスト付きスイッチ

メインの `text` プロパティが空の場合、`Switch` は `checkedText` および `uncheckedText` を設定することにより、`checked` 状態に応じて異なるテキストラベルを表示できます。

<div align="center">
  <img src="/assets/images/BasicInput/Switch/switch-on-off-text.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
Switch {
    checked: false
    // text: "" // これらを使用するには、メインのテキストプロパティが空であることを確認してください
    checkedText: qsTr("Working")    // checked が true の場合に表示されるテキスト
    uncheckedText: qsTr("Do work")  // checked が false の場合に表示されるテキスト
}
```

## 主なプロパティ

*   `checked`: `bool` - スイッチが「オン」(`true`) か「オフ」(`false`) の状態にあるかを決定します。
*   `text`: `string` - スイッチのオプションの永続的なラベル。設定されている場合、`checkedText` と `uncheckedText` の表示を上書きします。
*   `checkedText`: `string` - `checked` が `true` で `text` プロパティが空の場合にスイッチの隣に表示されるテキスト。デフォルトは「On」（またはそのローカライズされた相当語句）です。
*   `uncheckedText`: `string` - `checked` が `false` で `text` プロパティが空の場合にスイッチの隣に表示されるテキスト。デフォルトは「Off」（またはそのローカライズされた相当語句）です。
*   `primaryColor`: `color` - `checked` が `true` のときのスイッチトラックの背景色。
*   `backgroundColor`: `color` - `checked` が `false` でホバーされていないときのスイッチトラックの背景色。
*   `enabled`: `bool` - コントロールがインタラクティブかどうか。デフォルトは `true` です。

## シグナル

*   `onCheckedChanged()`: `checked` 状態が変更されたときに発行されます。これは状態の変更に反応するための最も一般的なシグナルです。
*   `onClicked()`: ユーザーがスイッチをクリックしたときに発行されます。このアクションは `checked` 状態も切り替えます。

```
