# Livret drone NALDEO — V4

Site statique de consultation, avec **7 PDF**, pages prévisualisées, navigation feuilletable, accès aux originaux, et bouton **Télécharger tous les justificatifs** (archive ZIP incluse).

## Publier sur GitHub Pages

1. Créez ou ouvrez un dépôt public GitHub (publication des documents à valider au préalable par NALDEO).
2. Mettez les fichiers du dossier `livret-drone-v4` **directement à la racine** du dépôt : `index.html`, `app.js`, `data.js`, `style.css`, `pages/`, `docs/`, `justificatifs-drone-naldeo.zip`.
3. Dans **Settings > Pages**, activez **Deploy from a branch**, branche `main`, dossier `/(root)`.
4. Attendez la publication puis ouvrez `https://VOTRE-COMPTE.github.io/NOM-DEPOT/` en navigation privée.
5. Générez un QR code vers **cette adresse** et placez-le sur la fiche QGIS. Aucun QR code réel n'est généré avant de connaître l'URL du site.

## Remplacer la V3 par la V4 — sans anciens fichiers

### Méthode recommandée si vous utilisez GitHub Desktop

Clonez le dépôt localement avec GitHub Desktop, supprimez **les anciens fichiers du site** (sans supprimer `.git`), copiez à leur place tout le **contenu** de ce dossier V4, puis **Commit to main > Push origin**. GitHub gérera automatiquement les ajouts, remplacements **et suppressions**.

### Depuis le site GitHub

`Add file > Upload files` remplace les fichiers ayant **exactement le même chemin et le même nom** ; il ne supprime **pas** les fichiers obsolètes. Pour supprimer ces derniers, ouvrez chaque fichier à supprimer et choisissez **Delete file**, puis confirmez le commit. Pour remplacer tout un site, GitHub Desktop est beaucoup plus pratique.

**Important** : Si vous copiez le dossier `livret-drone-v4` lui-même, plutôt que son contenu, votre page risque de ne pas se trouver à la racine attendue.

## Mettre à jour les justificatifs

Les originaux sont dans `docs/` et leurs images de prévisualisation dans `pages/`. Les titres et chemins sont définis dans `data.js`. Quand un PDF change, remplacez aussi les images de ses pages et reconstruisez `justificatifs-drone-naldeo.zip` si vous souhaitez conserver le téléchargement groupé à jour.

## Publication publique

Les PDF publiés sur GitHub Pages sont accessibles publiquement. Obtenez l'autorisation de NALDEO et vérifiez leur pertinence avant mise en ligne. Le livret est documentaire ; il ne remplace pas les autorisations ou démarches propres à chaque mission.
