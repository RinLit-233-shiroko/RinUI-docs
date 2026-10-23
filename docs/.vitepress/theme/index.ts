import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { VPImage } from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('VPImage', VPImage)
  }
} satisfies Theme
