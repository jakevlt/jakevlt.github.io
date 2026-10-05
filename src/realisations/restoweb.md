---
titre: "RestoWeb, application de commande en ligne pour un restaurant"
titreCourt: "RestoWeb"
description: "Fiche de réalisation : RestoWeb, application web PHP/MySQL de commande en ligne pour un restaurant (menu, comptes, panier, commandes, API JSON), projet d'équipe en BTS SIO."
resume: "En équipe de trois, nous avons développé une application web de restaurant : menu, inscription et connexion, panier, validation de commande et une API JSON pour l'application de gestion des commandes."
contexte: formation
cadre: "BTS SIO, 2<sup>e</sup> année, Institut Limayrac (Toulouse)"
periode: { debut: "2025-09", fin: "2025-12" }
equipe: "Équipe de 3 étudiants"
role: "[À COMPLÉTER : fonctionnalités que tu as développées toi-même]"
technologies: [PHP, MySQL, SQL, HTML, CSS, JSON, Git/GitHub, Trello]
competences: [C2, C3, C4, C5, B2.1, B2.2, B2.3]
vignette: { src: "resto-c3-1.png" }
une: true
liens:
  - { titre: "Dépôt GitHub du projet", url: "https://github.com/AntoineHro/appResto-restoWeb-", info: "github.com/AntoineHro" }
preuves:
  - comp: C2
    texte: "Un incident signalé dans l'outil de suivi : l'inscription fonctionnait, mais la connexion affichait une page blanche."
    images:
      - { src: "resto-c2-1.png", alt: "Ticket #48513 de type bug : « Lot 3 : S'inscrire / Se connecter pas opérationnel »", legende: "Ticket d'incident #48513 sur la connexion" }
  - comp: C3
    images:
      - { src: "resto-c3-1.png", alt: "Page d'accueil « Bienvenue sur le restaurant de Wallouz »", legende: "Page d'accueil" }
      - { src: "resto-c3-2.png", alt: "Page des menus : quatre burgers avec leur composition et leur prix", legende: "Présentation des menus" }
      - { src: "resto-c3-3.png", alt: "Formulaire d'inscription : e-mail, login et mot de passe", legende: "Inscription" }
      - { src: "resto-c3-4.png", alt: "Formulaire de connexion : login et mot de passe", legende: "Connexion" }
      - { src: "resto-c3-5.png", alt: "Panier avec quatre produits, total hors taxe, choix sur place ou à emporter et bouton de validation", legende: "Panier et validation de la commande" }
  - comp: C4
    images:
      - { src: "resto-c4-1.png", alt: "Tableau Trello du projet RestoWeb avec les tâches réparties par colonne", legende: "Suivi du projet sur Trello" }
  - comp: C5
    texte: "Documentation d'installation et de test dans le README du dépôt."
    images:
      - { src: "resto-c5-1.png", alt: "README GitHub : description, fonctionnalités et structure du projet", legende: "README : description du projet" }
      - { src: "resto-c5-2.png", alt: "README GitHub : arborescence détaillée des fichiers du projet", legende: "README : structure du projet" }
      - { src: "resto-c5-3.png", alt: "README GitHub : installation, comptes de test, prérequis et améliorations futures", legende: "README : installation et comptes de test" }
---

## Contexte

RestoWeb est un projet de 2<sup>e</sup> année de BTS SIO. Le cas : un restaurant veut permettre à ses clients de consulter la carte et de commander en ligne, et ses équipes doivent recevoir les commandes dans une application de gestion (« RestoSwing », développée à part).

## Besoin

- Présenter le restaurant et ses menus.
- Permettre aux clients de créer un compte et de se connecter.
- Gérer un panier, un paiement factice et la validation de la commande (sur place ou à emporter).
- Stocker utilisateurs et commandes dans une base SQL.
- Exposer les commandes à l'application de gestion.

## Solution

Une application web en PHP et MySQL :

- **Pages** : accueil, menus, inscription, connexion, panier, paiement, confirmation et historique.
- **Base de données** : script de création (`mpd.sql`) et jeu de données de test (`insert.sql`).
- **API JSON** pour RestoSwing : commandes en attente, acceptées, refusées et terminées.
- **Documentation** : README avec installation, comptes de test et prérequis.

## Étapes

1. Découpage du travail en lots et suivi des tâches sur Trello.
2. Création de la base de données et des pages statiques.
3. Développement des fonctionnalités dynamiques (comptes, panier, commandes).
4. Développement de l'API pour l'application de gestion.
5. Correction des incidents remontés, tests et rédaction du README.

## Difficultés rencontrées

Un incident a été signalé sur le lot 3 : l'inscription créait bien l'utilisateur en base, mais la connexion affichait une page blanche. {% todo "expliquer la cause trouvée et la correction apportée" %}

## Résultat

L'application est fonctionnelle en local et documentée. Le code est versionné sur un dépôt GitHub commun à l'équipe. Pistes d'évolution notées dans le README : un espace administrateur pour les menus et une mise en page responsive.
