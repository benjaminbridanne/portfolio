# Portfolio — Benjamin Bridanne

Portfolio personnel de **Benjamin Bridanne**, chargé de communication digitale et éditoriale.

🔗 **En ligne :** [benjaminbridanne.fr](https://benjaminbridanne.fr/)

## À propos

Site vitrine qui rassemble mes réalisations en communication, d'édition et de design web, mon parcours et mes compétences. Deuxième édition, entièrement redessinée : interface sombre par défaut avec bascule light, mise en page en cartes, accent bleu réservé aux interactions clés.

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
├── realisations.html               # Liste des réalisations
├── projets.html                    # Redirection vers realisations.html (anciens liens)
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

- **Portfolio :** [benjaminbridanne.fr](https://benjaminbridanne.fr/)
- **LinkedIn :** à compléter
- **Mail :** à compléter

---

© Benjamin Bridanne — Tous droits réservés.
