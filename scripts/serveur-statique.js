// Mini serveur HTTP pour servir _site/ en local (utilisé par les scripts de
// génération du PDF, de l'image Open Graph et de vérification des liens).
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
  ".webmanifest": "application/manifest+json",
};

/** Démarre un serveur sur `racine` et renvoie { url, fermer }. */
export function demarrerServeur(racine = "_site", port = 0) {
  const base = path.resolve(racine);
  const serveur = http.createServer((req, res) => {
    const chemin = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    let fichier = path.join(base, chemin);
    if (!fichier.startsWith(base)) {
      res.writeHead(403).end();
      return;
    }
    if (fs.existsSync(fichier) && fs.statSync(fichier).isDirectory()) fichier = path.join(fichier, "index.html");
    if (!fs.existsSync(fichier)) {
      res.writeHead(404, { "Content-Type": TYPES[".html"] });
      res.end(fs.readFileSync(path.join(base, "404.html")));
      return;
    }
    res.writeHead(200, { "Content-Type": TYPES[path.extname(fichier)] || "application/octet-stream" });
    fs.createReadStream(fichier).pipe(res);
  });
  return new Promise((resolve) => {
    serveur.listen(port, "127.0.0.1", () => {
      const { port: p } = serveur.address();
      resolve({ url: `http://127.0.0.1:${p}`, fermer: () => serveur.close() });
    });
  });
}

// Utilisation directe : node scripts/serveur-statique.js [port]
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const { url } = await demarrerServeur("_site", Number(process.argv[2]) || 8080);
  console.log(`Site servi sur ${url}`);
}
