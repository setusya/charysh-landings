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
  restateRA: { n: 15, t: 'Restate, 09.09.2026: средняя цена сотки в Республике Алтай — 474 366 ₽ (323 212 ₽ в сентябре 2025)', u: 'https://respublika-altay.restate.ru/graph/ceny-prodazhi-zemli/' },
  amic2008: { n: 16, t: 'Amic.ru, 19.11.2008: сотка в Чемальском районе — от 86 тыс ₽ у реки, ~27 тыс ₽ на левом берегу; Манжерок 180–300 тыс ₽', u: 'https://www.amic.ru/news/skolko-stoit-zemlya-v-gornom-altae-95504' },
  altaiGold: { n: 17, t: 'Altai-gold.info (продавец земли в Чемальском районе, 2025–2026): участки 40–100 тыс ₽/сотка; «за последние 7 лет земля на Горном Алтае выросла раз в 10, за последний год — вдвое»', u: 'https://altai-gold.info/chemal/' },
  cianChemal: { n: 18, t: 'Циан, 2026: участки в с. Чемал — 150–370 тыс ₽ за сотку', u: 'https://gorno-altaysk.cian.ru/kupit-zemelniy-uchastok-altay-chemalskiy-rayon-chemal-01164369/' },
  fontanka: { n: 19, t: 'Фонтанка, 06.07.2025, репортаж из Манжерока: 10 соток куплены за 500 тыс ₽ (2020), выставлены за 20 млн ₽; сделка 10 соток за 6 млн ₽; у озера — 25–35 млн ₽ за участок', u: 'https://www.fontanka.ru/2025/07/06/75680126/' },
  altaika: { n: 20, t: 'Каталог altaika.narod.ru (2010-е): земля в Усть-Коксинском районе — 90–550 тыс ₽ за гектар, то есть 0,9–5,5 тыс ₽ за сотку', u: 'https://altaika.narod.ru/land/ust-koksa.html' },
  cianUymon: { n: 21, t: 'Циан, 2026: Усть-Коксинский район, с. Тихонькая — 32,6 тыс ₽/сотка; предложения до 100 тыс ₽/сотка', u: 'https://gorno-altaysk.cian.ru/kupit-zemelniy-uchastok-altay-ust-koksinskiy-rayon/' },
  zov:    { n: 22, t: 'Архитектурное бюро ЗОВ, Санкт-Петербург, с 2016 — рендеры из портфолио бюро', u: 'https://zovarchitect.ru/' },
  unsplash: { n: 23, t: 'Фото СПА-купели — Unsplash (лицензия Unsplash, свободное использование)', u: 'https://unsplash.com/s/photos/mountain-spa-pool' },
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
