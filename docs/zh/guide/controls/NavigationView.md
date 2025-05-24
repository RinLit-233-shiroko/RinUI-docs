# 导航视图（NavigationView）

## 介绍

<mcurl name="NavigationView" url="https://learn.microsoft.com/zh-cn/windows/apps/design/controls/navigationview"></mcurl>

导航视图控件通过可折叠的导航菜单为应用程序的顶级区域提供通用的垂直布局。

## 示例

### 默认 PaneDisplayMode 的导航视图

::: code-group

```qml
NavigationView {
    navigationItems: [
        {
            icon: "ic_fluent_play_20_regular",
            title: qsTr("菜单项 1"),
            // page: page1 // 引用一个 Component
        },
        {
            icon: "ic_fluent_save_20_regular",
            title: qsTr("菜单项 2"),
            // page: page2 // 引用一个 Component
        },
        {
            icon: "ic_fluent_arrow_sync_20_regular",
            title: qsTr("菜单项 3"),
            // page: page3 // 引用一个 Component
        },
        {
            icon: "ic_fluent_settings_20_regular",
            title: qsTr("设置"),
            // page: page4 // 引用一个 Component
        },
    ]
}
```

:::