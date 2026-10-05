---
titre: "ONBRD, l'application qui automatise les parcours d'intégration"
titreCourt: "ONBRD (Fonroche Lighting)"
description: "Fiche de réalisation : conception et développement d'ONBRD chez Fonroche Lighting, une application Django qui planifie les parcours d'intégration via Microsoft Graph et génère le planning en PDF."
resume: "Pendant mon stage de 2e année chez Fonroche Lighting, j'ai conçu et développé seul une application web Django qui planifie automatiquement les rendez-vous d'intégration des nouveaux collaborateurs dans les agendas Outlook."
contexte: stage
cadre: "Stage de 2<sup>e</sup> année BTS SIO (6 semaines)"
organisation: "Fonroche Lighting, Sainte-Colombe-en-Bruilhois (47), service informatique"
periode: { debut: "2026-01", fin: "2026-02" }
equipe: "Projet individuel, encadré par le DSI"
role: "Analyse du besoin, conception, développement, tests et documentation"
technologies: [Python, Django, PostgreSQL, Microsoft Graph API, OAuth 2.0, ReportLab, HTML/CSS, Git/GitLab, PyCharm]
competences: [C1, C2, C3, C4, C5, C6, B2.1, B2.3, B3.3, B3.5]
vignette: { src: "onbrd-c3-8.png", alt: "Interface d'ONBRD : planification automatique d'un parcours d'intégration" }
une: true
documents:
  - { titre: "Rapport de stage Fonroche Lighting", url: "/documents/rapport-stage-fonroche-lighting-2026.pdf", info: "PDF, 33 pages" }
preuves:
  - comp: C1
    texte: "Versionnement du code sur le GitLab de l'entreprise et organisation du projet Django."
    images:
      - { src: "env-c1-arborescence-1.png", alt: "Schéma du système ONBRD : l'application Django lit et écrit dans PostgreSQL, interroge l'API Microsoft Graph et sauvegarde son code sur GitLab", legende: "Schéma du système : Django, PostgreSQL, Microsoft Graph et dépôt GitLab" }
      - { src: "env-c1-arborescence-2.png", alt: "Arborescence du projet Django ONBRD dans l'éditeur", legende: "Arborescence du projet" }
  - comp: C2
    texte: "Analyse de la demande du service RH et réponse par une évolution applicative."
    images:
      - { src: "onbrd-c2-1.png", alt: "Extrait du rapport : problématique du service RH, planification manuelle et fragmentée", legende: "La problématique exprimée par le service RH" }
      - { src: "onbrd-c2-2.png", alt: "Extrait du rapport : les quatre étapes de la solution ONBRD", legende: "La solution proposée en quatre étapes" }
      - { src: "onbrd-c2-3.png", alt: "Code Python d'une fonction qui crée un événement Outlook via l'API Microsoft Graph avec un jeton d'accès", legende: "Création des invitations Outlook via l'API Microsoft Graph" }
  - comp: C3
    texte: "Une application web interne qui exploite les données de l'organisation (collaborateurs, services, agendas)."
    images:
      - { src: "onbrd-c3-1.png", alt: "Page de connexion d'ONBRD", legende: "Connexion sécurisée" }
      - { src: "onbrd-c3-2.png", alt: "Page de gestion des entrées avec sélection d'un nouvel arrivant et sa fiche récapitulative", legende: "Gestion des nouveaux arrivants" }
      - { src: "onbrd-c3-3.png", alt: "Formulaire d'ajout d'un nouvel arrivant : prénom, nom, date d'arrivée et poste", legende: "Ajout d'un nouvel arrivant" }
      - { src: "onbrd-c3-4.png", alt: "Liste des arrivants avec un bouton Retirer pour supprimer un profil", legende: "Suppression de profils" }
      - { src: "onbrd-c3-5.png", alt: "Interface d'administration Django pour modifier un profil d'arrivant", legende: "Modification via l'administration Django" }
      - { src: "onbrd-c3-6.png", alt: "Interface de création du parcours : choix du service et de la personne à rencontrer", legende: "Création du parcours d'intégration" }
      - { src: "onbrd-c3-7.png", alt: "Tableau d'édition des rencontres : objet, durée, mode présentiel ou distanciel, date et heure", legende: "Édition des paramètres de chaque rencontre" }
      - { src: "onbrd-c3-8.png", alt: "Bouton Planification automatique et aperçu du parcours planifié", legende: "Planification automatique" }
      - { src: "onbrd-c3-9.png", alt: "Planning d'intégration généré au format PDF avec horaires, interlocuteurs et zones d'émargement", legende: "Planning PDF généré et envoi des invitations Outlook" }
  - comp: C4
    texte: "Analyse, conception, réalisation, tests puis documentation, en prototypage rapide sur six semaines."
    images:
      - { src: "onbrd-c4-1.png", alt: "Extrait du rapport : analyse, conception et début de la réalisation", legende: "Phases d'analyse et de conception" }
      - { src: "onbrd-c4-2.png", alt: "Extrait du rapport : apport de l'IA, génération du PDF, tests et documentation", legende: "Réalisation, tests et documentation" }
      - { src: "onbrd-c4-3.png", alt: "Extrait du rapport : compétences mobilisées, cahier des charges et démarche", legende: "Cahier des charges et démarche" }
  - comp: C5
    texte: "Tests d'acceptation avec le service RH et remise d'un guide utilisateur."
    images:
      - { src: "onbrd-c5-1.png", alt: "Extrait du rapport : tests de charge, validation des invitations et conformité RH", legende: "Tests d'acceptation" }
  - comp: C6
    texte: "Montée en compétences sur Django, PostgreSQL et l'API Microsoft Graph."
    images:
      - { src: "env-c6-bdd-1.png", alt: "Extrait du rapport : langages et frameworks utilisés, Python, Django, HTML et CSS", legende: "Langages et frameworks appris" }
      - { src: "env-c6-bdd-2.png", alt: "Extrait du rapport : sécurité OAuth 2.0, PyCharm, Copilot Pro et Git/GitLab", legende: "Environnement de développement" }
      - { src: "env-c6-bdd-3.png", alt: "Base de données PostgreSQL du projet affichée dans pgAdmin 4", legende: "Base de données PostgreSQL dans pgAdmin 4" }
