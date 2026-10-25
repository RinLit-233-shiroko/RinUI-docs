---
layout: home

hero:
  name: "RinUI"
  text: "用 Qt Quick 构建 Fluent 桌面应用"
  tagline: "面向 Qt Quick 的 Fluent Design UI 库，提供原生窗口集成、完整控件与统一的主题系统。"
  image:
    src: /assets/images/home/rinui-app.png
    alt: RinUI
    width: 128
    height: 128
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

RinUI 为 Qt Quick 桌面应用提供一套可复用的界面基础：窗口、导航、页面、主题和常用控件使用同一套 API，减少重复搭建外壳和统一视觉状态的工作。

- **窗口与页面开箱即用**：`FluentWindow` 已组合好 `NavigationView`、导航栏和内容区域。通过 `navigationItems` 声明页面入口，再用 `FluentPage` 组织标题、正文和页脚。
- **贴近原生桌面体验**：Windows 支持 Mica、Acrylic 与 Tabbed 背景，并提供无边框窗口、自定义标题栏和窗口控制按钮；macOS 使用原生交通灯按钮，其他平台会回退到普通背景。
- **主题覆盖整个应用**：浅色、深色和跟随系统模式共享颜色、圆角、字体与动效参数。修改强调色后，控件、图标和状态色会同步更新。
- **熟悉的控件，完整的 Fluent 状态**：`Button`、`ComboBox`、`ListView`、`Dialog` 等控件沿用常见用法，并包含悬停、按下、焦点和禁用状态。
- **图标与多语言资源现成可用**：可直接通过 `ic_fluent_*` 名称使用 Fluent System Icons，也可基于内置语言资源扩展界面文案。
- **Python 集成简单**：创建 `QApplication` 后，用 `RinUIWindow("main.qml")` 加载界面；配置、主题和平台窗口效果由启动器处理。

## 实际界面

下面是 RinUI Gallery 在当前版本中的真实界面。切换文档的亮色或深色主题，截图也会同步切换。

<VPImage
  :image="{
    light: '/assets/images/home/gallery-light.png',
    dark: '/assets/images/home/gallery-dark.png',
    alt: 'RinUI Gallery'
  }"
  width="960"
/>

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
