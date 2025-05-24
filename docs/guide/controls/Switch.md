# Switch

## Introduction

<mcurl name="Switch" url="https://learn.microsoft.com/en-us/windows/apps/design/controls/toggles"></mcurl>

Use Switch controls to present users with exactly two mutually exclusive options (like on/off), where choosing an option results in an immediate commit. A switch should have a single label.

## Examples

### A simple Switch

::: code-group

```qml
Switch {
    // ... existing code ...
}
```

:::

### Switch with checked and unchecked text

::: code-group

```qml
Switch {
    checked: true
    checkedText: qsTr("Working")
    uncheckedText: qsTr("Do work")
}
```

:::