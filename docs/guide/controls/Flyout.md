# Flyout

## Introduction

<mcurl name="Flyout" url="https://learn.microsoft.com/en-us/windows/apps/design/controls/dialogs-and-flyouts/flyouts"></mcurl>

A Flyout displays lightweight UI that is either information, or requires user interaction. Unlike a Dialog, a Flyout can be light dismissed by clicking or tapping off of it. Use it to collect input from the user, show more details about an item, or ask the user to confirm an action.

## Examples

### A button with a flyout

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

### Flyouts with different positions, and different contents

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