# SelectorBar（选择器栏）

`SelectorBar` 用于在一小组内容视图之间切换。它基于 Qt Quick `TabBar`，但本身不绘制外层容器背景；每个 `SelectorBarItem` 通过底部指示器表达当前选择，适合放在页面标题区或内容区域上方。

## 基本用法


<div align="center">
  <img src="/assets/images/docs/SelectorBar/基本用法.png" alt="基本用法 示例">
</div>

```qml
SelectorBar {
    currentIndex: 0

    SelectorBarItem {
        text: qsTr("最近")
        icon.name: "ic_fluent_clock_20_regular"
    }

    SelectorBarItem {
        text: qsTr("共享")
        icon.name: "ic_fluent_share_20_regular"
    }

    SelectorBarItem {
        text: qsTr("收藏")
        icon.name: "ic_fluent_star_20_regular"
    }
}
```

外层容器由使用方决定。常见做法是放在 `Frame`、页面标题区域或自定义分隔线旁，而不是依赖 `SelectorBar` 自己提供卡片背景。

## 切换内容


<div align="center">
  <img src="/assets/images/docs/SelectorBar/切换内容.png" alt="切换内容 示例">
</div>

使用 `currentIndex` 配合 `Loader` 或 `StackLayout`，可以让选择项与内容视图保持同步：

```qml
Column {
    width: parent.width

    SelectorBar {
        id: selector
        currentIndex: 0

        SelectorBarItem { text: qsTr("概览") }
        SelectorBarItem { text: qsTr("详情") }
        SelectorBarItem { text: qsTr("历史") }
    }

    Loader {
        width: parent.width
        height: 400
        sourceComponent: [
            overviewPage,
            detailPage,
            historyPage
        ][selector.currentIndex]
    }
}
```

如果切换的是完整应用页面并需要返回历史，请使用 [`NavigationView`](/zh/Navigation/NavigationView)。

## 动态项目


<div align="center">
  <img src="/assets/images/docs/SelectorBar/动态项目.png" alt="动态项目 示例">
</div>

`SelectorBar` 继承 `TabBar`，可以用 `Repeater` 创建项目：

```qml
SelectorBar {
    id: selector

    Repeater {
        model: [
            { text: qsTr("最近"), page: recentPage },
            { text: qsTr("收藏"), page: favoritePage }
        ]

        SelectorBarItem {
            text: modelData.text
        }
    }
}
```

## 状态与事件


<div align="center">
  <img src="/assets/images/docs/SelectorBar/状态与事件.png" alt="状态与事件 示例">
</div>

- `currentIndex`：当前选择项索引，继承自 `TabBar`。
- `currentItem`：当前选择项，继承自 `TabBar`。
- `enabled`：禁用整个选择器栏。
- `SelectorBarItem.text`：项目文本。
- `SelectorBarItem.icon.name`：项目图标名，使用 Fluent 图标。

```qml
SelectorBar {
    onCurrentIndexChanged: {
        console.log("当前页签：", currentIndex)
    }
}
```

## 与 Segmented 的区别

[`Segmented`](/zh/Navigation/Segmented) 显示完整的边框和填充背景，适合作为紧凑的分段选择器。`SelectorBar` 更轻量，强调标题与当前页签，不应把两者混用在同一组导航中。

## 相关组件

- [Segmented](/zh/Navigation/Segmented)：带完整容器样式的分段控件。
- [NavigationView](/zh/Navigation/NavigationView)：完整页面导航和返回栈。
- [Frame](/zh/ListAndCollections/Frame)：为选择器栏提供外层分组容器。
