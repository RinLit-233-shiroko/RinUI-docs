# InfoBadge

## Introduction

<mcurl name="InfoBadge" url="https://learn.microsoft.com/en-us/windows/apps/design/controls/info-badge"></mcurl>

Badging is a non-intrusive and intuitive way to display notifications or bring focus to an area within an app - whether that be for notifications, indicating new content, or showing an alert.

## Examples

### Different InfoBadge styles

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

### Different InfoBadge styles without solid

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