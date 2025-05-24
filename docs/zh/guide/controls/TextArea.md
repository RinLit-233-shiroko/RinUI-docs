# 文本区域（TextArea）

## 介绍

<mcurl name="TextArea" url="https://learn.microsoft.com/zh-cn/windows/apps/design/controls/text-box"></mcurl>

使用文本区域允许用户在您的应用中输入多行文本。您可以添加占位符文本，让用户知道文本区域的用途，并且可以通过其他方式对其进行自定义。

## 示例

### 一个简单的文本区域

::: code-group

```qml
TextArea {
    width: 200
}
```

:::

### 带有占位符文本的文本区域

::: code-group

```qml
TextArea {
    placeholderText: qsTr("输入您的个人资料...")
    width: 200
}
```

:::