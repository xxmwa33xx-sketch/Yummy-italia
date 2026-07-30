/* ============================================================
   YUMMY ITALIA — Logique du site
   Ce fichier lit le contenu de menu-data.js et l'affiche.
   En principe, il n'y a JAMAIS besoin de le modifier.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Petits utilitaires ---------- */
  const $  = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const echap = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  /* Récupère le contenu défini dans menu-data.js */
  const D = (typeof CONTENU !== "undefined") ? CONTENU
          : (typeof window.CONTENU !== "undefined") ? window.CONTENU
          : null;

  /**
   * Génère un bloc photo.
   * Si le fichier n'existe pas encore dans le dépôt, un placeholder
   * clairement identifié s'affiche automatiquement à la place.
   */
  function photo(fichier, legende, classe) {
    const f = echap(fichier);
    return `
      <div class="photo ${classe || ""}">
        <img src="${f}" alt="${echap(legende)}" loading="lazy"
             onload="this.classList.add('chargee')">
        <div class="photo__ph">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
            <rect x="3" y="4" width="18" height="16" rx="2"/>
            <circle cx="8.5" cy="9.5" r="1.6"/>
            <path d="M21 16l-5-5-5.5 5.5L8 14l-5 5"/>
          </svg>
          <b>Photo à ajouter</b>
          <span>${f}</span>
        </div>
      </div>`;
  }

  /* ---------- 1. Spécialités du chef ---------- */
  function rendreSpecialites() {
    const hote = $("#specialites-liste");
    if (!hote || !D) return;
    hote.innerHTML = D.specialites.map((s) => `
      <article class="card">
        ${s.badge ? `<span class="card__badge">${echap(s.badge)}</span>` : ""}
        ${photo(s.image, s.nom, "card__photo")}
        <h3>${echap(s.nom)}</h3>
        <p>${echap(s.description)}</p>
      </article>`).join("");
  }

  /* ---------- 2. La carte du restaurant ---------- */
  function rendreMenu() {
    const hote = $("#menu-liste");
    if (!hote || !D) return;
    hote.innerHTML = D.menu.map((cat) => `
      <section class="categorie">
        <div class="categorie__entete">
          <h3>${echap(cat.titre)}</h3>
          <em>${echap(cat.soustitre || "")}</em>
        </div>
        <ul class="plats">
          ${cat.plats.map((p) => `
            <li class="plat">
              <div class="plat__ligne">
                <span class="plat__nom">${echap(p.nom)}${
                  p.tag ? `<span class="plat__tag">${echap(p.tag)}</span>` : ""
                }</span>
                <span class="plat__points"></span>
                <span class="plat__prix">${echap(p.prix)}</span>
              </div>
              ${p.description ? `<p class="plat__desc">${echap(p.description)}</p>` : ""}
            </li>`).join("")}
        </ul>
      </section>`).join("");
  }

  /* ---------- 3. La carte des vins ---------- */
  function rendreVins() {
    const hote = $("#vins-liste");
    if (!hote || !D) return;
    hote.innerHTML = D.vins.map((cat) => `
      <section class="vin-cat">
        <h3>${echap(cat.titre)}</h3>
        <em>${echap(cat.soustitre || "")}</em>
        <ul>
          ${cat.bouteilles.map((b) => `
            <li class="bouteille">
              <div class="bouteille__ligne">
                <span class="bouteille__nom">${echap(b.nom)}</span>
                <span class="bouteille__prix">${echap(b.prix)}</span>
              </div>
              <div class="bouteille__region">${echap(b.region)}</div>
            </li>`).join("")}
        </ul>
      </section>`).join("");
  }

  /* ---------- 4. Galerie événements ---------- */
  function rendreGalerie() {
    const hote = $("#galerie-liste");
    if (!hote || !D) return;
    hote.innerHTML = D.galerie.map((g) => `
      <figure>
        ${photo(g.image, g.legende)}
        <figcaption>${echap(g.legende)}</figcaption>
      </figure>`).join("");
  }

  /* ---------- 5. Coordonnées & horaires ---------- */
  function rendreInfos() {
    if (!D) return;
    const i = D.infos;

    // Construit le bon href selon le type d'information
    const lien = (cle, val) => {
      if (cle === "telephone") return "tel:" + String(val).replace(/[\s.]/g, "");
      if (cle === "email") return "mailto:" + val;
      return val;
    };

    // data-info  → remplace le texte (et le lien si c'est un <a>)
    $$("[data-info]").forEach((el) => {
      const cle = el.getAttribute("data-info");
      const val = i[cle];
      if (val == null) return;
      el.textContent = val;
      if (el.tagName === "A") el.href = lien(cle, val);
    });

    // data-lien  → remplace uniquement le lien, le contenu est préservé
    $$("[data-lien]").forEach((el) => {
      const cle = el.getAttribute("data-lien");
      const val = i[cle];
      if (val != null) el.href = lien(cle, val);
    });

    $$("[data-adresse]").forEach((el) => {
      el.innerHTML = `${echap(i.adresse)}<br>${echap(i.codePostal)} ${echap(i.ville)}`;
    });

    $$("[data-horaires]").forEach((el) => {
      el.innerHTML = i.horaires.map((h) => `
        <li class="horaire"><span>${echap(h.jour)}</span><span>${echap(h.heures)}</span></li>`).join("");
    });

    $$("[data-annee]").forEach((el) => { el.textContent = new Date().getFullYear(); });
  }

  /* ---------- 6. Menu mobile ---------- */
  function navMobile() {
    const burger = $(".nav-burger");
    const nav = $("#nav-principale");
    if (!burger || !nav) return;
    burger.addEventListener("click", () => {
      const ouvert = nav.classList.toggle("ouvert");
      burger.setAttribute("aria-expanded", String(ouvert));
    });
    $$("a", nav).forEach((a) => a.addEventListener("click", () => {
      nav.classList.remove("ouvert");
      burger.setAttribute("aria-expanded", "false");
    }));
  }

  /* ---------- 7. Apparition au scroll ---------- */
  function apparitions() {
    const cibles = $$(".apparait");
    if (!cibles.length) return;
    if (!("IntersectionObserver" in window)) {
      cibles.forEach((c) => c.classList.add("visible"));
      return;
    }
    const obs = new IntersectionObserver((entrees) => {
      entrees.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px" });
    cibles.forEach((c) => obs.observe(c));
  }

  /* ---------- Démarrage ---------- */
  function init() {
    rendreSpecialites();
    rendreMenu();
    rendreVins();
    rendreGalerie();
    rendreInfos();
    navMobile();
    apparitions();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
