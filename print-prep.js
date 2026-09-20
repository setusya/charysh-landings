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
  // Высота страницы A4 landscape — 790px; реальная доступная высота считается в applyScale
  // для каждой секции отдельно (за вычетом её padding).
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

    // Секция в печати = 790px ВМЕСТЕ с её вертикальными отступами (sec-pad ≈ 100px
    // сверху и снизу). Доступная контенту высота — за вычетом этих отступов.
    const cs = getComputedStyle(section);
    const pad = (parseFloat(cs.paddingTop) || 0) + (parseFloat(cs.paddingBottom) || 0);
    const SAFE_H = Math.max(200, (section.clientHeight || 790) - pad - 8);

    const naturalH = Math.max(inner.scrollHeight, inner.getBoundingClientRect().height);
    if (naturalH <= SAFE_H) return;

    let scale = SAFE_H / naturalH;
    if (scale < MIN_SCALE) scale = MIN_SCALE;

    // После расширения контейнера до 100/scale % контент с высотой, зависящей
    // от ширины (фото, aspect-ratio, сетки), становится выше, чем измерено.
    // Поэтому применяем масштаб и перемеряем ВИДИМУЮ высоту, ужимая ещё —
    // обычно сходится за 2–3 итерации.
    inner.style.transformOrigin = 'top left';
    for (let i = 0; i < 6; i++) {
      inner.style.transform = 'scale(' + scale.toFixed(4) + ')';
      inner.style.width = (100 / scale).toFixed(2) + '%';
      const visH = inner.getBoundingClientRect().height;
      if (visH <= SAFE_H || scale <= MIN_SCALE) break;
      scale = Math.max(MIN_SCALE, scale * (SAFE_H / visH) * 0.995);
    }
  }

  function setupAll() {
    document.querySelectorAll('section, .pc-scale, .pc-bonus-section').forEach(applyScale);
  }
  function teardownAll() {
    document.querySelectorAll('section, .pc-scale, .pc-bonus-section').forEach(reset);
  }

  // Браузерная печать (Ctrl+P)
  // В режиме ?print=1 масштаб уже выставлен после загрузки картинок —
  // повторный пересчёт в момент печати (headless Chrome) сбивает его.
  window.addEventListener('beforeprint', () => { if (!document.body.classList.contains('printing')) setupAll(); });
  window.addEventListener('afterprint', () => { if (!document.body.classList.contains('printing')) teardownAll(); });

  // URL-параметр ?print=1 — форсирует preview-режим + масштаб.
  function init() {
    const params = new URLSearchParams(window.location.search);
    const isPrintParam = params.get('print') === '1';
    const isPrintMedia = window.matchMedia && window.matchMedia('print').matches;

    if (isPrintParam) {
      document.body.classList.add('printing');
    }
    if (isPrintParam || isPrintMedia) {
      // Даём React+Babel время на полный рендер всех компонентов,
      // затем ждём загрузки ВСЕХ <img> — иначе высота секции измеряется
      // без картинок, масштаб выходит ~1, и фото вылезают за страницу.
      // В headless Chrome с --virtual-time-budget таймеры срабатывают почти сразу,
      // ещё до того, как Babel скомпилирует React-компоненты, — поэтому ждём
      // появления секций (и стабилизации их числа), а не фиксированные 1800 мс.
      whenRendered(30000)
        .then(() => whenImagesReady(15000))
        .then(() => new Promise(res => setTimeout(res, 300)))
        .then(() => {
          setupAll();
          // Сигнал для headless Chrome --print-to-pdf, что мы готовы.
          document.title = '__PRINT_READY__ ' + document.title;
        });
    }
  }

  function whenRendered(maxWait) {
    return new Promise(res => {
      const t0 = Date.now();
      let last = -1, stable = 0;
      (function poll() {
        const n = document.querySelectorAll('section').length;
        if (n > 0 && n === last) stable++; else stable = 0;
        last = n;
        if ((stable >= 3) || Date.now() - t0 > maxWait) return res();
        setTimeout(poll, 200);
      })();
    });
  }

  function whenImagesReady(maxWait) {
    const imgs = Array.from(document.images).filter(im => !im.complete);
    if (!imgs.length) return Promise.resolve();
    const all = Promise.all(imgs.map(im => new Promise(res => {
      im.addEventListener('load', res, { once: true });
      im.addEventListener('error', res, { once: true });
    })));
    const cap = new Promise(res => setTimeout(res, maxWait));
    return Promise.race([all, cap]);
  }

  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('load', init);
  }

  // Отладочный экспорт.
  window.__printPrep = { setupAll, teardownAll, applyScale };
})();
