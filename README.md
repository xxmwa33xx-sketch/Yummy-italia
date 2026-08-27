# Yummy Italia — Site vitrine

Site statique du restaurant et service traiteur **Yummy Italia** (Bruxelles).
HTML / CSS / JavaScript purs — **aucune dépendance, aucun build**. On ouvre un
fichier, on modifie, on enregistre. C'est tout.

---

## 1. Ordre de la page d'accueil

1. **Hero** — la photo de la salle en arche, façon porte italienne
2. **Sur place · À emporter · Événements** — les trois possibilités, en rangée que l'on fait glisser
3. **La carte** — la carte permanente + l'explication de la cuisine qui évolue
4. **Nos spécialités** — pâtes, lasagne, tiramisu et sandwich italien, présentés ensemble
5. **Vini italiani** — bande photographique sur le tableau de la salle
6. **Épicerie, traiteur & dégustation**
7. **Événements** — courte introduction + bouton vers la page dédiée
8. **Passer nous voir** — adresse, téléphone, horaires, itinéraire

La page **`evenements.html`** est construite autour du contenu — un seul H1,
des H2/H3 logiques, une FAQ en accordéons, un formulaire — et pensée pour le
référencement sur les recherches de type « traiteur italien Bruxelles ».
Quatre photos seulement l'aèrent : deux bandes d'ambiance pleine largeur et
les deux visuels de la section « Deux façons de profiter de notre cuisine ».

Les deux pages portent des **données structurées** `Restaurant` (adresse,
téléphone, horaires, offre traiteur). Volontairement **pas** de balisage
`FAQPage` : il ne servirait qu'à courir après un résultat enrichi.

---

## 2. Structure du projet

Tous les fichiers sont à la racine, dans un seul dossier — rien n'est rangé
dans des sous-dossiers. C'est volontaire : ça évite toute erreur de chemin
lors des mises en ligne.

```
yummy-italia/
├── index.html       ← Page d'accueil (hero, spécialités, services, carte, vins, contact)
├── evenements.html  ← Page Événements dédiée (+ formulaire de demande)
├── merci.html       ← Page de confirmation après envoi du formulaire
├── menu-data.js     ← ⭐ TOUT LE CONTENU (menu, vins, coordonnées, photos)
├── main.js          ← Affichage automatique du contenu (à ne pas toucher)
├── style.css        ← Toute la mise en forme du site
├── favicon.svg      ← Icône affichée dans l'onglet du navigateur
├── netlify.toml     ← Configuration du déploiement Netlify
└── *.jpg           ← Les photos du restaurant (27 fichiers)
```

**En pratique, 90 % des mises à jour se font dans un seul fichier :
`menu-data.js`.**

---

## 3. Ce qui reste à compléter

Les coordonnées réelles du restaurant sont désormais en place dans
`menu-data.js` : **Avenue Eugène Plasky 81, 1030 Schaerbeek**, téléphone
**02 318 53 01**, ouvert du lundi au vendredi 10h–22h, samedi 10h–19h,
fermé le dimanche. Les neuf boutons « Nous appeler » et le bouton
« Obtenir l'itinéraire » fonctionnent.

Restent facultatifs, à remplir le jour où ils existeront :

| Champ | Effet |
|---|---|
| `email` | Vide, la ligne e-mail n'apparaît simplement pas. |
| `instagram`, `facebook` | Vides, le bloc d'icônes du pied de page est masqué. |
| `maps` | Vide, le bouton d'itinéraire se construit à partir de l'adresse. |
| `vins` | Vide, seule la présentation de la cave s'affiche, avec la mention « carte des vins à venir ». |

Le principe est le même partout : **une information absente disparaît du
site** au lieu de laisser un blanc ou un lien mort.

### À valider avec le restaurant

La page Événements décrivait des engagements précis qui n'avaient jamais
été confirmés (délai de réponse chiffré, livraison, mise en place sur
site, mariages). Ils ont été remplacés par des formulations neutres.
Si ces prestations existent réellement, les détails peuvent être
réintroduits — mais mieux vaut les confirmer avant de les promettre.

Le formulaire de devis envoie vers **Netlify Forms** : il reste à indiquer
l'adresse qui recevra les demandes (*Forms → Form notifications* dans le
tableau de bord Netlify).

Enfin, les **mentions légales** et la **politique de confidentialité**
n'existent pas encore. Elles sont obligatoires dès lors qu'un formulaire
collecte des données. Il faut pour cela la dénomination légale, le numéro
d'entreprise et le siège social.

---

## 4. Ajouter ou modifier un plat

