# 浮层管理器（`FloatLayer`）

## 概述

`FloatLayer` 是一个全屏的浮层容器，专用于在页面上设定特定位置显示弹出内容，如信息栏 `InfoBar`等。
它可以挂载于任意 `Window`、`ApplicationWindow` 等基于 `QtQuick` 原生窗口控件，在 RinUI 中将会自动挂载无需手动操作。

您可以像这样使用浮层管理器（`FloatLayer`）：
```qml
import RinUI

Window {
    Component.onCompleted: {
        floatLayer.createInfoBar({
            text: "args.text"
        })
    }
}
```

## 结构
```bash
Item (FloatLayer)
 ├── ColumnLayout (TopLeft)
 ├── ColumnLayout (Top)
 ├── ColumnLayout (TopRight)
 ├── ColumnLayout (BottomLeft)
 ├── ColumnLayout (Bottom)
 └── ColumnLayout (BottomRight)
```

### `Position`

`Position` 是一个枚举类型，用于定义浮层的显示位置，提供以下几种：

- `TopLeft`：左上角
- `Top`：顶部居中
- `TopRight`：右上角
- `BottomLeft`：左下角
- `Bottom`：底部居中
- `BottomRight`：右下角


## 方法

### `createInfoBar(options: object)`
`createInfoBar` 函数用于在浮层中创建一个信息栏（InfoBar），仅接受一个 `options` 对象作为参数，该对象可以包含以下参数：

| 参数	        | 类型	           | 默认值	          | 说明                                              |
|------------|---------------|---------------|-------------------------------------------------|
| `title`	   | string        | 	""           | 	通知标题                                           |
| `text`     | string        | 	""	          | 通知内容                                            |
| `severity` | Severity    	 | Severity.Info | 枚举通知等级，提供：`Info`, `Success`, `Warning`, `Error` |	
| `timeout`  | int           | 	1500	        | 自动关闭时间（ms）                                      |
| `position` | Position      | Position.Top  | 	显示位置                                           |
| `closable` | bool	         | true          | 是否可手动关闭                                         |

### `createCustom(component: Component)`
`createCustom` 函数用于在浮层中创建一个自定义组件，仅接受一个 `component` 对象作为参数。

您可以参照如下示例：
```qml
Button {
    // 自定义组件
    Component {
        id: customInfoBar
        InfoBar {
            timeout: 2000
            severity: Severity.Success
            title: qsTr("CUSTOM")
            text: qsTr("This is a custom InfoBar")
            customContent: [
                Button {
                    text: "Custom Button"
                    onClicked: {
                        floatLayer.createInfoBar({title: "InfoBar", text: "Clicked!"})
                    }
                }
            ]
        }
    }
    
    text: qsTr("Popup a custom InfoBar")
    
    // 触发
    onClicked: {
        floatLayer.createCustom(customInfoBar)
    }
}
```