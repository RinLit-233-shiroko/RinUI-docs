# NavigationBar

NavigationBar is a control that provides a vertical navigation area. It can be collapsed or expanded and contains navigation items that can be clicked to navigate between different pages.

<VPImage
  :image="{
    light: '/assets/images/examples/NavigationBar-light.png',
    dark: '/assets/images/examples/NavigationBar-dark.png',
    alt: 'NavigationBar examples in light and dark themes'
  }"
  width="1000"
/>

## Basic NavigationBar

```qml
NavigationBar {
    id: navigationBar
    windowTitle: qsTr("Application")
    windowIcon: "qrc:/images/icon.png"
    windowWidth: 1200
    
    navigationItems: [
        {title: qsTr("Home"), page: "HomePage.qml", icon: "ic_fluent_home_20_regular"},
        {title: qsTr("Settings"), page: "SettingsPage.qml", icon: "ic_fluent_settings_20_regular"},
        {title: qsTr("About"), page: "AboutPage.qml", icon: "ic_fluent_info_20_regular"}
    ]
}
```

## Collapsed NavigationBar

```qml
NavigationBar {
    id: navigationBar
    windowTitle: qsTr("Application")
    windowIcon: "qrc:/images/icon.png"
    windowWidth: 800
    collapsed: true
    
    navigationItems: [
        {title: qsTr("Home"), page: "HomePage.qml", icon: "ic_fluent_home_20_regular"},
        {title: qsTr("Settings"), page: "SettingsPage.qml", icon: "ic_fluent_settings_20_regular"},
        {title: qsTr("About"), page: "AboutPage.qml", icon: "ic_fluent_info_20_regular"}
    ]
}
```

## Important Properties

- `collapsed`: Whether the navigation bar is collapsed
- `navigationItems`: Array of navigation items with title, page, and icon
- `titleBarEnabled`: Whether to show the title bar at the top of the navigation bar
- `expandWidth`: The width of the expanded navigation bar
- `minimumExpandWidth`: The minimum width to expand the navigation bar
- `windowTitle`: The title to show in the title bar
- `windowIcon`: The icon to show in the title bar
- `windowWidth`: The width of the window
- `stackView`: The StackView to use for page navigation
- `currentPage`: The URL of the current page

## Important Methods

- `isNotOverMinimumWidth()`: Returns true if the window is smaller than the minimum width