Ouvrir `menu-data.js`, chercher la section `menu:`, puis modifier les lignes.
Chaque plat ressemble à ceci :

```js
{ nom: "Tagliatelle al ragù", description: "Ragù de bœuf mijoté 6 heures", prix: "18 €", tag: "Fait maison" },
```

- **nom** — le nom du plat
- **description** — une phrase courte (peut rester vide : `""`)
- **prix** — écrit comme on veut : `"18 €"`, `"18,50 €"`, `"—"`
- **tag** — petite étiquette optionnelle : `"Fait maison"`, `"Végétarien"`, `"Nouveau"`… ou `""` pour aucune

**Ajouter un plat** → copier une ligne entière et la coller en dessous, puis modifier le texte.
**Supprimer un plat** → effacer la ligne entière (de `{` à `},`).
**Ajouter une catégorie** → copier un bloc complet `{ titre: … , plats: [ … ] },`.

Les mentions `[À COMPLÉTER]` présentes partout sont là pour être remplacées.

---

## 5. Ajouter ou modifier un vin

Même principe, dans la section `vins:` de `menu-data.js` :

```js
{ nom: "Barbera d'Alba", region: "Piémont — DOC", prix: "32 €" },
```

Les catégories existantes sont : Vins rouges et Vins blancs.

Tant que les noms contiennent `[À COMPLÉTER]`, **la liste ne s'affiche pas** sur
le site : seule la présentation de la cave reste visible. Dès que de vrais noms
sont saisis, la liste apparaît automatiquement.

---

## 6. Les photos

Les photos se déposent à la racine du projet, à côté des fichiers HTML.
**Il n'y a rien à modifier
dans le code** : chaque emplacement photo affiche un bloc placeholder tant que
le fichier n'existe pas, et affiche automatiquement la photo dès qu'elle est
déposée au bon nom.

Le nom de fichier attendu est écrit **directement dans le placeholder** sur le
site (par exemple `hero-restaurant.jpg`). Il suffit de nommer sa photo
comme indiqué et de la déposer dans le dossier du projet.

### Photos déjà en place

Les photos du restaurant ont été sélectionnées, recadrées et optimisées pour le
web. Pour remplacer l'une d'elles, il suffit de déposer une nouvelle photo au
**même nom de fichier** — rien à modifier dans le code.

| Fichier | Où elle apparaît |
|---|---|
| `salle-interieur.jpg` | L'arche du hero |
| `terrasse.jpg` | Sur place |
| `comptoir.jpg` | À emporter |
| `chef.jpg` | Événements |
| `specialite-pates.jpg` | Spécialité — les pâtes |
| `specialite-lasagne.jpg` | Spécialité — la lasagne |
| `dolci-tiramisu.jpg` | Spécialité — le tiramisu |
| `sandwich-italien.jpg` | Spécialité — le sandwich italien |
| `tableau-vin.jpg` | Fond de la bande « Vini italiani » |
| `cave-vins.jpg` | Épicerie, traiteur & dégustation |
| `epicerie-produits.jpg` | Épicerie, traiteur & dégustation |
| `epicerie-vitrine.jpg` | Épicerie, traiteur & dégustation |
| `comptoir-vitrine.jpg` | Introduction événements (accueil) |
| `facade-terrasse.jpg` | Section contact de l'accueil |
| `og-image.jpg` | Aperçu lors d'un partage sur les réseaux |

Sur la **page Événements**, les photos ne sont plus des vignettes : elles servent
de **fond de section**, avec un voile brun par-dessus pour garder le texte
lisible. Ces fonds portent tous le préfixe `fond-`.

| Fichier | Section qu'elle habille |
|---|---|
| `fond-hero.jpg` | Le hero — la façade et la terrasse |
| `fond-cuisine.jpg` | « Un repas italien pour votre groupe » — le comptoir garni |
| `fond-buffet.jpg` | Panneau « Buffet & self-service » |
| `fond-assiette.jpg` | Panneau « Service en assiette » |
| `fond-capacites.jpg` | « Capacité et délais » — la terrasse |
| `fond-salle.jpg` | « Parlons de votre événement » — la salle |
| `fond-cta.jpg` | « Passez nous voir » — la façade et l'enseigne |

Pour changer l'un de ces fonds : déposez la nouvelle photo au même nom de
fichier. Les bandes horizontales fonctionnent mieux avec une photo **au format
paysage** (16/9), les deux panneaux avec une photo **verticale** (3/4). Si le
cadrage tombe mal, ajustez la ligne correspondante dans `style.css`, section 18 :
`background-position: center 55%` — un pourcentage plus petit remonte l'image,
un plus grand la descend.

