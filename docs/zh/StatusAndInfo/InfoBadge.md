# InfoBadge（信息徽章）

`InfoBadge` 是显示在其他界面元素旁的小型徽章，可用于标记未读数量、状态或提醒。它支持数字、状态图标和纯色圆点，并提供实心与描边两种样式。

## 显示数量

设置 `count` 显示数量。默认最大显示值为 `99`，超过后会显示为 `99+`；负数表示不显示数量。

<div align="center">
  <img src="/assets/images/docs/InfoBadge/显示数量.png" alt="显示数量示例">
</div>

```qml
InfoBadge {
    count: 5
}
```

## 状态图标

通过 `severity` 指定状态。未设置文本或数量时，徽章会显示对应状态图标。

<div align="center">
  <img src="/assets/images/docs/InfoBadge/状态图标.png" alt="状态图标示例">
</div>

```qml
Row {
    spacing: 12

    InfoBadge { severity: Severity.Info }
    InfoBadge { severity: Severity.Success }
    InfoBadge { severity: Severity.Warning }
    InfoBadge { severity: Severity.Error }
}
```

## 圆点与描边样式

`dot` 可切换为无文字的小圆点；将 `solid` 设为 `false` 可使用透明背景和状态色描边。

<div align="center">
  <img src="/assets/images/docs/InfoBadge/圆点与描边样式.png" alt="圆点与描边样式示例">
</div>

```qml
Row {
    spacing: 12

    InfoBadge { dot: true }
    InfoBadge { count: 3; solid: false }
    InfoBadge { severity: Severity.Warning; solid: false }
}
```

## 主要属性

- `count`：显示的数字；默认为 `-1`，此时不显示数字。
- `maxCount`：最大显示数字，超过后显示为 `maxCount+`；默认为 `99`。
- `text`：徽章文本。直接设置时优先于 `count` 自动生成的文本。
- `severity`：状态类型，支持 `Severity.Info`、`Severity.Success`、`Severity.Warning` 和 `Severity.Error`。
- `icon`：状态图标名称；默认为与 `severity` 对应的 Fluent 图标。
- `dot`：是否显示为无内容的小圆点。
- `solid`：是否使用实心背景；设为 `false` 时显示透明底色和状态色边框。
- `primaryColor`：实心背景或描边的主色，默认根据 `severity` 从主题中选取。
