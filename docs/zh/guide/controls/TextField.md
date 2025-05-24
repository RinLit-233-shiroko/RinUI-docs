# 文本框（TextField）

## 介绍

<mcurl name="TextField" url="https://learn.microsoft.com/zh-cn/windows/apps/design/controls/text-box"></mcurl>

使用文本框允许用户在您的应用中输入简单的文本。您可以添加占位符文本，让用户知道文本框的用途，并且可以通过其他方式对其进行自定义。

## 示例

### 一个简单的文本框

::: code-group

```qml
TextField {
    // ... existing code ...
}
```

:::

### 带有占位符文本的文本框

::: code-group

```qml
TextField {
    width: 175
    placeholderText: qsTr("姓名")
}
```

:::