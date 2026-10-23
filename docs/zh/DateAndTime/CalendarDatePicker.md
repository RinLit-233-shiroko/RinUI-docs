# CalendarDatePicker（日历日期选择器）

CalendarDatePicker 以按钮形式显示当前日期或占位文字。用户点击后可在日历中选择日期，适合需要直观查看日历的表单场景。

## 基本使用


<div align="center">
  <img src="/assets/images/docs/CalendarDatePicker/基本使用.png" alt="基本使用 示例">
</div>

```qml
CalendarDatePicker {
    selectedDate: new Date()
}
```

## 设置日期范围


<div align="center">
  <img src="/assets/images/docs/CalendarDatePicker/设置日期范围.png" alt="设置日期范围 示例">
</div>

```qml
CalendarDatePicker {
    selectedDate: new Date()
    minimumDate: new Date(2026, 0, 1)
    maximumDate: new Date(2026, 11, 31)
}
```

## 自定义占位文字和日期格式


<div align="center">
  <img src="/assets/images/docs/CalendarDatePicker/自定义占位文字和日期格式.png" alt="自定义占位文字和日期格式 示例">
</div>

```qml
CalendarDatePicker {
    placeholderText: qsTr("Select a date")
    textFormat: "yyyy年MM月dd日"
}
```

## 监听日期选择


<div align="center">
  <img src="/assets/images/docs/CalendarDatePicker/监听日期选择.png" alt="监听日期选择 示例">
</div>

```qml
CalendarDatePicker {
    onDateSelected: function(date) {
        console.log(Qt.formatDate(date, "yyyy-MM-dd"))
    }
}
```

## 重要属性

- `selectedDate`：当前选择的日期；未选择时为 `null`。
- `minimumDate`、`maximumDate`：可选择的日期范围。
- `placeholderText`：未选择日期时显示的文字。
- `textFormat`：按钮中日期的格式，默认值为 `MM/dd/yyyy`。
- `calendarLocale`：日历使用的区域设置。
- `useISOWeek`：是否以星期一作为每周的第一天。
- `iconName`、`iconSize`、`iconColor`、`iconVisible`：日历图标的名称、大小、颜色和可见性。

## 重要信号

- `dateSelected(date date)`：用户选定日期后发出。
