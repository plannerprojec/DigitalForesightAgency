/* faq.js, accordion behavior for the homepage FAQ section */
(function () {
  'use strict';

  var buttons = document.querySelectorAll('.faq-q');
  if (!buttons.length) return;

  buttons.forEach(function (btn) {
    var panel = document.getElementById(btn.getAttribute('aria-controls'));
    if (!panel) return;

    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';

      if (open) {
        btn.setAttribute('aria-expanded', 'false');
        panel.style.maxHeight = null;
      } else {
        btn.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  /* Keep open panels sized correctly on resize */
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      buttons.forEach(function (btn) {
        if (btn.getAttribute('aria-expanded') === 'true') {
          var panel = document.getElementById(btn.getAttribute('aria-controls'));
          if (panel) panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    }, 120);
  }, { passive: true });
})();
