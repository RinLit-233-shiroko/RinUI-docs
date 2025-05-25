# 滑块

`Slider` 组件允许用户通过沿轨道拖动滑块来从连续或离散范围中选择一个值。它可以水平或垂直显示，并可选择显示刻度标记和当前值的工具提示。RinUI 的 `Slider` 继承自 `QtQuick.Controls.Basic.Slider`。

## 带范围和步长的滑块

使用 `from` 和 `to` 属性定义滑块的范围，并使用 `stepSize` 控制增量。`value` 属性设置滑块的当前位置。

<div align="center">
  <img src="/assets/images/BasicInput/Slider/slider-range.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
Slider {
    width: 200
    from: 0
    to: 1000
    stepSize: 10 // 值将以 10 的增量变化
    value: 500   // 初始值
}
```

## 带刻度标记的滑块

将 `tickmarks` 设置为 `true` 以显示视觉标记。`tickFrequency` 控制这些刻度的间隔。如果 `tickFrequency` 为 `0` 或未设置，刻度可能与 `stepSize` 对齐。

<div align="center">
  <img src="/assets/images/BasicInput/Slider/slider-ticks.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
Slider {
    width: 300
    from: 0
    to: 100
    stepSize: 10     
    tickmarks: true
    tickFrequency: 20 // 每 20 个单位一个刻度标记
}
```

## 垂直滑块

将 `orientation` 设置为 `Qt.Vertical` 以获得垂直滑块。

<div align="center">
  <img src="/assets/images/BasicInput/Slider/slider-vertical.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
Slider {
    height: 150 // 对于垂直滑块，高度更适合作为主要维度
    orientation: Qt.Vertical
    from: 0
    to: 100
    value: 75
    tickmarks: true
    tickFrequency: 25
}
```

## 主要属性

*   `value`: `real` - 滑块的当前值。
*   `from`: `real` - 最小值。默认为 `0.0`。
*   `to`: `real` - 最大值。默认为 `1.0`。
*   `stepSize`: `real` - 值可以改变的最小增量。默认为 `0.0`（连续）。
*   `orientation`: `enumeration` - `Qt.Horizontal` (默认) 或 `Qt.Vertical`。
*   `tickmarks`: `bool` - 如果为 `true`，则显示刻度标记。在 RinUI 的 Slider 源码中默认为 `false`。
*   `tickFrequency`: `real` - 刻度标记的间隔。如果 `tickmarks` 为 `true` 则相关。
*   `snapMode`: `enumeration` - 定义滑块如何吸附到值。RinUI 的 `Slider` 默认为 `Slider.SnapAlways`。
*   `showTooltip`: `bool` - 如果为 `true`（RinUI 中默认），则在悬停或拖动滑块时显示包含当前值的工具提示。
*   `handleSize`: `real` - 可拖动滑块的基础尺寸。
*   `trackHeight`: `real` - 滑块轨道的厚度。
*   `primaryColor`: `color` - 用于轨道填充部分和滑块点缀的颜色。
*   `enabled`: `bool` - 控件是否可交互。

## 信号

*   `valueChanged(real value)`: 当 `value` 属性更改时发出，无论是通过用户交互还是以编程方式。
*   `valueModified(real value)`: 当用户通过交互（例如拖动滑块）修改值时专门发出。
*   `moved(real value)`: 当用户交互移动滑块后发出，效果上类似于 `valueModified`。

```
