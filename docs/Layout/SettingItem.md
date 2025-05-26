# SettingItem

A `SettingItem` is a layout component, inheriting from `Frame`, designed to represent a single item or row within a settings page or list. It provides a structured layout with a `title`, an optional `description`, and a slot on the right side (the `content` property) for a control (e.g., `Switch`, `ComboBox`, `Button`, `TextField`).

## Basic SettingItem

A `SettingItem` typically includes a `title` and a control placed in its `content` area. An optional `description` can provide more context. The `content` property is the default property, so child items are automatically assigned to it if they are not explicitly assigned to another property.

<div align="center">
  <img src="/assets/images/Layout/SettingItem/settingitem-basic.png"> <!-- Placeholder: image path to be confirmed or created -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

Column { // Example container
    width: 400
    spacing: 0 // SettingItem has its own bottom border/separator

    SettingItem {
        // Layout.fillWidth: true // Use if SettingItem is inside a ColumnLayout
        title: qsTr("Enable Notifications")
        description: qsTr("Allow the application to send you notifications.")

        // Control placed on the right side via the 'content' default property
        Switch {
            checked: true
            // ...
        }
    }

    SettingItem {
        title: qsTr("Username")
        description: qsTr("Your display name in the application.")
        content: TextField { // Explicitly using 'content' property
            width: 150 // Adjust width as needed for the control
            text: "CurrentUser"
            placeholderText: qsTr("Enter username")
        }
    }
}
```

## SettingItem without Description

If the `description` property is not set or is an empty string, the space for it will collapse, and the `title` will be vertically centered if applicable.

<div align="center">
  <img src="/assets/images/Layout/SettingItem/settingitem-no-desc.png"> <!-- Placeholder: image path to be confirmed or created -->
</div>

```qml
import RinUI // Consistent import

SettingItem {
    title: qsTr("Advanced Settings")
    // No description provided
    content: Button {
        text: qsTr("Configure...")
        onClicked: { /* ... */ }
    }
}
```

## SettingItem for Information Display

If no item is placed in the `content` slot (i.e., no child control is added), the `SettingItem` can be used purely for displaying textual information with consistent styling.

<div align="center">
  <img src="/assets/images/Layout/SettingItem/settingitem-info.png"> <!-- Placeholder: image path to be confirmed or created -->
</div>

```qml
import RinUI // Consistent import

SettingItem {
    title: qsTr("Version Information")
    description: qsTr("Application Version: 1.2.3
Build Date: 2023-10-27")
    // No control added to the 'content' area
}
```

## Key Properties

*   `title`: `string` - The main text label for the setting item. Displayed in a `Text` element.
*   `description`: `string` - Optional descriptive text displayed below the `title`. Displayed in a `Text` element with a secondary color.
*   `content`: `Item` (default property alias for `rightContent.data`) - Allows adding a QML Item (typically a single control like `Switch`, `ComboBox`, `Button`, or `TextField`) to the right side of the setting item.
*   Padding properties (`leftPadding`, `rightPadding`, `topPadding`, `bottomPadding`): Inherited from `Frame`. `SettingItem` sets specific default values (e.g., `leftPadding: 15 + 35`, `rightPadding: 15`, `topPadding: 13`, `bottomPadding: 13`).
*   `Layout.fillWidth`: `bool` - Inherited from `Frame`. Should typically be set to `true` when `SettingItem` is used within a parent `ColumnLayout` to make it span the width.

The `SettingItem` includes a bottom border by default, which acts as a visual separator when multiple `SettingItem`s are stacked in a list.

## Usage with `SettingExpander`

`SettingItem` is commonly used within the collapsible content area of a `SettingExpander` to create a list of detailed or related settings, maintaining a consistent look and feel.

```qml
import RinUI // Consistent import

SettingExpander {
    width: 400
    icon: "ic_fluent_preferences_20_regular"
    title: qsTr("User Preferences")
    description: qsTr("Manage your application preferences.")

    // Collapsible content using SettingItems
    SettingItem {
        title: qsTr("Enable Auto-Save")
        content: Switch { checked: true }
    }
    SettingItem {
        title: qsTr("Sync Interval")
        description: qsTr("Frequency of automatic synchronization.")
        content: ComboBox { model: ["5 minutes", "15 minutes", "1 hour"] }
    }
}
```

## Related Components

*   `Frame`: The base component from which `SettingItem` inherits, providing background and border capabilities.
*   `SettingExpander`: `SettingItem`s are frequently nested within the content area of `SettingExpander`s.

```
