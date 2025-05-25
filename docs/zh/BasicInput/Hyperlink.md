# 超链接

Hyperlink 组件用于创建充当链接的文本。它的样式类似于传统的网页超链接，可用于导航到外部 URL 或触发应用程序内的操作。它继承自 `Button`，并默认设置 `flat: true` 和 `highlighted: true`。

## 基本超链接到 URL

要创建在默认 Web 浏览器中打开外部 URL 的超链接，请设置用于显示的 `text` 和 `openUrl`（或其别名 `url`）属性。

<div align="center">
  <img src="/assets/images/BasicInput/Hyperlink/hyperlink-url.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

Hyperlink {
    text: qsTr("Visit RinUI Project")
    openUrl: "https://github.com/RinLit-233-shiroko/Rin-UI"
}
```

## 用于应用内操作的超链接

您还可以使用 `Hyperlink` 通过处理其 `onClicked` 信号来触发内部应用程序操作。如果您只想执行应用内操作而不导航到 URL，请不要设置 `openUrl` 属性。

<div align="center">
  <img src="/assets/images/BasicInput/Hyperlink/hyperlink-action.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
Hyperlink {
    text: qsTr("Go to Settings")
    onClicked: {
        // 导航到应用内设置页面的逻辑
        console.log("Settings link clicked");
        // 示例: stackView.push(settingsPageComponent)
    }
}
```

## 主要属性

*   `text`: `string` - 超链接的可见文本。
*   `openUrl`: `url` - 点击超链接时打开的 URL。默认的 `onClicked` 处理程序将尝试在外部打开此 URL。
*   `url`: `url` - `openUrl` 的别名。
*   `enabled`: `bool` - 控件是否可交互。默认为 `true`。

作为 `Button` 的派生组件，其他属性如 `icon.name`、`icon.source` 等也可以使用。默认样式（`flat: true`、`highlighted: true`）使其具有典型的链接外观。

## 信号

*   `onClicked()`: 当超链接被点击时发出。如果也设置了 `openUrl`，则默认行为是尝试打开该 URL。可以向此处理程序添加自定义逻辑以进行应用内导航或其他操作。

```
