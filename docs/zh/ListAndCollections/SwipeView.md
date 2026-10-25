# 滑动视图 (SwipeView)

`SwipeView` 用于一次展示集合中的一个页面，并允许用户在页面之间切换。它适用于图片浏览、分步内容或卡片轮播。组件继承自 `Item`，并提供对内部 Qt Quick `SwipeView` 的常用属性转发。

## 基本用法

把每个页面作为 `SwipeView` 的子项；页面会填满视图区域。下面的静态图展示 Gallery 中实际运行的横向示例。

<div align="center">
  <img src="/assets/images/docs/SwipeView/basic-usage.png" alt="SwipeView 页面切换实际效果">
</div>

```qml
SwipeView {
    id: view
    width: 400
    height: 270
    currentIndex: 0

    Rectangle { color: "#E74856" }
    Rectangle { color: "#0078D4" }
    Rectangle { color: "#6B69D6" }
}
```

## 竖直方向

设置 `orientation` 为 `Qt.Vertical`，即可改为上下翻页：

```qml
SwipeView {
    width: 400
    height: 270
    orientation: Qt.Vertical

    Rectangle { color: "#E74856" }
    Rectangle { color: "#0078D4" }
    Rectangle { color: "#6B69D6" }
}
```

## 当前页与交互

通过 `currentIndex` 读取或设置当前页索引。`interactive: false` 可关闭手势切换；此时仍可由代码修改 `currentIndex`。

```qml
SwipeView {
    id: pages
    currentIndex: 1
    interactive: true
}

Button {
    text: qsTr("Next")
    onClicked: pages.currentIndex = (pages.currentIndex + 1) % pages.count
}
```

## 主要属性

| 属性 | 说明 |
| --- | --- |
| `currentIndex` | 当前页面索引。 |
| `count` | 页面数量。 |
| `interactive` | 是否允许用户手势切换。 |
| `orientation` | 页面方向，可使用 `Qt.Horizontal` 或 `Qt.Vertical`。 |
| `horizontal` / `vertical` | 方向便捷属性。 |
| `carel` | 是否在悬停时显示前后翻页按钮（沿用组件 API 拼写）。 |

## 与 PageIndicator 配合

需要提供当前页位置提示时，可将 [PageIndicator](/zh/PageIndicator) 与 `currentIndex`、`count` 绑定。
