# RoundButton

The `RoundButton` is a standard `Button` that is styled with fully rounded corners. Its actual shape depends on its `width` and `height` properties: if they are equal, it will be a circle; if the `width` is greater than the `height`, it will form a pill or capsule shape.

The `PillButton` component, which is inherently checkable, is derived from `RoundButton`.

## Basic RoundButton Examples

A `RoundButton` can be used just like a standard `Button`, with its shape adapting to its dimensions.

**Pill Shape (Width > Height):**
<div align="center">
  <img src="/assets/images/BasicInput/RoundButton/roundbutton-pill.png"> <!-- Placeholder: image path to be confirmed or created -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

RoundButton {
    text: qsTr("Submit")
    width: 120 // Width is greater than height
    height: 40 
    onClicked: console.log("Pill-shaped RoundButton clicked")
}
```

## Key Properties

*   `radius`: `real` - (Alias for background's radius) Controls the corner radius. In `RoundButton`, the background's `radius` is dynamically bound to `height / 2`, ensuring fully rounded corners that adapt to the button's height.
*   `text`: `string` - Text label for the button.
*   `icon.name`: `string` - Fluent icon name for the button.
*   `icon.source`: `url` - Custom image icon for the button.
*   `highlighted`: `bool` - If `true`, typically changes the `backgroundColor` to the theme's primary color.
*   `flat`: `bool` - If `true`, generally removes the border and makes the background transparent unless hovered or highlighted.
*   `enabled`: `bool` - Whether the control is interactive. Defaults to `true`.

As `RoundButton` inherits from `Button`, all standard `Button` properties (like `primaryColor`, `backgroundColor` for specific states) and signals (like `onClicked`) are available. Its primary distinction is the enforced fully rounded background.

## Usage Notes

*   For a perfect circle, set `width` and `height` to the same value. These are often ideal for icon-only buttons.
*   If `width` is greater than `height`, the button will naturally take on a pill or capsule shape.
*   The `PillButton` component is a specialized `RoundButton` that adds `checkable` behavior by default and links its `checked` state to the `highlighted` visual state. If you need a checkable round button, `PillButton` might be more direct.
