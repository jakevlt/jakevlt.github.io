---
titre: "AppFAQ, foire aux questions pour la Maison des Ligues"
titreCourt: "AppFAQ (Maison des Ligues)"
description: "Fiche de réalisation : AppFAQ, application web PHP/MySQL de questions-réponses pour les ligues sportives de la Maison des Ligues de Lorraine, avec gestion des rôles, menée par lots."
resume: "Pour la Maison des Ligues de Lorraine (cas d'étude), nous avons développé en équipe une FAQ en ligne : chaque ligue sportive a ses questions, auxquelles répondent ses administrateurs."
contexte: formation
cadre: "BTS SIO, 1<sup>re</sup> année, Institut Limayrac (Toulouse)"
periode: { debut: "2025-01", fin: "2025-04" }
equipe: "Équipe de 3 étudiants"
technologies: [PHP, MySQL, SQL, HTML, CSS, Git/GitHub, Trello, Merise (MCD/MLD)]
competences: [C3, C4, C5, B2.1, B2.3, B3.3]
vignette: { src: "faq-c3-accueil-4.png" }
une: false
liens: []
preuves:
  - comp: C3
    texte: "Parcours complet de l'application selon le rôle de l'utilisateur."
    images:
      - { src: "faq-c3-accueil-1.png", alt: "Page d'accueil d'AppFAQ avec les boutons Se connecter et S'inscrire", legende: "Accueil" }
      - { src: "faq-c3-accueil-2.png", alt: "Formulaire de connexion par pseudo ou e-mail et mot de passe", legende: "Connexion" }
      - { src: "faq-c3-accueil-3.png", alt: "Formulaire de création de compte avec choix de la ligue", legende: "Inscription avec choix de la ligue" }
      - { src: "faq-c3-accueil-4.png", alt: "Tableau des questions de toutes les ligues avec actions Répondre, Modifier, Supprimer", legende: "Super administrateur : toutes les ligues" }
      - { src: "faq-c3-accueil-5.png", alt: "Formulaire de réponse à une question", legende: "Administrateur : répondre à une question" }
      - { src: "faq-c3-accueil-6.png", alt: "Écran de confirmation de suppression d'une question", legende: "Administrateur : supprimer une question" }
      - { src: "faq-c3-accueil-7.png", alt: "Formulaire de modification d'une question et de sa réponse", legende: "Administrateur : modifier une question" }
      - { src: "faq-c3-accueil-8.png", alt: "Formulaire d'ajout d'une question", legende: "Utilisateur : ajouter une question" }
      - { src: "faq-c3-accueil-9.png", alt: "Questions de la ligue de basketball vues par son administrateur", legende: "Administrateur de la ligue de basketball" }
      - { src: "faq-c3-accueil-10.png", alt: "Questions de la ligue de football vues par son administrateur", legende: "Administrateur de la ligue de football" }
      - { src: "faq-c3-accueil-11.png", alt: "Questions de la ligue de handball vues par son administrateur", legende: "Administrateur de la ligue de handball" }
      - { src: "faq-c3-accueil-12.png", alt: "Questions de la ligue de volley-ball vues par son administrateur", legende: "Administrateur de la ligue de volley-ball" }
      - { src: "faq-c3-accueil-13.png", alt: "Questions de la ligue de basketball vues par un utilisateur", legende: "Utilisateur de la ligue de basketball" }
      - { src: "faq-c3-accueil-14.png", alt: "Questions de la ligue de football vues par un utilisateur", legende: "Utilisateur de la ligue de football" }
      - { src: "faq-c3-accueil-15.png", alt: "Questions de la ligue de handball vues par un utilisateur", legende: "Utilisateur de la ligue de handball" }
      - { src: "faq-c3-accueil-16.png", alt: "Questions de la ligue de volley-ball vues par un utilisateur", legende: "Utilisateur de la ligue de volley-ball" }
  - comp: C4
    images:
      - { src: "faq-c4-bdd-1.png", alt: "Tableau Trello du projet AppFAQ organisé par lots", legende: "Suivi du projet par lots sur Trello" }
      - { src: "faq-c4-bdd-2.png", alt: "Arborescence des fichiers PHP du projet dans l'éditeur", legende: "Arborescence du projet" }
      - { src: "faq-c4-bdd-3.png", alt: "Cahier des charges : présentation de la M2L, du projet, du cycle de développement et des six lots", legende: "Cahier des charges et lotissement" }
  - comp: C5
    images:
      - { src: "faq-c5-formulaire-1.png", alt: "Cahier des charges : livrables attendus, documentation technique, documentation utilisateur et application", legende: "Livrables attendus" }
      - { src: "faq-c5-formulaire-2.png", alt: "Dépôt GitHub privé de l'équipe avec un dossier par lot et le README", legende: "Dépôt GitHub de l'équipe, organisé par lots" }
---

## Contexte

La Maison des Ligues de Lorraine (M2L) héberge et accompagne les ligues sportives de la région. Chaque ligue a son site ; la M2L souhaite y ajouter une foire aux questions, baptisée « AppFAQ ».

## Besoin

- Tout internaute peut poser des questions et consulter celles de sa ligue, après inscription.
- Les réponses sont saisies par les administrateurs de la FAQ.
- Le projet est découpé en six lots notés : conception, modélisation, site statique, site dynamique, tests et documentation, livraison.

## Solution

Une application web PHP/MySQL avec trois niveaux d'accès :

- **Utilisateur** : consulte et ajoute des questions pour sa ligue ;
- **Administrateur de ligue** : répond, modifie ou supprime les questions de sa ligue ;
- **Super administrateur** : accède aux questions de toutes les ligues.

Chaque page affiche uniquement ce que le rôle connecté a le droit de voir et de faire.

## Étapes

1. **Lot 1, conception** : diagrammes de cas d'utilisation, MCD, MLD, maquettes et plan du site.
2. **Lot 2, modélisation** : MLD corrigé, modèle physique (MPD) et répartition du travail.
3. **Lot 3, site statique** : accueil, connexion, inscription, liste et formulaires.
4. **Lot 4, site dynamique** : connexion à la base, sessions, rôles.
5. **Lot 5, tests et documentation** technique et utilisateur.
6. **Lot 6, livraison**, recette et corrections.

Le suivi s'est fait sur Trello et le code sur un dépôt GitHub commun, avec un dossier par lot.

## Résultat

Une application fonctionnelle, testée avec les trois rôles et les quatre ligues (football, basketball, handball, volley-ball).
