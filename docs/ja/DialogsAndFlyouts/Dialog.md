# ダイアログ

`Dialog` コンポーネントは、重要な情報を表示したり、ユーザー入力を要求したりするために使用できるモーダルウィンドウを提供します。現在のビューをオーバーレイし、メインアプリケーションのコンテンツに戻る前にユーザーが操作する必要があります。RinUI の `Dialog` は、カスタムスタイル、アニメーション、およびタイトル領域と標準ボタン用のフッターを含む事前定義された構造で、標準の `QtQuick.Controls.Dialog` を拡張します。

## 基本的なダイアログ

基本的なダイアログは、タイトル、コンテンツ、および標準ボタン（OK、キャンセルなど）で構成されます。コンテンツアイテムは、`Dialog` コンポーネントの直接の子として追加されます。

<div align="center">
  <img src="/assets/images/DialogsAndFlyouts/Dialog/dialog-basic.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

Button {
    text: qsTr("Show Basic Dialog")
    onClicked: basicDialog.open()
}

Dialog {
    id: basicDialog
    title: qsTr("Basic Dialog Title")
    // modal: true はコンポーネント内で Overlay.modal を使用するためデフォルトです
    standardButtons: Dialog.Ok | Dialog.Cancel

    // コンテンツアイテムはここに子として追加されます
    Text {
        text: qsTr("This is the main content of the dialog.")
    }

    onAccepted: {
        console.log("Dialog accepted!");
        // OKアクションを実行
    }
    onRejected: {
        console.log("Dialog rejected or closed.");
        // キャンセル処理
    }
}
```

## カスタムコンテンツ

`Dialog` の子として任意の QML コンポーネントを配置して、ダイアログのコンテンツ領域内にカスタムレイアウトとインタラクションを作成できます。これらの子は、`Dialog` の内部 `contentItem` 内の `ColumnLayout` に自動的に親子関係が設定されます。

<div align="center">
  <img src="/assets/images/DialogsAndFlyouts/Dialog/dialog-custom.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
import RinUI // Consistent import

Dialog {
    id: customDialog
    title: qsTr("Custom Layout")
    standardButtons: Dialog.Apply | Dialog.Close // 「適用」と「閉じる」ボタンの使用例

    // これらのアイテムは内部 ColumnLayout の子になります
    Text { 
        text: qsTr("Please enter your details below:")
        Layout.fillWidth: true // 内部で ColumnLayout が使用されていると仮定
    }
    TextField { // TextField が別の RinUI コンポーネントまたは標準コンポーネントであると仮定
        id: nameField
        placeholderText: qsTr("Name")
        Layout.fillWidth: true
    }
    CheckBox { // CheckBox が別の RinUI コンポーネントであると仮定
        id: agreeCheck
        text: qsTr("I agree to the terms and conditions")
        Layout.fillWidth: true
    }
    
    // 「適用」ボタンの処理
    onApply: { 
        if (agreeCheck.checked) {
            console.log("Applied with name:", nameField.text);
            customDialog.close(); // 適用後にダイアログを閉じる
        } else {
            console.log("Terms not agreed.");
            // オプション：ユーザーに規約に同意する必要があることを通知
        }
    }
    
    // Dialog.Close がクリックされるか close() が呼び出されると onClose が発行されます
    onClose: { 
        console.log("Custom dialog was closed.");
    }
}
```

## 主なプロパティ

*   `title`: `string` - ダイアログのタイトル領域に表示されるテキスト。
*   `standardButtons`: `Dialog.StandardButtons` (列挙型) - 表示する標準ボタンの組み合わせ（例：`Dialog.Ok`、`Dialog.Cancel`、`Dialog.Yes`、`Dialog.No`、`Dialog.Apply`、`Dialog.Close`）。これらはフッターの内部 `DialogButtonBox` によって管理されます。
*   `modal`: `bool` - (継承) `true` の場合、ダイアログはアプリケーションの残りの部分との対話をブロックします。RinUI の `Dialog` は `Overlay.modal` を使用しており、これにより効果的にモーダルになります。
*   `contentItem`: `Item` (読み取り専用) - ダイアログのコンテンツの親となるアイテム（RinUI の `Dialog` では、これは内部 `ColumnLayout` です）。`Dialog` に直接追加された子アイテムは、自動的にこの `contentItem` に再親子化されます。
*   `padding`、`topPadding`、`bottomPadding`: `real` - ダイアログ内のパディングを制御します。すべてデフォルトは 24 です。
*   `implicitWidth`: `real` - コンテンツと事前定義された最小/最大値（`Utils.dialogMinimumWidth`、`Utils.dialogMaximumWidth`）に基づいて計算されます。
*   `closePolicy`: `Popup.ClosePolicy` (列挙型) - ユーザーインタラクションによってダイアログをどのように閉じることができるかを定義します。RinUI の `Dialog` はデフォルトで `Popup.NoAutoClose` です。これは通常、明示的なボタンクリック（OK、キャンセル、またはカスタムクローズボタンなど）または `close()`、`accept()`、`reject()` の呼び出しが必要であることを意味します。

## メソッド

*   `open()`: ダイアログを表示します。
*   `close()`: ダイアログを非表示にします。`accept()` または `reject()` が呼び出されない限り、通常は `rejected()` を発行します。
*   `accept()`: ダイアログを閉じて `accepted()` シグナルを発行します。
*   `reject()`: ダイアログを閉じて `rejected()` シグナルを発行します。

## シグナル

*   `accepted()`: ダイアログが受け入れられたとき（例：OKまたはYesボタンのクリック、または `accept()` の呼び出し）に発行されます。
*   `rejected()`: ダイアログが拒否または閉じられたとき（例：キャンセルまたはNoボタンのクリック、または `reject()` や `close()` の呼び出し）に発行されます。
*   `standardButtons` に対応する特定のシグナル（例：`applied()`、`helpRequested()`）も、ベースの `QtQuick.Controls.Dialog` から利用可能です。

## スタイルと動作

*   **背景とオーバーレイ**: ダイアログにはスタイル付きの背景（アクリル色、境界線、角丸）と、モダリティのためのスモーク効果オーバーレイがあります。
*   **アニメーション**: 不透明度とスケールのための `enter` および `exit` トランジションが含まれます。
*   **フッター**: `footer` は、`standardButtons` プロパティに基づいて内部 `DialogButtonBox` によって自動的に設定されます。完全にカスタムのボタン配置が必要な場合は、`standardButtons` を避け、カスタムボタンを直接コンテンツとして追加し、それらの `onClicked` ハンドラを管理して `accept()`、`reject()`、または `close()` を呼び出す必要があるかもしれません。
*   **ヘッダー**: `header` プロパティはデフォルトでは空の `Item` ですが、より複雑なヘッダー領域が必要な場合はカスタムQMLで置き換えることができます（ただし、通常は `title` で十分です）。

```
