# Iconography（图标学）

图标学是一种视觉设计语言，可以用于快速有效地传达信息。RinUI 提供了一套完整的图标，遵循一致的设计原则，可以轻松集成到您的应用程序中。

<IconSearch />

## 基本图标使用


<div align="center">
  <img src="/assets/images/docs/Iconography/example-2.png" alt="基本图标使用 示例">
</div>

```qml
import RinUI

Icon {
    name: "ic_fluent_apps_16_regular"
    size: 24
}
```

## 不同尺寸的图标


<div align="center">
  <img src="/assets/images/docs/Iconography/example-3.png" alt="不同尺寸的图标 示例">
</div>

```qml
Column {
    spacing: 8
    
    Icon {
        name: "ic_fluent_mail_16_regular"
        size: 16
    }
    
    Icon {
        name: "ic_fluent_mail_20_regular"
        size: 20
    }
    
    Icon {
        name: "ic_fluent_mail_24_regular"
        size: 24
    }
    
    Icon {
        name: "ic_fluent_mail_32_regular"
        size: 32
    }
}
```

## 带颜色的图标


<div align="center">
  <img src="/assets/images/docs/Iconography/example-4.png" alt="带颜色的图标 示例">
</div>

```qml
Row {
    spacing: 12
    
    Icon {
        name: "ic_fluent_checkmark_circle_24_regular"
        color: "#0078D4"
    }
    
    Icon {
        name: "ic_fluent_error_circle_24_regular"
        color: "#D83B01"
    }
    
    Icon {
        name: "ic_fluent_warning_24_regular"
        color: "#FF8C00"
    }
    
    Icon {
        name: "ic_fluent_info_circle_24_regular"
        color: "#0078D4"
    }
}
```

## 按钮中的图标


<div align="center">
  <img src="/assets/images/docs/Iconography/example-5.png" alt="按钮中的图标 示例">
</div>

```qml
Row {
    spacing: 12
    
    Button {
        icon.name: "ic_fluent_save_20_regular"
        text: qsTr("保存")
    }
    
    Button {
        icon.name: "ic_fluent_delete_20_regular"
        text: qsTr("删除")
    }
    
    ToolButton {
        icon.name: "ic_fluent_settings_20_regular"
    }
}
```

## 导航中的图标


<div align="center">
  <img src="/assets/images/docs/Iconography/example.png" alt="导航中的图标 示例">
</div>

```qml
NavigationBar {
    items: [
        {
            title: qsTr("首页"),
            icon: "ic_fluent_home_24_regular"
        },
        {
            title: qsTr("搜索"),
            icon: "ic_fluent_search_24_regular"
        },
        {
            title: qsTr("设置"),
            icon: "ic_fluent_settings_24_regular"
        }
    ]
}
```

## 重要属性

- `name`：图标名称（例如："ic_fluent_apps_16_regular"）
- `size`：图标尺寸（像素）
- `color`：图标颜色
- `visible`：图标是否可见
- `enabled`：图标是否启用

## 常见图标类别

### 系统图标
- `ic_fluent_apps_*`：应用程序图标
- `ic_fluent_settings_*`：设置图标
- `ic_fluent_home_*`：首页图标

### 操作图标
- `ic_fluent_save_*`：保存操作
- `ic_fluent_delete_*`：删除操作
- `ic_fluent_edit_*`：编辑操作

### 状态图标
- `ic_fluent_checkmark_*`：成功指示器
- `ic_fluent_error_*`：错误指示器
- `ic_fluent_warning_*`：警告指示器

### 导航图标
- `ic_fluent_home_*`：首页导航
- `ic_fluent_arrow_*`：方向导航
- `ic_fluent_chevron_*`：展开/折叠指示器
