# FAFA QUEST — v0.1 MVP

FAFA QUEST est une application PWA séparée d'Explor'Action, dédiée aux escape games, enquêtes et serious games en équipe.

## Déploiement GitHub Pages
Déposer le contenu de ce dossier à la racine du dépôt `fafa-quest`, puis activer GitHub Pages sur la branche de publication.

## Ce qui fonctionne dans cette version
- PWA installable et cache offline du moteur.
- 3 scénarios de démonstration : fantasy, harcèlement, science-fiction.
- 4 difficultés.
- Création de sessions et répartition automatique des participants.
- Plusieurs équipes et codes d'équipe.
- Rôles tournants par joueur.
- Énigmes texte, choix, multi-sélection, ordre et informations distribuées.
- Chronomètre, score, indices et inventaire.
- Tableau animateur local.
- Sauvegarde/reprise locale.

## Limite volontaire de v0.1
Le tableau de bord se synchronise en direct entre onglets du **même navigateur** grâce à BroadcastChannel/localStorage. La synchronisation entre plusieurs téléphones nécessite un backend temps réel et n'est pas simulée comme si elle existait.

## Vie privée
Le MVP ne demande ni compte, ni e-mail, ni numéro de téléphone. Pour les animations jeunesse, utiliser prénom ou pseudo uniquement.
