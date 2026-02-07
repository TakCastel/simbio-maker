# Sims Maker

Créer sa **legacy card** façon The Sims : une carte de personnage avec aspirations, diplômes, carrière, traits, compétences, généalogie, etc. Édition dans l’interface, prévisualisation en format A4 avec zoom et déplacement, export en image PNG.

**Idée :** u/AriaSims24 · **Studio Castel**

---

## Lancer en local

**Prérequis :** Node.js (v18+)

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

---

## Build statique

```bash
npm run build
```

Le site est généré dans le dossier `out/`. Tu peux servir ce dossier avec n’importe quel hébergeur de fichiers statiques.

---

## Déploiement (Netlify)

1. Connecte le dépôt à Netlify.
2. **Build :** `npm run build`
3. **Répertoire à publier :** `out`

Le fichier `netlify.toml` est déjà configuré ; Netlify l’utilisera automatiquement.

---

## Stack

- **Next.js** 15 (export statique)
- **React** 19
- **Tailwind CSS**
- **html2canvas** pour l’export image de la carte
