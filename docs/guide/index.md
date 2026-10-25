# What is RinUI?

RinUI is a UI component library for **Qt Quick (QML)** applications. Inspired by Fluent Design, it provides controls, theming, and utilities that help developers build desktop applications with a consistent appearance and clear interactions.

> [!TIP]
> To try RinUI, follow [Getting Started](getting-started) to install it and run the examples.

```qml
import QtQuick
import QtQuick.Controls
import RinUI
```

Import the `RinUI` module to compose its controls in an existing Qt Quick project. Python applications can use PySide6 to start the app and load QML. RinUI does not require rewriting the UI in another language or framework; application pages remain QML.

## What RinUI Provides

- **Common UI components**: buttons, input controls, navigation, popups, layouts, and status information. Browse the component documentation for properties, signals, and examples.
- **Fluent-inspired design**: clear hierarchy, lightweight surfaces, and consistent interaction details.
- **Theming**: light and dark appearance settings. See [Theme](/core/theme) for configuration.
- **QML workflow**: import the module and continue using Qt Quick layouts, bindings, and composition.

## Suitable Projects

RinUI is a foundation for desktop applications built with Qt Quick or QML when you want to reduce repetitive UI work or adopt a consistent Fluent-inspired visual language. It focuses on UI components and related utilities; business logic, data models, and application architecture remain the responsibility of the application.

## Project Status

RinUI is under active development. Component coverage, APIs, and theming may change between releases. Refer to the documentation for the version you have installed, pin dependency versions for release projects, and review affected controls when upgrading.

## Where to Start

- New users: follow [Getting Started](getting-started) to install RinUI and run an example.
- Organizing QML pages and assets: read [Project Structure and Resources](/guide/project-structure).
- Finding a control: choose a component from the sidebar to view its usage and runnable examples.
- Global configuration: see [Theme](/core/theme) and [Utils](/core/utils).

## Acknowledgments

RinUI's implementation and design draw on these projects and resources:

- [Qt / Qt Quick](https://www.qt.io/)
- [Fluent Design System](https://fluent2.microsoft.design/)
- [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons/)

Thanks to everyone who contributes to [RinUI](https://github.com/RinLit-233-shiroko/Rin-UI).
