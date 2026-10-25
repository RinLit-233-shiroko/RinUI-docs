# Project Structure and Resources

This guide covers QML imports, a practical application layout, and common resource-path issues. RinUI is a Qt Quick component library: import its QML module from QML and use PySide6 to start the Qt application from Python.

## Import RinUI

Import the modules at the top of a QML file that uses RinUI controls:

```qml
import QtQuick
import QtQuick.Controls
import RinUI
```
```

After installing the Python package, `import RinUI` is normally available to QML. Keep the application and window objects alive until the event loop exits:

```python
import sys
from PySide6.QtWidgets import QApplication
from RinUI import RinUIWindow

app = QApplication(sys.argv)
window = RinUIWindow("main.qml")
sys.exit(app.exec())
```

When running from a source checkout rather than an installed package, follow the launch setup used by the repository's Gallery or examples. Do not assume that any working directory can resolve the local `RinUI` module automatically.

## Recommended Application Layout

Separate Python startup code, QML pages, and static assets by responsibility:

```text
my-app/
├── main.py
├── main.qml
├── pages/
│   └── HomePage.qml
└── assets/
    ├── images/
    └── fonts/
```

Keep application pages and images in the application project. Import RinUI controls with `import RinUI`; there is no need to copy component source files into each page.

## Resource Paths

QML relative URLs are generally resolved relative to the QML file that declares them. Use a relative path or a Qt resource URL for project assets, and ensure the packaging configuration includes those files.

```qml
Image {
    source: "assets/images/logo.png"
}
```
```

For pages in subdirectories, adjust the relative path from that page's location. For stable packaged resources, include the files in a Qt resource collection and reference them with a `qrc:/...` URL rather than relying on the process working directory.

## QML Modules and Components

Split pages into separate `.qml` files and compose them from parent pages. Keep application-specific pages separate from reusable components. Use the component documentation and the installed version's source as the authority for names and properties; APIs can change during development.

When debugging import issues, verify that:

1. The Python interpreter has RinUI and its dependencies installed.
2. The QML file contains `import RinUI` with the correct capitalization.
3. The startup entry point loads the intended QML file.
4. Custom QML module directories and their `qmldir` files are included in the import path.

## HiDPI Sizing

Qt Quick `width`, `height`, and `font.pixelSize` use logical pixels. Use design dimensions directly; multiplying them by the device-pixel ratio again causes double scaling. For adaptive windows, prefer anchors, layouts, and sensible minimum or maximum sizes over binding every dimension to physical screen pixels.

See [Theme](/core/theme) and [Utils](/core/utils) for global theme and helper APIs.
