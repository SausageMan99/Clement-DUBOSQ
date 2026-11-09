# clement-dubosq.com — « Le Fil »

Site personnel de Clément Dubosq : business developer, cap sur un V.I.E en Chine (novembre 2027).
Direction artistique : `design/v2/` (moodboard « Le Fil »).

## Lancer

```bash
npm install
npm run dev        # http://localhost:3000 (les brouillons d'essais sont visibles)
npm run verify     # lint + typecheck + build de production
```

## Modifier le contenu (sans toucher au design)

| Quoi | Où |
|---|---|
| Statut (sticker, hero, image OG), email, LinkedIn | `src/content/site.ts` → `site` |
| Textes du hero, preuves, bons d'intervention, FAQ, contact (EN + FR) | `src/content/site.ts` |
| Lignes personnalisées par entreprise (`/en?for=schneider-electric`) | `src/content/for.ts` |
| Essais (« Notes de terrain ») | `src/content/notes/*.mdx` + les enregistrer dans `src/content/notes/index.ts` |
| CV | `public/cv.pdf` |
| Photo (rendu cyanotype) | `public/img/clement-cyano.jpg` |

Tout ce qui est marqué `TODO(clement)` dans le contenu est une proposition à valider ou réécrire.

### Écrire une note de terrain
1. Copier `src/content/notes/premier-rendez-vous-diagnostic.mdx`, changer `meta` (slug, lang, titre, date).
2. L'ajouter dans `src/content/notes/index.ts` (`entry(module, nombreDeMots)`).
3. `status: "draft"` = visible seulement en local. Passer à `"published"` pour la mettre en ligne.
4. `<Note>…</Note>` = note dans la marge.

La section « Notes de terrain » et son lien dans le menu n'apparaissent en production qu'à partir d'une note publiée.

## Technique

- Next.js 16 (App Router), TypeScript, MDX. Pas de librairie d'animation : le fil est un SVG dont le tracé suit le scroll (`src/components/ThreadController.tsx`), visible sans JavaScript, et figé si l'utilisateur préfère moins d'animations.
- `/` redirige vers `/fr` ou `/en` selon la langue du navigateur (`src/proxy.ts`).
- Image de partage générée par page (`src/app/[lang]/opengraph-image.tsx`), sitemap et robots générés.
- Polices locales (OFL) : Archivo (variable en largeur), Reenie Beanie et Caveat (écriture et signature, provisoires en attendant les vrais scans), Courier Prime (bons d'intervention), Anton (image OG).
