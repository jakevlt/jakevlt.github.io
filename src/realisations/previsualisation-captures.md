---
titre: "Prévisualisation des captures d'écran dans une application de supervision"
titreCourt: "Prévisualisation des captures (La Banque Postale)"
description: "Fiche de réalisation : prise en charge d'une user story Jira à La Banque Postale, ajout d'un aperçu des captures d'écran au survol en Angular (TypeScript, HTML, SCSS), en méthode Scrum."
resume: "Pendant mon stage de 1re année à La Banque Postale, j'ai pris en charge une user story de bout en bout : afficher un aperçu des captures d'écran au survol dans une application interne de supervision."
contexte: stage
cadre: "Stage de 1<sup>re</sup> année BTS SIO (8 semaines)"
organisation: "La Banque Postale, Toulouse, équipe Outils transverses du test (DSI Banque &amp; Assurance)"
periode: { debut: "2025-05", fin: "2025-07" }
ordre: 4
equipe: "Au sein d'une équipe de développement Scrum"
role: "Développeur de la user story, de l'analyse à la revue de code"
technologies: [Angular, TypeScript, HTML, SCSS, Jira, Git/GitLab, Scrum]
competences: [C2, C4, C5, B2.1, B2.2]
vignette: { src: "jira-c5-deploy-2.png", recadrage: [0.05, 0.15, 0.89, 0.315] }
une: true
documents:
  - { titre: "Rapport de stage La Banque Postale", url: "/documents/rapport-stage-la-banque-postale-2025.pdf", info: "PDF, 26 pages" }
preuves:
  - comp: C2
    texte: "La demande d'évolution a été transmise par un ticket Jira."
    images:
      - { src: "jira-c2-ticket-1.png", alt: "Ticket Jira intitulé « Mettre en place des preview pour les screenshots », identifiants masqués", legende: "Ticket Jira de la user story" }
  - comp: C4
    texte: "Travail en sprints Scrum : daily, sprint planning, sprint review et rétrospective."
    images:
      - { src: "jira-c4-avant-1.png", alt: "Extrait du rapport décrivant la méthode Scrum de l'équipe et ses cérémonies", legende: "Organisation Scrum de l'équipe" }
  - comp: C5
    texte: "Tests en local, validation par l'équipe et le Product Owner, puis intégration après revue de code."
    images:
      - { src: "jira-c5-deploy-1.png", alt: "Application de supervision météo des environnements hors production, avant la réalisation", legende: "L'application avant la réalisation" }
      - { src: "jira-c5-deploy-2.png", alt: "La même application avec l'aperçu de la capture affiché au survol, puis masqué quand la souris quitte la zone", legende: "Après : aperçu au survol (mouseover) et masquage (mouseout)" }
---

## Contexte

Dans l'équipe « Outils transverses du test » de La Banque Postale, une application interne affiche la « météo » des environnements hors production. Son volet *Screenshot* liste des captures d'écran par leur nom : pour en voir une, il fallait l'ouvrir.

## Besoin

La user story demandait d'afficher une **miniature de la capture au survol de son nom** :

- apparition automatique au survol (`mouseover`) ;
- disparition dès que la souris quitte la zone (`mouseout`) ;
- intégration fluide, dans le respect de l'identité graphique, sans refonte ni perte de performance.

## Solution

J'ai ajouté la fonctionnalité d'aperçu dans le composant existant, en HTML, SCSS et TypeScript (Angular). La miniature s'affiche au survol du nom de la capture et se masque à la sortie de la zone, sans modifier la structure de l'interface.

Pour des raisons de confidentialité, je n'ai pas été autorisé à publier le code source de cette fonctionnalité.

## Étapes

1. Prise en charge du ticket Jira pendant le sprint.
2. Échange oral avec le Product Owner pour clarifier les attentes.
3. Analyse du fonctionnement actuel de l'interface.
4. Développement de l'aperçu (HTML, SCSS, TypeScript).
5. Tests en local, validation par l'équipe et le Product Owner.
6. Intégration dans la branche du projet après revue de code, puis présentation en sprint review.

## Difficultés rencontrées

Mon rapport de stage identifie trois axes de progrès liés à cette mission :

- **Gagner en autonomie** sur un environnement technique complexe, dans une application que je n'avais pas écrite ;
- **Mieux gérer mon temps** : planifier mes tâches et estimer leur durée ;
- **Communiquer plus clairement** une difficulté ou une solution technique à l'équipe.

## Résultat

La fonctionnalité a été validée par l'équipe et le Product Owner, intégrée au projet et présentée en sprint review. C'est la première user story que j'ai menée de bout en bout dans une équipe professionnelle.
