# ToolTip（工具提示）

`ToolTip` 是一个轻量的浮层提示组件，适合为按钮、图标等控件补充简短说明。RinUI 的 `ToolTip` 基于 Qt Quick Controls `ToolTip`，并使用当前主题绘制背景、边框、文字和阴影。

## 基本用法

将 `ToolTip` 声明为目标控件的子对象，并设置提示文本。通过 `visible` 绑定控件的悬停状态，在鼠标移入时显示提示。

<div align="center">
  <img src="/assets/images/docs/ToolTip/example-2.png" alt="工具提示基本用法示例">
</div>

```qml
Button {
    text: qsTr("Save")
    hoverEnabled: true

    ToolTip {
        text: qsTr("Save your changes")
        visible: parent.hovered
    }
}
```

## 设置显示延迟与时长

`delay` 控制显示前的等待时间，`timeout` 控制显示时长。RinUI 的 `ToolTip` 默认 `timeout` 为 `-1`，即不自动关闭；需要自动消失时可显式指定时长。

<div align="center">
  <img src="/assets/images/docs/ToolTip/example-3.png" alt="工具提示延迟与时长示例">
</div>

```qml
Button {
    text: qsTr("Delete")
    hoverEnabled: true

    ToolTip {
        text: qsTr("This action cannot be undone")
        visible: parent.hovered
        delay: 500
        timeout: 3000
    }
}
```

## 自定义主题颜色

可以覆盖组件的颜色属性以适配特定场景。未覆盖时，颜色会跟随当前 RinUI 主题更新。

<div align="center">
  <img src="/assets/images/docs/ToolTip/example.png" alt="工具提示自定义主题颜色示例">
</div>

```qml
Button {
    text: qsTr("Help")
    hoverEnabled: true

    ToolTip {
        text: qsTr("Open help")
        visible: parent.hovered
        backgroundColor: "#202020"
        borderColor: "#505050"
        textColor: "white"
    }
}
```

## 主要属性

- `text`：提示内容。
- `visible`：控制提示是否显示，通常绑定到目标控件的悬停或焦点状态。
- `delay`：显示前的延迟，单位为毫秒。
- `timeout`：显示时长，单位为毫秒；`-1` 表示不自动关闭。
- `backgroundColor`：提示背景色，默认取当前主题的亚克力背景色。
- `borderColor`：提示边框色，默认取当前主题的卡片边框色。
- `textColor`：提示文字颜色，默认取当前主题文字色。
- `controlRadius`：提示背景圆角，默认取当前主题按钮圆角。
