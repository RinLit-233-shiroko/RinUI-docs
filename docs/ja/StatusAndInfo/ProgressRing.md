# プログレスリング (ProgressRing)

`ProgressRing` は円形のリングでタスクの進行状況を示します。Qt Quick Controls の `ProgressBar` を継承し、確定・不確定の進捗表示に加えて、実行中、一時停止、エラーの状態を切り替えられます。

## 確定した進捗

<div align="center">
  <img src="/assets/images/docs/ProgressRing/example-2.png" alt="確定した進捗">
</div>

```qml
ProgressRing {
    size: 56
    strokeWidth: 6
    from: 0
    to: 100
    value: 68
}
```
```

## 不確定な進捗

完了率をまだ計算できない場合は `indeterminate` を `true` にします。リングのアニメーションは `Running` 状態で動作します。

<div align="center">
  <img src="/assets/images/docs/ProgressRing/example-3.png" alt="不確定な進捗">
</div>

```qml
ProgressRing {
    size: 56
    indeterminate: true
    state: ProgressRing.Running
}
```
```

## 一時停止とエラー

`state` は `ProgressRing.Running`、`ProgressRing.Paused`、`ProgressRing.Error` に対応します。一時停止ではテーマの警告色、エラーでは重大エラー色を使用します。

<div align="center">
  <img src="/assets/images/docs/ProgressRing/example.png" alt="一時停止とエラー">
</div>

```qml
Row {
    spacing: 16

    ProgressRing {
        value: 0.68
        state: ProgressRing.Running
    }
    ProgressRing {
        value: 0.68
        state: ProgressRing.Paused
    }
    ProgressRing {
        value: 0.68
        state: ProgressRing.Error
    }
}
```
```

## 主なプロパティ

- `value`、`from`、`to`: 確定進捗とその範囲。範囲に基づいてリングの塗りつぶし割合を計算します。
- `indeterminate`: 不確定進捗の循環アニメーションを表示するかどうか。
- `state`: `Running`、`Paused`、`Error` の進捗状態。
- `size`: 既定の幅と高さ。初期値は `56`。
- `strokeWidth`: リングの線幅。初期値は `6`。
- `primaryColor`: 実行中のリング色。既定では現在のテーマのアクセント色。
- `backgroundColor`: 未完了部分のリング色。既定では透明。

`width` と `height` は個別に指定できます。リング半径は短辺と線幅から計算されます。確定進捗では `value` が `from` から `to` の範囲に制限されます。
