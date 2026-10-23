# Avatar（头像）

`Avatar` 用圆形容器展示用户图片、姓名缩写或默认图标。没有图片时，可通过 `text` 生成人名首字母；也可以设置 Fluent 图标作为占位内容。

## 默认头像

不设置图片、文本或图标时，控件显示默认人物图标。

<div align="center">
  <img src="/assets/images/docs/Avatar/默认头像.png" alt="默认头像示例">
</div>

```qml
Avatar {
    size: 64
}
```

## 图片头像

设置 `source` 加载图片。头像会按正方形区域裁切，并使用圆形遮罩显示。

<div align="center">
  <img src="/assets/images/docs/Avatar/图片头像.png" alt="图片头像示例">
</div>

```qml
Avatar {
    size: 64
    source: "qrc:/assets/avatar.png"
}
```

## 姓名缩写

设置 `text` 后，组件会提取第一个和最后一个单词的首字母，适用于姓名或用户标识。

<div align="center">
  <img src="/assets/images/docs/Avatar/姓名缩写.png" alt="姓名缩写示例">
</div>

```qml
Avatar {
    size: 64
    text: "Alex Morgan"
}
```

## 自定义占位图标

可通过 `icon` 别名设置 Fluent 图标名称。只有在未设置 `source` 和 `text` 时才会显示图标。

<div align="center">
  <img src="/assets/images/docs/Avatar/自定义占位图标.png" alt="自定义占位图标示例">
</div>

```qml
Avatar {
    size: 64
    icon: "ic_fluent_person_20_regular"
}
```

## 主要属性

- `size`：头像的默认宽高，默认为 `96`。
- `source`：头像图片的 URL；设置后图片优先显示。
- `text`：用于生成首字母头像的文本。
- `icon`：内部图标的别名，设置 Fluent 图标名称。

`Avatar` 的 `implicitWidth` 和 `implicitHeight` 均由 `size` 决定；显式设置 `width` 或 `height` 时，头像区域会跟随实际尺寸布局。
