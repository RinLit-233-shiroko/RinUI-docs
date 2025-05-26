# 時刻ピッカー

`TimePicker` を使用すると、ユーザーは時刻（時と分、オプションで AM/PM 指定子付き）を選択できます。現在選択されている時刻（またはプレースホルダー）を表示するボタンとして表示されます。クリックすると、カスタムピッカービュー（内部 `PickerView` コンポーネント）が開き、ユーザーは時刻を変更できます。

## 基本的な時刻ピッカー（12時間形式）

デフォルトでは、`TimePicker` は AM/PM セレクター付きの12時間形式の時計を使用します。表示される時、分、AM/PM の値は、コンポーネントの現在の選択に基づきます。

<div align="center">
  <img src="/assets/images/DateAndTime/TimePicker/timepicker-12hr.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

TimePicker {
    id: myTimePicker
    width: 250 // デフォルトの implicitWidth

    // 時刻の変更に反応する
    // 'time' プロパティは "HH:MM" (24時間形式) で時刻を提供します
    onTimeChanged: { 
        console.log("選択された時刻 (24時間形式):", time); 
        // 個々の部分にもアクセスできます：
        console.log("時:", hour, "分:", minute, "期間:", hourSystem); // hourSystem は AM/PM です
    }

    Component.onCompleted: {
        // setTime は "HH:MM" (24時間形式) を期待します
        myTimePicker.setTime("14:30"); // 午後2時30分に設定
    }
}
```

## 24時間形式の時刻ピッカー

`use24Hour` プロパティを `true` に設定すると、24時間形式の時計が使用されます。これにより、AM/PM セレクターが非表示になります。

<div align="center">
  <img src="/assets/images/DateAndTime/TimePicker/timepicker-24hr.png"> <!-- Placeholder: 画像パスは確認または作成が必要です -->
</div>

```qml
TimePicker {
    width: 180 // AM/PM がないと幅が小さくなる場合があります
    use24Hour: true

    Component.onCompleted: {
        setTime("08:15"); // 午前8時15分に設定
    }
}
```

## プログラムによる時刻の設定

`setTime()` メソッドを使用すると、ピッカーの時刻を設定できます。"HH:MM"（24時間）形式の文字列を受け付けます。

```qml
TimePicker {
    id: reminderTimePicker
    width: 250

    function initializeTime() {
        // 現在のソースでは setTime は成功のブール値を明示的に返しませんが、
        // フォーマットが有効であればプロパティを更新します。
        reminderTimePicker.setTime("17:00"); // 午後5時
        console.log("リマインダー時刻が設定されました:", reminderTimePicker.time);
    }
    Component.onCompleted: initializeTime()
}
```

## 主なプロパティ

*   `time`: `string` (読み取り専用) - 選択された時刻の "HH:MM"（24時間）形式の文字列表現。このプロパティの変更は `onTimeChanged` で追跡できます。
*   `hour`: `string` (`pickerView.value1` のエイリアス) - 選択された時（文字列、例：12時間形式の場合は "1"～"12"、内部ピッカーモデルに基づく24時間形式の場合は "0"～"23"）。
*   `minute`: `string` (`pickerView.value2` のエイリアス) - 選択された分（文字列、例："0"～"59"）。
*   `hourSystem`: `string` (`pickerView.value3` のエイリアス) - 12時間形式の場合、AM/PM 指定子を保持します（例：`amText`/`pmText` で定義された "AM" または "PM"）。`use24Hour` が `true` の場合は `undefined` です。
*   `use24Hour`: `bool` - `true` の場合、24時間形式の時計を使用します。デフォルトは `false` です。
*   `amText`: `string` - 12時間モードの AM 指定子に使用されるテキスト。デフォルトはローカライズされた "AM" です。
*   `pmText`: `string` - 12時間モードの PM 指定子に使用されるテキスト。デフォルトはローカライズされた "PM" です。
*   `hourText`: `string` - 時刻が選択/操作されていない場合の時間部分のプレースホルダーテキスト。デフォルトはローカライズされた "hour" です。
*   `minuteText`: `string` - 時刻が選択/操作されていない場合の分部分のプレースホルダーテキスト。デフォルトはローカライズされた "minute" です。
*   `enabled`: `bool` - コントロールがインタラクティブかどうか。`Control` から継承されます。

## メソッド

*   `setTime(string hhmm)`: ピッカーの現在の時刻を設定します。入力文字列は "HH:MM"（24時間）形式である必要があります（例："08:15" または "14:30"）。"8:15" のような入力は機能しない場合があります。コンポーネントの解析で必要な場合は、1桁の時間に先行ゼロを付けてください。

`TimePicker` 自体は `Button` であるため、ボタンのスタイル設定と動作に関連するプロパティもその外観に適用できます。
```
