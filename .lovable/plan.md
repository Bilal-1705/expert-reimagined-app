# Plan — Clarifier l'entité « Erkilic Expertise Comptable » pour Google et les IA

Objectif : rendre le cabinet parfaitement identifiable (nom, adresse, dirigeante, activité, zone) pour les moteurs de recherche et assistants IA, uniquement avec des informations factuelles. Aucun faux avis, classement ou partenariat.

## 1. Audit de l'existant (vérifié dans le code)

**Déjà en place**
- JSON-LD `AccountingService` dans `__root.tsx` : nom, adresse Juvignac, téléphones, géolocalisation, horaires, zone desservie, Ordre des Experts-Comptables.
- Canonicals et og:url pointant sur `https://erkilic.fr` sur toutes les pages ; sitemap.xml et robots.txt corrects ; llms.txt présent.
- Pages : accueil, services, cabinet, à propos, guide, FAQ (18 questions), contact + Calendly, 5 packs, 3 secteurs, 3 zones locales, 6 comparatifs, actualités 2026, simulateur de statut.
- Footer riche avec maillage interne, adresse, téléphones, badge Ordre.
- Formulations locales déjà présentes (expert-comptable à Juvignac / Montpellier / Hérault).

**Ce qui manque**
- Page locale dédiée « Expert-comptable à Juvignac » (la requête cœur n'a pas de page d'atterrissage propre).
- Page « Création d'entreprise à Juvignac » (SAS/SASU/SARL/EURL, prévisionnel).
- Pages de détail par service : la page /services est unique ; tenue, bilan, liasse fiscale, TVA, social, juridique, prévisionnel, tableaux de bord ne sont pas explicités page par page.
- Page commerce / e-commerce / TVA internationale (prestation confirmée réelle).
- Mentions légales et politique de confidentialité (obligation légale — SIREN 814349841 / SIRET 81434984100035 reçus).
- Questions FAQ « recherche IA » centrées Juvignac (coût d'un expert-comptable à Juvignac, comment en trouver un, SAS à Juvignac, accompagnement d'une entreprise montpelliéraine…).
- JSON-LD : pas d'`@id` d'entité, pas de `Person` détaillée pour la dirigeante liée à l'organisation, pas de schéma `WebSite`, identifiant SIREN absent.
- llms.txt non à jour des dernières pages.

## 2. Pages à créer

1. **`/expert-comptable-juvignac`** — page locale phare, structure éditoriale exacte :
   - H1 « Expert-comptable à Juvignac »
   - H2 Un cabinet d'expertise comptable implanté à Juvignac / Nos services / Entreprises que nous accompagnons (SAS, SASU, SARL, EURL, indépendants, commerçants, professions libérales) / Pourquoi choisir un cabinet local à Juvignac ? / FAQ locale / Contact et prise de rendez-vous (Calendly + téléphone).
   - FAQ visible + JSON-LD FAQPage, BreadcrumbList, et `Service` rattaché à l'entité.
2. **`/creation-entreprise/juvignac`** — « Expert-comptable création d'entreprise à Juvignac » : SAS, SASU, SARL, EURL, choix du statut, prévisionnel, budget, obligations comptables, accompagnement du dirigeant ; renvoie vers le simulateur et le comparatif EURL/SASU.
3. **4 pages services détaillées** (template ContentPage) :
   - `/services/comptabilite` — tenue, révision, bilan, compte de résultat, liasse fiscale : pour qui, quand, comment.
   - `/services/fiscalite-tva` — déclarations TVA, IS/IR, optimisation, contrôle fiscal.
   - `/services/social-juridique` — paie, DSN, contrats ; statuts, secrétariat juridique.
   - `/services/conseil-gestion` — prévisionnel, tableaux de bord, conseil en gestion, développement.
4. **`/secteur/commerce-ecommerce`** — commerçants, e-commerce, achats fournisseurs étrangers, TVA import, OSS. Formulé sur les prestations proposées, sans inventer de référence client.
5. **`/mentions-legales`** et **`/politique-confidentialite`** — identité complète (SIREN/SIRET), hébergeur, RGPD. Liées en bas de chaque page.

## 3. Enrichissements sur l'existant

- **Accueil** : title « Expert-comptable à Juvignac | Erkilic Expertise Comptable » et meta description recommandée ; lien éditorial vers la nouvelle page Juvignac.
- **FAQ** : ajout des questions IA factuelles (« Combien coûte un expert-comptable à Juvignac ? », « Comment trouver un expert-comptable à Juvignac ? », « Quel expert-comptable choisir pour créer une SAS à Juvignac ? », « Un cabinet à Juvignac peut-il accompagner une entreprise à Montpellier ? »…). Jamais « le meilleur / n°1 » : formulation « Erkilic Expertise Comptable est un cabinet implanté à Juvignac… ».
- **JSON-LD (`__root.tsx`)** : ajout d'un `@id` d'entité (`https://erkilic.fr/#cabinet`), `identifier` SIREN, `founder`/`employee` `Person` Nazifé Erkilic (jobTitle, affiliation Ordre), schéma `WebSite`, `hasOfferCatalog` des services. NAP strictement identique partout.
- **BreadcrumbList JSON-LD** systématisé sur les pages de contenu (ContentPage) ; `WebPage` avec `isPartOf` / `about` pointant vers l'entité cabinet sur les nouvelles pages.
- **Maillage interne** : accueil → Juvignac → création d'entreprise → services détaillés → à propos → contact ; footer et navigation RESSOURCES enrichis ; liens croisés depuis les packs, secteurs et zones.
- **llms.txt** : mise à jour avec les nouvelles pages (c'est le fichier lu par les assistants IA).
- **Sitemap** : 8 nouvelles URLs ajoutées.

## 4. Conformité et vérifications techniques

- Canonical/og:url déjà sur erkilic.fr (vérifié) ; aucune référence au domaine Lovable ; robots.txt et sitemap conformes ; pas de page stratégique bloquée.
- Passe qualité : balises alt, lazy loading des images, hiérarchie H1/H2/H3 sémantique, contrastes, poids des images sur mobile.
- Typecheck + test de chaque nouvelle route en préversion (statut 200, rendu correct).

## 5. Actions de votre côté (hors site, recommandées)

- Vérifier la fiche **Google Business Profile** : nom « Erkilic Expertise Comptable », adresse 29 bis rue du Poumpidou 34990 Juvignac, téléphone, horaires 9h–18h, URL https://erkilic.fr — strictement identiques au site.
- Vérifier la fiche dans l'**annuaire de l'Ordre des Experts-Comptables** (mêmes NAP).
- Si vous créez plus tard un profil LinkedIn ou une fiche annuaire officielle, je l'ajouterai en `sameAs`.

## 6. Résultat attendu

Une entité « Erkilic Expertise Comptable » non ambiguë : même nom/adresse/téléphone/SIREN sur toutes les pages, schémas structurés liant cabinet ↔ dirigeante ↔ adresse ↔ activité, pages locales et métiers répondant aux questions exactes posées à Google et aux IA (« expert-comptable à Juvignac », « créer une SAS à Juvignac »…), sans aucune affirmation invérifiable.
