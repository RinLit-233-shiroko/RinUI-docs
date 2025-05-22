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
| primaryColor               | Theme primary color, default reads the backend configuration file default value `#605ed2` <br/> It is recommended to modify the theme color through [`Theme.setThemeColor(color: str)`](/zh/core/theme.md#setthemecolor-color-str)   |
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

## Animation Durations

| Property                         | Description                              |
|----------------------------------|------------------------------------------|
| `animationSpeed`                 | Standard animation speed (250ms)         |
| `animationSpeedFaster`           | Fast animation speed (120ms)             |
| `animationSpeedMiddle`           | Moderately slow speed (450ms)            |
| `appearanceSpeed`                | Interface switching speed (175ms)        |
| `progressBarAnimationSpeed`      | Progress bar animation time (1550ms)     |
