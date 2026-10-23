# ProgressRing

ProgressRing is a circular progress indicator that shows the progress of an operation in a ring format. It's similar to ProgressBar but provides a more compact visual representation.

<VPImage
  :image="{
    light: '/assets/images/examples/ProgressRing-light.png',
    dark: '/assets/images/examples/ProgressRing-dark.png',
    alt: 'ProgressRing examples in light and dark themes'
  }"
  width="1000"
/>

## Basic ProgressRing

```qml
ProgressRing {
    value: 75
    Layout.alignment: Qt.AlignHCenter
}
```

## ProgressRing with Text

```qml
ColumnLayout {
    ProgressRing {
        value: progressValue
        Layout.alignment: Qt.AlignHCenter
    }
    
    Label {
        Layout.alignment: Qt.AlignHCenter
        text: qsTr("%1%").arg(Math.round(progressValue))
    }
}
```

## Determinate vs Indeterminate

```qml
// Determinate ProgressRing
ProgressRing {
    value: 60
    Layout.alignment: Qt.AlignHCenter
}

// Indeterminate ProgressRing
ProgressRing {
    indeterminate: true
    Layout.alignment: Qt.AlignHCenter
}
```

## Important Properties

- `value`: The current progress value (0-100)
- `indeterminate`: Whether the ring shows an indeterminate animation
- `visible`: Whether the ring is visible
- `enabled`: Whether the ring is enabled
- `thickness`: The thickness of the ring stroke