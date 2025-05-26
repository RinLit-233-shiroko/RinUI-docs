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

ListModel {
    id: contactModel
    ListElement { name: "Alice Wonderland"; status: "Online"; iconName: "ic_fluent_person_20_filled" }
    ListElement { name: "Bob The Builder"; status: "Offline"; iconName: "ic_fluent_person_20_regular" }
    ListElement { name: "Charlie Brown"; status: "Busy"; iconName: "ic_fluent_person_prohibited_20_filled" }
}

ListView {
    width: 300
    height: 300
    model: contactModel
    // カスタムデリゲートがモデルプロパティを直接アクセスするため、ここでは textRole は不要です

    delegate: ListViewDelegate {
        // width は通常、デリゲート自体によって ListView.view.width にバインドされます
        // height はコンテンツに基づいて適応可能 (デフォルト: contents.implicitHeight + 20)

        leftArea: IconWidget { 
            icon.name: model.iconName // モデルデータを直接アクセス
            size: 24
            // Layout.alignment: Qt.AlignVCenter // leftArea がレイアウトで余分なスペースがある場合
        }

        middleArea: [ // middleArea は ColumnLayout で、アイテムは子として追加されます
            Text {
                text: model.name 
                font.bold: true
                Layout.fillWidth: true 
            },
            Text {
                text: model.status
                font.pixelSize: 12
                color: Theme.currentTheme.colors.textSecondaryColor
                Layout.fillWidth: true
            }
        ]

        rightArea: Button { // rightArea は RowLayout です
            text: qsTr("View")
            flat: true
            Layout.alignment: Qt.AlignVCenter
            onClicked: {
                console.log("Viewing details for:", model.name);
                // ListView.view.currentIndex = index; // デリゲートがデフォルトでこれを処理します
            }
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
