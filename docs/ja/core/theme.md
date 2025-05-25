# テーマ

## 概要

RinUI は軽量なテーママネージャーを提供します。

QML で `import RinUI` をするだけで、すぐにグローバルなテーマサポートが得られます。
テーマモジュールはデフォルトでシングルトン `prama Singleton` として存在し、アプリケーション全体でのスタイル切り替えや一貫性の維持に適しています。

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

### `toggleTheme()`
`toggleTheme` 関数は、現在のテーマモードを切り替えるために使用されます。現在のモードがライトであればダークに切り替わり、そうでなければライトに切り替わります。

### `getTheme() -> str`
`getTheme` 関数は、現在のテーマモードを取得するために使用されます。関数は以下の値を返します：

- `"Light"`: 現在のテーマはライトです
- `"Dark"`: 現在のテーマはダークです
- `"Auto"`: 現在のテーマは自動モードです

### `setThemeColor(color: str)`
`setThemeColor` 関数は、RinUI コンポーネントのテーマカラーを設定するために使用されます。この関数は16進数のカラー値を受け付けます（例：`#FF0000` は赤を表します）。

### `getThemeColor() -> str`
`getThemeColor` 関数は、コンポーネントの現在のテーマカラーを取得するために使用されます。関数は16進数のカラー値を返します。

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
