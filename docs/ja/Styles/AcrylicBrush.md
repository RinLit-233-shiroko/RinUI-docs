# AcrylicBrush

`AcrylicBrush` は RinUI のアプリ内で使用する半透明マテリアルです。指定した `sourceItem` の背景をぼかし、色を重ねます。パネルやオーバーレイに適しています。ウィンドウ全体に適用するシステムレベルの背景効果とは異なり、アプリのコンテンツ領域内で描画されます。

## 基本的な使い方

アクリル面の背後にある項目を `sourceItem` に指定します。

<div align="center">
  <img src="/assets/images/docs/AcrylicBrush/default-in-app-acrylic.png" alt="基本的な使い方">
</div>

```qml
Item {
    Rectangle {
        id: scene
        anchors.fill: parent
        color: "#247BA0"
    }

    Rectangle {
        anchors.centerIn: parent
        width: 320
        height: 180
        color: "transparent"

        AcrylicBrush {
            anchors.fill: parent
            sourceItem: scene
            tintColor: "#F3F3F3"
            tintOpacity: 0.72
        }
    }
}
```
```

## ぼかしと色調

`blur`、`tintColor`、`tintOpacity` でマテリアルを調整します。効果を描画できない場合の単色表示には `fallbackColor` を指定します。

<div align="center">
  <img src="/assets/images/docs/AcrylicBrush/custom-in-app-acrylic.png" alt="ぼかしと色調">
</div>

```qml
AcrylicBrush {
    sourceItem: background
    blur: 72
    tintColor: "#86Cce8"
    tintOpacity: 0.85
}
```
```

## 輝度ブレンド

`tintLuminosityOpacity` は色調に加えて、輝度ブレンドの強さを制御します。

<div align="center">
  <img src="/assets/images/docs/AcrylicBrush/luminosity-acrylic.png" alt="輝度ブレンド">
</div>

```qml
AcrylicBrush {
    sourceItem: background
    tintColor: "#86Cce8"
    tintOpacity: 0.85
    tintLuminosityOpacity: 0.85
}
```
```

## フォールバックと有効状態

`enabled` で効果を切り替えられます。無効または利用できない場合は `fallbackColor` が使用されます。

<div align="center">
  <img src="/assets/images/docs/AcrylicBrush/fallback-and-enabled.png" alt="フォールバックと有効状態">
</div>

```qml
AcrylicBrush {
    sourceItem: background
    fallbackColor: "darkgreen"
    enabled: true
}
```
```

## 主なプロパティ

| プロパティ | 説明 |
| --- | --- |
| `sourceItem` | ブラシが背景としてサンプリングする項目。 |
| `blur` | 背景のぼかし強度。 |
| `tintColor` | アクリルの色調。 |
| `tintOpacity` | 色調の不透明度。通常は `0` から `1`。 |
| `tintLuminosityOpacity` | 輝度ブレンドの不透明度。 |
| `fallbackColor` | 効果を利用できない場合に使う単色。 |
| `enabled` | マテリアル効果を有効にするかどうか。 |

## 関連項目

- [テーマ](/ja/core/theme)：テーマの色と外観。
- [FluentWindow](/ja/Windowing/FluentWindow)：ウィンドウ全体の背景効果と動作。
