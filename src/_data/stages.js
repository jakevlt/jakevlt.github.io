// Stages réalisés pendant le BTS (du plus récent au plus ancien).
// Sources : rapports de stage disponibles dans /documents/.
export default [
  {
    id: "fonroche-lighting",
    entreprise: "Fonroche Lighting",
    poste: "Stagiaire développeur",
    lieu: "Sainte-Colombe-en-Bruilhois (47)",
    periodeTexte: "Janvier – février 2026",
    dates: "du 12 janvier au 20 février 2026",
    duree: "6 semaines",
    annee: "2e année",
    resume: "Conception et développement d'ONBRD, une application Django qui automatise les parcours d'intégration du service RH.",
    presentation:
      "Fonroche Lighting conçoit, fabrique et commercialise des lampadaires solaires autonomes et connectés. L'entreprise compte environ 300 collaborateurs et a équipé plus de 8 000 villes dans plus de 50 pays.",
    service: "Service informatique, sous la responsabilité du DSI. J'ai travaillé en autonomie sur mon projet, avec l'appui du service Développement en cas de besoin.",
    missions: [
      "Analyser le processus de planification des parcours d'intégration avec le service RH",
      "Concevoir la base de données PostgreSQL et l'architecture Django de l'application",
      "Interroger les agendas Outlook via l'API Microsoft Graph (OAuth 2.0) pour trouver des créneaux libres",
      "Générer le planning en PDF avec ReportLab et envoyer les invitations Outlook",
      "Tester l'application avec les RH et rédiger le guide utilisateur",
    ],
    apports: [
      "Mener un projet seul, de l'analyse du besoin à la livraison",
      "Approfondir Django et le modèle MVT",
      "Intégrer une API tierce et gérer l'authentification par jeton",
      "Utiliser l'IA (Copilot) comme aide au débogage, de façon raisonnée",
    ],
    technologies: ["Python", "Django", "PostgreSQL", "Microsoft Graph", "ReportLab", "GitLab"],
    realisations: ["onbrd"],
    rapport: { url: "/documents/rapport-stage-fonroche-lighting-2026.pdf", info: "PDF, 33 pages" },
  },
  {
    id: "la-banque-postale",
    entreprise: "La Banque Postale",
    poste: "Stagiaire développeur",
    lieu: "Toulouse (31)",
    periodeTexte: "Mai – juillet 2025",
    dates: "du 12 mai au 4 juillet 2025",
    duree: "8 semaines",
    annee: "1re année",
    resume: "Intégration dans une équipe de développement Scrum et prise en charge complète d'une user story en Angular.",
    presentation:
      "Filiale du groupe La Poste, La Banque Postale est une banque de détail et d'assurance créée en 2006. J'ai été accueilli dans la direction des systèmes d'information Banque & Assurance.",
    service: "Équipe « Outils transverses du test », qui développe et maintient des outils internes et travaille en Scrum (sprints de 3 à 4 semaines, daily chaque matin).",
    missions: [
      "Configurer deux postes de développement selon la documentation interne",
      "Me former au PHP orienté objet (OpenClassrooms, getters, setters, PHPUnit)",
      "Découvrir les projets et applications internes de l'équipe",
      "Développer une fonctionnalité d'aperçu des captures d'écran (Angular, TypeScript, SCSS) à partir d'un ticket Jira",
    ],
    apports: [
      "Découvrir le fonctionnement d'une équipe de développement professionnelle",
      "Pratiquer la méthode Scrum et ses cérémonies (daily, planning, review, rétrospective)",
      "Livrer une user story de bout en bout, jusqu'à la revue de code",
      "Identifier mes axes de progrès : gestion du temps, autonomie, communication technique",
    ],
    technologies: ["Angular", "TypeScript", "SCSS", "PHP", "Git/GitLab", "Jira"],
    realisations: ["previsualisation-captures", "postes-developpement", "php-objet", "decouverte-projets-internes"],
    rapport: { url: "/documents/rapport-stage-la-banque-postale-2025.pdf", info: "PDF, 26 pages" },
  },
];
