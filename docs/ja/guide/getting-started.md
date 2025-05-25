# はじめに

## ギャラリーの例
RinUI リポジトリの[リリース](https://github.com/RinLit-233-shiroko/Rin-UI/releases)ページからギャラリーのサンプルプログラムをダウンロードし、実行することで RinUI の基本的な機能を体験できます。

## インストールとテスト
### Python

pip (PyPi) を介して RinUI をインストールできます：
>[!TIP]
> インストール前に、Python の仮想環境を構築することをお勧めします。

::: code-group

```bash [PySide6]
pip install RinUI
```
:::

次に、RinUI パッケージを QML プロジェクトと Python コードにインポートして使用を開始できます：

::: code-group
```qml [main.qml]
import QtQuick
import QtQuick.Controls
import QtQuick.Window
import RinUI  // 既存のプロジェクトにこのライブラリをインポートするだけ // [!code highlight]


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

最後に、次のような効果が表示されるはずです：

![簡易示例](/assets/images/simple-demo.png)


## さらなる探求…

1. QML で一般的なコントロールを使用する方法を学ぶ；
2. RinUI をインストールし、プロジェクトにインポートする；
3. RinUI ギャラリーのサンプルプログラムを実行してみる；
4. RinUI のドキュメントを読んで、その機能について学ぶ。
```
