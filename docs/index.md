---
layout: home

hero:
  name: "RinUI"
  text: "Build Fluent apps with Qt Quick"
  tagline: "A Fluent Design UI library for Qt Quick, with native window integration, complete controls, and a shared theme system."
  image:
    src: /assets/images/home/rinui-app.png
    alt: RinUI
    width: 128
    height: 128
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: Components
      link: /BasicInput/Button

features:
  - icon:
      src: /assets/images/home/icons/navigationview.png
      alt: NavigationView
      width: 48
      height: 48
    title: Complete desktop shell
    details: Build navigation, pages, title bars, and window materials with QML controls designed to work together.
    link: /Navigation/NavigationView
    linkText: NavigationView
  - icon:
      src: /assets/images/home/icons/colorpicker.png
      alt: ColorPicker
      width: 48
      height: 48
    title: One theme everywhere
    details: Light, dark, and automatic mode share one token system, accent color, and motion language.
    link: /core/theme
    linkText: Theme system
  - icon:
      src: /assets/images/home/icons/button.png
      alt: Button
      width: 48
      height: 48
    title: Familiar QML controls
    details: Use familiar control names with polished Fluent states, from basic input to collections and dialogs.
    link: /BasicInput/Button
    linkText: Browse controls
---

## Why RinUI

RinUI is more than a collection of standalone controls. It provides a shared foundation for Qt Quick desktop applications by bringing windows, navigation, pages, themes, and common controls into one coherent API.

- **A complete window and page structure**: `FluentWindow` already combines `NavigationView`, the navigation bar, and the content area. Declare pages with `navigationItems`, then organize each screen with `FluentPage`.
- **Native desktop window behavior**: Windows builds can use Mica, Acrylic, and Tabbed backdrops, custom title bars, frameless windows, and standard window controls. macOS uses native traffic lights, while other platforms fall back safely.
- **A theme that reaches every control**: Light, dark, and automatic mode share one set of colors, radii, typography, and motion values. Changing the accent color updates controls, icons, and status colors together.
- **Familiar QML names with complete Fluent states**: `Button`, `ComboBox`, `ListView`, `Dialog`, and other controls keep familiar APIs while adding polished hover, pressed, focus, and disabled states.
- **Icons and localization are ready to use**: Fluent System Icons are available through `ic_fluent_*` names, and the project includes translation resources for extending application copy.
- **A short Python startup path**: Create a `QApplication`, then load the interface with `RinUIWindow("main.qml")`. Configuration, theme management, and platform window effects are handled by the launcher.

## A look at RinUI

This is the current RinUI Gallery. Switch the documentation theme and the screenshot will follow the matching light or dark interface.

<VPImage
  :image="{
    light: '/assets/images/home/gallery-light.png',
    dark: '/assets/images/home/gallery-dark.png',
    alt: 'RinUI Gallery'
  }"
  width="960"
/>

## Where RinUI fits

RinUI is intended for projects that need a desktop window and complete interactions while keeping the development speed of QML:

- Desktop tools and content managers built with PySide6 and Qt Quick.
- Internal applications that want a Fluent visual language without rebuilding the window shell and control states from scratch.
- Prototypes or actively developed products that need navigation, settings pages, dialogs, tables, date selection, and theme switching.

RinUI is not a replacement for a web component library, nor is it intended for projects that must remain entirely on Qt Widgets.

## Start with QML you already know

<div align="center">
  <img src="/assets/images/docs/FluentWindow/example.png" alt="Start with QML you already know">
</div>

```qml
import QtQuick
import RinUI

FluentWindow {
    width: 960
    height: 640

    navigationItems: [
        {
            title: "Home",
            icon: "ic_fluent_home_20_regular",
            page: Qt.resolvedUrl("pages/Home.qml")
        }
    ]
}
```

Create the application window from Python:

```python
import sys

from PySide6.QtWidgets import QApplication
from RinUI import RinUIWindow

app = QApplication(sys.argv)
window = RinUIWindow("main.qml")
sys.exit(app.exec())
```

Continue with:

- [Getting started](/guide/getting-started)
- [Window and page structure](/Windowing/FluentWindow)
- [NavigationView](/Navigation/NavigationView)
- [Theme system and window backdrops](/core/theme)

::: info Project status
RinUI is still under active development. APIs and visual details may continue to change. It is best suited to prototypes, internal tools, and projects that can absorb iteration costs; review release changes before upgrading.
:::

## Acknowledgments

Thanks to the contributors and maintainers who help build RinUI.

[![Contributors](http://contrib.nn.ci/api?repo=rinlit-233-shiroko/Rin-UI)](https://github.com/RinLit-233-shiroko/Rin-UI/graphs/contributors)
