# FluentWindow（Fluent 窗口）

`FluentWindow` 是 RinUI 为桌面应用准备的窗口入口。它在 `FluentWindowBase` 的标题栏、窗口边框和背景效果之上，组合好了 `NavigationView` 和页面内容区域。使用它时，通常只需要声明窗口尺寸、`navigationItems` 和各个页面。

<VPImage
  :image="{
    light: '/assets/images/examples/FluentWindow-light.png',
    dark: '/assets/images/examples/FluentWindow-dark.png',
    alt: 'FluentWindow 组件示例（亮色与暗色）'
  }"
  width="1000"
/>

## 基本用法


<div align="center">
  <img src="/assets/images/docs/FluentWindow/example.png" alt="基本用法 示例">
</div>

```qml
import QtQuick
import RinUI

FluentWindow {
    visible: true
    width: 1100
    height: 720

    navigationItems: [
        {
            title: qsTr("首页"),
            page: Qt.resolvedUrl("pages/Home.qml"),
            icon: "ic_fluent_home_20_regular"
        },
        {
            title: qsTr("设置"),
            page: Qt.resolvedUrl("pages/Settings.qml"),
            icon: "ic_fluent_settings_20_regular",
            position: Position.Bottom
        }
    ]
}
```

`defaultPage` 为空时，`NavigationView` 会加载 `navigationItems` 的第一项。需要固定启动页面时，可以显式设置 `defaultPage`。

示例中的首页使用 Gallery 的 `SamplePage.qml`，导航窗口启动后会直接展示该页面。

## Python 启动

`QApplication` 必须先于 `RinUIWindow` 创建：

```python
import sys

from PySide6.QtWidgets import QApplication
from RinUI import BackdropEffect, RinUIWindow, Theme

app = QApplication(sys.argv)
window = RinUIWindow("main.qml")

window.setIcon("assets/app-icon.png")
window.setTheme(Theme.Auto)
window.setBackdropEffect(BackdropEffect.Mica)

sys.exit(app.exec())
```

`setBackdropEffect()` 的背景效果只适用于 Windows。在非 Windows 平台请使用 `BackdropEffect.None_`，否则会抛出 `OSError`。

## 主要属性

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `navigationView` | `NavigationView` | 内部导航容器的实例。 |
| `navigationItems` | `var` | 导航项数组，转发到 `NavigationView.navigationItems`。 |
| `currentPage` | `string` | 当前页面地址，转发自导航容器。 |
| `defaultPage` | `string` | 启动页地址。为空时使用第一个导航项。 |
| `appLayerEnabled` | `bool` | 是否显示内容区域的应用层背景。 |
| `titleBarHeight` | `int` | 标题栏高度，默认取当前主题的 `windowTitleBarHeight`。 |
| `titleEnabled` | `bool` | 是否显示标题文字。 |
| `minimizeEnabled` / `maximizeEnabled` / `closeEnabled` | `bool` | 是否允许窗口操作。 |
| `minimizeVisible` / `maximizeVisible` / `closeVisible` | `bool` | 是否显示对应窗口按钮。 |
| `titleBarArea` | `Item` | 标题栏中央区域，可放入搜索框、状态文字等。 |

`FluentWindow` 的默认属性是 `content`，因此直接写在窗口下的项目会进入内容自由区域。若需要把页面纳入导航栈，请通过 `navigationItems` 声明页面，而不是把 `FluentPage` 直接作为子项叠放。

## 标题栏内容


<div align="center">
  <img src="/assets/images/docs/FluentWindow/example-2.png" alt="标题栏内容 示例">
</div>

```qml
FluentWindow {
    title: "RinUI Gallery"

    titleBarArea: AutoSuggestBox {
        width: 320
        placeholderText: qsTr("Search controls...")
    }
}
```

`titleBarArea` 默认位于标题栏中央。标题左侧的图标、返回按钮和窗口按钮由导航栏与 `FluentWindowBase` 负责，不需要重复创建。

## 窗口外观

RinUI 的窗口背景、圆角、边框和主题变化由 `FluentWindowBase` 统一处理。Windows 上可以结合 Mica、Acrylic、Tabbed 或 None 背景；macOS 使用原生交通灯按钮；其他系统回退到普通窗口背景。

更多主题调用参见[主题系统](/zh/core/theme)。

## 页面内容

页面内容示例同样采用 Gallery 的 `SamplePage.qml`，与 `NavigationView` 文档中的默认页面保持一致。

<div align="center">
  <img src="/assets/images/docs/FluentWindow/example.png" alt="FluentWindow 加载 SamplePage 示例">
</div>

每个导航页面通常继承 `FluentPage`：

```qml
// pages/Home.qml
import QtQuick
import RinUI

FluentPage {
    title: qsTr("首页")

    Text {
        Layout.fillWidth: true
        typography: Typography.Body
        text: qsTr("这是首页内容。")
    }
}
```

请勿同时在 `FluentWindow` 外部再创建一套 `NavigationView`，除非确实需要嵌入独立导航区域。常规应用应让 `FluentWindow` 管理唯一的顶层导航。

## 相关组件

- [FluentPage](/zh/Windowing/FluentPage)：页面内容、标题、页脚和宽度约束。
- [NavigationView](/zh/Navigation/NavigationView)：页面栈、导航项和跳转方法。
