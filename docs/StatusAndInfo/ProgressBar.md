# ProgressBar

`ProgressBar` displays the progress of a task and supports both determinate and indeterminate states.

## Basic ProgressBar

<div align="center">
  <img src="/assets/images/docs/ProgressBar/example-2.png" alt="Basic ProgressBar">
</div>

```qml
ProgressBar {
    id: control
    width: 200
    value: 0.5
}
```
```

## Indeterminate ProgressBar

<div align="center">
  <img src="/assets/images/docs/ProgressBar/example-3.png" alt="Indeterminate ProgressBar">
</div>

```qml
ProgressBar {
    id: control
    width: 200
    indeterminate: true
}
```
```

## Custom Color

<div align="center">
  <img src="/assets/images/docs/ProgressBar/example.png" alt="Custom Color">
</div>

```qml
ProgressBar {
    id: control
    width: 200
    value: 0.75
    primaryColor: "#107C10"
}
```
```

## Properties

- `value`: Current progress value as a number from `0` to `1`.
- `indeterminate`: Whether to show indeterminate progress.
- `backgroundColor`: Background track color.
- `primaryColor`: Progress fill color.
- `radius`: Progress bar corner radius.
- `state`: Progress state: `ProgressBar.Running`, `ProgressBar.Paused`, or `ProgressBar.Error`.