Les photos suivantes restent dans le dossier sans être utilisées sur la page
d'accueil, elles peuvent servir de remplacement : `comptoir-pates.jpg`,
`comptoir-poulpe.jpg`, `comptoir-arancini.jpg`, `plat-antipasti.jpg`,
`plat-poisson.jpg`, `plat-charcuterie.jpg`, `plat-burrata.jpg`,
`plat-pasta-couteaux.jpg`, `plat-filet.jpg`, `legumes-grilles.jpg`,
`lasagne-blanche.jpg`, `tiramisu-service.jpg`, `pates-ragu.jpg`.

### Conseils techniques
- Format **JPG**, largeur **1600 px maximum**, poids **< 300 Ko** par photo
- Cadrage : les photos sont recadrées automatiquement, garder le sujet au centre
- `og-image.jpg` idéalement en 1200 × 630 px

---

## 7. Modifier les coordonnées et les horaires

Toujours dans `menu-data.js`, section `infos:` en haut du fichier :
adresse, téléphone, e-mail, liens Instagram / Facebook et horaires.
Ces informations sont utilisées automatiquement partout sur le site
(pied de page, section contact, boutons d'appel).

---

## 8. Voir le site en local

Double-cliquer sur `index.html` suffit dans la plupart des cas.
Pour une prévisualisation plus fidèle (avec un vrai serveur) :

```bash
# avec Python (déjà installé sur macOS)
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

---

## 9. Déploiement sur Netlify

1. Pousser le dépôt sur GitHub (voir section 10).
2. Sur [netlify.com](https://netlify.com) → **Add new site → Import an existing project**.
3. Choisir le dépôt `yummy-italia`.
4. Laisser les réglages par défaut — `netlify.toml` s'en charge (pas de build, publication à la racine).
5. **Deploy**.

Ensuite, dans **Domain settings**, brancher le domaine `yummy-italia.com`.
Le HTTPS est activé automatiquement par Netlify.

### Formulaire de devis
Le formulaire de la page Événements est prêt pour **Netlify Forms** (attribut
`data-netlify="true"`). Dès le premier déploiement, les demandes arrivent dans
l'onglet **Forms** du tableau de bord Netlify. Pour recevoir une alerte e-mail à
chaque demande : *Forms → Settings → Form notifications → Add notification*.

---

## 10. Connecter ce dépôt local à GitHub

Créer d'abord un dépôt **vide** nommé `yummy-italia` sur GitHub
(sans README, sans .gitignore, sans licence), puis :

```bash
cd chemin/vers/yummy-italia

git remote add origin https://github.com/VOTRE-COMPTE/yummy-italia.git
git branch -M main
git push -u origin main
```

Pour les mises à jour suivantes :

```bash
git add .
git commit -m "Ajout des photos et de la carte"
git push
```

Chaque `git push` redéclenche automatiquement le déploiement sur Netlify.

---

## 11. Direction artistique (pour information)

- **Couleurs** — beige chaud (`#FBF4E8`, `#F4E7D1`), brun (`#4A3220`, `#2E1F14`),
  jaune chaud en couleur d'accent principale (`#F3C243`, `#E8A81C`), avec le vert
  (`#3F6B41`) et le rouge (`#A62B21`) italiens réservés aux filets, étiquettes et
  bordures — jamais en aplat dominant.
- **Typographie** — *Fraunces* pour les titres (serif chaleureuse et légèrement
  irrégulière), *Karla* pour le texte courant.
- **Éléments signature** — le **filet tricolore** vert / blanc / rouge (bande fine
  en haut de page et du pied de page, court trait sous les titres, double filet
  encadrant la section Carte) et **l'arche**, qui donne sa forme aux photos de hero
  comme une porte italienne, doublée de deux contours décalés vert et jaune.
- **Aucun motif ondulé** : les sections se séparent par les espaces, les changements
  de fond et de fines lignes.
- **Peu de cartes** — services, occasions et capacités sont des colonnes ouvertes
  surmontées d'un simple filet coloré, pas des tuiles à coins arrondis.
- **Rythme** — sections crème et beige, une seule respiration sombre (les sandwichs)
  et la bande photographique du tableau de la salle.
- **Les photos** portent le site : grandes images, peu de décor graphique.
- **Responsive** — conçu mobile-first, testé de 360 px à 1600 px.

Toutes les couleurs sont regroupées en haut de `style.css` (section
« VARIABLES ») : les modifier là les change partout sur le site.
