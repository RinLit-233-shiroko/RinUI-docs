# ProgressBar（进度条）

ProgressBar 是显示任务进度的控件。它可以显示一个明确或不确定的进度状态。

## 基本进度条


<div align="center">
  <img src="/assets/images/docs/ProgressBar/基本进度条.png" alt="基本进度条 示例">
</div>

```qml
ProgressBar {
    id: control
    width: 200
    value: 0.5
}
```

## 不确定进度条


<div align="center">
  <img src="/assets/images/docs/ProgressBar/不确定进度条.png" alt="不确定进度条 示例">
</div>

```qml
ProgressBar {
    id: control
    width: 200
    indeterminate: true
}
```

## 自定义颜色进度条


<div align="center">
  <img src="/assets/images/docs/ProgressBar/自定义颜色进度条.png" alt="自定义颜色进度条 示例">
</div>

```qml
ProgressBar {
    id: control
    width: 200
    value: 0.75
    primaryColor: "#107C10"
}
```

## 重要属性

- `value`: 当前进度值（0 到 1 之间的数字）
- `indeterminate`: 是否显示不确定的进度
- `backgroundColor`: 背景轨道的颜色
- `primaryColor`: 进度条的颜色
- `radius`: 进度条的圆角半径
- `state`: 进度条状态，可设为 `ProgressBar.Running`、`ProgressBar.Paused` 或 `ProgressBar.Error`
