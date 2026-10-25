# アバター (Avatar)

`Avatar` は円形の領域にユーザー画像、イニシャル、または既定のアイコンを表示します。画像がない場合は `text` からイニシャルを生成したり、プレースホルダーとして Fluent アイコンを指定したりできます。

## 既定のアバター

画像、テキスト、アイコンを指定しない場合、既定の人物アイコンが表示されます。

<div align="center">
  <img src="/assets/images/docs/Avatar/avatar-sample.png" alt="既定のアバター">
</div>

```qml
Avatar {
    size: 64
}
```
```

## 画像アバター

`source` に画像を指定します。画像は正方形にトリミングされ、円形マスクで表示されます。

<div align="center">
  <img src="/assets/images/docs/Avatar/default.png" alt="画像アバター">
</div>

```qml
Avatar {
    size: 64
    source: "qrc:/assets/avatar.png"
}
```
```

## イニシャル

`text` を設定すると、最初と最後の単語からイニシャルを抽出します。名前やユーザー識別子の表示に利用できます。

<div align="center">
  <img src="/assets/images/docs/Avatar/example-2.png" alt="イニシャル">
</div>

```qml
Avatar {
    size: 64
    text: "Alex Morgan"
}
```
```

## カスタムプレースホルダーアイコン

`icon` エイリアスに Fluent アイコン名を設定します。`source` と `text` のどちらも設定されていない場合に表示されます。

<div align="center">
  <img src="/assets/images/docs/Avatar/example-3.png" alt="カスタムプレースホルダーアイコン">
</div>

```qml
Avatar {
    size: 64
    icon: "ic_fluent_person_20_regular"
}
```
```

## 主なプロパティ

- `size`: 既定の幅と高さ。初期値は `96`。
- `source`: アバター画像の URL。設定すると画像が優先されます。
- `text`: イニシャル生成に使用するテキスト。
- `icon`: 内部アイコンのエイリアス。Fluent アイコン名を指定します。

`implicitWidth` と `implicitHeight` は `size` で決まります。`width` または `height` を明示すると、実際の表示領域に合わせてレイアウトされます。
