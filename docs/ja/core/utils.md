# ユーティリティツール (`Utils`)

## 概要

RinUI はシングルトンオブジェクト `Utils` を提供し、グローバルリソース、フォント、アニメーションの継続時間を管理するために使用されます。これは RinUI アプリケーションにおいて不可欠な補助モジュールです。これらのプロパティの値を変更することで、RinUI の外観と動作をカスタマイズできます。

このようにユーティリティツール `Utils` を使用できます：
```qml
import RinUI

Component {
    // Utils プロパティを取得
    property var property: Utils.property;
    
    // Utils プロパティを変更
    Component.onCompleted: {
        Utils.property = newValue;
    }
}
```

## 外観とテーマ
| プロパティ                 | 説明                                                                                                                                                                                                                            |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| primaryColor               | テーマのプライマリカラー、デフォルトではバックエンド設定ファイルのデフォルト値 `#605ed2` を読み取ります <br/> テーマカラーは [`Theme.setThemeColor(color: str)`](/ja/core/theme.md#setthemecolor-color-str) を介して変更することをお勧めします   |
| colors                     | RinUI で現在選択されているテーマのカラーテーブル。RinUI のすべてのコントロールはこれらのカラーを参照します                                                                                                                                  |
| appearance                 | 現在のテーマの外観設定（例：角の丸み、影、不透明度）                                                                                                                                                                                       |
| typography                 | 現在はフォントサイズ情報のみを格納しています                                                                                                                                                                                            |

## フォントとアイコン
| プロパティ                            | 説明                                                                                                |
|-------------------------------------|----------------------------------------------------------------------------------------------------------|
| `fontFamily`                        | デフォルトのアプリケーションフォント、デフォルトは `(Qt.application.font.family)` です                                      |
| `iconFontFamily`                    | フォントアイコン用のフォント名（通常 `FontIconLoader` によって提供されます）                                           |
| `fontIconSource`                    | フォントアイコンの `.ttf` ファイルへのパス                                                                 |
| `fontIconIndexSource`               | フォントアイコンインデックスの `.js` ファイルへのパス                                                            |
| `fontIconIndex`                     | アイコンインデックスオブジェクト。`Utils.fontIconIndex['icon-name']` を介して直接文字にアクセスできます               |
| `dpiScale`                          | 現在の画面の読み取り専用 `devicePixelRatio`。診断用途のみ                                                 |

## アニメーションの継続時間

| プロパティ                         | 説明                              |
|----------------------------------|------------------------------------------|
| `animationSpeed`                 | 標準アニメーション速度 (250ms)         |
| `animationSpeedExpander`         | エキスパンダーのアニメーション速度 (333ms) |
| `animationSpeedFaster`           | 高速アニメーション速度 (167ms) |
| `animationSpeedMiddle`           | 中程度の低速 (667ms) |
| `appearanceSpeed`                | インターフェース切り替え速度 (187ms) |
| `progressBarAnimationSpeed`      | プログレスバーアニメーション時間 (1550ms)     |

## サイズと DPI

`Utils.dp(value)` は非推奨です。互換性のため残っていますが、現在は恒等関数で、値をそのまま返し、最初の呼び出し時に非推奨警告を出力します。

Qt Quick の `width`、`height`、`font.pixelSize` などは既に論理ピクセルを使用しています。デバイスピクセル比を掛ける必要はありません：

```qml
Rectangle {
    width: 320
    height: 48
    font.pixelSize: 14
}
```

`Utils.dp(320)` や `Utils.dpiScale` を手動で掛けると、HiDPI 環境で二重にスケーリングされます。
