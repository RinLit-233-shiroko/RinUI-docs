# Segmented（セグメントコントロール）

`Segmented` は、少数の排他的な選択肢を切り替えるためのコントロールです。Qt Quick `TabBar` を継承し、複数の `SegmentedItem` で構成されます。選択項目には Fluent スタイルの塗り、枠線、インジケーターが表示され、ビュー切り替え、フィルター、コンパクトな設定に適しています。

## 基本的な使い方

<div align="center">
  <img src="/assets/images/docs/Segmented/example-2.png" alt="基本的な使い方">
</div>

```qml
Segmented {
    currentIndex: 0

    SegmentedItem {
        icon.name: "ic_fluent_circle_20_regular"
        text: qsTr("1 番目")
    }

    SegmentedItem {
        icon.name: "ic_fluent_circle_20_regular"
        text: qsTr("2 番目")
    }

    SegmentedItem {
        icon.name: "ic_fluent_circle_20_regular"
        text: qsTr("3 番目")
    }
}
```

暗黙の幅は内容に合わせて決まります。親いっぱいに広げる場合は `width` またはレイアウトのフィルプロパティを設定してください。

## アイコンのみ

テキストを省略し、`ToolTip` で意味を補足できます：

<div align="center">
  <img src="/assets/images/docs/Segmented/example-3.png" alt="アイコンのみ">
</div>

```qml
Segmented {
    SegmentedItem {
        icon.name: "ic_fluent_camera_20_regular"
        ToolTip {
            text: qsTr("カメラ")
            visible: parent.hovered
        }
    }

    SegmentedItem {
        icon.name: "ic_fluent_image_20_regular"
        ToolTip {
            text: qsTr("画像")
            visible: parent.hovered
        }
    }
}
```

アイコンだけの場合は、アクセシブルな名前やツールチップも用意してください。

## 動的な項目

`TabBar` を継承しているため、`Repeater` で項目を生成し、`currentIndex` で選択位置を取得できます：

<div align="center">
  <img src="/assets/images/docs/Segmented/example-4.png" alt="動的な項目">
</div>

```qml
Segmented {
    id: segmented
    currentIndex: 0

    Repeater {
        model: [qsTr("概要"), qsTr("詳細"), qsTr("履歴")]

        SegmentedItem {
            text: modelData
        }
    }
}
```

## 状態と選択

- `currentIndex`：選択中のインデックス（`TabBar` から継承）。
- `currentItem`：選択中の項目（`TabBar` から継承）。
- `enabled`：`false` でコントロール全体を無効化。
- `SegmentedItem.checked`：`TabBar` が管理する選択状態。通常は手動設定しません。
- `SegmentedItem.icon.name`：Fluent アイコン名。

選択変更の監視：

<div align="center">
  <img src="/assets/images/docs/Segmented/example.png" alt="状態と選択">
</div>

```qml
Segmented {
    onCurrentIndexChanged: {
        console.log("現在のセグメント:", currentIndex)
    }
}
```

戻る履歴を伴うページ移動には、セグメントコントロールをルーター代わりにせず [`NavigationView`](/ja/Navigation/NavigationView) を使用してください。

## SelectorBar との違い

`Segmented` は共通の枠線と塗り背景を持ち、フォーム、ツールバー、局所的なビュー切り替えに向いています。[`SelectorBar`](/ja/Navigation/SelectorBar) は外周背景を描かず、タブ型のナビゲーションに近い見た目です。

## 関連コンポーネント

- [SelectorBar](/ja/Navigation/SelectorBar)：外枠のないセレクターバー。
- [NavigationView](/ja/Navigation/NavigationView)：ページレベルのナビゲーション。
- [NavigationBar](/ja/Navigation/NavigationBar)：縦方向のナビゲーションバー。