---

## Contexte

Fonroche Lighting conçoit et fabrique des lampadaires solaires autonomes. J'ai été accueilli au service informatique, sous la responsabilité du DSI, pour répondre à un besoin interne du service des ressources humaines.

## Besoin

Pour chaque nouvel arrivant, le service RH construit un parcours d'intégration d'environ deux semaines : des rencontres avec une dizaine de collaborateurs de différents services. Avant le projet, ce travail était manuel :

- des fichiers Excel de suivi d'un côté, les agendas Outlook de chaque interlocuteur de l'autre ;
- la recherche des créneaux libres agenda par agenda, ce qui pouvait occuper une journée entière lors d'arrivées multiples ;
- aucun lien entre le planning et l'envoi des invitations, d'où des risques d'oubli et d'erreur.

L'objectif : supprimer la saisie manuelle, vérifier automatiquement les disponibilités et envoyer les invitations en un clic.

## Solution

J'ai conçu **ONBRD**, une application web Django organisée en quatre étapes :

1. **Configuration du parcours** : le gestionnaire RH sélectionne le nouvel arrivant et les personnes qu'il doit rencontrer.
2. **Planification automatique** : l'application interroge les agendas Outlook via l'API Microsoft Graph et place chaque rencontre sur un créneau libre (entre 9 h et 17 h), sans toucher aux rendez-vous déjà fixés à la main.
3. **Génération et validation** : le planning est produit en PDF (français ou anglais) avec ReportLab, avec horaires, interlocuteurs et zones d'émargement.
4. **Synchronisation** : après validation du PDF, un bouton envoie toutes les invitations Outlook d'un coup.

L'accès est protégé par l'authentification Django et l'accès aux agendas passe par des jetons OAuth 2.0, en lecture seule pour la recherche de disponibilités.

## Étapes

1. **Analyse** du processus RH existant et rédaction du besoin.
2. **Conception** : choix de Django, modélisation de la base PostgreSQL (nouveaux arrivants, référents, parcours), définition du flux de travail.
3. **Réalisation** par itérations successives sur l'algorithme de recherche de créneaux, avec l'aide de Copilot Pro pour la conversion des dates au format ISO 8601 et la gestion des cas sans créneau libre.
4. **Tests** : arrivée simultanée de trois collaborateurs, vérification des invitations dans Outlook (objet, salle), validation du PDF par les RH.
5. **Documentation** : remise d'un guide utilisateur au service RH.

## Difficultés rencontrées

- **L'interfaçage avec Microsoft Graph** : authentification par jeton, format des requêtes JSON et gestion des fuseaux horaires.
- **Les formats de date** : Outlook attend de l'ISO 8601, différent des objets `datetime` de Python. J'ai utilisé l'IA pour accélérer le débogage, pas pour copier du code sans le comprendre.
- **La confidentialité** : les extraits publiés ici ont été choisis pour limiter l'exposition des mécanismes sensibles de l'entreprise.

## Résultat

L'outil est fonctionnel et a été validé par le service RH, qui l'a testé et m'a fait des retours pour l'améliorer. Il fait gagner plusieurs heures par semaine au service RH. L'application tourne pour l'instant en local (serveur de développement Django) ; le déploiement sur un serveur de production reste à faire.

Ce que j'en retiens : mener un projet de bout en bout, de l'analyse du besoin à la livraison, et travailler avec une API tierce dans un environnement professionnel.
