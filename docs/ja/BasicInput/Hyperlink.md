# ハイパーリンク

Hyperlink コンポーネントは、リンクとして機能するテキストを作成するために使用されます。従来のWebハイパーリンクのようにスタイル設定され、外部リンクへのナビゲートやアプリケーション内のアクションのトリガーに使用できます。これは `Button` から継承され、デフォルトで `flat: true` および `highlighted: true` でスタイル設定されます。

## URLへの基本的なハイパーリンク

デフォルトのWebブラウザで外部リンクを開くハイパーリンクを作成するには、表示用の `text` と `openUrl`（またはそのエイリアス `url`）プロパティを設定します。

<div align="center">
  <img src="/assets/images/BasicInput/Hyperlink/hyperlink-url.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

Hyperlink {
    text: qsTr("Visit RinUI Project")
    openUrl: "https://github.com/RinLit-233-shiroko/Rin-UI"
}
```

## アプリ内アクション用のハイパーリンク

また、`Hyperlink` を使用して、`onClicked` シグナルを処理することにより、内部アプリケーションアクションをトリガーすることもできます。アプリ内アクションのみを実行し、URLにナビゲートしない場合は、`openUrl` プロパティを設定しないでください。

<div align="center">
  <img src="/assets/images/BasicInput/Hyperlink/hyperlink-action.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
Hyperlink {
    text: qsTr("Go to Settings")
    onClicked: {
        // アプリ内の設定ページにナビゲートするロジック
        console.log("Settings link clicked");
        // 例: stackView.push(settingsPageComponent)
    }
}
```

## 主なプロパティ

*   `text`: `string` - ハイパーリンクの可視テキスト。
*   `openUrl`: `url` - ハイパーリンクがクリックされたときに開く URL。デフォルトの `onClicked` ハンドラは、この URL を外部で開こうとします。
*   `url`: `url` - `openUrl` のエイリアス。
*   `enabled`: `bool` - コントロールがインタラクティブかどうか。デフォルトは `true` です。

`Button` の派生コンポーネントであるため、`icon.name`、`icon.source` などの他のプロパティも使用できます。デフォルトのスタイル（`flat: true`、`highlighted: true`）により、典型的なリンクの外観になります。

## シグナル

*   `onClicked()`: ハイパーリンクがクリックされたときに発行されます。`openUrl` も設定されている場合、デフォルトの動作はその URL を開こうとすることです。アプリ内ナビゲーションやその他のアクションのために、このハンドラにカスタムロジックを追加できます。

```
