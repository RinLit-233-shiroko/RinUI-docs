# フライアウト

`Flyout` は、情報提供またはユーザーインタラクションが必要な軽量UIを表示します。`Dialog` とは異なり、`Flyout` は通常、特定のコントロールにアタッチされ、その外部をクリックまたはタップすることで簡単に閉じることができます（標準の `Popup` 動作）。多くの場合、詳細情報の表示、簡単な入力の収集、またはユーザーにアクションの確認を求めるために使用されます。

`Flyout` は `QtQuick.Controls.Basic.Popup` から継承します。

## 基本的なフライアウト

`Flyout` は、ボタンのクリックやその他のユーザーアクションに応じて開かれることがよくあります。テキストやカスタムボタンを含めることができます。`target` プロパティを使用すると、フライアウトを開いたコントロールに関連付けることができ、これは配置に役立ちます。

<div align="center">
  <img src="/assets/images/DialogsAndFlyouts/Flyout/flyout-basic.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
import QtQuick 2.15
import RinUI // これにより RinUI の Position 列挙型が利用可能になるはずです

// ...

Button {
    id: myButton
    text: qsTr("Show Flyout")
    onClicked: myFlyout.open()
}

Flyout {
    id: myFlyout
    parent: myButton // フライアウトを myButton に相対的に配置します
    text: qsTr("This is a flyout with a message.")
    
    // QML アイテムのリストを buttonBox に割り当てることでボタンを追加します
    buttonBox: [
        Button {
            text: qsTr("OK")
            highlighted: true // 例：デフォルトアクションのスタイルを設定
            onClicked: myFlyout.close()
        }
    ]
}
```

## 画像と配置のあるフライアウト

フライアウトは上部に画像を表示し、`position` プロパティを使用して親コントロールまたは `target` コントロールに対して配置できます。このプロパティは RinUI 固有の `Position` 列挙型を使用します。

<div align="center">
  <img src="/assets/images/DialogsAndFlyouts/Flyout/flyout-image-positioned.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
Button {
    id: detailsButton
    text: qsTr("View Details")
    onClicked: detailsFlyout.open()
    
    Flyout {
        id: detailsFlyout
        // 親属性を定義せずに、ボタン内に Flyout を直接ネストすることができます。
        // Position 列挙型には、Position.Top, Position.Bottom, Position.Left, Position.Right などが含まれる可能性があります
        // Position.Center (利用可能な場合) は、ターゲットまたは画面の中央に配置する場合があります。
        position: Position.Bottom // 例：ターゲットの下に表示
        image: Qt.resolvedUrl("../../assets/BA_Pic_Shiroko-chibi.png") // パスが正しいことを確認してください
        text: qsTr("More details about the item can be shown here.")
        maximumWidth: 300
        buttonBox: [
            Button {
                text: qsTr("Confirm")
                onClicked: detailsFlyout.close()
            },
            Button {
                text: qsTr("Cancel")
                onClicked: detailsFlyout.close()
            }
        ]
    }
}
```

## 主なプロパティ

*   `text`: `string` - フライアウト内に表示される主要なテキストコンテンツ。
*   `image`: `url` - フライアウトの上部に表示するオプションの画像URL。画像は `fillMode: Image.PreserveAspectCrop` で表示されます。
*   `buttonBox`: `list<Item>` - (`buttonLayout.data` のエイリアス) フライアウトの下部にある水平 `RowLayout` に配置されるQMLアイテム（通常は `Button`）のリストを受け付けます。
*   `position`: `Position` (列挙型) - フライアウトの優先位置を指定します（例：`Position.Top`、`Position.Bottom`、`Position.Left`、`Position.Right`）。デフォルトは `Position.Top` です。これは RinUI のカスタム `Position` 列挙型（おそらく `RinUI.utils.Position` にあります）を使用します。
*   `maximumWidth`: `real` - フライアウトのコンテンツ領域が拡張できる最大幅。デフォルトは `350` です。
*   `padding`: `real` - フライアウトのコンテンツ周囲のパディング。デフォルトは `16` です。

**`Popup` から継承:**
*   `parent`: `Item` - フライアウトを相対的に配置するアイテム。`Flyout` の `x` および `y` プロパティは、`target` と `position` に基づいて自動的に計算されます。
*   `opened`: `bool` (読み取り専用) - フライアウトが現在表示されているかどうか。
*   `open()`: フライアウトを表示するメソッド。
*   `close()`: フライアウトを非表示にするメソッド。
*   `closePolicy`: `Popup.ClosePolicy` (列挙型) - ユーザーインタラクションによってフライアウトをどのように閉じることができるかを定義します。典型的なフライアウトの動作（ライトディスミス）は、多くの場合 `Popup.CloseOnEscape | Popup.CloseOnPressOutsideParent` です。

## スタイル

`Flyout` にはスタイル付きの背景があり（ソースはアクリル色、境界線、影を示していますが、提供されたスニペットでは背景の矩形自体がコメントアウトされていました。スタイルは異なる方法で適用される可能性があります）、不透明度と位置のための出入りアニメーションが含まれています。
```
