# TimePicker

## Introduction

<mcurl name="TimePicker" url="https://learn.microsoft.com/en-us/windows/apps/design/controls/time-picker"></mcurl>

Use a TimePicker to let users set a time in your app, for example to set a reminder. The TimePicker displays three controls for hours, minutes, and AM/PM. These controls are easy to use with touch or mouse, and they can be styled and configured in several different ways.

## Examples

### A simple TimePicker.

::: code-group

```qml
TimePicker {}
```

:::

### A TimePicker using a 24-hour clock.

::: code-group

```qml
TimePicker {
    use24Hour: true
}
```

:::