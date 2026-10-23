# SelectorBar

`SelectorBar` switches between a small set of content views. It extends Qt Quick `TabBar` but does not draw its own outer container background. Each `SelectorBarItem` uses an underline indicator to show selection, making it suitable above a title area or content region.

<VPImage
  :image="{
    light: '/assets/images/examples/SelectorBar-light.png',
    dark: '/assets/images/examples/SelectorBar-dark.png',
    alt: 'SelectorBar examples in light and dark themes'
  }"
  width="1000"
/>

## Basic Usage

```qml
SelectorBar {
    currentIndex: 0

    SelectorBarItem {
        text: qsTr("Recent")
        icon.name: "ic_fluent_clock_20_regular"
    }

    SelectorBarItem {
        text: qsTr("Shared")
        icon.name: "ic_fluent_share_20_regular"
    }

    SelectorBarItem {
        text: qsTr("Favorites")
        icon.name: "ic_fluent_star_20_regular"
    }
}
```

The surrounding container belongs to the application. Place it inside a `Frame`, page header, or near a divider instead of expecting `SelectorBar` to provide a card background.

## Switching Content

Combine `currentIndex` with `Loader` or `StackLayout` to keep the selected tab and content synchronized:

```qml
Column {
    width: parent.width

    SelectorBar {
        id: selector
        currentIndex: 0

        SelectorBarItem { text: qsTr("Overview") }
        SelectorBarItem { text: qsTr("Details") }
        SelectorBarItem { text: qsTr("History") }
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

For complete application pages with back history, use [`NavigationView`](/Navigation/NavigationView).

## Dynamic Items

`SelectorBar` inherits `TabBar`, so `Repeater` can create its items:

```qml
SelectorBar {
    id: selector

    Repeater {
        model: [
            { text: qsTr("Recent"), page: recentPage },
            { text: qsTr("Favorites"), page: favoritePage }
        ]

        SelectorBarItem {
            text: modelData.text
        }
    }
}
```

## States and Events

- `currentIndex`: selected index, inherited from `TabBar`.
- `currentItem`: selected item, inherited from `TabBar`.
- `enabled`: disables the entire bar.
- `SelectorBarItem.text`: item label.
- `SelectorBarItem.icon.name`: Fluent icon name.

```qml
SelectorBar {
    onCurrentIndexChanged: {
        console.log("Current tab:", currentIndex)
    }
}
```

## Compared with Segmented

[`Segmented`](/Navigation/Segmented) draws a complete bordered and filled container for compact exclusive choices. `SelectorBar` is lighter and emphasizes the title and active tab. Do not mix both styles within one navigation group.

## Related Components

- [Segmented](/Navigation/Segmented): segmented control with a filled container.
- [NavigationView](/Navigation/NavigationView): full page navigation and back stack.
- [Frame](/ListAndCollections/Frame): surrounding group container for the bar.
