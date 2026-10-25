# SwipeView

`SwipeView` displays one page from a collection at a time and lets users move between pages. It is useful for image galleries, step-based content, and carousels. RinUI's component is an `Item` that forwards commonly used properties to an internal Qt Quick `SwipeView`.

## Basic Usage

Declare each page as a child of `SwipeView`; the pages fill the view area.

<div align="center">
  <img src="/assets/images/docs/SwipeView/basic-usage.png" alt="Basic Usage">
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
```

## Vertical Orientation

Set `orientation` to `Qt.Vertical` to move through pages vertically.


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
```

## Current Page and Interaction

Read or set the current page with `currentIndex`. Set `interactive: false` to disable gesture navigation; code can still change the index.


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
```

## Properties

| Property | Description |
| --- | --- |
| `currentIndex` | Index of the current page. |
| `count` | Number of pages. |
| `interactive` | Whether users can change pages with gestures. |
| `orientation` | Page direction: `Qt.Horizontal` or `Qt.Vertical`. |
| `horizontal` / `vertical` | Convenience direction properties. |
| `carel` | Whether previous/next buttons appear on hover (the spelling follows the component API). |

## With PageIndicator

Bind [PageIndicator](/PageIndicator) to `currentIndex` and `count` to show the current page position.
