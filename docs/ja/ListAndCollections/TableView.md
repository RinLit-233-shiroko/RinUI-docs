# TableView（テーブルビュー）

TableView は、行と列にデータを表示するためのコントロールです。標準の QML TableView を拡張し、カスタムスタイルと機能を追加しています。

<VPImage
  :image="{
    light: '/assets/images/examples/TableView-light.png',
    dark: '/assets/images/examples/TableView-dark.png',
    alt: 'TableView コンポーネントのライト／ダーク例'
  }"
  width="1000"
/>

## 基本テーブルビュー

```qml
TableView {
    id: tableView
    width: 600
    height: 300
    
    TableViewColumn {
        role: "name"
        title: qsTr("名前")
        width: tableView.width * 0.33
    }
    TableViewColumn {
        role: "age"
        title: qsTr("年齢")
        width: tableView.width * 0.33
    }
    TableViewColumn {
        role: "city"
        title: qsTr("都市")
        width: tableView.width * 0.33
    }
    
    model: ListModel {
        ListElement {
            name: "山田太郎"
            age: "30"
            city: "東京"
        }
        ListElement {
            name: "佐藤花子"
            age: "25"
            city: "大阪"
        }
        ListElement {
            name: "鈴木一郎"
            age: "35"
            city: "名古屋"
        }
    }
}
```

## カスタム列幅

```qml
TableView {
    id: tableView
    width: 600
    height: 300
    
    TableViewColumn {
        role: "name"
        title: qsTr("名前")
        width: 150
    }
    TableViewColumn {
        role: "age"
        title: qsTr("年齢")
        width: 100
    }
    TableViewColumn {
        role: "city"
        title: qsTr("都市")
        width: 350
    }
    
    model: ListModel {
        ListElement {
            name: "山田太郎"
            age: "30"
            city: "東京"
        }
        ListElement {
            name: "佐藤花子"
            age: "25"
            city: "大阪"
        }
        ListElement {
            name: "鈴木一郎"
            age: "35"
            city: "名古屋"
        }
    }
}
```

## 列によるソート

```qml
TableView {
    id: tableView
    width: 600
    height: 300
    
    property bool sortAscending: true
    property string sortRole: "name"
    
    TableViewColumn {
        role: "name"
        title: qsTr("名前")
        width: 200
        onClicked: {
            tableView.sortAscending = !tableView.sortAscending
            tableView.sortRole = "name"
            tableView.model.sort(tableView.sortRole, tableView.sortAscending)
        }
    }
    TableViewColumn {
        role: "age"
        title: qsTr("年齢")
        width: 100
        onClicked: {
            tableView.sortAscending = !tableView.sortAscending
            tableView.sortRole = "age"
            tableView.model.sort(tableView.sortRole, tableView.sortAscending)
        }
    }
    TableViewColumn {
        role: "city"
        title: qsTr("都市")
        width: 300
    }
    
    model: PersonModel {}
}
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