/* ============================================================
   print-prep.js
   ----------------------------------------------------------
   Масштабирует контент каждой секции под A4 landscape (1 секция = 1 страница).
   Срабатывает в трёх ситуациях:
     1) beforeprint — браузерная печать Ctrl+P
     2) URL содержит ?print=1 — для preview и для headless --print-to-pdf
     3) matchMedia('print').matches — на случай если эмуляция уже активна
   ============================================================ */
(function () {
  // A4 landscape @96dpi: 297мм=1123px, 209мм=790px.
  const SAFE_H = 790 - 8;     // лёгкий запас на пиксели/округление.
  const MIN_SCALE = 0.28;     // супер-длинные секции (~3 стр.) сожмутся почти до микрошрифта,
                              // но контент целиком в одной странице, без обрезки и без extra-pages.

  function findInner(section) {
    return section.querySelector(':scope > .container')
        || section.querySelector(':scope > .hero-frame')
        || section.querySelector(':scope > .pc-scale-frame')
        || section.querySelector(':scope > .pc-bonus-frame')
        || null;
  }

  function reset(section) {
    const inner = findInner(section);
    if (!inner) return;
    inner.style.transform = '';
    inner.style.transformOrigin = '';
    inner.style.width = '';
  }

  function applyScale(section) {
    const inner = findInner(section);
    if (!inner) return;                 // Hero/Scale без .container — оставляем как есть.
    // Hero/Scale (fullbleed photo) — не масштабируем .hero-frame, чтобы CTA остались.
    // Hero-frame внутри hero уже использует position: absolute со 100% height — пропускаем.
    if (section.classList.contains('hero') || section.classList.contains('pc-scale')) return;

    // Сброс перед измерением.
    inner.style.transform = '';
    inner.style.width = '';

    const naturalH = Math.max(inner.scrollHeight, inner.getBoundingClientRect().height);
    if (naturalH <= SAFE_H) return;

    let scale = SAFE_H / naturalH;
    if (scale < MIN_SCALE) scale = MIN_SCALE;

    inner.style.transformOrigin = 'top left';
    inner.style.transform = 'scale(' + scale.toFixed(4) + ')';
    inner.style.width = (100 / scale).toFixed(2) + '%';
  }

  function setupAll() {
    document.querySelectorAll('section, .pc-scale, .pc-bonus-section').forEach(applyScale);
  }
  function teardownAll() {
    document.querySelectorAll('section, .pc-scale, .pc-bonus-section').forEach(reset);
  }

  // Браузерная печать (Ctrl+P)
  window.addEventListener('beforeprint', setupAll);
  window.addEventListener('afterprint', teardownAll);

  // URL-параметр ?print=1 — форсирует preview-режим + масштаб.
  function init() {
    const params = new URLSearchParams(window.location.search);
    const isPrintParam = params.get('print') === '1';
    const isPrintMedia = window.matchMedia && window.matchMedia('print').matches;

    if (isPrintParam) {
      document.body.classList.add('printing');
    }
    if (isPrintParam || isPrintMedia) {
      // Даём React+Babel время на полный рендер всех компонентов.
      setTimeout(() => {
        setupAll();
        // Сигнал для headless Chrome --print-to-pdf, что мы готовы.
        document.title = '__PRINT_READY__ ' + document.title;
      }, 1800);
    }
  }

  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('load', init);
  }

  // Отладочный экспорт.
  window.__printPrep = { setupAll, teardownAll, applyScale };
})();
