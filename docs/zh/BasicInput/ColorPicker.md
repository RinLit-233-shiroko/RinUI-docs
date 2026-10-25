# ColorPicker（颜色选择器）

`ColorPicker` 提供 HSV 色彩区域、颜色预览和可选的通道输入，适合在设置界面中让用户选择并微调颜色。当前颜色通过 `color` 属性读写；设置 `alphaEnabled` 后可调整透明度。

## 基本用法

<div align="center">
  <img src="/assets/images/docs/ColorPicker/example-2.png" alt="ColorPicker 基本用法示例">
</div>

```qml
ColorPicker {
    color: "#E74856"
}
```

## 启用透明度

`alphaEnabled` 开启透明度相关控件。颜色值可以使用带 alpha 的十六进制格式，例如 `#80E74856`。

<div align="center">
  <img src="/assets/images/docs/ColorPicker/example-3.png" alt="ColorPicker 透明度示例">
</div>

```qml
ColorPicker {
    color: "#80E74856"
    alphaEnabled: true
}
```

## 环形取色模式

默认使用方形 HSV 取色区域。设置 `ringMode` 后切换为色相环形式。

<div align="center">
  <img src="/assets/images/docs/ColorPicker/example-4.png" alt="ColorPicker 环形取色示例">
</div>

```qml
ColorPicker {
    color: "#3A86FF"
    ringMode: true
}
```

## 控制辅助输入项

可以按界面空间需要隐藏颜色通道、十六进制或透明度输入控件。

<div align="center">
  <img src="/assets/images/docs/ColorPicker/example.png" alt="ColorPicker 辅助输入项示例">
</div>

```qml
ColorPicker {
    color: "#107C10"
    colorChannelInputVisible: false
    hexInputVisible: true
    alphaSliderVisible: false
    alphaInputVisible: false
}
```

## 主要属性

- `color`：当前选中颜色；设置它会同步更新内部 HSV 与透明度值。
- `hue`、`saturation`、`value`：HSV 色相、饱和度和明度。
- `alpha`：透明度，范围为 `0` 到 `1`。
- `alphaEnabled`：是否启用透明度编辑控件。
- `ringMode`：是否使用环形取色器；默认 `false`。
- `collapsed`：是否折叠高级颜色输入区域。
- `moreVisible`：是否显示更多颜色选项。
- `colorSliderVisible`：是否显示颜色滑块。
- `colorChannelInputVisible`：是否显示颜色通道输入。
- `hexInputVisible`：是否显示十六进制颜色输入。
- `alphaSliderVisible`、`alphaInputVisible`：是否显示透明度滑块和输入框。
- `channelFieldWidth`：颜色通道输入框宽度。
