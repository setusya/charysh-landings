// Charysh — единый список источников для слайдов с рыночными цифрами.
// Используется в breakfast.html («Почему Чарыш») и finance.html (рост земли, спрос, допущения).
// Нумерация сквозная и одинаковая в обеих презентациях, чтобы спикеры ссылались на одни и те же номера.

const CH_SOURCES = {
  rst:    { n: 1,  t: 'РСТ, 24.12.2025: средняя стоимость ночи в отеле по регионам — Республика Алтай 21,1 тыс ₽, Алтайский край 10,4 тыс ₽', u: 'https://www.gorno-altaisk.info/news/186455' },
  cian:   { n: 2,  t: 'Циан.Аналитика, 26.06.2025: цена сотки под ИЖС — Республика Алтай 592 тыс ₽, Алтайский край 378 тыс ₽', u: 'https://www.amic.ru/news/na-altae-samaya-dorogaya-zemlya-v-sibiri-kak-v-regionah-podorozhala-sotka-za-god-564388' },
  erz:    { n: 3,  t: 'ЕРЗ / Циан: земля под ИЖС в Республике Алтай +88% за год, III кв. 2024', u: 'https://erzrf.ru/news/eksperty-v-iii-kvartale-2024-goda-zemlya-pod-izhs-bolshe-vsego-podorozhala-na-altaye-v-yakutii-i-tuve' },
  rbc:    { n: 4,  t: 'РБК Компании: рост цен на землю по регионам за 2024 — Алтай ×2', u: 'https://companies.rbc.ru/news/01CC7zxmnZ/rost-tsen-na-zemlyu-prichinyi-i-prognozyi-na-2025-god/' },
  iz:     { n: 5,  t: 'Известия, 04.08.2026: инвестиции Сбера в Манжерок превысили 200 млрд ₽', u: 'https://iz.ru/2143575/2026-08-04/investitcii-sbera-v-manzherok-prevysili-200-mlrd-rublei' },
  ator:   { n: 6,  t: 'АТОР: Шерегеш, сезон 2025/26 — 1,65 млн гостей, 95 гостиниц, 50 СПА', u: 'https://www.atorus.ru/article/na-million-turistov-kak-arkhyz-i-sheregesh-stali-glavnymi-kurortami-zimy-ceny-novye-oteli-i-trassy-65565' },
  tolkRA: { n: 7,  t: 'Толк, 05.02.2026: турпоток Республики Алтай за 2025 — 2,8 млн, ×2,3 за пять лет', u: 'https://tolknews.ru/respaltay/turizm/210168-skolko-sostavil-turpotok-v-respublike-altay-po-itogam-goda' },
  gov:    { n: 8,  t: 'Отчёт губернатора Алтайского края, 28.05.2026: турпоток 2,4 млн, инвестиции в отрасль +51% за год', u: 'https://altai.rnews.ru/20260528/39389371.html' },
  barn:   { n: 9,  t: 'Barn Estate, 05.03.2026: курортная недвижимость Алтая подорожала в 7 раз за 2015–2025', u: 'https://barn-estate.ru/media/blog/kurortnaya-nedvizhimost-altaya/' },
  belo:   { n: 10, t: 'Толк, 10.04.2026 и 10.09.2025: санатории Белокурихи — загрузка 68% в 2024, летом 2025 свыше 100%', u: 'https://tolknews.ru/ekonomika/214481-skolko-zarabotali-sanatorii-altayskogo-kraya-i-belokurihi-v-godu' },
  cianCh: { n: 11, t: 'Циан, сентябрь 2026: объявления о продаже участков в Чарышском районе', u: 'https://barnaul.cian.ru/kupit-zemelniy-uchastok-altayskiy-kray-charyshskiy-rayon/' },
  raGov:  { n: 12, t: 'Правительство Республики Алтай: 29 туристических проектов на 188 млрд ₽', u: 'https://altai-republic.ru/tourism/development/' },
  kuz:    { n: 13, t: 'Шория Град (девелопер, Шерегеш): курортная недвижимость +15–25% в год против 5–8% в мегаполисах', u: 'https://shoriya-grad42.ru/articles/pochemu-kurortnaya-nedvizhimost-budet-dorozhat-2026-2030/' },
  pdf:    { n: 14, t: 'Финансовая модель проекта «Чарыш», расширенная версия, А. Маслак, 2026 — по методике Туризм.РФ', u: null },
};
window.CH_SOURCES = CH_SOURCES;

function SrcRef({ k }) {
  const list = String(k).split(',').map(x => x.trim()).filter(Boolean);
  return (
    <sup className="fin-ref">
      [{list.map(x => (CH_SOURCES[x] ? CH_SOURCES[x].n : '?')).join(', ')}]
    </sup>
  );
}
window.SrcRef = SrcRef;

function SrcList({ keys, title = 'Источники' }) {
  const items = keys.map(k => CH_SOURCES[k]).filter(Boolean).sort((a, b) => a.n - b.n);
  return (
    <div className="fin-src-wrap">
      <div className="fin-src-h">{title}</div>
      <ol className="fin-src">
        {items.map(it => (
          <li key={it.n}>
            <span className="fin-src-n">[{it.n}]</span>{' '}
            {it.u ? <a href={it.u} target="_blank" rel="noopener">{it.t}</a> : it.t}
          </li>
        ))}
      </ol>
    </div>
  );
}
window.SrcList = SrcList;
