# AcrylicBrush

`AcrylicBrush` is RinUI's in-app translucent material. It blurs a supplied `sourceItem` and blends a tint over it, making it useful for panels and overlays. This is an in-content effect, not the Windows system-level Acrylic window backdrop.

## Basic Usage

Place the brush in a surface background and set `sourceItem` to the item behind that surface.

<div align="center">
  <img src="/assets/images/examples/AcrylicBrush-light.png" alt="AcrylicBrush rendered in the RinUI Gallery">
</div>

```qml
Item {
    Rectangle {
        id: scene
        anchors.fill: parent
        color: "#247BA0"
    }

    Rectangle {
        anchors.centerIn: parent
        width: 320
        height: 180
        color: "transparent"

        AcrylicBrush {
            anchors.fill: parent
            sourceItem: scene
            tintColor: "#F3F3F3"
            tintOpacity: 0.72
        }
    }
}
```

## Blur and Tint

Use `blur` to adjust blur strength and `tintColor` with `tintOpacity` to tune the overlay.

```qml
AcrylicBrush {
    sourceItem: background
    blur: 72
    tintColor: "#86Cce8"
    tintOpacity: 0.85
}
```

## Luminosity

`tintLuminosityOpacity` controls the luminosity blend:

```qml
AcrylicBrush {
    sourceItem: background
    tintColor: "#86Cce8"
    tintOpacity: 0.85
    tintLuminosityOpacity: 0.85
}
```

## Fallback and Enable State

Set `fallbackColor` for cases where the effect cannot be rendered, and use `enabled` to toggle the effect at runtime.

```qml
AcrylicBrush {
    sourceItem: background
    fallbackColor: "darkgreen"
    enabled: true
}
```

## Properties

| Property | Description |
| --- | --- |
| `sourceItem` | Background item sampled by the brush. |
| `blur` | Background blur strength. |
| `tintColor` | Acrylic tint color. |
| `tintOpacity` | Tint opacity, usually from `0` to `1`. |
| `tintLuminosityOpacity` | Luminosity blend opacity. |
| `fallbackColor` | Solid fallback color when the effect is unavailable. |
| `enabled` | Whether the material effect is enabled. |

## Related

- [Theme](/core/theme): RinUI theme colors and appearance.
- [FluentWindow](/Windowing/FluentWindow): window-level backdrops and window behavior.
