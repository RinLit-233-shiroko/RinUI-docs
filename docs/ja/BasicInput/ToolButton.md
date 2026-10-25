# ツールボタン

`ToolButton` は、通常ツールバーや同様のコンパクトなUI領域のアクションに使用される特殊な `Button` です。多くの場合、アイコンのみを表示するように設定されますが、テキストを表示することもできます。RinUI の `ToolButton` は、内部の `IconWidget` の側面を制御するための便利なエイリアス（`size` および `color`）を提供します。

## 基本的なツールボタン（アイコンのみ）

`ToolButton` は、アイコンのみのボタンとして頻繁に使用され、ツールバーに適した控えめな外観のために `flat: true` に設定されることがよくあります。

<div align="center">
  <img src="/assets/images/docs/ToolButton/combobox.png" alt="基本的なツールボタン（アイコンのみ）">
</div>

<div align="center">
  <img src="/assets/images/BasicInput/ToolButton/toolbutton-icon.png" alt="基本的なツールボタン（アイコンのみ）">
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

ToolButton {
    icon.name: "ic_fluent_apps_settings_20_regular"
    onClicked: {
        console.log("Settings ToolButton clicked");
    }
}
```
```

## 主なプロパティ

*   `icon.name`: `string` - 内部 `IconWidget` を介して表示される Fluent アイコンの名前。これはアイコンを設定する**推奨**の方法です。
*   `text`: `string` - ボタンに表示されるテキスト。
*   `size`: `real` - (エイリアス) 内部 `IconWidget` の `size` プロパティを設定し、アイコンの視覚的なサイズを制御します。`ToolButton` の `IconWidget` 定義内ではデフォルトで `20` です。
*   `color`: `color` - (エイリアス) 内部 `IconWidget` の `color` プロパティを設定します。
*   `flat`: `bool` - `Button` から継承されます。`Button` はデフォルトで `false` ですが、`ToolButton` は典型的なツールバーの外観のためにしばしば明示的に `flat: true` に設定されます。
*   `enabled`: `bool` - コントロールがインタラクティブかどうか。デフォルトは `true` です。

`ToolButton` は `Button` から継承されるため、すべての標準的な `Button` プロパティ（`highlighted`、`checkable`、`primaryColor`、さまざまな状態のスタイリングなど）およびシグナル（`onClicked` など）が利用可能です。

## 例：ComboBox インジケータとしての使用

RinUI の `ComboBox` は、内部で `ToolButton` をドロップダウン矢印インジケータとして使用します：
<div align="center">
  <img src="/assets/images/docs/ToolButton/example.png" alt="例：ComboBox インジケータとしての使用">
</div>

```qml
// ComboBox.qml 中指示器的代码片段
ToolButton {
    flat: true
    icon.name: "ic_fluent_chevron_down_20_regular"
    size: 14 
    color: Theme.currentTheme.colors.textSecondaryColor
    // ... 其他属性
}
```
```

これは、フラットなアイコンのみの `ToolButton` の一般的な使用例を示しています。

```
