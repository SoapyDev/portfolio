import { computed, readonly, ref, watchEffect } from 'vue'
import { projects, type ProjectBase } from '../data/content'
import type { Messages, ProjectText } from './types'
import en from './en'
import fr from './fr'

export type Locale = 'en' | 'fr'

const messages: Record<Locale, Messages> = { en, fr }
const STORAGE_KEY = 'soapyland:locale'

function initialLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'fr') return saved
  } catch {
    // Storage unavailable: fall through to the browser language.
  }
  return navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

const locale = ref<Locale>(initialLocale())

// Keep <html lang>, the title and the meta description in sync.
watchEffect(() => {
  const m = messages[locale.value]
  document.documentElement.lang = locale.value === 'fr' ? 'fr-CA' : 'en-CA'
  document.title = m.meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', m.meta.description)
})

function setLocale(next: Locale) {
  locale.value = next
  try {
    localStorage.setItem(STORAGE_KEY, next)
  } catch {
    // Not persisted; the choice still applies for this visit.
  }
}

export type LocalizedProject = ProjectBase &
  ProjectText & { linkItems: { label: string; href: string }[] }

export function useI18n() {
  const t = computed(() => messages[locale.value])

  const localizedProjects = computed<LocalizedProject[]>(() =>
    projects.map((p) => {
      const text = t.value.projects[p.id]
      return {
        ...p,
        ...text,
        linkItems: p.links.map((href, i) => ({ href, label: text.links[i] ?? href })),
      }
    }),
  )

  return {
    locale: readonly(locale),
    setLocale,
    toggle: () => setLocale(locale.value === 'en' ? 'fr' : 'en'),
    t,
    projects: localizedProjects,
  }
}
