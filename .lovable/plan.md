# Site Erkilic Expertise Comptable — recréation moderne

Direction validée : **Rationalist ledger** (Paper & Ink + Sora/Manrope + hero-grid).

## Pages (routes séparées)

- `/` — Accueil : hero éditorial, grille des 5 packs, section identité/philosophie, CTA devis
- `/services` — Détail des 4 domaines (comptable, fiscal, social, juridique) + les 5 packs développés
- `/cabinet` — À propos : histoire du cabinet, valeurs, localisation Juvignac
- `/contact` — Coordonnées + formulaire de devis (type structure, message)

Chaque route a son propre `head()` (title, description, og:title, og:description) en français.

## Design system (tokens verbatim du prototype)

Dans `src/styles.css` :
- Couleurs : `--paper #f5f3ee`, `--paper-dark #e8e4dd`, `--ink #0d0d0d`, `--ink-muted #2d2d2d`
- Fonts : Sora (display) + Manrope (body), chargées via `<link>` dans `__root.tsx`
- Animations : `reveal-up`, `line-grow` (ease-out-expo)
- Tokens shadcn mappés sur la palette papier (background = paper, foreground = ink, etc.) pour cohérence dark/light désactivée — site exclusivement clair

## Composants

- `Nav` (sticky, blur, logo ERKILIC + Expertise, liens Cabinet/Services/Contact, CTA Devis)
- `Footer` (fond ink, gros titre "Prêt à avancer ?", coordonnées Juvignac, mentions)
- `PackCard`, `StatRow`, `SectionHeader` (numéro + titre uppercase)
- Layout shell réutilisé sur toutes les pages

## Contenu repris du site original

- Cabinet d'expertise comptable à **Juvignac**, proche Montpellier, Saint-Georges-d'Orques, Pignan, Montarnaud
- Tagline : *"Parce que vous comptez pour nous, nous comptons pour vous"*
- 5 packs : Créateur, Auto-entrepreneur, Profession libérale, Société de service, Particulier
- 4 domaines : comptable, fiscal, social, juridique
- Cibles : artisans, commerçants, PME, professions libérales, créateurs, associations, comités d'entreprise
- Mention Ordre des Experts Comptables

## Image

Une seule image générée (intérieur de cabinet, monochrome, esthétique architecturale) pour la section identité de l'accueil et `/cabinet`. Pas de stock photos génériques ailleurs — typographie + filets portent le design.

## Détails techniques

- TanStack Start (routes file-based dans `src/routes/`)
- Pas d'`og:image` pour l'instant (à ajouter si l'utilisateur veut une image OG dédiée)
- Formulaire contact en frontend uniquement (pas de backend pour cette première passe — à brancher sur Lovable Cloud si demandé ensuite)
- Suppression du placeholder de `src/routes/index.tsx`
