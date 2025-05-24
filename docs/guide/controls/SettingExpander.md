# SettingExpander

## Introduction

The SettingExpander has a header like SettingCard and can expand to show a body with content. Use the SettingItem to add items to the body.

## Examples

### An Expander with text in the header and content areas

::: code-group

```qml
SettingExpander {
    id: expander1
    width: parent.width

    expanded: expandStateSwitch.checked // Assuming expandStateSwitch is defined elsewhere
    enabled: !expanderSwitch.checked // Assuming expanderSwitch is defined elsewhere
    expandDirection: expandDirectionCombobox.currentIndex === 0 // Assuming expandDirectionCombobox is defined elsewhere
        ? Expander.Up : Expander.Down

    icon: "ic_fluent_box_20_regular"
    title: qsTr("SettingExpander")
    description: qsTr(
        "The SettingExpander has the same properties as SettingCard, " +
        "and you can set SettingItem as part of the Items collection."
    )

    // header 中的按钮
    content: ComboBox {
        model: ["Option 1", "Option 2", "Option 3"]
    }

    // 折叠内容
    SettingItem {
        title: qsTr("A SettingItem within an SettingExpander")


        Button {
            text: qsTr("Button")
        }
    }
    SettingItem {
        Column {
            Layout.fillWidth: true
            CheckBox {
                width: parent.width
                text: qsTr("A CheckBox within an SettingExpander")
            }
            CheckBox {
                width: parent.width
                text: qsTr("A CheckBox within an SettingExpander")
            }
        }
    }
    SettingItem {
        title: qsTr("SettingItem")
        description: qsTr("ItemType: Switch")

        Switch {}
    }
    SettingItem {
        title: qsTr("Test")
        description: qsTr("ItemType: Hyperlink")

        Hyperlink {
            text: qsTr("What is BlueArchive?")
            openUrl: "https://bluearchive.nexon.com/"
        }
    }
}
```

:::