/* ============================================================
   AU FIL DE NATH — Header behaviour
   Sticky + hamburger menu mobile
   ============================================================ */

(function () {
  'use strict';

  const header      = document.getElementById('site-header');
  const hamburger   = header?.querySelector('.site-header__hamburger');
  const mobileMenu  = document.getElementById('mobile-menu');

  if (!header) return;

  /* ──────────────────────────────────────────
     STICKY — Bascule quand le logo hero sort du viewport
  ────────────────────────────────────────── */

  const logoBlock    = header.querySelector('.site-header__logo-block');
  const PROGRESS_PX  = 200;  /* Distance (px) sur laquelle l'effet sticky se déploie */
  let isSticky = false;

  function updateSticky() {
    if (!logoBlock) return;

    const logoBottom = logoBlock.getBoundingClientRect().bottom;
    const shouldBeSticky = logoBottom <= 0;

    /* ── Toggle binaire : position fixed du nav bar ── */
    if (shouldBeSticky !== isSticky) {
      isSticky = shouldBeSticky;
      header.classList.toggle('is-sticky', isSticky);

      /* Compenser le saut de layout quand la barre se fixe */
      document.body.style.paddingTop = isSticky
        ? header.querySelector('.site-header__nav-bar').offsetHeight + 'px'
        : '';
    }

    /* ── Progression continue : 0 → 1 sur PROGRESS_PX après le seuil sticky.
       Pilote l'opacité / scale du logo + l'opacité / translateY du CTA via CSS. ── */
    const progress = Math.max(0, Math.min(1, -logoBottom / PROGRESS_PX));
    header.style.setProperty('--scroll-progress', progress.toFixed(3));
  }

  window.addEventListener('scroll', updateSticky, { passive: true });
  updateSticky(); /* État initial */


  /* ──────────────────────────────────────────
     SMOOTH SCROLL — Tous les liens d'ancre (#section)
     Animation custom 600ms avec easing easeInOutCubic.
     S'applique aux CTAs de scroll (Hero "Voir les créations" → #creations,
     filtres boutique → #univers-bebe, etc.) et au menu.
  ────────────────────────────────────────── */

  const SCROLL_DURATION = 800;   /* ms */

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function smoothScrollTo(targetY, duration) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    if (Math.abs(distance) < 2) return;
    const startTime = performance.now();
    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + distance * easeInOutCubic(progress));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* On intercepte tous les liens internes pointant vers une ancre #id.
     On ignore les liens "#" seuls (placeholders nav). */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    const hash = link.getAttribute('href');
    if (!hash || hash === '#' || hash.length < 2) return;
    link.addEventListener('click', function (e) {
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      /* Offset = hauteur de la nav sticky qui recouvrira le haut après
         défilement. On l'applique TOUJOURS (même si pas encore sticky au clic),
         car la barre devient fixe une fois la section atteinte. offsetHeight
         s'adapte à desktop / tablette / mobile. */
      const navBar = header.querySelector('.site-header__nav-bar');
      const offset = (navBar ? navBar.offsetHeight : 0) + 12;
      /* Ancrage : haut de section directement (fiable sur tous les viewports).
         L'ancien ancrage sur le bas du séparateur précédent causait un atterrissage
         au milieu des produits quand le smooth scroll déclenchait la transition sticky
         (logo-block qui se replie ≈ 150px → contenu remonte autant → overshoot). */
      const refTop = target.getBoundingClientRect().top;
      let targetY = refTop + window.scrollY - offset - 8;

      /* Compensation sticky : si le logo-block est encore visible (sticky pas encore
         actif), la transition sticky va se déclencher pendant l'animation et faire
         remonter le contenu d'environ logoBlock.offsetHeight. On anticipe ce déplacement
         pour que l'animation atterrisse au bon endroit malgré le changement de layout. */
      if (!isSticky && logoBlock && logoBlock.getBoundingClientRect().bottom > 0) {
        targetY -= logoBlock.offsetHeight;
      }

      smoothScrollTo(Math.max(0, targetY), SCROLL_DURATION);
      /* Met à jour l'URL sans déclencher de saut */
      if (history.pushState) history.pushState(null, '', hash);
    });
  });


  /* ──────────────────────────────────────────
     FOOTER — Année auto + bouton "Retour en haut"
  ────────────────────────────────────────── */

  document.querySelectorAll('[data-footer-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  document.querySelectorAll('[data-back-to-top]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      smoothScrollTo(0, SCROLL_DURATION);
    });
  });


  /* ──────────────────────────────────────────
     LIEN RETOUR — revient à la page précédente réelle (historique du
     navigateur), afin de retomber exactement à l'endroit du dernier clic
     (position de scroll incluse). Si aucun historique interne n'existe
     (entrée directe, nouvel onglet), on laisse le href agir en repli.
  ────────────────────────────────────────── */

  function hasInternalHistory() {
    if (!document.referrer || window.history.length <= 1) return false;
    try {
      const ref = new URL(document.referrer);
      if (window.location.protocol === 'file:') return ref.protocol === 'file:';
      return ref.origin === window.location.origin;
    } catch (e) {
      return false;
    }
  }

  document.querySelectorAll('.back-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (hasInternalHistory()) {
        e.preventDefault();
        window.history.back();
      }
      /* sinon : navigation normale via le href (repli) */
    });
  });


  /* ──────────────────────────────────────────
     HAMBURGER — Menu mobile
  ────────────────────────────────────────── */

  if (hamburger && mobileMenu) {

    /* Positionne dynamiquement le menu juste sous la nav-bar
       (gère les cas : top de page avec logo-block visible + état sticky). */
    function positionMenu() {
      const navBar = header.querySelector('.site-header__nav-bar');
      if (!navBar) return;
      const rect = navBar.getBoundingClientRect();
      mobileMenu.style.top = Math.max(0, rect.bottom) + 'px';
    }

    hamburger.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('is-open');
      if (isOpen) {
        /* Pas de scroll-to-top : on respecte la position actuelle de l'utilisateur.
           Le menu se positionne juste sous la nav-bar, qu'elle soit sticky (user
           a scrollé) ou non (au top de page, le menu s'ouvre sous le logo hero). */
        /* Si user a scrollé (sticky actif), on force --scroll-progress à 1
           pour que le logo compact soit pleinement visible (pas en transition). */
        if (header.classList.contains('is-sticky')) {
          header.style.setProperty('--scroll-progress', '1');
        }
        positionMenu();
      } else {
        mobileMenu.style.top = '';
        /* Restaure le scroll-progress dynamique */
        header.style.removeProperty('--scroll-progress');
      }
      hamburger.setAttribute('aria-expanded', isOpen);
      mobileMenu.setAttribute('aria-hidden', !isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    /* Reposition au resize (rotation mobile, etc.) */
    window.addEventListener('resize', function () {
      if (mobileMenu.classList.contains('is-open')) positionMenu();
    });

    /* Fermer en cliquant sur un lien du menu */
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });

    /* Fermer avec Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        mobileMenu.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        hamburger.focus();
      }
    });
  }

})();
