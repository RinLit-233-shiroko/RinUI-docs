# Frame

The `Frame` component in RinUI is a styled container that inherits from `QtQuick.Controls.Basic.Frame`. It provides a customizable background with properties for color, border, and corner radius, and includes optional hover effects. It's often used as a base for other components or to group related UI elements with a common visual styling. By default, `clip` is set to `true`.

## Basic Frame

A `Frame` can be used to visually group content. You can place child items directly within a `Frame`; these children are parented to the `Frame`'s `contentItem`. Standard padding properties can be used to create space between the frame's edges and its content.

<div align="center">
  <img src="/assets/images/ListAndCollections/Frame/frame-basic.png"> <!-- Placeholder: image path to be confirmed or created -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

Frame {
    width: 200
    height: 150
    padding: 10 // Content is placed within this padding

    // Custom appearance properties
    color: Theme.currentTheme.colors.subtleSecondaryColor // Background color
    radius: 8 // Corner radius
    borderColor: Qt.rgba(0, 0, 0, 0.1) // Border color
    borderWidth: 1 // Border width

    Text {
        anchors.centerIn: parent // Anchors relative to contentItem's area
        text: qsTr("Content inside a Frame")
    }
}
```

## Frameless Mode

Set the `frameless` property to `true` to make the visible background (color and border) of the `Frame` disappear. The `Frame` itself still exists as a layout container and will continue to clip its content if `clip` is `true`. This can be useful for grouping and clipping without adding visual decoration.

```qml
import RinUI // Consistent import

Frame {
    width: 150
    height: 100
    frameless: true
    padding: 5 // Padding still applies for content positioning
    clip: true // Content is clipped to the Frame's bounds

    Rectangle {
        // This rectangle is a child of the Frame's contentItem
        anchors.fill: parent
        // If margins are negative or content is larger, it will be clipped
        anchors.margins: -10 // Example: content larger than frame
        color: "lightblue" 
        Text { anchors.centerIn: parent; text: "Clipped Content"; }
    }
}
```

## Hover Effects

If `hoverable` is `true` (the default), the `Frame`'s background opacity changes slightly on mouse hover, providing visual feedback. The `hover` property can be used to react to this state.

```qml
import RinUI // Consistent import

Frame {
    width: 100
    height: 100
    color: "lightgray"
    hoverable: true // Default

    Text {
        anchors.centerIn: parent
        text: parent.hover ? qsTr("Hovered!") : qsTr("Hover me")
    }
}
```

## Key Properties

*   `color`: `color` - The background color of the frame. Defaults to `Theme.currentTheme.colors.cardColor`.
*   `radius`: `real` (alias for the background `Rectangle`'s `radius`) - The corner radius of the frame's background. Defaults to `Theme.currentTheme.appearance.smallRadius`.
*   `borderColor`: `color` - The color of the frame's border. Defaults to `Theme.currentTheme.colors.cardBorderColor`.
*   `borderWidth`: `int` - The width of the frame's border. Defaults to `Theme.currentTheme.appearance.borderWidth`.
*   `frameless`: `bool` - If `true`, the background rectangle (which shows color and border) is made invisible. Defaults to `false`.
*   `hoverable`: `bool` - If `true`, enables hover detection and visual feedback (opacity change) on the background. Defaults to `true`.
*   `hover`: `bool` (readonly) - Indicates if the mouse is currently hovering over the frame (provided `hoverable` is `true`).
*   `clip`: `bool` - (Inherited from `Item`, explicitly set to `true` by default in RinUI's `Frame`) Determines if children are clipped to the frame's boundaries.

**Inherited from `QtQuick.Controls.Basic.Frame`:**
*   `contentItem`: `Item` - The actual container for child items. Children declared as direct children of a `Frame` in QML are automatically reparented to this `contentItem`.
*   Padding properties (`padding`, `topPadding`, `leftPadding`, `rightPadding`, `horizontalPadding`, `verticalPadding`) - These control the space between the frame's outer edges and the `contentItem`.

## Usage as a Base Component

RinUI utilizes `Frame` as a foundational building block for other components. For instance:
*   `SettingItem` inherits from `Frame` to provide a consistent row structure in settings pages.
*   The `Clip` component uses a `Frame` internally for its styled background.

This demonstrates `Frame`'s utility in creating styled containers with consistent theming.
```
