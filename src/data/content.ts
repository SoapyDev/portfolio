// Language-neutral content: names, links and structure.
// All visible text lives in src/i18n/en.ts and src/i18n/fr.ts, keyed by the ids below.

export type ProjectKind = 'web' | 'internal' | 'cli' | 'tui'

export interface ProjectBase {
  id: string
  name: string
  kind: ProjectKind
  // Leave empty for private work; the page then shows the project's `privateNote`.
  links: string[]
}

export const profile = {
  name: 'Alexandre Beauchamp-Thibault',
  handle: 'SoapyDev',
  github: 'https://github.com/SoapyDev',
  linkedin: 'https://www.linkedin.com/in/alexandre-beauchamp-thibault',
}

export const projects: ProjectBase[] = [
  {
    id: 'le-club',
    name: 'Le Club',
    kind: 'web',
    links: ['https://the-club.ca/'],
  },
  {
    id: 'harmony',
    name: 'Harmony',
    kind: 'internal',
    links: [],
  },
  {
    id: 'picturust',
    name: 'PictuRust',
    kind: 'cli',
    links: ['https://github.com/SoapyDev/PictuRust'],
  },
  {
    id: 'linutil',
    name: 'Linutil',
    kind: 'tui',
    links: [
      'https://github.com/ChrisTitusTech/linutil',
      'https://github.com/ChrisTitusTech/linutil/pulls?q=is%3Apr+author%3ASoapyDev',
    ],
  },
]

// Tools per web layer, top to bottom. Layer names are translated.
export const layerTools = {
  interface: ['Vue 3', 'TypeScript'],
  api: ['Rust', 'Axum', 'Loco'],
  data: ['PostgreSQL'],
} as const

export type LayerId = keyof typeof layerTools
