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

/* =========================================================
   ONGLETS DE LA PAGE SERVICES (motif ARIA « tabs »)
   Sans JavaScript, les onglets sont des liens vers les six
   panneaux affichés en liste. Le script les transforme en onglets :
   un seul panneau visible, flèches, Début/Fin, ancre dans l'URL.
   ========================================================= */
(function () {
  const list = document.querySelector('[data-svc-tabs]');
  if (!list) return;
  const tabs = Array.from(list.querySelectorAll('.svc-tab'));
  const panels = tabs.map(tab => document.getElementById(tab.getAttribute('href').slice(1)));
  const wrap = panels[0] && panels[0].parentElement;
  const head = document.getElementById('services');
  if (!wrap || panels.some(p => !p)) return;

  list.setAttribute('role', 'tablist');
  tabs.forEach((tab, i) => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', panels[i].id);
    panels[i].setAttribute('role', 'tabpanel');
    panels[i].setAttribute('aria-labelledby', tab.id);

    tab.addEventListener('click', event => {
      event.preventDefault();
      select(i, true);
    });

    tab.addEventListener('keydown', event => {
      let next = null;
      if (event.key === 'ArrowRight') next = (i + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else if (event.key === ' ') next = i; /* Espace : comme Entrée, sans faire défiler */
      if (next === null) return;
      event.preventDefault();
      select(next, true);
      tabs[next].focus();
    });
  });
  wrap.classList.add('is-tabs');

  function select(index, updateHash) {
    tabs.forEach((tab, i) => {
      const active = i === index;
      tab.setAttribute('aria-selected', active ? 'true' : 'false');
      tab.tabIndex = active ? 0 : -1;
      panels[i].classList.toggle('is-active', active);
      panels[i].inert = !active;
    });
    if (updateHash) history.replaceState(null, '', '#' + panels[index].id);
  }

  /* Ancre d'un service (/services#sites-web) : ce service, et le sélecteur en haut */
  function fromHash() {
    const index = panels.findIndex(p => '#' + p.id === location.hash);
    if (index < 0) return false;
    select(index, false);
    if (head) head.scrollIntoView({ block: 'start' });
    return true;
  }

  if (!fromHash()) select(0, false);
  else window.addEventListener('load', fromHash, { once: true });
  window.addEventListener('hashchange', fromHash);
})();
