---
layout: home

hero:
  name: "Qt Quick + PySide"
  text: "Open-source Fluent UI for desktop applications"
  tagline: "Windows, navigation, themes, and ready-to-use controls for desktop apps, built with the QML workflow you already know."
  image:
    light:
      src: /assets/images/brand/rinui-vertical-light.png
      width: 128
      height: 128
    dark:
      src: /assets/images/brand/rinui-vertical-dark.png
      width: 128
      height: 128
    alt: RinUI
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

RinUI gives Qt Quick desktop applications one reusable foundation for windows, navigation, pages, themes, and familiar controls.

- **A complete window structure**: `FluentWindow`, `NavigationView`, and `FluentPage` work together out of the box.
- **Native desktop behavior**: Use Mica, Acrylic, custom title bars, and standard window controls on Windows.
- **One coherent design system**: Themes, controls, icons, translations, and the Python entry point share the same API.

<GalleryCarousel section="home" />

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
