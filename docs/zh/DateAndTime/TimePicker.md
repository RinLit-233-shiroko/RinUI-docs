# 时间选择器

`TimePicker` 允许用户选择时间（小时和分钟，可选 AM/PM 指示符）。它显示为一个按钮，上面有当前选定的时间（或占位符）。点击后，会打开一个自定义的选择器视图（内部为 `PickerView` 组件），允许用户更改时间。

## 基本时间选择器（12 小时制）

默认情况下，`TimePicker` 使用 12 小时制时钟格式，并带有 AM/PM 选择器。显示的小时、分钟和 AM/PM 值基于组件的当前选择。

<div align="center">
  <img src="/assets/images/DateAndTime/TimePicker/timepicker-12hr.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

TimePicker {
    id: myTimePicker
    width: 250 // 默认 implicitWidth

    // 响应时间更改
    // 'time' 属性提供 "HH:MM" (24小时制) 格式的时间
    onTimeChanged: { 
        console.log("选定时间 (24小时制格式):", time); 
        // 也可以访问各个部分：
        console.log("小时:", hour, "分钟:", minute, "时段:", hourSystem); // hourSystem 是 AM/PM
    }

    Component.onCompleted: {
        // setTime 需要 "HH:MM" (24小时制) 格式
        myTimePicker.setTime("14:30"); // 设置为下午 2:30
    }
}
```

## 24 小时制时间选择器

将 `use24Hour` 属性设置为 `true` 以使用 24 小时制时钟格式。这将隐藏 AM/PM 选择器。

<div align="center">
  <img src="/assets/images/DateAndTime/TimePicker/timepicker-24hr.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
import RinUI // Consistent import

TimePicker {
    width: 180 // 没有 AM/PM 时可能需要较小的宽度
    use24Hour: true

    Component.onCompleted: {
        setTime("08:15"); // 设置为上午 8:15
    }
}
```

## 以编程方式设置时间

`setTime()` 方法允许您设置选择器的时间。它接受 "HH:MM"（24 小时制）格式的字符串。

```qml
import RinUI // Consistent import

TimePicker {
    id: reminderTimePicker
    width: 250

    function initializeTime() {
        // 当前源码中的 setTime 并未明确返回布尔类型的成功标志，
        // 但如果格式有效，它会更新属性。
        reminderTimePicker.setTime("17:00"); // 下午 5:00
        console.log("提醒时间设置为:", reminderTimePicker.time);
    }
    Component.onCompleted: initializeTime()
}
```

## 主要属性

*   `time`: `string` (只读) - 所选时间的 "HH:MM"（24 小时制）格式的字符串表示。此属性的更改可以通过 `onTimeChanged` 进行跟踪。
*   `hour`: `string` (pickerView.value1 的别名) - 选定的小时（字符串，例如12小时制的 "1" 到 "12"，或基于内部选择器模型的24小时制的 "0" 到 "23"）。
*   `minute`: `string` (pickerView.value2 的别名) - 选定的分钟（字符串，例如 "0" 到 "59"）。
*   `hourSystem`: `string` (pickerView.value3 的别名) - 对于12小时制，这保存 AM/PM 指示符（例如，由 `amText`/`pmText` 定义的 "AM" 或 "PM"）。如果 `use24Hour` 为 `true`，则为 `undefined`。
*   `use24Hour`: `bool` - 如果为 `true`，则使用24小时制时钟格式。默认为 `false`。
*   `amText`: `string` - 用于12小时模式下 AM 指示符的文本。默认为本地化的 "AM"。
*   `pmText`: `string` - 用于12小时模式下 PM 指示符的文本。默认为本地化的 "PM"。
*   `hourText`: `string` - 未选择/交互时间时小时部分的占位符文本。默认为本地化的 "hour"。
*   `minuteText`: `string` - 未选择/交互时间时分钟部分的占位符文本。默认为本地化的 "minute"。
*   `enabled`: `bool` - 控件是否可交互。继承自 `Control`。

## 方法

*   `setTime(string hhmm)`: 设置选择器的当前时间。输入字符串必须为 "HH:MM"（24 小时制）格式（例如，"08:15" 或 "14:30"）。像 "8:15" 这样的输入可能无法工作；如果组件解析需要，请确保单位数小时有前导零。

`TimePicker` 本身是一个 `Button`，因此与按钮样式和行为相关的属性也可以应用于其外观。
```
