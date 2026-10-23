# CalendarDatePicker

CalendarDatePicker is a button-like control that opens a Calendar when clicked, allowing users to select a date. It's a convenient way to provide date selection functionality in a compact form factor.

<VPImage
  :image="{
    light: '/assets/images/examples/CalendarDatePicker-light.png',
    dark: '/assets/images/examples/CalendarDatePicker-dark.png',
    alt: 'CalendarDatePicker examples in light and dark themes'
  }"
  width="1000"
/>

## Basic Usage

```qml
CalendarDatePicker {
    id: datePicker
    selectedDate: new Date()
}
```

## Custom Display Format

```qml
CalendarDatePicker {
    id: datePicker
    selectedDate: new Date()
    textFormat: "MMMM dd, yyyy"
    placeholderText: qsTr("Select a date")
}
```

## With Constraints

```qml
CalendarDatePicker {
    id: datePicker
    selectedDate: new Date()
    minimumDate: new Date(2025, 0, 1)   // January 1, 2025
    maximumDate: new Date(2025, 11, 31) // December 31, 2025
}
```

## With Custom Icon

```qml
CalendarDatePicker {
    id: datePicker
    selectedDate: new Date()
    iconName: "ic_fluent_calendar_ltr_20_regular"
    iconSize: 20
    iconColor: "#3A86FF"
}
```

## Handling Date Selection

```qml
CalendarDatePicker {
    id: datePicker
    selectedDate: new Date()
    
    onDateSelected: (date) => {
        console.log("Selected date:", Qt.formatDate(date, "yyyy-MM-dd"))
    }
}
```

## Important Properties

- `selectedDate`: The currently selected date
- `placeholderText`: Text displayed when no date is selected
- `textFormat`: The format string for displaying the selected date
- `minimumDate` and `maximumDate`: The minimum and maximum selectable dates
- `iconName`: The icon name to display in the button
- `iconSize`: The size of the icon
- `iconColor`: The color of the icon
- `iconVisible`: Whether the icon is visible

## Important Signals

- `dateSelected(date date)`: Emitted when a date is selected