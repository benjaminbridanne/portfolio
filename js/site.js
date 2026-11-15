/* =========================================================
   SITE - script commun à toutes les pages
   ========================================================= */

/* Lien de prise de rendez-vous : une seule constante pour tout le site.
   Chaque lien porte aussi l'URL dans son href (il marche sans JavaScript) ;
   ce script les aligne sur cette valeur. */
const CALENDLY_URL = 'https://calendly.com/benjaminbridanne/30min';

document.querySelectorAll('[data-calendly]').forEach(link => {
  link.href = CALENDLY_URL;
  link.target = '_blank';
  link.rel = 'noopener';
});

/* =========================================================
   THÈME CLAIR/SOMBRE - choix mémorisé dans localStorage
   (logique reprise des pages, à l'identique ; seul ajout :
   l'aria-label du bouton suit l'état)
   ========================================================= */
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const label = document.getElementById('theme-toggle-label');
  if (!btn || !label) return;
  /* Thème déjà appliqué dans le <head> : clair sauf choix explicite du sombre */
  const initial = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  updateLabel(initial);

  btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    updateLabel(next);
    try { localStorage.setItem('bb-theme', next); } catch { /* Le thème fonctionne sans mémorisation. */ }
  });

  function updateLabel(mode) {
    label.textContent = mode === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre';
    btn.setAttribute('aria-label', label.textContent);
  }
})();
