# カレンダー日付ピッカー (CalendarDatePicker)

`CalendarDatePicker` は選択した日付またはプレースホルダーをボタンとして表示します。クリックするとカレンダーが開き、日付を選択できます。カレンダーを視覚的に確認したいフォームに適しています。

## 基本的な使い方

<div align="center">
  <img src="/assets/images/docs/CalendarDatePicker/example-2.png" alt="基本的な使い方">
</div>

```qml
CalendarDatePicker {
    selectedDate: new Date()
}
```
```

## 日付範囲の設定

<div align="center">
  <img src="/assets/images/docs/CalendarDatePicker/example-3.png" alt="日付範囲の設定">
</div>

```qml
CalendarDatePicker {
    selectedDate: new Date()
    minimumDate: new Date(2026, 0, 1)
    maximumDate: new Date(2026, 11, 31)
}
```
```

## プレースホルダーと日付形式

<div align="center">
  <img src="/assets/images/docs/CalendarDatePicker/example-4.png" alt="プレースホルダーと日付形式">
</div>

```qml
CalendarDatePicker {
    placeholderText: qsTr("日付を選択")
    textFormat: "yyyy年MM月dd日"
}
```

## 日付選択の処理

<div align="center">
  <img src="/assets/images/docs/CalendarDatePicker/example.png" alt="日付選択の処理">
</div>

```qml
CalendarDatePicker {
    onDateSelected: function(date) {
        console.log(Qt.formatDate(date, "yyyy-MM-dd"))
    }
}
```
```

## 主なプロパティ

- `selectedDate`: 選択中の日付。未選択時は `null`。
- `minimumDate`、`maximumDate`: 選択可能な日付範囲。
- `placeholderText`: 日付未選択時に表示するテキスト。
- `textFormat`: ボタンに表示する日付形式。既定値は `MM/dd/yyyy`。
- `calendarLocale`: カレンダーで使用するロケール。
- `useISOWeek`: 月曜日を週の最初の日にするかどうか。
- `iconName`、`iconSize`、`iconColor`、`iconVisible`: カレンダーアイコンの名前、サイズ、色、表示状態。

## シグナル

- `dateSelected(date date)`: ユーザーが日付を選択したときに発生します。
