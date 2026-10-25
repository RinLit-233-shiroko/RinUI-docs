# ProgressRing（进度环）

`ProgressRing` 用圆环展示任务进度。它继承自 Qt Quick Controls 的 `ProgressBar`，因此支持确定进度与不确定进度，并可通过状态切换为运行、暂停或错误样式。

## 确定进度

<div align="center">
  <img src="/assets/images/docs/ProgressRing/example-2.png" alt="确定进度示例">
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

## 不确定进度

任务尚无可计算的完成比例时，将 `indeterminate` 设为 `true`。环形动画仅在 `Running` 状态下持续运行。

<div align="center">
  <img src="/assets/images/docs/ProgressRing/example-3.png" alt="不确定进度示例">
</div>

```qml
ProgressRing {
    size: 56
    indeterminate: true
    state: ProgressRing.Running
}
```

## 暂停与错误状态

`state` 支持 `ProgressRing.Running`、`ProgressRing.Paused` 和 `ProgressRing.Error`。暂停状态使用主题中的警告色，错误状态使用严重错误色。

<div align="center">
  <img src="/assets/images/docs/ProgressRing/example.png" alt="暂停与错误状态示例">
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

## 主要属性

- `value`、`from`、`to`：确定进度值及其范围，进度环会按范围计算填充比例。
- `indeterminate`：是否显示循环的不确定进度动画。
- `state`：进度状态，支持 `Running`、`Paused`、`Error`。
- `size`：控件的默认宽高，默认为 `56`。
- `strokeWidth`：圆环线宽，默认为 `6`。
- `primaryColor`：运行状态的圆环颜色，默认为当前主题强调色。
- `backgroundColor`：未完成部分的圆环颜色，默认为透明。

`width` 与 `height` 仍可单独设置；圆环半径基于控件较短边和线宽计算。确定进度下，`value` 会限制在 `from` 到 `to` 的范围内。
