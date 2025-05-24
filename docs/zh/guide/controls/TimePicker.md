# 时间选择器（TimePicker）

## 介绍

<mcurl name="TimePicker" url="https://learn.microsoft.com/zh-cn/windows/apps/design/controls/time-picker"></mcurl>

使用时间选择器让用户在您的应用中设置时间，例如设置提醒。时间选择器显示小时、分钟和上午/下午三个控件。这些控件易于通过触摸或鼠标使用，并且可以通过多种不同的方式进行样式设置和配置。

## 示例

### 简单的时间选择器。

::: code-group

```qml
TimePicker {}
```

:::

### 使用 24 小时制的 TimePicker。

::: code-group

```qml
TimePicker {
    use24Hour: true
}
```

:::