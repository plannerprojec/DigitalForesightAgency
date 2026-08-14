/* counters.js, count-up animation for the metrics band. Runs once, rAF-based (INP-safe). */
(function () {
  'use strict';

  var nums = document.querySelectorAll('.metrics .num');
  if (!nums.length) return;

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return; /* leave final values as authored */

  function firstTextNode(el) {
    for (var i = 0; i < el.childNodes.length; i++) {
      if (el.childNodes[i].nodeType === 3 && el.childNodes[i].textContent.trim() !== '') return el.childNodes[i];
    }
    return null;
  }

  function animate(el) {
    var node = firstTextNode(el);
    if (!node) return;
    var target = parseInt(node.textContent.replace(/[^0-9]/g, ''), 10);
    if (isNaN(target)) return;
    var duration = 1300, start = null;
    node.textContent = '0';
    function tick(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3); /* easeOutCubic */
      node.textContent = String(Math.round(eased * target));
      if (p < 1) window.requestAnimationFrame(tick);
      else node.textContent = String(target);
    }
    window.requestAnimationFrame(tick);
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animate(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  nums.forEach(function (n) { io.observe(n); });
})();
