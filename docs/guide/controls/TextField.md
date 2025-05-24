# TextField

## Introduction

<mcurl name="TextField" url="https://learn.microsoft.com/en-us/windows/apps/design/controls/text-box"></mcurl>

Use a TextField to let a user enter simple text input in your app. You can add a placeholder text to let the user know what the TextField is for, and you can customize it in other ways.

## Examples

### A simple TextField

::: code-group

```qml
TextField {
    // ... existing code ...
}
```

:::

### A TextField with a placeholder text

::: code-group

```qml
TextField {
    width: 175
    placeholderText: qsTr("Name")
}
```

:::