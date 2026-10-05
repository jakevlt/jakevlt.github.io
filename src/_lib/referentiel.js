// Référentiel du BTS SIO (option SLAM) : blocs, compétences et niveaux auto-évalués.
// Les intitulés reprennent ceux du référentiel officiel du diplôme.
//
// Niveaux : 0 = À développer, 1 = Découverte, 2 = Mise en œuvre, 3 = Autonome.
// Ils sont à valider par Jake : ils ont été pré-remplis à partir du nombre de
// réalisations qui prouvent chaque compétence.

export const niveaux = {
  0: { libelle: "À développer", description: "Compétence pas encore mise en œuvre dans une réalisation." },
  1: { libelle: "Découverte", description: "Compétence abordée une fois, avec accompagnement." },
  2: { libelle: "Mise en œuvre", description: "Compétence mobilisée dans plusieurs réalisations, avec un appui ponctuel." },
  3: { libelle: "Autonome", description: "Compétence mobilisée régulièrement, de façon autonome." },
};

export const referentiel = [
  {
    id: "bloc1",
    numero: 1,
    titre: "Support et mise à disposition de services informatiques",
    epreuve: "Épreuve E4",
    competences: [
      {
        code: "C1",
        titre: "Gérer le patrimoine informatique",
        niveau: 1,
        savoirs: [
          "Recenser et identifier les ressources numériques",
          "Exploiter des référentiels, normes et standards adoptés par le prestataire informatique",
          "Mettre en place et vérifier les niveaux d'habilitation associés à un service",
          "Vérifier les conditions de la continuité d'un service informatique",
          "Gérer des sauvegardes",
          "Vérifier le respect des règles d'utilisation des ressources numériques",
        ],
      },
      {
        code: "C2",
        titre: "Répondre aux incidents et aux demandes d'assistance et d'évolution",
        niveau: 2,
        savoirs: [
          "Collecter, suivre et orienter des demandes",
          "Traiter des demandes concernant les services réseau et système, applicatifs",
          "Traiter des demandes concernant les applications",
        ],
      },
      {
        code: "C3",
        titre: "Développer la présence en ligne de l'organisation",
        niveau: 2,
        savoirs: [
          "Participer à la valorisation de l'image de l'organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques",
          "Référencer les services en ligne de l'organisation et mesurer leur visibilité",
          "Participer à l'évolution d'un site Web exploitant les données de l'organisation",
        ],
      },
      {
        code: "C4",
        titre: "Travailler en mode projet",
        niveau: 2,
        savoirs: [
          "Analyser les objectifs et les modalités d'organisation d'un projet",
          "Planifier les activités",
          "Évaluer les indicateurs de suivi d'un projet et analyser les écarts",
        ],
      },
      {
        code: "C5",
        titre: "Mettre à disposition des utilisateurs un service informatique",
        niveau: 2,
        savoirs: [
          "Réaliser les tests d'intégration et d'acceptation d'un service",
          "Déployer un service",
          "Accompagner les utilisateurs dans la mise en place d'un service",
        ],
      },
      {
        code: "C6",
        titre: "Organiser son développement professionnel",
        niveau: 2,
        savoirs: [
          "Mettre en place son environnement d'apprentissage personnel",
          "Mettre en œuvre des outils et stratégies de veille informationnelle",
          "Gérer son identité professionnelle",
          "Développer son projet professionnel",
        ],
      },
    ],
  },
  {
    id: "bloc2",
    numero: 2,
    titre: "Conception et développement d'applications (option SLAM)",
    epreuve: "Épreuve E5",
    competences: [
      {
        code: "B2.1",
        titre: "Concevoir et développer une solution applicative",
        niveau: 2,
        savoirs: [
          "Analyser un besoin exprimé et son contexte juridique",
          "Participer à la conception de l'architecture d'une solution applicative",
          "Modéliser une solution applicative",
          "Exploiter les ressources du cadre applicatif (framework)",
          "Identifier, développer, utiliser ou adapter des composants logiciels",
          "Exploiter les technologies Web pour mettre en œuvre les échanges entre applications, y compris de mobilité",
          "Utiliser des composants d'accès aux données",
          "Intégrer en continu les versions d'une solution applicative",
          "Réaliser les tests nécessaires à la validation ou à la mise en production d'une solution applicative",
          "Rédiger des documentations technique et d'utilisation d'une solution applicative",
          "Exploiter les fonctionnalités d'un environnement de développement et de tests",
        ],
      },
      {
        code: "B2.2",
        titre: "Assurer la maintenance corrective ou évolutive d'une solution applicative",
        niveau: 1,
        savoirs: [
          "Recueillir, analyser et mettre à jour les informations sur une version d'une solution applicative",
          "Évaluer la qualité d'une solution applicative",
          "Analyser et corriger un dysfonctionnement",
          "Mettre à jour des documentations technique et d'utilisation d'une solution applicative",
          "Élaborer et réaliser les tests des éléments mis à jour",
        ],
      },
      {
        code: "B2.3",
        titre: "Gérer les données",
        niveau: 2,
        savoirs: [
          "Exploiter des données à l'aide d'un langage de requêtes",
          "Développer des fonctionnalités applicatives au sein d'un système de gestion de base de données (relationnel ou non)",
          "Concevoir ou adapter une base de données",
          "Administrer et déployer une base de données",
        ],
      },
    ],
  },
  {
    id: "bloc3",
    numero: 3,
    titre: "Cybersécurité des services informatiques",
    epreuve: "Épreuve E6",
    competences: [
      {
        code: "B3.1",
        titre: "Protéger les données à caractère personnel",
        niveau: 0,
        savoirs: [
          "Recenser les traitements sur les données à caractère personnel au sein de l'organisation",
          "Identifier les risques liés à la collecte, au traitement, au stockage et à la diffusion des données à caractère personnel",
          "Appliquer la réglementation en matière de collecte, de traitement et de conservation des données à caractère personnel",
          "Sensibiliser les utilisateurs à la protection des données à caractère personnel",
        ],
      },
      {
        code: "B3.2",
        titre: "Préserver l'identité numérique de l'organisation",
        niveau: 0,
        savoirs: [
          "Protéger l'identité numérique d'une organisation",
          "Déployer les moyens appropriés de preuve électronique",
        ],
      },
      {
        code: "B3.3",
        titre: "Sécuriser les équipements et les usages des utilisateurs",
        niveau: 1,
        savoirs: [
          "Informer les utilisateurs sur les risques associés à l'utilisation d'une ressource numérique et promouvoir les bons usages à adopter",
          "Identifier les menaces et mettre en œuvre les défenses appropriées",
          "Gérer les accès et les privilèges appropriés",
          "Vérifier l'efficacité de la protection",
        ],
      },
      {
        code: "B3.4",
        titre: "Garantir la disponibilité, l'intégrité et la confidentialité des services informatiques et des données de l'organisation face à des cyberattaques",
        niveau: 0,
        savoirs: [
          "Caractériser les risques liés à l'utilisation malveillante d'un service informatique",
          "Recenser les conséquences d'une perte de disponibilité, d'intégrité ou de confidentialité",
          "Identifier les obligations légales qui s'imposent en matière d'archivage et de protection des données de l'organisation",
          "Organiser la collecte et la conservation des preuves numériques",
          "Appliquer les procédures garantissant le respect des obligations légales",
        ],
      },
      {
        code: "B3.5",
        titre: "Assurer la cybersécurité d'une solution applicative et de son développement",
        niveau: 1,
        savoirs: [
          "Participer à la vérification des éléments contribuant à la qualité d'un développement informatique",
          "Prendre en compte la sécurité dans un projet de développement d'une solution applicative",
          "Mettre en œuvre et vérifier la conformité d'une solution applicative et de son développement à un référentiel, une norme ou un standard de sécurité",
          "Prévenir les attaques",
          "Analyser les connexions (logs)",
          "Analyser des incidents de sécurité, proposer et mettre en œuvre des contre-mesures",
        ],
      },
    ],
  },
];

const index = new Map(
  referentiel.flatMap((bloc) => bloc.competences.map((c) => [c.code, { ...c, bloc: bloc.id }]))
);

/** Renvoie la compétence (avec son bloc) à partir de son code, ex. "C3" ou "B2.1". */
export function competenceParCode(code) {
  const competence = index.get(code);
  if (!competence) throw new Error(`Compétence inconnue : ${code}`);
  return competence;
}
