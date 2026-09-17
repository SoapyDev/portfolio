<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from '../i18n'

const { t, projects } = useI18n()

const selected = ref(0)
const current = computed(() => projects.value[selected.value])

function move(delta: number) {
  const n = projects.value.length
  selected.value = (selected.value + delta + n) % n
}

function onKey(e: KeyboardEvent) {
  switch (e.key) {
    case 'ArrowDown':
    case 'j':
      move(1)
      break
    case 'ArrowUp':
    case 'k':
      move(-1)
      break
    case 'Home':
      selected.value = 0
      break
    case 'End':
      selected.value = projects.value.length - 1
      break
    case 'Enter': {
      const link = current.value.linkItems[0]
      if (link) window.open(link.href, '_blank', 'noopener')
      break
    }
    default:
      return
  }
  e.preventDefault()
}
</script>

<template>
  <div class="tui mono" :aria-label="t.tui.label">
    <div class="bar">
      <span>soapyland</span>
      <span class="dim">{{ selected + 1 }}/{{ projects.length }}</span>
    </div>

    <div class="body">
      <ul
        class="list"
        role="listbox"
        tabindex="0"
        :aria-label="t.tui.list"
        :aria-activedescendant="`tui-${current.id}`"
        @keydown="onKey"
      >
        <li
          v-for="(p, i) in projects"
          :id="`tui-${p.id}`"
          :key="p.id"
          role="option"
          :aria-selected="i === selected"
          :class="{ active: i === selected }"
          @click="selected = i"
        >
          <span class="caret" aria-hidden="true">{{ i === selected ? '▸' : ' ' }}</span>
          {{ p.name }}
        </li>
      </ul>

      <div class="pane" aria-live="polite">
        <p class="kind">{{ t.kinds[current.kind] }} / {{ current.role }}</p>
        <p class="summary">{{ current.summary }}</p>
        <ul class="tags">
          <li v-for="tech in current.stack" :key="tech">{{ tech }}</li>
        </ul>
        <a
          v-if="current.linkItems.length"
          :href="current.linkItems[0].href"
          target="_blank"
          rel="noopener"
        >
          {{ current.linkItems[0].label }}
        </a>
        <span v-else class="private">{{ current.privateNote ?? t.tui.private }}</span>
      </div>
    </div>

    <div class="bar foot">
      <span><kbd>↑↓</kbd> {{ t.tui.or }} <kbd>j k</kbd> {{ t.tui.select }}</span>
      <span><kbd>enter</kbd> {{ t.tui.open }}<span class="cursor" aria-hidden="true"></span></span>
    </div>
  </div>
</template>

<style scoped>
.tui {
  background: var(--slate);
  border: 1px solid var(--line);
  border-radius: 6px;
  font-size: var(--step--1);
  overflow: hidden;
  box-shadow: 0 0 0 6px color-mix(in srgb, var(--slate) 45%, transparent);
}

.bar {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--line);
  color: var(--foam);
}
.foot {
  border-top: 1px solid var(--line);
  border-bottom: 0;
  color: var(--mist);
}
.dim {
  color: var(--mist);
}

kbd {
  font-family: inherit;
  color: var(--amber);
}

.body {
  display: grid;
  grid-template-columns: minmax(9rem, 0.7fr) 1.6fr;
  min-height: 15rem;
}

.list {
  list-style: none;
  margin: 0;
  padding: 0.75rem 0;
  border-right: 1px solid var(--line);
  outline-offset: -3px;
}
.list li {
  padding: 0.3rem 1rem 0.3rem 0.6rem;
  cursor: pointer;
  white-space: nowrap;
  color: var(--mist);
}
.list li:hover {
  color: var(--foam);
}
.list li.active {
  background: var(--amber);
  color: var(--ink);
}
.caret {
  display: inline-block;
  width: 1ch;
}

.pane {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: 1rem 1.25rem 1.25rem;
}
.kind {
  color: var(--lilac);
}
.summary {
  font-family: var(--sans);
  font-variation-settings:
    'MONO' 0,
    'CASL' 0.35;
  font-size: var(--step-0);
  line-height: 1.5;
  color: var(--foam);
}
.pane a,
.private {
  margin-top: auto;
}
.private {
  color: var(--mist);
}

.cursor {
  display: inline-block;
  width: 0.6ch;
  height: 1.05em;
  margin-left: 0.4ch;
  vertical-align: text-bottom;
  background: var(--amber);
  animation: blink 1.1s steps(1) infinite;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}

@media (max-width: 34rem) {
  .body {
    grid-template-columns: 1fr;
  }
  .list {
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }
}
</style>
