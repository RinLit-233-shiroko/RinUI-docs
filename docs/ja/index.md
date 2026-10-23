---
layout: home

hero:
  name: "RinUI"
  text: "Qt Quick で Fluent アプリを構築"
  tagline: "Qt Quick 向け Fluent Design UI ライブラリ。ネイティブなウィンドウ統合、充実したコントロール、統一されたテーマを提供します。"
  image:
    src: /assets/images/home/rinui-app.png
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

RinUI は単独のコントロールを集めただけのライブラリではありません。ウィンドウ、ナビゲーション、ページ、テーマ、主要なコントロールを一つの API にまとめ、Qt Quick デスクトップアプリの共通基盤を提供します。

- **ウィンドウとページがひとつの構造になる**：`FluentWindow` には `NavigationView`、ナビゲーションバー、コンテンツ領域が組み込まれています。`navigationItems` でページを宣言し、`FluentPage` でタイトル、本文、フッターを整理できます。
- **ネイティブに近いデスクトップ体験**：Windows では Mica、Acrylic、Tabbed の背景、カスタムタイトルバー、フレームレスウィンドウ、標準ウィンドウ操作に対応します。macOS ではネイティブのトラフィックライトを使用し、その他のプラットフォームでは安全に通常背景へフォールバックします。
- **アプリ全体に届くテーマ**：ライト、ダーク、自動モードが同じ色、角丸、フォント、モーション値を共有します。アクセントカラーを変更すると、コントロール、アイコン、状態色もまとめて更新されます。
- **使い慣れた QML 名と充実した Fluent 状態**：`Button`、`ComboBox`、`ListView`、`Dialog` などの API を保ちながら、ホバー、押下、フォーカス、無効状態を整えています。
- **アイコンと多言語化をすぐ利用できる**：Fluent System Icons を `ic_fluent_*` 名で利用でき、UI 文言を拡張するための翻訳リソースも含まれています。
- **短い Python 起動コード**：`QApplication` を作成し、`RinUIWindow("main.qml")` で画面を読み込むだけです。設定、テーマ管理、プラットフォーム固有のウィンドウ効果はランチャーが処理します。

## 実際の画面

現在の RinUI Gallery の実際の画面です。ドキュメントのライト／ダークテーマを切り替えると、スクリーンショットも連動して切り替わります。

<VPImage
  :image="{
    light: '/assets/images/home/gallery-light.png',
    dark: '/assets/images/home/gallery-dark.png',
    alt: 'RinUI Gallery'
  }"
  width="960"
/>

## RinUI が向いているプロジェクト

RinUI は、デスクトップウィンドウと充実したインタラクションが必要で、QML の開発速度も保ちたいプロジェクトに向いています。

- PySide6 と Qt Quick で構築するデスクトップツールやコンテンツ管理アプリ。
- Fluent の視覚言語を取り入れつつ、ウィンドウ構成やコントロール状態を一から作らずに済ませたい社内アプリケーション。
- ナビゲーション、設定ページ、ダイアログ、テーブル、日付選択、テーマ切り替えを必要とするプロトタイプや継続開発中の製品。

Web コンポーネントライブラリの代替ではなく、Qt Widgets だけで構成する必要があるプロジェクトにも適していません。

## 使い慣れた QML から始める

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
