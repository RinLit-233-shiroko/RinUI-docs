# RadioButton

`RadioButton` controls allow users to select one option from a set of mutually exclusive choices. When one `RadioButton` in a group is selected, any previously selected `RadioButton` in the same group is automatically deselected.

## Basic RadioButtons

RadioButtons are typically used in groups to present a set of related options where only one can be active at a time. To enforce mutual exclusivity, they should be assigned to a `ButtonGroup`.

<div align="center">
  <img src="/assets/images/BasicInput/RadioButton/radiobutton-basic.png"> <!-- Placeholder: image path to be confirmed or created -->
</div>

```qml
import QtQuick 2.15
import QtQuick.Controls 2.15 // For ButtonGroup
import RinUI

// ...

Column {
    spacing: 10

    // ButtonGroup is essential for mutual exclusivity
    ButtonGroup { id: myExclusiveGroup }

    RadioButton {
        text: qsTr("Option 1")
        ButtonGroup.group: myExclusiveGroup
        checked: true // Set an initial selection for the group
    }

    RadioButton {
        text: qsTr("Option 2")
        ButtonGroup.group: myExclusiveGroup
    }

    RadioButton {
        text: qsTr("Option 3")
        ButtonGroup.group: myExclusiveGroup
    }
}

```
> Note: The example in `Rin-UI/examples/pages/controls/RadioButton.qml` shows multiple RadioButtons. For them to be mutually exclusive, assign them to the same `ButtonGroup`.

## Key Properties

*   `text`: `string` - The label displayed next to the RadioButton.
*   `checked`: `bool` - Indicates whether the RadioButton is currently selected. In a `ButtonGroup`, only one RadioButton can be `checked` at a time.
*   `primaryColor`: `color` - The main color used for the selected state indicator.
*   `backgroundColor`: `color` - The background color of the RadioButton's circular indicator when unchecked.
*   `spacing`: `real` - The spacing between the indicator and the text.
*   `enabled`: `bool` - Whether the control is interactive. Defaults to `true`.

## Grouping RadioButtons

To ensure that only one `RadioButton` in a set can be selected at a time (which is their primary purpose), you must assign them to a `ButtonGroup`. 
1.  Instantiate a `ButtonGroup` item.
2.  For each `RadioButton` in the logical group, set its `ButtonGroup.group` attached property to the instance of your `ButtonGroup`.

This ensures that when one `RadioButton` in that group is checked, any other `RadioButton` in the same group that was previously checked becomes unchecked.

