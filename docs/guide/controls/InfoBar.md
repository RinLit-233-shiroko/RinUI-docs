# InfoBar

## Introduction

<mcurl name="InfoBar" url="https://learn.microsoft.com/en-us/windows/apps/design/controls/info-bar"></mcurl>

Use an InfoBar control when a user should be informed of, acknowledge, or take action on a changed application state. By default the notification will remain in the content area until closed by the user but will not necessarily break user flow.

## Examples

### A closable InfoBar with options to change its Severity

::: code-group

```qml
InfoBar {
    severity: Severity.Info
    title: qsTr("Title")
    text: qsTr("Essential app message for your users to be informed of, acknowledge, or take action on.")
    closable: true
}
```

:::

### A closeable InfoBar with a long or short text message and various buttons

::: code-group

```qml
InfoBar {
    title: qsTr("World Setting")
    text: qsTr("A story of friendship, youth, and love is about to unfold.")
    closable: true

    customContent: [
        Button {
            text: qsTr("Action")
        }
    ]
}

InfoBar {
    title: qsTr("World Setting")
    text: qsTr("Kivotos — a mysterious and vast land where girls with strange halos above their heads live. However, the peaceful life under the management of the Prime Student Council is shattered when the president suddenly disappears without a trace.")
    closable: true

    customContent: [
        Hyperlink {
            text: qsTr("What is Blue Archive?")
            openUrl: "https://bluearchive.nexon.com/"
        }
    ]
}
```

:::

### A closable InfoBar with options to display the close button and icon

::: code-group

```qml
InfoBar {
    title: qsTr("Title")
    text: qsTr("Essential app message for your users to be informed of, acknowledge, or take action on.")
    closable: false
    iconVisible: false
}
```

:::

### InfoBar with different popup positions & styles

::: code-group

```qml
Column {
    spacing: 6
    InfoBar {
        title: qsTr("InfoBar with TopLeft popup position")
        text: qsTr("This is a InfoBar with TopLeft popup position.")
        popupPosition: Position.TopLeft
    }
    InfoBar {
        title: qsTr("InfoBar with TopCenter popup position")
        text: qsTr("This is a InfoBar with TopCenter popup position.")
        popupPosition: Position.TopCenter
    }
    InfoBar {
        title: qsTr("InfoBar with TopRight popup position")
        text: qsTr("This is a InfoBar with TopRight popup position.")
        popupPosition: Position.TopRight
    }
    InfoBar {
        title: qsTr("InfoBar with BottomLeft popup position")
        text: qsTr("This is a InfoBar with BottomLeft popup position.")
        popupPosition: Position.BottomLeft
    }
    InfoBar {
        title: qsTr("InfoBar with BottomCenter popup position")
        text: qsTr("This is a InfoBar with BottomCenter popup position.")
        popupPosition: Position.BottomCenter
    }
    InfoBar {
        title: qsTr("InfoBar with BottomRight popup position")
        text: qsTr("This is a InfoBar with BottomRight popup position.")
        popupPosition: Position.BottomRight
    }
}
```

:::