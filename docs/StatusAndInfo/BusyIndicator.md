# BusyIndicator

BusyIndicator is a control that shows a user that some operation is in progress. It displays an animated circular indicator that provides visual feedback during long-running operations.

<VPImage
  :image="{
    light: '/assets/images/examples/BusyIndicator-light.png',
    dark: '/assets/images/examples/BusyIndicator-dark.png',
    alt: 'BusyIndicator examples in light and dark themes'
  }"
  width="1000"
/>

## Basic BusyIndicator

```qml
BusyIndicator {
    visible: isLoading
    Layout.alignment: Qt.AlignHCenter
}
```

## BusyIndicator with Text

```qml
ColumnLayout {
    BusyIndicator {
        Layout.alignment: Qt.AlignHCenter
        visible: isLoading
    }
    
    Label {
        Layout.alignment: Qt.AlignHCenter
        text: isLoading ? qsTr("Loading...") : ""
        visible: isLoading
    }
}
```

## Custom Size BusyIndicator

```qml
BusyIndicator {
    width: 60
    height: 60
    visible: isLoading
    Layout.alignment: Qt.AlignHCenter
}
```

## Important Properties

- `visible`: Whether the indicator is visible
- `implicitWidth`: The implicit width of the indicator
- `implicitHeight`: The implicit height of the indicator
- `enabled`: Whether the indicator is enabled