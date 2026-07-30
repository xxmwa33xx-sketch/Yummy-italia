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
   - "image" = nom du fichier à déposer dans le dossier /images/
     Tant que la photo n'existe pas, un bloc placeholder s'affiche.
   ============================================================ */

const CONTENU = {

  /* ---------- INFOS DU RESTAURANT (utilisées dans le footer) ---------- */
  infos: {
    nom: "Yummy Italia",
    adresse: "[À COMPLÉTER : rue et numéro]",
    codePostal: "[À COMPLÉTER]",
    ville: "Bruxelles",
    telephone: "[À COMPLÉTER : +32 ...]",
    email: "[À COMPLÉTER : contact@yummy-italia.com]",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    horaires: [
      { jour: "Lundi",             heures: "Fermé" },
      { jour: "Mardi — Jeudi",     heures: "12h00 – 14h30  ·  18h00 – 22h30" },
      { jour: "Vendredi — Samedi", heures: "12h00 – 14h30  ·  18h00 – 23h30" },
      { jour: "Dimanche",          heures: "12h00 – 15h00" }
    ]
  },

  /* ---------- LES SPÉCIALITÉS DU CHEF (page d'accueil) ---------- */
  /* 3 à 6 cards recommandées. */
  specialites: [
    {
      nom: "[À COMPLÉTER : nom du plat]",
      description: "Pâtes fraîches faites maison chaque matin, roulées à la main.",
      image: "specialite-pates-fraiches.jpg",
      badge: "Fait maison"
    },
    {
      nom: "[À COMPLÉTER : nom du plat]",
      description: "Produits frais sélectionnés chaque semaine chez nos producteurs.",
      image: "specialite-plat-signature.jpg",
      badge: "Frais du jour"
    },
    {
      nom: "[À COMPLÉTER : nom du dessert]",
      description: "Desserts préparés le jour même, dans la plus pure tradition.",
      image: "specialite-dessert.jpg",
      badge: "Fait maison"
    }
  ],

  /* ---------- LA CARTE DU RESTAURANT ---------- */
  /* Pour ajouter une catégorie, copier un bloc { titre: ..., plats: [...] } */
  menu: [
    {
      titre: "Antipasti",
      soustitre: "Pour commencer",
      plats: [
        { nom: "[À COMPLÉTER]", description: "[À COMPLÉTER : description du plat]", prix: "—", tag: "" },
        { nom: "[À COMPLÉTER]", description: "[À COMPLÉTER : description du plat]", prix: "—", tag: "" },
        { nom: "[À COMPLÉTER]", description: "[À COMPLÉTER : description du plat]", prix: "—", tag: "Végétarien" }
      ]
    },
    {
      titre: "Primi Piatti",
      soustitre: "Pâtes fraîches & risotti",
      plats: [
        { nom: "[À COMPLÉTER]", description: "[À COMPLÉTER : description du plat]", prix: "—", tag: "Fait maison" },
        { nom: "[À COMPLÉTER]", description: "[À COMPLÉTER : description du plat]", prix: "—", tag: "" },
        { nom: "[À COMPLÉTER]", description: "[À COMPLÉTER : description du plat]", prix: "—", tag: "" },
        { nom: "[À COMPLÉTER]", description: "[À COMPLÉTER : description du plat]", prix: "—", tag: "" }
      ]
    },
    {
      titre: "Secondi Piatti",
      soustitre: "Viandes & poissons",
      plats: [
        { nom: "[À COMPLÉTER]", description: "[À COMPLÉTER : description du plat]", prix: "—", tag: "" },
        { nom: "[À COMPLÉTER]", description: "[À COMPLÉTER : description du plat]", prix: "—", tag: "" },
        { nom: "[À COMPLÉTER]", description: "[À COMPLÉTER : description du plat]", prix: "—", tag: "" }
      ]
    },
    {
      titre: "Contorni",
      soustitre: "Accompagnements",
      plats: [
        { nom: "[À COMPLÉTER]", description: "[À COMPLÉTER : description]", prix: "—", tag: "" },
        { nom: "[À COMPLÉTER]", description: "[À COMPLÉTER : description]", prix: "—", tag: "" }
      ]
    },
    {
      titre: "Dolci",
      soustitre: "Desserts frais du jour",
      plats: [
        { nom: "[À COMPLÉTER]", description: "[À COMPLÉTER : description du dessert]", prix: "—", tag: "Fait maison" },
        { nom: "[À COMPLÉTER]", description: "[À COMPLÉTER : description du dessert]", prix: "—", tag: "" },
        { nom: "[À COMPLÉTER]", description: "[À COMPLÉTER : description du dessert]", prix: "—", tag: "" }
      ]
    }
  ],

  /* ---------- LA CARTE DES VINS ---------- */
  vins: [
    {
      titre: "Vins rouges",
      soustitre: "Rossi",
      bouteilles: [
        { nom: "[À COMPLÉTER : nom du vin]", region: "[À COMPLÉTER : région / appellation]", prix: "—" },
        { nom: "[À COMPLÉTER : nom du vin]", region: "[À COMPLÉTER : région / appellation]", prix: "—" },
        { nom: "[À COMPLÉTER : nom du vin]", region: "[À COMPLÉTER : région / appellation]", prix: "—" }
      ]
    },
    {
      titre: "Vins blancs",
      soustitre: "Bianchi",
      bouteilles: [
        { nom: "[À COMPLÉTER : nom du vin]", region: "[À COMPLÉTER : région / appellation]", prix: "—" },
        { nom: "[À COMPLÉTER : nom du vin]", region: "[À COMPLÉTER : région / appellation]", prix: "—" },
        { nom: "[À COMPLÉTER : nom du vin]", region: "[À COMPLÉTER : région / appellation]", prix: "—" }
      ]
    },
    {
      titre: "Vins rosés",
      soustitre: "Rosati",
      bouteilles: [
        { nom: "[À COMPLÉTER : nom du vin]", region: "[À COMPLÉTER : région / appellation]", prix: "—" },
        { nom: "[À COMPLÉTER : nom du vin]", region: "[À COMPLÉTER : région / appellation]", prix: "—" }
      ]
    },
    {
      titre: "Pétillants",
      soustitre: "Bollicine",
      bouteilles: [
        { nom: "[À COMPLÉTER : nom du vin]", region: "[À COMPLÉTER : région / appellation]", prix: "—" },
        { nom: "[À COMPLÉTER : nom du vin]", region: "[À COMPLÉTER : région / appellation]", prix: "—" }
      ]
    }
  ],

  /* ---------- GALERIE ÉVÉNEMENTS (page evenements.html) ---------- */
  /* Ajouter/retirer des lignes librement. */
  galerie: [
    { image: "evenement-mariage-01.jpg",    legende: "Mariage" },
    { image: "evenement-mariage-02.jpg",    legende: "Réception" },
    { image: "evenement-anniversaire-01.jpg", legende: "Anniversaire" },
    { image: "evenement-entreprise-01.jpg", legende: "Événement d'entreprise" },
    { image: "evenement-buffet-01.jpg",     legende: "Buffet traiteur" },
    { image: "evenement-table-01.jpg",      legende: "Table dressée" }
  ]
};
