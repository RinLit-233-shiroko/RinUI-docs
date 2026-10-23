# CalendarDatePicker（日付ピッカー）

CalendarDatePicker は、クリックされたときにカレンダーを開くボタンスタイルのコントロールで、ユーザーが日付を選択できるようにします。コンパクトなフォームファクターで日付選択機能を提供する便利的な方法を提供します。

<VPImage
  :image="{
    light: '/assets/images/examples/CalendarDatePicker-light.png',
    dark: '/assets/images/examples/CalendarDatePicker-dark.png',
    alt: 'CalendarDatePicker コンポーネントのライト／ダーク例'
  }"
  width="1000"
/>

## 基本使用

```qml
CalendarDatePicker {
    id: datePicker
    selectedDate: new Date()
}
```

## カスタム表示フォーマット

```qml
CalendarDatePicker {
    id: datePicker
    selectedDate: new Date()
    textFormat: "yyyy年MM月dd日"
    placeholderText: qsTr("日付を選択")
}
```

## 制約付きピッカー

```qml
CalendarDatePicker {
    id: datePicker
    selectedDate: new Date()
    minimumDate: new Date(2025, 0, 1)   // 2025年1月1日
    maximumDate: new Date(2025, 11, 31) // 2025年12月31日
}
```

## カスタムアイコン付きピッカー

```qml
CalendarDatePicker {
    id: datePicker
    selectedDate: new Date()
    iconName: "ic_fluent_calendar_ltr_20_regular"
    iconSize: 20
    iconColor: "#3A86FF"
}
```

## 日付選択の処理

```qml
CalendarDatePicker {
    id: datePicker
    selectedDate: new Date()
    
    onDateSelected: (date) => {
        console.log("選択された日付:", Qt.formatDate(date, "yyyy-MM-dd"))
    }
}
```

## 重要なプロパティ

- `selectedDate`: 現在選択されている日付
- `placeholderText`: 日付が選択されていないときに表示されるテキスト
- `textFormat`: 選択された日付を表示するためのフォーマット文字列
- `minimumDate` と `maximumDate`: 選択できる最小および最大の日付
- `iconName`: ボタン内に表示されるアイコン名
- `iconSize`: アイコンのサイズ
- `iconColor`: アイコンの色
- `iconVisible`: アイコンが表示されるかどうか

## 重要な信号

- `dateSelected(date date)`: 日付が選択されたときに发出される