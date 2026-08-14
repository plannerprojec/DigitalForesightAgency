/* modal.js, accessible service-detail popups (Learn more).
   Opens a dialog with the matching hidden .svc-detail content. */
(function () {
  'use strict';

  var overlay = document.getElementById('svc-modal');
  var dialog = overlay ? overlay.querySelector('.modal-dialog') : null;
  var content = document.getElementById('svc-modal-content');
  var details = document.querySelector('.svc-details');
  if (!overlay || !dialog || !content || !details) return;

  var lastFocused = null;

  function contentFor(slug) {
    var el = details.querySelector('[data-modal-content="' + slug + '"]');
    return el ? el.innerHTML : null;
  }

  function open(slug, trigger) {
    var html = contentFor(slug);
    if (!html) return;
    content.innerHTML = html;
    var heading = content.querySelector('h3');
    dialog.setAttribute('aria-label', heading ? heading.textContent : 'Service details');
    lastFocused = trigger || document.activeElement;
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    // Focus the close button
    var closeBtn = overlay.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
    document.addEventListener('keydown', onKey);
  }

  function close() {
    overlay.hidden = true;
    document.body.style.overflow = '';
    content.innerHTML = '';
    document.removeEventListener('keydown', onKey);
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  function onKey(e) {
    if (e.key === 'Escape') { close(); return; }
    if (e.key !== 'Tab') return;
    // Focus trap
    var focusable = dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;
    var first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  /* Open triggers: any element with [data-modal] (card or button) */
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-modal]');
    if (trigger) { e.preventDefault(); open(trigger.getAttribute('data-modal'), trigger); return; }
    if (e.target.closest('.modal-close') || e.target.closest('.modal-dismiss')) { close(); return; }
    if (e.target === overlay) { close(); return; } /* click on backdrop */
    if (e.target.closest('.modal-cta')) { close(); } /* let the #contact anchor proceed */
  });

  /* Keyboard: Enter/Space on a card (role=button) opens it */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var card = e.target.closest('.svc-card[data-modal]');
    if (card && e.target === card) { e.preventDefault(); open(card.getAttribute('data-modal'), card); }
  });
})();
