<script setup lang="ts">
import { useI18n } from '../i18n'

const { locale, toggle, t } = useI18n()
</script>

<template>
  <button
    type="button"
    class="switch mono"
    role="switch"
    :aria-checked="locale === 'fr'"
    :aria-label="t.switchTo"
    :title="t.switchTo"
    @click="toggle"
  >
    <span class="track" aria-hidden="true">
      <span class="opt" :class="{ on: locale === 'en' }" lang="en">EN</span>
      <span class="opt" :class="{ on: locale === 'fr' }" lang="fr">FR</span>
      <span class="thumb" :class="{ right: locale === 'fr' }"></span>
    </span>
  </button>
</template>

<style scoped>
.switch {
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  font: inherit;
  font-size: var(--step--1);
}
.track {
  position: relative;
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--slate);
  padding: 2px;
}
.opt {
  position: relative;
  z-index: 1;
  padding: 0.2rem 0.65rem;
  color: var(--mist);
  transition: color 0.2s ease;
}
.opt.on {
  color: var(--ink);
  font-weight: 600;
}
.switch:hover .opt:not(.on) {
  color: var(--foam);
}
.thumb {
  position: absolute;
  top: 2px;
  bottom: 2px;
  left: 2px;
  width: calc(50% - 2px);
  border-radius: 999px;
  background: var(--amber);
  transition: transform 0.2s ease;
}
.thumb.right {
  transform: translateX(100%);
}
</style>
