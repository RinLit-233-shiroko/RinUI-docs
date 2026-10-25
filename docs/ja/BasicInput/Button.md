# ボタン

ボタンは、ユーザーが押したりクリックしたりできるボタンコントロールです。ボタンは通常、アクションを実行したり質問に答えたりするために使用されます。

QtQuick のネイティブコンポーネントと同様に、ボタンがユーザーによってアクティブ化されると、`clicked()` シグナルを発行します。このシグナルを接続することで、ボタンに関連付けられたアクションを実行できます。使用方法はネイティブコントロールと一致しています。

## 基本的なボタン

<div align="center">
  <img src="/assets/images/docs/Button/example-2.png" alt="基本的なボタン">
</div>

<div align="center">
  <img src="/assets/images/BasicInput/Button/Button.png" alt="基本的なボタン">
</div>

```qml
Button {
    text: qsTr("Standard QML Button")
}
```
```

## アイコン付きボタン

<div align="center">
  <img src="/assets/images/docs/Button/example.png" alt="アイコン付きボタン">
</div>

<div align="center">
  <img src="/assets/images/BasicInput/Button/IconButton.png" alt="アイコン付きボタン">
</div>

```qml
Button {
    icon.source: Qt.resolvedUrl("../../assets/BA_Pic_Shiroko-chibi.png")   // [!code highlight]
    text: qsTr("Sunaookami Shiroko")
}

Button {
    icon.name: "ic_fluent_button_20_regular"  // [!code highlight]
    text: qsTr("Button with Icon")
}
```
```

## 強調表示ボタン

<div align="center">
  <img src="/assets/images/docs/Button/flat.png" alt="強調表示ボタン">
</div>

<div align="center">
  <img src="/assets/images/BasicInput/Button/AccentStyleButton.png" alt="強調表示ボタン">
</div>

```qml
Button {
    highlighted: true
    text: qsTr("Accent Style Button")
}
```
```

## フラットボタン

<div align="center">
  <img src="/assets/images/docs/Button/highlighted-2.png" alt="フラットボタン">
</div>

<div align="center">
  <img src="/assets/images/BasicInput/Button/PlainStyleButton.png" alt="フラットボタン">
</div>

```qml
Button {
    flat: true
    text: qsTr("Plain Style Button")
}
```
```

## カスタムボタン（強調表示）

<div align="center">
  <img src="/assets/images/docs/Button/highlighted.png" alt="カスタムボタン（強調表示）">
</div>

<div align="center">
  <img src="/assets/images/BasicInput/Button/ButtonWithCustomColor.png" alt="カスタムボタン（強調表示）">
</div>

```qml
Button {
    highlighted: true
    primaryColor: "#444"
    text: qsTr("Button with Custom Color")
}
```
```

