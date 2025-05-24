iyoiyoiy# 日期选择器（DatePicker）

## 介绍

<mcurl name="DatePicker" url="https://learn.microsoft.com/zh-cn/windows/apps/design/controls/date-picker"></mcurl>

使用日期选择器让用户在你的应用中设置日期，例如安排约会。日期选择器显示月份、日期和年份三个控件。这些控件易于通过触摸或鼠标使用，并且可以通过多种不同的方式进行样式设置和配置。

## 示例

### 一个简单的日期选择器。

::: code-group

```qml
DatePicker {
    id: datePicker1
}
```

:::

### 一个带有本地化文本并隐藏年份的日期选择器。

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