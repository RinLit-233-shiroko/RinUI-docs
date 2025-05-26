# リストビューデリゲート (ListViewDelegate)

`ListViewDelegate` は、`ListView` 内の各アイテムの視覚的表現を定義するために使用されるコンポーネントです。`QtQuick.Controls.Basic.ItemDelegate` から継承し、カスタマイズ可能な領域（`leftArea`（`Row`）、`middleArea`（`ColumnLayout`）、`rightArea`（`RowLayout`））を持つ構造化レイアウトを提供します。

このコンポーネントは通常、`ListView` の `delegate` として使用され、リッチでインタラクティブなリストアイテムを作成します。

## 構造とカスタマイズ領域

`ListViewDelegate` は、コンテンツを3つの主要セクションに編成し、柔軟なアイテムレイアウトを可能にします：

*   **`leftArea`**: 左側に配置されます。アイコン、アバター、チェックボックス、またはその他の主要な視覚要素に最適です。ここに追加されたアイテムは `Row` に配置されます。
*   **`middleArea`**: 中央のスペースを占有します。主要およびセカンダリテキストコンテンツ用に設計されており、`ColumnLayout` に垂直に配置されます。単一の `Text` アイテムを `middleArea` に割り当てると、そのアイテムの列内の割り当てられたスペース内で垂直方向に中央揃えされます。アイテムのリストを提供すると、それらは積み重ねられます。
*   **`rightArea`**: 右側に配置されます。メタデータ、タイムスタンプ、アクションボタン、またはその他の末尾要素に適しており、`RowLayout` に配置されます。

これらの領域は、QML アイテムまたは QML アイテムのリストをそれぞれのエイリアスプロパティ（`leftArea`、`middleArea`、`rightArea`）に割り当てることによって設定します。

<div align="center">
  <img src="/assets/images/ListAndCollections/ListViewDelegate/listviewdelegate-structure.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

ListView {
    width: 350
    height: 300
    model: ListModel {
        ListElement { titleText: "Meeting Notes", dateText: "Yesterday", iconSymbol: "ic_fluent_star_20_filled" }
        ListElement { titleText: "Project Alpha", dateText: "2023-10-26", iconSymbol: "ic_fluent_folder_20_filled" }
        ListElement { titleText: "Quick Reminder", dateText: "10:30 AM", iconSymbol: "ic_fluent_alert_20_regular" }
    }

    delegate: ListViewDelegate {
        // width は通常、デリゲート自体によって ListView.view.width にバインドされます
        // height はデフォルトでコンテンツに基づいて適応します (contents.implicitHeight + 20)

        leftArea: IconWidget {
            icon.name: model.iconSymbol // モデルデータを直接アクセス
            size: 22
            Layout.alignment: Qt.AlignVCenter // leftArea Row 内でアイコンを整列
        }

        middleArea: [ // middleArea は ColumnLayout のためにアイテムのリストを取ります
            Text {
                text: model.titleText // モデルからの主要テキスト
                font.bold: true
                elide: Text.ElideRight
                Layout.fillWidth: true
            },
            Text {
                text: model.dateText // モデルからのセカンダリテキスト
                font.pixelSize: 12
                color: Theme.currentTheme.colors.textSecondaryColor
                elide: Text.ElideRight
                Layout.fillWidth: true
            }
        ]

        rightArea: ToolButton { // 例：右側の ToolButton
            icon.name: "ic_fluent_chevron_right_20_regular"
            flat: true
            size: 16
            Layout.alignment: Qt.AlignVCenter // rightArea RowLayout 内でボタンを整列
            onClicked: {
                console.log("More options for:", model.titleText);
            }
        }
        
        onClicked: {
            console.log("Clicked on item:", model.titleText);
            // ListView.view.currentIndex はデリゲートのデフォルト onClicked ハンドラによって自動的に更新されます
        }
    }
}
```

## `ListViewDelegate` の主なプロパティ

*   `leftArea`: `list<Item>` (`leftArea.data` のエイリアス) - デリゲートの左セクションに配置される QML アイテム。
*   `middleArea`: `list<Item>` (`middleArea.data` のエイリアス) - 中央の垂直に積み重ねられたセクションに配置される QML アイテムのリスト。
*   `rightArea`: `list<Item>` (`rightArea.data` のエイリアス) - デリゲートの右セクションに配置される QML アイテム。
*   `contents`: `list<Item>` (`contents.data` のエイリアス) - `leftArea`、`middleArea`、および `rightArea` を保持する主要な内部 `RowLayout` を参照します。直接的なカスタマイズは通常、特定のエリアプロパティを介して行われます。
*   `highlighted`: `bool` (`ItemDelegate` から継承) - アイテムが `ListView` の現在のアイテムであるかどうかを示します。RinUI の `ListViewDelegate` はこれを `ListView.isCurrentItem` にバインドします。これは、現在のアイテムの背景色を変更するために使用されます。
*   `focusPolicy`: `Qt.FocusPolicy` - デフォルトで `Qt.StrongFocus` に設定されており、デリゲートがキーボードフォーカスを受け取ることができます。

`ListViewDelegate` の背景は `Rectangle` で、`pressed`、`highlighted`、および `hovered` 状態に反応するようにスタイル設定されており、`highlighted` 時には視覚的な `Indicator`（小さな垂直バー）も含まれています。

## 継承されたプロパティとシグナル

`ListViewDelegate` は `QtQuick.Controls.Basic.ItemDelegate` から継承するため、標準のデリゲートコンテキストにアクセスできます：
*   `item`: (`ItemDelegate` のプロパティ) このデリゲートインスタンスが属する `ListView` アイテム。
*   `index`: (`ItemDelegate` のプロパティ) `ListView` のモデル内でのこのデリゲートのインデックス。
*   `model`: (コンテキストプロパティ) 現在のアイテムのモデルデータへの直接アクセスを提供します（`model.roleName` または単純なモデルの場合は `modelData`）。
*   `selected`: `bool` - アイテムが選択されているかどうか（`ListView` が選択をサポートしている場合）。
*   `pressed`: `bool` - ユーザーがデリゲートを押している場合は true。

そして、次のようなシグナル：
*   `clicked()`: デリゲートがクリックされたときに発行されます。RinUI の `ListViewDelegate` はこれを使用して `ListView.view.currentIndex = index` を設定します。
*   `pressAndHold()`、`released()`、`doubleClicked()`: `ItemDelegate` の標準シグナル。

## 使用上の注意

*   `leftArea`、`middleArea`、または `rightArea` にアイテムを提供する場合、それらが内部レイアウトタイプ（左/右は Row、中央は ColumnLayout）に適していることを確認してください。必要に応じて、配置には `Layout` 添付プロパティを使用します。
*   デリゲートのデフォルトの `height` は、そのコンテンツに基づいて適応します。
*   デリゲートのデフォルトの `width` は通常、`ListView.view.width` にバインドされます。

このコンポーネントは、RinUI `ListView` 内のアイテムの外観をカスタマイズするための鍵であり、アイテムレイアウトを定義するための構造化された柔軟な方法を提供します。
```
