# SettingExpander

The `SettingExpander` is a specialized version of the `Expander` component, tailored for creating items typically found in settings pages or lists. It provides a structured header that includes an icon, a title, a description, and a slot for a control on the right side of the header. Like a standard `Expander`, it also features a collapsible content area for additional details or sub-settings.

## Basic SettingExpander

A `SettingExpander`'s header displays an `icon`, `title`, and `description`. The `content` property allows placing a control (like a `Switch` or `ComboBox`) on the right side of this header. The main collapsible area (inherited from `Expander`'s `contentData` default property) is populated by adding QML items as children to the `SettingExpander`.

<div align="center">
  <img src="/assets/images/Layout/SettingExpander/settingexpander-basic.png"> <!-- Placeholder: image path to be confirmed or created -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

SettingExpander {
    width: 400 // Example width, adjust as needed
    icon: "ic_fluent_settings_20_regular" // Fluent icon name for the header
    title: qsTr("Appearance Settings")
    description: qsTr("Customize the look and feel of the application.")

    // Control placed on the right side of the header via the 'content' property
    content: Switch {
        // This switch might control a global appearance setting
        checked: true 
        // Note: Layouting within the 'content' slot might need specific handling 
        // if multiple items or complex layouts are needed there.
    }

    // Collapsible content (added as children, populating 'contentData')
    Text {
        text: qsTr("More detailed appearance options can be placed here, inside the collapsible area.")
        padding: 10 // Add padding as base Expander's contentPadding is 0 for SettingExpander
        wrapMode: Text.WordWrap
        Layout.fillWidth: true
    }
    Button {
        text: qsTr("Advanced Options")
        Layout.alignment: Qt.AlignHCenter
        // Add padding or margins as needed
    }
}
```

## Using `SettingItem` in Collapsible Area

The collapsible content area of a `SettingExpander` is often populated with `SettingItem` components to maintain a consistent layout for lists of sub-settings.

<div align="center">
  <img src="/assets/images/Layout/SettingExpander/settingexpander-with-items.png"> <!-- Placeholder: image path to be confirmed or created -->
</div>

```qml
import RinUI // Consistent import

SettingExpander {
    width: 400
    icon: "ic_fluent_paint_brush_20_regular"
    title: qsTr("Theme Options")
    description: qsTr("Select your preferred application theme and accent color.")
    expanded: false // Example: initially collapsed

    // Control in the header's right side
    content: ComboBox {
        width: 120 // Give it a sensible width
        model: ["Light", "Dark", "System"]
    }

    // Collapsible content populated with SettingItem(s)
    SettingItem {
        title: qsTr("Accent Color")
        description: qsTr("Choose a primary accent color for the application.")
        // 'content' of SettingItem (right side of SettingItem's header)
        content: Button { text: qsTr("Select Color...") } 
    }
    SettingItem {
        title: qsTr("Font Size")
        // No description for this SettingItem
        content: Slider { width: 100; from: 10; to: 16; value: 12 }
    }
}
```

## Key Properties

Inherits all properties from `Expander` (like `expanded`, `expandDirection`, `enabled`, `radius`), plus specific properties for its structured header:

*   `title`: `string` - The main title text displayed in the header section.
*   `description`: `string` - A smaller descriptive text displayed below the `title` in the header.
*   `icon`: `string` (alias for internal `IconWidget`'s `icon` property) - The Fluent icon name for the icon displayed on the left in the header.
*   `source`: `url` (alias for internal `IconWidget`'s `source` property) - URL for a custom image to be used as the header icon.
*   `iconSize`: `real` (alias for internal `IconWidget`'s `size` property) - Size of the icon in the header. Defaults to `20`.
*   `content`: `Item` (alias for `rightContent.data`) - Allows adding a QML Item (typically a single control like `Switch`, `ComboBox`, or `Button`) to the right side of the header area.

The default collapsible content area is populated via the `contentData` default property (inherited from `Expander`). Note that `SettingExpander` sets the base `Expander`'s `contentPadding` and `contentSpacing` to `0`, so you should manage spacing and padding for items within the collapsible area yourself (e.g., by adding `padding` to child items or using layouts).

## Related Components

*   `Expander`: The base component from which `SettingExpander` inherits most of its functionality.
*   `SettingItem`: Often used within the collapsible `contentData` area of `SettingExpander` to list further detailed settings or options.

```
