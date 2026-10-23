# MenuBar（菜单栏）

MenuBar 是一个水平栏，包含 Menu 对象，通常位于窗口顶部。它提供了一种标准方式，提供在各个应用程序中一致的菜单项。

## 基本菜单栏


<div align="center">
  <img src="/assets/images/docs/MenuBar/基本菜单栏.png" alt="基本菜单栏 示例">
</div>

```qml
MenuBar {
    padding: 4
    
    Menu {
        title: qsTr("文件")
        
        MenuItem {
            text: qsTr("新建")
            icon.name: "ic_fluent_document_add_20_regular"
            onTriggered: console.log("New file")
        }
        
        MenuItem {
            text: qsTr("打开")
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
            text: qsTr("另存为...")
            onTriggered: console.log("Save As...")
        }
        
        MenuSeparator {}
        
        MenuItem {
            text: qsTr("退出")
            icon.name: "ic_fluent_dismiss_20_regular"
            onTriggered: Qt.quit()
        }
    }
    
    Menu {
        title: qsTr("编辑")
        
        MenuItem {
            text: qsTr("撤销")
            icon.name: "ic_fluent_undo_20_regular"
            onTriggered: console.log("Undo")
        }
        
        MenuItem {
            text: qsTr("重做")
            icon.name: "ic_fluent_redo_20_regular"
            onTriggered: console.log("Redo")
        }
        
        MenuSeparator {}
        
        MenuItem {
            text: qsTr("剪切")
            icon.name: "ic_fluent_cut_20_regular"
            onTriggered: console.log("Cut")
        }
        
        MenuItem {
            text: qsTr("复制")
            icon.name: "ic_fluent_copy_20_regular"
            onTriggered: console.log("Copy")
        }
        
        MenuItem {
            text: qsTr("粘贴")
            icon.name: "ic_fluent_paste_20_regular"
            onTriggered: console.log("Paste")
        }
    }
    
    Menu {
        title: qsTr("查看")
        
        MenuItem {
            text: qsTr("放大")
            icon.name: "ic_fluent_zoom_in_20_regular"
            onTriggered: console.log("Zoom In")
        }
        
        MenuItem {
            text: qsTr("缩小")
            icon.name: "ic_fluent_zoom_out_20_regular"
            onTriggered: console.log("Zoom Out")
        }
        
        MenuItem {
            text: qsTr("实际大小")
            onTriggered: console.log("Actual Size")
        }
        
        MenuSeparator {}
        
        MenuItem {
            text: qsTr("全屏")
            onTriggered: console.log("Full Screen")
        }
    }
}
```

## 重要属性

- `padding`: 菜单栏周围的填充
- `delegate`: 用于显示每个菜单项的组件

## 重要信号

- `triggered(MenuItem item)`: 当菜单项被触发时发出
