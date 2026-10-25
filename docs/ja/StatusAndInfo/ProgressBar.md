# ProgressBar（プログレスバー）

ProgressBar は、タスクの進行状況を表示するコントロールです。明確または不確定の進行状況を表示できます。

## 基本プログレスバー

<div align="center">
  <img src="/assets/images/docs/ProgressBar/example-2.png" alt="基本プログレスバー">
</div>

```qml
ProgressBar {
    id: control
    width: 200
    value: 0.5
}
```
```

## 不確定プログレスバー

<div align="center">
  <img src="/assets/images/docs/ProgressBar/example-3.png" alt="不確定プログレスバー">
</div>

```qml
ProgressBar {
    id: control
    width: 200
    indeterminate: true
}
```
```

## カスタムカラープログレスバー

<div align="center">
  <img src="/assets/images/docs/ProgressBar/example.png" alt="カスタムカラープログレスバー">
</div>

```qml
ProgressBar {
    id: control
    width: 200
    value: 0.75
    primaryColor: "#107C10"
}
```
```

## 重要なプロパティ

- `value`: 現在の進行状況値（0 から 1 の間の数値）
- `indeterminate`: 不確定の進行状況を表示するかどうか
- `backgroundColor`: 背景トラックの色
- `primaryColor`: プログレスバーの色
- `radius`: プログレスバーの角半径
- `state`: プログレスバーの状態（Running、Paused、Error）