# 快速开始

## Gallery 示例
您可在 RinUI 仓库的 [Releases 页面](https://github.com/RinLit-233-shiroko/Rin-UI/releases) 下载 Gallery 示例程序，并运行它来体验 RinUI 的基本功能。

## 安装 & 测试
### Python

您可以通过 pip (PyPi) 安装 RinUI：
>[!TIP]
> 在安装之前，推荐您构建一个 Python 虚拟环境。

::: code-group

```bash [PySide6]
pip install RinUI
```
:::

然后，您可以在您的 QML 项目和 Python 代码中导入 RinUI 包并开始使用：

::: code-group
```qml [main.qml]
import QtQuick
import QtQuick.Controls
import QtQuick.Window
import RinUI  // 仅需在您现有的项目中导入本库  // [!code highlight]


Window {
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

最后您应该会看到如下效果：

![简易示例](/assets/images/simple-demo.png)


## 进一步深入……

1. 了解 Qml 中常用控件的使用；
2. 安装 RinUI 并导入到您的项目中；
3. 可尝试体验 RinUI Gallery 示例程序；
4. 阅读 RinUI 文档，了解 RinUI 的各项功能。
