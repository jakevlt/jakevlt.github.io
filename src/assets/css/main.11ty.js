// Assemble les feuilles de style partielles en un seul fichier /assets/css/main.css
// (une seule requête HTTP), avec une minification légère.
import fs from "node:fs";
import path from "node:path";

const ordre = ["tokens", "base", "layout", "components", "pages", "print"];
const dossier = path.resolve("src/_includes/css");

export const data = {
  permalink: "/assets/css/main.css",
  eleventyExcludeFromCollections: true,
};

export function render() {
  const css = ordre.map((nom) => fs.readFileSync(path.join(dossier, `${nom}.css`), "utf8")).join("\n");
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "") // commentaires
    .replace(/\s*\n\s*/g, "\n") // indentation
    .replace(/\n{2,}/g, "\n")
    .trim();
}
