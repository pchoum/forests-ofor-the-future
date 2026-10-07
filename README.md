# Forests of/for the Future

Site vitrine statique (HTML/CSS/JS, sans dépendance) d'un fonds qui acquiert et gère des forêts de manière responsable : un cœur intact, sans intervention humaine, entouré d'un anneau de sylviculture durable. Le site mène à un formulaire d'intérêt.

## Structure

```
index.html          accueil (pourquoi les forêts, approche, rendement, héritage, formulaire d'intérêt)
investir.html       « Comment (m')investir ? » : 3 parcours (temps et bras / 10 à 1 000 € / plus de 1 000 €)
css/styles.css      styles et variables de couleur
js/main.js          validation et envoi du formulaire, pré-sélection du centre d'intérêt (?type=)
assets/             photos et favicon
```

## Prévisualiser en local

```
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000.

## À compléter avant la mise en ligne

- [ ] **Formulaire** : l'attribut `action` du `<form id="interest-form">` pointe vers `https://formspree.io/f/REMPLACER_MOI`. Remplacer par le point d'accès réel. Options simples pour un site statique : Formspree, Basin, Getform, Netlify Forms (si hébergé sur Netlify), ou une petite API maison. Les champs envoyés : `name`, `email`, `phone`, `profile`, `amount`, `message`, `consent`.
- [ ] **Chiffres clés** (section Rendement) : rendement cible, horizon, surface, part du cœur intact (`[X %]`, `[X ans]`, `[X ha]`).
- [ ] **Politique de confidentialité** : créer la page et brancher le lien dans le formulaire. Le consentement est obligatoire (RGPD).
- [ ] **Mentions légales, agrément et informations réglementaires** (pied de page). Avoir le texte relu par un conseil juridique : une page qui présente un fonds à des investisseurs est encadrée.
- [ ] **Photos** : les deux images (`assets/hero-brume.jpg`, `assets/heritage-sentier.jpg`) sont des images de travail provisoires, de provenance et de licence non vérifiées. Les remplacer par des photos libres de droits (Unsplash, Pexels) ou les vôtres avant la mise en ligne publique.
- [ ] **Polices** : chargées depuis Google Fonts. Pour limiter les transferts de données vers des tiers, les auto-héberger en production.
- [ ] **Coordonnées de contact** et nom de domaine.
- [ ] **Campagne Miimosa** (`investir.html`, parcours 2) : le bouton pointe vers `https://www.miimosa.com/`. Remplacer par l'adresse de la campagne. Vérifier auprès de Miimosa que le projet est éligible et que les contreparties sont acceptées.
- [ ] **Contreparties** (`investir.html`, parcours 2) : paliers de 10 à 1 000 € (Graine, Pousse, Kit du petit forestier, Carte du Gardien, Arbre remarquable, Nuit sous la canopée, Gardien de la forêt). Ce sont des propositions : valider ce qui est réalisable (coûts, logistique, assurance, accès aux forêts), et que rien ne laisse croire à un droit sur la forêt.
- [ ] **Séjours et plantations** (`investir.html`, parcours 1) : renseigner dates, lieux, tarifs et conditions des premiers chantiers dès qu'ils sont connus. Vérifier l'assurance et les autorisations pour accueillir du public.
- [ ] **Fonds** (`investir.html`, parcours 3) : ticket minimum, investisseurs éligibles, agrément, documentation. Ces conditions relèvent de la réglementation financière applicable : à faire valider par un conseil juridique avant toute communication.
- [ ] **Champ « Ce qui vous intéresse »** du formulaire : valeurs envoyées `benevole`, `contrepartie`, `fonds`, `info`. Les liens de la page « Comment (m')investir ? » pré-sélectionnent la bonne valeur via `index.html?type=…#interet`.
- [ ] **Engagements** de la section « La certitude d'investir… » (charte dans les statuts, protection juridique du cœur, audits, reporting) : à confirmer avec la structure réelle du fonds.

## Déploiement

Tout hébergeur de site statique convient : GitHub Pages, Netlify, Vercel, Cloudflare Pages. Le dossier racine à publier est celui qui contient `index.html`.
