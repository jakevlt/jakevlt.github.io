// Localise un navigateur Chromium installé (Chrome ou Edge) pour l'utiliser
// en mode headless (impression PDF, captures). Aucune dépendance npm.
import fs from "node:fs";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const CANDIDATS = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

export function trouverNavigateur() {
  const chemin = CANDIDATS.find((c) => fs.existsSync(c));
  if (!chemin) throw new Error("Aucun navigateur Chromium trouvé. Définissez la variable CHROME_PATH.");
  return chemin;
}

/**
 * Lance le navigateur headless avec les arguments donnés (asynchrone, pour ne
 * pas bloquer le serveur local qui lui répond). Un profil temporaire isole
 * l'exécution du navigateur personnel de l'utilisateur.
 */
export async function lancerHeadless(args) {
  const profil = path.resolve(".cache/navigateur");
  await promisify(execFile)(
    trouverNavigateur(),
    ["--headless=new", "--disable-gpu", "--no-first-run", "--no-default-browser-check", "--hide-scrollbars", `--user-data-dir=${profil}`, ...args],
    { timeout: 60_000 }
  );
}
