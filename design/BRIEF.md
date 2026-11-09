# clement-dubosq.com v2 — Brief de refonte

> Version visuelle complète : ouvrir `design/moodboard.html` dans un navigateur (fichier autonome, polices et images intégrées).
> Pour le régénérer après modification de `moodboard.src.html` : `python3 design/build_moodboard.py`.

## 1. Diagnostic du site actuel (« Open Pipeline »)

**À garder :** le ton « pas de survente », la méthode en 6 étapes (Target → Signal → Contact → Qualify → Follow-up → Pipeline), l'accessibilité (skip link, reduced-motion), le JSON-LD, la base papier chaud + un accent.

| # | Problème | Gravité |
|---|---|---|
| 1 | Le titre hero « DEVELOPMEN » est tronqué à 1440 px comme à 390 px | critique |
| 2 | Le site annonce « alternance septembre 2026 » alors qu'on est en novembre 2026 | critique |
| 3 | `public/og-image.png` fait 1 octet : aucun aperçu quand le lien est partagé (LinkedIn, mail) | critique |
| 4 | Les sections sont à `opacity:0` jusqu'au scroll-trigger GSAP : une capture ou un scroll rapide montre une page vide | majeur |
| 5 | Aucun visage : `photo.png` existe mais n'est pas affichée | majeur |
| 6 | Aucune voix : rien ne montre comment Clément pense ou écrit | majeur |
| 7 | Incohérences site ↔ CV : W hub (site seulement), Wav'Arts (CV seulement), Bachelor « MCN » vs « Management d'Entreprise », IPAC Caen vs recherche à Paris, téléphone du CV à 9 chiffres, adresse wanadoo | majeur |
| 8 | Jargon FR/EN (Proof Ledger, Fit Map, Recruiter brief) | mineur |
| 9 | Three.js pour un profil commercial : du poids JS qui ne prouve rien | mineur |

## 2. La cible

Personas fictifs (hypothèses à valider avec 3 à 5 vrais recruteurs) :

- **Camille, chargée de recrutement (scale-up SaaS)** : ouvre le lien depuis LinkedIn, sur mobile, en 30–60 s. Elle veut savoir s'il faut transmettre le profil au manager. Elle cherche : poste, dispo/rythme, école, ville, 2–3 preuves chiffrées, CV PDF.
- **Thomas, Head of Sales (futur tuteur)** : lit 3–5 min sur desktop avant l'entretien. Il veut savoir s'il pourra le mettre au téléphone dans 3 semaines. Il cherche : la qualité d'écriture, la rigueur du pipe, la faim, la capacité à recevoir du feedback.
- **Sarah, fondatrice d'une startup (15 personnes)** : recrute son premier BD. Elle veut savoir s'il se débrouillera sans process. Elle cherche : l'esprit entrepreneur, la polyvalence, des opinions.

**Insight :** le site est la première prospection. Ce qui compte d'abord, c'est l'aperçu du lien et le premier écran mobile.
**Test des 5 secondes (premier écran mobile) :** Qui · Quoi · Quand · Où · Preuve · Action.

## 3. Direction : « Terrain » (recommandée)

