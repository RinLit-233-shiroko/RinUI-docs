# Float Layer Manager (`FloatLayer`)

## Overview

`FloatLayer` is a full-screen floating layer container specifically designed to display pop-up content at designated positions on the page, such as an `InfoBar`.
It can be mounted on any `Window`, `ApplicationWindow`, etc., based on native QtQuick window controls. In RinUI, it will automatically mount without requiring manual operation.

You can use the float layer manager (`FloatLayer`) as follows:

## Structure
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

`Position` is an enumeration type used to define the display position of the float layer, 
providing the following options:

- `TopLeft`：Top Left Corner
- `Top`：Top Center
- `TopRight`：Top Right Corner
- `BottomLeft`：Bottom Left Corner
- `Bottom`：Bottom Center
- `BottomRight`：Bottom Right Corner


## Method

### `createInfoBar(options: object)`
The `createInfoBar` function is used to create an info bar (InfoBar) in a floating layer, accepting only one `options` object as a parameter. This object can include the following parameters:

| Parameter    | Type           | Default Value    | Description                                                                      |
|--------------|----------------|------------------|----------------------------------------------------------------------------------|
| `title`      | string         | ""               | Notification title                                                               |
| `text`       | string         | ""               | Notification content                                                             |
| `severity`   | Severity       | Severity.Info    | Enumerated notification level, providing: `Info`, `Success`, `Warning`, `Error`  |
| `timeout`    | int            | 1500             | Automatic close time (ms)                                                        |
| `position`   | Position       | Position.Top     | Display position                                                                 |
| `closable`   | bool           | true             | Whether it can be manually closed                                                |

### `createCustom(component: Component)`
The `createCustom` function is used to create a custom component in a floating layer, accepting only one `component` object as a parameter.

You can refer to the following example:

```qml
Button {
    // Custom Component
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
    
    // Action
    onClicked: {
        floatLayer.createCustom(customInfoBar)
    }
}
```
