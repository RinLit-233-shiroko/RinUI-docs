# FluentPage（Fluent 页面）

`FluentPage` 是 RinUI 页面内容的标准容器。它基于 Qt Quick `Page`，统一处理页面标题、滚动区域、内容宽度、内边距和可选页脚，适合作为 `NavigationView` 中的页面根节点。

<VPImage
  :image="{
    light: '/assets/images/examples/FluentPage-light.png',
    dark: '/assets/images/examples/FluentPage-dark.png',
    alt: 'FluentPage 组件示例（亮色与暗色）'
  }"
  width="1000"
/>

## 基本页面


<div align="center">
  <img src="/assets/images/docs/FluentPage/example-2.png" alt="基本页面 示例">
</div>

```qml
import QtQuick
import QtQuick.Layouts
import RinUI

FluentPage {
    title: qsTr("设置")

    Text {
        Layout.fillWidth: true
        typography: Typography.Body
        text: qsTr("在这里放置页面内容。")
    }

    SettingCard {
        Layout.fillWidth: true
        title: qsTr("外观")
        description: qsTr("选择应用的明暗主题。")
        content: ComboBox {
            model: ["自动", "浅色", "深色"]
        }
    }
}
```

页面正文位于内部 `ColumnLayout` 中，因此 `Layout.fillWidth: true` 这类布局附加属性可以直接使用。

## 标题与头部


<div align="center">
  <img src="/assets/images/docs/FluentPage/example-3.png" alt="标题与头部 示例">
</div>

设置 `title` 后，页面会显示统一风格的标题行。`extraHeaderItems` 会把附加控件放在标题右侧；`customHeader` 和 `contentHeader` 分别用于替换头部内容、在正文前插入独立横幅或说明区域。

```qml
FluentPage {
    title: qsTr("账户")

    extraHeaderItems: Button {
        text: qsTr("保存")
    }

    contentHeader: Frame {
        width: parent.width
        height: 120

        Text {
            anchors.centerIn: parent
            text: qsTr("账户概览")
        }
    }
}
```

## 页脚


<div align="center">
  <img src="/assets/images/docs/FluentPage/example-4.png" alt="页脚 示例">
</div>

`pageFooter` 使用 Qt Quick `Page.footer`，适合放置固定在页面底部的操作栏：

```qml
FluentPage {
    title: qsTr("编辑")

    pageFooter: Frame {
        height: 56

        Row {
            anchors.right: parent.right
            anchors.verticalCenter: parent.verticalCenter
            spacing: 8

            Button { text: qsTr("取消") }
            Button {
                highlighted: true
                text: qsTr("保存")
            }
        }
    }
}
```

页脚不是悬浮层的替代品。需要临时提示、通知或上下文弹窗时，请使用 `FloatLayer`。

## 内容宽度与间距


<div align="center">
  <img src="/assets/images/docs/FluentPage/example.png" alt="内容宽度与间距 示例">
</div>

页面默认使用 `wrapperWidth: 1000` 和 `horizontalPadding: 56`，把正文限制在可读宽度内并保留水平边距。`contentSpacing` 控制正文 `ColumnLayout` 的项目间距，`spacing` 控制页面自身的间距。

窗口较窄时可以减小内边距；需要满宽内容时可以提高 `wrapperWidth`，但应自行保证文本行长和响应式布局：

```qml
FluentPage {
    horizontalPadding: 24
    wrapperWidth: 1400
    contentSpacing: 18
}
```

## 重要属性

| 属性 | 默认值 | 说明 |
| --- | --- | --- |
| `title` | `""` | 页面标题，非空时显示标题行。 |
| `content` | 默认属性 | 正文内容容器。 |
| `contentHeader` | 空 | 正文上方的独立内容区域。 |
| `customHeader` | 空 | 标题行中的自定义内容。 |
| `extraHeaderItems` | 空 | 标题行右侧的附加操作。 |
| `pageFooter` | 空 | 页面底部区域。 |
| `radius` | 主题窗口圆角 | 页面圆角值。 |
| `wrapperWidth` | `1000` | 正文最大宽度。 |
| `horizontalPadding` | `56` | 页面水平内边距。 |
| `spacing` | `14` | 页面间距。 |
| `contentSpacing` | 继承正文布局 | 正文项目的间距。 |

## 滚动内容

`FluentPage` 自带纵向 `Flickable` 和滚动条。不要把整页再包进一个无限高度的 `Flickable`，否则可能出现双重滚动。让页面内容按正常高度布局，长内容会由 `FluentPage` 负责滚动。

## 相关组件

- [FluentWindow](/zh/Windowing/FluentWindow)：创建包含页面的应用窗口。
- [NavigationView](/zh/Navigation/NavigationView)：管理页面切换与历史栈。
- [Frame](/zh/ListAndCollections/Frame)：页面内的分组容器。
