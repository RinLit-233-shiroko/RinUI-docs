# Slider

## Introduction

<mcurl name="Slider" url="https://learn.microsoft.com/en-us/windows/apps/design/controls/slider"></mcurl>

Use a Slider when you want your users to be able to set defined, contiguous values (such as volume or brightness) or a range of discrete values (such as screen resolutions settings).

## Examples

### A simple Slider

::: code-group

```qml
Slider {
    width: 200
}
```

:::

### A Slider with range and step specified.

::: code-group

```qml
Slider {
    width: 200
    from: 500
    to: 800
    stepSize: 10
    value: 800
}
```

:::

### A Slider with tick marks.

::: code-group

```qml
Slider {
    width: 300
    from: 0
    to: 100
    stepSize: 20
    tickmarks: true
    snapMode: Slider.SnapAlways
}
```

:::

### A vertical Slider with range and tick marks specified.

::: code-group

```qml
Slider {
    height: 100
    orientation: Qt.Vertical
    from: 0
    to: 100
    stepSize: 1
    tickFrequency: 20
    tickmarks: true
    snapMode: Slider.SnapAlways
}
```

:::