---
layout: home

hero:
  name: "Qt Quick + PySide"
  text: "デスクトップアプリ向けの Fluent スタイルオープンソース UI ライブラリ"
  tagline: "ウィンドウ、ナビゲーション、テーマ、コントロールを、使い慣れた QML で提供します。"
  image:
    src: /assets/images/brand/rinui-vertical-dark.png
    alt: RinUI
    width: 128
    height: 128
  actions:
    - theme: brand
      text: はじめに
      link: /ja/guide/getting-started
    - theme: alt
      text: コンポーネント
      link: /ja/BasicInput/Button

features:
  - icon:
      src: /assets/images/home/icons/navigationview.png
      alt: NavigationView
      width: 48
      height: 48
    title: デスクトップアプリの土台
    details: NavigationView、FluentPage、タイトルバーを組み合わせ、ナビゲーションとページを一貫して構築できます。
    link: /ja/Navigation/NavigationView
    linkText: NavigationView
  - icon:
      src: /assets/images/home/icons/colorpicker.png
      alt: ColorPicker
      width: 48
      height: 48
    title: アプリ全体で統一されたテーマ
    details: ライト、ダーク、自動モードが同じカラー、アクセント、モーションを共有します。
    link: /ja/core/theme
    linkText: テーマシステム
  - icon:
      src: /assets/images/home/icons/button.png
      alt: Button
      width: 48
      height: 48
    title: 使い慣れた QML コントロール
    details: 親しみやすいコントロール名を保ちながら、Fluent の状態、入力、コレクション、ダイアログを提供します。
    link: /ja/BasicInput/Button
    linkText: コントロールを見る
---

## RinUI を選ぶ理由

RinUI は、Qt Quick デスクトップアプリのウィンドウ、ナビゲーション、ページ、テーマ、主要なコントロールを一つの再利用可能な基盤にまとめます。

- **完成したウィンドウ構成**：`FluentWindow`、`NavigationView`、`FluentPage` をそのまま組み合わせられます。
- **ネイティブなデスクトップ体験**：Windows で Mica、Acrylic、カスタムタイトルバー、標準ウィンドウ操作に対応します。
- **統一されたデザインシステム**：テーマ、コントロール、アイコン、翻訳、Python 起動コードが同じ API を共有します。

<GalleryCarousel section="home" />

## RinUI が向いているプロジェクト

RinUI は、デスクトップウィンドウと充実したインタラクションが必要で、QML の開発速度も保ちたいプロジェクトに向いています。

- PySide6 と Qt Quick で構築するデスクトップツールやコンテンツ管理アプリ。
- Fluent の視覚言語を取り入れつつ、ウィンドウ構成やコントロール状態を一から作らずに済ませたい社内アプリケーション。
- ナビゲーション、設定ページ、ダイアログ、テーブル、日付選択、テーマ切り替えを必要とするプロトタイプや継続開発中の製品。

Web コンポーネントライブラリの代替ではなく、Qt Widgets だけで構成する必要があるプロジェクトにも適していません。

## 使い慣れた QML から始める

<div align="center">
  <img src="/assets/images/docs/FluentWindow/example.png" alt="使い慣れた QML から始める">
</div>

```qml
import QtQuick
import RinUI

FluentWindow {
    width: 960
    height: 640

    navigationItems: [
        {
            title: "ホーム",
            icon: "ic_fluent_home_20_regular",
            page: Qt.resolvedUrl("pages/Home.qml")
        }
    ]
}
```

Python 側でアプリケーションウィンドウを作成します：

```python
import sys

from PySide6.QtWidgets import QApplication
from RinUI import RinUIWindow

app = QApplication(sys.argv)
window = RinUIWindow("main.qml")
sys.exit(app.exec())
```

次のページも参照してください：

- [はじめに](/ja/guide/getting-started)
- [ウィンドウとページの構成](/ja/Windowing/FluentWindow)
- [NavigationView](/ja/Navigation/NavigationView)
- [テーマとウィンドウ背景](/ja/core/theme)

::: info プロジェクトの状態
RinUI は現在も開発中です。API と視覚的な詳細は変更される可能性があります。プロトタイプ、社内ツール、反復コストを受け入れられるプロジェクトでの利用を推奨し、アップグレード前に変更内容を確認してください。
:::

## 謝辞

RinUI の開発に参加するコントリビューターとメンテナーに感謝します。

[![コントリビューター](http://contrib.nn.ci/api?repo=rinlit-233-shiroko/Rin-UI)](https://github.com/RinLit-233-shiroko/Rin-UI/graphs/contributors)
