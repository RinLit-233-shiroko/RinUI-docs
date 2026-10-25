# InfoBadge

`InfoBadge` is a compact badge displayed beside another interface element. Use it for unread counts, status, or reminders. It supports numbers, status icons, dots, and both solid and outlined styles.

## Show a Count

Set `count` to display a number. The default maximum is `99`; larger counts are shown as `99+`. Negative values hide the count.

<div align="center">
  <img src="/assets/images/docs/InfoBadge/example-2.png" alt="Show a Count">
</div>

```qml
InfoBadge {
    count: 5
}
```
```

## Status Icons

Set `severity` to specify a status. When neither text nor a count is set, the badge displays the corresponding status icon.

<div align="center">
  <img src="/assets/images/docs/InfoBadge/example-3.png" alt="Status Icons">
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
```

## Dot and Outlined Styles

Set `dot` for a small dot without text. Set `solid` to `false` for a transparent background with a status-colored outline.

<div align="center">
  <img src="/assets/images/docs/InfoBadge/example.png" alt="Dot and Outlined Styles">
</div>

```qml
Row {
    spacing: 12

    InfoBadge { dot: true }
    InfoBadge { count: 3; solid: false }
    InfoBadge { severity: Severity.Warning; solid: false }
}
```
```

## Properties

- `count`: Number to display; defaults to `-1`, which hides the number.
- `maxCount`: Maximum count before displaying `maxCount+`; defaults to `99`.
- `text`: Badge text. When set, it takes precedence over text generated from `count`.
- `severity`: Status type: `Severity.Info`, `Severity.Success`, `Severity.Warning`, or `Severity.Error`.
- `icon`: Status icon name; defaults to the Fluent icon associated with `severity`.
- `dot`: Whether to display a dot without content.
- `solid`: Whether to use a solid background. `false` uses a transparent background and status-colored border.
- `primaryColor`: Main fill or border color; defaults to a theme color selected by severity.
