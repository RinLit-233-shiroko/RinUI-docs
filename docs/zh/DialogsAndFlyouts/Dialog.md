# 对话框

`Dialog` 组件提供一个模态窗口，可用于显示重要信息或请求用户输入。它会覆盖当前视图，要求用户在返回主应用程序内容之前与其交互。RinUI 的 `Dialog` 扩展了标准的 `QtQuick.Controls.Dialog`，具有自定义样式、动画和预定义结构（包括标题区域和用于标准按钮的页脚）。

## 基本对话框

基本对话框由标题、内容和标准按钮（例如“确定”、“取消”）组成。内容项作为 `Dialog` 组件的直接子项添加。

<div align="center">
  <img src="/assets/images/DialogsAndFlyouts/Dialog/dialog-basic.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
import QtQuick 2.15
import RinUI

// ...

Button {
    text: qsTr("Show Basic Dialog")
    onClicked: basicDialog.open()
}

Dialog {
    id: basicDialog
    title: qsTr("Basic Dialog Title")
    // modal: true 在组件中通过 Overlay.modal 使用，因此是默认行为
    standardButtons: Dialog.Ok | Dialog.Cancel

    // 内容项在此处作为子项添加
    Text {
        text: qsTr("This is the main content of the dialog.")
    }

    onAccepted: {
        console.log("Dialog accepted!");
        // 执行“确定”操作
    }
    onRejected: {
        console.log("Dialog rejected or closed.");
        // 处理取消操作
    }
}
```

## 自定义内容

您可以将任何 QML 组件作为 `Dialog` 的子项放置，以在对话框的内容区域内创建自定义布局和交互。这些子项会自动成为 `Dialog` 内部 `contentItem` 中 `ColumnLayout` 的父项。

<div align="center">
  <img src="/assets/images/DialogsAndFlyouts/Dialog/dialog-custom.png"> <!-- 占位符：图片路径待确认或创建 -->
</div>

```qml
import RinUI // Consistent import

Dialog {
    id: customDialog
    title: qsTr("Custom Layout")
    standardButtons: Dialog.Apply | Dialog.Close // 使用“应用”和“关闭”按钮的示例

    // 这些项成为内部 ColumnLayout 的子项
    Text { 
        text: qsTr("Please enter your details below:")
        Layout.fillWidth: true // 假设内部使用了 ColumnLayout
    }
    TextField { // 假设 TextField 是另一个 RinUI 组件或标准组件
        id: nameField
        placeholderText: qsTr("Name")
        Layout.fillWidth: true
    }
    CheckBox { // 假设 CheckBox 是另一个 RinUI 组件
        id: agreeCheck
        text: qsTr("I agree to the terms and conditions")
        Layout.fillWidth: true
    }
    
    // 处理“应用”按钮
    onApply: { 
        if (agreeCheck.checked) {
            console.log("Applied with name:", nameField.text);
            customDialog.close(); // 应用后关闭对话框
        } else {
            console.log("Terms not agreed.");
            // 可选：通知用户必须同意条款
        }
    }
    
    // 当点击 Dialog.Close 或调用 close() 时发出 onClose
    onClose: { 
        console.log("Custom dialog was closed.");
    }
}
```

## 主要属性

*   `title`: `string` - 显示在对话框标题区域的文本。
*   `standardButtons`: `Dialog.StandardButtons` (枚举) - 要显示的标准按钮的组合（例如 `Dialog.Ok`、`Dialog.Cancel`、`Dialog.Yes`、`Dialog.No`、`Dialog.Apply`、`Dialog.Close`）。这些按钮由页脚中的内部 `DialogButtonBox` 管理。
*   `modal`: `bool` - (继承) 如果为 `true`，对话框将阻止与应用程序其余部分的交互。RinUI 的 `Dialog` 使用 `Overlay.modal`，这使其有效地成为模态对话框。
*   `contentItem`: `Item` (只读) - 作为对话框内容父项的项（在 RinUI 的 `Dialog` 中，这是一个内部 `ColumnLayout`）。直接添加到 `Dialog` 的子项会自动重新父化到此 `contentItem`。
*   `padding`、`topPadding`、`bottomPadding`: `real` - 控制对话框内的填充。全部默认为 24。
*   `implicitWidth`: `real` - 根据内容和预定义的最小值/最大值（`Utils.dialogMinimumWidth`、`Utils.dialogMaximumWidth`）计算得出。
*   `closePolicy`: `Popup.ClosePolicy` (枚举) - 定义用户交互如何关闭对话框。RinUI 的 `Dialog` 默认为 `Popup.NoAutoClose`，这意味着它通常需要明确的按钮点击（如“确定”、“取消”或自定义关闭按钮）或调用 `close()`、`accept()` 或 `reject()`。

## 方法

*   `open()`: 显示对话框。
*   `close()`: 隐藏对话框。除非调用了 `accept()` 或 `reject()`，否则通常会发出 `rejected()`。
*   `accept()`: 关闭对话框并发出 `accepted()` 信号。
*   `reject()`: 关闭对话框并发出 `rejected()` 信号。

## 信号

*   `accepted()`: 当对话框被接受时发出（例如，通过点击“确定”或“是”按钮，或调用 `accept()`）。
*   `rejected()`: 当对话框被拒绝或关闭时发出（例如，通过点击“取消”或“否”按钮，或调用 `reject()` 或 `close()`）。
*   与 `standardButtons` 对应的特定信号（例如 `applied()`、`helpRequested()`）也可从基础 `QtQuick.Controls.Dialog` 获得。

## 样式和行为

*   **背景和遮罩层**: 对话框具有带样式的背景（亚克力颜色、边框、圆角）和用于模态的烟雾效果遮罩层。
*   **动画**: 包括用于不透明度和缩放的 `enter` 和 `exit` 过渡动画。
*   **页脚**: `footer` 根据 `standardButtons` 属性由内部 `DialogButtonBox` 自动填充。对于完全自定义的按钮排列，您可能需要避免使用 `standardButtons`，并将自定义按钮直接作为内容添加，然后管理其 `onClicked` 处理程序以调用 `accept()`、`reject()` 或 `close()`。
*   **页眉**: `header` 属性默认为空 `Item`，但如果需要更复杂的页眉区域，可以用自定义 QML 替换（尽管 `title` 通常已足够）。

```
