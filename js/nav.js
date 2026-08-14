/* nav.js, sticky header state, mobile menu toggle, services dropdown (a11y) */
(function () {
  'use strict';

  var header = document.getElementById('site-header');
  var burger = document.getElementById('burger');
  var mobileMenu = document.getElementById('mobile-menu');
  var dropdownBtn = document.querySelector('[data-dropdown]');

  /* Sticky header scroll state, throttled with rAF to protect INP */
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      if (header) header.classList.toggle('scrolled', window.scrollY > 40);
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile menu toggle */
  function setMenu(open) {
    if (!burger || !mobileMenu) return;
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileMenu.hidden = !open;
  }
  if (burger) {
    burger.addEventListener('click', function () {
      setMenu(burger.getAttribute('aria-expanded') !== 'true');
    });
  }
  /* Close mobile menu when a link is tapped */
  if (mobileMenu) {
    mobileMenu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
  }

  /* Services dropdown: hover is handled in CSS; here we manage click/keyboard for touch and a11y */
  if (dropdownBtn) {
    var menu = document.getElementById(dropdownBtn.getAttribute('aria-controls'));
    dropdownBtn.addEventListener('click', function (e) {
      e.preventDefault();
      var open = dropdownBtn.getAttribute('aria-expanded') === 'true';
      dropdownBtn.setAttribute('aria-expanded', String(!open));
      if (menu) menu.classList.toggle('open', !open);
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.has-dropdown')) {
        dropdownBtn.setAttribute('aria-expanded', 'false');
        if (menu) menu.classList.remove('open');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        dropdownBtn.setAttribute('aria-expanded', 'false');
        if (menu) menu.classList.remove('open');
        setMenu(false);
      }
    });
  }

  /* Footer year */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
