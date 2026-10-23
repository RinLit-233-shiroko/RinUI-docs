# InfoBar（信息栏）

InfoBar 是向用户显示信息消息的控件。它可以显示不同类型的消息（信息、成功、警告、错误），并支持自定义内容和自动消失。

## 基本信息栏


<div align="center">
  <img src="/assets/images/docs/InfoBar/基本信息栏.png" alt="基本信息栏 示例">
</div>

```qml
InfoBar {
    title: qsTr("信息")
    text: qsTr("这是一个信息提示。")
    severity: Severity.Info
}
```

## 带自定义内容的信息栏


<div align="center">
  <img src="/assets/images/docs/InfoBar/带自定义内容的信息栏.png" alt="带自定义内容的信息栏 示例">
</div>

```qml
InfoBar {
    title: qsTr("需要操作")
    text: qsTr("请查看以下选项：")
    
    customContent: [
        Button {
            text: qsTr("接受")
            onClicked: console.log("已接受")
        },
        Button {
            text: qsTr("忽略")
            onClicked: console.log("已忽略")
        }
    ]
}
```

## 不同严重性级别


<div align="center">
  <img src="/assets/images/docs/InfoBar/不同严重性级别.png" alt="不同严重性级别 示例">
</div>

```qml
// 成功信息栏
InfoBar {
    title: qsTr("成功")
    text: qsTr("操作已成功完成！")
    severity: Severity.Success
}

// 警告信息栏
InfoBar {
    title: qsTr("警告")
    text: qsTr("请检查您的配置。")
    severity: Severity.Warning
}

// 错误信息栏
InfoBar {
    title: qsTr("错误")
    text: qsTr("操作过程中发生错误。")
    severity: Severity.Error
}
```

## 自动消失的信息栏


<div align="center">
  <img src="/assets/images/docs/InfoBar/自动消失的信息栏.png" alt="自动消失的信息栏 示例">
</div>

```qml
InfoBar {
    title: qsTr("自动消失")
    text: qsTr("此消息将在3秒后消失。")
    severity: Severity.Info
    timeout: 3000
    closable: true
}
```

## 重要属性

- `title`：信息栏的标题
- `text`：主要内容文本
- `severity`：严重性级别（信息、成功、警告、错误）
- `timeout`：自动消失超时时间（毫秒，-1 表示不自动消失）
- `closable`：是否显示关闭按钮
- `iconVisible`：是否显示严重性图标
- `customContent`：要显示的自定义内容项

## 重要方法

- `close()`：启动关闭动画。InfoBar 没有 `closed()` 信号。
