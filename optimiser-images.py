# Genere les versions optimisees des images de la page campagne.
# Usage, depuis la racine du portfolio :  pip install pillow  puis  python optimiser-images.py
from PIL import Image, ImageFilter
import os, json, sys
R, OUT = "Images", "Images"
jobs = {
  'couverture-campagne-financement': [800, 1200, 1600, 2000],
  'campagne-brevo': [600, 1000, 1400],
  'campagne-calendrier': [600, 1000, 1400],
  'campagne-veille': [600, 1000, 1400],
  'campagne-affiche': [600, 1000, 1400],
  'campagne-plaquette-recto': [600, 1000, 1400],
  'campagne-plaquette-verso': [600, 1000, 1400],
}
report = {}
for name, widths in jobs.items():
    im = Image.open(f'{R}/{name}.webp').convert('RGB')
    W, H = im.size
    ws = sorted({w for w in widths if w < W} | ({W} if W <= max(widths) else set()))
    made = []
    for w in ws:
        if w == W:
            v = im.copy()
        else:
            v = im.resize((w, round(H * w / W)), Image.LANCZOS)
            # accentuation legere pour compenser la douceur du redimensionnement
            v = v.filter(ImageFilter.UnsharpMask(radius=0.7, percent=55, threshold=2))
        p = f'{OUT}/{name}-{w}.webp'
        v.save(p, quality=90, method=6)
        made.append([w, v.size[1], os.path.getsize(p) // 1024])
    report[name] = {'source': [W, H], 'versions': made}
print(json.dumps(report, indent=1))
