# ListView

The `ListView` component is used to display a list of data items that can scroll vertically. It inherits from `QtQuick.Controls.Basic.ListView` and provides custom styling, item animations, and a default delegate based on `ListViewDelegate` for rendering items.

## Basic ListView with Default Delegate

A `ListView` requires a `model` to provide data. The default delegate (an instance of `ListViewDelegate`) can display simple text if the `textRole` property of the `ListView` is set correctly for the model.

<div align="center">
  <img src="/assets/images/ListAndCollections/ListView/listview-basic.png"> <!-- Placeholder: image path to be confirmed or created -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

ListModel {
    id: mySimpleModel
    ListElement { itemText: "Apple" }
    ListElement { itemText: "Banana" }
    ListElement { itemText: "Cherry" }
}

ListView {
    width: 200
    height: 250
    model: mySimpleModel
    textRole: "itemText" // Specifies which model property the default delegate should display
}
```
The default `ListViewDelegate` places this text in its `middleArea`.

## Customizing Item Appearance with `ListViewDelegate`

To create richer list items, you provide a custom instance of `ListViewDelegate` to the `delegate` property of the `ListView`. `ListViewDelegate` is itself a component that structures its content into three main areas: `leftArea`, `middleArea`, and `rightArea`.

<div align="center">
  <img src="/assets/images/ListAndCollections/ListView/listview-custom-delegate.png"> <!-- Placeholder: image path to be confirmed or created -->
</div>

```qml
import QtQuick 2.15
import RinUI // Ensures ListViewDelegate, IconWidget etc. are available

// ...

ListModel {
    id: contactModel
    ListElement { name: "Alice Wonderland"; status: "Online"; iconName: "ic_fluent_person_20_filled" }
    ListElement { name: "Bob The Builder"; status: "Offline"; iconName: "ic_fluent_person_20_regular" }
    ListElement { name: "Charlie Brown"; status: "Busy"; iconName: "ic_fluent_person_prohibited_20_filled" }
}

ListView {
    width: 300
    height: 300
    model: contactModel
    // textRole is not needed here as the custom delegate accesses model properties directly

    delegate: ListViewDelegate {
        // width is typically bound to ListView.view.width by the delegate itself
        // height can be adaptive based on content (default: contents.implicitHeight + 20)

        leftArea: IconWidget { 
            icon.name: model.iconName // Access model data directly
            size: 24
            // Layout.alignment: Qt.AlignVCenter // If leftArea were a Layout and had extra space
        }

        middleArea: [ // middleArea is a ColumnLayout, items are added as children
            Text {
                text: model.name 
                font.bold: true
                Layout.fillWidth: true 
            },
            Text {
                text: model.status
                font.pixelSize: 12
                color: Theme.currentTheme.colors.textSecondaryColor
                Layout.fillWidth: true
            }
        ]

        rightArea: Button { // rightArea is a RowLayout
            text: qsTr("View")
            flat: true
            Layout.alignment: Qt.AlignVCenter
            onClicked: {
                console.log("Viewing details for:", model.name);
                // ListView.view.currentIndex = index; // Delegate handles this by default
            }
        }
    }
}
```

### `ListViewDelegate` Customization Areas:
*   `leftArea`: An alias to the `data` property of an internal `Row`. Items added here appear on the left side of the delegate. Typically used for icons, avatars, or selection marks.
*   `middleArea`: An alias to the `data` property of an internal `ColumnLayout`. Items added here form the main content, arranged vertically. The default delegate provided by `ListView` (if you don't specify your own `delegate` component) places its single `Text` item here.
*   `rightArea`: An alias to the `data` property of an internal `RowLayout`. Items added here appear on the right side, often used for secondary actions, status indicators, or timestamps.

## Item Animations

RinUI's `ListView` includes built-in `Transition`s for `add`, `remove`, and `displaced` states. These provide opacity and scale animations for a smooth user experience when the model changes.

## ScrollBar

A vertical `RinUI.ScrollBar` is automatically included and configured with `policy: ScrollBar.AsNeeded`. It becomes visible when the content exceeds the `ListView`'s height.

## Key `ListView` Properties

*   `model`: `any` - The data model that provides items for the list (e.g., `ListModel`, JavaScript array, integer for item count).
*   `delegate`: `Component` - The QML component used to instantiate each item in the list. For custom item appearances, instantiate `ListViewDelegate` here and populate its `leftArea`, `middleArea`, or `rightArea` properties. If not specified, a default `ListViewDelegate` is used.
*   `textRole`: `string` - If using the implicit default delegate and your model provides complex objects (like `ListElement`s or JavaScript objects), this property specifies which role (property name) of the model item should be displayed as text by that default delegate.
*   `keyboardNavigation`: `bool` - Enables keyboard-based navigation between items. Defaults to `false` in RinUI's `ListView`.
*   `clip`: `bool` - (Inherited from `Item`, set to `true` by default in `ListView`) Determines if children are clipped to the view's boundaries.

**Inherited from `QtQuick.Controls.Basic.ListView`:**
*   Many standard properties such as `currentIndex`, `currentItem`, `count`, `orientation` (though RinUI's version is primarily styled and used for vertical lists), `spacing` (between delegates), `header`, `footer`, etc.
*   Standard methods like `positionViewAtIndex()`, `itemAt()`, etc.

## Signals

*   Standard signals from `ListView` like `clicked(int index)`, `activated(int index)`, `pressAndHold(int index)`, `currentItemChanged`, etc., are available.

## Related Components
*   `ListViewDelegate`: The component used to render each item in the `ListView`. Customizing this delegate is key to achieving rich list item appearances.
*   `ScrollBar`: Used internally for scrolling.

```
