# Getting Started

## Gallery Example
You can download the Gallery example program from the [Releases Page](https://github.com/RinLit-233-shiroko/Rin-UI/releases) of the RinUI repository and run it to experience the basic functionalities of RinUI.

## Installation & Testing
### Python

You can install RinUI via pip (TestPyPi):
>[!TIP]
> Before installation, it is recommended that you build a Python virtual environment.
> After RinUI is perfected, RinUI will be released to PyPi.
>
> Currently, the version of TestPyPi may not follow the latest version of the repository.

::: code-group

```bash [PySide6]
pip install PySide6 darkdetect  
# There is no Release for these two packages in TestPypi. When RinUI is released to PyPi, this step can be omitted.
pip install -i https://test.pypi.org/simple/ RinUI --no-deps
```
:::

Then, you can import the RinUI package into your QML project and Python code to start using it:

::: code-group
```qml [main.qml]
import QtQuick
import QtQuick.Controls
import QtQuick.Window
import RinUI  // Just import this library into your existing project // [!code highlight]

// ↓ Remember to replace the window type with RinUI's window type, such as FluentWindowBase, FluentWindow, etc. (please refer to the documentation for details)
FluentWindowBase { // [!code highlight]
    width: 640
    height: 480
    visible: true
    title: qsTr("Hello World")
    
    Row {
        anchors.bottom: parent.bottom
        anchors.horizontalCenter: parent.horizontalCenter
        anchors.margins: 16
        spacing: 4
        Button {
            highlighted: true
            text: qsTr("Click me!")
            onClicked: dialog.open()

            Dialog {
                id: dialog
                modal: true
                title: qsTr("Dialog")
                Text {
                    text: qsTr("This is a dialog.")
                }
                standardButtons: Dialog.Ok | Dialog.Cancel
            }
        }
        Button {
            text: qsTr("Button")
        }
    }
}
```

```python
import sys
from PySide6.QtWidgets import QApplication

import RinUI
from RinUI import RinUIWindow


if __name__ == '__main__':
    print(RinUI.__file__)
    app = QApplication(sys.argv)
    gallery = RinUIWindow("main.qml")
    app.exec()
```
:::

Finally, you should see the following effect:

![简易示例](/assets/images/simple-demo.png)


## Further Exploration…

1. Learn how to use common controls in QML;
2. Install RinUI and import it into your project;
3. Try running the RinUI Gallery example program;
4Read the RinUI documentation to learn about its features.