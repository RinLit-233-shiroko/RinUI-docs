# Utility Tools (`Utils`)

## Overview

RinUI provides a singleton object `Utils`, used to manage global resources, fonts, and animation durations. This is an indispensable auxiliary module in RinUI applications. You can modify the values of these properties to customize the appearance and behavior of RinUI.

You can use the utility tools `Utils` like this:
```qml
import RinUI

Component {
    // get Utils property
    property var property: Utils.property;
    
    // modify Utils property
    Component.onCompleted: {
        Utils.property = newValue;
    }
}
```

## Appearance and Theme
| Property                   | Description                                                                                                                                                                                                                          |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| primaryColor               | Theme primary color, default reads the backend configuration file default value `#605ed2` <br/> It is recommended to modify the theme color through [`Theme.setThemeColor(color)`](/core/theme#setthemecolor-color)                    |
| colors                     | The color table of the currently selected theme in RinUI, all controls in RinUI will reference these colors                                                                                                                          |
| appearance                 | Appearance settings of the current theme (such as rounded corners, shadows, opacity)                                                                                                                                                 |
| typography                 | Currently only stores font size information                                                                                                                                                                                          |

## Fonts and Icons
| Property                            | Description                                                                                              |
|-------------------------------------|----------------------------------------------------------------------------------------------------------|
| `fontFamily`                        | Default application font, default is `(Qt.application.font.family)`                                      |
| `iconFontFamily`                    | Font name for font icons (usually provided by `FontIconLoader`)                                          |
| `fontIconSource`                    | Path to the `.ttf` file of the font icon                                                                 |
| `fontIconIndexSource`               | Path to the `.js` file of the font icon index                                                            |
| `fontIconIndex`                     | Icon index object, can directly access characters through Utils.fontIconIndex['icon-name']               |
| `dpiScale`                          | Read-only `devicePixelRatio` of the current screen, intended for diagnostics only                         |

## Animation Durations

| Property                         | Description                              |
|----------------------------------|------------------------------------------|
| `animationSpeed`                 | Standard animation speed (250ms)         |
| `animationSpeedExpander`         | Expander animation speed (333ms)         |
| `animationSpeedFaster`           | Fast animation speed (167ms)             |
| `animationSpeedMiddle`           | Moderately slow speed (667ms)            |
| `appearanceSpeed`                | Interface switching speed (187ms)        |
| `progressBarAnimationSpeed`      | Progress bar animation time (1550ms)     |

## Sizing and DPI

`Utils.dp(value)` is deprecated. It remains for source compatibility, but it is now an identity function: it returns the input unchanged and logs a deprecation warning on first use.

Qt Quick dimensions such as `width`, `height`, and `font.pixelSize` already use logical pixels. Do not multiply them by the device pixel ratio:

```qml
Rectangle {
    width: 320
    height: 48
    font.pixelSize: 14
}
```

Avoid `Utils.dp(320)` and do not manually multiply by `Utils.dpiScale`; doing so applies HiDPI scaling twice.
