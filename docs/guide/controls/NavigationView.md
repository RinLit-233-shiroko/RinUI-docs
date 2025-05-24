# NavigationView

## Introduction

<mcurl name="NavigationView" url="https://learn.microsoft.com/en-us/windows/apps/design/controls/navigationview"></mcurl>

The navigation view control provides a common vertical layout for top-level areas of your app via a collapsible navigation menu.

## Examples

### NavigationView with default PaneDisplayMode

::: code-group

```qml
NavigationView {
    navigationItems: [
        {
            icon: "ic_fluent_play_20_regular",
            title: qsTr("Menu Item 1"),
            // page: page1 // Reference to a Component
        },
        {
            icon: "ic_fluent_save_20_regular",
            title: qsTr("Menu Item 2"),
            // page: page2 // Reference to a Component
        },
        {
            icon: "ic_fluent_arrow_sync_20_regular",
            title: qsTr("Menu Item 3"),
            // page: page3 // Reference to a Component
        },
        {
            icon: "ic_fluent_settings_20_regular",
            title: qsTr("Settings"),
            // page: page4 // Reference to a Component
        },
    ]
}
```

:::