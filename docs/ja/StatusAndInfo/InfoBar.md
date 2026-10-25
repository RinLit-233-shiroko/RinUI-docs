# インフォバー (InfoBar)

`InfoBar` はユーザーにメッセージを表示するコントロールです。情報、成功、警告、エラーの各状態を示せるほか、カスタムコンテンツや自動的な非表示にも対応します。

## 基本的なインフォバー

<div align="center">
  <img src="/assets/images/docs/InfoBar/example-2.png" alt="基本的なインフォバー">
</div>

```qml
InfoBar {
    title: qsTr("Information")
    text: qsTr("This is an informational message.")
    severity: Severity.Info
}
```

## カスタムコンテンツ

<div align="center">
  <img src="/assets/images/docs/InfoBar/example-3.png" alt="カスタムコンテンツ">
</div>

```qml
InfoBar {
    title: qsTr("Action required")
    text: qsTr("Review the following options:")

    customContent: [
        Button { text: qsTr("Accept") },
        Button { text: qsTr("Ignore") }
    ]
}
```

## 重大度

<div align="center">
  <img src="/assets/images/docs/InfoBar/example-4.png" alt="重大度">
</div>

```qml
InfoBar {
    title: qsTr("Success")
    text: qsTr("The operation completed successfully.")
    severity: Severity.Success
}

InfoBar {
    title: qsTr("Warning")
    text: qsTr("Check your configuration.")
    severity: Severity.Warning
}

InfoBar {
    title: qsTr("Error")
    text: qsTr("An error occurred during the operation.")
    severity: Severity.Error
}
```

## 自動的に閉じる

<div align="center">
  <img src="/assets/images/docs/InfoBar/example.png" alt="自動的に閉じる">
</div>

```qml
InfoBar {
    title: qsTr("Auto dismiss")
    text: qsTr("This message will close after three seconds.")
    severity: Severity.Info
    timeout: 3000
    closable: true
}
```

## 主なプロパティ

- `title`: インフォバーのタイトル。
- `text`: メッセージ本文。
- `severity`: 情報、成功、警告、エラーの状態。
- `timeout`: 自動的に閉じるまでの時間（ミリ秒）。`-1` は自動的に閉じないことを示します。
- `closable`: 閉じるボタンを表示するかどうか。
- `iconVisible`: 状態アイコンを表示するかどうか。
- `customContent`: 表示するカスタム項目。

## メソッド

- `close()`: 閉じるアニメーションを開始します。InfoBar に `closed()` シグナルはありません。
