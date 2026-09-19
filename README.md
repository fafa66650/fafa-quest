# FAFA QUEST v0.4.0 — PRO / IMMERSIVE

Application PWA statique prête pour **GitHub Pages**. Une seule application : joueur + animateur.

## Déploiement
1. Décompresser le ZIP.
2. Mettre **le contenu** à la racine du dépôt `fafa-quest`.
3. GitHub → **Settings → Pages → Deploy from a branch → main / root**.
4. Ouvrir l’URL GitHub Pages.

## Cette version
- 24 jeux originaux, sans doublons de scénario ou d’ID d’épreuve.
- 150 épreuves avant adaptation automatique par niveau.
- Classement par familles, genres, publics et formats.
- Monde **Questions d’ados** : harcèlement, cyberviolence, images/vie privée, pression du groupe, discrimination/exclusion, faux comptes/phishing, désinformation, gaming/chat.
- 4 niveaux réellement différenciés : Découverte, Aventure, Expert, Maître.
- En Expert/Maître, de nombreux QCM passent en réponse libre ; les mémoires et aides changent aussi selon le niveau.
- Aides en 3 étages : coup de pouce, indice fort, solution temporisée selon le niveau.
- Tableau animateur protégé par code local.
- Gestion des équipes : ajouter/retirer/déplacer un joueur, rôles, renommer, réinitialiser.
- Rotation automatique des salles pour les scénarios TV / écran central.
- Signature d’équipe : le même code de salle produit un code terminal différent pour chaque équipe.
- Écran public ouvrable dans une deuxième fenêtre pour TV / vidéoprojecteur.
- Chronomètre : fin stricte, décision animateur ou mode loisir.
- Kit imprimable : plan, cartes équipes, signatures, départs, rôles et fiches animateur.
- Mode test animateur avec réponses.
- Liens d’équipe autonomes pour jouer sur un autre téléphone **sans synchronisation live**.
- Intro, transitions de chapitres, finales et ambiance visuelle renforcées.
- Service Worker nettoyé : cache v0.4 et notification de mise à jour.

## Important : multi-appareils
GitHub Pages est statique. Un lien autonome permet d’ouvrir une copie locale d’une équipe sur un autre téléphone, mais **la progression ne remonte pas en direct chez l’animateur**. Le vrai Live multi-téléphones nécessitera un backend temps réel dans une version ultérieure.

## Protection animateur
Le code animateur est une protection locale contre l’accès accidentel des joueurs. Ce n’est pas un système d’authentification serveur.

## Propriété intellectuelle
Les fichiers et liens de référence ont servi à analyser des **mécaniques** et des architectures de jeu. Les scénarios intégrés dans FAFA QUEST ont été réécrits et rendus originaux. Les personnages, visuels, musiques et scénarios protégés (Nintendo, Marvel, œuvres commerciales, etc.) ne sont pas intégrés.
