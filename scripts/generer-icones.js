// Génère les icônes du site (favicon, icône Apple, manifeste) et l'image
// Open Graph à partir de sources SVG/HTML. À relancer seulement si l'identité
// visuelle change : les fichiers produits sont versionnés dans src/assets/icons/.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { lancerHeadless } from "./navigateur.js";

const dossier = path.resolve("src/assets/icons");
fs.mkdirSync(dossier, { recursive: true });

// Monogramme « jv. » dessiné en tracés (aucune police nécessaire).
const icone = (fond = true) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  ${fond ? '<rect width="64" height="64" rx="14" fill="#171b22"/>' : ""}
  <circle cx="21" cy="15" r="4" fill="#e8ebf0"/>
  <path d="M21 25v19a8 8 0 0 1-8 8" fill="none" stroke="#e8ebf0" stroke-width="6.5" stroke-linecap="round"/>
  <path d="M30 25l8.5 21L47 25" fill="none" stroke="#5fd4b8" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="54" cy="46" r="4" fill="#5fd4b8"/>
</svg>
`;

fs.writeFileSync(path.join(dossier, "icon.svg"), icone());

const png = (taille, marge = 0) =>
  sharp(Buffer.from(icone()), { density: 384 })
    .resize(taille - 2 * marge, taille - 2 * marge)
    .extend({ top: marge, bottom: marge, left: marge, right: marge, background: "#171b22" })
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
      background_color: "#171b22",
      theme_color: "#171b22",
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
@font-face{font-family:SG;src:url("file:///${polices}/space-grotesk-latin-wght.woff2");font-weight:300 700}
@font-face{font-family:JB;src:url("file:///${polices}/jetbrains-mono-latin-wght.woff2");font-weight:100 800}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#171b22;color:#e8ebf0;font-family:SG;padding:80px 90px;position:relative;overflow:hidden}
body::before{content:"";position:absolute;inset:0;background-image:radial-gradient(#313845 1.5px,transparent 1.5px);background-size:28px 28px;-webkit-mask-image:radial-gradient(ellipse 60% 70% at 85% 30%,#000 20%,transparent 70%)}
.logo{position:absolute;right:90px;top:80px;width:120px;height:120px}
.eyebrow{font-family:JB;color:#5fd4b8;font-size:26px;letter-spacing:.04em;display:flex;gap:16px;align-items:center}
.eyebrow::before{content:"";width:40px;height:2px;background:#5fd4b8}
h1{font-size:96px;font-weight:600;letter-spacing:-.04em;line-height:1;margin-top:40px}
p{font-size:38px;color:#a6afbd;margin-top:28px;line-height:1.3;max-width:900px}
.url{position:absolute;left:90px;bottom:70px;font-family:JB;font-size:26px;color:#8a94a4}
.url b{color:#5fd4b8;font-weight:500}
</style></head><body>
<img class="logo" src="data:image/svg+xml;base64,${Buffer.from(icone()).toString("base64")}" alt="">
<div class="eyebrow">BTS SIO · option SLAM · Agen</div>
<h1>Jake Volante</h1>
<p>Développeur d'applications en formation, à la recherche d'une alternance dans le Lot&#8209;et&#8209;Garonne.</p>
<div class="url">jakevlt<b>.</b>github.io</div>
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
