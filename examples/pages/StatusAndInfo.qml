import QtQuick 2.15
import QtQuick.Controls 2.15
import QtQuick.Layouts 2.15
import RinUI
import "../components"

FluentPage {
    id: page
    title: "Status & Info"

    Column {
        Layout.fillWidth: true
        spacing: 4

        Text {
            typography: Typography.Subtitle
            text: qsTr("InfoBar")
        }
        Text {
            width: parent.width
            typography: Typography.Body
            text: qsTr("Use an InfoBar control when a user should be informed of, acknowledge, " +
             "or take action on a changed application state.")
        }

        ControlShowcase {
            width: parent.width
            height: 300
            padding: 48

            InfoBar {
                id: infoBar
                width: parent.width
                severity: infoBarSeverityComboBox.model.get(infoBarSeverityComboBox.currentIndex).state
                title: qsTr("InfoBar")
                text: qsTr("This is an InfoBar.")
                visible: infoBarSwitch.checked
            }

            InfoBar {
                id: infoBarMultiLine
                width: parent.width
                severity: infoBarSeverityComboBox.model.get(infoBarSeverityComboBox.currentIndex).state
                title: qsTr("World Setting")
                text: qsTr("Kivotos — a mysterious and vast land where girls with strange halos above their heads live.")
                closable: false

                customContent: Hyperlink {
                    text: qsTr("What is Blue Archive?")
                    openUrl: "https://bluearchive.nexon.com/"
                }
            }

            showcase: [
                Text {
                    text: "Is Open"
                },
                Switch {
                    id: infoBarSwitch
                    checked: infoBar.visible
                    onCheckedChanged: {
                        infoBar.visible = infoBarSwitch.checked
                    }
                },
                Text {
                    text: qsTr("Severity")
                },
                ComboBox {
                    id: infoBarSeverityComboBox
                    model: ListModel {
                        ListElement { text: "Info"; state: Severity.Info }
                        ListElement { text: "Success"; state: Severity.Success }
                        ListElement { text: "Warning"; state: Severity.Warning }
                        ListElement { text: "Error"; state: Severity.Error }
                    }
                    textRole: "text"
                    currentIndex: 0
                }
            ]
        }

        Text {
            typography: Typography.BodyStrong
                text: "InfoBar with different popup positions & styles"
        }
        Frame {
            width: parent.width
            Column {
                spacing: 6
                Row {
                    spacing: 12
                    Column {
                        Text {
                        text: qsTr("Location")
                        }
                        ComboBox {
                            id: positionComboBox
                            model: ListModel {
                                ListElement { text: "Top"; pos: Position.Top }
                                ListElement { text: "Bottom"; pos: Position.Bottom }
                                ListElement { text: "TopLeft"; pos: Position.TopLeft }
                                ListElement { text: "TopRight"; pos: Position.TopRight }
                                ListElement { text: "BottomLeft"; pos: Position.BottomLeft }
                                ListElement { text: "BottomRight"; pos: Position.BottomRight }
                            }
                            textRole: "text"
                            currentIndex: 0
                        }
                    }
                    Column {
                        Text {
                            text: qsTr("Style")
                        }
                        ComboBox {
                            id: infoBarSeverityComboBox2
                            model: ListModel {
                                ListElement { text: "Info"; state: Severity.Info }
                                ListElement { text: "Success"; state: Severity.Success }
                                ListElement { text: "Warning"; state: Severity.Warning }
                                ListElement { text: "Error"; state: Severity.Error }
                            }
                            textRole: "text"
                            currentIndex: 0
                        }
                    }
                    TextField {
                        width: 100
                        id: infoBarTitle
                        placeholderText: qsTr("Title")
                    }
                    TextField {
                        width: 200
                        id: infoBarText
                        placeholderText: qsTr("Text")
                    }
                }
                Row {
                    spacing: 6
                    Button {
                        text: qsTr("Popup!")
                        highlighted: true
                        icon.name: "ic_fluent_alert_on_20_regular"
                        onClicked: {
                            floatLayer.createInfoBar({
                                severity: infoBarSeverityComboBox2.model.get(infoBarSeverityComboBox2.currentIndex).state,
                                title: infoBarTitle.text,
                                text: infoBarText.text,
                                position: positionComboBox.model.get(positionComboBox.currentIndex).pos
                            })
                        }
                    }
                    Button {
                        Component {
                            id: customInfoBar
                            InfoBar {
                                timeout: 2000
                                severity: Severity.Success
                                title: qsTr("Sunaookami Shiroko")
                                text: qsTr("\"The more prepared you are, the better. It's a simple rule.\"")
                                customContent: [
                                    Button {
                                        text: "Click Me!"
                                        onClicked: {
                                            floatLayer.createInfoBar({title: "Sunaookami Shiroko", text: "Clicked!"})
                                        }
                                    },
                                    IconWidget {
                                        // Layout.fillWidth: true
                                        size: 64
                                        source: Qt.resolvedUrl("../assets/BA_Pic_Shiroko-chibi.png")
                                    }
                                ]
                            }
                        }
                        text: qsTr("Popup a custom InfoBar")
                        icon.name: "ic_fluent_alert_on_20_regular"
                        onClicked: {
                            floatLayer.createCustom(customInfoBar)
                        }
                    }
                }
            }
        }
    }

    Column {
        Layout.fillWidth: true
        spacing: 4

        Text {
            typography: Typography.Subtitle
            text: qsTr("ProgressBar")
        }
        Text {
            width: parent.width
            typography: Typography.Body
            text: qsTr("The ProgressBar has two different visual representations:\n" +
                "Indeterminate - shows that a task is ongoing, but doesn't block user interaction.\n" +
                "Determinate - shows how much progress has been made on a known amount of work.")
        }

        ControlShowcase {
            width: parent.width

            Column {
                padding: 36
                spacing: 4

                Text {
                    text: qsTr("Determinate")
                }
                ProgressBar {
                    from: 0
                    to: 100
                    value: progressSlider.value
                    state: stateComboBox.model.get(stateComboBox.currentIndex).state
                }

                Text {
                    text: qsTr("Indeterminate")
                }
                ProgressBar {
                    indeterminate: true
                    state: stateComboBox.model.get(stateComboBox.currentIndex).state
                }
            }

            showcase: [
                Text {
                    text: qsTr("Progress")
                },
                Slider {
                    id: progressSlider
                    from: 0
                    to: 100
                    stepSize: 1
                    value: 50
                },
                Text {
                    text: qsTr("State")
                },
                ComboBox {
                    id: stateComboBox
                    model: ListModel {
                        ListElement { text: "Running"; state: ProgressBar.Running }
                        ListElement { text: "Paused"; state: ProgressBar.Paused }
                        ListElement { text: "Error"; state: ProgressBar.Error }
                    }
                    textRole: "text"
                    currentIndex: 0
                }
            ]
        }
    }

    // Tooltip //
    Column {
        Layout.fillWidth: true
        spacing: 4

        Text {
            typography: Typography.Subtitle
            text: qsTr("Tooltip")
        }
        Text {
            width: parent.width
            typography: Typography.Body
            text: qsTr("A Tooltip shows more information about a UI element.")
        }

        Frame {
            width: parent.width

            Button {
                text: qsTr("Button with a simple Tooltip")

                ToolTip {
                    parent: parent
                    delay: 500
                    visible: parent.hovered
                    text: "This is a tooltip"
                }
            }
        }
    }
}
