# Popup

Popup is a control for displaying floating content on top of the interface. It can be used for tooltips, confirmations, or other content that needs to float above the main interface.

<VPImage
  :image="{
    light: '/assets/images/examples/Popup-light.png',
    dark: '/assets/images/examples/Popup-dark.png',
    alt: 'Popup examples in light and dark themes'
  }"
  width="1000"
/>

## Basic Popup

```qml
Popup {
    id: popup
    width: 200
    height: 100
    Text {
        anchors.centerIn: parent
        text: qsTr("This is a popup")
    }
}
```

## Popup with Position

```qml
Button {
    id: button
    text: qsTr("Show Popup")
    onClicked: {
        popup.position = Position.Top
        popup.open()
    }
}

Popup {
    id: popup
    width: 200
    height: 100
    position: Position.Top
    Text {
        anchors.centerIn: parent
        text: qsTr("Popup above the button")
    }
}
```

## Popup with Anchor Item

```qml
Rectangle {
    id: anchorRect
    width: 100
    height: 50
    color: "lightblue"
    
    Text {
        anchors.centerIn: parent
        text: qsTr("Anchor")
    }
    
    MouseArea {
        anchors.fill: parent
        onClicked: {
            popup.anchorItem = anchorRect
            popup.position = Position.Right
            popup.open()
        }
    }
}

Popup {
    id: popup
    width: 200
    height: 100
    anchorItem: anchorRect
    position: Position.Right
    Text {
        anchors.centerIn: parent
        text: qsTr("Popup anchored to the rectangle")
    }
}
```

## Important Properties

- `position`: The position of the popup relative to its anchor item (Top, Bottom, Left, Right, TopLeft, TopRight, BottomLeft, BottomRight, Center, None)
- `anchorItem`: The item to use as a reference point for positioning the popup
- `posX` and `posY`: Custom X and Y coordinates for the popup (computed automatically based on position and anchor item)