# 信息徽章（InfoBadge）

## 介绍

<mcurl name="InfoBadge" url="https://learn.microsoft.com/zh-cn/windows/apps/design/controls/info-badge"></mcurl>

徽章是一种非侵入式且直观的方式，用于显示通知或将焦点引导到应用内的某个区域 - 无论是用于通知、指示新内容还是显示警报。

## 示例

### 不同样式的信息徽章

::: code-group

```qml
RowLayout {
    spacing: 20

    InfoBadge {
        severity: Severity.Info
    }
    InfoBadge {
        severity: Severity.Success
        count: 10
    }
    InfoBadge {
        severity: Severity.Warning
        dot: true
    }
    InfoBadge {
        severity: Severity.Error
        text: qsTr("Badge")
    }
}
```

:::

### 没有实心背景的不同样式信息徽章

::: code-group

```qml
RowLayout {
    spacing: 20

    InfoBadge {
        severity: Severity.Info
        solid: false
    }
    InfoBadge {
        severity: Severity.Success
        count: 10
        solid: false
    }
    InfoBadge {
        severity: Severity.Warning
        text: qsTr("Badge")
        solid: false
    }
    InfoBadge {
        severity: Severity.Error
        dot: true
        solid: false
    }
}
```

:::