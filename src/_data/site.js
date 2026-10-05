// Informations générales du site, réutilisées dans tous les gabarits.
export default {
  url: "https://jakevlt.github.io",
  langue: "fr",
  titre: "Jake Volante · Portfolio BTS SIO SLAM",
  description:
    "Portfolio de Jake Volante, étudiant en BTS SIO option SLAM à Agen : réalisations professionnelles, compétences, stages et veille technologique. Recherche d'alternance dans le Lot-et-Garonne.",
  auteur: {
    prenom: "Jake",
    nom: "Volante",
    nomComplet: "Jake Volante",
    titre: "Étudiant en BTS SIO, option SLAM",
    ville: "Agen",
    departement: "Lot-et-Garonne",
    email: "jake.volante988@gmail.com",
    github: "https://github.com/jakevlt",
    githubPseudo: "jakevlt",
    linkedin: "https://www.linkedin.com/in/jake-volante-14421232b/",
    linkedinPseudo: "jake-volante-14421232b",
  },
  formation: {
    diplome: "BTS Services informatiques aux organisations",
    option: "SLAM (Solutions logicielles et applications métiers)",
    etablissement: "Campus Ermitage 47",
    ville: "Agen",
    annee: "2026-2027",
    session: "2027",
  },
  // Le fichier sera ajouté quand le CV mis à jour sera prêt.
  cv: null, // ex. "/documents/cv-jake-volante.pdf"
  navigation: [
    { titre: "Parcours", url: "/parcours/" },
    { titre: "Compétences", url: "/competences/" },
    { titre: "Réalisations", url: "/realisations/" },
    { titre: "Stages", url: "/stages/" },
    { titre: "Veille", url: "/veille/" },
    { titre: "Contact", url: "/contact/" },
  ],
};
