# Au fil de Nath — Rapport pré-lancement

*Généré le 19 juin 2026*

---

## ✅ Modifications appliquées automatiquement

### 1. Formulaires → email corrigé + redirect configuré

| Fichier | Modification |
|---|---|
| `formulaire-produit.html` | Email FormSubmit → `aufildenath72@gmail.com` |
| `formulaire-libre.html` | Email FormSubmit → `aufildenath72@gmail.com` |
| `echec.html` | Lien mailto → `aufildenath72@gmail.com` |
| `formulaire-produit.html` | Ajout `_next` → `https://aufildenath.fr/merci.html` |
| `formulaire-libre.html` | Ajout `_next` → `https://aufildenath.fr/merci.html` |

### 2. SEO & indexation

| Fichier | Modification |
|---|---|
| `parler-de-mon-projet.html` | Ajout `<meta name="description">` |
| `formulaire-libre.html` | Ajout `<meta name="robots" content="noindex">` |
| `formulaire-produit.html` | Ajout `<meta name="robots" content="noindex">` |
| `merci.html` | Ajout `<meta name="robots" content="noindex">` |
| `echec.html` | Ajout `<meta name="robots" content="noindex">` |

### 3. Favicon

Toutes les pages ont reçu :
```html
<link rel="icon" href="assets/logo%20seul%20final.svg" type="image/svg+xml">
```
Compatible Chrome, Firefox, Safari, Edge (pas IE, mais IE n'est plus un enjeu en 2026).

### 4. Mentions légales

- Suppression du bloc `⚠ À vérifier` (note de dev, visible en prod)
- Hébergeur mis à jour : Cloudflare → **Netlify**

---

## 🔍 Résultats de la vérification globale

### Liens internes — ✅ OK
Toutes les pages se référencent entre elles via `index.html`, `boutique.html`, `parler-de-mon-projet.html`, `formulaire-libre.html`, `fiche-produit.html?p=`, `formulaire-produit.html?p=`, `merci.html`, `echec.html`, `mentions-legales.html`. Aucun `href="#"` orphelin détecté.

### Liens externes — ✅ OK
- Instagram : `https://www.instagram.com/au_fil_de_nath/` → lien actif
- Vinted : lien long avec UTM → actif
- Google Fonts : importé via `preconnect` + `link` → OK
- CNIL (mentions légales) : `https://www.cnil.fr` → institutionnel
- Plausible : `https://plausible.io/privacy` → actif

### Images et attributs `alt` — ✅ OK
- Toutes les images décoratives ont `alt=""` + `aria-hidden="true"`
- Toutes les images de contenu ont un `alt` descriptif
- Images produits référencées dans `formulaire-produit.html` et `boutique.html` → présentes dans `Pages figma/fiches et formulaires produits/photos produits/`
- Images galerie Accueil → présentes dans `Photos produits/`

### Responsive — ✅ OK
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` présent sur toutes les pages
- Media queries détectées dans `header.css`, `formulaire-produit.html` (`max-width: 768px`), `merci.html`, `echec.html`

### `<title>` et `<meta description>` — ✅ OK après corrections
| Page | title | description |
|---|---|---|
| `index.html` | ✅ | ✅ |
| `boutique.html` | ✅ | ✅ |
| `parler-de-mon-projet.html` | ✅ | ✅ (ajouté) |
| `fiche-produit.html` | ✅ | ✅ |
| `formulaire-produit.html` | ✅ | — (noindex) |
| `formulaire-libre.html` | ✅ | — (noindex) |
| `merci.html` | ✅ | — (noindex) |
| `echec.html` | ✅ | — (noindex) |
| `mentions-legales.html` | ✅ | — (noindex) |

### Mentions légales — ✅ OK
- Page `mentions-legales.html` présente et complète
- RGPD, bases légales, droits utilisateur, durée de conservation → couverts
- FormSubmit mentionné en tant que sous-traitant → OK
- Contact RGPD renseigné → OK

### Console.log / commentaires dev — ✅ Aucun trouvé
Recherche dans tous les `.js` et `.html` : **0 résultat**.

### Favicon — ✅ OK après correction
`logo seul final.svg` ajouté sur les 9 pages.

### Performances — ⚠️ Points d'attention
- Images au format `.png` et `.jfif` non compressées (taille non optimisée)
- **Recommandation :** convertir en WebP avant mise en ligne (outil gratuit : [squoosh.app](https://squoosh.app))
- Google Fonts chargées via `preconnect` → bonne pratique déjà en place
- Pas de ressource JS bloquante détectée (tous les scripts sont en bas de `<body>`)

---

## 🔧 Activation du système de formulaire (FormSubmit.co)

**FormSubmit ne nécessite aucune inscription.** L'activation se fait via le premier envoi.

### Étapes d'activation (à faire APRÈS mise en ligne)

1. **Déployer le site** (voir section Netlify ci-dessous)
2. **Ouvrir le formulaire en ligne** (`formulaire-libre.html` ou `formulaire-produit.html`)
3. **Soumettre un message de test** avec un vrai prénom + l'adresse email de Nath
4. **FormSubmit envoie un email d'activation** à `aufildenath72@gmail.com` avec un lien de confirmation
5. **Cliquer sur le lien** dans cet email — l'activation est immédiate
6. **Tester à nouveau** : le formulaire doit rediriger vers `merci.html` et l'email doit arriver dans la boîte Gmail

> ⚠️ Vérifier les **spams** si l'email d'activation ne s'affiche pas dans la boîte de réception.

### Ce que Nath recevra à chaque soumission
- **Objet** : "Nouvelle demande — [nom du produit]" ou "Nouveau projet sur-mesure — Au fil de Nath"
- **Corps** : tableau HTML avec tous les champs remplis
- **Reply-to** : l'email saisi par la personne (permet de répondre directement)

---

## 🚀 Mise en ligne — Netlify (recommandé)

Netlify est la solution la plus simple pour héberger un site statique : **drag & drop, HTTPS automatique, domaine personnalisé inclus**.

### Déploiement en drag & drop

1. Aller sur [app.netlify.com](https://app.netlify.com) → créer un compte gratuit (avec Gmail)
2. Sur la page d'accueil, glisser-déposer **le dossier entier du site** (`Au fil de Nath - SITE (pret a deployer)`) dans la zone prévue
3. Netlify génère une URL temporaire type `https://amazing-name-123.netlify.app` en 30 secondes
4. Tester le site sur cette URL avant de connecter le domaine

### Connecter le domaine `aufildenath.fr`

**Option A — Acheter le domaine chez Netlify (le plus simple)**
1. Dans Netlify → Domain management → "Add or register a domain"
2. Rechercher `aufildenath.fr` → acheter (~12 €/an)
3. Netlify configure tout automatiquement (DNS + HTTPS)

**Option B — Acheter ailleurs (OVH, Gandi, O2Switch…) et connecter à Netlify**
1. Acheter le domaine chez le registrar
2. Dans le panneau DNS du registrar, pointer les nameservers vers ceux de Netlify :
   ```
   dns1.p07.nsone.net
   dns2.p07.nsone.net
   dns3.p07.nsone.net
   dns4.p07.nsone.net
   ```
3. Dans Netlify → Domain settings → ajouter `aufildenath.fr` et `www.aufildenath.fr`
4. HTTPS s'active automatiquement via Let's Encrypt (gratuit)

> Le délai de propagation DNS est de 1 à 24 h.

---

## ✅ Checklist Go / No-go

### FORMULAIRES
- [ ] Email FormSubmit = `aufildenath72@gmail.com` *(fait)*
- [ ] `_next` pointe vers `https://aufildenath.fr/merci.html` *(fait)*
- [ ] Activation FormSubmit réalisée (test envoi → email reçu → lien cliqué)
- [ ] Test complet : formulaire produit → email reçu dans Gmail
- [ ] Test complet : formulaire libre → email reçu dans Gmail
- [ ] Redirection vers `merci.html` fonctionne après envoi

### SEO & TECHNIQUE
- [ ] Favicon visible dans l'onglet du navigateur *(fait)*
- [ ] Meta descriptions présentes sur `index.html`, `boutique.html`, `parler-de-mon-projet.html` *(fait)*
- [ ] Pages utilitaires en `noindex` (`merci`, `echec`, formulaires) *(fait)*
- [ ] Note de dev `.legal__todo` supprimée des mentions légales *(fait)*
- [ ] Hébergeur mentions légales = Netlify *(fait)*

### CONTENU
- [ ] Toutes les photos s'affichent correctement sur le site déployé
- [ ] Les liens Instagram et Vinted sont actifs
- [ ] Le carrousel de la boutique fonctionne (flèches suivant/précédent)
- [ ] La fiche produit se charge avec `?p=turbulette` (et autres slugs)
- [ ] Le menu hamburger fonctionne sur mobile

### HÉBERGEMENT
- [ ] Site déployé sur Netlify (drag & drop)
- [ ] URL temporaire `.netlify.app` testée et fonctionnelle
- [ ] Domaine `aufildenath.fr` réservé
- [ ] DNS connecté à Netlify
- [ ] HTTPS actif (cadenas vert dans le navigateur)
- [ ] URL finale testée : `https://aufildenath.fr`

### PERFORMANCES
- [ ] (Optionnel) Images converties en WebP via squoosh.app
- [ ] Temps de chargement de la page d'accueil < 3 s sur mobile (tester via PageSpeed Insights)

---

*Site prêt à publier dès que toutes les cases sont cochées.* 🎉
