# TextArea

## Introduction

<mcurl name="TextArea" url="https://learn.microsoft.com/en-us/windows/apps/design/controls/text-box"></mcurl>

Use a TextArea to let a user enter multiple lines of text input in your app. You can add a placeholder text to let the user know what the TextArea is for, and you can customize it in other ways.

## Examples

### A simple TextArea

::: code-group

```qml
TextArea {
    width: 200
}
```

:::

### TextArea with placeholder text

::: code-group

```qml
TextArea {
    placeholderText: qsTr("Enter your profile...")
    width: 200
}
```

:::