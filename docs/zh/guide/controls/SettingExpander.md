# 设置展开器（SettingExpander）

## 介绍

SettingExpander 具有类似于 SettingCard 的标题，并且可以展开以显示带有内容的 body。使用 SettingItem 将项目添加到 body 中。

## 示例

### 标题和内容区域带有文本的展开器。

::: code-group

```qml
SettingExpander {
    id: expander1
    width: parent.width

    expanded: expandStateSwitch.checked // 假设 expandStateSwitch 在其他地方定义
    enabled: !expanderSwitch.checked // 假设 expanderSwitch 在其他地方定义
    expandDirection: expandDirectionCombobox.currentIndex === 0 // 假设 expandDirectionCombobox 在其他地方定义
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