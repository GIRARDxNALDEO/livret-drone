// Modifiez uniquement ce fichier pour renseigner le dossier et ajouter des PDF.
// Déposez vos PDF dans le dossier "docs" (sans espaces ni accents dans les noms de fichiers).
window.LIVRET = {
  titre: "Livret documentaire télépilote",
  organisme: "NALDEO — Missions drone", // À publier uniquement avec l'accord de l'entreprise.
  telepilote: "Télépilote professionnel",
  derniereMiseAJour: "2026-10-15",
  documents: [
    { id: "certificat", titre: "Certificat théorique de télépilote", categorie: "Qualifications", description: "Justificatif de qualification théorique", fichier: "docs/certificat-theorique.pdf" },
    { id: "formation", titre: "Attestation de formation pratique", categorie: "Qualifications", description: "Formation aux opérations de drone", fichier: "docs/attestation-formation.pdf" },
    { id: "exploitant", titre: "Attestation d'enregistrement exploitant", categorie: "Exploitant", description: "Enregistrement de l'exploitant UAS", fichier: "docs/enregistrement-exploitant.pdf" },
    { id: "assurance", titre: "Attestation d'assurance", categorie: "Assurance", description: "Assurance responsabilité civile aérienne", fichier: "docs/assurance.pdf" },
    { id: "procedures", titre: "Procédures et justificatifs complémentaires", categorie: "Documentation", description: "Documents utiles au contrôle", fichier: "docs/justificatifs.pdf" }
  ]
};
