# Menu（菜单）

Menu 是一个显示 MenuItem 对象列表的组件。它可以用来向用户显示命令、选项或其他操作。Menu 可以作为上下文菜单或菜单栏的一部分显示。

## 基本菜单


<div align="center">
  <img src="/assets/images/docs/Menu/example-2.png" alt="基本菜单 示例">
</div>

```qml
Menu {
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
}
```

## 带子菜单的菜单


<div align="center">
  <img src="/assets/images/docs/Menu/example.png" alt="带子菜单的菜单 示例">
</div>

```qml
Menu {
    MenuItem {
        text: qsTr("查看")
        
        Menu {
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
        }
    }
    
    MenuItem {
        text: qsTr("排序")
        
        Menu {
            MenuItem {
                text: qsTr("按名称")
                onTriggered: console.log("Sort by Name")
            }
            
            MenuItem {
                text: qsTr("按日期")
                onTriggered: console.log("Sort by Date")
            }
        }
    }
}
```

## 重要属性

- `title`: 菜单的标题
- `cascade`: 菜单是否以级联方式显示其项目
- `enabled`: 菜单是否启用
- `visible`: 菜单是否可见
- `position`: 菜单的位置（例如 PositionalMenu）

## 重要信号

- `aboutToShow()`: 在菜单显示之前发出
- `aboutToHide()`: 在菜单隐藏之前发出
- `menuSelected(MenuItem item)`: 当选择菜单项时发出
