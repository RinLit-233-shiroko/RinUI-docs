# 列表视图（ListView）

## 介绍

<mcurl name="ListView" url="https://learn.microsoft.com/zh-cn/windows/apps/design/controls/list-view"></mcurl>

列表视图允许您在垂直滚动的列表中显示项目集合。

## 示例

### 带有简单数据模板的基本列表视图

这是一个基本的列表视图，其完整源代码如下（即将推出）。本页上的其他示例仅显示自定义此类列表视图所需的额外标记。

::: code-group

```qml
ListModel {
    id: studentsModel
    ListElement { name: qsTr("Aikiyo Fuuka") }
    ListElement { name: qsTr("Hayase Yuuka") }
    ListElement { name: qsTr("Hanaoka Yuzu") }
    ListElement { name: qsTr("Kuromi Serika") }
    ListElement { name: qsTr("Kurosaki Koyuki") }
    ListElement { name: qsTr("Kuda Izuna") }
    ListElement { name: qsTr("Okusora Ayane") }
    ListElement { name: qsTr("Saiba Midori") }
    ListElement { name: qsTr("Saiba Momoi") }
    ListElement { name: qsTr("Shiromi Iori") }
    ListElement { name: qsTr("Shishidou Nonomi") }
    ListElement { name: qsTr("Sunaookami Shiroko") }
    ListElement { name: qsTr("Tendou Aris") }
    ListElement { name: qsTr("Ushio Noa") }
    ListElement { name: qsTr("Yutori Natsu") }
}

ListView {
    width: 350
    height: 400
    textRole: "name"
    model: studentsModel
}
```

:::

### 带有自定义列表视图委托的列表视图

您可以自定义 ListViewDelegate 以显示一些自定义项目。ListViewDelegate 是一个组件，它定义了每个委托应如何显示。您可以在 ListViewDelegate 中使用任何 QML 控件来创建自定义内容。

::: code-group

```qml
ListView {
    width: 350
    height: 400

    delegate: ListViewDelegate {
        leftArea: Rectangle {
            width: 32
            height: 32
            radius: 16
            color: "#818181"
        }

        middleArea: [
            Text {
                Layout.alignment: Qt.AlignVCenter | Qt.AlignLeft
                typography: Typography.Body
                wrapMode: Text.Wrap
                text: modelData.name
            },
            Text {
                Layout.alignment: Qt.AlignVCenter | Qt.AlignLeft
                typography: Typography.Caption
                color: Theme.currentTheme.colors.textSecondaryColor
                text: modelData.school
            }
        ]
    }

    model: [
        { name: qsTr("Aikiyo Fuuka"), school: qsTr("Gehenna") },
        { name: qsTr("Hayase Yuuka"), school: qsTr("Millennium") },
        { name: qsTr("Hanaoka Yuzu"), school: qsTr("Millennium") },
        { name: qsTr("Kuromi Serika"), school: qsTr("Abydos") },
        { name: qsTr("Kurosaki Koyuki"), school: qsTr("Millennium") },
        { name: qsTr("Kuda Izuna"), school: qsTr("Hyakkiyako") },
        { name: qsTr("Okusora Ayane"), school: qsTr("Trinity") },
        { name: qsTr("Saiba Midori"), school: qsTr("Millennium") },
        { name: qsTr("Saiba Momoi"), school: qsTr("Millennium") },
        { name: qsTr("Shiromi Iori"), school: qsTr("Gehenna") },
        { name: qsTr("Shishidou Nonomi"), school: qsTr("Abydos") },
        { name: qsTr("Sunaookami Shiroko"), school: qsTr("Abydos") },
        { name: qsTr("Tendou Aris"), school: qsTr("Millennium") },
        { name: qsTr("Ushio Noa"), school: qsTr("Millennium") },
        { name: qsTr("Yutori Natsu"), school: qsTr("Trinity") }
    ]
}
```

:::