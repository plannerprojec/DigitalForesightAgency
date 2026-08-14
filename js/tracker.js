/* tracker.js, builds and animates the "Keyword Rankings Tracker" widget in the Why section.
   Static-friendly port of the original React SeoTracker component. */
(function () {
  'use strict';

  var mount = document.getElementById('tracker-rows');
  if (!mount) return;

  var keywords = [
    { kw: 'emergency plumber near me',    pos: 1, change: 12, trend: [18,15,12,10,8,6,3,1] },
    { kw: 'custom kitchen remodel',       pos: 1, change: 8,  trend: [14,12,10,8,7,5,3,1] },
    { kw: 'personal injury lawyer',       pos: 2, change: 19, trend: [22,18,15,12,9,7,4,2] },
    { kw: 'boutique fitness studio',      pos: 2, change: 6,  trend: [9,8,7,6,5,4,3,2] },
    { kw: 'wedding photographer',         pos: 3, change: 22, trend: [26,22,18,14,11,8,5,3] },
    { kw: 'organic skincare shop',        pos: 3, change: 14, trend: [19,16,13,11,8,6,5,3] },
    { kw: 'commercial cleaning services', pos: 4, change: 31, trend: [38,32,26,20,15,10,7,4] },
    { kw: 'artisan coffee subscription',  pos: 5, change: 9,  trend: [15,13,11,10,8,7,6,5] }
  ];

  function posClass(p) {
    if (p === 1) return 'pos-1';
    if (p <= 3) return 'pos-top';
    return 'pos-rest';
  }

  var chevUp = '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>';

  /* Build rows once (final state). Row references kept for animation. */
  var rows = keywords.map(function (k, i) {
    var maxTrend = Math.max.apply(null, k.trend);
    var row = document.createElement('div');
    row.className = 'tracker-row';

    var spark = k.trend.map(function (v, si) {
      var h = Math.max(4, Math.round((1 - v / maxTrend) * 18 + 4));
      var color = i < 6 ? '#00B87A' : '#E8431A';
      var opacity = si === k.trend.length - 1 ? 1 : 0.4 + (si / k.trend.length) * 0.5;
      return '<i data-h="' + h + '" style="height:4px;background:' + color + ';opacity:' + opacity + '"></i>';
    }).join('');

    row.innerHTML =
      '<span class="kw">' + k.kw + '</span>' +
      '<span class="pos ' + posClass(k.pos) + '" data-final="' + k.pos + '">#' + (k.pos + 8) + '</span>' +
      '<span class="chg">' + chevUp + k.change + '</span>' +
      '<span class="spark">' + spark + '</span>';
    mount.appendChild(row);
    return { el: row, data: k };
  });

  /* Reduced motion: jump straight to final state */
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function setBars(fill) {
    rows.forEach(function (r) {
      var bars = r.el.querySelectorAll('.spark i');
      bars.forEach(function (b) {
        b.style.height = (fill ? b.getAttribute('data-h') : 4) + 'px';
      });
    });
  }

  function finalize() {
    rows.forEach(function (r) {
      var posEl = r.el.querySelector('.pos');
      posEl.textContent = '#' + posEl.getAttribute('data-final');
    });
    setBars(true);
  }

  if (reduce || !('IntersectionObserver' in window)) {
    finalize();
    return;
  }

  var animated = false;
  var io = new IntersectionObserver(function (entries) {
    if (!entries[0].isIntersecting || animated) return;
    animated = true;
    io.disconnect();

    var step = 0;
    var iv = setInterval(function () {
      step++;
      rows.forEach(function (r) {
        var posEl = r.el.querySelector('.pos');
        var finalPos = parseInt(posEl.getAttribute('data-final'), 10);
        var shown;
        if (step < 2) shown = Math.min(finalPos + 8, 32);
        else if (step < 5) shown = Math.min(finalPos + 4, 18);
        else shown = finalPos;
        posEl.textContent = '#' + shown;
        posEl.className = 'pos ' + posClass(shown);
      });
      if (step >= 8) { clearInterval(iv); finalize(); }
    }, 150);
    setBars(true);
  }, { threshold: 0.3 });

  io.observe(document.querySelector('.tracker'));
})();
