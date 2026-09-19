# FAFA QUEST v0.6 — GITHUB ONLY PRO

Application unique pour **GitHub Pages uniquement** sous l’identité **FAFATRAINING • ESCAPE • IMMERSION**.

## Principes
- Aucun backend externe requis.
- PWA statique + JavaScript + stockage local.
- Téléphone : compagnon joueur, QR/lien, réponses, indices et inventaire.
- Tablette : appareil partagé par une équipe.
- Ordinateur : tableau animateur et terminal central.
- TV / vidéoprojecteur : chrono, progression et classement local.
- Jeux numériques, hybrides papier/objets et grands jeux multi-salles.

## v0.6
- Accueil séparé **JOUER / ANIMER**.
- QR autonome d’équipe généré localement, sans prénom dans l’URL.
- Compatibilité Solo / Équipe / TV / Hybride affichée jeu par jeu.
- Solo signalé quand une adaptation est nécessaire.
- Tableau animateur enrichi : détection d’équipe sans progression, classement local, rotation, QR/lien.
- Écran public TV enrichi.
- Niveaux plus différenciés : QCM masqués en Expert/Maître, cartes de rôles scellées, mémoire adaptée, faux fichiers/éléments supplémentaires selon le niveau.
- Supports génériques imprimables ajoutés à tous les jeux hybrides qui n’avaient pas encore de kit spécifique.
- Service Worker v0.6 nettoyant les anciens caches FAFA QUEST.

## Limite assumée du mode GitHub-only
Un lien/QR ouvre une **copie autonome locale** de l’équipe sur un autre appareil. Sans serveur, la progression de ce téléphone ne peut pas remonter en temps réel vers l’ordinateur animateur. L’application ne prétend donc pas proposer de synchronisation Live multi-appareils.

## Déploiement
Déposer **le contenu de ce dossier** à la racine du dépôt GitHub Pages. Ne pas déposer d’anciens ZIP ou anciennes versions dans le dépôt.
