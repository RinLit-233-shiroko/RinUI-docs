# ScrollableTextArea

ScrollableTextArea is a control that contains a TextArea that can be scrolled. It provides scrolling functionality to a TextArea component and can be customized like a standard TextArea.

<VPImage
  :image="{
    light: '/assets/images/examples/ScrollableTextArea-light.png',
    dark: '/assets/images/examples/ScrollableTextArea-dark.png',
    alt: 'ScrollableTextArea examples in light and dark themes'
  }"
  width="1000"
/>

## Basic ScrollableTextArea

<div align="center">
  <img src="/assets/images/docs/ScrollableTextArea/example-2.png" alt="Basic ScrollableTextArea">
</div>

```qml
ScrollableTextArea {
    id: control
    text: qsTr("This is a scrollable text area with a long text content that can be scrolled vertically.")
    width: 300
    height: 150
}
```

## ScrollableTextArea with Placeholder

<div align="center">
  <img src="/assets/images/docs/ScrollableTextArea/example-3.png" alt="ScrollableTextArea with Placeholder">
</div>

```qml
ScrollableTextArea {
    id: control
    placeholderText: qsTr("Type here...")
    width: 300
    height: 150
}
```
```

## Read-Only ScrollableTextArea

<div align="center">
  <img src="/assets/images/docs/ScrollableTextArea/example.png" alt="Read-Only ScrollableTextArea">
</div>

```qml
ScrollableTextArea {
    id: control
    text: qsTr("This is a read-only scrollable text area that displays content but cannot be edited.")
    readOnly: true
    width: 300
    height: 150
}
```

## Important Properties

- `text`: The text content displayed in the scrollable text area
- `placeholderText`: The placeholder text to display when the text area is empty
- `textFormat`: The format of the text (PlainText or RichText)
- `wrapMode`: The text wrapping mode
- `readOnly`: Whether the text area is read-only
- `selectionColor`: The color of the selected text
- `textArea`: The TextArea component contained within the ScrollView

## Important Signals

- `textChanged()`: Emitted when the text changes