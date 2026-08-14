/* lightbox.js, full-image preview for Featured Work (eye button). */
(function () {
  'use strict';
  var lb = document.getElementById('img-lightbox');
  var img = document.getElementById('lightbox-img');
  if (!lb || !img) return;

  var lastFocused = null;

  function open(src, label) {
    img.src = src;
    if (label) img.alt = label;
    lb.hidden = false;
    lb.scrollTop = 0;
    document.body.style.overflow = 'hidden';
    var c = lb.querySelector('.lightbox-close');
    if (c) c.focus();
    document.addEventListener('keydown', onKey);
  }
  function close() {
    lb.hidden = true;
    document.body.style.overflow = '';
    img.removeAttribute('src');
    document.removeEventListener('keydown', onKey);
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }
  function onKey(e) { if (e.key === 'Escape') close(); }

  document.addEventListener('click', function (e) {
    var zoom = e.target.closest('.work-zoom');
    if (zoom) {
      e.preventDefault();
      lastFocused = zoom;
      open(zoom.getAttribute('data-full'), zoom.getAttribute('aria-label'));
      return;
    }
    if (e.target.closest('.lightbox-close')) { close(); return; }
    if (e.target === lb) { close(); } /* click on backdrop */
  });
})();
