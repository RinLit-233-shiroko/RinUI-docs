# Avatar

`Avatar` displays a user image, initials, or a default icon inside a circular container. When no image is available, set `text` to generate initials, or provide a Fluent icon as a placeholder.

## Default Avatar

When no image, text, or icon is set, the control displays a default person icon.

<div align="center">
  <img src="/assets/images/docs/Avatar/avatar-sample.png" alt="Default Avatar">
</div>

```qml
Avatar {
    size: 64
}
```
```

## Image Avatar

Set `source` to load an image. The image is cropped to a square and displayed with a circular mask.

<div align="center">
  <img src="/assets/images/docs/Avatar/default.png" alt="Image Avatar">
</div>

```qml
Avatar {
    size: 64
    source: "qrc:/assets/avatar.png"
}
```
```

## Initials

Set `text` to extract the initials from the first and last words, suitable for a person's name or user identifier.

<div align="center">
  <img src="/assets/images/docs/Avatar/example-2.png" alt="Initials">
</div>

```qml
Avatar {
    size: 64
    text: "Alex Morgan"
}
```
```

## Custom Placeholder Icon

Set the Fluent icon name through the `icon` alias. The icon is shown only when neither `source` nor `text` is set.

<div align="center">
  <img src="/assets/images/docs/Avatar/example-3.png" alt="Custom Placeholder Icon">
</div>

```qml
Avatar {
    size: 64
    icon: "ic_fluent_person_20_regular"
}
```
```

## Properties

- `size`: Default width and height; defaults to `96`.
- `source`: URL of the avatar image; takes precedence when set.
- `text`: Text used to generate initials.
- `icon`: Alias for the inner icon; set it to a Fluent icon name.

Both `implicitWidth` and `implicitHeight` are determined by `size`. Explicit `width` or `height` values control the actual avatar layout.
