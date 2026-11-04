<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { getIconCategoryLabel, iconCategories } from './iconCategories'

type IconStyle = 'all' | 'regular' | 'filled'

const props = defineProps<{
  query: string
  styleFilter: IconStyle
  typeFilter: string
}>()
const { lang } = useData()
const locale = computed(() => lang.value.startsWith('zh') ? 'zh' : lang.value.startsWith('ja') ? 'ja' : 'en')

const emit = defineEmits<{
  'update:query': [value: string]
  'update:styleFilter': [value: IconStyle]
  'update:typeFilter': [value: string]
  reset: []
}>()

const styleOptions = computed<Array<{ value: IconStyle; label: string }>>(() => [
  { value: 'all', label: locale.value === 'zh' ? '全部' : locale.value === 'ja' ? 'すべて' : 'All' },
  { value: 'regular', label: 'Regular' },
  { value: 'filled', label: 'Filled' }
])

const hasFilters = computed(
  () => props.query !== '' || props.styleFilter !== 'all' || props.typeFilter !== 'all'
)
</script>

<template>
  <div class="icon-search-toolbar" role="search" :aria-label="locale === 'zh' ? '搜索和过滤图标' : locale === 'ja' ? 'アイコンの検索と絞り込み' : 'Search and filter icons'">
    <label class="icon-toolbar-search">
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <path
          d="m13.5 12.4 3.55 3.55a.75.75 0 1 1-1.06 1.06l-3.55-3.55a6.5 6.5 0 1 1 1.06-1.06ZM9 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
        />
      </svg>
      <span class="sr-only">{{ locale === 'zh' ? '搜索图标' : locale === 'ja' ? 'アイコンを検索' : 'Search icons' }}</span>
      <input
        :value="query"
        type="search"
        :placeholder="locale === 'zh' ? '搜索图标名称，例如 home、search...' : locale === 'ja' ? 'アイコン名で検索（例: home、search）...' : 'Search icon names, e.g. home, search...'"
        @input="emit('update:query', ($event.target as HTMLInputElement).value)"
      />
      <button
        v-if="query"
        class="icon-toolbar-clear"
        type="button"
        :aria-label="locale === 'zh' ? '清除搜索' : locale === 'ja' ? '検索をクリア' : 'Clear search'"
        @click="emit('update:query', '')"
      >
        ×
      </button>
    </label>

    <div class="icon-toolbar-options">
      <div class="icon-toolbar-segments" role="group" :aria-label="locale === 'zh' ? '图标样式' : locale === 'ja' ? 'アイコンのスタイル' : 'Icon style'">
        <button
          v-for="option in styleOptions"
          :key="option.value"
          type="button"
          :class="{ 'is-active': styleFilter === option.value }"
          :aria-pressed="styleFilter === option.value"
          @click="emit('update:styleFilter', option.value)"
        >
          {{ option.label }}
        </button>
      </div>

      <label class="icon-toolbar-category">
        <span class="sr-only">{{ locale === 'zh' ? '图标分类' : locale === 'ja' ? 'アイコンカテゴリ' : 'Icon category' }}</span>
        <select
          :value="typeFilter"
          @change="emit('update:typeFilter', ($event.target as HTMLSelectElement).value)"
        >
          <option v-for="option in iconCategories" :key="option.value" :value="option.value">
            {{ getIconCategoryLabel(option.value, locale) }}
          </option>
        </select>
      </label>

      <button
        class="icon-toolbar-reset"
        type="button"
        :disabled="!hasFilters"
        @click="emit('reset')"
      >
        {{ locale === 'zh' ? '恢复默认' : locale === 'ja' ? 'リセット' : 'Reset' }}
      </button>
    </div>
  </div>
</template>

<style>
.icon-search-toolbar {
  margin: 14px 0 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
}
.icon-toolbar-search {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 13px;
  border-bottom: 1px solid var(--vp-c-divider);
}
.icon-toolbar-search svg {
  width: 18px;
  flex: none;
  fill: var(--vp-c-text-3);
}
.icon-toolbar-search input {
  width: 100%;
  height: 44px;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--vp-c-text-1);
  font: inherit;
  font-size: 14px;
}
.icon-toolbar-search input::-webkit-search-cancel-button {
  appearance: none;
}
.icon-toolbar-search:focus-within svg {
  fill: var(--vp-c-brand-1);
}
.icon-toolbar-clear {
  padding: 2px 6px;
  border: 0;
  border-radius: 4px;
  background: transparent;
  color: var(--vp-c-text-3);
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
}
.icon-toolbar-clear:hover {
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-1);
}
.icon-toolbar-options {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  padding: 10px 12px;
}
.icon-toolbar-segments {
  display: inline-flex;
  height: 32px;
  box-sizing: border-box;
  padding: 2px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 7px;
  background: var(--vp-c-bg);
}
.icon-toolbar-segments button {
  padding: 0 10px;
  border: 0;
  border-radius: 5px;
  background: transparent;
  color: var(--vp-c-text-2);
  font-size: 12px;
  cursor: pointer;
}
.icon-toolbar-segments button:hover {
  color: var(--vp-c-text-1);
}
.icon-toolbar-segments button.is-active {
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-brand-1);
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .12);
}
.icon-toolbar-category select {
  height: 32px;
  box-sizing: border-box;
  min-width: 126px;
  padding: 0 28px 0 9px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font: inherit;
  font-size: 12px;
}
.icon-toolbar-reset {
  margin-left: auto;
  height: 32px;
  padding: 0 4px;
  border: 0;
  background: transparent;
  color: var(--vp-c-brand-1);
  font: inherit;
  font-size: 12px;
  cursor: pointer;
}
.icon-toolbar-reset:disabled {
  color: var(--vp-c-text-3);
  cursor: default;
}
.icon-toolbar-segments button:focus-visible,
.icon-toolbar-category select:focus-visible,
.icon-toolbar-clear:focus-visible,
.icon-toolbar-reset:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}
@media (max-width: 520px) {
  .icon-toolbar-options {
    align-items: stretch;
  }
  .icon-toolbar-category {
    flex: 1;
  }
  .icon-toolbar-category select {
    width: 100%;
  }
  .icon-toolbar-reset {
    margin-left: 0;
  }
}
</style>
