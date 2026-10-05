/**
 * Portfolio de Jake Volante : interactions côté client.
 * Le site fonctionne sans JavaScript ; ce script ne fait qu'améliorer
 * l'expérience (thème, menu mobile, galerie, filtres, animations).
 */
(function () {
  "use strict";

  var racine = document.documentElement;

  /* --- Thème clair / sombre (choix mémorisé) ------------------------------ */
  function initTheme() {
    var bouton = document.querySelector("[data-theme-toggle]");
    if (!bouton) return;
    var libelle = bouton.querySelector(".sr-only");

    function appliquer(theme) {
      racine.dataset.theme = theme;
      var sombre = theme === "dark";
      bouton.setAttribute("aria-pressed", String(sombre));
      libelle.textContent = sombre ? "Activer le thème clair" : "Activer le thème sombre";
    }

    appliquer(racine.dataset.theme === "light" ? "light" : "dark");

    bouton.addEventListener("click", function () {
      var nouveau = racine.dataset.theme === "dark" ? "light" : "dark";
      appliquer(nouveau);
      try {
        localStorage.setItem("theme", nouveau);
      } catch (e) {
        /* Stockage indisponible (navigation privée) : le choix vaut pour la page. */
      }
    });
  }

  /* --- Menu mobile -------------------------------------------------------- */
  function initMenu() {
    var bouton = document.querySelector("[data-menu-toggle]");
    var nav = document.getElementById("site-nav");
    if (!bouton || !nav) return;

    function basculer(ouvrir) {
      bouton.setAttribute("aria-expanded", String(ouvrir));
      nav.classList.toggle("is-open", ouvrir);
    }

    bouton.addEventListener("click", function () {
      basculer(bouton.getAttribute("aria-expanded") !== "true");
    });

    // Échap ferme le menu et rend le focus au bouton.
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        basculer(false);
        bouton.focus();
      }
    });

    // Repasser en affichage bureau referme le panneau.
    window.matchMedia("(min-width: 64rem)").addEventListener("change", function (mq) {
      if (mq.matches) basculer(false);
    });
  }

  /* --- Galerie de preuves (élément <dialog> natif) ------------------------ */
  function initGalerie() {
    var liens = Array.prototype.slice.call(document.querySelectorAll("[data-galerie]"));
    if (!liens.length || typeof HTMLDialogElement !== "function") return;

    var dialog = document.createElement("dialog");
    dialog.className = "lightbox";
    dialog.setAttribute("aria-labelledby", "lightbox-titre");
    dialog.innerHTML =
      '<div class="lightbox__header">' +
      '<p class="lightbox__counter" id="lightbox-titre" aria-live="polite"></p>' +
      '<button class="icon-btn" type="button" data-action="fermer"><span class="sr-only">Fermer</span>' +
      '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>' +
      "</div>" +
      '<div class="lightbox__figure"><img alt=""></div>' +
      '<div class="lightbox__footer">' +
      '<button class="icon-btn" type="button" data-action="precedent"><span class="sr-only">Image précédente</span>' +
      '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m15 18-6-6 6-6"/></svg></button>' +
      '<p class="lightbox__caption"></p>' +
      '<button class="icon-btn" type="button" data-action="suivant"><span class="sr-only">Image suivante</span>' +
      '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m9 18 6-6-6-6"/></svg></button>' +
      "</div>";
    document.body.appendChild(dialog);

    var image = dialog.querySelector("img");
    var compteur = dialog.querySelector(".lightbox__counter");
    var legende = dialog.querySelector(".lightbox__caption");
    var btnPrec = dialog.querySelector('[data-action="precedent"]');
    var btnSuiv = dialog.querySelector('[data-action="suivant"]');
    var groupe = [];
    var index = 0;
    var declencheur = null;

    function afficher(i) {
      index = (i + groupe.length) % groupe.length;
      var lien = groupe[index];
      var vignette = lien.querySelector("img");
      image.src = lien.href;
      image.alt = vignette ? vignette.alt : "";
      image.width = Number(lien.dataset.largeur) || 0;
      image.height = Number(lien.dataset.hauteur) || 0;
      compteur.textContent = "Image " + (index + 1) + " sur " + groupe.length;
      legende.textContent = lien.dataset.legende || "";
      var plusieurs = groupe.length > 1;
      btnPrec.hidden = !plusieurs;
      btnSuiv.hidden = !plusieurs;
    }

    liens.forEach(function (lien) {
      lien.addEventListener("click", function (e) {
        e.preventDefault();
        // La navigation se limite aux preuves du même groupe (même compétence).
        var conteneur = lien.closest("[data-galerie-groupe]") || document;
        groupe = Array.prototype.slice.call(conteneur.querySelectorAll("[data-galerie]"));
        declencheur = lien;
        afficher(groupe.indexOf(lien));
        dialog.showModal();
      });
    });

    btnPrec.addEventListener("click", function () { afficher(index - 1); });
    btnSuiv.addEventListener("click", function () { afficher(index + 1); });
    dialog.querySelector('[data-action="fermer"]').addEventListener("click", function () {
      dialog.close();
    });

    dialog.addEventListener("keydown", function (e) {
      if (groupe.length < 2) return;
      if (e.key === "ArrowLeft") afficher(index - 1);
      if (e.key === "ArrowRight") afficher(index + 1);
    });

    // Un clic sur le fond (hors du contenu) ferme la visionneuse.
    dialog.addEventListener("click", function (e) {
      if (e.target === dialog) dialog.close();
    });

    // Rendre le focus à la vignette qui a ouvert la visionneuse.
    dialog.addEventListener("close", function () {
      image.removeAttribute("src");
      if (declencheur) declencheur.focus();
    });
  }

  /* --- Filtres de la liste des réalisations ------------------------------- */
  function initFiltres() {
    var conteneur = document.querySelector("[data-filtres]");
    if (!conteneur) return;
    var boutons = conteneur.querySelectorAll("button[data-filtre]");
    var elements = document.querySelectorAll("[data-contexte]");
    var statut = document.querySelector("[data-filtres-statut]");

    boutons.forEach(function (bouton) {
      bouton.addEventListener("click", function () {
        var filtre = bouton.dataset.filtre;
        var visibles = 0;
        boutons.forEach(function (b) {
          b.setAttribute("aria-pressed", String(b === bouton));
        });
        elements.forEach(function (el) {
          var afficher = filtre === "tous" || el.dataset.contexte === filtre;
          el.hidden = !afficher;
          if (afficher) visibles++;
        });
        if (statut) statut.textContent = visibles + " réalisation" + (visibles > 1 ? "s" : "") + " affichée" + (visibles > 1 ? "s" : "");
      });
    });
  }

  /* --- Apparition au défilement ------------------------------------------- */
  function initReveal() {
    var elements = document.querySelectorAll("[data-reveal]");
    if (!elements.length) return;
    if (!("IntersectionObserver" in window)) {
      elements.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var observateur = new IntersectionObserver(
      function (entrees) {
        entrees.forEach(function (entree) {
          if (entree.isIntersecting) {
            entree.target.classList.add("is-visible");
            observateur.unobserve(entree.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    elements.forEach(function (el) { observateur.observe(el); });
  }

  initTheme();
  initMenu();
  initGalerie();
  initFiltres();
  initReveal();
})();
