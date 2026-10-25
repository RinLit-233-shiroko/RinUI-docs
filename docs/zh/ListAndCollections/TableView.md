# TableView（表格视图）

TableView 是一个用于以行和列显示数据的控件。它扩展了标准 QML TableView，并添加了自定义样式和功能。

## 基本表格视图


<div align="center">
  <img src="/assets/images/docs/TableView/example-2.png" alt="基本表格视图 示例">
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

## 自定义列宽


<div align="center">
  <img src="/assets/images/docs/TableView/example-3.png" alt="自定义列宽 示例">
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

## 按列排序


<div align="center">
  <img src="/assets/images/docs/TableView/example.png" alt="按列排序 示例">
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

排序需要由应用代码维护表格模型并更新其行顺序；RinUI 的 `TableView` 不提供 `TableViewColumn` 或内置 `sort()` API。

## 重要属性

- `model`: 表格的数据模型
- `clip`: 是否裁剪超出视图边界的内容
- `ScrollBar.vertical` 和 `ScrollBar.horizontal`: 垂直和水平滚动条

## 重要方法

- `columnWidthProvider`、`rowHeightProvider`: 返回对应列宽与行高的函数

## 重要信号

- 单元格交互由 Qt Quick `TableView` 的选择与编辑 API 提供；该封装没有列标题点击信号。

注意：此控件扩展了标准 QML TableView，因此它继承了来自该控件的所有属性、方法和信号。
