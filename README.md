# Portfolio — Benjamin Bridanne

Portfolio personnel de **Benjamin Bridanne**, chargé de communication digitale et éditoriale.

🔗 **En ligne :** [benjaminbridanne.github.io/portfolio](https://benjaminbridanne.github.io/portfolio/)

## À propos

Site vitrine qui rassemble mes projets de communication, d'édition et de design web, mon parcours et mes compétences. Deuxième édition, entièrement redessinée : interface sombre par défaut avec bascule light, mise en page en cartes, accent bleu réservé aux interactions clés.

## Stack

Site statique, sans framework ni build. Uniquement :

- **HTML5** sémantique
- **CSS** natif (custom properties, grid, flexbox)
- **JavaScript** vanilla (bascule de thème, galeries, zoom)

Aucune dépendance à installer, aucun `node_modules`, tout tourne à l'ouverture du fichier.

## Structure

```
.
├── index.html                      # Page d'accueil
├── projets.html                    # Liste des projets
├── projet-*.html                   # 9 études de cas
├── mentions-legales.html
└── Images/                         # Visuels, icônes, CV, livrables
```

## Lancer en local

Ouvrir `index.html` directement dans un navigateur suffit. Pour une navigation plus fidèle (chemins relatifs propres) :

```bash
# Avec Python
python3 -m http.server 8000

# Avec Node
npx serve .
```

Puis rendez-vous sur `http://localhost:8000`.

## Déploiement

Hébergé sur **GitHub Pages** depuis la branche `main`. Tout push sur `main` met à jour le site sous quelques minutes.

## Contact

- **Portfolio :** [benjaminbridanne.github.io/portfolio](https://benjaminbridanne.github.io/portfolio/)
- **LinkedIn :** à compléter
- **Mail :** à compléter

---

© Benjamin Bridanne — Tous droits réservés.
