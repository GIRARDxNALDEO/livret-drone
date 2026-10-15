# Livret documentaire télépilote — GitHub Pages

Mini-site statique de consultation de PDF pour les justificatifs de mission drone. **Les documents publiés sont accessibles à tous sur Internet.** Obtenir l'accord de l'employeur avant publication de documents NALDEO.

## Mise en ligne
1. Créer un dépôt GitHub public, par exemple `livret-drone`.
2. Déposer à la racine du dépôt `index.html`, `style.css`, `app.js`, `config.js` et le dossier `docs/`.
3. Dans **Settings > Pages**, choisir **Deploy from a branch**, branche **main**, dossier **/(root)**, puis enregistrer.
4. Attendre la publication. Le site est normalement accessible à `https://VOTRE-PSEUDO.github.io/livret-drone/`.
5. Tester dans une navigation privée, sur mobile et sans être connecté à GitHub.
6. Créer un QR code à partir de **l'adresse du site**, et non de celle d'un PDF, pour garder le QR identique lors des mises à jour.

## Ajouter ou modifier un document
1. Ajouter le fichier PDF au dossier `docs/` du dépôt. Utiliser un nom simple sans accent ni espace.
2. Dans `config.js`, ajouter une entrée à la liste `documents` :
```js
{ id: "nouveau-certificat", titre: "Mon nouveau certificat", categorie: "Qualifications", description: "Description", fichier: "docs/mon-certificat.pdf" }
```
3. Modifier `derniereMiseAJour` dans `config.js`.
4. Commiter et attendre la publication GitHub Pages.

Le tableau de documents dans `config.js` comporte des **exemples** : aucun PDF réel n'est inclus dans l'archive. Supprimer les entrées sans fichier correspondant avant publication.

## Limites et précautions
- GitHub Pages n'est pas un espace de stockage confidentiel. Même si les documents ne sont pas listés dans le livret, un PDF ajouté à un dépôt public reste public.
- Ne pas publier : pièces d'identité, numéros personnels sensibles, signatures ou dossiers internes non autorisés.
- Le livret est un **site de consultation**, pas une preuve de validité ou un contrôle automatique de conformité réglementaire.
- Les lecteurs PDF intégrés dépendent du navigateur ; les boutons **Ouvrir** et **Télécharger** restent disponibles.
- La consultation et les PDF nécessitent une connexion Internet. Prévoir une copie hors ligne si nécessaire.
- GitHub Pages n'est pas destiné à accueillir des fichiers volumineux ; privilégier des PDF raisonnablement compressés.
