# リストビュー (ListView)

`ListView` コンポーネントは、垂直にスクロールできるデータアイテムのリストを表示するために使用されます。`QtQuick.Controls.Basic.ListView` から継承し、カスタムスタイル、アイテムアニメーション、およびアイテムをレンダリングするための `ListViewDelegate` に基づくデフォルトのデリゲートを提供します。

## デフォルトデリゲートを使用した基本的なリストビュー

`ListView` にはデータを提供するための `model` が必要です。モデルの `textRole` プロパティが正しく設定されていれば、デフォルトのデリゲート（`ListViewDelegate` のインスタンス）は単純なテキストを表示できます。

<div align="center">
  <img src="/assets/images/ListAndCollections/ListView/listview-basic.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

ListModel {
    id: mySimpleModel
    ListElement { itemName: "Apple" }
    ListElement { itemName: "Banana" }
    ListElement { itemName: "Cherry" }
}

ListView {
    width: 200
    height: 250
    model: mySimpleModel
    textRole: "itemName" // デフォルトデリゲートが表示すべきモデルプロパティを指定します
}
```
デフォルトの `ListViewDelegate` は、このテキストをその `middleArea` に配置します。

## `ListViewDelegate` を使用したアイテムの外観のカスタマイズ

よりリッチなリストアイテムを作成するには、`ListView` の `delegate` プロパティに `ListViewDelegate` のカスタムインスタンスを提供します。`ListViewDelegate` 自体は、そのコンテンツを `leftArea`、`middleArea`、`rightArea` の3つの主要な領域に構成するコンポーネントです。

<div align="center">
  <img src="/assets/images/ListAndCollections/ListView/listview-custom-delegate.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
import QtQuick 2.15
import RinUI // ListViewDelegate、IconWidget などの RinUI タイプが利用可能であることを確認します

// ...

ListView {
    width: 350
    height: 300
    model: ListModel {
        ListElement { titleText: "Meeting Notes"; dateText: "Yesterday"; iconSymbol: "ic_fluent_document_20_regular" }
        ListElement { titleText: "Project Alpha"; dateText: "2023-10-26"; iconSymbol: "ic_fluent_folder_20_regular" }
        ListElement { titleText: "Quick Reminder"; dateText: "10:30 AM"; iconSymbol: "ic_fluent_alert_20_regular" }
    }

    delegate: ListViewDelegate {
        // width is typically bound to ListView.view.width by the delegate itself
        // height is adaptive by default (contents.implicitHeight + 20)

        leftArea: IconWidget {
            icon: model.iconSymbol // Access model data for the icon
            size: 22
            Layout.alignment: Qt.AlignVCenter // Aligns icon within the Row of leftArea
        }

        middleArea: [ // middleArea takes a list of items for its ColumnLayout
            Text {
                text: model.titleText // Main text from model
                font.bold: true
                elide: Text.ElideRight
                Layout.fillWidth: true
            },
            Text {
                text: model.dateText // Secondary text from model
                font.pixelSize: 12
                color: Theme.currentTheme.colors.textSecondaryColor
                elide: Text.ElideRight
                Layout.fillWidth: true
            }
        ]

        rightArea: ToolButton { // Example: a ToolButton on the right
            icon.name: "ic_fluent_chevron_right_20_regular"
            flat: true
            size: 16
            Layout.alignment: Qt.AlignVCenter // Aligns button within the RowLayout of rightArea
            onClicked: {
                console.log("More options for:", model.titleText);
            }
        }

        onClicked: {
            console.log("Clicked on item:", model.titleText);
            // ListView.view.currentIndex is automatically updated by the delegate's default onClicked handler
        }
    }
}
```

### `ListViewDelegate` のカスタマイズ領域：
*   `leftArea`: 内部 `Row` の `data` プロパティのエイリアス。ここに追加されたアイテムはデリゲートの左側に表示されます。通常、アイコン、アバター、または選択マークに使用されます。
*   `middleArea`: 内部 `ColumnLayout` の `data` プロパティのエイリアス。ここに追加されたアイテムが主要なコンテンツを形成し、垂直に配置されます。`ListView` が提供するデフォルトデリゲート（独自の `delegate` コンポーネントを指定しない場合）は、単一の `Text` アイテムをここに配置します。
*   `rightArea`: 内部 `RowLayout` の `data` プロパティのエイリアス。ここに追加されたアイテムは右側に表示され、多くの場合、セカンダリアクション、ステータスインジケータ、またはタイムスタンプに使用されます。

## アイテムアニメーション

RinUI の `ListView` には、`add`、`remove`、および `displaced` 状態用の組み込み `Transition` が含まれています。これらは、モデルが変更されたときにスムーズな不透明度とスケールのアニメーションユーザーエクスペリエンスを提供します。

## スクロールバー

垂直の `RinUI.ScrollBar` が自動的に含まれ、`policy: ScrollBar.AsNeeded` で構成されます。コンテンツが `ListView` の高さを超えると表示されます。

## `ListView` の主なプロパティ

*   `model`: `any` - リストのアイテムを提供するデータモデル（例：`ListModel`、JavaScript 配列、アイテム数の整数）。
*   `delegate`: `Component` - リスト内の各アイテムに使用される QML コンポーネント。カスタムアイテムの外観については、ここで `ListViewDelegate` をインスタンス化し、その `leftArea`、`middleArea`、または `rightArea` プロパティを設定します。指定しない場合は、デフォルトの `ListViewDelegate` が使用されます。
*   `textRole`: `string` - 暗黙的なデフォルトデリゲートを使用していて、モデルが複雑なオブジェクト（`ListElement` や JavaScript オブジェクトなど）を提供する場合、このプロパティは、そのデフォルトデリゲートがテキストとして表示すべきモデルアイテムのどのロール（プロパティ名）を指定します。
*   `keyboardNavigation`: `bool` - キーボードベースのアイテム間ナビゲーションを有効にします。RinUI の `ListView` ではデフォルトで `false` です。
*   `clip`: `bool` - (`Item` から継承、`ListView` ではデフォルトで `true` に設定) 子がビューの境界にクリップされるかどうかを決定します。

**`QtQuick.Controls.Basic.ListView` から継承:**
*   `currentIndex`、`currentItem`、`count`、`orientation`（RinUI のバージョンは主に垂直リスト用にスタイル設定および使用されます）、`spacing`（デリゲート間の間隔）、`header`、`footer` などの多くの標準プロパティ。
*   `positionViewAtIndex()`、`itemAt()` などの標準メソッド。

## シグナル

*   `ListView` の標準シグナル（`clicked(int index)`、`activated(int index)`、`pressAndHold(int index)`、`currentItemChanged` など）が利用可能です。

## 関連コンポーネント
*   `ListViewDelegate`: `ListView` 内の各アイテムをレンダリングするために使用されるコンポーネント。このデリゲートをカスタマイズすることが、リッチなリストアイテムの外観を実現する鍵です。
*   `ScrollBar`: スクロール用に内部で使用されます。

```
