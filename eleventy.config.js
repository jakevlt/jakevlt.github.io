// Configuration Eleventy du portfolio.
// Le site généré (_site/) est 100 % statique : HTML, une feuille CSS, un petit script.
import path from "node:path";
import Image from "@11ty/eleventy-img";
import { referentiel, competenceParCode, niveaux } from "./src/_lib/referentiel.js";

const DOSSIER_IMAGES = "src/assets/img";

/** Options communes de génération d'images : AVIF, avec WebP en repli (pris en charge par tous les navigateurs récents). */
const optionsImages = {
  formats: ["avif", "webp"],
  outputDir: "_site/assets/img/",
  urlPath: "/assets/img/",
  sharpAvifOptions: { quality: 60 },
  sharpWebpOptions: { quality: 80 },
  filenameFormat: (id, src, width, format) =>
    `${path.parse(src).name}-${width}.${format}`,
};

/** Échappe une chaîne pour un attribut HTML. */
const echapper = (texte = "") =>
  String(texte)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/** Génère les variantes d'une image source et renvoie les métadonnées. */
async function traiterImage(fichier, widths) {
  return Image(path.join(DOSSIER_IMAGES, fichier), { ...optionsImages, widths });
}

export default function (eleventyConfig) {
  // --- Fichiers copiés tels quels -------------------------------------------
  eleventyConfig.addPassthroughCopy({
    "src/assets/fonts": "assets/fonts",
    "src/assets/js": "assets/js",
    "src/assets/icons": "/",
    "src/documents": "documents",
  });
  eleventyConfig.addWatchTarget("src/_includes/css/");

  // --- Images responsives ---------------------------------------------------
  // {% image "fichier.png", "texte alternatif", "sizes" %}
  eleventyConfig.addAsyncShortcode(
    "image",
    async (fichier, alt, sizes = "100vw", { widths = [480, 960, 1600], loading = "lazy", classe = "" } = {}) => {
      if (alt === undefined) throw new Error(`Texte alternatif manquant pour ${fichier}`);
      const meta = await traiterImage(fichier, widths);
      return Image.generateHTML(meta, {
        alt,
        sizes,
        loading,
        decoding: "async",
        ...(classe && { class: classe }),
      });
    }
  );

  // Vignette de preuve : lien vers la version grande taille + légende.
  // Sans JavaScript, le lien ouvre l'image ; avec JS, une galerie accessible s'ouvre.
  eleventyConfig.addAsyncShortcode("preuve", async (fichier, alt, legende = "") => {
    const meta = await traiterImage(fichier, [480, 960, 1600]);
    const grande = meta.webp.at(-1);
    const picture = Image.generateHTML(meta, {
      alt,
      sizes: "(min-width: 64rem) 18rem, (min-width: 40rem) 45vw, 100vw",
      loading: "lazy",
      decoding: "async",
    });
    return `<figure class="preuve">
  <a class="preuve__lien" href="${grande.url}" data-galerie data-legende="${echapper(legende || alt)}" data-largeur="${grande.width}" data-hauteur="${grande.height}">
    ${picture}
    <span class="sr-only">(agrandir l'image)</span>
  </a>
  ${legende ? `<figcaption>${legende}</figcaption>` : ""}
</figure>`;
  });

  // Marqueur visible pour une information à fournir.
  eleventyConfig.addShortcode(
    "todo",
    (texte = "") => `<mark class="todo">[À COMPLÉTER${texte ? ` : ${texte}` : ""}]</mark>`
  );

  // Rend visibles les marqueurs « [À COMPLÉTER : …] » écrits dans les données.
  eleventyConfig.addFilter("marquer", (texte = "") =>
    String(texte).replace(/\[À COMPLÉTER[^\]]*\]/g, (m) => `<mark class="todo">${m}</mark>`)
  );

  // --- Collections ----------------------------------------------------------
  // Réalisations triées par date de début (puis par ordre manuel).
  eleventyConfig.addCollection("realisations", (api) =>
    api
      .getFilteredByGlob("src/realisations/*.md")
      .sort((a, b) =>
        (a.data.periode?.debut || "9999").localeCompare(b.data.periode?.debut || "9999") ||
        (a.data.ordre || 0) - (b.data.ordre || 0)
      )
  );

  // --- Filtres ----------------------------------------------------------------
  // Réalisations qui mobilisent une compétence donnée.
  eleventyConfig.addFilter("avecCompetence", (realisations, code) =>
    realisations.filter((r) => (r.data.competences || []).includes(code))
  );
  // Réalisations d'un contexte donné (formation | stage).
  eleventyConfig.addFilter("duContexte", (realisations, contexte) =>
    realisations.filter((r) => r.data.contexte === contexte)
  );
  // Une réalisation a-t-elle des preuves pour cette compétence ?
  eleventyConfig.addFilter("aDesPreuves", (preuves = [], code) =>
    preuves.some((groupe) => groupe.comp === code)
  );
  eleventyConfig.addFilter("competence", (code) => competenceParCode(code));
  eleventyConfig.addFilter("ancre", (code) => `preuves-${String(code).toLowerCase().replace(/\./g, "-")}`);

  // "2025-05" -> "05/25"
  eleventyConfig.addFilter("moisCourt", (iso = "") => {
    const [annee, mois] = iso.split("-");
    return annee && mois ? `${mois}/${annee.slice(2)}` : "";
  });
  // "2025-05" -> "mai 2025"
  eleventyConfig.addFilter("moisLong", (iso = "") => {
    const [annee, mois] = iso.split("-").map(Number);
    if (!annee || !mois) return "";
    return new Date(Date.UTC(annee, mois - 1, 1)).toLocaleDateString("fr-FR", {
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });
  });
  // "2026-08-04" -> "4 août 2026"
  eleventyConfig.addFilter("dateLongue", (iso = "") =>
    new Date(`${iso}T12:00:00Z`).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    })
  );
  eleventyConfig.addFilter("dateIso", (date) => new Date(date).toISOString().slice(0, 10));
  eleventyConfig.addFilter("absolue", (url, base) => new URL(url, base).href);
  eleventyConfig.addFilter("inverse", (liste = []) => [...liste].reverse());
  eleventyConfig.addFilter("json", (valeur) => JSON.stringify(valeur));

  eleventyConfig.addGlobalData("referentiel", referentiel);
  eleventyConfig.addGlobalData("niveaux", niveaux);
  eleventyConfig.addGlobalData("anneeCourante", () => new Date().getFullYear());
}

export const config = {
  dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
  templateFormats: ["njk", "md", "11ty.js"],
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
};
