# BusyIndicator（忙碌指示器）

BusyIndicator 用于提示用户当前仍有操作正在进行。控件以循环动画显示忙碌状态，适合加载数据、提交请求等暂时无法显示明确进度的场景。

## 基本用法


<div align="center">
  <img src="/assets/images/docs/BusyIndicator/example-2.png" alt="基本用法 示例">
</div>

```qml
BusyIndicator {
    running: true
}
```

## 与状态文字组合


<div align="center">
  <img src="/assets/images/docs/BusyIndicator/example-3.png" alt="与状态文字组合 示例">
</div>

```qml
Column {
    spacing: 12

    BusyIndicator {
        anchors.horizontalCenter: parent.horizontalCenter
        running: isLoading
    }

    Text {
        anchors.horizontalCenter: parent.horizontalCenter
        text: isLoading ? qsTr("正在加载…") : qsTr("加载完成")
    }
}
```

`isLoading` 应由应用逻辑提供，并在异步操作开始和结束时更新。

## 自定义尺寸


<div align="center">
  <img src="/assets/images/docs/BusyIndicator/example.png" alt="自定义尺寸 示例">
</div>

```qml
BusyIndicator {
    width: 60
    height: 60
    running: true
}
```

## 重要属性

- `running`：是否显示并运行忙碌动画；这是 BusyIndicator 提供的兼容属性。
- `state`：继承自 ProgressRing，可用于设置运行、暂停或错误状态。
- `width`、`height`：控制指示器的显示尺寸。
- `indeterminate`：BusyIndicator 内部根据 `running` 设置，用于控制不确定进度动画。