Éditorial chaleureux : une serif expressive, du papier, de l'encre et un orange « signal ». Le niveau Awwwards doit venir de la typographie, du rythme et des micro-interactions, pas de la 3D.
Pistes écartées : **B « Signal »** (dashboard data, froid, vite générique) et **C « Kinetic »** (WebGL/smooth-scroll, lent et hors sujet pour un BD : c'est le défaut de la v1).

- **Palette :** Papier `#F2EEE6` · Encre `#141413` · Signal `#FF4F1A` (graphique uniquement ; texte d'accent `#B3340A`, 5,3:1) · Marine `#16203A` (tiré de la photo, mode sombre) · Pierre `#6B675E` · Filet `#D9D3C7`. Règle 80/15/5.
- **Typo (OFL, gratuites) :** Instrument Serif (display) · Newsreader (lecture/essais) · Geist Mono (données, labels) + Geist (boutons).
- **Signature :** pastille de statut alimentée par une source unique · personnalisation `?pour=entreprise` · chiffres-preuves avec contexte · index d'essais sobre avec révélation au survol · notes en marge · liens soulignés en orange.
- **Mouvement :** visible d'abord, animé ensuite. Interdits : scroll-jacking, curseur custom, preloader, contenu à `opacity:0`.

## 4. Références

Awwwards SOTD 2026 : Léo Parpeix (14/09), G. Colombel (28/10), Obys (05/2026), Extrafazant / ViV / Grail / DeepBook (3–8/11), portfolios SOTD (Jesper Landberg, Gil Huybrecht, Maria Vasilyeva, Pacôme Pertant, Adcker), Lando Norris (SOTY 2025 d'après une synthèse tierce).
Essais : paulgraham.com/articles.html, darioamodei.com.
⚠ Ces pages n'ont pas pu être ouvertes depuis l'environnement de travail (réseau restreint). Les références viennent des résultats de recherche et sont à valider visuellement.

## 5. Architecture

- `/` Accueil (scannable en 60 s) : Hero + statut + photo → 4 preuves → Parcours → Étude de cas WebVision → Méthode → 3 derniers essais → Contact
- `/travaux/[slug]` : WebVision, Atlas Avocat, Wav'Arts
- `/essais` + `/essais/[slug]` : index par année, page de lecture (colonne de 640 px, sommaire sticky, notes en marge, progression, essai suivant, CTA)
- `/a-propos` : parcours atypique (bac pro MEI → fondateur → BD), bloc « Maintenant » daté
- `/cv` : CV HTML imprimable + PDF, même source de données

## 6. Section Essais

Format : la structure de Dario Amodei (sections numérotées, notes, position assumée) avec la longueur et la simplicité de Paul Graham (600 à 1 500 mots, une idée par essai), nourries par le terrain.
Règles : les écrire soi-même · 3 au lancement, puis 1 par mois · partir d'une scène réelle · finir sur ce qu'on ferait concrètement dans une équipe sales.

Sujets proposés :
1. Le premier rendez-vous est un diagnostic (maintenance industrielle → vente)
2. Ce que 8 clients m'ont appris sur la relance
3. Pourquoi j'écris des messages de moins de 80 mots
4. Vendre une vidéo à quelqu'un qui n'en voulait pas
5. Ce qu'un cabinet d'avocats m'a appris sur la confiance
6. Le CRM n'est pas un outil, c'est une mémoire
7. L'IA va-t-elle remplacer les SDR ?
8. Pourquoi je veux apprendre la vente en startup
9. Ce que la course à pied m'apprend sur le pipeline

## 7. Plan

0. **Urgences site actuel (1 j)** : date, titre tronqué, og-image, alignement CV ↔ site
1. **Contenu (2–3 j)** : promesse, bio, chiffres avec contexte, étude de cas WebVision, 3 essais, vraie photo, adresse pro
2. **Build (3–4 j)** : Next.js 16 + MDX + `site.config.ts` + `next/og` + RSS + JSON-LD + `next/font` ; suppression de three.js
3. **Signature & mesure (1–2 j)** : `?pour=`, analytics, mode sombre, Lighthouse ≥ 95, test avec 3 recruteurs

Budget : moins de 80 ko de JS sur l'accueil, LCP sous 1,5 s en 4G.

## 8. Questions ouvertes

1. Statut actuel de la recherche (en recherche / en poste / rentrée 2027) ?
2. Rythme et date de début de l'alternance ?
3. Paris : déjà sur place ou déménagement ?
4. W hub : dates et rôle exacts ?
5. Chiffres (+40 % de leads, 95 %, -25 %) : chacun est-il racontable en entretien ?
6. La photo actuelle est-elle une vraie photo non retouchée ?
7. Lancer le build de la v2 dans la direction « Terrain » ?
