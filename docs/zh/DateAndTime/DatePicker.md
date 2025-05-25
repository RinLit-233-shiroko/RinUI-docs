# 日期选择器

`DatePicker` 提供了一种标准化方式，允许用户选择日期（年、月、日）。它显示为一个按钮，上面有当前选定的日期（或占位符）。点击后，会打开一个自定义的选择器视图（内部为 `PickerView` 组件），允许用户更改日期。

## 基本日期选择器

默认情况下，`DatePicker` 在用户未交互时显示占位符或当前系统日期。一旦选定日期，该日期将显示在按钮上。

<div align="center">
  <img src="/assets/images/DateAndTime/DatePicker/datepicker-basic.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

DatePicker {
    id: myDatePicker
    width: 250 // 默认 implicitWidth

    // 响应日期更改
    onDateChanged: {
        console.log("选定日期字符串:", date) // 格式: YYYY-M-D
        console.log("年:", year, "月:", month, "(索引:", monthIndex + ")", "日:", day)
    }

    // 设置初始日期示例
    Component.onCompleted: {
        // setDate 成功时返回 true
        if (!setDate(new Date().getFullYear() + "-01-01")) { // 设置为当前年份的1月1日
            console.warn("未能为 myDatePicker 设置初始日期")
        }
    }
}
```

## 隐藏年份

通过将 `yearVisible` 属性设置为 `false`，可以从选择器和显示中隐藏年份列。

<div align="center">
  <img src="/assets/images/DateAndTime/DatePicker/datepicker-no-year.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
import RinUI // Consistent import

DatePicker {
    width: 180 // 如果年份隐藏，可能需要较小的宽度
    yearVisible: false
}
```

## 以编程方式设置日期

`setDate()` 方法允许您设置选择器的日期。它接受 "YYYY-MM-DD" 或 "YYYY/MM/DD" 格式的字符串。

```qml
import RinUI // Consistent import

DatePicker {
    id: eventDatePicker
    width: 250

    function initializeDate() {
        var success = eventDatePicker.setDate("2025-12-24");
        if (success) {
            console.log("事件日期设置为:", eventDatePicker.date);
        } else {
            console.log("未能设置事件日期。");
        }
    }

    Component.onCompleted: initializeDate()
}
```

## 本地化

`DatePicker` 会遵循应用程序的 `locale`（一个继承的属性）来显示月份名称以及年、月、日字段的显示顺序。

## 主要属性

*   `date`: `string` (只读) - 所选日期的字符串表示形式（例如，"2023-10-26"）。此属性的更改可以通过 `onDateChanged` 进行跟踪。
*   `year`: `int` (别名) - 选定的年份。如果需要直接操作，可以通过设置 `pickerView.value3` 以编程方式设置，但首选 `setDate()`。
*   `month`: `string` (别名, 直接赋值只读) - 选定的月份名称（本地化的）。
*   `monthIndex`: `int` (别名, 直接赋值只读) - 选定的月份索引（0 代表一月，11 代表十二月）。
*   `day`: `int` (别名) - 选定的日期。可以通过设置 `pickerView.value2` 以编程方式设置。
*   `yearVisible`: `bool` - 如果为 `false`，则年份选择器被隐藏。默认为 `true`。
*   `startYear`: `int` - 选择器中可用的最小年份。默认为 `1925`。
*   `endYear`: `int` - 选择器中可用的最大年份。默认为 `2125`。
*   `enabled`: `bool` - 控件是否可交互。继承自 `Control`。

## 方法

*   `setDate(string yyyymmdd)`: 设置选择器的当前日期。输入字符串应为 "YYYY-MM-DD" 或 "YYYY/MM/DD" 格式（例如，"2023-10-26"）。成功时返回 `true`，解析失败或日期无效时返回 `false` 或 `-1`。

`DatePicker` 本身是一个 `Button`，因此与按钮样式和行为相关的属性（如 `flat`、`highlighted`、`primaryColor`）也可以应用于其外观。
```
