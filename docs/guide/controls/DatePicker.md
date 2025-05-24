# DatePicker

## Introduction

<mcurl name="DatePicker" url="https://learn.microsoft.com/en-us/windows/apps/design/controls/date-picker"></mcurl>

Use a DatePicker to let users set a date in your app, for example to schedule an appointment. The DatePicker displays three controls for month, date, and year. These controls are easy to use with touch or mouse, and they can be styled and configured in several different ways.

## Examples

### A simple DatePicker.

::: code-group

```qml
DatePicker {
    id: datePicker1
}
```

:::

### A DatePicker with localized text and year hidden.

::: code-group

```qml
DatePicker {
    id: datePicker
    yearVisible: false
}

Column {
    Text {
        text: qsTr("Locale")
    }
    ComboBox {
        model: ["en_US", "fr_FR", "de_DE", "es_ES", "it_IT", "ja_JP", "ko_KR", "zh_CN", "zh_TW"]
        currentIndex: 0
        onCurrentIndexChanged: {
            datePicker.locale = Qt.locale(model[currentIndex])
        }
    }
}
```

:::