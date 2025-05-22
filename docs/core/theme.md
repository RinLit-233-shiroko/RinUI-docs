# Theme

## Introduction

RinUI provides a lightweight theme manager. 

You only need to `import RinUI` in QML to get global theme support immediately. 
The theme module exists as a singleton `prama Singleton` by default, which is suitable for style switching and consistency maintenance of the entire application.

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

### `toggleTheme()`
The `toggleTheme` function is used to switch the current theme mode. If the current mode is light, it will switch to dark; otherwise, it will switch to light.

### `getTheme() -> str`
The `getTheme` function is used to get the current theme mode. The function will return the following values:

- `"Light"`: The current theme is light
- `"Dark"`: The current theme is dark
- `"Auto"`: The current theme is auto mode

### `setThemeColor(color: str)`
The `setThemeColor` function is used to set the theme color of RinUI components. This function accepts a hexadecimal color value, for example, `#FF0000` represents red.

### `getThemeColor() -> str`
The `getThemeColor` function is used to get the current theme color of the component. The function will return a hexadecimal color value.

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
