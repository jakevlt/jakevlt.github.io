# Portfolio de Jake Volante · BTS SIO SLAM

Site : <https://jakevlt.github.io>

Portfolio de mes réalisations professionnelles pour le BTS SIO, option SLAM : fiches de réalisation, compétences des blocs 1 à 3, tableau de synthèse, stages et veille technologique.

## Choix techniques

- **[Eleventy](https://www.11ty.dev)** génère un site 100 % statique (HTML, une feuille CSS, un petit script). Les données (réalisations, compétences, stages, veille) sont écrites une seule fois et alimentent toutes les pages : une réalisation ajoutée apparaît automatiquement dans la liste, le tableau de synthèse et la page compétences.
- **eleventy-img** convertit les captures en AVIF et WebP de plusieurs tailles à la compilation.
- **Aucun framework, aucun traceur, aucune ressource externe** : polices hébergées sur le site, JavaScript en amélioration progressive (le site fonctionne sans).
- **Accessibilité** visée WCAG 2.2 AA : HTML sémantique, lien d'évitement, navigation clavier, galerie en `<dialog>`, thème clair/sombre, `prefers-reduced-motion`.

## Structure

```
src/
  _data/          site.js (identité, liens), stages.js, veille.js
  _lib/           referentiel.js (blocs, compétences, niveaux)
  _includes/      layouts/ (base, page, fiche), partials/, css/
  realisations/   une fiche Markdown par réalisation
  assets/         img/ (captures sources), fonts/, js/, icons/
  documents/      PDF publiés
scripts/          génération des icônes et du PDF, vérification des liens
```

## Commandes

```bash
npm install          # une seule fois
npm start            # serveur local avec rechargement : http://localhost:8080
npm run build        # compile le site dans _site/
npm run check        # vérifie liens, ancres, images, titres (après build)
npm run pdf          # aperçu PDF du tableau en ligne dans .cache/ (après build)
npm run icons        # régénère favicon et image Open Graph
```

## Ajouter ou modifier une réalisation

1. Copier une fiche existante de `src/realisations/` (par exemple `restoweb.md`).
2. Remplir le front matter : `titre`, `resume`, `contexte` (`formation` ou `stage`), `periode`, `competences` (codes `C1`…`C6`, `B2.1`…, `B3.1`…), `preuves`.
3. Déposer les captures dans `src/assets/img/` et les référencer dans `preuves` avec un texte alternatif.
4. Rédiger le contenu (contexte, besoin, solution, étapes, difficultés, résultat).
5. `npm run build` puis vérifier la fiche et le tableau en ligne. Le PDF publié (`src/documents/tableau-de-synthese-jake-volante.pdf`) est le tableau officiel : le remplacer quand une nouvelle version est prête.

Les informations à fournir sont signalées dans le site par un marqueur visible `[À COMPLÉTER]` ; rechercher ce texte dans `src/` pour les retrouver.

## Déploiement

Le workflow `.github/workflows/deploy.yml` compile et publie le site à chaque push sur `main`. Une seule configuration est nécessaire dans le dépôt GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
