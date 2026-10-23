# InfoBadge

InfoBadge is a control that displays a small badge with text or numbers, typically used to indicate notification counts, status indicators, or other small pieces of information.

<VPImage
  :image="{
    light: '/assets/images/examples/InfoBadge-light.png',
    dark: '/assets/images/examples/InfoBadge-dark.png',
    alt: 'InfoBadge examples in light and dark themes'
  }"
  width="1000"
/>

## Basic InfoBadge

```qml
InfoBadge {
    value: 5
    Layout.alignment: Qt.AlignTop | Qt.AlignRight
}
```

## InfoBadge with Text

```qml
InfoBadge {
    text: qsTr("New")
    Layout.alignment: Qt.AlignTop | Qt.AlignRight
}
```

## InfoBadge with Severity

```qml
// Success badge
InfoBadge {
    value: 1
    severity: Severity.Success
    Layout.alignment: Qt.AlignTop | Qt.AlignRight
}

// Warning badge
InfoBadge {
    value: 3
    severity: Severity.Warning
    Layout.alignment: Qt.AlignTop | Qt.AlignRight
}

// Error badge
InfoBadge {
    value: 2
    severity: Severity.Error
    Layout.alignment: Qt.AlignTop | Qt.AlignRight
}
```

## Important Properties

- `value`: Numeric value to display (for numbers)
- `text`: Text to display (for text badges)
- `severity`: The severity level (Info, Success, Warning, Error)
- `visible`: Whether the badge is visible
- `enabled`: Whether the badge is enabled