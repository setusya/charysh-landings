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
    { tag: 'Вход 1', h: 'Акции', v: 'от 500 000 ₽', d: 'Доля в курорте. Дивиденды и выкуп — условия фиксируются в договоре.' },
    { tag: 'Вход 2', h: 'Гостевой дом', v: 'от 8,5 млн ₽', d: 'Гостевой дом с землёй в собственности в посёлке при курорте. Доход от сдачи через УК, выкуп по договору.' },
    { tag: 'Вход 3', h: 'Тематический инвестор', v: 'объект инфраструктуры', d: 'Отдельный объект курорта — СПА, ресторан, ивент-холл, банный комплекс, прокат — как самостоятельный бизнес со своей экономикой. Условия — под объект.' },
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
            Три входа: <em className="redword">акции</em>, <em className="redword">гостевой дом</em><br/>
            или&nbsp;<em className="redword">объект инфраструктуры</em>.
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
        <div className="fin-offer-figs">
          <figure className="fin-offer-fig">
            <img src="assets/photo/fin/guesthouse-render.jpg" alt="Рендер гостевого дома с землёй в собственности"/>
            <figcaption className="pc-mp-render-cap">Гостевой дом с землёй в собственности — от 8,5 млн ₽</figcaption>
          </figure>
          <figure className="fin-offer-fig">
            <img src="assets/photo/render-coliving.jpg" alt="Рендер дома на 8 номеров"/>
            <figcaption className="pc-mp-render-cap">Дом на 8 номеров — мини-гостиница курорта</figcaption>
          </figure>
        </div>
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
        <div className="fin-photos">
          <div className="fin-photo" style={{backgroundImage:"url('assets/photo/fin/build-excavator.jpg')"}}><div className="fin-photo-cap">Стройматериалы «под ногами»: мрамор, сланец, галька</div></div>
          <div className="fin-photo" style={{backgroundImage:"url('assets/photo/fin/build-trees-winter.jpg')"}}><div className="fin-photo-cap">Работы на площадке идут круглый год</div></div>
          <div className="fin-photo" style={{backgroundImage:"url('assets/photo/fin/community-planting.jpg')"}}><div className="fin-photo-cap">Земляки: 95% персонала — из Чарышского</div></div>
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
        <div className="fin-two fin-demand">
          <div className="climate-grid pc-economics-grid fin-key-grid">
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
          <div className="fin-demand-photo" style={{backgroundImage:"url('assets/photo/fin/autotourists.jpg')"}}>
            <div className="fin-photo-cap">Автотуристы из Сибири — ядро аудитории (69%)</div>
          </div>
        </div>
        <p className="fin-note">Аналитические материалы по&nbsp;спросу и&nbsp;целевой аудитории — по&nbsp;запросу.</p>
        <SrcList keys={['tolkRA','gov','raGov','pdf']}/>
      </div>
    </section>
  );
}
window.FinDemand = FinDemand;

// ───────────────────────── 09 · Риски, хеджирование и выход ─────────────────────────
function FinRisksExit({ num = '09' } = {}) {
  const risks = [
    { r: 'Разрыв в финансировании', h: 'Две очереди: вторая строится на выручке первой. 20% выручки от гостевых домов и подряда — в общую инфраструктуру.' },
    { r: 'Спрос до открытия', h: 'Пакеты для групп — MICE, свадьбы, ретриты — продаём с 2027 года: выручка формируется до запуска комплекса.' },
    { r: 'Мотивация команды', h: 'Все члены команды сами инвестируют в проект. Заказчик и оператор — одно лицо: УК с опытом строительства и управления отелем.' },
    { r: 'Юридический риск', h: '72 га в собственности с необходимым ВРИ. Условия приобретения и полный пакет документов — по запросу.' },
    { r: 'Сезонность', h: 'Круглогодичный формат: СПА, ретриты, события. УТП команды — привлечение групп в низкий сезон.' },
  ];
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
    <section className="sec-pad sec-warm" id="exit" data-screen-label="09 Fin — Risks and exit">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Риски&nbsp;и&nbsp;выход</div>
          <h2 className="display h-display-l">
            Что может пойти не&nbsp;так —<br/>
            <em className="redword">и&nbsp;как вы&nbsp;получаете деньги обратно</em>.
          </h2>
        </div>
        <div className="fin-risks fin-risks-light">
          {risks.map((x, i) => (
            <article className="fin-risk" key={i}>
              <div className="fin-risk-num">{String(i+1).padStart(2,'0')}</div>
              <div className="fin-risk-r">{x.r}</div>
              <div className="fin-risk-h">{x.h}</div>
            </article>
          ))}
        </div>
        <div className="fin-two fin-two-eq" style={{marginTop:28}}>
          <Block tag="Акции" h="Дивиденды и выкуп" rows={shares}/>
          <Block tag="Гостевой дом" h="Доход и выкуп" rows={estate}/>
        </div>
        <p className="fin-note">
          Механизм выхода фиксируется в&nbsp;договоре при&nbsp;входе, а&nbsp;не&nbsp;обещается на&nbsp;словах. Условия приобретения гостевого дома, пакета акций и&nbsp;объекта инфраструктуры под&nbsp;конкретный чек — по&nbsp;запросу.
        </p>
      </div>
    </section>
  );
}
window.FinRisksExit = FinRisksExit;
