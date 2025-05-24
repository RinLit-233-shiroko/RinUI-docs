# Menu

## Introduction

A Menu displays lightweight UI that is light dismissed by clicking or tapping off of it. Use it to let the user choose from a contextual list of simple commands or options.

## Examples

### A Menu with MenuItems and MenuSeparator.

::: code-group

```qml
Button {
    flat: true
    icon.name: "ic_fluent_arrow_sort_20_regular"
    width: 76
    height: 36
    text: qsTr("Sort")
    anchors.verticalCenter: parent.verticalCenter
    onClicked: menu.open()

    Menu {
        id: menu
        MenuItem {
            text: qsTr("By rating")
        }
        MenuItem {
            text: qsTr("By match")
        }
        MenuItem {
            text: qsTr("By distance")
        }
    }
}
```

:::

### A Menu with MenuItems and MenuSeparator.

::: code-group

```qml
Button {
    text: qsTr("Options")
    anchors.verticalCenter: parent.verticalCenter
    onClicked: menuToggle.open()

    Menu {
        id: menuToggle
        MenuItem {
            text: qsTr("Reset")
        }
        MenuSeparator {}
        MenuItem {
            checkable: true
            checked: true
            text: qsTr("Repeat")
        }
        MenuItem {
            checkable: true
            checked: true
            text: qsTr("Shuffle")
        }
    }
}
```

:::

### A Menu with cascading Menus.

::: code-group

```qml
Button {
    text: qsTr("File Options")
    anchors.verticalCenter: parent.verticalCenter
    onClicked: menuWithCascading.open()

    Menu {
        id: menuWithCascading
        MenuItem {
            text: qsTr("Open")
        }
        Menu {
            title: qsTr("Send to")
            MenuItem {
                text: qsTr("Bluetooth")
            }
            MenuItem {
                text: qsTr("Desktop (shortcut)")
            }
            Menu {
                title: qsTr("Compressed file")
                MenuItem {
                    text: qsTr("Compress and email")
                }
                MenuItem {
                    text: qsTr("Compress to .7z")
                }
                MenuItem {
                    text: qsTr("Compress to .zip")
                }
            }
        }
    }
}
```

:::

### A Menu with icons.

::: code-group

```qml
Button {
    text: qsTr("Edit Options")
    anchors.verticalCenter: parent.verticalCenter
    onClicked: menuWithIcons.open()

    Menu {
        id: menuWithIcons
        MenuItem {
            icon.name: "ic_fluent_share_20_regular"
            text: qsTr("Share")
        }
        MenuItem {
            icon.name: "ic_fluent_copy_20_regular"
            text: qsTr("Copy")
        }
        MenuItem {
            icon.name: "ic_fluent_delete_20_regular"
            text: qsTr("Delete")
        }
        MenuSeparator {}
        MenuItem {
            text: qsTr("Rename")
        }
        MenuItem {
            text: qsTr("Select")
        }
    }
}
```

:::

### A Menu with Keyboard Accelerators.

::: code-group

```qml
Button {
    text: qsTr("Edit Options")
    anchors.verticalCenter: parent.verticalCenter
    onClicked: menuWithIconsAndShortcuts.open()

    Menu {
        id: menuWithIconsAndShortcuts
        Action {
            icon.name: "ic_fluent_share_20_regular"
            text: qsTr("Share")
            shortcut: "Ctrl+S"
        }
        Action {
            icon.name: "ic_fluent_copy_20_regular"
            text: qsTr("Copy")
            shortcut: "Ctrl+C"
        }
        Action {
            icon.name: "ic_fluent_delete_20_regular"
            text: qsTr("Delete")
            shortcut: "Del"
        }
        MenuSeparator {}
        Action {
            text: qsTr("Rename")
            shortcut: "F2"
        }
        Action {
            text: qsTr("Select")
            shortcut: "Ctrl+A"
        }
    }
}
```

:::