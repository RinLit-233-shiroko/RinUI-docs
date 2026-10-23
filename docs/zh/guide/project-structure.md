# 项目结构与资源

本文介绍 RinUI 的 QML 导入方式、项目资源组织建议，以及开发过程中常见的路径问题。RinUI 是基于 Qt Quick 的组件库，QML 组件通过模块导入使用，Python 侧则由 PySide6 启动 Qt 应用。

## 导入 RinUI

在使用 RinUI 控件的 QML 文件顶部导入模块：

```qml
import QtQuick
import QtQuick.Controls
import RinUI
```

安装 Python 包后，通常可直接使用 `import RinUI`。在 Python 中创建 Qt 应用并加载 QML 时，应确保在应用退出前保持应用对象与窗口对象存活：

```python
import sys
from PySide6.QtWidgets import QApplication
from RinUI import RinUIWindow

app = QApplication(sys.argv)
window = RinUIWindow("main.qml")
sys.exit(app.exec())
```

如果使用源码副本而非已安装包，请遵循仓库提供的 Gallery 或示例工程的启动方式；不要假设任意工作目录下都能自动找到本地 `RinUI` 模块。

## 推荐的应用目录

可以按职责拆分 Python 启动代码、QML 页面和静态资源。例如：

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

应用自己的页面和图片放在项目目录中；RinUI 提供的控件通过 `import RinUI` 使用，不需要把组件源码复制到每个页面。

## 资源路径

QML 的相对 URL 通常相对于声明该 URL 的 QML 文件解析。对于项目内资源，可以使用相对路径或 Qt 资源系统 URL；选定一种资源组织方式后，确保打包配置也包含对应文件。

```qml
Image {
    source: "assets/images/logo.png"
}
```

如果页面位于子目录中，应按页面文件所在位置调整相对路径。需要让资源随应用稳定发布时，可将资源纳入 Qt 资源文件，并通过 `qrc:/...` URL 引用，避免依赖启动时的当前工作目录。

## QML 模块与组件

项目中的页面可以拆分为独立 `.qml` 文件，再由父页面组合。建议将业务页面与通用组件分开，组件命名和属性以 RinUI 对应组件文档及当前版本源码为准。组件 API 会随开发迭代调整；遇到与旧示例不一致时，请优先核对所安装版本。

调试导入问题时，可先确认：

1. Python 使用的解释器中已安装 RinUI 及其依赖；
2. QML 文件确实包含 `import RinUI`，且模块名大小写正确；
3. 启动入口加载的是预期的 QML 文件，而不是另一份同名文件；
4. 自定义 QML 模块的目录结构及 `qmldir` 与其导入路径一致。

## HiDPI 尺寸

Qt Quick 的 `width`、`height` 和 `font.pixelSize` 使用逻辑像素。通常直接填写设计尺寸即可，不要再乘设备像素比，否则会发生重复缩放。若需要适配不同窗口大小，应优先使用 anchors、布局和合理的最小/最大尺寸，而不是将所有尺寸绑定到屏幕物理像素。

更多全局主题和辅助属性请参阅[主题系统](/zh/core/theme)与[辅助工具](/zh/core/utils)。
