# ListView

## Introduction

<mcurl name="ListView" url="https://learn.microsoft.com/en-us/windows/apps/design/controls/list-view"></mcurl>

The ListView lets you show a collection of items in a list that scrolls vertically.

## Examples

### Basic ListView with Simple DataTemplate

This is a basic ListView that has the full source code below (coming soon). Other samples on this page display only the additional markup needed customize the ListView like this one.

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

### ListView with custom ListViewDelegate

You can customize the ListViewDelegate to show some custom items. The ListViewDelegate is a component that defines how each delegates should look. You can use any QML controls inside the ListViewDelegate to create a custom contents.

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