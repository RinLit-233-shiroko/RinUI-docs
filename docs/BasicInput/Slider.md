# Slider

The `Slider` component allows users to select a value from a continuous or discrete range by dragging a handle along a track. It can be displayed horizontally or vertically and can optionally show tick marks and a tooltip for the current value. RinUI's `Slider` inherits from `QtQuick.Controls.Basic.Slider`.

## Basic Slider

A simple horizontal slider. By default, if `from` and `to` are not specified, the range is `0.0` to `1.0`.

<div align="center">
  <img src="/assets/images/BasicInput/Slider/slider-basic.png"> <!-- Placeholder: image path to be confirmed or created -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

Slider {
    width: 200
    // value: 0.5 
}
```

## Slider with Range and Steps

Define the slider's range using `from` and `to`, and control the increment with `stepSize`. The `value` property sets the slider's current position.

<div align="center">
  <img src="/assets/images/BasicInput/Slider/slider-range.png"> <!-- Placeholder: image path to be confirmed or created -->
</div>

```qml
import RinUI // Consistent import

Slider {
    width: 200
    from: 0
    to: 1000
    stepSize: 10 // Value will change in increments of 10
    value: 500   // Initial value
}
```

## Slider with Tick Marks

Set `tickmarks` to `true` to display visual markers. `tickFrequency` controls the interval of these ticks. If `tickFrequency` is `0` or not set, ticks might align with `stepSize`.

<div align="center">
  <img src="/assets/images/BasicInput/Slider/slider-ticks.png"> <!-- Placeholder: image path to be confirmed or created -->
</div>

```qml
import RinUI // Consistent import

Slider {
    width: 300
    from: 0
    to: 100
    stepSize: 10     
    tickmarks: true
    tickFrequency: 20 // A tick mark every 20 units
}
```

## Vertical Slider

Set `orientation` to `Qt.Vertical` for a vertical slider.

<div align="center">
  <img src="/assets/images/BasicInput/Slider/slider-vertical.png"> <!-- Placeholder: image path to be confirmed or created -->
</div>

```qml
import RinUI // Consistent import

Slider {
    height: 150 // For vertical sliders, height is more relevant for primary dimension
    orientation: Qt.Vertical
    from: 0
    to: 100
    value: 75
    tickmarks: true
    tickFrequency: 25
}
```

## Key Properties

*   `value`: `real` - The current value of the slider.
*   `from`: `real` - The minimum value. Defaults to `0.0`.
*   `to`: `real` - The maximum value. Defaults to `1.0`.
*   `stepSize`: `real` - The smallest increment by which the value can change. Defaults to `0.0` (continuous).
*   `orientation`: `enumeration` - `Qt.Horizontal` (default) or `Qt.Vertical`.
*   `tickmarks`: `bool` - If `true`, displays tick marks. Defaults to `false` in RinUI's Slider source.
*   `tickFrequency`: `real` - The interval for tick marks. Relevant if `tickmarks` is `true`.
*   `snapMode`: `enumeration` - Defines how the handle snaps to values. RinUI's `Slider` defaults to `Slider.SnapAlways`.
*   `showTooltip`: `bool` - If `true` (default in RinUI), a tooltip with the current value appears on hover/drag.
*   `handleSize`: `real` - Base size of the draggable handle.
*   `trackHeight`: `real` - Thickness of the slider track.
*   `primaryColor`: `color` - Color for the filled portion of the track and handle accents.
*   `enabled`: `bool` - Whether the control is interactive.

## Signals

*   `valueChanged(real value)`: Emitted when the `value` property changes, regardless of whether it was by user interaction or programmatically.
*   `valueModified(real value)`: Emitted specifically when the user modifies the value through interaction (e.g., dragging the handle).
*   `moved(real value)`: Emitted when the handle has been moved by user interaction, effectively similar to `valueModified`.

```
