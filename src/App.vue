<script setup lang="ts">
import TuiWindow from './components/TuiWindow.vue'
import ProjectEntry from './components/ProjectEntry.vue'
import LocaleSwitch from './components/LocaleSwitch.vue'
import { profile, layerTools, type LayerId } from './data/content'
import { useI18n } from './i18n'

const { t, projects } = useI18n()
const layerIds = Object.keys(layerTools) as LayerId[]
const year = new Date().getFullYear()
</script>

<template>
  <header class="site-header wrap">
    <a href="#top" class="logo mono">soapyland</a>
    <div class="header-end">
      <nav :aria-label="t.nav.label">
        <a href="#work">{{ t.nav.work }}</a>
        <a href="#approach">{{ t.nav.approach }}</a>
        <a href="#stack">{{ t.nav.stack }}</a>
        <a href="#contact">{{ t.nav.contact }}</a>
      </nav>
      <LocaleSwitch />
    </div>
  </header>

  <main id="top">
    <section class="hero wrap">
      <div class="hero-text">
        <h1>{{ profile.name }}</h1>
        <p class="intro">{{ t.hero.intro }}</p>
        <ul class="roles">
          <li v-for="r in t.hero.roles" :key="r">{{ r }}</li>
        </ul>
        <p class="where">
          {{ t.hero.where }}
          <a :href="profile.github" target="_blank" rel="noopener">@{{ profile.handle }}</a>
        </p>
      </div>
      <TuiWindow class="hero-tui" />
    </section>

    <section id="work" class="section wrap">
      <h2 class="section-title">{{ t.work.title }}</h2>
      <ProjectEntry v-for="p in projects" :key="p.id" :project="p" />
    </section>

    <section id="approach" class="section wrap">
      <h2 class="section-title">{{ t.approach.title }}</h2>
      <p class="section-intro">{{ t.approach.intro }}</p>
      <ol class="steps">
        <li v-for="step in t.approach.steps" :key="step.title">
          <h3>{{ step.title }}</h3>
          <p>{{ step.body }}</p>
        </li>
      </ol>
    </section>

    <section id="stack" class="section wrap">
      <h2 class="section-title">{{ t.stack.title }}</h2>
      <div class="stack-grid">
        <div>
          <h3 class="stack-heading">{{ t.stack.web }}</h3>
          <ol class="layers" :aria-label="t.stack.layersLabel">
            <li v-for="id in layerIds" :key="id">
              <span class="layer-name mono">{{ t.stack.layers[id] }}</span>
              <ul class="tags">
                <li v-for="tool in layerTools[id]" :key="tool">{{ tool }}</li>
              </ul>
            </li>
          </ol>
        </div>
        <div>
          <h3 class="stack-heading">{{ t.stack.terminal }}</h3>
          <ul class="tags terminal">
            <li v-for="tool in t.stack.terminalTools" :key="tool">{{ tool }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="contact" class="section wrap contact">
      <h2 class="section-title">{{ t.contact.title }}</h2>
      <p>{{ t.contact.body }}</p>
      <ul class="contact-links">
        <li><a :href="profile.github" target="_blank" rel="noopener">GitHub</a></li>
        <li><a :href="profile.linkedin" target="_blank" rel="noopener">LinkedIn</a></li>
      </ul>
    </section>
  </main>

  <footer class="wrap site-footer mono">
    <span>© {{ year }} {{ profile.name }}</span>
    <span>{{ t.footer.builtWith }}</span>
  </footer>
</template>

<style scoped>
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-block: 1.25rem;
}
.logo {
  color: var(--foam);
  text-decoration: none;
  font-weight: 600;
}
.header-end {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem clamp(1rem, 3vw, 2rem);
}
.site-header nav {
  display: flex;
  gap: clamp(0.9rem, 3vw, 1.75rem);
  font-size: var(--step--1);
}
.site-header nav a {
  color: var(--mist);
  text-decoration: none;
}
.site-header nav a:hover { color: var(--foam); }

.hero {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
  padding-block: clamp(3rem, 10vw, 7rem);
}
.hero h1 {
  font-size: var(--step-4);
  letter-spacing: -0.02em;
  max-width: 12ch;
}
.intro {
  margin-top: 1.5rem;
  font-size: var(--step-1);
  line-height: 1.45;
  max-width: 30ch;
}
.roles {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
}
.roles li {
  font-family: var(--mono);
  font-variation-settings: 'MONO' 1;
  padding: 0.25rem 0.75rem;
  border: 1px solid var(--lilac);
  border-radius: 999px;
  color: var(--lilac);
}
.where {
  margin-top: 1.25rem;
  color: var(--mist);
}

.section-intro {
  margin: -1.5rem 0 2.5rem;
  font-size: var(--step-1);
  color: var(--mist);
}
.steps {
  list-style: none;
  counter-reset: step;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 0;
  margin: 0;
}
.steps li {
  counter-increment: step;
  padding-top: 1rem;
  border-top: 2px solid var(--lilac);
}
.steps li::before {
  content: counter(step);
  display: block;
  font-family: var(--mono);
  font-variation-settings: 'MONO' 1;
  color: var(--lilac);
  margin-bottom: 0.5rem;
}
.steps h3 {
  font-size: var(--step-1);
  margin-bottom: 0.5rem;
}
.steps p { color: var(--mist); }

.stack-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 3rem;
}
.stack-heading {
  font-size: var(--step-0);
  color: var(--mist);
  font-weight: 500;
  margin-bottom: 1rem;
}
.layers {
  list-style: none;
  padding: 0;
  margin: 0;
  border-left: 2px solid var(--line);
}
.layers > li {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 0.85rem 0 0.85rem 1.25rem;
  position: relative;
}
.layers > li + li { border-top: 1px dashed var(--line); }
.layer-name {
  min-width: 6rem;
  color: var(--foam);
}
.terminal li { color: var(--amber); border-color: color-mix(in srgb, var(--amber) 40%, var(--line)); }

.contact p { font-size: var(--step-1); }
.contact-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
  font-size: var(--step-1);
}

.site-footer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  padding-block: 2rem;
  border-top: 1px solid var(--line);
  color: var(--mist);
  font-size: var(--step--1);
}

@media (max-width: 52rem) {
  .hero { grid-template-columns: 1fr; }
  .steps { grid-template-columns: 1fr; }
  .stack-grid { grid-template-columns: 1fr; }
}
@media (max-width: 30rem) {
  .site-header { flex-wrap: wrap; row-gap: 0.75rem; }
  .header-end { display: contents; }
  .site-header nav { order: 3; width: 100%; }
}
</style>
