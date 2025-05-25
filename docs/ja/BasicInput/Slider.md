# スライダー

`Slider` コンポーネントを使用すると、ユーザーはトラックに沿ってハンドルをドラッグすることにより、連続的または離散的な範囲から値を選択できます。水平または垂直に表示でき、オプションで目盛りと現在の値のツールチップを表示できます。RinUI の `Slider` は `QtQuick.Controls.Basic.Slider` から継承されます。

## 範囲とステップ付きスライダー

`from` および `to` プロパティを使用してスライダーの範囲を定義し、`stepSize` を使用して増分を制御します。`value` プロパティはスライダーの現在の位置を設定します。

<div align="center">
  <img src="/assets/images/BasicInput/Slider/slider-range.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
Slider {
    width: 200
    from: 0
    to: 1000
    stepSize: 10 // 値は 10 刻みで変化します
    value: 500   // 初期値
}
```

## 目盛り付きスライダー

`tickmarks` を `true` に設定すると、視覚的なマーカーが表示されます。`tickFrequency` はこれらの目盛りの間隔を制御します。`tickFrequency` が `0` または設定されていない場合、目盛りは `stepSize` に揃うことがあります。

<div align="center">
  <img src="/assets/images/BasicInput/Slider/slider-ticks.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
Slider {
    width: 300
    from: 0
    to: 100
    stepSize: 10     
    tickmarks: true
    tickFrequency: 20 // 20 単位ごとに目盛りマーク
}
```

## 垂直スライダー

`orientation` を `Qt.Vertical` に設定すると、垂直スライダーになります。

<div align="center">
  <img src="/assets/images/BasicInput/Slider/slider-vertical.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
Slider {
    height: 150 // 垂直スライダーの場合、高さが主要な寸法としてより適切です
    orientation: Qt.Vertical
    from: 0
    to: 100
    value: 75
    tickmarks: true
    tickFrequency: 25
}
```

## 主なプロパティ

*   `value`: `real` - スライダーの現在の値。
*   `from`: `real` - 最小値。デフォルトは `0.0` です。
*   `to`: `real` - 最大値。デフォルトは `1.0` です。
*   `stepSize`: `real` - 値が変更できる最小の増分。デフォルトは `0.0` (連続) です。
*   `orientation`: `enumeration` - `Qt.Horizontal` (デフォルト) または `Qt.Vertical`。
*   `tickmarks`: `bool` - `true` の場合、目盛りを表示します。RinUI の Slider ソースではデフォルトで `false` です。
*   `tickFrequency`: `real` - 目盛りの間隔。`tickmarks` が `true` の場合に関連します。
*   `snapMode`: `enumeration` - ハンドルが値にどのようにスナップするかを定義します。RinUI の `Slider` はデフォルトで `Slider.SnapAlways` です。
*   `showTooltip`: `bool` - `true` の場合 (RinUI のデフォルト)、ホバーまたはドラッグ時に現在の値を含むツールチップが表示されます。
*   `handleSize`: `real` - ドラッグ可能なハンドルの基本サイズ。
*   `trackHeight`: `real` - スライダートラックの太さ。
*   `primaryColor`: `color` - トラックの塗りつぶし部分とハンドルのアクセントに使用される色。
*   `enabled`: `bool` - コントロールがインタラクティブかどうか。

## シグナル

*   `valueChanged(real value)`: `value` プロパティが変更されたとき（ユーザーインタラクションによるかプログラムによるかに関わらず）に発行されます。
*   `valueModified(real value)`: ユーザーがインタラクション（ハンドルのドラッグなど）によって値を変更したときに特に発行されます。
*   `moved(real value)`: ユーザーインタラクションによってハンドルが移動したときに発行され、効果的には `valueModified` と同様です。

```
