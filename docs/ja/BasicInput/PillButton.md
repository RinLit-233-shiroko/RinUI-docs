# ピルボタン

`PillButton` は、`RoundButton` から継承される、ピル形状またはカプセル形状にスタイル設定されたトグルボタンの一種です。`checked` されたときにハイライト表示されることで視覚的に状態を示すように設計されています。

## 基本的なピルボタン

`PillButton` は、オン/オフ状態または選択を表すために使用できます。デフォルトで `checkable` です。

<div align="center">
  <img src="/assets/images/BasicInput/PillButton/pillbutton-basic.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

PillButton {
    text: qsTr("Toggle Option")
    // checked: true // 初期状態でチェック/オンにする場合
    onCheckedChanged: {
        if (checked) {
            console.log("PillButton is ON");
        } else {
            console.log("PillButton is OFF");
        }
    }
}
```

## アイコン付きピルボタン

標準の `Button` と同様に、`PillButton` にアイコンを追加できます。

<div align="center">
  <img src="/assets/images/BasicInput/PillButton/pillbutton-icon.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
PillButton {
    text: qsTr("Notifications")
    icon.name: "ic_fluent_alert_20_regular" 
    checked: true // 例：初期状態でオン
    
    // 例：状態に基づいてアイコンを変更する
    // icon.name: checked ? "ic_fluent_alert_on_20_filled" : "ic_fluent_alert_20_regular" 
}
```

## 主なプロパティ

*   `text`: `string` - ボタンに表示されるテキストラベル。
*   `icon.name`: `string` - ボタンの fluent アイコンの名前。
*   `icon.source`: `url` - ボタンのカスタムイメージアイコンの URL。
*   `checked`: `bool` - ボタンがチェックされた（オン）状態か、チェックされていない（オフ）状態かを決定します。`highlighted` プロパティは自動的に `checked` にバインドされます。
*   `checkable`: `bool` - ボタンがチェック可能かどうかを示します。`PillButton` の場合、デフォルトは `true` です。
*   `enabled`: `bool` - コントロールがインタラクティブかどうか。デフォルトは `true` です。

`PillButton` は `RoundButton`（さらに `Button` から継承される可能性が高い）から継承されるため、親コンポーネントの他のスタイルプロパティも適用できます。

## シグナル

*   `onCheckedChanged()`: `checked` 状態が変更されたときに発行されます。
*   `onClicked()`: ボタンがクリックされたときに発行されます。`checkable` であるため、クリックすると `checked` 状態も切り替わります。

```
