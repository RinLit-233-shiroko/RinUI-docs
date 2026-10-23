# NavigationView（导航视图）

`NavigationView` 由垂直导航栏、页面栈和内容卡片组成，负责 RinUI 应用中的顶层页面切换。`FluentWindow` 已内置一个 `NavigationView`，通常不需要手动创建；在自定义窗口或嵌入式布局中才需要单独使用。

启动时会优先加载 `defaultPage`；若未设置，则加载 `navigationItems` 第一项的 `page`。因此至少要提供一个有效页面，不能把页面路径留作不存在的示例文件。

## 在 FluentWindow 中使用

下面的示例以 Gallery 中的 `SamplePage.qml` 作为首页内容，展示导航栏与实际页面的组合效果。

<div align="center">
  <img src="/assets/images/docs/NavigationView/在-fluentwindow-中使用.png" alt="FluentWindow 中的 NavigationView 示例">
</div>

最省事的方式是直接在 `FluentWindow` 上声明导航项：

```qml
FluentWindow {
    width: 1100
    height: 720

    navigationItems: [
        {
            title: qsTr("首页"),
            page: homePage,
            icon: "ic_fluent_home_20_regular"
        },
        {
            title: qsTr("文档"),
            page: homePage,
            icon: "ic_fluent_document_20_regular",
            subItems: [
                {
                    title: qsTr("入门"),
                    page: homePage
                }
            ]
        },
        {
            title: qsTr("设置"),
            page: homePage,
            icon: "ic_fluent_settings_20_regular",
            position: Position.Bottom
        }
    ]

    Component {
        id: homePage
        Item {
            Text {
                anchors.centerIn: parent
                text: qsTr("Home page")
                font.pixelSize: 24
            }
        }
    }
}
```

导航项中的 `page` 可以是 QML 文件路径、`Qt.resolvedUrl()` 结果或 `Component`。`position` 可使用 `Position.Top`、`Position.Center`、`Position.None` 或 `Position.Bottom`；不设置时位于中部导航区。

## 默认页面

页面级导航通常通过 `FluentWindow.navigationItems` 配置。窗口会自动创建 `NavigationView`，并加载 `defaultPage` 指定的页面；如果不设置 `defaultPage`，则加载导航项中的第一个页面。

下方截图同样使用 Gallery 的 `SamplePage.qml`，便于直观看到应用启动后页面内容的呈现方式。

<div align="center">
  <img src="/assets/images/docs/NavigationView/默认页面.png" alt="NavigationView 默认页面示例">
</div>

```qml
FluentWindow {
    width: 1100
    height: 720
    defaultPage: homePage

    navigationItems: [
        {
            title: qsTr("Home"),
            page: homePage,
            icon: "ic_fluent_home_20_regular"
        }
    ]

    Component {
        id: homePage
        Item {
            Text {
                anchors.centerIn: parent
                text: qsTr("Home page")
                font.pixelSize: 24
            }
        }
    }
}
```

## 导航行为

- `defaultPage` 为空时，自动加载 `navigationItems` 的第一项。
- 窗口宽度低于 `minimumExpandWidth`（默认 `900`）时，导航栏会自动折叠。
- `navExpandWidth: 0` 使用根据标题动态计算的宽度；大于 `0` 时使用固定宽度。
- 动态宽度会限制在 `minNavbarWidth` 与 `maxNavbarWidth` 之间，默认约为 `200` 到 `400`。
- `appLayerEnabled` 控制内容卡片背景；`contentCornerClipEnabled` 控制圆角裁切。

## 页面切换方法

### `push(page, properties)`

导航到页面并把当前页加入历史。`properties` 会作为创建参数传给目标页面：

```qml
navigationView.push(Qt.resolvedUrl("pages/Detail.qml"), {
    itemId: 42
})
```

### `pushStack(page, properties)`

`pushStack()` 是 `safePush(page, false, true, properties)` 的便捷入口，表示本次切换来自导航栏流程。它最终仍通过 `safePush()` 使用 `stackView.replace(...)` 替换当前页面，并不会创建一套独立的 StackView 历史。

返回历史由 `NavigationView.lastPages` 管理，保留最近两个页面。需要由业务代码明确控制返回行为时，可以调用这个入口；不要把它理解为原生 `StackView.push()`。

### `pop()` / `safePop()`

返回上一个页面。`safePop()` 在历史为空时会安全地不做操作；导航栏返回按钮内部使用它。

### `safePush(page, reload, fromNavigation, properties)`

带完整控制参数的低层方法。普通业务代码优先使用 `push()`，需要重新加载当前页面或从导航栏触发跳转时再使用 `safePush()`。

## 信号


`pageChanged()` 在 `currentPage` 更新之后、`stackView.replace(...)` 的页面替换动画完成之前发出。它适合同步导航状态、标题或选中项，但此时目标页面可能尚未完成进入动画：

```qml
NavigationView {
    onPageChanged: {
        console.log("当前页面：", currentPage)
    }
}
```

如果逻辑依赖目标页面已经完成布局或动画，请监听目标页面自身的 `Component.completed`、`StackView.statusChanged` 或对应动画结束事件，而不是假定 `pageChanged()` 已代表切换完成。

## 重要属性

| 属性 | 默认值 | 说明 |
| --- | --- | --- |
| `navigationItems` | `[]` | 导航项数组。 |
| `currentPage` | `""` | 当前页面的键或地址。 |
| `defaultPage` | `""` | 启动页面。 |
| `lastPages` | `[]` | 最多保留两个页面的返回历史。 |
| `navExpandWidth` | `0` | 展开宽度；`0` 表示动态宽度。 |
| `navMinimumExpandWidth` | `900` | 自动折叠的窗口宽度阈值。 |
| `appLayerEnabled` | `true` | 内容区域的应用层背景。 |
| `contentCornerClipEnabled` | `true` | 是否裁切内容卡片圆角。 |
| `pushEnterFromY` | `height / 2` | 页面进入动画的起始纵向偏移。 |

## 相关组件

- [NavigationBar](/zh/Navigation/NavigationBar)：底层的垂直导航栏。
- [FluentWindow](/zh/Windowing/FluentWindow)：内置 `NavigationView` 的窗口。
- [FluentPage](/zh/Windowing/FluentPage)：导航页面的标准内容容器。
- [Segmented](/zh/Navigation/Segmented) 与 [SelectorBar](/zh/Navigation/SelectorBar)：其他导航类控件。
