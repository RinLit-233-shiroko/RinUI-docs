import { defineConfig } from 'sarasa-gothic-webfont/config'

export default defineConfig({
  outDir: 'docs/public/assets/fonts/sarasa',
  families: {
    'ui-sc': {
      weights: [400, 600]
    }
  }
})
