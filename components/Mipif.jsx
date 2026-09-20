// Charysh — презентация для МИПИФ (спикер — Андрей Маслак). 20 минут с вопросами.
// Собирает сильное из /invest/ и /product/: что такое Чарыш → почему поедут → цифры → что продаём (акции, арендные виллы).
// Цифры проекта — только из PDF Маслака; рыночные — со ссылкой на источник (components/Sources.jsx).
// Цена виллы и её доходность намеренно НЕ заполнены (MP_BLANK) — заполняет Маслак.
// Правило слайдов: каждое фото и каждая цифра встречаются в презентации один раз; мастер-план — только крупно на 06.

const MP_BLANK = '—';

// ───────────────────────── 02 · Что такое Чарыш — один слайд ─────────────────────────
function MpCharysh({ num = '02' } = {}) {
  const facts = [
    { n: '72', u: 'га', l: 'земля в собственности', sub: 'С необходимым ВРИ · на берегу реки Чарыш' },
    { n: '124', u: '', l: 'номера в мини-гостиницах и коттеджах', sub: 'От 16 до 100 м² · всё одноэтажное, с выходом на свой участок' },
    { n: '72', u: '', l: 'гостевых дома в посёлке при курорте', sub: 'Каждый — с землёй в собственности' },
    { n: '200', u: '', l: 'гостей — ивент-холл', sub: 'Ресторан на 180 · СПА с бассейном на 55' },
    { n: '5', u: 'га', l: 'озёр на территории', sub: 'Пляж, парк, водопад 90 м, скважина 100 т/сутки' },
    { n: '2028', u: 'апрель', l: 'открытие первой очереди', sub: 'Курорт и гостевые дома · 17,2 га из 72' },
  ];
  return (
    <section className="sec-pad" id="charysh" data-screen-label="02 MIPIF — What is Charysh">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Что&nbsp;такое&nbsp;Чарыш</div>
          <h2 className="display h-display-l">
            Деревня-курорт на&nbsp;<em className="redword">72&nbsp;гектарах</em><br/>
            в&nbsp;тупиковой долине реки Чарыш, предгорья Алтая.
          </h2>
        </div>
        <div className="fin-two fin-keymap">
          <div className="climate-grid pc-economics-grid fin-key-grid">
            {facts.map((s, i) => (
              <div className="climate-cell" key={i}>
                <div className="climate-num">0{i+1}</div>
                <div className="climate-value">{s.n}<span className="climate-unit">{s.u}</span></div>
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
        <div className="fin-photos">
          <div className="fin-photo" style={{backgroundImage:"url('assets/photo/fin/lake.jpg')"}}><div className="fin-photo-cap">Озеро на территории</div></div>
          <div className="fin-photo" style={{backgroundImage:"url('assets/photo/fin/rock-pond.jpg')"}}><div className="fin-photo-cap">Скала и пруд · берег реки</div></div>
          <div className="fin-photo" style={{backgroundImage:"url('assets/photo/charysh-summer-panorama.jpg')"}}><div className="fin-photo-cap">Долина Чарыша · лето</div></div>
        </div>
      </div>
    </section>
  );
}
window.MpCharysh = MpCharysh;

// ───────────────────────── 03 · Почему туда поедут: Горный Алтай и Белокуриха качают спрос ─────────────────────────
function MpProof({ num = '03' } = {}) {
  const demand = [
    { v: '2,8 млн', l: 'туристов в Республике Алтай, 2025', sub: 'Рост ×2,3 за пять лет · Сбер вложил в Манжерок >200 млрд ₽', src: 'tolkRA,iz' },
    { v: '>100%', l: 'загрузка санаториев Белокурихи летом 2025', sub: 'В среднем за 2024 год — 68% · Алтайский край: 2,4 млн гостей', src: 'belo,gov' },
    { v: '474 тыс ₽', l: 'средняя сотка в Республике Алтай, сентябрь 2026', sub: '+88% за 2024 год · дороже всего в Сибири', src: 'restateRA,erz,cian' },
  ];
  // Сравнение по категориям земли: сельхозназначение и рекреация / туристическое обслуживание — за гектар.
  // ИЖС в сравнение не входит. Все цифры — из объявлений и каталогов, год указан в каждой ячейке.
  const rows = [
    { loc: 'Чемальский район', agriThen: '2000-е · от 250 тыс ₽', agriNow: '2026 · от 350 тыс ₽', rec: '2026 · лоты под турбизнес в среднем 9,9 млн ₽, до 30 млн ₽ (участки 1–22 га)', src: 'altaika,cianAgriRA,cianChemal' },
    { loc: 'Манжерок · Майминский район', agriThen: '—', agriNow: '—', rec: '2025 · 1,85 млн ₽/га — первая линия Катуни, Барангол; у озера Манжерок — 60 млн ₽/га (10 соток за 6 млн)', src: 'cianComm,fontanka' },
    { loc: 'Уймонская долина · Усть-Кокса', agriThen: '2010-е · 90–550 тыс ₽', agriNow: '2026 · 250–800 тыс ₽', rec: '—', src: 'altaika,cianUymon' },
    { loc: 'Чарышский район', agriThen: '—', agriNow: '2026 · 70–100 тыс ₽', rec: '2026 · действующая база «Лесная» в Сентелеке (6 домов, баня, бассейн) — 24,9 млн ₽; 12 га под турбазу у реки — по запросу', src: 'cianCh,altera', hl: true },
  ];
  return (
    <section className="sec-pad sec-dark pc-bigaltai" id="proof" data-screen-label="03 MIPIF — Proof">
      <div className="pc-bigaltai-bg" style={{backgroundImage:"url('assets/photo/altai-belukha.webp')"}}/>
      <div className="pc-bigaltai-bg-overlay"/>
      <div className="container pc-bigaltai-inner">
        <div className="comm-head" style={{marginBottom:28}}>
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Почему&nbsp;туда&nbsp;поедут</div>
          <h2 className="display h-display-l">
            Горный Алтай и&nbsp;Белокуриха качают спрос.<br/>
            <em className="redword-light">Чарыш — недооценённая локация, открытие 2026&nbsp;года.</em>
          </h2>
        </div>
        <div className="fin-land-stats mp-sber">
          {demand.map((s, i) => (
            <div className="fin-land-stat" key={i}>
              <div className="fin-land-stat-v">{s.v}</div>
              <div className="fin-land-stat-l">{s.l} <SrcRef k={s.src}/></div>
              <div className="fin-land-stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>
        <div className="fin-src-h" style={{fontSize:'var(--fs-eyebrow)', opacity:.6, margin:'28px 0 6px'}}>Цена земли за гектар — по категориям: сельхозназначение и рекреация · ИЖС не сравниваем</div>
        <div className="fin-table-wrap">
          <table className="fin-table fin-table-dark fin-table-compact mp-compare">
            <thead>
              <tr><th>Локация</th><th>Сельхоз · раньше</th><th>Сельхоз · сейчас</th><th>Рекреация / туристическое обслуживание</th></tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className={r.hl ? 'hl' : ''}>
                  <td className="fin-table-loc">{r.loc}</td>
                  <td>{r.agriThen}</td>
                  <td className={r.hl ? 'hl-td' : ''}>{r.agriNow}</td>
                  <td>{r.rec} <SrcRef k={r.src}/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="fin-note" style={{opacity:.7, marginTop:12}}>72&nbsp;га «Чарыша» — в&nbsp;собственности, с&nbsp;ВРИ под&nbsp;туристическое обслуживание: земля уже переведена в&nbsp;категорию, которая в&nbsp;Горном Алтае стоит на&nbsp;порядок дороже сельхозной.</p>
        <div className="fin-photos">
          <div className="fin-photo" style={{backgroundImage:"url('assets/photo/web/altai-manzherok.jpg')"}}><div className="fin-photo-cap">Манжерок · Республика Алтай</div></div>
          <div className="fin-photo" style={{backgroundImage:"url('assets/photo/web/altai-teletskoye.jpg')"}}><div className="fin-photo-cap">Телецкое озеро · Горный Алтай</div></div>
          <div className="fin-photo" style={{backgroundImage:"url('assets/photo/web/river-summer.jpg')"}}><div className="fin-photo-cap">Чарыш · тупиковая долина</div></div>
        </div>
        <SrcList keys={['tolkRA','iz','belo','gov','restateRA','erz','cian','altaika','cianAgriRA','cianChemal','cianComm','fontanka','cianUymon','cianCh','altera']}/>
      </div>
    </section>
  );
}
window.MpProof = MpProof;

// ───────────────────────── 04 · Природа и место ─────────────────────────
function MpNature({ num = '04' } = {}) {
  const gallery = [
    { src: 'assets/photo/location-aerial-3.jpg', cap: 'Долина Чарыша · аэрофото' },
    { src: 'assets/photo/sunset-hills.jpg', cap: 'Закат над предгорьями' },
    { src: 'assets/photo/fin/river-sup.jpg', cap: 'Чарыш · SUP и сплавы' },
    { src: 'assets/photo/valley-autumn.jpg', cap: 'Долина · октябрь' },
    { src: 'assets/photo/season-winter-frost.jpg', cap: 'Река · зима' },
    { src: 'assets/photo/place-misty-mountains.jpg', cap: 'Туман в горах' },
    { src: 'assets/photo/fin/church.jpg', cap: 'Село Чарышское' },
  ];
  const facts = [
    { v: '260', u: 'дней', l: 'солнечных в году' },
    { v: '4★', u: '', l: 'уровень номеров и коттеджей' },
    { v: '100', u: 'т/сутки', l: 'собственная скважина' },
    { v: '90', u: 'м', l: 'искусственный водопад' },
  ];
  return (
    <section className="sec-pad" id="nature" data-screen-label="04 MIPIF — Nature">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Место<span className="sep">|</span>Природа</div>
          <h2 className="display h-display-l">
            Алтайский край. <em className="redword">Место силы</em>:<br/>
            ландшафты, биоразнообразие, климат с&nbsp;контрастами.
          </h2>
        </div>
        <div className="place-gallery">
          {gallery.map((g, i) => (
            <figure className="place-gallery-cell" key={i}>
              <div className="place-gallery-ph" style={{backgroundImage:`url('${g.src}')`}}/>
              <figcaption className="place-gallery-cap">{g.cap}</figcaption>
            </figure>
          ))}
        </div>
        <div className="fin-metrics" style={{marginTop:0}}>
          {facts.map((f, i) => (
            <div className="fin-metric" key={i}>
              <div className="fin-metric-v">{f.v}<span className="fin-metric-u">{f.u}</span></div>
              <div className="fin-metric-l">{f.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.MpNature = MpNature;

// ───────────────────────── 05 · Чем живёт Чарыш — компактно ─────────────────────────
function MpLife({ num = '05' } = {}) {
  const cats = [
    { tag: 'Река и горы', img: 'assets/photo/activity-marble-river.jpg', d: 'Рафтинг, SUP, рыбалка, походы, конные тропы, скалолазание' },
    { tag: 'Русский код Алтая', img: 'assets/photo/people-craft-circle.jpg', d: 'Казачий быт, ремёсла, фольклор, этнофестивали, раскопки' },
    { tag: 'СПА и оздоровление', img: 'assets/photo/web/spa-hottub-mountains.jpg', pos: 'center 62%', d: 'Крытый бассейн, бани, купели, массаж, лекарственные чаи, терренкуры' },
    { tag: 'Живая еда', img: 'assets/photo/food-cauliflower.jpg', d: 'Ресторан авторской кухни, продукты «за забором», фермерская ярмарка' },
    { tag: 'Свадьбы и юбилеи', img: 'assets/photo/web/valley-pavilion.jpg', d: 'Церемония у реки, банкет на 180, размещение гостей в гостевых домах' },
    { tag: 'MICE и ретриты', img: 'assets/photo/web/people-rafting-group.jpg', d: 'Ивент-холл на 200, стратсессии, сплав, баня, ретрит-программы' },
  ];
  return (
    <section className="sec-pad sec-warm" id="life" data-screen-label="05 MIPIF — Life">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Чем&nbsp;живёт&nbsp;Чарыш</div>
          <h2 className="display h-display-l">
            Деревня. Курорт. События.<br/>
            <em className="redword">Гость приобретает новые навыки</em>, а&nbsp;не&nbsp;только загар.
          </h2>
        </div>
        <div className="pc-activities-grid">
          {cats.map((c, i) => (
            <article className="pc-activity-card" key={i}>
              <div className="pc-activity-photo" style={{backgroundImage:`url('${c.img}')`, backgroundPosition: c.pos || 'center'}}>
                <div className="pc-activity-num">{String(i+1).padStart(2,'0')}</div>
              </div>
              <div className="pc-activity-body">
                <div className="pc-activity-tag">{c.tag}</div>
                <p className="fin-card-d">{c.d}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="fin-note">УТП команды — привлечение групп в&nbsp;низкий сезон. Пакеты для&nbsp;групп (MICE, свадьбы, ретриты) продаём с&nbsp;2027 года: выручка формируется до&nbsp;запуска комплекса.</p>
      </div>
    </section>
  );
}
window.MpLife = MpLife;

// ───────────────────────── 06 · Первая очередь — мастер-план крупно + архитектура бюро ЗОВ ─────────────────────────
function MpComplex({ num = '06' } = {}) {
  const items = [
    '124 номера в мини-гостиницах и коттеджах, от 16 до 100 м²',
    'Ивент-холл на 200 гостей и ресторан на 180',
    'СПА с закрытым бассейном на 55 гостей',
    'Зона отдыха: озёра, пляж, парк, спорт- и ретрит-комплексы',
    'Посёлок гостевых домов на 72 дома — каждый с землёй в собственности',
    'Центр управления и автоматизации · все коммуникации подведены',
  ];
  const usp = [
    'Все объекты одноэтажные, с выходом на собственный участок',
    'Безбарьерная среда — для людей с ограниченными возможностями, роботов-доставщиков и сервисной логистики',
    'Дополнительное «жизненное пространство» на открытом воздухе и вид 360°',
  ];
  // Эскизный проект гостиниц на 8 номеров для «Чарыша» — бюро ЗОВ (уплоады/Чарыш_эскизный_проект_гостиниц_на_8_номеров.pdf)
  const zov = [
    { img: 'assets/photo/zov/village-day.jpg', cap: 'Гостиницы на 8 номеров · эскизный проект бюро ЗОВ' },
    { img: 'assets/photo/zov/hotel-winter.jpg', cap: 'Зимний фасад · алтайский орнамент по дереву' },
    { img: 'assets/photo/zov/hotel-evening.jpg', cap: 'Вечер · терраса и общая гостиная' },
  ];
  return (
    <section className="sec-pad sec-warm" id="complex" data-screen-label="06 MIPIF — Complex, big master plan">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Первая очередь</div>
          <h2 className="display h-display-l">
            Первая очередь — курорт и&nbsp;гостевые дома:<br/>
            <em className="redword">17,2&nbsp;га</em> из&nbsp;72 на&nbsp;берегу реки Чарыш.
          </h2>
        </div>
        <figure className="mp-masterplan">
          <img src="assets/photo/masterplan-render-2026.jpg" alt="Мастер-план первой очереди курорта Чарыш"/>
          <figcaption className="pc-mp-render-cap">Мастер-план первой очереди · долина Чарыша · главный архитектор — Лев Нодельман</figcaption>
        </figure>
        <div className="fin-two fin-two-eq" style={{marginTop:24}}>
          <div>
            <div className="format-h" style={{color:'var(--accent)'}}>Что строим</div>
            <ul className="pc-activity-list fin-list">
              {items.map((it, i) => <li key={i}>{it}</li>)}
            </ul>
          </div>
          <div>
            <div className="format-h" style={{color:'var(--accent)'}}>УТП комплекса</div>
            <ul className="pc-activity-list fin-list">
              {usp.map((it, i) => <li key={i}>{it}</li>)}
            </ul>
          </div>
        </div>
        <div className="fin-photos">
          {zov.map((z, i) => (
            <div className="fin-photo" key={i} style={{backgroundImage:`url('${z.img}')`}}><div className="fin-photo-cap">{z.cap}</div></div>
          ))}
        </div>
        <p className="fin-note" style={{marginTop:14}}>Архитектура — бюро ЗОВ: эскизный проект гостиниц на&nbsp;8 номеров, тип 1 и&nbsp;тип 2. Дерево, кирпич, стекло, резной алтайский орнамент <SrcRef k="zov"/>.</p>
      </div>
    </section>
  );
}
window.MpComplex = MpComplex;

// ───────────────────────── 07 · Инвест-цифры ─────────────────────────
function MpNumbers({ num = '07' } = {}) {
  const budget = [
    { n: '2,9', u: 'млрд ₽', l: 'бюджет проекта', sub: 'Две очереди · курорт и гостевые дома, затем развитие' },
    { n: '288', u: 'млн ₽', l: 'уже инвестировано', sub: 'Земля, коммуникации, разработка проекта' },
    { n: '950', u: 'млн ₽', l: 'привлекаем', sub: 'Акции и арендные виллы · чек от 500 тыс до 40 млн ₽' },
    { n: '55', u: 'млн ₽', l: 'господдержка', sub: 'Нацпроект «Туризм и индустрия гостеприимства»' },
  ];
  const metrics = [
    { v: '21,1', u: '%', l: 'ROI', sub: 'Годовой доход к вложенным средствам' },
    { v: '25', u: '%', l: 'IRR', sub: 'Продажа актива через 10 лет по рынку, с инфляцией и износом' },
    { v: '88', u: 'мес', l: 'окупаемость (PP)', sub: 'Простой срок' },
    { v: '+160', u: '%', l: 'прирост стоимости актива', sub: 'За горизонт модели' },
  ];
  return (
    <section className="sec-pad" id="numbers" data-screen-label="07 MIPIF — Investment numbers">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Инвест-цифры</div>
          <h2 className="display h-display-l">
            Бюджет 2,9 млрд ₽. Уже вложено 288 млн.<br/>
            <em className="redword">Концепция «0 километр»</em>: −20% CAPEX, −12% OPEX.
          </h2>
        </div>
        <div className="climate-grid pc-economics-grid mp-budget">
          {budget.map((s, i) => (
            <div className="climate-cell" key={i}>
              <div className="climate-num">0{i+1}</div>
              <div className="climate-value">{s.n}<span className="climate-unit">{s.u}</span></div>
              <div className="climate-label">{s.l}</div>
              <div className="climate-sub">{s.sub}</div>
            </div>
          ))}
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
          «0 километр»: местные материалы (мрамор, сланец, древесина), подрядчики региона (ЛХК «Алтайлес», «АКТО», «МеталлПрофиль») и&nbsp;95% персонала из&nbsp;Чарышского. Показатели — по&nbsp;финмодели проекта по&nbsp;методике Туризм.РФ <SrcRef k="pdf"/>.
        </p>
      </div>
    </section>
  );
}
window.MpNumbers = MpNumbers;

// ───────────────────────── 08 · Что продаём · Акции ─────────────────────────
function MpShares({ num = '08' } = {}) {
  const rows = [
    ['Вход', 'от 500 000 ₽'],
    ['Что это', 'доля в курорте — номера, СПА, ресторан, ивент-холл, посёлок гостевых домов'],
    ['Дивиденды', 'из прибыли курорта — после вознаграждения УК (20% от GOP)'],
    ['Выкуп', 'условия и цена выкупа фиксируются в договоре при входе'],
    ['Горизонт модели', '10 лет — продажа актива по рыночной цене'],
    ['Для инвест-брокеров', 'партнёрская программа — условия по запросу'],
  ];
  return (
    <section className="sec-pad sec-warm" id="shares" data-screen-label="08 MIPIF — Shares">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Что&nbsp;продаём<span className="sep">|</span>1 · Акции</div>
          <h2 className="display h-display-l">
            <em className="redword">Акции</em> — доля во&nbsp;всём курорте.<br/>
            Вход от&nbsp;500&nbsp;000&nbsp;₽.
          </h2>
        </div>
        <div className="fin-two">
          <article className="fin-exit-block">
            <div className="fin-ticket-tag">Вход 1</div>
            <h3 className="fin-ticket-h">Акции</h3>
            <dl className="fin-dl">
              {rows.map(([k, v], i) => (
                <div className="fin-dl-row" key={i}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
          </article>
          <figure className="pc-mp-render-fig" style={{margin:0}}>
            <img src="assets/photo/zov/hotel-sunset.jpg" alt="Гостиница на 8 номеров — эскизный проект бюро ЗОВ"/>
            <figcaption className="pc-mp-render-cap">Во что входит акционер: мини-гостиницы на 8 номеров, СПА, ресторан, ивент-холл · эскизный проект бюро ЗОВ</figcaption>
          </figure>
        </div>
        <p className="fin-note">Приглашаем к&nbsp;сотрудничеству инвест-брокеров, деловые клубы и&nbsp;предпринимателей <SrcRef k="pdf"/>.</p>
      </div>
    </section>
  );
}
window.MpShares = MpShares;

// ───────────────────────── 09 · Что продаём · Арендная вилла 134 м² ─────────────────────────
function MpVilla({ num = '09' } = {}) {
  const spec = [
    ['Площадь', '134 м² · одноэтажный'],
    ['Материал', 'клеёный брус · ЛХК «Алтайлес», Алтайский край'],
    ['Планировка', 'кухня-гостиная 39 м², три спальни, два санузла, гардероб, котельная'],
    ['Снаружи', 'терраса 17 м², крыльцо, выход на собственный участок'],
    ['Земля', 'в собственности владельца'],
    ['Управление', 'сдача через УК курорта — без участия владельца'],
  ];
  const money = [
    { v: MP_BLANK, u: '₽', l: 'цена виллы с землёй' },
    { v: MP_BLANK, u: '%', l: 'доход владельцу от выручки' },
    { v: MP_BLANK, u: '%', l: 'целевая загрузка' },
    { v: MP_BLANK, u: 'лет', l: 'окупаемость' },
    { v: MP_BLANK, u: '', l: 'выкуп · через' },
  ];
  return (
    <section className="sec-pad" id="villa" data-screen-label="09 MIPIF — Rental villa">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Что&nbsp;продаём<span className="sep">|</span>2 · Арендная вилла</div>
          <h2 className="display h-display-l">
            <em className="redword">Арендная вилла</em> 134&nbsp;м² с&nbsp;землёй в&nbsp;собственности.<br/>
            Живёте сами — или сдаёте через УК.
          </h2>
        </div>
        <div className="mp-villa">
          <figure className="mp-villa-main">
            <img src="assets/photo/altailes/h134-1.jpg" alt="Арендная вилла 134 м² — рендер ЛХК «Алтайлес»"/>
            <figcaption className="pc-mp-render-cap">Проект «Дом 134 м²» · ЛХК «Алтайлес» — подрядчик проекта</figcaption>
          </figure>
          <div className="mp-villa-side">
            <img src="assets/photo/altailes/h134-3.jpg" alt="Вилла 134 м² — вид с террасы"/>
            <img src="assets/photo/altailes/h134-4.jpg" alt="Планировка виллы 134 м²"/>
          </div>
        </div>
        <div className="fin-two fin-two-eq" style={{marginTop:24}}>
          <article className="fin-exit-block">
            <div className="fin-ticket-tag">Вход 2</div>
            <h3 className="fin-ticket-h">Что получает владелец</h3>
            <dl className="fin-dl">
              {spec.map(([k, v], i) => (
                <div className="fin-dl-row" key={i}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
          </article>
          <article className="fin-exit-block mp-villa-money">
            <div className="fin-ticket-tag">Экономика виллы</div>
            <h3 className="fin-ticket-h">Цена и доходность</h3>
            <div className="mp-money-grid">
              {money.map((m, i) => (
                <div className="mp-money" key={i}>
                  <div className="mp-money-v">{m.v}<span className="fin-metric-u">{m.u}</span></div>
                  <div className="mp-money-l">{m.l}</div>
                </div>
              ))}
            </div>
            <p className="fin-note" style={{marginTop:16}}>Условия приобретения виллы и&nbsp;выкупа — по&nbsp;запросу, под&nbsp;конкретный чек.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
window.MpVilla = MpVilla;

// ───────────────────────── 10 · Финмодель и спрос ─────────────────────────
function MpModel({ num = '10' } = {}) {
  const model = [
    { v: '13 800', u: '₽', l: 'ADR — цена номера за сутки', sub: 'Средняя по Республике Алтай — 21 106 ₽ (РСТ)', src: 'pdf,rst' },
    { v: '55', u: '%', l: 'загрузка (OCC)', sub: 'Консервативно относительно Белокурихи', src: 'pdf' },
    { v: '1,8', u: '', l: 'мультипликатор к доходу номерного фонда', sub: 'Ресторан, СПА, события, активности', src: 'pdf' },
    { v: '55', u: '%', l: 'GOP margin', sub: 'Методика Туризм.РФ · УК 20% от GOP · резервы 3,5% · инфляция 5%', src: 'pdf' },
  ];
  const demand = [
    { v: '45 000', u: '', l: 'автотуристов останавливались в локации в 2026', src: 'pdf' },
    { v: '69', u: '%', l: 'ядро аудитории — автотуристы из Сибири', src: 'pdf' },
    { v: '0', u: '', l: 'прямых конкурентов в локации', src: 'pdf' },
    { v: '9', u: 'млн ₽', l: 'и 1,5 года — на разработку проекта и изучение спроса', src: 'pdf' },
  ];
  const Grid = ({ items }) => (
    <div className="fin-metrics" style={{marginTop:0}}>
      {items.map((m, i) => (
        <div className="fin-metric" key={i}>
          <div className="fin-metric-v">{m.v}<span className="fin-metric-u">{m.u}</span></div>
          <div className="fin-metric-l">{m.l} <SrcRef k={m.src}/></div>
          {m.sub && <div className="fin-metric-sub">{m.sub}</div>}
        </div>
      ))}
    </div>
  );
  return (
    <section className="sec-pad sec-warm" id="model" data-screen-label="10 MIPIF — Model and demand">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Финмодель<span className="sep">|</span>Спрос</div>
          <h2 className="display h-display-l">
            Допущения — по&nbsp;методике Туризм.РФ.<br/>
            Спрос — <em className="redword">уже подтверждён</em>.
          </h2>
        </div>
        <div className="fin-src-h" style={{fontSize:'var(--fs-eyebrow)', opacity:.55, marginBottom:8}}>Допущения финмодели</div>
        <Grid items={model}/>
        <div className="fin-src-h" style={{fontSize:'var(--fs-eyebrow)', opacity:.55, margin:'28px 0 8px'}}>Спрос подтверждён</div>
        <Grid items={demand}/>
        <p className="fin-note">Аналитические материалы по&nbsp;спросу и&nbsp;целевой аудитории — по&nbsp;запросу.</p>
        <SrcList keys={['rst','pdf']}/>
      </div>
    </section>
  );
}
window.MpModel = MpModel;

// ───────────────────────── 11 · Риски и их хеджирование ─────────────────────────
function MpRisks({ num = '11' } = {}) {
  const risks = [
    { r: 'Разрыв в финансировании', h: 'Две очереди: вторая строится на выручке первой. 20% выручки от гостевых домов и подряда — в общую инфраструктуру.' },
    { r: 'Спрос до открытия', h: 'Группы бронируют раньше, чем открывается курорт: выручка формируется до запуска.' },
    { r: 'Мотивация команды', h: 'Все члены команды сами инвестируют в проект.' },
    { r: 'Юридический риск', h: 'Земля в собственности с необходимым ВРИ. Полный пакет документов — по запросу.' },
    { r: 'Выход', h: 'Дивиденды и выкуп фиксируются в договоре при входе, а не обещаются на словах. Вилла продаётся как любая недвижимость.' },
  ];
  return (
    <section className="sec-pad sec-dark" id="risks" data-screen-label="11 MIPIF — Risks">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Риски&nbsp;и&nbsp;хеджирование</div>
          <h2 className="display h-display-l">
            Пять вопросов, которые вы&nbsp;зададите,<br/>
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
        <div className="fin-photos">
          <div className="fin-photo" style={{backgroundImage:"url('assets/photo/fin/build-excavator.jpg')"}}><div className="fin-photo-cap">Стройматериалы «под ногами»: мрамор, сланец</div></div>
          <div className="fin-photo" style={{backgroundImage:"url('assets/photo/fin/build-trees-winter.jpg')"}}><div className="fin-photo-cap">Работы на площадке идут круглый год</div></div>
          <div className="fin-photo" style={{backgroundImage:"url('assets/photo/fin/community-planting.jpg')"}}><div className="fin-photo-cap">95% персонала — земляки из Чарышского</div></div>
        </div>
      </div>
    </section>
  );
}
window.MpRisks = MpRisks;
