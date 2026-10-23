# TableView

TableView is a control for displaying data in rows and columns. It extends the standard QML TableView with custom styling and functionality.

<VPImage
  :image="{
    light: '/assets/images/examples/TableView-light.png',
    dark: '/assets/images/examples/TableView-dark.png',
    alt: 'TableView examples in light and dark themes'
  }"
  width="1000"
/>

## Basic TableView

```qml
TableView {
    id: tableView
    width: 600
    height: 300
    
    TableViewColumn {
        role: "name"
        title: qsTr("Name")
        width: tableView.width * 0.33
    }
    TableViewColumn {
        role: "age"
        title: qsTr("Age")
        width: tableView.width * 0.33
    }
    TableViewColumn {
        role: "city"
        title: qsTr("City")
        width: tableView.width * 0.33
    }
    
    model: ListModel {
        ListElement {
            name: "John Doe"
            age: "30"
            city: "New York"
        }
        ListElement {
            name: "Jane Smith"
            age: "25"
            city: "Los Angeles"
        }
        ListElement {
            name: "Robert Johnson"
            age: "35"
            city: "Chicago"
        }
    }
}
```

## Custom Column Widths

```qml
TableView {
    id: tableView
    width: 600
    height: 300
    
    TableViewColumn {
        role: "name"
        title: qsTr("Name")
        width: 150
    }
    TableViewColumn {
        role: "age"
        title: qsTr("Age")
        width: 100
    }
    TableViewColumn {
        role: "city"
        title: qsTr("City")
        width: 350
    }
    
    model: ListModel {
        ListElement {
            name: "John Doe"
            age: "30"
            city: "New York"
        }
        ListElement {
            name: "Jane Smith"
            age: "25"
            city: "Los Angeles"
        }
        ListElement {
            name: "Robert Johnson"
            age: "35"
            city: "Chicago"
        }
    }
}
```

## Sorting by Column

```qml
TableView {
    id: tableView
    width: 600
    height: 300
    
    property bool sortAscending: true
    property string sortRole: "name"
    
    TableViewColumn {
        role: "name"
        title: qsTr("Name")
        width: 200
        onClicked: {
            tableView.sortAscending = !tableView.sortAscending
            tableView.sortRole = "name"
            tableView.model.sort(tableView.sortRole, tableView.sortAscending)
        }
    }
    TableViewColumn {
        role: "age"
        title: qsTr("Age")
        width: 100
        onClicked: {
            tableView.sortAscending = !tableView.sortAscending
            tableView.sortRole = "age"
            tableView.model.sort(tableView.sortRole, tableView.sortAscending)
        }
    }
    TableViewColumn {
        role: "city"
        title: qsTr("City")
        width: 300
    }
    
    model: PersonModel {}
}
```

## Important Properties

- `model`: The data model for the table
- `clip`: Whether to clip content that extends beyond the view boundaries
- `ScrollBar.vertical` and `ScrollBar.horizontal`: The vertical and horizontal scroll bars

## Important Methods

- `sort(role, ascending)`: Sorts the table by the specified role in ascending or descending order

## Important Signals

- `columnClicked`: Emitted when a column header is clicked

Note: This control extends the standard QML TableView, so it inherits all the properties, methods, and signals from that control.