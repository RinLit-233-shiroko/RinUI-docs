---
layout: home

hero:
  name: "Qt Quick + PySide"
  text: "面向桌面应用的 Fluent 风格开源 UI 库"
  tagline: "为桌面应用提供窗口、导航、主题和常用控件，保留熟悉的 QML 开发方式。"
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
      text: 快速开始
      link: /zh/guide/getting-started
    - theme: alt
      text: 浏览组件
      link: /zh/BasicInput/Button

features:
  - icon:
      src: /assets/images/home/icons/navigationview.png
      alt: NavigationView
      width: 48
      height: 48
    title: 完整的桌面应用结构
    details: 使用 NavigationView、FluentPage 与标题栏组合出完整的导航、页面与窗口体验。
    link: /zh/Navigation/NavigationView
    linkText: NavigationView
  - icon:
      src: /assets/images/home/icons/colorpicker.png
      alt: ColorPicker
      width: 48
      height: 48
    title: 全局一致的主题
    details: 浅色、深色与自动模式共享同一套颜色、强调色和动效语言。
    link: /zh/core/theme
    linkText: 主题系统
  - icon:
      src: /assets/images/home/icons/button.png
      alt: Button
      width: 48
      height: 48
    title: 熟悉的 QML 控件
    details: 保留熟悉的控件名称，同时提供完整的 Fluent 状态、基础输入、集合与对话框。
    link: /zh/BasicInput/Button
    linkText: 浏览控件
---

## 为什么选择 RinUI

RinUI 为 Qt Quick 桌面应用提供一套可复用的界面基础，统一窗口、导航、页面、主题和常用控件的使用方式。

- **完整的窗口结构**：`FluentWindow`、`NavigationView` 与 `FluentPage` 开箱即可组合使用。
- **原生桌面体验**：Windows 支持 Mica、Acrylic、自定义标题栏和标准窗口控制。
- **统一的设计系统**：主题、控件、图标、多语言资源与 Python 启动入口共享一致 API。

<GalleryCarousel section="home" />

## 适合哪些项目

RinUI 更适合需要桌面窗口和完整交互、又希望保留 QML 开发效率的项目：

- 使用 PySide6 与 Qt Quick 构建的桌面工具和内容管理器。
- 希望采用 Fluent 视觉语言，但不想从零编写窗口框架与控件状态的内部应用。
- 需要导航、设置页、对话框、表格、日期选择和主题切换等常用能力的原型或持续迭代项目。

如果你只需要网页组件，或者项目必须完全依赖 Qt Widgets，RinUI 并不是对应场景的替代品。

## 从熟悉的 QML 开始


<div align="center">
  <img src="/assets/images/docs/FluentWindow/example.png" alt="使用 FluentWindow 与 SamplePage 的示例界面">
</div>

```qml
import QtQuick
import RinUI

FluentWindow {
    width: 960
    height: 640

    navigationItems: [
        {
            title: "首页",
            icon: "ic_fluent_home_20_regular",
            page: Qt.resolvedUrl("pages/Home.qml")
        }
    ]
}
```

在 Python 侧创建应用窗口：

```python
import sys

from PySide6.QtWidgets import QApplication
from RinUI import RinUIWindow

app = QApplication(sys.argv)
window = RinUIWindow("main.qml")
sys.exit(app.exec())
```

进一步阅读：

- [从零运行 RinUI](/zh/guide/getting-started)
- [窗口与页面结构](/zh/Windowing/FluentWindow)
- [NavigationView 导航容器](/zh/Navigation/NavigationView)
- [主题系统与窗口背景](/zh/core/theme)

::: info 项目状态
RinUI 仍在持续开发中。接口和视觉细节可能继续调整，建议先用于原型、内部工具和可接受迭代成本的项目，并在升级前阅读版本变更。
:::

## 致谢

[![Contributors](http://contrib.nn.ci/api?repo=rinlit-233-shiroko/Rin-UI)](https://github.com/RinLit-233-shiroko/Rin-UI/graphs/contributors)
