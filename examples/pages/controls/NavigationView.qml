import QtQuick 2.15
import QtQuick.Controls 2.15
import QtQuick.Layouts 2.15
import RinUI
import "../../components"

ControlPage {
    title: qsTr("NavigationView")
    wrapperWidth: 1920
    badgeText: qsTr("Extra")
    badgeSeverity: Severity.Success

    // intro
    Text {
        Layout.fillWidth: true
        text: qsTr(
            "The navigation view control provides a common vertical layout for top-level areas of your app "+
            "via a collapsible navigation menu."
        )
    }

    // 展示页面
    Component {
        id: page1

        SamplePage {
            title: qsTr("Sample Page 1")
        }
    }

    Component {
        id: page2

        FluentPage {
            title: qsTr("Sample Page 2")
            GridLayout {
                Layout.fillWidth: true
                height: 400
                columns: 2
                rowSpacing: 12
                columnSpacing: 12

                Rectangle {
                    color: Theme.currentTheme.colors.primaryColor
                    width: 150
                    height: 200
                    Layout.rowSpan: 2
                }

                Text {
                    typography: Typography.Title
                    Layout.fillWidth: true
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                }
                Text {
                    typography: Typography.Body
                    Layout.fillWidth: true
                    Layout.fillHeight: true
                    text: "Abydos High School, the longest running school in Kivotos, formerly thriving and boasting incredible financial and military power, before the unnatural and unfortunate desertification struck. Nowadays, most of its buildings have been covered in sand and ruins, leaving behind only an annex which seems to be the very last remains of the school."
                }
            }
        }
    }

    Component {
        id: page3

        SamplePage {
            title: qsTr("Sample Page 3")
            primaryColor: "#e9967a"
            gridColor: "#f08080"
            gridSecondaryColor: "#cd5c5c"
        }
    }

    Component {
        id: page4

        FluentPage {
            title: qsTr("Settings")
        }
    }

    Column {
        Layout.fillWidth: true
        spacing: 4

        Text {
            typography: Typography.BodyStrong
            text: qsTr("NavigationView with default PaneDisplayMode")
        }
        Frame {
            width: parent.width
            topPadding: 50
            padding: 12
            height: 500

            NavigationView {
                id: navView
                window: parent

                navigationItems: [
                    {
                        icon: "ic_fluent_play_20_regular",
                        title: qsTr("Menu Item 1"),
                        page: page1
                    },
                    {
                        icon: "ic_fluent_save_20_regular",
                        title: qsTr("Menu Item 2"),
                        page: page2
                    },
                    {
                        icon: "ic_fluent_arrow_sync_20_regular",
                        title: qsTr("Menu Item 3"),
                        page: page3
                    },
                    {
                        icon: "ic_fluent_settings_20_regular",
                        title: qsTr("Settings"),
                        page: page4
                    },
                ]
            }
        }
    }
}
