# Flyout

A `Flyout` displays lightweight UI that is either informational or requires user interaction. Unlike a `Dialog`, a `Flyout` is typically attached to a specific control and can be light-dismissed by clicking or tapping outside of it (standard `Popup` behavior). It's often used to show more details, collect simple input, or ask for confirmation.

Flyouts inherit from `QtQuick.Controls.Basic.Popup`.

## Basic Flyout

A `Flyout` is often opened in response to a button click or other user action. It can contain text and custom buttons. The `target` property can be used to associate the flyout with the control that opens it, which helps in positioning.

<div align="center">
  <img src="/assets/images/DialogsAndFlyouts/Flyout/flyout-basic.png"> <!-- Placeholder: image path to be confirmed or created -->
</div>

```qml
import QtQuick 2.15
import RinUI // This should make RinUI's Position enum available

// ...

Button {
    id: myButton
    text: qsTr("Show Flyout")
    onClicked: myFlyout.open()
}

Flyout {
    id: myFlyout
    target: myButton // Positions the flyout relative to myButton
    text: qsTr("This is a flyout with a message.")
    
    // Add buttons by assigning a list of QML items to buttonBox
    buttonBox: [
        Button {
            text: qsTr("OK")
            highlighted: true // Example: style the default action
            onClicked: myFlyout.close()
        }
    ]
}
```

## Flyout with Image and Positioning

Flyouts can display an image at the top and be positioned relative to their parent or `target` control using the `position` property. This property uses a RinUI-specific `Position` enum.

<div align="center">
  <img src="/assets/images/DialogsAndFlyouts/Flyout/flyout-image-positioned.png"> <!-- Placeholder: image path to be confirmed or created -->
</div>

```qml
import RinUI // Consistent import

Button {
    id: detailsButton
    text: qsTr("View Details")
    onClicked: detailsFlyout.open()
}

Flyout {
    id: detailsFlyout
    target: detailsButton
    // Position enum likely includes: Position.Top, Position.Bottom, Position.Left, Position.Right
    // Position.Center (if available) might center it on the target or screen.
    position: Position.Bottom // Example: show below the target
    image: Qt.resolvedUrl("../../assets/BA_Pic_Shiroko-chibi.png") // Ensure path is correct
    text: qsTr("More details about the item can be shown here.")
    maximumWidth: 300
    buttonBox: [
        Button {
            text: qsTr("Confirm")
            onClicked: detailsFlyout.close()
        },
        Button {
            text: qsTr("Cancel")
            onClicked: detailsFlyout.close()
        }
    ]
}
```

## Key Properties

*   `text`: `string` - The main text content displayed within the flyout.
*   `image`: `url` - An optional image URL to display at the top of the flyout. The image is displayed with `fillMode: Image.PreserveAspectCrop`.
*   `buttonBox`: `list<Item>` - (Alias for `buttonLayout.data`) Accepts a list of QML items (typically `Button`s) to be placed in a horizontal `RowLayout` at the bottom of the flyout.
*   `position`: `Position` (enumeration) - Specifies the preferred position of the flyout (e.g., `Position.Top`, `Position.Bottom`, `Position.Left`, `Position.Right`). Defaults to `Position.Top`. This uses a custom `Position` enum from RinUI (likely found in `RinUI.utils.Position`).
*   `maximumWidth`: `real` - The maximum width the flyout content area can expand to. Defaults to `350`.
*   `padding`: `real` - Padding around the content of the flyout. Defaults to `16`.

**Inherited from `Popup`:**
*   `target`: `Item` - The item to position the flyout relative to. The `x` and `y` properties of the `Flyout` are automatically calculated based on `target` and `position`.
*   `opened`: `bool` (readonly) - Whether the flyout is currently visible.
*   `open()`: Method to show the flyout.
*   `close()`: Method to hide the flyout.
*   `closePolicy`: `Popup.ClosePolicy` (enumeration) - Defines how the flyout can be closed by user interaction. Typical flyout behavior (light-dismiss) is often `Popup.CloseOnEscape | Popup.CloseOnPressOutsideParent`.

## Styling

The `Flyout` has a styled background (the source indicates an acrylic color, border, and shadow, though the background rectangle itself was commented out in the provided snippet, the styling might be applied differently) and includes enter/exit animations for opacity and position.
```
