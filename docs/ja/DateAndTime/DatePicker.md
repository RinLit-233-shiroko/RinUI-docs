# 日付ピッカー

`DatePicker` は、ユーザーが日付（年、月、日）を選択するための標準化された方法を提供します。現在選択されている日付（またはプレースホルダー）を表示するボタンとして表示されます。クリックすると、カスタムピッカービュー（内部 `PickerView` コンポーネント）が開き、ユーザーは日付を変更できます。

## 基本的な日付ピッカー

デフォルトでは、`DatePicker` はユーザーが操作していない場合、プレースホルダーまたは現在のシステム日付を表示します。日付が選択されると、その日付がボタンに表示されます。

<div align="center">
  <img src="/assets/images/DateAndTime/DatePicker/datepicker-basic.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

DatePicker {
    id: myDatePicker
    width: 250 // デフォルトの implicitWidth

    // 日付の変更に反応する
    onDateChanged: {
        console.log("選択された日付文字列:", date) // フォーマット: YYYY-M-D
        console.log("年:", year, "月:", month, "(インデックス:", monthIndex + ")", "日:", day)
    }

    // 初期日付の設定例
    Component.onCompleted: {
        // setDate は成功時に true を返します
        if (!setDate(new Date().getFullYear() + "-01-01")) { // 現在の年の1月1日に設定
            console.warn("myDatePicker の初期日付の設定に失敗しました")
        }
    }
}
```

## 年を非表示にする

`yearVisible` プロパティを `false` に設定することで、ピッカーと表示から年列を非表示にできます。

<div align="center">
  <img src="/assets/images/DateAndTime/DatePicker/datepicker-no-year.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
import RinUI // Consistent import

DatePicker {
    width: 180 // 年が非表示の場合、幅を小さくする必要があるかもしれません
    yearVisible: false
}
```

## プログラムによる日付の設定

`setDate()` メソッドを使用すると、ピッカーの日付を設定できます。"YYYY-MM-DD" または "YYYY/MM/DD" 形式の文字列を受け付けます。

```qml
import RinUI // Consistent import

DatePicker {
    id: eventDatePicker
    width: 250

    function initializeDate() {
        var success = eventDatePicker.setDate("2025-12-24");
        if (success) {
            console.log("イベント日付が設定されました:", eventDatePicker.date);
        } else {
            console.log("イベント日付の設定に失敗しました。");
        }
    }

    Component.onCompleted: initializeDate()
}
```

## ローカリゼーション

`DatePicker` は、月の名前および年、月、日フィールドの表示順序について、アプリケーションの `locale`（継承されたプロパティ）に従います。

## 主なプロパティ

*   `date`: `string` (読み取り専用) - 選択された日付の文字列表現（例："2023-10-26"）。このプロパティの変更は `onDateChanged` で追跡できます。
*   `year`: `int` (エイリアス) - 選択された年。直接操作が必要な場合は `pickerView.value3` を設定することでプログラムで設定できますが、`setDate()` の使用が推奨されます。
*   `month`: `string` (エイリアス, 直接割り当ては読み取り専用) - 選択された月の名前（ローカライズ済み）。
*   `monthIndex`: `int` (エイリアス, 直接割り当ては読み取り専用) - 選択された月のインデックス（0が1月、11が12月）。
*   `day`: `int` (エイリアス) - 選択された日。`pickerView.value2` を設定することでプログラムで設定できます。
*   `yearVisible`: `bool` - `false` の場合、年セレクターは非表示になります。デフォルトは `true` です。
*   `startYear`: `int` - ピッカーで利用可能な最小年。デフォルトは `1925` です。
*   `endYear`: `int` - ピッカーで利用可能な最大年。デフォルトは `2125` です。
*   `enabled`: `bool` - コントロールがインタラクティブかどうか。`Control` から継承されます。

## メソッド

*   `setDate(string yyyymmdd)`: ピッカーの現在の日付を設定します。入力文字列は "YYYY-MM-DD" または "YYYY/MM/DD" 形式である必要があります（例："2023-10-26"）。成功すると `true` を返し、解析失敗または無効な日付の場合は `false` または `-1` を返します。

`DatePicker` 自体は `Button` であるため、ボタンのスタイル設定と動作に関連するプロパティ（`flat`、`highlighted`、`primaryColor` など）もその外観に適用できます。
```
