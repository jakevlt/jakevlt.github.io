// Génère src/documents/tableau-de-synthese-jake-volante.pdf à partir de la
// page /tableau-de-synthese/ du site compilé (lancer `npm run build` avant).
import path from "node:path";
import fs from "node:fs";
import { demarrerServeur } from "./serveur-statique.js";
import { lancerHeadless } from "./navigateur.js";

const sortie = path.resolve("src/documents/tableau-de-synthese-jake-volante.pdf");

if (!fs.existsSync("_site/tableau-de-synthese/index.html")) {
  console.error("Le site n'est pas compilé : lancez d'abord `npm run build`.");
  process.exit(1);
}

const serveur = await demarrerServeur("_site");
try {
  await lancerHeadless([
    "--no-pdf-header-footer",
    "--run-all-compositor-stages-before-draw",
    "--virtual-time-budget=5000",
    `--print-to-pdf=${sortie}`,
    `${serveur.url}/tableau-de-synthese/`,
  ]);
  console.log(`PDF généré : ${path.relative(process.cwd(), sortie)} (${Math.round(fs.statSync(sortie).size / 1024)} Ko)`);
} finally {
  serveur.fermer();
}
