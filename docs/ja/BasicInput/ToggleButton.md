# トグルボタン

`ToggleButton` は、チェック（オン）と非チェック（オフ）の2つの状態を切り替えることができるボタンです。チェックボックスのように機能しますが、外観は標準のボタンです。その `highlighted` プロパティが `checked` 状態に自動的にバインドされるため、視覚的な状態（背景色など）は通常、チェックされているかどうかを示すために変化します。

## 基本的なトグルボタン

`ToggleButton` はテキストやアイコンを表示し、チェック状態を維持します。デフォルトで `checkable` です。

<div align="center">
  <img src="/assets/images/BasicInput/ToggleButton/togglebutton-basic.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

ToggleButton {
    text: qsTr("Mute")
    checked: false // 初期状態
    onCheckedChanged: {
        if (checked) {
            console.log("Mute is ON");
            // ミュートアクションを適用
        } else {
            console.log("Mute is OFF");
            // ミュートアクションを解除
        }
    }
}
```

## アイコン付きトグルボタン

`Button` から派生した他のボタンと同様に、`ToggleButton` もテキストと共にアイコンを含めるか、アイコンのみにすることができます。

<div align="center">
  <img src="/assets/images/BasicInput/ToggleButton/togglebutton-icon.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
ToggleButton {
    icon.name: "ic_fluent_mic_off_20_regular"
    // text: qsTr("Mic") // オプションのテキスト
    // 初期状態はオフ、アイコンは「マイクオフ」を表示

    onCheckedChanged: {
        if (checked) {
            // 例：チェック時にアイコンを "ic_fluent_mic_20_filled" に変更
            icon.name = "ic_fluent_mic_20_filled"; 
            console.log("Microphone ON");
        } else {
            icon.name = "ic_fluent_mic_off_20_regular";
            console.log("Microphone OFF");
        }
    }
}
```

## 主なプロパティ

*   `text`: `string` - ボタンに表示されるテキストラベル。
*   `icon.name`: `string` - ボタンの fluent アイコンの名前。
*   `icon.source`: `url` - ボタンのカスタムイメージアイコンの URL。
*   `checked`: `bool` - ボタンがチェックされた（オン）状態か、チェックされていない（オフ）状態かを決定します。
*   `checkable`: `bool` - ボタンがチェック可能かどうかを示します。`ToggleButton` の場合、デフォルトは `true` です。
*   `highlighted`: `bool` - `checked` 状態を自動的に反映します。このプロパティは通常、ボタンがチェック/ハイライトされたときに外観を変更するためにボタンのスタイリングによって使用されます。
*   `enabled`: `bool` - コントロールがインタラクティブかどうか。デフォルトは `true` です。

`ToggleButton` は `Button` から継承されるため、`Button` の他のスタイリングおよび動作プロパティ（`flat`、`primaryColor` など）も適用できます。

## シグナル

*   `onCheckedChanged()`: `checked` 状態が変更されたときに発行されます。これはトグルアクションに反応するための主要なシグナルです。
*   `onClicked()`: ボタンがクリックされたときに発行されます。デフォルトで `checkable` であるため、クリックすると `checked` 状態も切り替わります。

```
