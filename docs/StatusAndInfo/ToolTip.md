# ToolTip

ToolTip is a small popup that provides helpful information when users hover over or focus on a control. It's commonly used to explain the function of a button or provide additional context.

<VPImage
  :image="{
    light: '/assets/images/examples/ToolTip-light.png',
    dark: '/assets/images/examples/ToolTip-dark.png',
    alt: 'ToolTip examples in light and dark themes'
  }"
  width="1000"
/>

## Basic ToolTip

```qml
Button {
    text: qsTr("Save")
    tooltip: qsTr("Save your work")
}
```

## ToolTip with Rich Content

```qml
Button {
    text: qsTr("Delete")
    tooltip: qsTr("This action cannot be undone")
    
    ToolTip {
        text: root.tooltip
        delay: 1000
        timeout: 3000
    }
}
```

## ToolTip with Custom Positioning

```qml
Button {
    text: qsTr("Help")
    
    ToolTip {
        text: qsTr("Click for more information about this feature")
        delay: 500
        visible: parent.hovered
    }
}
```

## Important Properties

- `text`: The tooltip text
- `delay`: Delay before showing tooltip (milliseconds)
- `timeout`: Auto-hide timeout (milliseconds)
- `visible`: Whether the tooltip is visible
- `parent`: The parent control for positioning