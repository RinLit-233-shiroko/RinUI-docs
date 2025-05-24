# TableView

## Introduction

<mcurl name="TableView" url="https://doc.qt.io/qt-6/qml-qt-labs-qmlmodels-tablemodel.html"></mcurl>

TableView is a component that allows you to display a collection of data in a tabular format.

## Examples

### Basic TableView with Simple DataTemplate

This is a basic TableView that has the full source code below (coming soon). Other samples on this page display only the additional markup needed customize the TableView like this one.

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