import QtQuick 2.15
import QtQuick.Controls 2.15
import QtQuick.Layouts 2.15
import RinUI
import "../../components"

ControlPage {
    title: qsTr("TextArea")

    // intro
    Text {
        Layout.fillWidth: true
        text: qsTr(
            "Use a TextField to let a user enter multiple lines of text input in your app. You can add a placeholder text " +
            "to let the user know what the TextArea is for, and you can customize it in other ways."
        )
    }

    Column {
        Layout.fillWidth: true
        spacing: 4

        Text {
            typography: Typography.BodyStrong
            text: qsTr("A simple TextArea.")
        }
        Frame {
            width: parent.width
            TextArea {
                width: 200
            }
        }
    }

    Column {
        Layout.fillWidth: true
        spacing: 4

        Text {
            typography: Typography.BodyStrong
            text: qsTr("A simple TextArea.")
        }
        Frame {
            width: parent.width
            TextArea {
                placeholderText: qsTr("Enter your profile...")
                width: 200
            }
        }
    }
}
