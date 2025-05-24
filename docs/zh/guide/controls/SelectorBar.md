# 选择器栏（SelectorBar）

## 介绍

选择器栏看起来像一个按钮，但工作方式类似于 CheckBox。它通常有两个状态：选中（开）或未选中（关）。

## 示例

### 一个基本的选择器栏。

::: code-group

```qml
SelectorBar {
    model: [
        { text: "Recent", icon: "ic_fluent_clock_20_regular"},
        { text: "Shared", icon: "ic_fluent_share_20_regular"},
        { text: "Favorites", icon: "ic_fluent_star_20_regular"},
    ]
}
```

:::

### 带有 Loader 的选择器栏。

::: code-group

```qml
Column {
    width: parent.width
    spacing: 0
    SelectorBar {
        id: selectorBar
        currentIndex: 0
        model: [
            { text: "Page1", page: page1 }, // 假设 page1 在其他地方定义
            { text: "Page2", page: page2 }, // 假设 page2 在其他地方定义
            { text: "Page3", page: page3 }, // 假设 page3 在其他地方定义
        ]
    }
    Loader {
        width: parent.width
        height: 400
        sourceComponent: selectorBar.model[selectorBar.currentIndex].page
    }
}
```

:::