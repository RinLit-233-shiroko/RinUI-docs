# ProgressRing

`ProgressRing` displays task progress as a circular ring. It inherits from Qt Quick Controls `ProgressBar`, supports determinate and indeterminate progress, and can show running, paused, or error states.

## Determinate Progress

<div align="center">
  <img src="/assets/images/docs/ProgressRing/example-2.png" alt="Determinate Progress">
</div>

```qml
ProgressRing {
    size: 56
    strokeWidth: 6
    from: 0
    to: 100
    value: 68
}
```
```

## Indeterminate Progress

Set `indeterminate` to `true` when a completion percentage is not available. The ring animation runs continuously in the `Running` state.

<div align="center">
  <img src="/assets/images/docs/ProgressRing/example-3.png" alt="Indeterminate Progress">
</div>

```qml
ProgressRing {
    size: 56
    indeterminate: true
    state: ProgressRing.Running
}
```
```

## Paused and Error States

`state` supports `ProgressRing.Running`, `ProgressRing.Paused`, and `ProgressRing.Error`. The paused state uses the theme warning color, while the error state uses the severe error color.

<div align="center">
  <img src="/assets/images/docs/ProgressRing/example.png" alt="Paused and Error States">
</div>

```qml
Row {
    spacing: 16

    ProgressRing {
        value: 0.68
        state: ProgressRing.Running
    }
    ProgressRing {
        value: 0.68
        state: ProgressRing.Paused
    }
    ProgressRing {
        value: 0.68
        state: ProgressRing.Error
    }
}
```
```

## Properties

- `value`, `from`, `to`: Determinate progress value and range. The ring computes its filled proportion from the range.
- `indeterminate`: Whether to show the looping indeterminate animation.
- `state`: Progress state: `Running`, `Paused`, or `Error`.
- `size`: Default width and height; defaults to `56`.
- `strokeWidth`: Ring stroke width; defaults to `6`.
- `primaryColor`: Ring color while running; defaults to the current theme accent color.
- `backgroundColor`: Color of the unfilled ring; defaults to transparent.

`width` and `height` can also be set independently. The ring radius is calculated from the shorter control edge and stroke width. In determinate mode, `value` is clamped to the `from`–`to` range.
