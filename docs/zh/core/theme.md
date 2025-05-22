# 主题系统（`Theme`）

## 概述

RinUI 提供了一个轻量的主题管理器。

仅需`import RinUI`，即可立即获得全局主题支持。主题系统默认以单例`pragma Singleton`的形式存在，适用于整个应用的风格切换与一致性维护。

您可以像这样使用主题`Theme`系统：
```qml
import RinUI

Component {
    Component.onCompleted: {
        Theme.function()
    }
}
```

## 主题模式

### `setTheme(mode: Theme.mode)`
`setTheme`函数用于切换 RinUI 全部组件的深浅色主题。该函数接受以下值：

- `Theme.mode.Light`：切换为浅色主题
- `Theme.mode.Dark`：切换为深色主题
- `Theme.mode.Auto`：自动切换主题，根据当前系统的主题模式决定切换为浅色或深色主题

### `toggleTheme()`
`toggleTheme`函数用于切换当前主题的模式。如果当前模式为浅色，则切换为深色；反之亦然。

### `getTheme() -> str`
`getTheme`函数用于获取当前主题的模式。函数会返回下列值：

- `"Light"`：当前主题为浅色
- `"Dark"`：当前主题为深色
- `"Auto"`：当前主题为自动模式

### `setThemeColor(color: str)`
`setThemeColor`函数用于设置 RinUI 组件的主题色。该函数接受一个十六进制的颜色值，例如`#FF0000`代表红色。

### `getThemeColor() -> str`
`getThemeColor`函数用于获取当前组件的主题色。函数会返回十六进制的颜色值。

## 背景效果

> [!NOTE]
> 背景效果的设置仅在 Windows 平台上有效，且部分效果需要 Windows 11 及以上版本。
> 
> | 效果       | 支持的系统版本       |
> |----------|---------------|
> | Mica     | > Windows 11  |
> | Acrylic  | >= Windows 10 |
> | Tabbed   | > Windows 11  |

### `setBackdropEffect(effect: Theme.effect)`
`setBackdropEffect`函数用于设置 RinUI 组件的背景效果。该函数接受以下值：

- `Theme.effect.Mica`：云母背景效果
- `Theme.effect.Acrylic`：亚克力背景效果
- `Theme.effect.Tabbed`：选项卡背景 (Mica Alt) 效果
- `Theme.effect.None`：无背景效果

### `getBackdropEffect() -> str`
`getBackdropEffect`函数用于获取当前组件的背景效果。函数会返回下列值：

- `"mica"`：云母背景效果
- `"acrylic"`：亚克力背景效果
- `"tabbed"`：选项卡背景 (Mica Alt) 效果
- `"none"`：无背景效果

