# コンボボックス

ComboBox を使用すると、ユーザーはドロップダウンリストから1つのオプションを選択できます。編集可能に設定して、リストに存在しない値をユーザーが入力できるようにすることもできます。

## 基本的なコンボボックス

文字列アイテムのリストを持つ標準的なコンボボックス。

<div align="center">
  <img src="/assets/images/BasicInput/ComboBox/combobox-basic.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

ComboBox {
    width: 200
    model: ["Blue", "Green", "Red", "Yellow"]
    placeholderText: qsTr("Pick a color")
    // currentIndex: 0 // 初期状態で "Blue" を選択する場合
}
```

## ListModel を使用したコンボボックス

より複雑なアイテムの場合や、モデルを動的にする必要がある場合は、`ListModel` を使用できます。モデル内の各 `ListElement` には、表示に使用できるプロパティ（例：`text` または `value`）が必要です。

<div align="center">
  <img src="/assets/images/BasicInput/ComboBox/combobox-listmodel.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
import QtQuick.Controls 2.15 // ListModel が暗黙的に利用できない場合

ComboBox {
    width: 200
    model: ListModel {
        ListElement { text: "Arial" }
        ListElement { text: "Comic Sans MS" }
        ListElement { text: "Courier New" }
    }
    // RinUI の ComboBox は通常、モデルから表示テキストを推測します。
    // モデル要素がオブジェクトの場合、それらが 'text' または 'value' プロパティを持っていることを確認するか、
    // RinUI の ComboBox 実装が特定の表示ロールをサポートしているかを確認してください。
    placeholderText: qsTr("Select a font")
}
```

## 編集可能なコンボボックス

`editable` を `true` に設定すると、ユーザーが値を入力できるようになります。`accepted()` シグナルを使用して新しい入力を処理できます。入力フィールドは `TextField` です。

<div align="center">
  <img src="/assets/images/BasicInput/ComboBox/combobox-editable.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
ComboBox {
    width: 200
    editable: true
    model: ListModel {
        id: sizeModel
        ListElement { value: 8 } // 'value' が currentText 表示に使用されます
        ListElement { value: 10 }
        ListElement { value: 12 }
    }
    placeholderText: qsTr("Enter or select a size")

    onAccepted: {
        // 例：新しい一意の数値をモデルに追加します
        if (find(editText) === -1) { // editText には入力フィールドのテキストが含まれます
            let num = Number(editText)
            if (!isNaN(num)) {
                sizeModel.append({ value: num })
                // オプション：currentIndex を新しく追加されたアイテムに設定します
                // currentIndex = count - 1 
            } else {
                console.log("Invalid input:", editText)
            }
        }
    }
}
```
> 注：詳細な例については、`Rin-UI/examples/pages/controls/ComboBox.qml` を参照してください。

## 主なプロパティ

*   `model`: `any` - データを提供するモデル（例：文字列のリスト、`ListModel`）。
*   `currentIndex`: `int` - 現在選択されているアイテムのインデックス。
*   `currentText`: `string` - 現在選択されているアイテムのテキスト。(読み取り専用)
*   `displayText`: `string` - ComboBox フィールドに表示されるテキスト、特に `editable` の場合。(編集不可の場合は読み取り専用)
*   `placeholderText`: `string` - アイテムが選択されていない場合、または `editable` で空の場合に表示されるテキスト。
*   `editable`: `bool` - `true` の場合、ユーザーはテキストを入力できます。デフォルトは `false` です。
*   `maxHeight`: `real` - ドロップダウンメニューの最大高さ (`menu.maxHeight` のエイリアス)。
*   `headerText`: `string` - ドロップダウンメニュー内のオプションのヘッダーテキスト。
*   `controlRadius`: `real` - ComboBox の角の半径。
*   `enabled`: `bool` - コントロールがインタラクティブかどうか。
*   `popup`: `Popup` (RinUI では具体的には `ContextMenu`) - ドロップダウンリスト。
*   `indicator`: `Item` - ドロップダウン矢印インジケータアイテム。

## シグナル

*   `accepted()`: ユーザーが編集可能な ComboBox でテキストを受け入れたとき（例：Enter キーを押すなど）に発行されます。
*   `activated(int index)`: ユーザーがアイテムを選択したときに発行されます。`index` 引数はアクティブ化されたアイテムのインデックスです。`editable` でテキストがアイテムと一致しない場合、`index` は -1 になります。

```
