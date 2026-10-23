# テーマ

## 概要

RinUI は軽量なテーママネージャーを提供します。

QML で `import RinUI` をするだけで、すぐにグローバルなテーマサポートが得られます。
テーマモジュールはシングルトン `pragma Singleton` として存在し、アプリケーション全体のスタイル切り替えを一貫して管理します。

このように `Theme` マネージャーを使用できます：
```qml
import RinUI

Component {
    Component.onCompleted: {
        Theme.function()
    }
}
```

## テーマモード

### `setTheme(mode: Theme.mode)`
`setTheme` 関数は、すべての RinUI コンポーネントのライトテーマとダークテーマを切り替えるために使用されます。この関数は以下の値を受け付けます：

- `Theme.mode.Light`: ライトテーマに切り替え
- `Theme.mode.Dark`: ダークテーマに切り替え
- `Theme.mode.Auto`: テーマを自動切り替え。現在のシステムテーマモードに基づいてライトテーマまたはダークテーマに切り替えるかどうかを決定します。

### `toggleMode()`
`toggleMode` は現在の実際の外観に基づき、`Theme.mode.Light` と `Theme.mode.Dark` を切り替えます。ダーク表示ならライトへ、ライト表示ならダークへ切り替わります：

```qml
Theme.toggleMode()
```

`Light`、`Dark`、`Auto` の設定モードを順番に切り替える関数ではありません。自動モードへ入る、または自動モードから抜ける場合は `setTheme()` を直接呼び出してください。

### `getTheme() -> str`
`getTheme` 関数は、保存されているテーマ設定モードを返します：

- `"Light"`: 現在のテーマはライトです
- `"Dark"`: 現在のテーマはダークです
- `"Auto"`: 現在のテーマは自動モードです

`Auto` モードでも `getTheme()` は `"Auto"` を返し、実際に適用されているライト／ダークへ解決しません。実際の外観は別途取得します：

```qml
let darkNow = Theme.currentTheme.isDark
```

`Theme.isDark()` を呼び出すこともできます。これは `currentTheme.isDark` を返します。

### `setThemeColor(color)`
`setThemeColor` は RinUI のアクセントカラーを設定します。16 進数の文字列または QML の `color` 値を受け付けます（例：`"#FF0000"` は赤）。

### `getThemeColor() -> color`
`getThemeColor` は現在のアクセントカラーを QML の `color` 値として返します。テーママネージャーが初期化されていない場合は `"transparent"` を返します。

## 背景エフェクト

> [!NOTE]
> 背景エフェクトの設定は Windows でのみ有効であり、一部のエフェクトは Windows 11 以降のバージョンが必要です。
>
> | エフェクト   | サポートされるシステムバージョン |
> |----------|-------------------|
> | Mica     | > Windows 11      |
> | Acrylic  | >= Windows 10     |
> | Tabbed   | > Windows 11      |

### `setBackdropEffect(effect: Theme.effect)`
`setBackdropEffect` 関数は、RinUI コンポーネントの背景エフェクトを設定するために使用されます。この関数は以下の値を受け付けます：

- `Theme.effect.Mica`: Mica 背景エフェクト
- `Theme.effect.Acrylic`: Acrylic 背景エフェクト
- `Theme.effect.Tabbed`: Tabbed 背景 (Mica Alt) エフェクト
- `Theme.effect.None`: 背景エフェクトなし

### `getBackdropEffect() -> str`
`getBackdropEffect` 関数は、コンポーネントの現在の背景エフェクトを取得するために使用されます。関数は以下の値を返します：

- `"mica"`: Mica 背景エフェクト
- `"acrylic"`: Acrylic 背景エフェクト
- `"tabbed"`: Tabbed 背景 (Mica Alt) エフェクト
- `"none"`: 背景エフェクトなし
```
