# BusyIndicator

`BusyIndicator` signals that an operation is still in progress with a looping animation. Use it for loading data or submitting a request when a definite completion percentage is not available.

## Basic Usage

<div align="center">
  <img src="/assets/images/docs/BusyIndicator/example-2.png" alt="Basic Usage">
</div>

```qml
BusyIndicator {
    running: true
}
```
```

## Combine with Status Text

<div align="center">
  <img src="/assets/images/docs/BusyIndicator/example-3.png" alt="Combine with Status Text">
</div>

```qml
Column {
    spacing: 12

    BusyIndicator {
        anchors.horizontalCenter: parent.horizontalCenter
        running: isLoading
    }

    Text {
        anchors.horizontalCenter: parent.horizontalCenter
        text: isLoading ? qsTr("Loading...") : qsTr("Complete")
    }
}
```

Provide `isLoading` from application logic and update it when the asynchronous operation starts and finishes.

## Custom Size

<div align="center">
  <img src="/assets/images/docs/BusyIndicator/example.png" alt="Custom Size">
</div>

```qml
BusyIndicator {
    width: 60
    height: 60
    running: true
}
```
```

## Properties

- `running`: Whether the busy animation is shown and running; this is a compatibility property provided by BusyIndicator.
- `state`: Inherited from ProgressRing; can be used to set running, paused, or error state.
- `width`, `height`: Display size of the indicator.
- `indeterminate`: Internal indeterminate-animation setting controlled by `running`.
