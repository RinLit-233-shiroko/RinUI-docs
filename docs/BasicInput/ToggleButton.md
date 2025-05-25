# ToggleButton

The `ToggleButton` is a button that can be toggled between two states: checked (on) and unchecked (off). It functions like a checkbox but has the appearance of a standard button. Its visual state (e.g., background color) typically changes to indicate whether it's checked or unchecked, as its `highlighted` property is automatically bound to its `checked` state.

## Basic ToggleButton

A `ToggleButton` displays text and/or an icon and maintains a checked state. It is `checkable` by default.

<div align="center">
  <img src="/assets/images/BasicInput/ToggleButton/togglebutton-basic.png"> <!-- Placeholder: image path to be confirmed or created -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

ToggleButton {
    text: qsTr("Mute")
    checked: false // Initial state
    onCheckedChanged: {
        if (checked) {
            console.log("Mute is ON");
            // Apply mute action
        } else {
            console.log("Mute is OFF");
            // Remove mute action
        }
    }
}
```

## ToggleButton with Icon

Like other buttons derived from `Button`, `ToggleButton` can also include an icon along with text, or be icon-only.

<div align="center">
  <img src="/assets/images/BasicInput/ToggleButton/togglebutton-icon.png"> <!-- Placeholder: image path to be confirmed or created -->
</div>

```qml
import RinUI // Consistent import

ToggleButton {
    icon.name: "ic_fluent_mic_off_20_regular"
    // text: qsTr("Mic") // Optional text
    // Initial state is unchecked, icon shows "mic off"

    onCheckedChanged: {
        if (checked) {
            // Example: change icon to "ic_fluent_mic_20_filled" when checked
            icon.name = "ic_fluent_mic_20_filled"; 
            console.log("Microphone ON");
        } else {
            icon.name = "ic_fluent_mic_off_20_regular";
            console.log("Microphone OFF");
        }
    }
}
```

## Key Properties

*   `text`: `string` - The text label displayed on the button.
*   `icon.name`: `string` - The name of the fluent icon for the button.
*   `icon.source`: `url` - The URL for a custom image icon for the button.
*   `checked`: `bool` - Determines if the button is in the checked (on) or unchecked (off) state.
*   `checkable`: `bool` - Indicates if the button can be checked. Defaults to `true` for `ToggleButton`.
*   `highlighted`: `bool` - Automatically reflects the `checked` state. This property is typically used by the button's styling to change its appearance when it is checked/highlighted.
*   `enabled`: `bool` - Whether the control is interactive. Defaults to `true`.

As `ToggleButton` inherits from `Button`, other styling and behavior properties from `Button` (like `flat`, `primaryColor`) can also be applied.

## Signals

*   `onCheckedChanged()`: Emitted when the `checked` state changes. This is the primary signal to react to the toggle action.
*   `onClicked()`: Emitted when the button is clicked. Since it's `checkable` by default, a click will also toggle the `checked` state.

```
