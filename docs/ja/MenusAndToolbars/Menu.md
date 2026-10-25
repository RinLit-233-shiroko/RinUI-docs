# Menu（メニュー）

Menu は、MenuItem オブジェクトのリストを表示するコンポーネントです。コマンド、オプション、またはその他のアクションをユーザーに表示するために使用できます。Menu は、コンテキストメニューまたはメニューバーの一部として表示できます。

## 基本メニュー

<div align="center">
  <img src="/assets/images/docs/Menu/example-2.png" alt="基本メニュー">
</div>

```qml
Menu {
    MenuItem {
        text: qsTr("新規")
        icon.name: "ic_fluent_document_add_20_regular"
        onTriggered: console.log("New file")
    }
    
    MenuItem {
        text: qsTr("開く")
        icon.name: "ic_fluent_folder_open_20_regular"
        onTriggered: console.log("Open file")
    }
    
    MenuSeparator {}
    
    MenuItem {
        text: qsTr("保存")
        icon.name: "ic_fluent_save_20_regular"
        onTriggered: console.log("Save file")
    }
    
    MenuItem {
        text: qsTr("名前をつけて保存...")
        onTriggered: console.log("Save As...")
    }
}
```

## サブメニュー付きメニュー

<div align="center">
  <img src="/assets/images/docs/Menu/example.png" alt="サブメニュー付きメニュー">
</div>

```qml
Menu {
    MenuItem {
        text: qsTr("表示")
        
        Menu {
            MenuItem {
                text: qsTr("ズームイン")
                icon.name: "ic_fluent_zoom_in_20_regular"
                onTriggered: console.log("Zoom In")
            }
            
            MenuItem {
                text: qsTr("ズームアウト")
                icon.name: "ic_fluent_zoom_out_20_regular"
                onTriggered: console.log("Zoom Out")
            }
            
            MenuItem {
                text: qsTr("実際のサイズ")
                onTriggered: console.log("Actual Size")
            }
        }
    }
    
    MenuItem {
        text: qsTr("ソート")
        
        Menu {
            MenuItem {
                text: qsTr("名前順")
                onTriggered: console.log("Sort by Name")
            }
            
            MenuItem {
                text: qsTr("日付順")
                onTriggered: console.log("Sort by Date")
            }
        }
    }
}
```

## 重要なプロパティ

- `title`: メニューのタイトル
- `cascade`: メニューが項目をカスケード方式で表示するかどうか
- `enabled`: メニューが有効かどうか
- `visible`: メニューが表示されているかどうか
- `position`: メニューの位置（例：PositionalMenu）

## 重要なシグナル

- `aboutToShow()`: メニューが表示される前に発行される
- `aboutToHide()`: メニューが非表示になる前に発行される
- `menuSelected(MenuItem item)`: メニュー項目が選択されたときに発行される