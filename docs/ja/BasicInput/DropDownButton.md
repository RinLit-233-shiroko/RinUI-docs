# ドロップダウンボタン

DropDownButton は、クリックするとオプションのメニューを表示するタイプのボタンです。ボタンの外観とドロップダウンメニュー機能を兼ね備えています。

## 基本的なドロップダウンボタン

DropDownButton には通常、テキストラベルとドロップダウンインジケータがあります。メニュー項目は子として定義され、内部メニューを構成します。

<div align="center">
  <img src="/assets/images/BasicInput/DropDownButton/dropdownbutton-basic.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

DropDownButton {
    text: qsTr("File")

    MenuItem {
        text: qsTr("New")
        onTriggered: console.log("New clicked")
    }
    MenuItem {
        text: qsTr("Open")
        onTriggered: console.log("Open clicked")
    }
    // MenuSeparator が利用可能で互換性があると仮定：
    // MenuSeparator { } 
    MenuItem {
        text: qsTr("Save")
        onTriggered: console.log("Save clicked")
    }
}
```

## アイコン付きドロップダウンボタン

ボタン自体とそのメニュー項目の両方にアイコンを含めることができます。

<div align="center">
  <img src="/assets/images/BasicInput/DropDownButton/dropdownbutton-icons.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
DropDownButton {
    text: qsTr("Email")
    icon.name: "ic_fluent_mail_20_regular" // ボタン部分のアイコンを設定

    MenuItem {
        text: qsTr("Send")
        icon.name: "ic_fluent_send_20_filled" // メニューアイテムのアイコン
        onTriggered: console.log("Send email")
    }
    MenuItem {
        text: qsTr("Reply")
        icon.name: "ic_fluent_mail_arrow_up_20_regular"
        onTriggered: console.log("Reply email")
    }
}
```

## 主なプロパティ

*   `text`: `string` - ボタン部分に表示されるテキストラベル。
*   `icon.name`: `string` - ボタン部分の fluent アイコンの名前。
*   `icon.source`: `url` - ボタン部分のカスタムイメージアイコンの URL。
*   `contentData`: `list<Item>` - (デフォルトプロパティ) ドロップダウンメニューにアイテム（通常は `MenuItem` および `MenuSeparator` コンポーネント）を設定するために使用されます。
*   `enabled`: `bool` - コントロールがインタラクティブかどうか。デフォルトは `true` です。

`DropDownButton` は、メインボタンの外観をスタイリングするために、ベースの `Button` コンポーネントから多くのプロパティ（`flat`、`highlighted`、`primaryColor` など）を継承します。ドロップダウン自体は内部の `Menu` コンポーネントによって管理されます。

## 関連コンポーネント

*   `MenuItem`: `DropDownButton` のメニュー内で個別に選択可能なアイテムを定義するために使用されます。主なプロパティには、`text`、`icon.name`、`icon.source`、および `onTriggered` シグナルが含まれます。
*   `MenuSeparator`: （利用可能な場合）`MenuItem` のグループ間に視覚的な区切りを作成するために使用されます。

```
