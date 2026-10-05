---
titre: "Montée en compétences en PHP orienté objet"
titreCourt: "PHP orienté objet (La Banque Postale)"
description: "Fiche de réalisation : formation OpenClassrooms en PHP orienté objet et exercices pratiques (classe, getters, setters, test PHPUnit) pendant le stage à La Banque Postale."
resume: "Pour pouvoir contribuer aux projets de l'équipe, j'ai suivi une formation OpenClassrooms en PHP orienté objet, puis réalisé des exercices encadrés : classe, encapsulation et premier test unitaire avec PHPUnit."
contexte: stage
cadre: "Stage de 1<sup>re</sup> année BTS SIO (8 semaines)"
organisation: "La Banque Postale, Toulouse"
periode: { debut: "2025-05", fin: "2025-07" }
ordre: 2
equipe: "Individuel, exercices proposés par un développeur de l'équipe"
technologies: [PHP, PHPUnit, OpenClassrooms]
competences: [C6, B2.1]
documents:
  - { titre: "Rapport de stage La Banque Postale", url: "/documents/rapport-stage-la-banque-postale-2025.pdf", info: "PDF, activité 02" }
preuves:
  - comp: C6
    texte: "Mise en place de mon environnement d'apprentissage : cours en ligne puis exercices pratiques."
    images:
      - { src: "oc-c6-poo-1.png", alt: "Extrait du rapport : activité 02, compétences, cahier des charges et démarche", legende: "Activité 02 du rapport de stage" }
      - { src: "oc-c6-poo-2.png", alt: "Extrait du rapport : code PHP de la classe Food avec getters et setters, et test PHPUnit", legende: "La classe Food et son test PHPUnit" }
      - { src: "oc-c6-poo-3.png", alt: "Cours OpenClassrooms « Programmez en orienté objet en PHP »", legende: "Le cours OpenClassrooms suivi" }
---

## Contexte

Les projets internes de l'équipe reposent sur la programmation orientée objet en PHP. Cette notion était une lacune pour moi à mon arrivée.

## Besoin

Me mettre à niveau rapidement pour comprendre l'architecture des projets et pouvoir y contribuer. Il n'y avait pas de cahier des charges formel : c'était une démarche d'apprentissage encadrée par l'équipe.

## Solution et étapes

1. **Formation en ligne** : module OpenClassrooms sur la programmation orientée objet en PHP.
2. **Exercice pratique** : création d'une classe `Food` (un aliment) avec des attributs privés (`$name`, `$type`, `$price`), un constructeur, des getters et des setters ; affichage du résultat au format JSON dans le navigateur.
3. **Premier test unitaire** avec PHPUnit : le test `testGetName` crée un objet `Food` nommé « Pomme » et vérifie que `getName()` renvoie bien ce nom.

## Résultat

J'ai acquis les bases de l'encapsulation, du typage et des méthodes d'accès, ce qui m'a permis de mieux comprendre le code de l'équipe pour la suite du stage.
