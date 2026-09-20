// Charysh — презентация для МИПИФ (спикер — Андрей Маслак). 20 минут с вопросами.
// Собирает сильное из /invest/ и /product/: что такое Чарыш → почему поедут → цифры → что продаём (акции, арендные виллы).
// Цифры проекта — только из PDF Маслака; рыночные — со ссылкой на источник (components/Sources.jsx).
// Цена виллы и её доходность намеренно НЕ заполнены (MP_BLANK) — заполняет Маслак.

const MP_BLANK = '—';

// ───────────────────────── 02 · Что такое Чарыш — один слайд ─────────────────────────
function MpCharysh({ num = '02' } = {}) {
  const facts = [
    { n: '72', u: 'га', l: 'земля в собственности', sub: 'С необходимым ВРИ · на берегу реки Чарыш' },
    { n: '124', u: '', l: 'номера в мини-гостиницах и коттеджах', sub: 'От 16 до 100 м² · всё одноэтажное, с выходом на свой участок' },
    { n: '72', u: '', l: 'гостевых дома в посёлке при курорте', sub: 'Каждый — с землёй в собственности' },
    { n: '200', u: '', l: 'гостей — ивент-холл', sub: 'Ресторан на 180 · СПА с бассейном на 55' },
    { n: '5', u: 'га', l: 'озёр на территории', sub: 'Пляж, парк, водопад 90 м, скважина 100 т/сутки' },
    { n: '2028', u: 'апрель', l: 'открытие первой очереди', sub: 'Продажи групп — с 2027 года' },
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
          <div className="fin-photo" style={{backgroundImage:"url('assets/photo/masterplan-render-2026.jpg')"}}><div className="fin-photo-cap">Рендер первой очереди · 17,2 га из 72</div></div>
        </div>
      </div>
    </section>
  );
}
window.MpCharysh = MpCharysh;

