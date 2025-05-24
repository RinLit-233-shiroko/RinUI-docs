# 超链接（Hyperlink）

## 介绍

<mcurl name="Hyperlink" url="https://learn.microsoft.com/zh-cn/windows/apps/design/controls/hyperlinks"></mcurl>

超链接显示为文本超链接。当用户单击它时，它会在默认浏览器中打开您在 `openUrl` 属性中指定的页面。或者您可以处理其 `onClicked` 事件，通常用于在您的应用中导航。

## 示例

### 导航到 URL 的超链接

::: code-group

```qml
Hyperlink {
    text: qsTr("RinUI home page")
    openUrl: "https://ui.rinlit.cn/"
}
```

:::

### 处理 Click 事件的超链接

::: code-group

```qml
Hyperlink {
    text: qsTr("Back to gallery home page")
    onClicked: { navigationView.safePush(Qt.resolvedUrl("../Home.qml")) }
}
```

:::