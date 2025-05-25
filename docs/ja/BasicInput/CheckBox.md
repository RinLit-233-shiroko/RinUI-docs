# チェックボックス

CheckBox コントロールを使用すると、ユーザーはオプションの選択や選択解除などの二者択一の選択を行うことができます。チェックボックスは、しばしば「すべて選択」のシナリオで使用されるトライステート選択を表すためにも使用できます。

## 基本的なチェックボックス

CheckBox は、単純なブール値の選択に使用できます。

<div align="center">
  <img src="/assets/images/BasicInput/CheckBox/checkbox-basic.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

CheckBox {
    text: qsTr("Standard CheckBox")
    // checked: true // 初期状態でチェックする場合
}
```

## 3ステートチェックボックス

`tristate` プロパティを `true` に設定すると、3番目の「不確定」状態が有効になります。これは視覚的に区別され、多くの場合、一部の子アイテム（すべてではない）に対してオプションが設定されていることを示すために使用されます。

`checkState` プロパティは次のとおりです：
- `Qt.Checked` （チェック済み）
- `Qt.Unchecked` （未チェック）
- `Qt.PartiallyChecked` （部分的にチェック済み、`tristate` が true の場合）

<div align="center">
  <img src="/assets/images/BasicInput/CheckBox/checkbox-tristate.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
CheckBox {
    text: qsTr("Three-state CheckBox")
    tristate: true
    // プログラムで設定する場合:
    // checkState: Qt.PartiallyChecked 
}
```

## グループ化されたチェックボックス

チェックボックスを使用して、親の「すべて選択」チェックボックスを制御できます。 `examples/pages/controls/CheckBox.qml` の例では、`ButtonGroup` を使用してこれを示しています。

<div align="center">
  <img src="/assets/images/BasicInput/CheckBox/checkbox-grouped.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
// 簡略化された概念。ButtonGroup を使用した完全な使用法については examples/pages/controls/CheckBox.qml を参照してください
Column {
    CheckBox {
        id: parentBox
        text: qsTr("Select all")
        tristate: true 
        // 実際のシナリオでは、parentBox.checkState は子の状態に基づいて管理されます
    }

    CheckBox {
        text: qsTr("Option 1")
        // チェック状態を parentBox を更新するロジックに接続
    }

    CheckBox {
        text: qsTr("Option 2")
        // チェック状態を parentBox を更新するロジックに接続
    }
}
```
> 注：`Rin-UI/examples/pages/controls/CheckBox.qml` の例では、`ButtonGroup` を使用したグループ化されたチェックボックスの完全な実装が提供されています。

## 主なプロパティ

*   `text`: `string` - チェックボックスの隣に表示されるラベル。
*   `checked`: `bool` - 2ステートチェックボックスの場合、チェックされていれば `true`、そうでなければ `false`。
*   `checkState`: `enumeration` - 現在の状態（`Qt.Unchecked`、`Qt.Checked`、`Qt.PartiallyChecked`）。
*   `tristate`: `bool` - `true` の場合、チェックボックスは3つの状態をサポートします。デフォルトは `false` です。
*   `primaryColor`: `color` - チェックまたは部分的にチェックされたときのチェックマークとインジケータの色。
*   `backgroundColor`: `color` - 未チェック時のインジケータボックスの背景色。
*   `spacing`: `real` - インジケータとテキストラベルの間のスペース。
*   `enabled`: `bool` - コントロールがインタラクティブかどうか。
```