// ───────────────────────── 03 · Доказательство: Греф качает Алтай, Чарыш — Горный десять лет назад ─────────────────────────
function MpProof({ num = '03' } = {}) {
  const sber = [
    { v: '>200 млрд ₽', l: 'вложил Сбер в Манжерок', sub: 'Половина всех инвестиций в Республику Алтай', src: 'iz' },
    { v: '+88%', l: 'сотка в Республике Алтай за год', sub: '592 тыс ₽ — дороже всего в Сибири · ×2 за 2024', src: 'cian,erz,rbc' },
    { v: '2,8 млн', l: 'туристов в Республике Алтай, 2025', sub: 'Рост ×2,3 за пять лет · Алтайский край +2,4 млн', src: 'tolkRA,gov' },
  ];
  const rows = [
    { k: 'Стадия', a: 'Курорт-миллионник: 1,5 млн гостей, аэропорт, пробки на Чуйском тракте', b: 'Стадия «до якоря»: 45 000 автотуристов уже приезжают, курорт открывается в 2028', src: 'iz,pdf' },
    { k: 'Земля', a: '592 тыс ₽ за сотку · +88% за год', b: 'Не переоценена: 72 га одним куском, с ВРИ, в собственности', src: 'cian,erz,pdf' },
    { k: 'Цена ночи', a: '21 106 ₽ — средняя по Республике Алтай', b: '13 800 ₽ — ADR в модели «Чарыша»: приятнее для гостя, честнее для загрузки', src: 'rst,pdf' },
    { k: 'Конкуренция', a: 'Шерегеш: 95 гостиниц, 50 СПА за одного гостя', b: 'Прямых конкурентов в локации нет', src: 'ator,pdf' },
    { k: 'Среда', a: 'Массовый поток, стройка, шум', b: 'Тупиковая долина, 260 солнечных дней, деревня с казачьей историей', src: 'pdf' },
  ];
  return (
    <section className="sec-pad sec-dark pc-bigaltai" id="proof" data-screen-label="03 MIPIF — Proof">
      <div className="pc-bigaltai-bg" style={{backgroundImage:"url('assets/photo/altai-belukha.webp')"}}/>
      <div className="pc-bigaltai-bg-overlay"/>
      <div className="container pc-bigaltai-inner">
        <div className="comm-head" style={{marginBottom:28}}>
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Почему&nbsp;туда&nbsp;поедут</div>
          <h2 className="display h-display-l">
            Греф качает Алтай.<br/>
            <em className="redword-light">Чарыш — это Горный Алтай десять лет назад</em>:<br/>
            чище и&nbsp;приятнее по&nbsp;ценам.
          </h2>
        </div>
        <div className="fin-land-stats mp-sber">
          {sber.map((s, i) => (
            <div className="fin-land-stat" key={i}>
              <div className="fin-land-stat-v">{s.v}</div>
              <div className="fin-land-stat-l">{s.l} <SrcRef k={s.src}/></div>
              <div className="fin-land-stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>
        <div className="fin-table-wrap" style={{marginTop:24}}>
          <table className="fin-table fin-table-dark fin-table-compact mp-compare">
            <thead>
              <tr><th></th><th>Горный Алтай сегодня · Манжерок, Чемал, Шерегеш</th><th className="hl-th">Чарыш сегодня</th></tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td className="fin-table-loc">{r.k}</td>
                  <td>{r.a}</td>
                  <td className="hl-td">{r.b} <SrcRef k={r.src}/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="fin-photos">
          <div className="fin-photo" style={{backgroundImage:"url('assets/photo/web/altai-manzherok.jpg')"}}><div className="fin-photo-cap">Манжерок · курорт Сбера</div></div>
          <div className="fin-photo" style={{backgroundImage:"url('assets/photo/web/altai-sheregesh.jpg')"}}><div className="fin-photo-cap">Шерегеш · 95 гостиниц</div></div>
          <div className="fin-photo" style={{backgroundImage:"url('assets/photo/web/river-summer.jpg')"}}><div className="fin-photo-cap">Чарыш · тупиковая долина</div></div>
        </div>
        <SrcList keys={['iz','cian','erz','rbc','tolkRA','gov','rst','ator','pdf']}/>
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
    { tag: 'СПА и оздоровление', img: 'assets/photo/fin/spa-stone.jpg', d: 'Крытый бассейн, бани, массаж, лекарственные чаи, терренкуры' },
    { tag: 'Живая еда', img: 'assets/photo/food-cauliflower.jpg', d: 'Ресторан авторской кухни, продукты «за забором», фермерская ярмарка' },
    { tag: 'Свадьбы и юбилеи', img: 'assets/photo/web/valley-pavilion.jpg', d: 'Церемония у реки, банкет на 180, размещение гостей в гостевых домах' },
    { tag: 'MICE и ретриты', img: 'assets/photo/web/people-rafting-group.jpg', d: 'Ивент-холл на 200, стратсессии, сплав, баня. Продажи групп — с 2027' },
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
              <div className="pc-activity-photo" style={{backgroundImage:`url('${c.img}')`}}>
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
    ['Горизонт модели', 'продажа актива через 10 лет по рыночной цене: IRR 25%, прирост стоимости 160%'],
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
            <img src="assets/photo/masterplan-render-2026.jpg" alt="Рендер курорта — во что входит акционер"/>
            <figcaption className="pc-mp-render-cap">Во что входит акционер: вся первая очередь на 17,2 га</figcaption>
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
    { v: '55', u: '%', l: 'загрузка (OCC)', sub: 'Санатории Белокурихи: 68% в 2024, летом 2025 — свыше 100%', src: 'pdf,belo' },
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
        <SrcList keys={['rst','belo','pdf']}/>
      </div>
    </section>
  );
}
window.MpModel = MpModel;

// ───────────────────────── 11 · Риски и их хеджирование ─────────────────────────
function MpRisks({ num = '11' } = {}) {
  const risks = [
    { r: 'Разрыв в финансировании', h: 'Две очереди: вторая строится на выручке первой. 20% выручки от гостевых домов и подряда — в общую инфраструктуру.' },
    { r: 'Спрос до открытия', h: 'Пакеты для групп — MICE, свадьбы, ретриты — продаём с 2027 года: выручка формируется до запуска.' },
    { r: 'Мотивация команды', h: 'Все члены команды сами инвестируют в проект. Заказчик и оператор — одно лицо.' },
    { r: 'Юридический риск', h: '72 га в собственности с необходимым ВРИ. Полный пакет документов — по запросу.' },
    { r: 'Выход', h: 'Дивиденды и выкуп фиксируются в договоре при входе, а не обещаются на словах. Вилла — продаётся как любая недвижимость.' },
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
