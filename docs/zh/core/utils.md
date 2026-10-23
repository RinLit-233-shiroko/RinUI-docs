# 辅助工具（`Utils`）

## 概述

RinUI 提供了一个名为 `Utils` 的单例对象，用于管理全局通用资源、字体和动画时长等。这是 RinUI 应用中不可或缺的辅助模块。您可以修改这些属性的值来自定义 RinUI 的外观和行为。

您可以像这样使用辅助工具`Utils`：
```qml
import RinUI

Component {
    // 获取 Utils 属性
    property var property: Utils.property;
    
    // 修改 Utils 属性
    Component.onCompleted: {
        Utils.property = newValue;
    }
}
```

## 外观与主题
| 属性           | 	说明                                                                                                                                   |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------|
| primaryColor | 	主题主色，默认读取后端的配置文件默认值 `#605ed2` <br/> 建议通过 [`Theme.setThemeColor(color: str)`](/zh/core/theme.md#setthemecolor-color-str) 修改主题色        |
| colors       | 	RinUI 当前选定主题的颜色表，RinUI 的所有控件的颜色都会引用                                                                                                  |
| appearance   | 	当前主题的外观设定（如圆角、阴影、透明度）                                                                                                                |
| typography   | 	目前仅存储字体的大小信息                                                                                                                         |

## 字体与图标
| 属性                      | 	说明                                                   |
|-------------------------|-------------------------------------------------------|
| `fontFamily`	           | 默认应用字体，默认为`（Qt.application.font.family）   `           |
| `iconFontFamily`        | 	字体图标的字体名（通常由 `FontIconLoader` 提供）                    |
| `fontIconSource`        | 	字体图标`.ttf`文件路径                                       |
| `fontIconIndexSource`   | 	字体图标索引`.js`文件路径                                      |
| `fontIconIndex`	        | 图标索引对象，可直接通过 Utils.fontIconIndex['icon-name'] 获取字符    |
| `dpiScale`              | 当前屏幕的只读 `devicePixelRatio`，仅用于诊断                     |

## 动画时长

| 属性                            | 	说明              |
|-------------------------------|------------------|
| `animationSpeed`              | 标准动画速度（250ms） |
| `animationSpeedExpander`      | 展开器动画速度（333ms） |
| `animationSpeedFaster`        | 快速动画速度（167ms） |
| `animationSpeedMiddle`        | 中等偏慢速度（667ms） |
| `appearanceSpeed`             | 界面切换速度（187ms） |
| `progressBarAnimationSpeed`   | 进度条动画时间（1550ms） |

## 尺寸与 DPI

`Utils.dp(value)` 已弃用。为了兼容旧代码它仍然存在，但现在是恒等函数：传入多少就返回多少，并会在首次调用时输出弃用警告。

Qt Quick 的 `width`、`height`、`font.pixelSize` 等尺寸本身使用逻辑像素，不需要再乘以设备像素比。直接写 QML 尺寸即可：

```qml
Rectangle {
    width: 320
    height: 48
    font.pixelSize: 14
}
```

不要写成 `Utils.dp(320)`，也不要手动乘 `Utils.dpiScale`，否则在 HiDPI 屏幕上会出现重复缩放。
