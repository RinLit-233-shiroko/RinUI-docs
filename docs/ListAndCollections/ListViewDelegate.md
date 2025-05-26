# ListViewDelegate

The `ListViewDelegate` is a component used to define the visual representation of each item within a `ListView`. It inherits from `QtQuick.Controls.Basic.ItemDelegate` and provides a structured layout with customizable areas: `leftArea` (a `Row`), `middleArea` (a `ColumnLayout`), and `rightArea` (a `RowLayout`).

This component is typically instantiated within the `delegate` property of a `ListView` to create rich and interactive list items.

## Structure and Customization Areas

`ListViewDelegate` organizes its content into three main sections, allowing for flexible item layouts:

*   **`leftArea`**: Positioned on the left. Ideal for icons, avatars, checkboxes, or other leading visual elements. Items added here are arranged in a `Row`.
*   **`middleArea`**: Occupies the central space. Designed for primary and secondary text content, arranged vertically in a `ColumnLayout`. If you assign a single `Text` item to `middleArea`, it will be centered vertically within that item's allocated space in the column. If you provide a list of items, they will be stacked.
*   **`rightArea`**: Positioned on the right. Suitable for metadata, timestamps, action buttons, or other trailing elements, arranged in a `RowLayout`.

You populate these areas by assigning a QML Item or a list of QML Items to their respective aliased properties (`leftArea`, `middleArea`, `rightArea`).

<div align="center">
  <img src="/assets/images/ListAndCollections/ListViewDelegate/listviewdelegate-structure.png"> <!-- Placeholder: image path to be confirmed or created -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

ListView {
    width: 350
    height: 300
    model: ListModel {
        ListElement { titleText: "Meeting Notes", dateText: "Yesterday", iconSymbol: "ic_fluent_document_20_filled" }
        ListElement { titleText: "Project Alpha", dateText: "2023-10-26", iconSymbol: "ic_fluent_folder_20_filled" }
        ListElement { titleText: "Quick Reminder", dateText: "10:30 AM", iconSymbol: "ic_fluent_alert_20_regular" }
    }

    delegate: ListViewDelegate {
        // width is typically bound to ListView.view.width by the delegate itself
        // height is adaptive by default (contents.implicitHeight + 20)

        leftArea: IconWidget {
            icon.name: model.iconSymbol // Access model data for the icon
            size: 22
            Layout.alignment: Qt.AlignVCenter // Aligns icon within the Row of leftArea
        }

        middleArea: [ // middleArea takes a list of items for its ColumnLayout
            Text {
                text: model.titleText // Main text from model
                font.bold: true
                elide: Text.ElideRight
                Layout.fillWidth: true
            },
            Text {
                text: model.dateText // Secondary text from model
                font.pixelSize: 12
                color: Theme.currentTheme.colors.textSecondaryColor
                elide: Text.ElideRight
                Layout.fillWidth: true
            }
        ]

        rightArea: ToolButton { // Example: a ToolButton on the right
            icon.name: "ic_fluent_chevron_right_20_regular"
            flat: true
            size: 16
            Layout.alignment: Qt.AlignVCenter // Aligns button within the RowLayout of rightArea
            onClicked: {
                console.log("More options for:", model.titleText);
            }
        }
        
        onClicked: {
            console.log("Clicked on item:", model.titleText);
            // ListView.view.currentIndex is automatically updated by the delegate's default onClicked handler
        }
    }
}
```

## Key Properties of `ListViewDelegate`

*   `leftArea`: `list<Item>` (alias for `leftArea.data`) - QML Item(s) to be placed in the left section (internal `Row`).
*   `middleArea`: `list<Item>` (alias for `middleArea.data`) - A list of QML Item(s) to be placed in the central, vertically stacked section (internal `ColumnLayout`).
*   `rightArea`: `list<Item>` (alias for `rightArea.data`) - QML Item(s) to be placed in the right section (internal `RowLayout`).
*   `contents`: `list<Item>` (alias for `contents.data`) - Refers to the main internal `RowLayout` that holds `leftArea`, `middleArea`, and `rightArea`. Direct customization is typically done via the specific area properties.
*   `highlighted`: `bool` (from `ItemDelegate`) - Automatically bound to `ListView.isCurrentItem` in RinUI's `ListViewDelegate`. This is used to change the background color for the current item.
*   `focusPolicy`: `Qt.FocusPolicy` - Set to `Qt.StrongFocus` by default, allowing the delegate to receive keyboard focus.

The background of `ListViewDelegate` is a `Rectangle` styled to react to `pressed`, `highlighted`, and `hovered` states. It also includes a visual `Indicator` (a small vertical bar) when `highlighted`.

## Inherited Properties and Signals

Since `ListViewDelegate` inherits from `QtQuick.Controls.Basic.ItemDelegate`, it provides access to standard delegate context:
*   `item`: (property from `ItemDelegate`) The `ListView` item this delegate instance belongs to.
*   `index`: (property from `ItemDelegate`) The index of this delegate within the `ListView`'s model.
*   `model`: (context property) Provides direct access to the model data for the current item (`model.roleName` or `modelData` for simple models).
*   `selected`: `bool` - Whether the item is selected (if the `ListView` supports selection).
*   `pressed`: `bool` - True when the delegate is being pressed by the user.

And signals like:
*   `clicked()`: Emitted when the delegate is clicked. RinUI's `ListViewDelegate` uses this to set `ListView.view.currentIndex = index`.
*   `pressAndHold()`, `released()`, `doubleClicked()`: Standard signals from `ItemDelegate`.

## Usage Notes

*   When providing items to `leftArea`, `middleArea`, or `rightArea`, use `Layout` attached properties (like `Layout.alignment`, `Layout.fillWidth`) as needed, since these areas are `Row`, `ColumnLayout`, and `RowLayout` respectively.
*   The default `height` of the delegate is adaptive (`contents.implicitHeight + 20`).
*   The default `width` of the delegate is typically bound to `ListView.view.width`.

This component is key to customizing the appearance of items within a RinUI `ListView`, offering a structured yet flexible way to define item layouts.
```
