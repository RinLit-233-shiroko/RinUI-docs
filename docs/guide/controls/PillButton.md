# PillButton

## Introduction

A PillButton looks and works like a ToggleButton. It typically has two states, checked (on) or unchecked (off).

## Examples

### A simple PillButton.

::: code-group

```qml
PillButton {
    text: qsTr("PillButton")
    enabled: !buttonSwitch.checked // Assuming buttonSwitch is defined elsewhere
}
```

:::