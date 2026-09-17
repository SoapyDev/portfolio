import type { Messages } from './types'

const en: Messages = {
  meta: {
    title: 'Portfolio',
    description:
      'Alexandre Beauchamp-Thibault — developer, QA and project manager in Quebec. Rust and Vue.',
  },
  switchTo: 'Passer au français',
  nav: {
    label: 'Sections',
    work: 'Work',
    approach: 'Approach',
    stack: 'Stack',
    contact: 'Contact',
  },
  hero: {
    intro:
      'I build small command-line tools and full-stack web apps, from the Postgres schema to the last button.',
    roles: ['Developer', 'QA', 'Project manager'],
    where: 'Rust and Vue, based in Quebec.',
  },
  tui: {
    label: 'Project browser',
    list: 'Projects',
    or: 'or',
    select: 'select',
    open: 'open',
    private: 'Private project',
  },
  work: { title: 'Work' },
  kinds: {
    web: 'Web app',
    internal: 'Internal tool',
    cli: 'Command line',
    tui: 'Terminal UI',
  },
  projects: {
    'le-club': {
      role: 'Built and shipped',
      summary: 'A web app where friends and family rate their favourite restaurants.',
      details: ['Live in production.'],
      stack: ['Vue 3', 'Rust / Loco', 'PostgreSQL'],
      links: ['Visit the-club.ca'],
    },
    harmony: {
      role: 'Built for a nonprofit',
      // TODO: describe what the tool does.
      summary:
        'A private tool built for a nonprofit organization to support its day-to-day work.',
      details: [
        'Dedicated to one organization and its needs.',
        'Private: the code and the app are not public.',
      ],
      stack: ['Vue 3', 'Rust / Axum', 'PostgreSQL'],
      links: [],
      privateNote: 'Private project, available on request',
    },
    picturust: {
      role: 'Author',
      summary:
        'Resize, convert, rotate and flip images from the command line, one file or whole folder trees at a time.',
      details: [
        'Multithreaded: resizes 1,000 images (1.8 GiB) to 1200 px wide in about 15 seconds.',
        'Reads and writes JPEG, PNG, TIFF, WebP and AVIF.',
        'WebP at 70% quality brings files down to about 4% of the PNG source.',
      ],
      stack: ['Rust', 'CLI', 'Multithreading'],
      links: ['Source on GitHub'],
    },
    linutil: {
      role: 'Contributor',
      summary:
        "Chris Titus Tech's Linux toolbox: a terminal UI for setting up and maintaining Linux systems.",
      details: [
        'Cut the size of the release binary so the tool starts faster.',
        'Refactored theming so new themes are easy to add and cycle through.',
        'Fixed the command search.',
      ],
      stack: ['Rust', 'TUI', 'Open source'],
      links: ['Project on GitHub', 'My pull requests'],
    },
  },
  approach: {
    title: 'Incremental development',
    intro: 'I work incrementally: each step builds on something that already works.',
    steps: [
      {
        title: 'Solve a real concern',
        body: 'Start from one concrete need and build something specific enough to actually solve it.',
      },
      {
        title: 'Finish it',
        body: 'Ship it and put it to use, so it works end to end before the scope grows.',
      },
      {
        title: 'Extend to similar problems',
        body: 'Widen the scope to related issues, one step at a time, reusing what already works.',
      },
    ],
  },
  stack: {
    title: 'Stack',
    web: 'On the web',
    layersLabel: 'From interface down to data',
    layers: { interface: 'Interface', api: 'API', data: 'Data' },
    terminal: 'In the terminal',
    terminalTools: ['Rust', 'Command-line tools', 'Terminal UIs', 'Shell'],
  },
  contact: {
    title: 'Contact',
    body: 'Open to web apps, internal tools and command-line projects, whether you need someone to build them, test them or run the project.',
  },
  footer: { builtWith: 'Vue 3 + Vite' },
}

export default en
