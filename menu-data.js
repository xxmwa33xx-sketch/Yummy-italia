/* ============================================================
   YUMMY ITALIA — CONTENU DU SITE
   ------------------------------------------------------------
   C'EST LE SEUL FICHIER À MODIFIER POUR CHANGER LE CONTENU.
   Aucune connaissance en code n'est nécessaire : il suffit de
   remplacer le texte entre les guillemets.

   Règles simples :
   - Garder les guillemets " " autour de chaque texte
   - Garder la virgule à la fin de chaque ligne
   - Pour ajouter un plat, copier-coller une ligne { ... } entière
   - Pour supprimer un plat, effacer la ligne { ... } entière
   ============================================================ */

const CONTENU = {

  /* ---------- INFOS DU RESTAURANT ----------
     ⚠️ À COMPLÉTER EN PRIORITÉ : le téléphone alimente tous les
     boutons « Nous appeler » du site. Tant qu'il n'est pas rempli,
     ces boutons ne déclenchent pas d'appel.                      */
  infos: {
    nom: "Yummy Italia",
    adresse: "Avenue Eugène Plasky 81",
    codePostal: "1030",
    ville: "Schaerbeek",
    telephone: "02 318 53 01",

    /* Champs facultatifs : laissés vides, ils disparaissent simplement
       du site (aucune ligne vide, aucun lien mort). Remplissez-les
       le jour où vous les aurez. */
    email: "",
    instagram: "",
    facebook: "",

    /* Lien Google Maps du restaurant. Laissé vide, le bouton
       « Obtenir l'itinéraire » se construit tout seul à partir de
       l'adresse ci-dessus. */
    maps: "",

    horaires: [
      { jour: "Lundi — Vendredi", heures: "10h00 – 22h00" },
      { jour: "Samedi",           heures: "10h00 – 19h00" },
      { jour: "Dimanche",         heures: "Fermé" }
    ]
  },

  /* ---------- LA CARTE DU RESTAURANT ----------
     Les prix s'écrivent librement : "18 €", "18,50 €", "—"…
     Le champ "tag" est une petite étiquette optionnelle. */
  menu: [
    {
      titre: "Entrées",
      soustitre: "Antipasti",
      plats: [
        { nom: "Antipasti burrata & légumes",      description: "Burrata crémeuse et légumes de saison marinés", prix: "18 €", tag: "" },
        { nom: "Antipasti charcuterie & légumes",  description: "Charcuteries italiennes et légumes de saison",   prix: "18 €", tag: "" },
        { nom: "Carpaccio mix de poisson",         description: "Poissons crus du jour, huile d'olive et citron", prix: "21 €", tag: "" },
        { nom: "Carpaccio de bœuf",                description: "Finement tranché, roquette et copeaux",          prix: "18 €", tag: "" },
        { nom: "Provola in carrozza",              description: "Provola panée et dorée, servie chaude",          prix: "14 €", tag: "" }
      ]
    },
    {
      titre: "Plats",
      soustitre: "Primi & secondi",
      plats: [
        { nom: "Pasta aux palourdes",              description: "Vongole, ail, persil et huile d'olive",          prix: "21 €", tag: "" },
        { nom: "Pasta aux couteaux",               description: "Couteaux de mer, préparation minute",            prix: "19 €", tag: "" },
        { nom: "Pasta aux champignons",            description: "Champignons poêlés, crème et parmesan",          prix: "18 €", tag: "" },
        { nom: "Escalope de veau, champignons",    description: "Veau poêlé, sauce aux champignons",              prix: "21 €", tag: "" },
        { nom: "Pasta saucisse & vin rouge",       description: "Saucisse italienne mijotée au vin rouge",        prix: "18 €", tag: "" },
        { nom: "Filet de dorade",                  description: "Poisson du jour, légumes de saison",             prix: "21 €", tag: "" },
        { nom: "Filet de bar",                     description: "Poisson du jour, légumes de saison",             prix: "21 €", tag: "" }
      ]
    },
    {
      titre: "Desserts",
      soustitre: "Dolci",
      plats: [
        { nom: "Tiramisu",       description: "Préparé en grande plaque, servi à la coupe", prix: "6 €", tag: "Fait maison" },
        { nom: "Glace maison",   description: "Parfums selon la préparation du jour",       prix: "6 €", tag: "Fait maison" }
      ]
    }
  ],

  /* ---------- CARTE DES VINS (optionnelle) ----------
     Tant que les noms contiennent « [À COMPLÉTER] », la liste
     ne s'affiche pas sur le site : seule la présentation de la
     cave reste visible. Dès que vous remplissez de vrais noms,
     la liste apparaît automatiquement.                          */
  vins: [
    {
      titre: "Vins rouges", soustitre: "Rossi",
      bouteilles: [
        { nom: "[À COMPLÉTER : nom du vin]", region: "[À COMPLÉTER : région]", prix: "—" }
      ]
    },
    {
      titre: "Vins blancs", soustitre: "Bianchi",
      bouteilles: [
        { nom: "[À COMPLÉTER : nom du vin]", region: "[À COMPLÉTER : région]", prix: "—" }
      ]
    }
  ],

  /* ---------- GALERIE (page Événements) ---------- */
  galerie: [
    { image: "lasagne-blanche.jpg",   legende: "Lasagne" },
    { image: "tiramisu-service.jpg",  legende: "Tiramisu" },
    { image: "comptoir-vitrine.jpg",  legende: "Le comptoir" },
    { image: "plat-antipasti.jpg",    legende: "Antipasti" },
    { image: "comptoir-pates.jpg",    legende: "Pâtes du jour" },
    { image: "terrasse.jpg",          legende: "La terrasse" }
  ]
};
