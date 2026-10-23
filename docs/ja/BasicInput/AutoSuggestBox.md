# AutoSuggestBox（自動提案ボックス）

AutoSuggestBox は、ユーザーが入力を開始すると提案を提供するテキスト入力コントロールです。これにより、ユーザーは正しいオプションを迅速に見つけて選択できます。これは TextField に基づいており、動的な提案機能を追加しています。

<VPImage
  :image="{
    light: '/assets/images/examples/AutoSuggestBox-light.png',
    dark: '/assets/images/examples/AutoSuggestBox-dark.png',
    alt: 'AutoSuggestBox コンポーネントのライト／ダーク例'
  }"
  width="1000"
/>

## 基本使用

```qml
AutoSuggestBox {
    id: control
    width: 240
    placeholderText: qsTr("検索するには入力...")
    
    suggestions: [
        "りんご",
        "バナナ",
        "さくらんぼ",
        "ナツメヤシ",
        "エルダーベリー",
        "いちじく",
        "ぶどう",
        "メロン"
    ]
}
```

## カスタムモデルの使用

```qml
AutoSuggestBox {
    id: control
    width: 240
    placeholderText: qsTr("国を選択...")
    
    textRole: "name"
    suggestions: ListModel {
        ListElement { name: "中国"; code: "CN" }
        ListElement { name: "アメリカ"; code: "US" }
        ListElement { name: "日本"; code: "JP" }
        ListElement { name: "ドイツ"; code: "DE" }
    }
}
```

## 選択の処理

```qml
AutoSuggestBox {
    id: control
    width: 240
    placeholderText: qsTr("色を選択...")
    
    suggestions: [
        "赤",
        "緑",
        "青",
        "黄色",
        "紫"
    ]
    
    onSuggestionChosen: (suggestion) => {
        console.log("選択:", suggestion)
    }
}
```

## 重要なプロパティ

- `model`: 提案リストのモデルで、配列または ListModel のいずれか
- `textRole`: ListModel 使用時に表示するロールの名前を指定
- `maximumMenuHeight`: 提案ドロップダウンメニューの最大高さ
- `suggestionChosen(suggestion)`: ユーザーが提案を選択した際に发出される信号

## 重要なメソッド

- `getFilteredSuggestions()`: 現在の入力テキストと一致する提案のリストを返す