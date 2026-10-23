# MenuBar（メニューバー）

MenuBar は、Menu オブジェクトを含む水平バーで、通常ウィンドウの上部に配置されます。 異なるアプリケーション間で一貫したメニュー項目を提供する標準的な方法を提供します。

<VPImage
  :image="{
    light: '/assets/images/examples/MenuBar-light.png',
    dark: '/assets/images/examples/MenuBar-dark.png',
    alt: 'MenuBar コンポーネントのライト／ダーク例'
  }"
  width="1000"
/>

## 基本メニューバー

```qml
MenuBar {
    padding: 4
    
    Menu {
        title: qsTr("ファイル")
        
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
        
        MenuSeparator {}
        
        MenuItem {
            text: qsTr("終了")
            icon.name: "ic_fluent_dismiss_20_regular"
            onTriggered: Qt.quit()
        }
    }
    
    Menu {
        title: qsTr("編集")
        
        MenuItem {
            text: qsTr("取り消し")
            icon.name: "ic_fluent_undo_20_regular"
            onTriggered: console.log("Undo")
        }
        
        MenuItem {
            text: qsTr("やり直し")
            icon.name: "ic_fluent_redo_20_regular"
            onTriggered: console.log("Redo")
        }
        
        MenuSeparator {}
        
        MenuItem {
            text: qsTr("カット")
            icon.name: "ic_fluent_cut_20_regular"
            onTriggered: console.log("Cut")
        }
        
        MenuItem {
            text: qsTr("コピー")
            icon.name: "ic_fluent_copy_20_regular"
            onTriggered: console.log("Copy")
        }
        
        MenuItem {
            text: qsTr("ペースト")
            icon.name: "ic_fluent_paste_20_regular"
            onTriggered: console.log("Paste")
        }
    }
    
    Menu {
        title: qsTr("表示")
        
        MenuItem {
            text: qsTr("拡大")
            icon.name: "ic_fluent_zoom_in_20_regular"
            onTriggered: console.log("Zoom In")
        }
        
        MenuItem {
            text: qsTr("縮小")
            icon.name: "ic_fluent_zoom_out_20_regular"
            onTriggered: console.log("Zoom Out")
        }
        
        MenuItem {
            text: qsTr("実際のサイズ")
            onTriggered: console.log("Actual Size")
        }
        
        MenuSeparator {}
        
        MenuItem {
            text: qsTr("フルスクリーン")
            onTriggered: console.log("Full Screen")
        }
    }
}
```

## 重要なプロパティ

- `padding`: メニューバーの周囲の余白
- `delegate`: 各メニュー項目を表示するために使用されるコンポーネント

## 重要な信号

- `triggered(MenuItem item)`: メニュー項目がトリガーされたときに发出される