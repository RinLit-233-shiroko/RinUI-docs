# MenuBar

MenuBar is a horizontal bar that contains Menu objects, typically found at the top of a window. It provides a standard way to provide menu items that are consistent across different applications.

<VPImage
  :image="{
    light: '/assets/images/examples/MenuBar-light.png',
    dark: '/assets/images/examples/MenuBar-dark.png',
    alt: 'MenuBar examples in light and dark themes'
  }"
  width="1000"
/>

## Basic MenuBar

```qml
MenuBar {
    padding: 4
    
    Menu {
        title: qsTr("File")
        
        MenuItem {
            text: qsTr("New")
            icon.name: "ic_fluent_document_add_20_regular"
            onTriggered: console.log("New file")
        }
        
        MenuItem {
            text: qsTr("Open")
            icon.name: "ic_fluent_folder_open_20_regular"
            onTriggered: console.log("Open file")
        }
        
        MenuSeparator {}
        
        MenuItem {
            text: qsTr("Save")
            icon.name: "ic_fluent_save_20_regular"
            onTriggered: console.log("Save file")
        }
        
        MenuItem {
            text: qsTr("Save As...")
            onTriggered: console.log("Save As...")
        }
        
        MenuSeparator {}
        
        MenuItem {
            text: qsTr("Exit")
            icon.name: "ic_fluent_dismiss_20_regular"
            onTriggered: Qt.quit()
        }
    }
    
    Menu {
        title: qsTr("Edit")
        
        MenuItem {
            text: qsTr("Undo")
            icon.name: "ic_fluent_undo_20_regular"
            onTriggered: console.log("Undo")
        }
        
        MenuItem {
            text: qsTr("Redo")
            icon.name: "ic_fluent_redo_20_regular"
            onTriggered: console.log("Redo")
        }
        
        MenuSeparator {}
        
        MenuItem {
            text: qsTr("Cut")
            icon.name: "ic_fluent_cut_20_regular"
            onTriggered: console.log("Cut")
        }
        
        MenuItem {
            text: qsTr("Copy")
            icon.name: "ic_fluent_copy_20_regular"
            onTriggered: console.log("Copy")
        }
        
        MenuItem {
            text: qsTr("Paste")
            icon.name: "ic_fluent_paste_20_regular"
            onTriggered: console.log("Paste")
        }
    }
    
    Menu {
        title: qsTr("View")
        
        MenuItem {
            text: qsTr("Zoom In")
            icon.name: "ic_fluent_zoom_in_20_regular"
            onTriggered: console.log("Zoom In")
        }
        
        MenuItem {
            text: qsTr("Zoom Out")
            icon.name: "ic_fluent_zoom_out_20_regular"
            onTriggered: console.log("Zoom Out")
        }
        
        MenuItem {
            text: qsTr("Actual Size")
            onTriggered: console.log("Actual Size")
        }
        
        MenuSeparator {}
        
        MenuItem {
            text: qsTr("Full Screen")
            onTriggered: console.log("Full Screen")
        }
    }
}
```

## Important Properties

- `padding`: The padding around the menu bar
- `delegate`: The component used to display each menu item

## Important Signals

- `triggered(MenuItem item)`: Emitted when a menu item is triggered