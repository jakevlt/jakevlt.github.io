// Vérifie le site compilé (_site/) : liens internes, ancres, images, scripts
// et feuilles de style. Avec --externes, teste aussi les liens externes.
// Usage : npm run build && npm run check [-- --externes]
import fs from "node:fs";
import path from "node:path";

const RACINE = path.resolve("_site");
const BASE = "https://jakevlt.github.io";
const verifierExternes = process.argv.includes("--externes");

/** Liste récursive des fichiers HTML. */
function fichiersHtml(dossier) {
  return fs.readdirSync(dossier, { withFileTypes: true }).flatMap((e) => {
    const chemin = path.join(dossier, e.name);
    if (e.isDirectory()) return fichiersHtml(chemin);
    return e.name.endsWith(".html") ? [chemin] : [];
  });
}

/** Chemin du fichier servi pour une URL interne. */
function fichierPourUrl(pathname) {
  let fichier = path.join(RACINE, decodeURIComponent(pathname));
  if (pathname.endsWith("/")) fichier = path.join(fichier, "index.html");
  return fichier;
}

const pages = fichiersHtml(RACINE);
const idsParFichier = new Map();
const erreurs = [];
const externes = new Map();

for (const page of pages) {
  const html = fs.readFileSync(page, "utf8");
  idsParFichier.set(page, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
}

for (const page of pages) {
  const html = fs.readFileSync(page, "utf8");
  const relatif = "/" + path.relative(RACINE, page).replace(/\\/g, "/");
  const urlPage = new URL(relatif.replace(/index\.html$/, ""), BASE);

  // Attributs à contrôler : href, src et chaque entrée de srcset.
  const cibles = [
    ...[...html.matchAll(/\s(?:href|src)="([^"]+)"/g)].map((m) => m[1]),
    ...[...html.matchAll(/\ssrcset="([^"]+)"/g)].flatMap((m) => m[1].split(",").map((s) => s.trim().split(/\s+/)[0])),
  ];

  for (const cible of cibles) {
    if (/^(mailto:|tel:|data:|javascript:)/.test(cible)) continue;
    const url = new URL(cible.replace(/&amp;/g, "&"), urlPage);

    if (url.origin !== BASE) {
      if (!externes.has(url.href)) externes.set(url.href, relatif);
      continue;
    }

    const fichier = fichierPourUrl(url.pathname);
    const existe = fs.existsSync(fichier) && fs.statSync(fichier).isFile();
    if (!existe) {
      erreurs.push(`${relatif} → ${cible} : fichier introuvable`);
      continue;
    }
    if (url.hash && fichier.endsWith(".html")) {
      const id = decodeURIComponent(url.hash.slice(1));
      if (!idsParFichier.get(fichier)?.has(id)) erreurs.push(`${relatif} → ${cible} : ancre #${id} introuvable`);
    }
  }

  // Contrôles d'accessibilité de base.
  for (const [, attrs] of html.matchAll(/<img\b([^>]*)>/g)) {
    if (!/\salt="/.test(attrs)) erreurs.push(`${relatif} : image sans attribut alt`);
  }
  if (!/<html lang="fr">/.test(html)) erreurs.push(`${relatif} : attribut lang manquant`);
  if ((html.match(/<h1[\s>]/g) || []).length !== 1) erreurs.push(`${relatif} : la page doit contenir exactement un <h1>`);
  if (!/<title>[^<]+<\/title>/.test(html)) erreurs.push(`${relatif} : <title> manquant`);
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  const doublons = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (doublons.length) erreurs.push(`${relatif} : identifiants en double (${[...new Set(doublons)].join(", ")})`);
}

// Titres et descriptions uniques.
const vus = { title: new Map(), description: new Map() };
for (const page of pages) {
  const html = fs.readFileSync(page, "utf8");
  const relatif = "/" + path.relative(RACINE, page).replace(/\\/g, "/");
  const titre = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  for (const [cle, valeur] of [["title", titre], ["description", description]]) {
    if (!valeur) continue;
    if (vus[cle].has(valeur)) erreurs.push(`${relatif} : ${cle} identique à ${vus[cle].get(valeur)}`);
    else vus[cle].set(valeur, relatif);
  }
}

if (verifierExternes) {
  for (const [url, page] of externes) {
    try {
      const reponse = await fetch(url, { method: "GET", redirect: "follow", headers: { "User-Agent": "Mozilla/5.0 (verification de liens)" } });
      // LinkedIn répond 999 aux robots : ce n'est pas un lien mort.
      if (!reponse.ok && reponse.status !== 999) erreurs.push(`${page} → ${url} : HTTP ${reponse.status}`);
    } catch (e) {
      erreurs.push(`${page} → ${url} : ${e.cause?.code || e.message}`);
    }
  }
}

console.log(`${pages.length} pages analysées, ${externes.size} liens externes${verifierExternes ? " testés" : " (non testés, ajoutez --externes)"}.`);
if (erreurs.length) {
  console.error(`\n${erreurs.length} problème(s) :\n- ${erreurs.join("\n- ")}`);
  process.exit(1);
}
console.log("Aucun problème détecté.");
