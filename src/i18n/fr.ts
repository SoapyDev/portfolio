import type { Messages } from './types'

const fr: Messages = {
  meta: {
    title: 'Portfolio',
    description:
      'Alexandre Beauchamp-Thibault — développeur, AQ et chargé de projet au Québec. Rust et Vue.',
  },
  switchTo: 'Switch to English',
  nav: {
    label: 'Sections',
    work: 'Projets',
    approach: 'Approche',
    stack: 'Technologies',
    contact: 'Contact',
  },
  hero: {
    intro:
      'Je conçois de petits outils en ligne de commande et des applications web complètes, du schéma Postgres jusqu’au dernier bouton.',
    roles: ['Développeur', 'AQ', 'Chargé de projet'],
    where: 'Rust et Vue, basé au Québec.',
  },
  tui: {
    label: 'Navigateur de projets',
    list: 'Projets',
    or: 'ou',
    select: 'choisir',
    open: 'ouvrir',
    private: 'Projet privé',
  },
  work: { title: 'Projets' },
  kinds: {
    web: 'Application web',
    internal: 'Outil interne',
    cli: 'Ligne de commande',
    tui: 'Interface terminal',
  },
  projects: {
    'le-club': {
      role: 'Conçu et mis en ligne',
      summary: 'Une application web où amis et famille notent leurs restaurants préférés.',
      details: ['En production.'],
      stack: ['Vue 3', 'Rust / Loco', 'PostgreSQL'],
      links: ['Visiter the-club.ca'],
    },
    harmony: {
      role: 'Conçu pour un OBNL',
      // TODO : décrire ce que fait l’outil.
      summary:
        'Un outil privé conçu pour un organisme à but non lucratif, en appui à ses activités quotidiennes.',
      details: [
        'Pensé pour un seul organisme et ses besoins.',
        'Privé : le code et l’application ne sont pas publics.',
      ],
      stack: ['Vue 3', 'Rust / Axum', 'PostgreSQL'],
      links: [],
      privateNote: 'Projet privé, disponible sur demande',
    },
    picturust: {
      role: 'Auteur',
      summary:
        'Redimensionner, convertir, pivoter et retourner des images en ligne de commande, une à la fois ou par dossiers entiers.',
      details: [
        'Multifil : redimensionne 1 000 images (1,8 Gio) à 1200 px de large en environ 15 secondes.',
        'Lit et écrit les formats JPEG, PNG, TIFF, WebP et AVIF.',
        'En WebP à 70 % de qualité, les fichiers pèsent environ 4 % de l’original PNG.',
      ],
      stack: ['Rust', 'Ligne de commande', 'Multifil'],
      links: ['Code source sur GitHub'],
    },
    vantage: {
      role: 'Auteur',
      summary:
        'Teste et mesure la performance de points d’accès API HTTP à partir de suites JSON, en comparant des environnements et en rapportant les succès et échecs.',
      details: [
        'Tests par suites : étapes de mise en place, assertions, hooks et variables gabarits.',
        'Mode benchmark : montée en charge progressive, arrêt sur erreurs ou limitation de débit.',
        'Profils de charge (rampe, pic, endurance) et rapports HTML.',
      ],
      stack: ['Rust', 'Ligne de commande', 'HTTP'],
      links: ['Code source sur GitHub'],
    },
    linutil: {
      role: 'Contributeur',
      summary:
        'La boîte à outils Linux de Chris Titus Tech : une interface terminal pour configurer et entretenir des systèmes Linux.',
      details: [
        'Réduction de la taille du binaire pour un démarrage plus rapide.',
        'Refonte des thèmes pour en ajouter et les alterner facilement.',
        'Correction de la recherche de commandes.',
      ],
      stack: ['Rust', 'Interface terminal', 'Code source ouvert'],
      links: ['Projet sur GitHub', 'Mes demandes de fusion'],
    },
  },
  approach: {
    title: 'Développement incrémental',
    intro:
      'Je travaille par incréments : chaque étape s’appuie sur quelque chose qui fonctionne déjà.',
    steps: [
      {
        title: 'Régler un vrai problème',
        body: 'Partir d’un besoin concret et bâtir quelque chose d’assez précis pour vraiment le régler.',
      },
      {
        title: 'Le mener à terme',
        body: 'Le livrer et le mettre en usage, pour qu’il fonctionne de bout en bout avant d’élargir la portée.',
      },
      {
        title: 'L’étendre aux problèmes semblables',
        body: 'Élargir la portée à des enjeux connexes, une étape à la fois, en réutilisant ce qui fonctionne déjà.',
      },
    ],
  },
  stack: {
    title: 'Technologies',
    web: 'Sur le web',
    layersLabel: 'De l’interface jusqu’aux données',
    layers: { interface: 'Interface', api: 'API', data: 'Données' },
    terminal: 'Dans le terminal',
    terminalTools: ['Rust', 'Outils en ligne de commande', 'Interfaces terminal', 'Shell'],
  },
  contact: {
    title: 'Contact',
    body: 'Ouvert aux applications web, aux outils internes et aux projets en ligne de commande, que ce soit pour les concevoir, les tester ou gérer le projet.',
  },
  footer: { builtWith: 'Vue 3 + Vite' },
}

export default fr
