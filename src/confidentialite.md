---
layout: layouts/page.njk
titre: Politique de confidentialité
description: "Politique de confidentialité du portfolio de Jake Volante : aucun cookie ni traceur, et données du formulaire de contact utilisées uniquement pour répondre."
permalink: /confidentialite/
surtitre: Données personnelles (RGPD)
chapo: "En résumé : ce site ne dépose aucun cookie et n'utilise aucun outil de mesure d'audience. Les seules données personnelles traitées sont celles que vous m'envoyez volontairement par le formulaire de contact ou par e-mail."
---

## Responsable du traitement

{{ site.auteur.nomComplet }}, joignable à [{{ site.auteur.email }}](mailto:{{ site.auteur.email }}).

## Ce que le site ne fait pas

- **Aucun cookie** n'est déposé.
- **Aucun outil de mesure d'audience** ni traceur publicitaire n'est utilisé.
- **Aucune ressource externe** n'est chargée lors de la navigation : les polices, les images et les scripts sont hébergés sur le site lui-même.

<h2 id="formulaire">Formulaire de contact</h2>

Le formulaire de contact recueille votre nom, votre adresse e-mail, le nom de votre entreprise (facultatif) et votre message.

- **Finalité** : répondre à votre message, et rien d'autre.
- **Base légale** : votre consentement, donné en cochant la case prévue avant l'envoi.
- **Conservation** : le site ne stocke aucune donnée. Votre message arrive dans ma messagerie ; je le supprime lorsqu'il n'est plus utile, et au plus tard un an après notre dernier échange.
{%- if site.formulaire.cle %}
- **Acheminement** : le message est transmis à ma messagerie par le service [Web3Forms](https://web3forms.com). D'après sa documentation, ce service ne conserve pas les messages, mais ses serveurs sont situés aux États-Unis : vos données peuvent donc transiter hors de l'Union européenne.
{%- else %}
- **Acheminement** : l'envoi ouvre votre propre messagerie avec le message prérempli ; rien ne transite par un service tiers.
{%- endif %}

Vous pouvez retirer votre consentement et demander l'effacement de votre message à tout moment en m'écrivant.

## Stockage dans votre navigateur

Deux informations techniques sont enregistrées dans votre navigateur. Elles restent sur votre appareil, ne sont jamais transmises et ne permettent pas de vous identifier :

- **Préférence de thème** (`localStorage`, clé `theme`) : uniquement si vous choisissez le thème clair ou sombre avec le bouton prévu.
- **Chronomètre** (`sessionStorage`, clé `chrono-debut`) : l'heure d'ouverture du site, effacée à la fermeture de l'onglet.

## Hébergement et journaux techniques

Le site est hébergé par GitHub Pages. Comme tout hébergeur, GitHub peut enregistrer des données techniques de connexion (adresse IP notamment) pour assurer la sécurité et le bon fonctionnement du service. Ce traitement relève de la responsabilité de GitHub : voir la [déclaration de confidentialité de GitHub](https://docs.github.com/fr/site-policy/privacy-policies/github-general-privacy-statement).

## Vos droits

Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et d'effacement des données vous concernant. Pour l'exercer, écrivez-moi à l'adresse ci-dessus. Vous pouvez aussi adresser une réclamation à la [CNIL](https://www.cnil.fr).

*Dernière mise à jour : 23 novembre 2026.*
