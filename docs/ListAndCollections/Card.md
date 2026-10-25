# Card (Interactive Surface)

::: warning
This control was renamed from `Clip` to `Card`. The `qmldir` keeps the legacy `clip` name for compatibility; use `Card` in new code.
:::

`Card` is a specialized `Button` that provides a clickable surface with a customizable frame appearance. It uses an internal `Frame` for its background and exposes properties for the frame color, corner radius, and border.

Despite its name, `Card` is not primarily a graphical clipping item like `Item.clip: true`; it is a styled interactive surface.

## Basic Usage

<div align="center">
  <img src="/assets/images/docs/Clip/example.png" alt="Card interactive surface example">
</div>

`Card` can serve as a clickable area with a defined appearance. Its inherited `contentItem` is an empty `Item` by default, so it is not intended to display `text` or `icon.name` like a standard button. Add QML items as children to place visuals over its styled background.

```qml
import QtQuick 2.15
import RinUI

Card {
    id: myClickableSurface
    width: 200
    height: 100
    backgroundColor: Theme.currentTheme.colors.controlColor
    radius: 8
    borderColor: Theme.currentTheme.colors.controlBorderColor
    borderWidth: 1

    onClicked: console.log("Card surface clicked!")

    Text {
        anchors.centerIn: parent
        text: qsTr("Clickable Area")
    }
}
```

## Properties

- `color`: Alias for the internal frame background; interchangeable with `backgroundColor`.
- `radius`: Corner radius of the surface.
- `borderColor`: Border color.
- `borderWidth`: Border width.
- `backgroundColor`: Background color inherited from the button implementation and applied to the internal frame.
- Standard `Button` properties such as `enabled`, `flat`, `highlighted`, and `checkable` are also available.

## Signals

- `onClicked()`: Emitted when the Card surface is clicked.
- Other `Button` signals, such as `pressedChanged` and `released`, are also available.

## Notes

- The default `contentItem` is empty. To use button-style text or icon content, customize or replace `contentItem`; otherwise, add visual children directly to `Card`.
- `Card` describes a styled interactive surface, not a child-clipping item.
- The visual background is provided by `Frame`.
