import QtQuick 2.15
import QtQuick.Controls 2.15
import QtQuick.Layouts 2.15
import Qt5Compat.GraphicalEffects  // 图形库
import RinUI
import "../assets"
import "../components"

FluentPage {
    // title: "test"
    horizontalPadding: 0
    wrapperWidth: width - 42*2

    // Banner / 横幅 //
    contentHeader: Item {
        width: parent.width
        height: Math.max(window.height * 0.35, 200)

        Image {
            id: banner
            anchors.fill: parent
            source: "../assets/banner.png"
            fillMode: Image.PreserveAspectCrop
            verticalAlignment: Image.AlignTop

            layer.enabled: true
            layer.effect: OpacityMask {
                maskSource: Rectangle {
                    width: banner.width
                    height: banner.height

                    // 渐变效果
                    gradient: Gradient {
                        GradientStop { position: 0.7; color: "white" }  // 不透明
                        GradientStop { position: 1.0; color: "transparent" }  // 完全透明
                    }
                }
            }
        }

        Column {
            anchors {
                top: parent.top
                left: parent.left
                leftMargin: 56
                topMargin: 38
            }
            spacing: 8

            Text {
                color: "#fff"
                typography: Typography.BodyLarge
                text: qsTr("A Fluent Design-like UI library for Qt Quick")
            }

            Text {
                color: "#fff"
                typography: Typography.TitleLarge
                text: qsTr("RinUI Gallery")
            }
        }
    }

    // Special Warning
    InfoBar {
        Layout.fillWidth: true
        severity: Severity.Info
        closable: false
        title: qsTr("Notice")
        text: qsTr(
            "Rin UI Gallery is <b>refactoring</b> its pages to make the gallery more compatible with WinUI Gallery. " +
            "Some pages are still unfinished, the new gallery will available soon."
        )
    }

    // Content / 内容 //
    Column {
        Layout.fillWidth: true
        spacing: 8
        Text {
            typography: Typography.Subtitle
            text: qsTr("Recently added samples")
        }

        Grid {
            width: parent.width
            columns: Math.floor(width / (360 + 6)) // 自动算列数
            rowSpacing: 12
            columnSpacing: 12
            layoutDirection: GridLayout.LeftToRight

            Repeater {
                model: ItemData.recentlyAddedItems
                delegate: ControlClip { }
            }
        }
    }

    Column {
        Layout.fillWidth: true
        spacing: 8
        Text {
            typography: Typography.Subtitle
            text: qsTr("Recently updated samples")
        }

        Grid {
            width: parent.width
            columns: Math.floor(width / (360 + 6)) // 自动算列数
            rowSpacing: 12
            columnSpacing: 12
            layoutDirection: GridLayout.LeftToRight

            Repeater {
                model: ItemData.recentlyUpdatedItems
                delegate: ControlClip { }
            }
        }
    }
}
