# MenuItem

MenuItem is a component that represents a single item in a menu. It can contain text, an icon, or both. MenuItems can be used to perform actions or to represent options that can be selected.

## Basic MenuItem

<div align="center">
  <img src="/assets/images/docs/MenuItem/example-2.png" alt="Basic MenuItem">
</div>

```qml
MenuItem {
    text: qsTr("New")
    icon.name: "ic_fluent_document_add_20_regular"
    onTriggered: console.log("New file")
}
```

## MenuItem with CheckBox

<div align="center">
  <img src="/assets/images/docs/MenuItem/example-3.png" alt="MenuItem with CheckBox">
</div>

```qml
MenuItem {
    text: qsTr("Bold")
    checkable: true
    checked: textFormat.bold
    onTriggered: textFormat.bold = !textFormat.bold
}
```

## MenuItem with Radio Button

<div align="center">
  <img src="/assets/images/docs/MenuItem/example.png" alt="MenuItem with Radio Button">
</div>

```qml
MenuItemGroup {
    id: alignmentGroup
}

MenuItem {
    text: qsTr("Left")
    checkable: true
    checked: alignment === Text.AlignLeft
    group: alignmentGroup
    onTriggered: alignment = Text.AlignLeft
}

MenuItem {
    text: qsTr("Center")
    checkable: true
    checked: alignment === Text.AlignHCenter
    group: alignmentGroup
    onTriggered: alignment = Text.AlignHCenter
}

MenuItem {
    text: qsTr("Right")
    checkable: true
    checked: alignment === Text.AlignRight
    group: alignmentGroup
    onTriggered: alignment = Text.AlignRight
}
```

## Important Properties

- `text`: The text to display
- `icon`: The icon to display
- `checkable`: Whether the menu item can be checked
- `checked`: Whether the menu item is checked
- `group`: The menu item group this item belongs to
- `enabled`: Whether the menu item is enabled
- `visible`: Whether the menu item is visible

## Important Signals

- `triggered()`: Emitted when the menu item is clicked