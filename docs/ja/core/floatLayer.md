# フロートレイヤーマネージャー (`FloatLayer`)

## 概要

`FloatLayer` は、`InfoBar` などのポップアップコンテンツをページ上の指定された位置に表示するために特別に設計されたフルスクリーンのフローティングレイヤーコンテナです。
ネイティブの QtQuick ウィンドウコントロールに基づいて、任意の `Window`、`ApplicationWindow` などにマウントできます。RinUI では、手動操作なしで自動的にマウントされます。

このようにフロートレイヤーマネージャー (`FloatLayer`) を使用できます：

## 構造
```bash
Item (FloatLayer)
 ├── ColumnLayout (TopLeft)
 ├── ColumnLayout (Top)
 ├── ColumnLayout (TopRight)
 ├── ColumnLayout (BottomLeft)
 ├── ColumnLayout (Bottom)
 └── ColumnLayout (BottomRight)
```

### `Position`

`Position` は、フロートレイヤーの表示位置を定義するために使用される列挙型で、
以下のオプションを提供します：

- `TopLeft`：左上隅
- `Top`：上部中央
- `TopRight`：右上隅
- `BottomLeft`：左下隅
- `Bottom`：下部中央
- `BottomRight`：右下隅


## メソッド

### `createInfoBar(options: object)`
`createInfoBar` 関数は、フローティングレイヤーにインフォバー (InfoBar) を作成するために使用され、パラメータとして `options` オブジェクトのみを受け付けます。このオブジェクトには以下のパラメータを含めることができます：

| パラメータ   | 型             | デフォルト値     | 説明                                                                       |
|--------------|----------------|------------------|----------------------------------------------------------------------------------|
| `title`      | string         | ""               | 通知タイトル                                                                 |
| `text`       | string         | ""               | 通知内容                                                                 |
| `severity`   | Severity       | Severity.Info    | 列挙型の通知レベル。`Info`、`Success`、`Warning`、`Error` を提供します  |
| `timeout`    | int            | 1500             | 自動クローズ時間 (ms)                                                        |
| `position`   | Position       | Position.Top     | 表示位置                                                                   |
| `closable`   | bool           | true             | 手動でクローズできるかどうか                                                     |

### `createCustom(component: Component)`
`createCustom` 関数は、フローティングレイヤーにカスタムコンポーネントを作成するために使用され、パラメータとして `component` オブジェクトのみを受け付けます。

以下の例を参照できます：

```qml
Button {
    // カスタムコンポーネント
    Component {
        id: customInfoBar
        InfoBar {
            timeout: 2000
            severity: Severity.Success
            title: qsTr("CUSTOM")
            text: qsTr("This is a custom InfoBar")
            customContent: [
                Button {
                    text: "Custom Button"
                    onClicked: {
                        floatLayer.createInfoBar({title: "InfoBar", text: "Clicked!"})
                    }
                }
            ]
        }
    }
    
    text: qsTr("Popup a custom InfoBar")
    
    // アクション
    onClicked: {
        floatLayer.createCustom(customInfoBar)
    }
}
```
