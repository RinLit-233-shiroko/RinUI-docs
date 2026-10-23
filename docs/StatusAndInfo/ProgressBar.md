# ProgressBar

ProgressBar is a control that displays the progress of a task. It can show either a definite or indefinite progress state.

<VPImage
  :image="{
    light: '/assets/images/examples/ProgressBar-light.png',
    dark: '/assets/images/examples/ProgressBar-dark.png',
    alt: 'ProgressBar examples in light and dark themes'
  }"
  width="1000"
/>

## Basic ProgressBar

```qml
ProgressBar {
    id: control
    width: 200
    value: 50
}
```

## 不确定进度条

```qml
ProgressBar {
    id: control
    width: 200
    indeterminate: true
}
```

## 自定义颜色进度条

```qml
ProgressBar {
    id: control
    width: 200
    value: 75
    backgroundColor: "#E0E0E0"
    primaryColor: "#4CAF50"
}
```

## 重要属性

- `value`: 当前进度值（0 到 1 之间的数字）
- `indeterminate`: 是否显示不确定的进度
- `backgroundColor`: 背景轨道的颜色
- `primaryColor`: 进度条的颜色
- `radius`: 进度条的圆角半径
- `state`: 进度条的状态（Running、Paused、Error）