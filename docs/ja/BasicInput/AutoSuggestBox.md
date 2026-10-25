# AutoSuggestBox（自動提案ボックス）

AutoSuggestBox は、ユーザーが入力を開始すると提案を提供するテキスト入力コントロールです。これにより、ユーザーは正しいオプションを迅速に見つけて選択できます。これは TextField に基づいており、動的な提案機能を追加しています。

## 基本使用

<div align="center">
  <img src="/assets/images/docs/AutoSuggestBox/example-2.png" alt="基本使用">
</div>

```qml
AutoSuggestBox {
    id: control
    width: 240
    placeholderText: qsTr("Type to search...")
    
    suggestions: [
        "Apple",
        "Banana",
        "Cherry",
        "Date",
        "Elderberry",
        "Fig",
        "Grape",
        "Honeydew"
    ]
}
```
```

## カスタムモデルの使用

<div align="center">
  <img src="/assets/images/docs/AutoSuggestBox/example-3.png" alt="カスタムモデルの使用">
</div>

```qml
AutoSuggestBox {
    id: control
    width: 240
    placeholderText: qsTr("Select a country...")
    
    textRole: "name"
    suggestions: ListModel {
        ListElement { name: "United States"; code: "US" }
        ListElement { name: "United Kingdom"; code: "GB" }
        ListElement { name: "Japan"; code: "JP" }
        ListElement { name: "Germany"; code: "DE" }
    }
}
```
```

## 選択の処理

<div align="center">
  <img src="/assets/images/docs/AutoSuggestBox/example.png" alt="選択の処理">
</div>

```qml
AutoSuggestBox {
    id: control
    width: 240
    placeholderText: qsTr("Select a color...")
    
    suggestions: [
        "Red",
        "Green",
        "Blue",
        "Yellow",
        "Purple"
    ]
    
    onSuggestionChosen: function(suggestion) {
        console.log("Selected:", suggestion)
    }
}
```
```

## 重要なプロパティ

- `model`: 提案リストのモデルで、配列または ListModel のいずれか
- `textRole`: ListModel 使用時に表示するロールの名前を指定
- `maximumMenuHeight`: 提案ドロップダウンメニューの最大高さ
- `suggestionChosen(suggestion)`: ユーザーが提案を選択した際に发出される信号

## 重要なメソッド

- `getFilteredSuggestions()`: 現在の入力テキストと一致する提案のリストを返す