/* ============================================================
   AU FIL DE NATH — Carrousels horizontaux (créations + galerie)
   Flèches prev/next pour le carrousel principal (data-carousel-viewport).
   Le swipe tactile est natif (overflow-x + scroll-snap CSS).
   Initialise tous les viewports trouvés ; les boutons prev/next associés
   sont ceux du même conteneur de section.
   ============================================================ */

(function () {
  'use strict';

  document.querySelectorAll('[data-carousel-viewport]').forEach(function (viewport) {
    /* On cherche les flèches dans la même section (parent commun .creations ou .gallery) */
    const section = viewport.closest('.creations, .gallery');
    if (!section) return;

    const prevBtn = section.querySelector('[data-carousel-prev]');
    const nextBtn = section.querySelector('[data-carousel-next]');

    function getStep() {
      const card = viewport.querySelector('.card');
      if (!card) return viewport.clientWidth;
      const track = viewport.querySelector('.creations__track');
      const styles = window.getComputedStyle(track);
      const gap = parseInt(styles.columnGap || styles.gap || '20', 10);
      return card.getBoundingClientRect().width + gap;
    }

    function updateArrows() {
      const max = viewport.scrollWidth - viewport.clientWidth;
      if (prevBtn) prevBtn.disabled = viewport.scrollLeft <= 1;
      if (nextBtn) nextBtn.disabled = viewport.scrollLeft >= max - 1;
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        viewport.scrollBy({ left: -getStep(), behavior: 'smooth' });
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        viewport.scrollBy({ left: getStep(), behavior: 'smooth' });
      });
    }

    viewport.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    updateArrows();
  });

})();
