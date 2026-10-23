# Theme

## Introduction

RinUI provides a lightweight theme manager. 

You only need to `import RinUI` in QML to get global theme support immediately. 
The theme module exists as a singleton `pragma Singleton`, which keeps style switching consistent across the application.

You can use the `Theme` manager like this: 
```qml
import RinUI

Component {
    Component.onCompleted: {
        Theme.function()
    }
}
```

## Theme Modes

### `setTheme(mode: Theme.mode)`
The `setTheme` function is used to switch the light and dark theme of all RinUI components. This function accepts the following values:

- `Theme.mode.Light`: Switch to light theme
- `Theme.mode.Dark`: Switch to dark theme
- `Theme.mode.Auto`: Auto switch theme, based on the current system theme mode to decide whether to switch to light or dark theme

### `toggleMode()`
`toggleMode` switches between `Theme.mode.Light` and `Theme.mode.Dark` based on the effective appearance. A dark interface becomes light, and a light interface becomes dark:

```qml
Theme.toggleMode()
```

It does not cycle through the `Light`, `Dark`, and `Auto` configuration modes. Call `setTheme()` directly to enter or leave automatic mode.

### `getTheme() -> str`
The `getTheme` function returns the stored theme configuration mode:

- `"Light"`: The current theme is light
- `"Dark"`: The current theme is dark
- `"Auto"`: The current theme is auto mode

In `Auto` mode, `getTheme()` still returns `"Auto"` rather than resolving to the effective light or dark appearance. Read the effective appearance separately:

```qml
let darkNow = Theme.currentTheme.isDark
```

You can also call `Theme.isDark()`, which returns `currentTheme.isDark`.

### `setThemeColor(color)`
`setThemeColor` sets the RinUI accent color. It accepts a hexadecimal string or a QML `color` value, for example `"#FF0000"` for red.

### `getThemeColor() -> color`
`getThemeColor` returns the current accent color as a QML `color` value. It returns `"transparent"` when the theme manager is not initialized.

## Background Effects

> [!NOTE]
> The settings for background effects are only valid on Windows and some effects require Windows 11 and above versions.
>
> | Effect       | Supported System Versions       |
> |----------|---------------|
> | Mica     | > Windows 11  |
> | Acrylic  | >= Windows 10 |
> | Tabbed   | > Windows 11  |

### `setBackdropEffect(effect: Theme.effect)`
The `setBackdropEffect` function is used to set the background effect of RinUI components. This function accepts the following values:

- `Theme.effect.Mica`: Mica background effect
- `Theme.effect.Acrylic`: Acrylic background effect
- `Theme.effect.Tabbed`: Tabbed background (Mica Alt) effect
- `Theme.effect.None`: No background effect

### `getBackdropEffect() -> str`
The `getBackdropEffect` function is used to get the current background effect of the component. The function will return the following values:

- `"mica"`: Mica background effect
- `"acrylic"`: Acrylic background effect
- `"tabbed"`: Tabbed background (Mica Alt) effect
- `"none"`: No background effect
