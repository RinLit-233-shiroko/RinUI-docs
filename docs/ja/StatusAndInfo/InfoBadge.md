# 情報バッジ (InfoBadge)

`InfoBadge` は他の UI 要素の横に表示する小さなバッジです。未読数、状態、通知などを示せます。数値、状態アイコン、ドット表示に対応し、塗りつぶしとアウトラインのスタイルを選べます。

## 数値の表示

`count` で数値を指定します。既定の最大表示値は `99` で、それを超えると `99+` と表示されます。負の値では数値を表示しません。

<div align="center">
  <img src="/assets/images/docs/InfoBadge/example-2.png" alt="数値の表示">
</div>

```qml
InfoBadge {
    count: 5
}
```
```

## 状態アイコン

`severity` で状態を指定します。テキストや数値を指定しない場合、状態に応じたアイコンが表示されます。

<div align="center">
  <img src="/assets/images/docs/InfoBadge/example-3.png" alt="状態アイコン">
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

## ドットとアウトライン

`dot` を有効にすると文字のない小さなドットになります。`solid: false` にすると、透明な背景と状態色の枠線を使います。

<div align="center">
  <img src="/assets/images/docs/InfoBadge/example.png" alt="ドットとアウトライン">
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

## 主なプロパティ

- `count`: 表示する数値。既定値 `-1` は数値を表示しません。
- `maxCount`: 最大表示数。超過時は `maxCount+` と表示します。既定値は `99`。
- `text`: バッジのテキスト。設定すると `count` から生成されるテキストより優先されます。
- `severity`: `Severity.Info`、`Success`、`Warning`、`Error` の状態種別。
- `icon`: 状態アイコン名。既定では `severity` に対応する Fluent アイコンを使用します。
- `dot`: 内容のないドットとして表示するかどうか。
- `solid`: 塗りつぶし背景を使用するかどうか。`false` では透明背景と状態色の枠線になります。
- `primaryColor`: 背景または枠線の主色。既定ではテーマから状態に応じて選択されます。
