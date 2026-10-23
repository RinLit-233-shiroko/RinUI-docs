# ProgressBar（プログレスバー）

ProgressBar は、タスクの進行状況を表示するコントロールです。明確または不確定の進行状況を表示できます。

<VPImage
  :image="{
    light: '/assets/images/examples/ProgressBar-light.png',
    dark: '/assets/images/examples/ProgressBar-dark.png',
    alt: 'ProgressBar コンポーネントのライト／ダーク例'
  }"
  width="1000"
/>

## 基本プログレスバー

```qml
ProgressBar {
    id: control
    width: 200
    value: 50
}
```

## 不確定プログレスバー

```qml
ProgressBar {
    id: control
    width: 200
    indeterminate: true
}
```

## カスタムカラープログレスバー

```qml
ProgressBar {
    id: control
    width: 200
    value: 75
    backgroundColor: "#E0E0E0"
    primaryColor: "#4CAF50"
}
```

## 重要なプロパティ

- `value`: 現在の進行状況値（0 から 1 の間の数値）
- `indeterminate`: 不確定の進行状況を表示するかどうか
- `backgroundColor`: 背景トラックの色
- `primaryColor`: プログレスバーの色
- `radius`: プログレスバーの角半径
- `state`: プログレスバーの状態（Running、Paused、Error）