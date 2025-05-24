# DropDownButton

## Introduction

<mcurl name="DropDownButton" url="https://learn.microsoft.com/en-us/windows/apps/design/controls/buttons#split-buttons"></mcurl>

A DropDownButton looks like a Button, but works like a CheckBox. It typically has two states, checked (on) or unchecked (off).

## Examples

### A simple DropDownButton with text content

::: code-group

```qml
DropDownButton {
    text: qsTr("Email")

    MenuItem {
        text: qsTr("Send")
    }
    MenuItem {
        text: qsTr("Reply")
    }
    MenuItem {
        text: qsTr("Reply All")
    }
}
```

:::

### DropDownButton with Icons

::: code-group

```qml
DropDownButton {
    icon.name: "ic_fluent_mail_20_regular"
    text: qsTr("Email")

    MenuItem {
        icon.name: "ic_fluent_send_20_filled"
        text: qsTr("Send")
    }
    MenuItem {
        icon.name: "ic_fluent_mail_arrow_up_20_regular"
        text: qsTr("Reply")
    }
    MenuItem {
        icon.name: "ic_fluent_mail_arrow_double_back_20_regular"
        text: qsTr("Reply All")
    }
}
```

:::