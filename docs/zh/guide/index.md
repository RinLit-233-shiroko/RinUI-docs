# 何为 RinUI？

RinUI 是一个面向 **Qt Quick（QML）** 应用开发的界面组件库。它以 Fluent Design 为设计灵感，提供一组可在 QML 中直接使用的控件、主题能力与辅助工具，帮助开发者更快地构建风格统一、交互清晰的桌面应用。

> [!TIP]
> 若您希望体验 RinUI，可在[快速开始](getting-started)章节了解如何安装并运行示例。

```qml
import QtQuick
import QtQuick.Controls
import RinUI
```

导入 `RinUI` 模块后，便可在现有 Qt Quick 项目中组合使用 RinUI 控件；Python 项目则可通过 PySide6 启动应用并加载 QML。RinUI 不要求将界面改写为另一种语言或框架，业务页面仍由熟悉的 QML 构建。

## RinUI 提供什么

- **常用界面组件**：涵盖按钮、输入控件、导航、弹出层、布局和信息展示等场景。可从侧边栏的组件文档查看各控件的属性、信号与示例。
- **Fluent 风格**：以清晰的层级、轻量的表面和一致的交互细节为设计方向，让应用界面更协调。
- **主题能力**：支持明暗主题相关设置，便于应用按需统一界面外观。具体配置方式请参阅[主题系统](/zh/core/theme)。
- **QML 工作流**：通过模块导入使用组件，并继续利用 Qt Quick 的布局、绑定和组件组合能力。

## 适合哪些项目

如果你使用 Qt Quick / QML 构建桌面应用，并希望减少重复编写常见界面控件的工作，或希望为项目采用统一的 Fluent 风格，RinUI 可以作为界面开发的基础。RinUI 侧重 UI 组件与相关工具；应用的业务逻辑、数据模型和项目结构仍由应用本身负责。

## 项目状态

RinUI 仍在持续开发中，组件覆盖、API 与主题能力可能随版本迭代而调整。使用时请以当前安装版本及对应组件文档为准；准备发布的项目也建议固定依赖版本，并在升级后检查相关控件。

## 从这里开始

- 初次使用：前往[快速开始](getting-started)了解安装方式并运行示例。
- 组织 QML 页面与资源：阅读[项目结构与资源](/zh/guide/project-structure)。
- 查找控件：从侧边栏选择相应组件，查看用法和可运行示例。
- 了解全局配置：参阅[主题系统](/zh/core/theme)和[辅助工具](/zh/core/utils)。

## 致谢

RinUI 的实现与设计参考了以下优秀项目和资源：

- [Qt / Qt Quick](https://www.qt.io/)
- [Fluent Design System](https://fluent2.microsoft.design/)
- [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons/)

感谢所有为 [RinUI](https://github.com/RinLit-233-shiroko/Rin-UI) 做出贡献的开发者。
