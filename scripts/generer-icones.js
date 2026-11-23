// Génère les icônes du site (favicon, icône Apple, manifeste) et l'image
// Open Graph à partir de sources SVG/HTML. À relancer seulement si l'identité
// visuelle change : les fichiers produits sont versionnés dans src/assets/icons/.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { lancerHeadless } from "./navigateur.js";

const dossier = path.resolve("src/assets/icons");
fs.mkdirSync(dossier, { recursive: true });

// Monogramme « JV » dessiné en tracés (aucune police nécessaire).
const icone = () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="16" fill="#4f46e5"/>
  <path d="M25 18v20a8 8 0 0 1-8 8" fill="none" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
  <path d="M33 18l8 26 8-26" fill="none" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

fs.writeFileSync(path.join(dossier, "icon.svg"), icone());

const png = (taille, marge = 0) =>
  sharp(Buffer.from(icone()), { density: 384 })
    .resize(taille - 2 * marge, taille - 2 * marge)
    .extend({ top: marge, bottom: marge, left: marge, right: marge, background: "#4f46e5" })
    .png({ compressionLevel: 9 })
    .toBuffer();

const [png32, png180, png192, png512] = await Promise.all([png(32), png(180, 18), png(192), png(512)]);
fs.writeFileSync(path.join(dossier, "apple-touch-icon.png"), png180);
fs.writeFileSync(path.join(dossier, "icon-192.png"), png192);
fs.writeFileSync(path.join(dossier, "icon-512.png"), png512);

// favicon.ico : conteneur ICO contenant une image PNG 32×32.
const entete = Buffer.alloc(22);
entete.writeUInt16LE(0, 0); // réservé
entete.writeUInt16LE(1, 2); // type : icône
entete.writeUInt16LE(1, 4); // nombre d'images
entete.writeUInt8(32, 6); // largeur
entete.writeUInt8(32, 7); // hauteur
entete.writeUInt16LE(1, 10); // plans de couleur
entete.writeUInt16LE(32, 12); // bits par pixel
entete.writeUInt32LE(png32.length, 14); // taille des données
entete.writeUInt32LE(22, 18); // position des données
fs.writeFileSync(path.join(dossier, "favicon.ico"), Buffer.concat([entete, png32]));

fs.writeFileSync(
  path.join(dossier, "site.webmanifest"),
  JSON.stringify(
    {
      name: "Jake Volante · Portfolio",
      short_name: "Jake Volante",
      lang: "fr",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#4f46e5",
      icons: [
        { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
    },
    null,
    2
  ) + "\n"
);

// Image Open Graph 1200×630, rendue par le navigateur avec les polices du site.
const polices = path.resolve("src/assets/fonts").replace(/\\/g, "/");
const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><style>
@font-face{font-family:PJ;src:url("file:///${polices}/plus-jakarta-sans-latin-wght.woff2");font-weight:200 800}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:radial-gradient(900px 500px at 90% -10%,#e0e7ff,transparent 70%),#f6f7fb;color:#111827;font-family:PJ;padding:80px 90px;position:relative;overflow:hidden}
.logo{position:absolute;right:90px;top:80px;width:120px;height:120px}
.eyebrow{color:#4f46e5;font-size:24px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
h1{font-size:96px;font-weight:800;letter-spacing:-.04em;line-height:1;margin-top:36px}
p{font-size:38px;color:#4b5565;margin-top:28px;line-height:1.3;max-width:900px}
.url{position:absolute;left:90px;bottom:70px;font-size:26px;font-weight:600;color:#5b6678}
</style></head><body>
<img class="logo" src="data:image/svg+xml;base64,${Buffer.from(icone()).toString("base64")}" alt="">
<div class="eyebrow">BTS SIO · option SLAM · Agen</div>
<h1>Jake Volante</h1>
<p>Développeur d'applications en formation, à la recherche d'une alternance dans le Lot&#8209;et&#8209;Garonne.</p>
<div class="url">jakevlt.github.io</div>
</body></html>`;

const tmp = path.resolve(".cache/og.html");
fs.mkdirSync(path.dirname(tmp), { recursive: true });
fs.writeFileSync(tmp, html);
const og = path.join(dossier, "og-image.png");
await lancerHeadless(["--allow-file-access-from-files", "--window-size=1200,630", "--virtual-time-budget=3000", `--screenshot=${og}`, `file:///${tmp.replace(/\\/g, "/")}`]);
// Recompression pour alléger l'image.
const optimisee = await sharp(og).resize(1200, 630).png({ compressionLevel: 9, palette: true }).toBuffer();
fs.writeFileSync(og, optimisee);

console.log("Icônes et image Open Graph générées dans src/assets/icons/");
