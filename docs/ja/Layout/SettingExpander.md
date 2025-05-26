# 設定エキスパンダー

`SettingExpander` は `Expander` コンポーネントの特殊化されたバージョンであり、設定ページやリストのアイテムを作成するために調整されています。アイコン、タイトル、説明、およびヘッダーの右側にあるコントロール用のスロットを含む構造化されたヘッダーを提供します。標準の `Expander` と同様に、追加の詳細やサブ設定のための折りたたみ可能なコンテンツ領域も備えています。

## 折りたたみ可能領域での `SettingItem` の使用

`SettingExpander` の折りたたみ可能なコンテンツ領域は、サブ設定のリストの一貫したレイアウトを維持するために、`SettingItem` コンポーネントで設定されることがよくあります。

<div align="center">
  <img src="/assets/images/Layout/SettingExpander/settingexpander-with-items.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
SettingExpander {
    width: 400
    icon: "ic_fluent_paint_brush_20_regular"
    title: qsTr("Theme Options")
    description: qsTr("Select your preferred application theme and accent color.")
    expanded: false // 例：初期状態では折りたたまれています

    // ヘッダー右側のコントロール
    content: ComboBox {
        width: 120 // 適切な幅を指定
        model: ["Light", "Dark", "System"]
    }

    // SettingItem で設定された折りたたみ可能なコンテンツ
    SettingItem {
        title: qsTr("Accent Color")
        description: qsTr("Choose a primary accent color for the application.")
        // SettingItem の 'content'（SettingItem ヘッダーの右側）
        content: Button { text: qsTr("Select Color...") } 
    }
    SettingItem {
        title: qsTr("Font Size")
        // この SettingItem には説明がありません
        content: Slider { width: 100; from: 10; to: 16; value: 12 }
    }
}
```

## 主なプロパティ

`Expander` のすべてのプロパティ（`expanded`、`expandDirection`、`enabled`、`radius` など）を継承し、さらに構造化されたヘッダーのための特定のプロパティが追加されます：

*   `title`: `string` - ヘッダーセクションに表示される主要なタイトルテキスト。
*   `description`: `string` - ヘッダーの `title` の下に表示される小さな説明テキスト。
*   `icon`: `string` (内部 `IconWidget` の `icon` プロパティのエイリアス) - ヘッダーの左側に表示される Fluent アイコンの名前。
*   `source`: `url` (内部 `IconWidget` の `source` プロパティのエイリアス) - ヘッダーアイコンとして使用するカスタム画像の URL。
*   `iconSize`: `real` (内部 `IconWidget` の `size` プロパティのエイリアス) - ヘッダーのアイコンのサイズ。デフォルトは `20` です。
*   `content`: `Item` (`rightContent.data` のエイリアス) - ヘッダー領域の右側に QML アイテム（通常は `Switch`、`ComboBox`、`Button` などの単一のコントロール）を追加できます。

デフォルトの折りたたみ可能なコンテンツ領域は、`contentData` デフォルトプロパティ（`Expander` から継承）を介して設定されます。`SettingExpander` はベース `Expander` の `contentPadding` および `contentSpacing` を `0` に設定するため、折りたたみ可能な領域内のアイテムの間隔とパディングは自分で管理する必要があることに注意してください（たとえば、子アイテムに `padding` を追加するか、レイアウトを使用するなど）。

## 関連コンポーネント

*   `Expander`: `SettingExpander` がその機能の大部分を継承するベースコンポーネント。
*   `SettingItem`: 詳細な設定やオプションをリストするために、`SettingExpander` の折りたたみ可能な `contentData` 領域内でよく使用されます。

```
