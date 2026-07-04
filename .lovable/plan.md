# Refonte Erkilic — logo, contenu réel, map, animations, SEO

## 1. Logo (haut à gauche)

- Upload du logo fourni via `lovable-assets` (pas de copie binaire dans le repo).
- Nettoyage/upscale avec `imagegen--edit_image` : fond transparent, netteté renforcée, conservation du hexagone doré et du "e" script.
- Intégration dans `Nav` : logo à gauche (h-12), le mot "Erkilic Expertise" en texte disparaît (déjà dans le logo). Version compacte responsive.
- Favicon dérivé du logo (`public/favicon.png`) + suppression du `favicon.ico` par défaut, référencé dans `__root.tsx`.

## 2. Contenu réel depuis erkilic.fr

Fetch de toutes les pages du site officiel (accueil, cabinet, services, packs individuels, contact) pour récupérer le contenu exact — descriptions, listes de prestations, mentions légales, coordonnées. Injection fidèle dans les routes existantes :

- **Accueil** : tagline + présentation cabinet exacte, 4 domaines, aperçu des 5 packs, zone d'intervention.
- **/services** : détail complet des 4 domaines (comptable, fiscal, social, juridique) + fiche complète des 5 packs (Créateur, Auto-entrepreneur, Profession libérale, Société de service, Particulier) avec la liste de prestations exacte de chaque pack.
- **/cabinet** : histoire, valeurs, déontologie, zone géographique (Juvignac, Montpellier, Saint-Georges-d'Orques, Pignan, Montarnaud).
- **/contact** : nouvelles coordonnées :
  - **29 bis rue du Poumpidou, 34990 Juvignac**
  - **09 72 54 07 71** / **06 59 88 40 80**
  - **cabinet@erkilic.fr**
  - Mise à jour aussi dans le `Footer`.

## 3. Map interactive

Google Maps Platform via le connecteur Lovable (browser key) — centré sur 29 bis rue du Poumpidou, marker sur le cabinet, style monochrome cohérent avec la palette Paper & Ink. Intégrée dans `/contact` sous les coordonnées, et une version compacte en bas de `/cabinet`.

Si l'utilisateur préfère ne pas activer le connecteur Google Maps, fallback : iframe OpenStreetMap (pas d'API key, gratuit).

## 4. Animations subtiles & prestigieuses

- Reveal-on-scroll (IntersectionObserver + `reveal-up` déjà défini) sur titres, cartes de packs, blocs de services.
- Ligne horizontale qui se dessine (`line-grow`) sous les `SectionHeader`.
- Hover : cartes de packs → filet qui pousse vers la droite + léger translate Y.
- Nav : masque/révèle au scroll (hide au scroll down, show au scroll up).
- Curseur d'accent (petit trait clignotant) après le mot italique du hero.
- Framer-motion pour l'entrée du hero (stagger sur les mots du titre).

Reste sobre : pas d'animations tape-à-l'œil, tempo lent (400-800ms), ease-out-expo.

## 5. Images stratégiques (peu, bien placées)

- Hero accueil : image d'ambiance discrète (bureau, papiers, lumière naturelle) en arrière-plan traité (grain + monochrome + opacity 15%).
- Section "domaines" : 4 petites illustrations line-art (générées) au-dessus de chaque domaine.
- `/cabinet` : garder l'image intérieur existante + ajouter une seconde image (façade / détail Juvignac).
- `/services` : une image d'accroche en tête de page.

Toutes en `<img>` avec `loading="lazy"`, `alt` descriptif, dimensions fixées (CLS).

## 6. SEO maximum

Par route (`head()`), en français, avec mots-clés locaux :

- Titres uniques, <60 char : ex. *"Expert-comptable Juvignac Montpellier — Cabinet Erkilic"*.
- Meta description <160 char, ciblée (audience + zone).
- `og:title`, `og:description`, `og:type`, `og:url` absolus (https://expert-reimagined-app.lovable.app/...).
- `og:image` uniquement sur les routes qui ont une vraie image hero (pas sur `__root`).
- Canonical absolu par leaf route.
- JSON-LD :
  - `__root` : `Organization` + `LocalBusiness` (AccountingService) avec adresse, téléphone, geo, openingHours, sameAs.
  - `/services` : `Service` × 4 domaines.
  - `/contact` : `LocalBusiness` complet avec coordonnées GPS.
- H1 unique par page, hiérarchie H1→H2→H3 propre.
- `alt` sur toutes les images (contexte comptable + Juvignac).
- `public/robots.txt` : allow all + Sitemap.
- `public/sitemap.xml` : 4 routes.
- `lang="fr"` sur `<html>` (actuellement `"en"` — à corriger).
- Liens internes croisés (cabinet ↔ services ↔ contact).
- Mots-clés visés : *expert-comptable Juvignac*, *cabinet comptable Montpellier*, *expertise comptable Hérault*, *comptable auto-entrepreneur Montpellier*, *comptable profession libérale Juvignac*.

Après implémentation : lancer un scan SEO et corriger les findings restants.

## 7. Détails techniques

- Fetch de erkilic.fr via `fetch_website` (chaque page) dans la phase d'implémentation.
- Google Maps : appelle `standard_connectors--connect` avec `google_maps` — si l'utilisateur refuse, bascule sur iframe OSM.
- `lang="fr"` dans `__root.tsx`.
- Toutes les URLs absolues SEO utilisent `https://expert-reimagined-app.lovable.app`.
- Contact form reste frontend-only (pas de backend demandé).

## Livrable

Site enrichi, coordonnées à jour, logo intégré haut-gauche, map interactive sur `/contact`, animations reveal + hover subtiles, SEO local optimisé (métas + JSON-LD LocalBusiness + sitemap), 4-5 images bien placées.
