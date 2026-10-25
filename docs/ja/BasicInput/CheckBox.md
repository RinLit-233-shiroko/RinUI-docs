# チェックボックス

CheckBox コントロールを使用すると、ユーザーはオプションの選択や選択解除などの二者択一の選択を行うことができます。チェックボックスは、しばしば「すべて選択」のシナリオで使用されるトライステート選択を表すためにも使用できます。

## 基本的なチェックボックス

CheckBox は、単純なブール値の選択に使用できます。

<div align="center">
  <img src="/assets/images/docs/CheckBox/example-2.png" alt="基本的なチェックボックス">
</div>

<div align="center">
  <img src="/assets/images/BasicInput/CheckBox/checkbox-basic.png" alt="基本的なチェックボックス">
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

CheckBox {
    text: qsTr("Standard CheckBox")
    // checked: true // 用于初始选中
}
```
```

## 3ステートチェックボックス

`tristate` プロパティを `true` に設定すると、3番目の「不確定」状態が有効になります。これは視覚的に区別され、多くの場合、一部の子アイテム（すべてではない）に対してオプションが設定されていることを示すために使用されます。

`checkState` プロパティは次のとおりです：
- `Qt.Checked` （チェック済み）
- `Qt.Unchecked` （未チェック）
- `Qt.PartiallyChecked` （部分的にチェック済み、`tristate` が true の場合）

<div align="center">
  <img src="/assets/images/docs/CheckBox/example-3.png" alt="3ステートチェックボックス">
</div>

<div align="center">
  <img src="/assets/images/BasicInput/CheckBox/checkbox-tristate.png" alt="3ステートチェックボックス">
</div>

```qml
CheckBox {
    text: qsTr("Three-state CheckBox")
    tristate: true
    // P编程方式设置:
    // checkState: Qt.PartiallyChecked 
}
```
```

## グループ化されたチェックボックス

チェックボックスを使用して、親の「すべて選択」チェックボックスを制御できます。 `examples/pages/controls/CheckBox.qml` の例では、`ButtonGroup` を使用してこれを示しています。

<div align="center">
  <img src="/assets/images/docs/CheckBox/example.png" alt="グループ化されたチェックボックス">
</div>

<div align="center">
  <img src="/assets/images/BasicInput/CheckBox/checkbox-grouped.png" alt="グループ化されたチェックボックス">
</div>

```qml
// 简化概念；完整用法请参考 examples/pages/controls/CheckBox.qml 中的 ButtonGroup
Column {
    CheckBox {
        id: parentBox
        text: qsTr("Select all")
        tristate: true 
        // 实际场景中，parentBox.checkState 会根据子项状态进行管理
    }

    CheckBox {
        text: qsTr("Option 1")
        // 将选中状态连接到更新 parentBox 的逻辑
    }

    CheckBox {
        text: qsTr("Option 2")
        // 将选中状态连接到更新 parentBox 的逻辑
    }
}
```
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
