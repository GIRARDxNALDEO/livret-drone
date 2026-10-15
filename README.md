# Livret numérique NALDEO — V3

Livret statique : affichage double page sur ordinateur, simple page sur téléphone, navigation par sommaire, glissement sur mobile, clavier ← →, agrandissement et accès aux 7 PDF originaux.

## Publier sur GitHub Pages

1. Valider avec NALDEO la diffusion publique des documents professionnels et des données personnelles qu’ils contiennent.
2. Créer un dépôt public GitHub (`livret-drone`).
3. Transférer **le contenu de ce ZIP** à la racine du dépôt (`index.html`, `app.js`, `style.css`, `data.js`, `docs/`, `pages/`). Il ne faut pas envoyer le dossier conteneur comme sous-dossier.
4. Dans Settings > Pages, choisir « Deploy from a branch », branche `main`, dossier `/(root)`.
5. Ouvrir `https://VOTRE-COMPTE.github.io/livret-drone/` en navigation privée sur téléphone avant de générer le QR code.

## Mettre à jour les documents

Remplacer les PDF correspondants dans `docs/`, puis remplacer leurs aperçus dans `pages/` (WebP) : ces derniers sont les pages visibles du livret. Modifier `data.js` pour changer titres / ordre / fichiers. Il est possible de générer les WebP depuis des PDF avec PyMuPDF à 1,55 fois la taille PDF. Les PDF originaux restent disponibles séparément.

## Vigilance

Le relevé de situation exploitant daté du 20/04/2026 indique qu'aucune déclaration STS valide n'était enregistrée en France à cette date. Vérifier et actualiser cette information auprès de NALDEO/AlphaTango avant diffusion ou opérations concernées. L'assurance 2026 mentionne une fin au 01/01/2027, sous réserve des conditions contractuelles.

Site public : ne pas publier de pièce d'identité, document interne, ou données professionnelles sans autorisation. Le QR code ne crée aucune restriction d'accès.

Le site utilise Google Fonts lorsque disponible ; il reste exploitable sans chargement de police externe.
