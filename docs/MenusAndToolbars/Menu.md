# Menu（菜单）

Menu is a component that displays a list of MenuItem objects. It can be used to present commands, options, or other actions to the user. Menus can be displayed as context menus or as part of a menu bar.

## Basic Menu

<div align="center">
  <img src="/assets/images/docs/Menu/example-2.png" alt="Basic Menu">
</div>

```qml
Menu {
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
}
```

## Menu with Submenu

<div align="center">
  <img src="/assets/images/docs/Menu/example.png" alt="Menu with Submenu">
</div>

```qml
Menu {
    MenuItem {
        text: qsTr("View")
        
        Menu {
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
        }
    }
    
    MenuItem {
        text: qsTr("Sort")
        
        Menu {
            MenuItem {
                text: qsTr("By Name")
                onTriggered: console.log("Sort by Name")
            }
            
            MenuItem {
                text: qsTr("By Date")
                onTriggered: console.log("Sort by Date")
            }
        }
    }
}
```

## Important Properties

- `title`: The title of the menu
- `cascade`: Whether the menu displays its items in a cascading manner
- `enabled`: Whether the menu is enabled
- `visible`: Whether the menu is visible
- `position`: The position of the menu (e.g., PositionalMenu)

## Important Signals

- `aboutToShow()`: Emitted before the menu is shown
- `aboutToHide()`: Emitted before the menu is hidden
- `menuSelected(MenuItem item)`: Emitted when a menu item is selected