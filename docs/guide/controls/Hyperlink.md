# Hyperlink

## Introduction

<mcurl name="Hyperlink" url="https://learn.microsoft.com/en-us/windows/apps/design/controls/hyperlinks"></mcurl>

A Hyperlink appears as a text hyperlink. When a user clicks it, it opens the page you specify in the `openUrl` property in the default browser. Or you can handle its `onClicked` event, typically to navigate within your app.

## Examples

### A hyperlink that navigates to a URL

::: code-group

```qml
Hyperlink {
    text: qsTr("RinUI home page")
    openUrl: "https://ui.rinlit.cn/"
}
```

:::

### A hyperlink that handles a Click event

::: code-group

```qml
Hyperlink {
    text: qsTr("Back to gallery home page")
    onClicked: { navigationView.safePush(Qt.resolvedUrl("../Home.qml")) }
}
```

:::