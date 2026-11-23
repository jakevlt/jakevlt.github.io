// Présentation du Campus Ermitage (Agen) et de ses formations post-bac.
// Source : site officiel https://postbac-campusermitage.com/ (consulté le 23 novembre 2026).
export default {
  nom: "Campus Ermitage",
  site: "https://postbac-campusermitage.com/",
  adresse: "Campus Numérique 47, 156 avenue Jean Jaurès, 47000 Agen",
  presentation: [
    "Le Campus Ermitage, anciennement UFA47, est un établissement privé d'Agen spécialisé dans la formation en alternance et la formation continue. Il est né d'un partenariat entre L'Ermitage et l'Institution Sainte-Catherine, et travaille avec le CFA Aspect Aquitaine de Bordeaux.",
    "L'école revendique plus de 20 ans d'expérience. Elle met en avant des promotions à effectif réduit, un accompagnement personnalisé, le programme Erasmus+ et des événements autour de la cybersécurité comme le « Garonn'Hack ».",
  ],
  formations: [
    {
      groupe: "BTS (bac + 2, 24 mois)",
      liste: [
        { titre: "BTS Services informatiques aux organisations (SIO)", detail: "Options SISR (infrastructures, systèmes et réseaux) et SLAM (développement d'applications). Alternance : 1 semaine en cours, 1 semaine en entreprise.", url: "https://postbac-campusermitage.com/bts-sio/", actuelle: true },
        { titre: "BTS Support à l'action managériale (SAM)", detail: "Alternance : 1 semaine en cours, 1 semaine en entreprise.", url: "https://postbac-campusermitage.com/bts-sam/" },
        { titre: "BTS Professions immobilières (PI)", detail: "Alternance : 2 jours en cours, 3 jours en entreprise.", url: "https://postbac-campusermitage.com/bts-pi/" },
        { titre: "BTS Collaborateur juriste notarial (CJN)", detail: "Alternance : 2 jours en cours, 3 jours en entreprise.", url: "https://postbac-campusermitage.com/bts-cjn/" },
        { titre: "BTS Économie sociale et familiale (ESF)", detail: "Alternance : 2 jours en cours, 3 jours en entreprise.", url: "https://postbac-campusermitage.com/bts-esf/" },
      ],
    },
    {
      groupe: "Bachelors (bac + 3)",
      liste: [
        { titre: "Administrateur systèmes, réseaux et cybersécurité (ASRC)", detail: "Titre de niveau 6, accessible après un bac + 2. Alternance : 1 mois en centre, 2 mois en entreprise.", url: "https://postbac-campusermitage.com/administrateur-systemes-reseaux-et-cybersecurite/" },
        { titre: "Responsable d'affaires immobilières (RAI)", detail: "Titre de niveau 6. Alternance : 2 jours en centre, 3 jours en entreprise.", url: "https://postbac-campusermitage.com/attache-juridique/" },
        { titre: "Responsable en gestion d'activité opérationnelle (RGAO)", detail: "Titre de niveau 6 sur 12 mois. Alternance : 1 semaine en cours, 3 semaines en entreprise.", url: "https://postbac-campusermitage.com/responsable-en-gestion-dactivite-operationnelle-rgao/" },
      ],
    },
  ],
};
