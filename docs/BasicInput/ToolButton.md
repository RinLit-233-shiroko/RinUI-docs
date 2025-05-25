# ToolButton

A `ToolButton` is a specialized `Button` typically used for actions in toolbars or similar compact UI areas. It's often configured to display only an icon but can also show text. RinUI's `ToolButton` provides convenient aliases (`size` and `color`) for controlling aspects of its internal `IconWidget`.

## Basic ToolButton (Icon-Only)

ToolButtons are frequently used as icon-only buttons, often with `flat: true` for a less intrusive look suitable for toolbars.

<div align="center">
  <img src="/assets/images/BasicInput/ToolButton/toolbutton-icon.png"> <!-- Placeholder: image path to be confirmed or created -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

ToolButton {
    icon.name: "ic_fluent_gear_20_regular"
    // size: 24 // Adjusts the internal IconWidget's size (default is 20)
    // color: Theme.currentTheme.colors.textPrimaryColor // Sets the icon's color
    flat: true // Common styling for tool buttons
    ToolTip.text: qsTr("Settings") // Recommended for accessibility on icon-only buttons
    onClicked: {
        console.log("Settings ToolButton clicked");
    }
}
```

## ToolButton with Text and Icon

A `ToolButton` can also display text alongside or instead of an icon. The internal layout places both a `Text` item and an `IconWidget`.

<div align="center">
  <img src="/assets/images/BasicInput/ToolButton/toolbutton-text-icon.png"> <!-- Placeholder: image path to be confirmed or created -->
</div>

```qml
import RinUI // Consistent import

ToolButton {
    text: qsTr("Edit")
    icon.name: "ic_fluent_edit_20_regular"
    flat: true
    // The layout of text and icon within the button might depend on theming 
    // and specific size constraints.
    onClicked: {
        console.log("Edit ToolButton clicked");
    }
}
```
> **Important Note on `icon.name` vs `text` for Icon Display**: The `ToolButton`'s internal `IconWidget` primarily uses `toolBtn.icon.name` to determine the icon. If `toolBtn.icon.name` is not set, it attempts to use `toolBtn.text` as the icon name. This fallback is generally not recommended for clarity. **Always use `icon.name` to specify the icon.**

## Key Properties

*   `icon.name`: `string` - The name of the Fluent icon to display via the internal `IconWidget`. This is the **recommended** way to set the icon.
*   `text`: `string` - Text to display on the button.
*   `size`: `real` - (Alias) Sets the `size` property of the internal `IconWidget`, controlling the visual size of the icon. Defaults to `20` within the `ToolButton`'s `IconWidget` definition.
*   `color`: `color` - (Alias) Sets the `color` property of the internal `IconWidget`.
*   `flat`: `bool` - Inherited from `Button`. While `Button` defaults to `false`, `ToolButton`s are often explicitly set to `flat: true` for a typical toolbar appearance.
*   `enabled`: `bool` - Whether the control is interactive. Defaults to `true`.

As `ToolButton` inherits from `Button`, all standard `Button` properties (like `highlighted`, `checkable`, `primaryColor`, styling for different states) and signals (like `onClicked`) are available.

## Example: Usage as ComboBox Indicator

RinUI's `ComboBox` uses a `ToolButton` internally as its dropdown arrow indicator:
```qml
// Snippet from ComboBox.qml's indicator
ToolButton {
    flat: true
    icon.name: "ic_fluent_chevron_down_20_regular"
    size: 14 
    color: Theme.currentTheme.colors.textSecondaryColor
    // ... other properties
}
```
This demonstrates a common use case for a flat, icon-only `ToolButton`.

```
