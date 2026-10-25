# SelectorBar（セレクターバー）

`SelectorBar` は少数のコンテンツビューを切り替えるためのコントロールです。Qt Quick `TabBar` を継承しますが、外周コンテナの背景は描画しません。各 `SelectorBarItem` は下部インジケーターで選択状態を示し、タイトル領域やコンテンツ上部に適しています。

## 基本的な使い方

<div align="center">
  <img src="/assets/images/docs/SelectorBar/example-2.png" alt="基本的な使い方">
</div>

```qml
SelectorBar {
    currentIndex: 0

    SelectorBarItem {
        text: qsTr("最近")
        icon.name: "ic_fluent_clock_20_regular"
    }

    SelectorBarItem {
        text: qsTr("共有")
        icon.name: "ic_fluent_share_20_regular"
    }

    SelectorBarItem {
        text: qsTr("お気に入り")
        icon.name: "ic_fluent_star_20_regular"
    }
}
```

外側のコンテナはアプリ側で用意します。`Frame`、ページヘッダー、区切り線の近くに配置し、`SelectorBar` 自体がカード背景を提供するものとして扱わないでください。

## コンテンツの切り替え

`currentIndex` と `Loader` または `StackLayout` を組み合わせると、選択タブとコンテンツを同期できます：

<div align="center">
  <img src="/assets/images/docs/SelectorBar/example-3.png" alt="コンテンツの切り替え">
</div>

```qml
Column {
    width: parent.width

    SelectorBar {
        id: selector
        currentIndex: 0

        SelectorBarItem { text: qsTr("概要") }
        SelectorBarItem { text: qsTr("詳細") }
        SelectorBarItem { text: qsTr("履歴") }
    }

    Loader {
        width: parent.width
        height: 400
        sourceComponent: [
            overviewPage,
            detailPage,
            historyPage
        ][selector.currentIndex]
    }
}
```

戻る履歴を伴う完全なアプリケーションページには [`NavigationView`](/ja/Navigation/NavigationView) を使用してください。

## 動的な項目

`SelectorBar` は `TabBar` を継承するため、`Repeater` で項目を生成できます：

<div align="center">
  <img src="/assets/images/docs/SelectorBar/example-4.png" alt="動的な項目">
</div>

```qml
SelectorBar {
    id: selector

    Repeater {
        model: [
            { text: qsTr("最近"), page: recentPage },
            { text: qsTr("お気に入り"), page: favoritePage }
        ]

        SelectorBarItem {
            text: modelData.text
        }
    }
}
```

## 状態とイベント

- `currentIndex`：選択中のインデックス（`TabBar` から継承）。
- `currentItem`：選択中の項目（`TabBar` から継承）。
- `enabled`：バー全体を無効化。
- `SelectorBarItem.text`：項目のラベル。
- `SelectorBarItem.icon.name`：Fluent アイコン名。

<div align="center">
  <img src="/assets/images/docs/SelectorBar/example.png" alt="状態とイベント">
</div>

```qml
SelectorBar {
    onCurrentIndexChanged: {
        console.log("現在のタブ:", currentIndex)
    }
}
```

## Segmented との違い

[`Segmented`](/ja/Navigation/Segmented) は枠線と塗り背景を備えたコンパクトな排他選択に適しています。`SelectorBar` はより軽量で、タイトルと選択中タブを強調します。同じナビゲーショングループ内で両方の見た目を混在させないでください。

## 関連コンポーネント

- [Segmented](/ja/Navigation/Segmented)：塗り背景を持つセグメントコントロール。
- [NavigationView](/ja/Navigation/NavigationView)：完全なページナビゲーションと戻るスタック。
- [Frame](/ja/ListAndCollections/Frame)：バーの外側をグループ化するコンテナ。
