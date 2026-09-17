<script setup lang="ts">
import { useI18n, type LocalizedProject } from '../i18n'

defineProps<{ project: LocalizedProject }>()
const { t } = useI18n()
</script>

<template>
  <article :id="project.id" class="entry">
    <div class="meta">
      <h3>{{ project.name }}</h3>
      <p class="kind mono">{{ t.kinds[project.kind] }}</p>
      <p class="role">{{ project.role }}</p>
    </div>

    <div class="content">
      <p class="summary">{{ project.summary }}</p>
      <ul class="details">
        <li v-for="d in project.details" :key="d">{{ d }}</li>
      </ul>
      <ul class="tags">
        <li v-for="tech in project.stack" :key="tech">{{ tech }}</li>
      </ul>
      <p v-if="project.linkItems.length" class="links">
        <a
          v-for="l in project.linkItems"
          :key="l.href"
          :href="l.href"
          target="_blank"
          rel="noopener"
          >{{ l.label }}</a
        >
      </p>
      <p v-else class="private">{{ project.privateNote ?? t.tui.private }}</p>
    </div>
  </article>
</template>

<style scoped>
.entry {
  display: grid;
  grid-template-columns: minmax(10rem, 16rem) 1fr;
  gap: 1rem clamp(1.5rem, 5vw, 4rem);
  padding-block: 2.25rem;
}
.entry + .entry {
  border-top: 1px dashed var(--line);
}

h3 {
  font-size: var(--step-2);
}
.kind {
  margin-top: 0.5rem;
  color: var(--lilac);
  font-size: var(--step--1);
}
.role {
  color: var(--mist);
  font-size: var(--step--1);
}

.content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.summary {
  font-size: var(--step-1);
  line-height: 1.45;
}
.details {
  margin: 0;
  padding-left: 1.1rem;
  color: var(--mist);
  max-width: var(--measure);
}
.details li + li {
  margin-top: 0.3rem;
}
.details li::marker {
  color: var(--amber);
  content: '› ';
}
.private {
  color: var(--mist);
}
.links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
}

@media (max-width: 44rem) {
  .entry {
    grid-template-columns: 1fr;
  }
}
</style>
