# TableView（テーブルビュー）

TableView は、行と列にデータを表示するためのコントロールです。標準の QML TableView を拡張し、カスタムスタイルと機能を追加しています。

## 基本テーブルビュー

<div align="center">
  <img src="/assets/images/docs/TableView/example-2.png" alt="基本テーブルビュー">
</div>

```qml
import Qt.labs.qmlmodels
TableView {
    id: tableView
    width: 600
    height: 180
    
    columnWidthProvider: function(column) { return [200, 100, 200][column] }
    rowHeightProvider: function(row) { return 40 }
    model: TableModel {
        TableModelColumn { display: "name" }
        TableModelColumn { display: "age" }
        TableModelColumn { display: "city" }
        rows: [
            { name: "Alex Morgan", age: 30, city: "Beijing" },
            { name: "Jamie Lee", age: 25, city: "Shanghai" },
            { name: "Taylor Kim", age: 35, city: "Guangzhou" }
        ]
    }
}
```
```

## カスタム列幅

<div align="center">
  <img src="/assets/images/docs/TableView/example-3.png" alt="カスタム列幅">
</div>

```qml
import Qt.labs.qmlmodels
TableView {
    id: tableView
    width: 600
    height: 180
    
    columnWidthProvider: function(column) {
        return [150, 100, 350][column]
    }
    rowHeightProvider: function(row) { return 40 }
    model: TableModel {
        TableModelColumn { display: "name" }
        TableModelColumn { display: "age" }
        TableModelColumn { display: "city" }
        rows: [
            { name: "Alex Morgan", age: 30, city: "Beijing" },
            { name: "Jamie Lee", age: 25, city: "Shanghai" },
            { name: "Taylor Kim", age: 35, city: "Guangzhou" }
        ]
    }
}
```
```

## 列によるソート

<div align="center">
  <img src="/assets/images/docs/TableView/example.png" alt="列によるソート">
</div>

```qml
import Qt.labs.qmlmodels
TableView {
    id: tableView
    width: 600
    height: 180
    
    columnWidthProvider: function(column) { return [200, 100, 300][column] }
    model: TableModel {
        TableModelColumn { display: "name" }
        TableModelColumn { display: "age" }
        TableModelColumn { display: "city" }
        rows: [
            { name: "Alex Morgan", age: 30, city: "Beijing" },
            { name: "Jamie Lee", age: 25, city: "Shanghai" },
            { name: "Taylor Kim", age: 35, city: "Guangzhou" }
        ]
    }
}
```
```

## 重要なプロパティ

- `model`: テーブルのデータモデル
- `clip`: ビュー境界を超えるコンテンツをクリップするかどうか
- `ScrollBar.vertical` と `ScrollBar.horizontal`: 垂直および水平スクロールバー

## 重要なメソッド

- `sort(role, ascending)`: 指定されたロールで昇順または降順でテーブルをソートする

## 重要な信号

- `columnClicked`: 列ヘッダーがクリックされたときに发出される

注意：このコントロールは標準の QML TableView を拡張するため、そのコントロールからすべてのプロパティ、メソッド、信号を継承します。