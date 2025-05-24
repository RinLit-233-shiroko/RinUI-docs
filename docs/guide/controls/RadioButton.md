# RadioButton

## Introduction

<mcurl name="RadioButton" url="https://learn.microsoft.com/en-us/windows/apps/design/controls/radio-button"></mcurl>

Use RadioButtons to let a user choose between mutually exclusive, related options. Generally contained within a RadioButtons group control.

## Examples

### A group of RadioButton controls in a layout group.

::: code-group

```qml
Column {
    spacing: 4

    RadioButton {
        text: qsTr("Option 1")
    }
    RadioButton {
        text: qsTr("Option 2")
    }
    RadioButton {
        text: qsTr("Option 3")
    }
}
```

:::