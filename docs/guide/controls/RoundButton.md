# RoundButton

## Introduction

A RoundButton looks like a Button, except that it has a radius property which allows the corners to be rounded without having to customize the background.

## Examples

### A simple RoundButton.

::: code-group

```qml
RoundButton {
    text: qsTr("RoundButton")
    enabled: !buttonSwitch.checked // Assuming buttonSwitch is defined elsewhere
}
```

:::