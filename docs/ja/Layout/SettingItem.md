# 設定アイテム

`SettingItem` は `Frame` から継承するレイアウトコンポーネントであり、設定ページやリスト内の単一のアイテムまたは行を表すように設計されています。`title`、オプションの `description`、およびコントロール（例：`Switch`、`ComboBox`、`Button`、`TextField`）用の右側のスロット（`content` プロパティ）を備えた構造化レイアウトを提供します。

## 基本的な設定アイテム

`SettingItem` には通常、`title` と `content` 領域に配置されたコントロールが含まれます。オプションの `description` は、より多くのコンテキストを提供できます。`content` プロパティはデフォルトプロパティであるため、子アイテムが明示的に別のプロパティに割り当てられていない場合、自動的にそれに割り当てられます。

<div align="center">
  <img src="/assets/images/Layout/SettingItem/settingitem-basic.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

Column { // 例のコンテナ
    width: 400
    spacing: 0 // SettingItem には独自のボトムボーダー/セパレーターがあります

    SettingItem {
        // Layout.fillWidth: true // SettingItem が ColumnLayout 内にある場合に使用
        title: qsTr("Enable Notifications")
        description: qsTr("Allow the application to send you notifications.")

        // 'content' デフォルトプロパティを介して右側に配置されるコントロール
        Switch {
            checked: true
            // ...
        }
    }

    SettingItem {
        title: qsTr("Username")
        description: qsTr("Your display name in the application.")
        content: TextField { // 明示的に 'content' プロパティを使用
            width: 150 // コントロールに合わせて幅を調整
            text: "CurrentUser"
            placeholderText: qsTr("Enter username")
        }
    }
}
```

## 説明なしの設定アイテム

`description` プロパティが設定されていないか空の文字列の場合、そのスペースは折りたたまれ、該当する場合は `title` が垂直方向に中央揃えされます。

<div align="center">
  <img src="/assets/images/Layout/SettingItem/settingitem-no-desc.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
SettingItem {
    title: qsTr("Advanced Settings")
    // 説明は提供されていません
    content: Button {
        text: qsTr("Configure...")
        onClicked: { /* ... */ }
    }
}
```

## 情報表示用の設定アイテム

`content` スロットにアイテムが配置されていない場合（つまり、子コントロールが追加されていない場合）、`SettingItem` は一貫したスタイルでテキスト情報を純粋に表示するために使用できます。

<div align="center">
  <img src="/assets/images/Layout/SettingItem/settingitem-info.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
SettingItem {
    title: qsTr("Version Information")
    description: qsTr("Application Version: 1.2.3
Build Date: 2023-10-27")
    // 'content' 領域にコントロールは追加されていません
}
```

## 主なプロパティ

*   `title`: `string` - 設定アイテムの主要なテキストラベル。`Text` 要素に表示されます。
*   `description`: `string` - `title` の下に表示されるオプションの説明テキスト。セカンダリカラーの `Text` 要素に表示されます。
*   `content`: `Item` (`rightContent.data` のデフォルトプロパティエイリアス) - 設定アイテムの右側に QML アイテム（通常は `Switch`、`ComboBox`、`Button`、`TextField` などの単一のコントロール）を追加できます。
*   パディングプロパティ (`leftPadding`, `rightPadding`, `topPadding`, `bottomPadding`): `Frame` から継承されます。`SettingItem` は特定のデフォルト値を設定します（例：`leftPadding: 15 + 35`、`rightPadding: 15`、`topPadding: 13`、`bottomPadding: 13`）。
*   `Layout.fillWidth`: `bool` - `Frame` から継承されます。`SettingItem` が親の `ColumnLayout` 内で使用される場合、幅いっぱいに広げるために通常 `true` に設定する必要があります。

`SettingItem` にはデフォルトで下部境界線が含まれており、複数の `SettingItem` がリストに積み重ねられている場合に視覚的な区切りとして機能します。

## `SettingExpander` との使用

`SettingItem` は、詳細設定や関連設定のリストを作成し、一貫したルックアンドフィールを維持するために、`SettingExpander` の折りたたみ可能なコンテンツ領域内で一般的に使用されます。

```qml
SettingExpander {
    width: 400
    icon: "ic_fluent_preferences_20_regular"
    title: qsTr("User Preferences")
    description: qsTr("Manage your application preferences.")

    // SettingItems を使用した折りたたみ可能なコンテンツ
    SettingItem {
        title: qsTr("Enable Auto-Save")
        content: Switch { checked: true }
    }
    SettingItem {
        title: qsTr("Sync Interval")
        description: qsTr("Frequency of automatic synchronization.")
        content: ComboBox { model: ["5 minutes", "15 minutes", "1 hour"] }
    }
}
```

## 関連コンポーネント

*   `Frame`: `SettingItem` が継承するベースコンポーネントで、背景と境界機能を提供します。
*   `SettingExpander`: `SettingItem` は `SettingExpander` のコンテンツ領域内によくネストされます。

```
