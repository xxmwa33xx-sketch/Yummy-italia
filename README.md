# Yummy Italia — Site vitrine

Site statique du restaurant et service traiteur **Yummy Italia** (Bruxelles).
HTML / CSS / JavaScript purs — **aucune dépendance, aucun build**. On ouvre un
fichier, on modifie, on enregistre. C'est tout.

---

## 1. Structure du projet

```
yummy-italia/
├── index.html          ← Page d'accueil (hero, spécialités, services, carte, vins, contact)
├── evenements.html     ← Page Événements & Traiteur (+ formulaire de devis)
├── merci.html          ← Page de confirmation après envoi du formulaire
├── netlify.toml        ← Configuration du déploiement Netlify
├── css/
│   └── style.css       ← Toute la mise en forme du site
├── js/
│   ├── menu-data.js    ← ⭐ TOUT LE CONTENU (menu, vins, coordonnées, photos)
│   └── main.js         ← Affichage automatique du contenu (à ne pas toucher)
└── images/             ← Toutes les photos du site
```

**En pratique, 90 % des mises à jour se font dans un seul fichier :
`js/menu-data.js`.**

---

## 2. Ajouter ou modifier un plat

Ouvrir `js/menu-data.js`, chercher la section `menu:`, puis modifier les lignes.
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

## 3. Ajouter ou modifier un vin

Même principe, dans la section `vins:` de `js/menu-data.js` :

```js
{ nom: "Barbera d'Alba", region: "Piémont — DOC", prix: "32 €" },
```

Les catégories existantes sont : Vins rouges, Vins blancs, Vins rosés, Pétillants.

---

## 4. Ajouter les photos

Toutes les photos vont dans le dossier `images/`. **Il n'y a rien à modifier
dans le code** : chaque emplacement photo affiche un bloc placeholder tant que
le fichier n'existe pas, et affiche automatiquement la photo dès qu'elle est
déposée au bon nom.

Le nom de fichier attendu est écrit **directement dans le placeholder** sur le
site (par exemple `images/hero-restaurant.jpg`). Il suffit de nommer sa photo
comme indiqué et de la déposer dans `images/`.

### Photos attendues

| Fichier                          | Emplacement                          |
|----------------------------------|--------------------------------------|
| `hero-restaurant.jpg`            | Grande photo de la page d'accueil    |
| `ambiance-salle.jpg`             | Section contact (accueil)            |
| `specialite-pates-fraiches.jpg`  | Card spécialité n°1                  |
| `specialite-plat-signature.jpg`  | Card spécialité n°2                  |
| `specialite-dessert.jpg`         | Card spécialité n°3                  |
| `evenement-hero.jpg`             | Grande photo de la page Événements   |
| `evenement-mariage-01.jpg`       | Galerie événements                   |
| `evenement-mariage-02.jpg`       | Galerie événements                   |
| `evenement-anniversaire-01.jpg`  | Galerie événements                   |
| `evenement-entreprise-01.jpg`    | Galerie événements                   |
| `evenement-buffet-01.jpg`        | Galerie événements                   |
| `evenement-table-01.jpg`         | Galerie événements                   |
| `og-image.jpg`                   | Aperçu lors d'un partage sur réseaux |

Pour **changer le nom d'une photo** ou en **ajouter une nouvelle** (spécialités,
galerie), il suffit de modifier le champ `image:` correspondant dans
`js/menu-data.js`.

### Conseils techniques
- Format **JPG**, largeur **1600 px maximum**, poids **< 300 Ko** par photo
- Cadrage : les photos sont recadrées automatiquement, garder le sujet au centre
- `og-image.jpg` idéalement en 1200 × 630 px

---

## 5. Modifier les coordonnées et les horaires

Toujours dans `js/menu-data.js`, section `infos:` en haut du fichier :
adresse, téléphone, e-mail, liens Instagram / Facebook et horaires.
Ces informations sont utilisées automatiquement partout sur le site
(pied de page, section contact, boutons d'appel).

---

## 6. Voir le site en local

Double-cliquer sur `index.html` suffit dans la plupart des cas.
Pour une prévisualisation plus fidèle (avec un vrai serveur) :

```bash
# avec Python (déjà installé sur macOS)
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

---

## 7. Déploiement sur Netlify

1. Pousser le dépôt sur GitHub (voir section 8).
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

## 8. Connecter ce dépôt local à GitHub

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

## 9. Direction artistique (pour information)

- **Couleurs** — beige chaud (`#FBF4E8`, `#F4E7D1`), brun (`#4A3220`, `#2E1F14`),
  jaune chaud en couleur principale (`#F3C243`, `#E8A81C`), avec le vert (`#4E7A46`)
  et le rouge (`#B23A26`) italiens en accents ponctuels uniquement.
- **Typographie** — *Fraunces* pour les titres (serif chaleureuse et légèrement
  irrégulière), *Karla* pour le texte courant.
- **Élément signature** — le ruban « tagliatelle » ondulé, présent en haut de page,
  sous chaque titre de section et en séparateur.
- **Responsive** — conçu mobile-first, testé de 360 px à 1600 px.

Toutes les couleurs sont regroupées en haut de `css/style.css` (section
« VARIABLES ») : les modifier là les change partout sur le site.
