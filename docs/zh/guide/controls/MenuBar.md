# 菜单栏（MenuBar）

## 介绍

菜单栏通过在应用程序或窗口顶部提供一组菜单来简化基本应用程序的创建。使用它来让用户从上下文相关的简单命令或选项列表中进行选择。

## 示例

### 一个简单的菜单栏。

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

### 带有键盘加速器的菜单栏。

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

### 带有子菜单、分隔符和可勾选项目的菜单栏。

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

### 带有图标的菜单栏。

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

### 带有键盘加速器的菜单栏。

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