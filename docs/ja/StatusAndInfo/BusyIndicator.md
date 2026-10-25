# ビジーインジケーター (BusyIndicator)

`BusyIndicator` は処理中であることを知らせる循環アニメーションを表示します。データの読み込みやリクエストの送信など、明確な進捗率を表示できない処理に適しています。

## 基本的な使い方

<div align="center">
  <img src="/assets/images/docs/BusyIndicator/example-2.png" alt="基本的な使い方">
</div>

```qml
BusyIndicator {
    running: true
}
```
```

## 状態テキストとの組み合わせ

<div align="center">
  <img src="/assets/images/docs/BusyIndicator/example-3.png" alt="状態テキストとの組み合わせ">
</div>

```qml
Column {
    spacing: 12

    BusyIndicator {
        anchors.horizontalCenter: parent.horizontalCenter
        running: isLoading
    }

    Text {
        anchors.horizontalCenter: parent.horizontalCenter
        text: isLoading ? qsTr("Loading...") : qsTr("Complete")
    }
}
```

`isLoading` はアプリケーションのロジックで管理し、非同期処理の開始時と完了時に更新します。

## サイズの変更

<div align="center">
  <img src="/assets/images/docs/BusyIndicator/example.png" alt="サイズの変更">
</div>

```qml
BusyIndicator {
    width: 60
    height: 60
    running: true
}
```
```

## 主なプロパティ

- `running`: ビジーアニメーションを表示して実行するかどうか。BusyIndicator が提供する互換プロパティです。
- `state`: ProgressRing から継承され、実行中、停止、一時停止などの状態を指定します。
- `width`、`height`: 表示サイズ。
- `indeterminate`: `running` に基づいて BusyIndicator 内部で設定される不確定進捗アニメーションの状態。
