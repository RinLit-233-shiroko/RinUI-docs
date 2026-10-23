# TextField

TextField is a single-line text input control, similar to the standard QML TextField, but with added custom styling and functionality. It supports text input, selection, and editing, and provides custom styling options.

<VPImage
  :image="{
    light: '/assets/images/examples/TextField-light.png',
    dark: '/assets/images/examples/TextField-dark.png',
    alt: 'TextField examples in light and dark themes'
  }"
  width="1000"
/>

## Basic Usage

```qml
TextField {
    id: control
    width: 240
    placeholderText: qsTr("Enter text...")
}
```

## Text Field with Clear Button

```qml
TextField {
    id: control
    width: 240
    placeholderText: qsTr("Type to search...")
    clearEnabled: true
}
```

## Custom Styling

```qml
TextField {
    id: control
    width: 240
    placeholderText: qsTr("Enter text...")
    primaryColor: "#3A86FF"
}
```

## Frameless Mode

```qml
TextField {
    id: control
    width: 240
    placeholderText: qsTr("Enter text...")
    frameless: true
}
```

## Read-Only Mode

```qml
TextField {
    id: control
    width: 240
    text: qsTr("This is read-only text")
    editable: false
}
```

## Important Properties

- `text`: Text displayed in the control
- `placeholderText`: Placeholder text shown when control is empty
- `editable`: Whether to allow user text editing
- `clearEnabled`: Whether to show clear button
- `frameless`: Whether to show border
- `primaryColor`: Custom theme color
- `selectByMouse`: Whether to allow text selection via mouse