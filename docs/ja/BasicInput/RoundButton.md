# ラウンドボタン

`RoundButton` は、完全に丸みを帯びた角でスタイル設定された標準の `Button` です。実際の形状は `width` および `height` プロパティによって異なります。それらが等しい場合は円になり、`width` が `height` より大きい場合はピルまたはカプセル形状になります。

本質的にチェック可能な `PillButton` コンポーネントは `RoundButton` から派生しています。

## 基本的なラウンドボタンの例

`RoundButton` は標準の `Button` と同じように使用でき、その形状は寸法に適応します。

**ピル形状 (幅 > 高さ):**
<div align="center">
  <img src="/assets/images/BasicInput/RoundButton/roundbutton-pill.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

RoundButton {
    text: qsTr("Submit")
    width: 120 // 幅が高さより大きい
    height: 40 
    onClicked: console.log("Pill-shaped RoundButton clicked")
}
```

**円形 (幅 == 高さ):**
<div align="center">
  <img src="/assets/images/BasicInput/RoundButton/roundbutton-circle.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
RoundButton {
    icon.name: "ic_fluent_checkmark_20_regular"
    width: 40 // 幅と高さが等しいため円形
    height: 40
    // ToolTip.text: qsTr("Confirm") // オプション：アイコンのみのボタン用のツールチップ
    onClicked: console.log("Circular RoundButton clicked")
}
```

## 主なプロパティ

*   `radius`: `real` - (背景の半径のエイリアス) 角の半径を制御します。`RoundButton` では、背景の `radius` は動的に `height / 2` にバインドされ、完全に丸みを帯びた角を保証し、ボタンの高さに適応します。
*   `text`: `string` - ボタンのテキストラベル。
*   `icon.name`: `string` - ボタンの fluent アイコン名。
*   `icon.source`: `url` - ボタンのカスタムイメージアイコンの URL。
*   `highlighted`: `bool` - `true` の場合、通常 `backgroundColor` をテーマのプライマリカラーに変更します。
*   `flat`: `bool` - `true` の場合、通常は境界線を削除し、ホバーまたはハイライトされていない限り背景を透明にします。
*   `enabled`: `bool` - コントロールがインタラクティブかどうか。デフォルトは `true` です。

`RoundButton` は `Button` から継承されるため、すべての標準的な `Button` プロパティ（特定の状態の `primaryColor`、`backgroundColor` など）およびシグナル（`onClicked` など）が利用可能です。主な違いは、強制的に完全に丸められた背景です。

## 使用上の注意

*   完全な円を作成するには、`width` と `height` プロパティを同じ値に設定します。これらは多くの場合、アイコンのみのボタンに最適です。
*   `width` が `height` より大きい場合、ボタンは自然にピルまたはカプセル形状になります。
*   `PillButton` コンポーネントは、特殊化された `RoundButton` であり、デフォルトで `checkable` 動作を追加し、その `checked` 状態を `highlighted` の視覚状態にリンクします。チェック可能なラウンドボタンが必要な場合は、`PillButton` の方が直接的かもしれません。

```
