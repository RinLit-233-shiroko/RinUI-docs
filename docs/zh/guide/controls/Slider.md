# 滑块（Slider）

## 介绍

<mcurl name="Slider" url="https://learn.microsoft.com/zh-cn/windows/apps/design/controls/slider"></mcurl>

当您希望用户能够设置定义的连续值（如音量或亮度）或离散值范围（如屏幕分辨率设置）时，请使用滑块。

## 示例

### 简单的滑块

::: code-group

```qml
Slider {
    width: 200
}
```

:::

### 指定范围和步长的滑块。

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

### 带有刻度的滑块。

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

### 带有范围和刻度的垂直滑块。

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