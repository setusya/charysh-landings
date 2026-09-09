// Charysh — финансовая презентация для бизнес-завтрака (спикер — Андрей Маслак).
// Содержание — из PDF «Чарыш_расширенная версия» (А. Маслак), приведено к 72 га и дизайн-системе сайта.
// Слайды «настроения» (природа, код Алтая, фото) вынесены во вторую презентацию — breakfast.html.

// ───────────────────────── 02 · Ключевые цифры ─────────────────────────
function FinKeyNumbers({ num = '02' } = {}) {
  const stats = [
    { n: '2,9', u: 'млрд ₽', l: 'бюджет проекта', sub: 'Две очереди · 72 га в собственности' },
    { n: '288', u: 'млн ₽', l: 'уже инвестировано', sub: 'Земля, коммуникации, разработка проекта' },
    { n: '950', u: 'млн ₽', l: 'привлекаем', sub: 'Акции и недвижимость · чек 10–50 млн ₽' },
    { n: '55', u: 'млн ₽', l: 'господдержка', sub: 'Нацпроект «Туризм и индустрия гостеприимства»' },
    { n: '72', u: 'га', l: 'земля в собственности', sub: 'С необходимым ВРИ · на берегу реки Чарыш' },
    { n: '2028', u: 'апрель', l: 'открытие первой очереди', sub: 'Продажи групп: свадьбы, MICE, ретриты — с 2027 года' },
  ];
  return (
    <section className="sec-pad" id="key" data-screen-label="02 Fin — Key numbers + map">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Проект в&nbsp;цифрах<span className="sep">|</span>Где&nbsp;это</div>
          <h2 className="display h-display-l">
            «Чарыш» — деревня-курорт<br/>
            на&nbsp;<em className="redword">72&nbsp;гектарах</em> в&nbsp;предгорьях Алтая.
          </h2>
        </div>
        <div className="fin-two fin-keymap">
          <div className="climate-grid pc-economics-grid fin-key-grid">
            {stats.map((s, i) => (
              <div className="climate-cell" key={i}>
                <div className="climate-num">0{i+1}</div>
                <div className="climate-value">
                  {s.n}<span className="climate-unit">{s.u}</span>
                </div>
                <div className="climate-label">{s.l}</div>
                <div className="climate-sub">{s.sub}</div>
              </div>
            ))}
          </div>
          <figure className="fin-map">
            <img src="assets/photo/fin/map-altai.jpg" alt="Карта: Чарыш между Барнаулом, Горно-Алтайском и Новосибирском"/>
            <figcaption className="fin-map-cap">Барнаул 290 км · Горно-Алтайск 300 км · Новосибирск 530 км</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
window.FinKeyNumbers = FinKeyNumbers;

// ───────────────────────── 03 · Состав комплекса — первая очередь ─────────────────────────
function FinComplex({ num = '03' } = {}) {
  const items = [
    '124 номера в мини-гостиницах и коттеджах, от 16 до 100 м²',
    'Ивент-холл на 200 гостей и ресторан на 180',
    'СПА с закрытым бассейном на 55 гостей',
    'Зона отдыха: озёра, пляж, парк, спорт- и ретрит-комплексы',
    'Посёлок гостевых домов на 72 дома — каждый с землёй в собственности',
    'Центр управления и автоматизации',
    'Все коммуникации подведены',
  ];
  const usp = [
    'Все объекты одноэтажные, с выходом на собственный участок',
    'Безбарьерная среда — для людей с ограниченными возможностями, роботов-доставщиков и сервисной логистики',
    'Дополнительное «жизненное пространство» на открытом воздухе и вид 360°',
  ];
  return (
    <section className="sec-pad sec-warm" id="complex" data-screen-label="03 Fin — Complex">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Первая очередь</div>
          <h2 className="display h-display-l">
            Первая очередь — курорт и&nbsp;гостевые дома:<br/>
            <em className="redword">17,2&nbsp;га</em> из&nbsp;72 на&nbsp;берегу реки Чарыш.
          </h2>
        </div>
        <div className="fin-two">
          <div>
            <div className="format-h" style={{color:'var(--accent)'}}>Что строим</div>
            <ul className="pc-activity-list fin-list">
              {items.map((it, i) => <li key={i}>{it}</li>)}
            </ul>
            <div className="format-h" style={{color:'var(--accent)', marginTop:32}}>УТП комплекса</div>
            <ul className="pc-activity-list fin-list">
              {usp.map((it, i) => <li key={i}>{it}</li>)}
            </ul>
          </div>
          <figure className="pc-mp-render-fig" style={{margin:0}}>
            <img src="assets/photo/masterplan-render-2026.jpg" alt="Рендер мастер-плана первой очереди курорта Чарыш"/>
            <figcaption className="pc-mp-render-cap">Аэрофото-рендер первой очереди · долина Чарыша</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
window.FinComplex = FinComplex;

// ───────────────────────── 04 · Очереди и структура финансирования ─────────────────────────
function FinPhases({ num = '04' } = {}) {
  const phases = [
    { tag: 'Очередь 1 · 17,2 га', h: 'Курорт и гостевые дома', d: '124 номера, СПА с бассейном, ивент-холл и ресторан, озёра и пляж, посёлок гостевых домов на 72 дома.', when: 'Открытие — апрель 2028 · продажи групп с 2027' },
    { tag: 'Очередь 2 · 14,2 га и рядом', h: 'Развитие курорта', d: 'Гостиница на 120 номеров, спортивно-концертный комплекс на 500, оздоровительный центр на 60, модульный отель на 32 юнита, автокемпинг. Рядом — посёлок на 150 домов, горнолыжная база на 40 га, глэмпинг на 15 юнитов на высоте 540 м.', when: 'Финансируется выручкой первой очереди' },
  ];
  // Структура бюджета 2,9 млрд ₽ — млн ₽
  const total = 2900;
  const segs = [
    { l: 'Вложено основателями', v: 288, cls: 'fin-bar-a' },
    { l: 'Частные инвесторы · акции и недвижимость', v: 950, cls: 'fin-bar-b' },
    { l: 'Господдержка', v: 55, cls: 'fin-bar-c' },
    { l: 'Продажа гостевых домов и подряд · по очередям', v: total - 288 - 950 - 55, cls: 'fin-bar-d' },
  ];
  return (
    <section className="sec-pad sec-dark" id="phases" data-screen-label="04 Fin — Phases and financing">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Очереди&nbsp;и&nbsp;финансирование</div>
          <h2 className="display h-display-l">
            Две очереди. Вторая<br/>
            <em className="redword-light">финансируется выручкой первой</em>.
          </h2>
        </div>
        <div className="fin-phases">
          {phases.map((p, i) => (
            <article className="fin-phase" key={i}>
              <div className="fin-phase-tag">{p.tag}</div>
              <h3 className="fin-phase-h">{p.h}</h3>
              <p className="fin-phase-d">{p.d}</p>
              <div className="fin-phase-when">{p.when}</div>
            </article>
          ))}
        </div>

        <div className="fin-bar-h">Бюджет 2,9 млрд ₽ — откуда деньги</div>
        <div className="fin-bar" role="img" aria-label="Структура финансирования проекта">
          {segs.map((s, i) => (
            <div className={`fin-bar-seg ${s.cls}`} key={i} style={{flex: s.v}} title={`${s.l}: ${s.v} млн ₽`}>
              {s.v >= 250 ? `${s.v} млн` : ''}
            </div>
          ))}
        </div>
        <div className="fin-bar-legend">
          {segs.map((s, i) => (
            <div className="fin-bar-key" key={i}>
              <span className={`fin-bar-dot ${s.cls}`}/>
              <span className="fin-bar-key-v">{s.v} млн ₽ · {Math.round(s.v / total * 100)}%</span>
              <span className="fin-bar-key-l">{s.l}</span>
            </div>
          ))}
        </div>
        <p className="pc-bigaltai-hero-note" style={{marginTop:32, marginBottom:0}}>
          20% выручки от&nbsp;продажи гостевых домов и&nbsp;подряда вкладывается в&nbsp;общую инфраструктуру: <strong>инфраструктура строится одновременно с&nbsp;номерным фондом</strong>, а&nbsp;не&nbsp;после него.
        </p>
      </div>
    </section>
  );
}
window.FinPhases = FinPhases;

// ───────────────────────── 05 · Деревня · Курорт · Место силы (PDF, стр. 9–11) ─────────────────────────
function FinProduct({ num = '05' } = {}) {
  const cols = [
    {
      tag: 'Деревня', h: 'Русский код Алтая', img: 'assets/photo/fin/church.jpg',
      items: ['От одежды сотрудников до архитектурных решений', 'От гастрономии до программ по оздоровлению', 'От помощи в археологических раскопках до освоения традиционных ремёсел', 'От приобщения к быту казаков до участия в этнических фестивалях', 'Наши гости приобретут новые навыки'],
    },
    {
      tag: 'Курорт', h: '260 солнечных дней', img: 'assets/photo/fin/spa-stone.jpg',
      items: ['Номера и коттеджи уровня 4 звезды', 'Кафе, бар, ресторан авторской кухни', 'Пляжи, парк, прогулочные зоны, терренкуры, смотровые площадки', 'Крытый бассейн, бани, сауны, массажные кабинеты, лекарственные чаи', 'Инфоцентр, сувениры, трансфер, консьерж, аптека, охрана, Wi-Fi, медпункт', 'Спортивный городок, аренда инвентаря, программы активного отдыха'],
    },
    {
      tag: 'Алтайский край', h: 'Место силы', img: 'assets/photo/fin/rock-pond.jpg',
      items: ['Разнообразные ландшафты, богатое биоразнообразие', 'Уникальные природные объекты', 'Историко-культурное наследие', 'Сочетание природных и бальнеологических ресурсов', 'Климат с контрастами', 'Туристский потенциал, пассионарная энергия'],
    },
  ];
  return (
    <section className="sec-pad sec-warm" id="product" data-screen-label="05 Fin — Product: village, resort, place">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Что&nbsp;покупает гость</div>
          <h2 className="display h-display-l">
            Деревня. Курорт. Место силы.<br/>
            <em className="redword">Три слоя одного продукта</em>.
          </h2>
        </div>
        <div className="fin-product">
          {cols.map((c, i) => (
            <article className="fin-product-col" key={i}>
              <div className="fin-product-photo" style={{backgroundImage:`url('${c.img}')`}}/>
              <div className="fin-product-body">
                <div className="fin-product-tag">{c.tag}</div>
                <h3 className="fin-product-h">{c.h}</h3>
                <ul className="pc-activity-list fin-list">
                  {c.items.map((it, j) => <li key={j}>{it}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.FinProduct = FinProduct;

// ───────────────────────── 06 · Почему наш проект ─────────────────────────
function FinWhyUs({ num = '05' } = {}) {
  const args = [
    { h: 'Не идея, а стройплощадка', d: 'Вложено 288 млн ₽. Все коммуникации подведены. Земля 72 га в собственности с необходимым ВРИ.', src: 'pdf' },
    { h: 'Концепция «0 километр»', d: 'Местные материалы, подрядчики и персонал: минус 20% CAPEX и минус 12% OPEX относительно типового курорта.', src: 'pdf' },
    { h: 'Выручка до открытия', d: 'Свадьбы, MICE и ретриты продаются с 2027 года. 20% выручки от участков идёт в общую инфраструктуру.', src: 'pdf' },
    { h: 'Команда соинвестирует и управляет', d: 'Заказчик, застройщик и оператор — в одном лице. Опыт строительства и управления отелем, привлечение групп в низкий сезон.', src: 'pdf' },
    { h: 'Два понятных входа', d: 'Акции АО от 500 000 ₽ или гостевой дом с землёй в собственности от 8,5 млн ₽ с доходом от сдачи. Для чека 10–50 млн — комбинация.', src: 'pdf' },
  ];
  return (
    <section className="sec-pad" id="why-us" data-screen-label="05 Fin — Why us">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Почему&nbsp;наш&nbsp;проект</div>
          <h2 className="display h-display-l">
            Пять причин, по&nbsp;которым<br/>
            <em className="redword">это построится</em>.
          </h2>
        </div>
        <div className="fin-cards">
          {args.map((a, i) => (
            <article className="fin-card" key={i}>
              <div className="fin-card-num">{String(i+1).padStart(2,'0')}</div>
              <h3 className="fin-card-h">{a.h}</h3>
              <p className="fin-card-d">{a.d}</p>
            </article>
          ))}
        </div>
        <div className="fin-photos">
          <div className="fin-photo" style={{backgroundImage:"url('assets/photo/fin/build-excavator.jpg')"}}><div className="fin-photo-cap">Стройматериалы «под ногами»: мрамор, сланец, галька</div></div>
          <div className="fin-photo" style={{backgroundImage:"url('assets/photo/fin/build-trees-winter.jpg')"}}><div className="fin-photo-cap">Работы на площадке идут круглый год</div></div>
          <div className="fin-photo" style={{backgroundImage:"url('assets/photo/fin/community-planting.jpg')"}}><div className="fin-photo-cap">Земляки: 95% персонала — из Чарышского</div></div>
        </div>
      </div>
    </section>
  );
}
window.FinWhyUs = FinWhyUs;

// ───────────────────────── 06 · Рост земли — сравнение с Горным Алтаем и Шерегешем ─────────────────────────
function FinLandGrowth({ num = '06' } = {}) {
  const rows = [
    { loc: 'Республика Алтай · Чемал, Манжерок', price: '592 тыс ₽', dyn: '+88% за год · ×2 за 2024', what: 'Сбер вложил в Манжерок более 200 млрд ₽ — переоценена вся земля региона', src: 'cian,erz,rbc,iz' },
    { loc: 'Алтайский край · в среднем', price: '378 тыс ₽', dyn: '+6% за год', what: 'Зрелые локации: Белокуриха, Бирюзовая Катунь, «Сибирская монета»', src: 'cian' },
    { loc: 'Шерегеш · Кузбасс', price: '—', dyn: 'рынок насыщен', what: '1,65 млн гостей за сезон, 95 гостиниц, 50 СПА', src: 'ator' },
    { loc: 'Алтай в целом · 2015–2025', price: '—', dyn: '×7 за 10 лет', what: 'Курортная недвижимость подорожала в семь раз за десятилетие', src: 'barn' },
    { loc: 'Чарыш · сегодня', price: '—', dyn: 'до якорного инвестора', what: '72 га в собственности с необходимым ВРИ. Прямых конкурентов нет', src: 'pdf', hl: true },
  ];
  const stats = [
    { v: '>200 млрд ₽', l: 'вложил Сбер в Манжерок', sub: 'Половина всех инвестиций в Республику Алтай' },
    { v: '+88%', l: 'сотка в Республике Алтай за год', sub: 'III кв. 2024 к III кв. 2023' },
    { v: '×7', l: 'недвижимость Алтая за 10 лет', sub: '2015–2025 · курортные локации' },
  ];
  return (
    <section className="sec-pad sec-dark pc-bigaltai" id="land" data-screen-label="06 Fin — Land growth">
      <div className="pc-bigaltai-bg" style={{backgroundImage:"url('assets/photo/altai-belukha.webp')"}}/>
      <div className="pc-bigaltai-bg-overlay"/>
      <div className="container pc-bigaltai-inner">
        <div className="comm-head" style={{marginBottom:28}}>
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Почему&nbsp;Чарыш<span className="sep">|</span>Рост&nbsp;земли</div>
          <h2 className="display h-display-m">
            Земля растёт вслед за&nbsp;якорным инвестором.<br/>
            <em className="redword-light">Чарыш — та&nbsp;же долина, тот&nbsp;же поток, ещё не&nbsp;переоценён.</em>
          </h2>
        </div>
        <div className="fin-land">
          <div className="fin-land-stats">
            {stats.map((s, i) => (
              <div className="fin-land-stat" key={i}>
                <div className="fin-land-stat-v">{s.v}</div>
                <div className="fin-land-stat-l">{s.l}</div>
                <div className="fin-land-stat-sub">{s.sub}</div>
              </div>
            ))}
          </div>
          <div className="fin-table-wrap">
            <table className="fin-table fin-table-dark fin-table-compact">
              <thead>
                <tr><th>Локация</th><th>Сотка</th><th>Динамика</th><th>Что произошло</th></tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className={r.hl ? 'hl' : ''}>
                    <td className="fin-table-loc">{r.loc}</td>
                    <td className="v">{r.price}</td>
                    <td className="v fin-table-dyn">{r.dyn}</td>
                    <td>{r.what} <SrcRef k={r.src}/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <SrcList keys={['cian','erz','rbc','iz','ator','barn','pdf']}/>
      </div>
    </section>
  );
}
window.FinLandGrowth = FinLandGrowth;

// ───────────────────────── 07 · Предложение для инвесторов ─────────────────────────
function FinOffer({ num = '07' } = {}) {
  const tickets = [
    { tag: 'Вход 1', h: 'Акции АО', v: 'от 500 000 ₽', d: 'Доля в курорте. Дивиденды и выкуп — условия фиксируются в договоре.' },
    { tag: 'Вход 2', h: 'Гостевой дом', v: 'от 8,5 млн ₽', d: 'Гостевой дом с землёй в собственности в посёлке при курорте. Доход от сдачи через УК, выкуп по договору.' },
    { tag: 'Чек 10–50 млн ₽', h: 'Комбинация', v: 'гостевой дом + акции', d: 'Гостевой дом с землёй плюс доля в доходах всего комплекса. Пропорцию собираем под ваш сценарий.', hl: true },
  ];
  const metrics = [
    { v: '21,1', u: '%', l: 'ROI', sub: 'Годовой доход к вложенным средствам' },
    { v: '25', u: '%', l: 'IRR', sub: 'С учётом продажи актива через 10 лет по рынку, с инфляцией и износом' },
    { v: '88', u: 'мес', l: 'PP', sub: 'Простой срок окупаемости' },
    { v: '+160', u: '%', l: 'прирост стоимости актива', sub: 'За горизонт модели' },
  ];
  return (
    <section className="sec-pad sec-warm" id="offer" data-screen-label="07 Fin — Offer">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Предложение&nbsp;для&nbsp;инвесторов</div>
          <h2 className="display h-display-l">
            Два входа и&nbsp;<em className="redword">комбинация</em><br/>
            для&nbsp;чека 10–50 млн&nbsp;₽.
          </h2>
        </div>
        <div className="fin-tickets">
          {tickets.map((t, i) => (
            <article className={`fin-ticket ${t.hl ? 'fin-ticket-hl' : ''}`} key={i}>
              <div className="fin-ticket-tag">{t.tag}</div>
              <h3 className="fin-ticket-h">{t.h}</h3>
              <div className="fin-ticket-v">{t.v}</div>
              <p className="fin-ticket-d">{t.d}</p>
            </article>
          ))}
        </div>
        <figure className="fin-offer-fig">
          <img src="assets/photo/fin/guesthouse-render.jpg" alt="Рендер гостевого дома с землёй в собственности"/>
          <figcaption className="pc-mp-render-cap">Гостевой дом с землёй в собственности — от 8,5 млн ₽ · рендер из проекта</figcaption>
        </figure>
        <div className="fin-metrics">
          {metrics.map((m, i) => (
            <div className="fin-metric" key={i}>
              <div className="fin-metric-v">{m.v}<span className="fin-metric-u">{m.u}</span></div>
              <div className="fin-metric-l">{m.l}</div>
              <div className="fin-metric-sub">{m.sub}</div>
            </div>
          ))}
        </div>
        <p className="fin-note">
          Показатели рассчитаны по&nbsp;финмодели проекта по&nbsp;методике Туризм.РФ <SrcRef k="pdf"/>. Допущения — на&nbsp;следующем слайде. Приглашаем к&nbsp;сотрудничеству инвест-брокеров, деловые клубы и&nbsp;предпринимателей.
        </p>
      </div>
    </section>
  );
}
window.FinOffer = FinOffer;

// ───────────────────────── 08 · Допущения финмодели ─────────────────────────
function FinAssumptions({ num = '08' } = {}) {
  const rows = [
    { k: 'ADR', v: '13 800 ₽', d: 'средняя стоимость номера за сутки без НДС', from: 'Финмодель проекта. Для сравнения — средняя ночь по данным РСТ: Республика Алтай 21 106 ₽, Алтайский край 10 379 ₽', src: 'pdf,rst', hl: true },
    { k: 'OCC', v: '55%', d: 'загрузка номерного фонда', from: 'Консервативно: санатории Белокурихи — 68% в 2024 году, летом 2025 свыше 100%', src: 'belo' },
    { k: 'Мультипликатор', v: '1,8', d: 'к доходу от номерного фонда', from: 'Выручка от дополнительных услуг: ресторан, СПА, события, активности', src: 'pdf' },
    { k: 'GOP Margin', v: '55%', d: 'рентабельность по валовой операционной прибыли', from: 'Методика Туризм.РФ для курортных комплексов', src: 'pdf' },
    { k: 'Вознаграждение УК', v: '20%', d: 'от GOP', from: 'УК — заказчик и оператор в одном лице', src: 'pdf' },
    { k: 'Резервные фонды', v: '3,5%', d: 'отчисления', from: 'Методика Туризм.РФ', src: 'pdf' },
    { k: 'Затраты владельца', v: '4%', d: 'дополнительные', from: 'Методика Туризм.РФ', src: 'pdf' },
    { k: 'Инфляция', v: '5%', d: 'годовая', from: 'Методика Туризм.РФ', src: 'pdf' },
    { k: 'Амортизация', v: '50 лет', d: 'срок для актива', from: 'Методика Туризм.РФ', src: 'pdf' },
  ];
  return (
    <section className="sec-pad" id="assumptions" data-screen-label="08 Fin — Assumptions">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Допущения&nbsp;финмодели</div>
          <h2 className="display h-display-l">
            Допущения — <em className="redword">по&nbsp;методике Туризм.РФ</em>,<br/>
            с&nbsp;проверкой по&nbsp;соседним курортам.
          </h2>
        </div>
        <div className="fin-table-wrap">
          <table className="fin-table">
            <thead>
              <tr><th>Показатель</th><th>Значение</th><th>Что это</th><th>Откуда</th></tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className={r.hl ? 'hl' : ''}>
                  <td className="fin-table-loc">{r.k}</td>
                  <td className="v">{r.v}</td>
                  <td>{r.d}</td>
                  <td>{r.from} <SrcRef k={r.src}/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <SrcList keys={['rst','belo','pdf']}/>
      </div>
    </section>
  );
}
window.FinAssumptions = FinAssumptions;

// ───────────────────────── 09 · Концепция «0 километр» ─────────────────────────
function FinZeroKm({ num = '09' } = {}) {
  const points = [
    { h: 'Работа для земляков', d: '95% линейного персонала живёт в райцентре Чарышское. Местный клуб экскурсоводов, коллективы народного творчества, мастерские.' },
    { h: 'Стройматериалы «под ногами»', d: 'Мрамор, голубой сланец, древесина, глины, галька, песок — всё в радиусе района.' },
    { h: 'Подрядчики — лидеры региона', d: 'ЛХК «Алтай лес», «АКТО» (светопрозрачные конструкции), «МеталлПрофиль» расположены в регионе.' },
    { h: 'Продукты «за забором»', d: 'Ягоды, орехи, овощи, мёд, молочная, мясная и рыбная продукция, выпечка, лекарственные и чайные травы.' },
    { h: 'Вода — источник энергии', d: 'Берег реки Чарыш, скважина 100 т/сутки, 5 га озёр на территории, искусственный водопад 90 м.' },
  ];
  return (
    <section className="sec-pad sec-warm" id="zero-km" data-screen-label="09 Fin — Zero km">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Концепция&nbsp;«0&nbsp;километр»</div>
          <h2 className="display h-display-l">
            Всё, что нужно курорту,<br/>
            <em className="redword">уже лежит рядом</em>.
          </h2>
        </div>
        <div className="fin-two fin-two-rev">
          <div className="fin-metrics fin-metrics-2">
            <div className="fin-metric">
              <div className="fin-metric-v">−20<span className="fin-metric-u">%</span></div>
              <div className="fin-metric-l">CAPEX</div>
              <div className="fin-metric-sub">Затраты на строительство ниже за счёт местных материалов и подрядчиков</div>
            </div>
            <div className="fin-metric">
              <div className="fin-metric-v">−12<span className="fin-metric-u">%</span></div>
              <div className="fin-metric-l">OPEX</div>
              <div className="fin-metric-sub">Затраты на управление ниже за счёт местного персонала и продуктов</div>
            </div>
            <p className="fin-note" style={{gridColumn:'1 / -1'}}>
              Стратегия «голубого океана»: дополнительная ценность для&nbsp;инвесторов, гостей, местных жителей и&nbsp;партнёров при&nbsp;одновременном снижении издержек.
            </p>
          </div>
          <div className="fin-cards fin-cards-col">
            {points.map((p, i) => (
              <article className="fin-card" key={i}>
                <div className="fin-card-num">{String(i+1).padStart(2,'0')}</div>
                <h3 className="fin-card-h">{p.h}</h3>
                <p className="fin-card-d">{p.d}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.FinZeroKm = FinZeroKm;

// ───────────────────────── 10 · Спрос подтверждён ─────────────────────────
function FinDemand({ num = '10' } = {}) {
  const stats = [
    { n: '45 000', u: '', l: 'автотуристов в гостевых домах', sub: 'Остановились в локации проекта в 2026 году — спрос есть до открытия курорта', src: 'pdf' },
    { n: '69', u: '%', l: 'ядро целевой аудитории', sub: 'Автотуристы из Сибири · аналитика по запросу', src: 'pdf' },
    { n: '0', u: '', l: 'прямых конкурентов', sub: 'В локации проекта · тупиковая долина', src: 'pdf' },
    { n: '2,8', u: 'млн', l: 'турпоток Республики Алтай, 2025', sub: 'Рост ×2,3 за пять лет', src: 'tolkRA' },
    { n: '2,4', u: 'млн', l: 'турпоток Алтайского края, 2025', sub: 'Инвестиции в отрасль +51% за год', src: 'gov' },
    { n: '9', u: 'млн ₽', l: 'на разработку проекта', sub: '1,5 года: концепция, изучение спроса, финансовая модель', src: 'pdf' },
  ];
  return (
    <section className="sec-pad" id="demand" data-screen-label="10 Fin — Demand">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Спрос&nbsp;подтверждён</div>
          <h2 className="display h-display-l">
            Гости уже приезжают.<br/>
            <em className="redword">Пока — в&nbsp;чужие гостевые дома</em>.
          </h2>
        </div>
        <div className="climate-grid pc-economics-grid">
          {stats.map((s, i) => (
            <div className="climate-cell" key={i}>
              <div className="climate-num">0{i+1}</div>
              <div className="climate-value">
                {s.n}<span className="climate-unit">{s.u}</span>
              </div>
              <div className="climate-label">{s.l}</div>
              <div className="climate-sub">{s.sub} <SrcRef k={s.src}/></div>
            </div>
          ))}
        </div>
        <p className="fin-note">Аналитические материалы по&nbsp;спросу и&nbsp;целевой аудитории — по&nbsp;запросу.</p>
        <SrcList keys={['tolkRA','gov','raGov','pdf']}/>
      </div>
    </section>
  );
}
window.FinDemand = FinDemand;

// ───────────────────────── 11 · Риски и хеджирование ─────────────────────────
function FinRisks({ num = '11' } = {}) {
  const risks = [
    { r: 'Разрыв в финансировании', h: 'Две очереди: вторая строится на выручке первой. 20% выручки от гостевых домов и подряда — в общую инфраструктуру.' },
    { r: 'Спрос до открытия', h: 'Пакеты для групп — MICE, свадьбы, ретриты — продаём с 2027 года: выручка формируется до запуска комплекса.' },
    { r: 'Мотивация команды', h: 'Все члены команды сами инвестируют в проект. Заказчик и оператор — одно лицо, контроль качества и сроков у основателей.' },
    { r: 'Юридический риск', h: '72 га в собственности с необходимым ВРИ. Условия приобретения и полный пакет документов — по запросу.' },
    { r: 'Сезонность', h: 'Круглогодичный формат: СПА, ретриты, события. УТП команды — привлечение групп в низкий сезон.' },
  ];
  return (
    <section className="sec-pad sec-dark" id="risks" data-screen-label="11 Fin — Risks">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Риски&nbsp;и&nbsp;хеджирование</div>
          <h2 className="display h-display-l">
            Пять рисков, которые вы&nbsp;назовёте,<br/>
            <em className="redword-light">и&nbsp;что мы&nbsp;с&nbsp;ними уже сделали</em>.
          </h2>
        </div>
        <div className="fin-risks">
          {risks.map((x, i) => (
            <article className="fin-risk" key={i}>
              <div className="fin-risk-num">{String(i+1).padStart(2,'0')}</div>
              <div className="fin-risk-r">{x.r}</div>
              <div className="fin-risk-h">{x.h}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.FinRisks = FinRisks;

// ───────────────────────── 12 · Выход: дивиденды и выкуп ─────────────────────────
function FinExit({ num = '12' } = {}) {
  const shares = [
    ['Вход', 'от 500 000 ₽ в акции'],
    ['Дивиденды', 'из прибыли курорта — после вознаграждения УК (20% от GOP)'],
    ['Выкуп', 'условия и цена выкупа фиксируются в договоре при входе'],
    ['Горизонт модели', 'продажа актива через 10 лет по рыночной цене: IRR 25%, прирост стоимости 160%'],
  ];
  const estate = [
    ['Вход', 'гостевой дом с землёй в собственности от 8,5 млн ₽'],
    ['Доход', 'сдача через УК — без вашего участия'],
    ['Выкуп', 'по договору — условия приобретения и выкупа по запросу'],
    ['Вторичный рынок', 'гостевой дом с землёй в собственности — продаётся как любая недвижимость'],
    ['Актив', 'растёт вместе с землёй региона — см. слайд 07'],
  ];
  const Block = ({ tag, h, rows }) => (
    <article className="fin-exit-block">
      <div className="fin-ticket-tag">{tag}</div>
      <h3 className="fin-ticket-h">{h}</h3>
      <dl className="fin-dl">
        {rows.map(([k, v], i) => (
          <div className="fin-dl-row" key={i}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
  return (
    <section className="sec-pad sec-warm" id="exit" data-screen-label="12 Fin — Exit">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Выход</div>
          <h2 className="display h-display-l">
            Два способа получить деньги обратно:<br/>
            <em className="redword">дивиденды</em> и&nbsp;<em className="redword">выкуп</em>.
          </h2>
        </div>
        <div className="fin-two fin-two-eq">
          <Block tag="Акции АО" h="Доля в курорте" rows={shares}/>
          <Block tag="Гостевой дом" h="Гостевой дом с землёй в собственности" rows={estate}/>
        </div>
        <p className="fin-note">
          Механизм выхода фиксируется в&nbsp;договоре при&nbsp;входе, а&nbsp;не&nbsp;обещается на&nbsp;словах. Условия приобретения гостевого дома и&nbsp;пакета акций под&nbsp;конкретный чек — по&nbsp;запросу.
        </p>
      </div>
    </section>
  );
}
window.FinExit = FinExit;
