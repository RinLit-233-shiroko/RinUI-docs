# Iconography（アイコンビジュアル）

アイコングラフィは、情報を迅速かつ効果的に伝えるために使用できる視覚的なデザイン言語です。RinUI は、一貫したデザイン原則に従い、アプリケーションに簡単に統合できる包括的なアイコンセットを提供します。

<IconSearch />

## 基本的なアイコンの使用

<div align="center">
  <img src="/assets/images/docs/Iconography/example-2.png" alt="基本的なアイコンの使用">
</div>

```qml
import RinUI

Icon {
    name: "ic_fluent_apps_16_regular"
    size: 24
}
```

## 異なるサイズのアイコン

<div align="center">
  <img src="/assets/images/docs/Iconography/example-3.png" alt="異なるサイズのアイコン">
</div>

```qml
Column {
    spacing: 8
    
    Icon {
        name: "ic_fluent_mail_16_regular"
        size: 16
    }
    
    Icon {
        name: "ic_fluent_mail_20_regular"
        size: 20
    }
    
    Icon {
        name: "ic_fluent_mail_24_regular"
        size: 24
    }
    
    Icon {
        name: "ic_fluent_mail_32_regular"
        size: 32
    }
}
```

## 色付きのアイコン

<div align="center">
  <img src="/assets/images/docs/Iconography/example-4.png" alt="色付きのアイコン">
</div>

```qml
Row {
    spacing: 12
    
    Icon {
        name: "ic_fluent_checkmark_circle_24_regular"
        color: "#0078D4"
    }
    
    Icon {
        name: "ic_fluent_error_circle_24_regular"
        color: "#D83B01"
    }
    
    Icon {
        name: "ic_fluent_warning_24_regular"
        color: "#FF8C00"
    }
    
    Icon {
        name: "ic_fluent_info_circle_24_regular"
        color: "#0078D4"
    }
}
```

## ボタン内のアイコン

<div align="center">
  <img src="/assets/images/docs/Iconography/example-5.png" alt="ボタン内のアイコン">
</div>

```qml
Row {
    spacing: 12
    
    Button {
        icon.name: "ic_fluent_save_20_regular"
        text: qsTr("保存")
    }
    
    Button {
        icon.name: "ic_fluent_delete_20_regular"
        text: qsTr("削除")
    }
    
    ToolButton {
        icon.name: "ic_fluent_settings_20_regular"
    }
}
```

## ナビゲーション内のアイコン

<div align="center">
  <img src="/assets/images/docs/Iconography/example.png" alt="ナビゲーション内のアイコン">
</div>

```qml
NavigationBar {
    items: [
        {
            title: qsTr("ホーム"),
            icon: "ic_fluent_home_24_regular"
        },
        {
            title: qsTr("検索"),
            icon: "ic_fluent_search_24_regular"
        },
        {
            title: qsTr("設定"),
            icon: "ic_fluent_settings_24_regular"
        }
    ]
}
```

## 重要なプロパティ

- `name`: アイコン名（例："ic_fluent_apps_16_regular"）
- `size`: アイコンサイズ（ピクセル）
- `color`: アイコン色
- `visible`: アイコンが表示されるかどうか
- `enabled`: アイコンが有効かどうか

## 一般的なアイコンカテゴリー

### システムアイコン
- `ic_fluent_apps_*`: アプリケーションアイコン
- `ic_fluent_settings_*`: 設定アイコン
- `ic_fluent_home_*`: ホームアイコン

### アクションアイコン
- `ic_fluent_save_*`: 保存アクション
- `ic_fluent_delete_*`: 削除アクション
- `ic_fluent_edit_*`: 編集アクション

### ステータスアイコン
- `ic_fluent_checkmark_*`: 成功インジケーター
- `ic_fluent_error_*`: エラーインジケーター
- `ic_fluent_warning_*`: 警告インジケーター

### ナビゲーションアイコン
- `ic_fluent_home_*`: ホームナビゲーション
- `ic_fluent_arrow_*`: 方向ナビゲーション
- `ic_fluent_chevron_*`: 展開/折りたたみインジケーター
