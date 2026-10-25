<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
import iconIndex from '../../../public/assets/data/fluent-system-icons.json'
import IconSearchToolbar from './IconSearchToolbar.vue'
import { matchesIconCategory } from './iconCategories'

const query = ref('')
const { lang } = useData()
const locale = computed(() => lang.value.startsWith('zh') ? 'zh' : lang.value.startsWith('ja') ? 'ja' : 'en')
const labels = computed(() => ({
  zh: {
    aria: 'Fluent 图标搜索', count: '个图标', results: '搜索结果', name: '图标名称', usage: 'QML 用法',
    copyName: '复制图标名称', copyUsage: '复制 QML 用法', empty: '没有找到匹配的图标，请尝试其他关键词。'
  },
  ja: {
    aria: 'Fluent アイコン検索', count: '個のアイコン', results: '検索結果', name: 'アイコン名', usage: 'QML の使用例',
    copyName: 'アイコン名をコピー', copyUsage: 'QML の使用例をコピー', empty: '一致するアイコンがありません。別のキーワードをお試しください。'
  },
  en: {
    aria: 'Fluent icon search', count: 'icons', results: 'Search results', name: 'Icon name', usage: 'QML usage',
    copyName: 'Copy icon name', copyUsage: 'Copy QML usage', empty: 'No matching icons found. Try another keyword.'
  }
} as const)[locale.value])
const styleFilter = ref('all')
const typeFilter = ref('all')
const selectedIcon = ref('ic_fluent_apps_16_regular')
const icons = Object.keys(iconIndex)
const grid = ref<HTMLElement>()
const scroller = ref<HTMLElement>()
const gridWidth = ref(0)
const scrollTop = ref(0)
const ROW_HEIGHT = 78
const ROW_GAP = 8
const ROW_STEP = ROW_HEIGHT + ROW_GAP
const COLUMN_MIN_WIDTH = 72
const VIEWPORT_HEIGHT = 460
const OVERSCAN_ROWS = 3
let resizeObserver: ResizeObserver | undefined
let scrollFrame = 0

const filteredIcons = computed(() => {
  const search = query.value.trim().toLowerCase()
  return icons.filter((name) => {
    const matchesSearch = !search || name.toLowerCase().includes(search)
    const matchesStyle = styleFilter.value === 'all' || name.endsWith(`_${styleFilter.value}`)
    const matchesType = matchesIconCategory(name, typeFilter.value)
    return matchesSearch && matchesStyle && matchesType
  })
})

const columns = computed(() =>
  Math.max(1, Math.floor((gridWidth.value + ROW_GAP) / (COLUMN_MIN_WIDTH + ROW_GAP)))
)
const totalRows = computed(() => Math.ceil(filteredIcons.value.length / columns.value))
const visibleRange = computed(() => {
  const firstRow = Math.max(0, Math.floor(scrollTop.value / ROW_STEP) - OVERSCAN_ROWS)
  const rowCount = Math.ceil(VIEWPORT_HEIGHT / ROW_STEP) + OVERSCAN_ROWS * 2
  const lastRow = Math.min(totalRows.value, firstRow + rowCount)
  return {
    start: firstRow,
    end: lastRow,
    top: firstRow * ROW_STEP,
    bottom: Math.max(0, (totalRows.value - lastRow) * ROW_STEP)
  }
})
const visibleIcons = computed(() => {
  const start = visibleRange.value.start * columns.value
  const end = visibleRange.value.end * columns.value
  return filteredIcons.value.slice(start, end)
})

const glyph = (name: string) => {
  const codePoint = iconIndex[name as keyof typeof iconIndex]
  return codePoint === undefined ? '' : String.fromCodePoint(codePoint)
}
const code = computed(() => `name: "${selectedIcon.value}"`)

function resetFilters() {
  query.value = ''
  styleFilter.value = 'all'
  typeFilter.value = 'all'
}

watch(filteredIcons, () => {
  if (filteredIcons.value.length && !filteredIcons.value.includes(selectedIcon.value)) {
    selectedIcon.value = filteredIcons.value[0]
  }
})

watch(
  [query, styleFilter, typeFilter],
  () => {
    scrollTop.value = 0
    if (scroller.value) scroller.value.scrollTop = 0
  },
  { flush: 'post' }
)

function updateGridWidth() {
  if (grid.value) gridWidth.value = grid.value.clientWidth
}

function handleScroll(event: Event) {
  const nextScrollTop = (event.target as HTMLElement).scrollTop
  cancelAnimationFrame(scrollFrame)
  scrollFrame = requestAnimationFrame(() => {
    scrollTop.value = nextScrollTop
  })
}

onMounted(() => {
  updateGridWidth()
  if (grid.value) {
    resizeObserver = new ResizeObserver(updateGridWidth)
    resizeObserver.observe(grid.value)
  }
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  cancelAnimationFrame(scrollFrame)
})

