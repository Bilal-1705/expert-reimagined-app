# Menu : Nos packs, Actualités et Comparatifs

## 1. Renommage du menu

- Le menu déroulant "POUR QUI ?" devient "NOS PACKS" (mêmes 5 liens packs), dans le header desktop et le menu mobile.

## 2. Nouvel onglet "ACTUALITÉS"

Nouvel onglet principal dans le header, pointant vers une page hub `/actualites` qui remplace `/conseils`.

- La page `/actualites` liste, du plus récent au plus ancien : les 3 actualités 2026 existantes (facture électronique, Loi de Finances, barèmes & seuils) + les 3 nouvelles ci-dessous, puis les guides et analyses actuellement sur "Conseils & analyses" (secteurs, création d'entreprise, guide).
- `/conseils` reste en place et redirige vers `/actualites` pour ne pas casser les liens déjà indexés.
- Mise à jour du footer, du sitemap et des liens internes.

### 3 nouvelles actualités (contenu daté, orienté trafic)

1. **Facturation électronique : ce qui change au 1er septembre 2026** — obligation de réception pour toutes les entreprises, choix de la plateforme agréée, check-list de préparation pour une TPE de l'Hérault.
2. **Déclaration de revenus 2026 : dates, nouveautés et erreurs fréquentes** — calendrier par département (Hérault), nouveautés du barème, cas des indépendants et LMNP.
3. **Micro-entreprise 2026 : nouveaux seuils de TVA et arbitrage avec la société** — impact concret sur le chiffre d'affaires, quand passer en EURL/SASU, lien vers le simulateur de statut.

Chaque page reprend le gabarit `ContentPage` existant : résumé en puces, dates publiées/modifiées, JSON-LD Article, FAQ courte, CTA Calendly/contact, ancrage local (Juvignac, Montpellier).

## 3. Page "Comparatifs" dans RESSOURCES

Nouvelle page hub `/comparatifs` ajoutée au menu RESSOURCES (et au footer/sitemap) :

- Introduction : cabinet local vs solutions en ligne, ce qu'un logiciel ne peut pas faire.
- Tableau de synthèse Erkilic Expertise Comptable vs plateformes.
- Cartes vers les comparatifs existants : Indy, Pennylane, Keobiz, Dougs, plus "Cabinet vs 100 % en ligne" et "EURL vs SASU".  


5. Optimisation search engine

Les nouvelles pages et celle déjà existance vérifier si elles peuvent être optimisées encore plus pour du SEO Local, IA search engine, Fils d'ariane.

## Détails techniques

- `src/components/site/Nav.tsx` : libellé "NOS PACKS", nouvel item "ACTUALITÉS", entrée "Comparatifs" dans le dropdown Ressources.
- Nouveaux fichiers de routes : `actualites.index.tsx` (hub), 3 fichiers `actualites.*.tsx`, `comparatifs.tsx`.
- `conseils.tsx` : `beforeLoad` avec `redirect({ to: "/actualites" })`.
- `Footer.tsx` et `sitemap[.]xml.ts` mis à jour avec les nouvelles URLs.
- Chaque nouvelle route a son `head()` propre : titre < 60 caractères, description < 160, canonical `https://erkilic.fr/...`, og:title/description/type.