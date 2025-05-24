# SelectorBar

## Introduction

A SelectorBar looks like a Button, but works like a CheckBox. It typically has two states, checked (on) or unchecked (off).

## Examples

### A Basic SelectorBar

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

### SelectorBar with Loader

::: code-group

```qml
Column {
    width: parent.width
    spacing: 0
    SelectorBar {
        id: selectorBar
        currentIndex: 0
        model: [
            { text: "Page1", page: page1 }, // Assuming page1 is defined elsewhere
            { text: "Page2", page: page2 }, // Assuming page2 is defined elsewhere
            { text: "Page3", page: page3 }, // Assuming page3 is defined elsewhere
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