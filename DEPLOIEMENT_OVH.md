# Déploiement sur OVH — Cabinet Erkilic

## 1. Formulaire de contact → cabinet@erkilic.fr

Le formulaire de la page `/contact` déclenche actuellement l'ouverture du
client mail de l'utilisateur (via `mailto:`) avec un message pré-rempli
adressé à **cabinet@erkilic.fr**. C'est simple et sans backend, mais
ça nécessite que l'utilisateur ait un client mail configuré.

### Pour un vrai envoi automatique côté serveur (recommandé)

Une fois le site déployé sur votre VPS OVH, plusieurs options :

**Option A — Formspree / Web3Forms (0 backend)**
1. Créer un compte sur https://formspree.io ou https://web3forms.com
2. Renseigner `cabinet@erkilic.fr` comme destinataire
3. Récupérer l'endpoint (ex. `https://formspree.io/f/abcd1234`)
4. Dans `src/routes/contact.tsx`, remplacer le `handleSubmit` par un `fetch(endpoint, { method: "POST", body: formData })`

**Option B — Endpoint serveur sur votre VPS**
Créer une TanStack server function qui utilise `nodemailer` avec les
identifiants SMTP de votre boîte OVH :
- Serveur : `ssl0.ovh.net`
- Port : `465` (SSL) ou `587` (TLS)
- Utilisateur : `cabinet@erkilic.fr`
- Mot de passe : celui de votre boîte mail OVH

## 2. Import du site Lovable sur un VPS OVH

Suivre le guide officiel :
👉 https://docs.ovhcloud.com/fr/guides/bare-metal-cloud/virtual-private-servers/import-lovable-website-on-vps

Étapes clés :
1. Commander un VPS OVH (Value ou Essential suffit pour ce site)
2. Publier votre projet Lovable et récupérer l'URL de production
3. Suivre les étapes du guide pour importer le build sur le VPS
4. Configurer votre nom de domaine (ex. `erkilic.fr`) via l'espace OVH
5. Activer HTTPS via Let's Encrypt (documenté par OVH)

## 3. Prise de rendez-vous Calendly

Le widget Calendly est déjà présent sur `/contact`. Il pointe vers un
compte de démonstration. Pour utiliser votre propre agenda :

1. Créer un compte sur https://calendly.com
2. Créer un événement « Premier échange — 30 min »
3. Récupérer l'URL (ex. `https://calendly.com/cabinet-erkilic/30min`)
4. Dans `src/routes/contact.tsx`, remplacer la valeur de `data-url` du
   `<div className="calendly-inline-widget">`

## 4. Après la mise en production

- Mettre à jour `SITE` dans les fichiers `src/routes/*.tsx` et `src/routes/sitemap[.]xml.ts` avec votre domaine final (ex. `https://www.erkilic.fr`)
- Mettre à jour `public/robots.txt` (ligne `Sitemap:`)
- Soumettre votre `sitemap.xml` sur Google Search Console
- Vérifier l'inscription du cabinet sur Google Business Profile (photo, horaires, avis)
