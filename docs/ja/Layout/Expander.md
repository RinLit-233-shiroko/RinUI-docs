# エキスパンダー

`Expander` コントロールを使用すると、折りたたみ可能なセクションにコンテンツを表示したり非表示にしたりできます。常に表示されるヘッダーと、ヘッダーとの対話（通常はクリックまたはその中の展開/折りたたみボタン）によって展開または折りたたむことができるコンテンツ領域で構成されます。

## 基本的なエキスパンダー

基本的な `Expander` は、デフォルトのヘッダーにテキストタイトルを持ち、QML アイテムをコンテンツとして持つことができます。子アイテムは `contentData` プロパティ（デフォルトプロパティ）に追加されます。

<div align="center">
  <img src="/assets/images/Layout/Expander/expander-basic.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

Expander {
    width: 300
    text: qsTr("More Details") // デフォルトヘッダー領域のテキスト

    // コンテンツアイテムは子として追加され、「contentData」の一部になります
    Text {
        text: qsTr("This is the collapsible content of the Expander. It can contain various QML items arranged in a column.")
        wrapMode: Text.WordWrap // テキストが利用可能な幅内で折り返されるようにします
        Layout.fillWidth: true // Expander のコンテンツ領域が内部でレイアウトを使用する場合 (実際には ColumnLayout を使用します)
    }
    Button {
        text: qsTr("A button in the content")
        Layout.alignment: Qt.AlignHCenter // 内部 ColumnLayout 内で整列
    }
}
```

## カスタムヘッダー

`Expander` のヘッダーは、`header` プロパティに `Item` を割り当てることにより、カスタム QML コンテンツで完全に置き換えることができます。

<div align="center">
  <img src="/assets/images/Layout/Expander/expander-custom-header.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
Expander {
    width: 300
    // 'header' が設定されている場合、デフォルトの 'text' プロパティとエキスパンダーアイコンは表示されません。
    // ヘッダー全体のコンテンツと動作については、お客様が責任を負います。
    header: Item {
        id: customHeaderItem
        implicitHeight: 48 // カスタムヘッダーの高さを定義します
        width: parent.width // Expander の幅いっぱいにします

        RowLayout { // カスタムヘッダーのサンプルレイアウト
            anchors.fill: parent
            anchors.leftMargin: 10
            anchors.rightMargin: 10 // 必要に応じてマージンを調整します

            Text {
                text: qsTr("Custom Header Title")
                Layout.fillWidth: true
                font.bold: true
                verticalAlignment: Text.AlignVCenter
            }
            IconWidget { // IconWidget が利用可能であると仮定
                icon.name: "ic_fluent_info_20_regular"
                size: 20
                Layout.alignment: Qt.AlignVCenter
            }
        }
    }
    // カスタムヘッダー内から参照する場合は、Expander に id を付けます
    id: parentExpander 

    Text {
        text: qsTr("Content area for the expander with a custom header.")
        padding: 10 // 必要に応じてパディングを追加します
        Layout.fillWidth: true
    }
}
```
> **注**：カスタム `header` を提供する場合、`Expander` の `expanded` 状態を切り替えるメカニズムも実装する必要があります（例：上記のように `MouseArea` を使用）。デフォルトの展開/折りたたみボタンとその回転アニメーションは、デフォルトのヘッダー構造の一部であり、`header` プロパティがオーバーライドされると表示されません。

## 展开方向

`expandDirection` プロパティは、コンテンツ領域がヘッダーから上方向または下方向に展開するかどうかを制御します。

*   `Expander.Down` (デフォルト)：コンテンツはヘッダーの下に展開されます。
*   `Expander.Up`：コンテンツはヘッダーの上に展開されます。

<div align="center">
  <img src="/assets/images/Layout/Expander/expander-direction.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
Expander {
    text: qsTr("Expand Upwards Example")
    expandDirection: Expander.Up
    width: 300

    Text {
        Layout.fillWidth: true
        padding: 10
        text: qsTr("This content expands upwards from the header.")
    }
}
```

## 主なプロパティ

*   `expanded`: `bool` - コンテンツ領域が表示されている (`true`) か非表示 (`false`) かを制御します。デフォルトは `false` です。切り替え可能です。
*   `text`: `string` - デフォルトのヘッダー構造に表示されるテキスト。カスタム `header` アイテムが提供されている場合は無視されます。
*   `header`: `Item` (`headerCustom.data` のエイリアス) - カスタム QML `Item` をヘッダーとして提供できます。このアイテムの子がカスタムヘッダー領域を設定します。
*   `contentData`: `list<Item>` (`contentLayout.data` のデフォルトプロパティエイリアス) - ここに配置された子 QML アイテムが折りたたみ可能なセクションのコンテンツを形成します。これらは内部 `ColumnLayout` の親になります。
*   `expandDirection`: `enumeration` - `Expander.Down` (デフォルト) または `Expander.Up` にすることができます。コンテンツ領域が展開する方向を決定します。
*   `headerHeight`: `real` (エイリアス) - ヘッダーセクションの計算された高さを参照します。
*   `contentHeight`: `real` (エイリアス) - 展開時のコンテンツセクションの計算された高さを参照します。
*   `contentPadding`: `real` (エイリアス) - コンテンツ `Frame` 内のパディング。デフォルトは `7` です。
*   `contentSpacing`: `real` (エイリアス) - `contentData` を保持する内部 `ColumnLayout` の間隔。
*   `radius`: `real` - `Expander` コンポーネント全体の角の半径。デフォルトは `Theme.currentTheme.appearance.windowRadius` です。
*   `enabled`: `bool` - エキスパンダーが操作可能かどうか（例：クリックして展開/折りたたみ）。デフォルトは `true` です。

## アニメーション

`Expander` には、展開/折りたたみプロセス（高さとy位置の変更）およびヘッダーのデフォルトの展開/折りたたみインジケーターアイコンの回転のための組み込みアニメーションが含まれています。
```
