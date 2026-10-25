# Segmented（分段控件）

`Segmented` 用于在一组数量较少、互斥的选项之间切换。它基于 Qt Quick `TabBar`，由多个 `SegmentedItem` 组成；选中项使用 Fluent 风格的填充、边框和指示器，适合视图切换、筛选模式或紧凑设置。

## 基本用法


<div align="center">
  <img src="/assets/images/docs/Segmented/example-2.png" alt="基本用法 示例">
</div>

```qml
Segmented {
    currentIndex: 0

    SegmentedItem {
        icon.name: "ic_fluent_circle_20_regular"
        text: qsTr("第一项")
    }

    SegmentedItem {
        icon.name: "ic_fluent_circle_20_regular"
        text: qsTr("第二项")
    }

    SegmentedItem {
        icon.name: "ic_fluent_circle_20_regular"
        text: qsTr("第三项")
    }
}
```

`Segmented` 的宽度默认由内容宽度决定。需要占满父容器时，显式设置 `width` 或布局填充属性。

## 仅图标


<div align="center">
  <img src="/assets/images/docs/Segmented/example-3.png" alt="仅图标 示例">
</div>

`SegmentedItem` 可以省略文本，并使用 `ToolTip` 补充含义：

```qml
Segmented {
    SegmentedItem {
        icon.name: "ic_fluent_camera_20_regular"
        ToolTip {
            text: qsTr("相机")
            visible: parent.hovered
        }
    }

    SegmentedItem {
        icon.name: "ic_fluent_image_20_regular"
        ToolTip {
            text: qsTr("图片")
            visible: parent.hovered
        }
    }
}
```

仅图标时仍应提供可访问名称或提示，避免只依赖图形表达含义。

## 动态项目


<div align="center">
  <img src="/assets/images/docs/Segmented/example-4.png" alt="动态项目 示例">
</div>

`Segmented` 继承 `TabBar`，可以使用 `Repeater` 生成项目，并通过 `currentIndex` 读取当前选择：

```qml
Segmented {
    id: segmented
    currentIndex: 0

    Repeater {
        model: [qsTr("概览"), qsTr("详情"), qsTr("历史")]

        SegmentedItem {
            text: modelData
        }
    }
}
```

## 状态与选择


<div align="center">
  <img src="/assets/images/docs/Segmented/example.png" alt="状态与选择 示例">
</div>

- `currentIndex`：当前选中项的索引，继承自 `TabBar`。
- `currentItem`：当前选中项，继承自 `TabBar`。
- `enabled`：为 `false` 时禁用整个控件。
- `SegmentedItem.checked`：由 `TabBar` 维护的选中状态，通常不需要手动修改。
- `SegmentedItem.icon.name`：使用 RinUI 的 Fluent 图标名。

监听选择变化：

```qml
Segmented {
    onCurrentIndexChanged: {
        console.log("当前分段：", currentIndex)
    }
}
```

如果需要执行页面级导航并保留返回历史，应使用 [`NavigationView`](/zh/Navigation/NavigationView)，而不是把分段控件当作完整路由器。

## 与 SelectorBar 的区别

`Segmented` 有统一的边框和填充背景，强调一组互斥选项，适合表单、工具栏和局部视图切换。[`SelectorBar`](/zh/Navigation/SelectorBar) 不绘制外层背景，更接近选项卡式标题栏。

## 相关组件

- [SelectorBar](/zh/Navigation/SelectorBar)：无外框的选择器栏。
- [NavigationView](/zh/Navigation/NavigationView)：页面级导航。
- [NavigationBar](/zh/Navigation/NavigationBar)：垂直导航栏。
