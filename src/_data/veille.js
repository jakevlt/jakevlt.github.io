// Veille technologique : sujet, méthode et synthèses datées (de la plus récente à la plus ancienne).
// Chaque synthèse renvoie vers ses sources. La date est celle de l'événement ou de la publication suivie.
export default {
  sujet: "L'IA et la cybersécurité dans le développement logiciel",
  problematique:
    "Comment les développeurs peuvent-ils profiter des outils d'IA tout en protégeant leurs applications et leur chaîne de production logicielle ?",
  pourquoi: [
    "Les assistants et agents d'IA changent la façon d'écrire du code : je les utilise moi-même, par exemple Copilot pendant mon stage chez Fonroche Lighting.",
    "Ces mêmes outils créent de nouvelles failles (injection de prompt, dépendances compromises) que tout développeur doit connaître.",
    "La réglementation européenne (AI Act, Cyber Resilience Act) impose désormais des obligations aux éditeurs de logiciels.",
  ],
  outils: [
    {
      nom: "Google Alertes",
      usage: "Alertes par e-mail sur des mots-clés : « cybersécurité », « faille de sécurité », « intelligence artificielle », « LLM ».",
    },
    {
      nom: "LinkedIn",
      usage: "Abonnements à l'ANSSI, à OpenAI, à Google DeepMind et à des experts du secteur.",
    },
    {
      nom: "YouTube",
      usage: "Chaînes de vulgarisation et de développement : Underscore_, Micode, Grafikart, Computerphile.",
    },
  ],
  methode: [
    { frequence: "Chaque jour", action: "Lecture rapide du fil LinkedIn (10 à 15 minutes)." },
    { frequence: "Chaque semaine", action: "Lecture des alertes Google, tri des articles pertinents et classement dans un dossier dédié." },
    { frequence: "Chaque mois", action: "Rédaction d'une synthèse courte : les faits, les sources et ce que j'en retiens pour mon métier." },
  ],
  syntheses: [
    {
      date: "2026-09-11",
      titre: "Cyber Resilience Act : 24 heures pour signaler une faille exploitée",
      theme: "Cybersécurité",
      resume:
        "Depuis le 11 septembre 2026, tout fabricant d'un produit comportant des éléments numériques, logiciels compris, doit signaler à l'ENISA et au CSIRT compétent une vulnérabilité activement exploitée : alerte sous 24 heures, notification sous 72 heures, rapport final ensuite. Les autres exigences du règlement s'appliqueront le 11 décembre 2027.",
      retenir:
        "La sécurité devient une obligation légale pour les éditeurs : il faut pouvoir détecter, documenter et corriger une faille très vite, ce qui suppose un code versionné, des dépendances connues et une procédure de réponse aux incidents.",
      sources: [
        { titre: "Journal du Net", url: "https://www.journaldunet.com/cybersecurite/1555579-24-heures-pour-signaler-une-faille-cyber-la-nouvelle-regle-europeenne-qui-change-la-donne-pour-les-entreprises/" },
        { titre: "IT Social", url: "https://itsocial.fr/cybersecurite/cybersecurite-articles/cyber-resilience-act-les-fabricants-devront-notifier-les-vulnerabilites-exploitees-sous-24-heures/" },
      ],
    },
    {
      date: "2026-08-04",
      titre: "ChainDrop : un ver se propage dans des centaines de paquets npm",
      theme: "Cybersécurité",
      resume:
        "Parti d'une version piégée du paquet keyv, le ver ChainDrop a compromis des centaines de paquets npm en quelques heures. À l'installation, il volait les secrets des développeurs et des pipelines CI/CD (jetons GitHub et npm, clés cloud, clés SSH) puis utilisait les jetons volés pour se republier dans d'autres paquets.",
      retenir:
        "Une simple dépendance peut compromettre tout un poste de développement. Bonnes pratiques à appliquer : verrouiller les versions (fichier lock), limiter les scripts d'installation, ne jamais laisser de secrets en clair et renouveler les jetons après un incident.",
      sources: [
        { titre: "Datadog Security Labs", url: "https://securitylabs.datadoghq.com/articles/npm-worm-compromises-popular-npm-packages/" },
        { titre: "StepSecurity", url: "https://www.stepsecurity.io/blog/chaindrop-npm-worm" },
      ],
    },
    {
      date: "2026-08-02",
      titre: "AI Act : les obligations de transparence s'appliquent, le haut risque est reporté",
      theme: "Intelligence artificielle",
      resume:
        "Au 2 août 2026, le règlement européen sur l'IA rend applicables les obligations de transparence (informer l'utilisateur qu'il échange avec une IA, signaler les contenus générés) et le régime de sanctions. Le texte « omnibus » a en revanche reporté les obligations des systèmes à haut risque au 2 décembre 2027.",
      retenir:
        "Une application qui intègre un chatbot ou génère du contenu doit l'indiquer clairement à l'utilisateur. C'est une exigence à prévoir dès la conception, au même titre que le RGPD.",
      sources: [
        { titre: "Pôle d'excellence cyber", url: "https://www.pole-excellence-cyber.org/europe/ai-act-obligations-2-aout-2026/" },
        { titre: "DSIH", url: "https://dsih.fr/articles/6369/reglement-ia-le-2-aout-2026-entree-en-application-de-nouvelles-obligations" },
      ],
    },
    {
      date: "2026-06-11",
      titre: "L'injection de prompt, première faille des agents d'IA",
      theme: "IA et sécurité",
      resume:
        "Selon un rapport de l'OWASP sur la sécurité de l'IA « agentique », l'injection de prompt se retrouve dans six des dix risques identifiés pour ces applications. Un agent de code lit du contenu externe (ticket, commentaire, page web) qui peut contenir des instructions malveillantes, sans pouvoir distinguer de façon fiable les données des commandes.",
      retenir:
        "Un assistant de code ne doit jamais avoir à la fois accès à des secrets, à du contenu non fiable et à la possibilité d'agir vers l'extérieur. Bonne pratique : relire le code et les commandes proposés avant de les exécuter.",
      sources: [
        { titre: "Help Net Security", url: "https://www.helpnetsecurity.com/2026/06/11/owasp-prompt-injection-ai-security-failures/" },
      ],
    },
    {
      date: "2026-02-04",
      titre: "Le CERT-FR fait le point sur l'IA générative face aux attaques",
      theme: "IA et sécurité",
      resume:
        "Dans sa synthèse de la menace en 2025, le CERT-FR (ANSSI) décrit un double usage de l'IA générative : les attaquants s'en servent pour améliorer leurs attaques, et les systèmes d'IA deviennent eux-mêmes des cibles (empoisonnement des modèles, exfiltration de données, compromission de logiciels).",
      retenir:
        "Un outil d'IA intégré à une application est un composant à sécuriser comme un autre. L'ANSSI publie un guide de recommandations pour les systèmes d'IA générative, une lecture à approfondir.",
      sources: [
        { titre: "CERT-FR (PDF)", url: "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2026-CTI-001.pdf" },
      ],
    },
    {
      date: "2025-11",
      mois: true,
      titre: "OWASP Top 10 2025 : la chaîne d'approvisionnement entre dans le classement",
      theme: "Cybersécurité",
      resume:
        "La nouvelle édition du Top 10 de l'OWASP, référence des risques des applications web, crée la catégorie « Software Supply Chain Failures » (A03) : dépendances, outils de build et de distribution. Le contrôle d'accès défaillant reste en tête (A01) et une catégorie sur la mauvaise gestion des cas exceptionnels apparaît (A10).",
      retenir:
        "Le contrôle d'accès, que j'ai mis en œuvre avec les rôles d'AppFAQ, reste le premier risque : chaque page doit vérifier côté serveur les droits de l'utilisateur, pas seulement masquer les boutons.",
      sources: [
        { titre: "OWASP Top 10:2025", url: "https://top10.owasp.org/2025" },
        { titre: "Semgrep", url: "https://semgrep.dev/blog/2026/owasp-top-10-2025-whats-new/" },
      ],
    },
  ],
};
