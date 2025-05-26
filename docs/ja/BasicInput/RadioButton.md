# ラジオボタン

`RadioButton` コントロールを使用すると、ユーザーは相互に排他的な選択肢のセットから1つのオプションを選択できます。グループ内の1つの `RadioButton` が選択されると、同じグループ内で以前に選択されていた `RadioButton` は自動的に選択解除されます。

## 基本的なラジオボタン

`RadioButton` は通常、一度に1つしかアクティブにできない関連オプションのセットを提示するためにグループで使用されます。相互排他性を強制するには、`ButtonGroup` に割り当てる必要があります。

<div align="center">
  <img src="/assets/images/BasicInput/RadioButton/radiobutton-basic.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
import QtQuick 2.15
import QtQuick.Controls 2.15 // ButtonGroup のため
import RinUI

// ...

Column {
    spacing: 10

    // ButtonGroup は相互排他性のために不可欠です
    ButtonGroup { id: myExclusiveGroup }

    RadioButton {
        text: qsTr("Option Alpha")
        ButtonGroup.group: myExclusiveGroup
        checked: true // グループの初期選択を設定
    }

    RadioButton {
        text: qsTr("Option Beta")
        ButtonGroup.group: myExclusiveGroup
    }

    RadioButton {
        text: qsTr("Option Gamma")
        ButtonGroup.group: myExclusiveGroup
    }
}

```
> 注：`Rin-UI/examples/pages/controls/RadioButton.qml` の例には複数の RadioButton が表示されています。それらを相互に排他的にするには、同じ `ButtonGroup` に割り当てます。

## 主なプロパティ

*   `text`: `string` - `RadioButton` の隣に表示されるラベル。
*   `checked`: `bool` - `RadioButton` が現在選択されているかどうかを示します。`ButtonGroup` 内では、一度に1つの `RadioButton` しか `checked` にできません。
*   `primaryColor`: `color` - 選択された状態のインジケータに使用される主要な色。
*   `backgroundColor`: `color` - 未チェック時の `RadioButton` の円形インジケータの背景色。
*   `spacing`: `real` - インジケータとテキスト間のスペース。
*   `enabled`: `bool` - コントロールがインタラクティブかどうか。デフォルトは `true` です。

## ラジオボタンのグループ化

セット内で一度に1つの `RadioButton` しか選択できないようにする（これが主な目的です）には、`ButtonGroup` に割り当てる必要があります。
1.  `ButtonGroup` アイテムをインスタンス化します。
2.  論理グループ内の各 `RadioButton` について、その `ButtonGroup.group` 添付プロパティを `ButtonGroup` のインスタンスに設定します。

これにより、そのグループ内の1つの `RadioButton` がチェックされると、同じグループ内の以前にチェックされていた他の `RadioButton` がチェック解除されるようになります。
```
