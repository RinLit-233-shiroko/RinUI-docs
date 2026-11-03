import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { VPImage } from 'vitepress/theme'
import '@fontsource-variable/plus-jakarta-sans'
import IconSearch from './components/IconSearch.vue'
import GalleryCarousel from './components/GalleryCarousel.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('VPImage', VPImage)
    app.component('IconSearch', IconSearch)
    app.component('GalleryCarousel', GalleryCarousel)
  }
} satisfies Theme
