import type { LayerId, ProjectKind } from '../data/content'

export interface ProjectText {
  role: string
  summary: string
  details: string[]
  stack: string[]
  // One label per link in content.ts, same order.
  links: string[]
  privateNote?: string
}

export interface Messages {
  meta: { title: string; description: string }
  switchTo: string
  nav: { label: string; work: string; approach: string; stack: string; contact: string }
  hero: { intro: string; roles: string[]; where: string }
  tui: {
    label: string
    list: string
    or: string
    select: string
    open: string
    private: string
  }
  work: { title: string }
  kinds: Record<ProjectKind, string>
  projects: Record<string, ProjectText>
  approach: {
    title: string
    intro: string
    steps: { title: string; body: string }[]
  }
  stack: {
    title: string
    web: string
    layersLabel: string
    layers: Record<LayerId, string>
    terminal: string
    terminalTools: string[]
  }
  contact: { title: string; body: string }
  footer: { builtWith: string }
}