async function copy(text: string) {
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    const input = document.createElement('textarea')
    input.value = text
    input.style.position = 'fixed'
    input.style.opacity = '0'
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    input.remove()
  }
}
</script>

<template>
  <section :aria-label="labels.aria">
    <div class="icon-search-heading">
      <strong>Fluent System Icons</strong>
      <span>{{ filteredIcons.length.toLocaleString(locale) }} / {{ icons.length.toLocaleString(locale) }} {{ labels.count }}</span>
    </div>
    <IconSearchToolbar
      v-model:query="query"
      v-model:style-filter="styleFilter"
      v-model:type-filter="typeFilter"
      @reset="resetFilters"
    />

    <div v-if="filteredIcons.length" class="icon-search-results">
      <div ref="scroller" class="icon-search-scroller" @scroll="handleScroll">
        <div
          ref="grid"
          class="icon-search-grid"
          role="listbox"
          :aria-label="labels.results"
          :style="{ paddingTop: `${visibleRange.top}px`, paddingBottom: `${visibleRange.bottom}px` }"
        >
          <button
            v-for="name in visibleIcons"
            :key="name"
            class="icon-search-tile"
            :class="{ 'icon-search-tile-selected': selectedIcon === name }"
            :aria-selected="selectedIcon === name"
            role="option"
            @click="selectedIcon = name"
          >
            <span class="icon-search-glyph" aria-hidden="true">{{ glyph(name) }}</span>
            <span>{{ name.replace('ic_fluent_', '') }}</span>
          </button>
        </div>
      </div>

      <aside>
        <p class="icon-search-preview" aria-hidden="true">{{ glyph(selectedIcon) }}</p>
        <strong>{{ selectedIcon.replace('ic_fluent_', '') }}</strong>
        <p>{{ labels.name }}</p>
        <div class="icon-search-copy-row">
          <code>{{ selectedIcon }}</code>
          <button class="icon-search-copy" type="button" :aria-label="labels.copyName" @click="copy(selectedIcon)">
            <span class="icon-search-copy-glyph" aria-hidden="true">{{ glyph('ic_fluent_copy_20_regular') }}</span>
          </button>
        </div>
        <p>{{ labels.usage }}</p>
        <div class="icon-search-copy-row">
          <code>{{ code }}</code>
          <button class="icon-search-copy" type="button" :aria-label="labels.copyUsage" @click="copy(code)">
            <span class="icon-search-copy-glyph" aria-hidden="true">{{ glyph('ic_fluent_copy_20_regular') }}</span>
          </button>
        </div>
      </aside>
    </div>
    <p v-else>{{ labels.empty }}</p>
  </section>
</template>

<style>
.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; }
.icon-search-heading { display: flex; align-items: baseline; gap: 10px; }
.icon-search-heading span { color: var(--vp-c-text-2); font-size: 13px; }
.icon-search-results { display: grid; grid-template-columns: minmax(0, 1fr) minmax(200px, 240px); gap: 20px; margin-top: 16px; }
.icon-search-scroller { max-height: 460px; overflow: auto; }
.icon-search-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(72px, 1fr)); align-content: start; gap: 8px; }
.icon-search-tile { display: flex; min-width: 0; min-height: 78px; flex-direction: column; align-items: center; justify-content: center; gap: 8px; padding: 8px; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg); color: var(--vp-c-text-1); cursor: pointer; }
.icon-search-tile:hover, .icon-search-tile-selected { border-color: var(--vp-c-brand-1); }
.icon-search-tile span:last-child { max-width: 100%; overflow: hidden; color: var(--vp-c-text-2); font-size: 11px; text-overflow: ellipsis; white-space: nowrap; }
.icon-search-glyph, .icon-search-preview { font-family: 'Fluent System Icons', sans-serif; font-weight: normal; font-style: normal; }
.icon-search-glyph { font-size: 28px; line-height: 1; }
.icon-search-preview { font-size: 56px; line-height: 1; }
.icon-search-copy-row { display: flex; align-items: center; gap: 8px; margin: 8px 0 16px; }
.icon-search-copy-row code { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.icon-search-copy { display: inline-flex; flex: none; align-items: center; justify-content: center; width: 34px; height: 34px; padding: 0; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg-soft); color: var(--vp-c-text-1); cursor: pointer; transition: border-color .25s, background-color .25s; }
.icon-search-copy:hover { border-color: var(--vp-c-brand-1); background: var(--vp-c-bg-alt); }
.icon-search-copy-glyph { font-family: 'Fluent System Icons', sans-serif; font-size: 18px; line-height: 1; }
@media (max-width: 760px) { .icon-search-results { grid-template-columns: 1fr; } }
</style>
