# 浮出控件（Flyout）

## 介绍

<mcurl name="Flyout" url="https://learn.microsoft.com/zh-cn/windows/apps/design/controls/dialogs-and-flyouts/flyouts"></mcurl>

浮出控件显示轻量级 UI，可以是信息，也可以需要用户交互。与对话框不同，浮出控件可以通过单击或点击其外部来轻松关闭。使用它来收集用户输入、显示有关项目的更多详细信息或要求用户确认操作。

## 示例

### 带有浮出控件的按钮

::: code-group

```qml
Button {
    text: qsTr("Empty cart")
    onClicked: {
        flyout.open()
    }

    Flyout {
        id: flyout
        text: qsTr("All items will be removed. Do you want to continue?")
        buttonBox: [
            Button {
                text: qsTr("Yes, empty my cart")
                onClicked: flyout.close()
            }
        ]
    }
}
```

:::

### 不同位置和不同内容的浮出控件

::: code-group

```qml
Row {
    spacing: 8
    Button {
        text: qsTr("Top flyout")
        onClicked: {
            flyoutTop.open()
        }

        Flyout {
            id: flyoutTop
            image: Qt.resolvedUrl("../../assets/banner.png")
            text: qsTr("The flyout is on the Top")
        }
    }
    Button {
        text: qsTr("Bottom flyout")
        onClicked: {
            flyoutBottom.open()
        }

        Flyout {
            id: flyoutBottom
            position: Position.Bottom
            text: qsTr("Do you want to continue?")
            buttonBox: [
                Button {
                    Layout.fillWidth: true
                    highlighted: true
                    text: qsTr("Continue")
                    onClicked: flyoutBottom.close()
                },
                Button {
                    Layout.fillWidth: true
                    text: qsTr("Cancel")
                    onClicked: flyoutBottom.close()
                }
            ]
        }
    }
    Button {
        text: qsTr("Left flyout")
        onClicked: {
            flyoutLeft.open()
        }

        Flyout {
            id: flyoutLeft
            position: Position.Left
            maximumWidth: 200
            text: qsTr("The flyout is on the Left")

            image: Qt.resolvedUrl("../../assets/BA_Pic_Shiroko-chibi.png")
        }
    }
    Button {
        text: qsTr("Right flyout")
        onClicked: {
            flyoutRight.open()
        }

        Flyout {
            id: flyoutRight
            position: Position.Right
            text: qsTr("The flyout is on the Right")
        }
    }
}
```

:::