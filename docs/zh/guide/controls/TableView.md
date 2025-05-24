# 表格视图（TableView）

## 介绍

<mcurl name="TableView" url="https://doc.qt.io/qt-6/qml-qt-labs-qmlmodels-tablemodel.html"></mcurl>

表格视图是一个组件，允许您以表格格式显示数据集合。

## 示例

### 带有简单数据模板的基本表格视图

这是一个基本的表格视图，其完整源代码如下（即将推出）。本页上的其他示例仅显示自定义此类表格视图所需的额外标记。

::: code-group

```qml
TableModel {
    id: studentsInfo
    TableModelColumn { display: "name" }
    TableModelColumn { display: "school" }
    TableModelColumn { display: "age" }

    rows: [
        { name: "Aikiyo Fuuka", school: "Gehenna",    age: 16 },
        { name: "Hayase Yuuka", school: "Millennium", age: 16 },
        { name: "Hanaoka Yuzu", school: "Millennium", age: 16 },
        { name: "Kuromi Serika", school: "Abydos",    age: 15 },
        { name: "Kurosaki Koyuki", school: "Millennium", age: 15 },
        { name: "Kuda Izuna", school: "Hyakkiyako",   age: 15 },
        { name: "Okusora Ayane", school: "Trinity",   age: 15 },
        { name: "Saiba Midori", school: "Millennium", age: 15 },
        { name: "Saiba Momoi", school: "Millennium",  age: 15 },
        { name: "Shiromi Iori", school: "Gehenna",    age: 16 },
        { name: "Shishidou Nonomi", school: "Abydos", age: 16 },
        { name: "Sunaookami Shiroko", school: "Abydos", age: 16 },
        { name: "Tendou Aris", school: "Millennium",  age: "??" },
        { name: "Ushio Noa", school: "Millennium",    age: 16 },
        { name: "Yutori Natsu", school: "Trinity",    age: 15 }
    ]
}

TableView {
    id: tableView
    width: parent.width
    height: 400
    model: studentsInfo
}
```

:::