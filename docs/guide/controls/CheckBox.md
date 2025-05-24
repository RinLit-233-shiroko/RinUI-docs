# CheckBox

## Introduction

<mcurl name="CheckBox" url="https://learn.microsoft.com/en-us/windows/apps/design/controls/checkbox"></mcurl>

CheckBox controls let the user select a combination of binary options. In contrast, RadioButton controls allow the user to select from mutually exclusive options. The indeterminate state is used to indicate that an option is set for some, but not all, child options. Don't allow users to set an indeterminate state directly to indicate a third option.

## Examples

### A 2-state CheckBox.

::: code-group

```qml
CheckBox {
    text: qsTr("Two-state CheckBox")
}
```

:::

### A 3-state CheckBox.

::: code-group

```qml
CheckBox {
    tristate: true
    text: qsTr("Three-state CheckBox")
}
```

:::

### Using a 3-state CheckBox.

::: code-group

```qml
ButtonGroup {
    id: childGroup
    exclusive: false
    checkState: parentBox.checkState
}

CheckBox {
    id: parentBox
    text: qsTr("Select all")
    checkState: childGroup.checkState
}

CheckBox {
    checked: true
    text: qsTr("Option 1")
    leftPadding: indicator.width
    ButtonGroup.group: childGroup
}

CheckBox {
    text: qsTr("Option 2")
    leftPadding: indicator.width
    ButtonGroup.group: childGroup
}

CheckBox {
    text: qsTr("Option 3")
    leftPadding: indicator.width
    ButtonGroup.group: childGroup
}
```

:::