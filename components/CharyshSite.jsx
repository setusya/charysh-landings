// Charysh — публичный сайт проекта (деревенский курорт в предгорьях Алтая).
// Построен на той же дизайн-системе (tokens.css + site.css + privatecamps.css),
// новые секции стилизованы в charysh.css. Нумерация крошек локальна для страницы.

// ───────────────────────── 00 · Header ─────────────────────────
function CSHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { id: 'location',  label: 'Локация' },
    { id: 'scenario',  label: 'Проект' },
    { id: 'audience',  label: 'Аудитория' },
    { id: 'economics', label: 'Экономика' },
    { id: 'invest',    label: 'Инвесторам' },
    { id: 'contacts',  label: 'Контакты' },
  ];
  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} data-screen-label="Header">
      <a href="#top" className="brand" aria-label="Деревенский курорт Чарыш">
        <span className="brand-mark">Ч</span>
        <span className="brand-word">деревенский&nbsp;курорт&nbsp;чарыш</span>
      </a>
      <nav className="site-nav">
        {links.map(l => (
          <a key={l.id} href={`#${l.id}`} className="nav-link">{l.label}</a>
        ))}
      </nav>
      <a href="#contacts" className="btn btn-primary header-cta">
        Контакты <span className="arrow">→</span>
      </a>
    </header>
  );
}
window.CSHeader = CSHeader;

// ───────────────────────── 01 · Hero (Слайд 1) ─────────────────────────
function CSHero() {
  return (
    <section className="hero hero-A" id="top" data-screen-label="01 Hero">
      <div className="hero-photo" style={{ backgroundImage: "url('assets/photo/charysh-summer-panorama.jpg')" }} />
      <video
        className="hero-video"
        autoPlay muted loop playsInline preload="auto"
        poster="assets/photo/charysh-summer-panorama.jpg">
        <source src="assets/video/charysh-from-mountain.mp4" type="video/mp4" />
      </video>
      <div className="hero-photo-overlay" />
      <div className="hero-frame">
        <div className="hero-top">
          <div className="crumb" style={{ color: '#fff' }}>
            <span className="num">01</span><span className="sep">|</span>
            Деревенский&nbsp;курорт<span className="sep">|</span>Алтайский&nbsp;край
          </div>
          <div className="hero-meta">с. Чарышское · река Чарыш</div>
        </div>
        <div className="hero-body">
          <h1 className="display h-display-xl hero-h1">
            Чарыш — деревенский<br/>курорт в&nbsp;предгорьях<br/>Алтая
          </h1>
          <div className="hero-sub">
            Инвестиционный проект, закрывающий спрос на&nbsp;<strong>качественный и&nbsp;доступный туризм</strong> в&nbsp;регионе и&nbsp;создающий работу для&nbsp;<strong>130&nbsp;жителей</strong> села Чарышское.
          </div>
        </div>
        <div className="hero-bottom">
          <div className="hero-ctas">
            <a href="#location" className="btn btn-primary">
              Смотреть проект <span className="arrow">→</span>
            </a>
            <a href="#contacts" className="btn btn-light">
              Связаться <span className="arrow">→</span>
            </a>
          </div>
          <div className="hero-tagline">ЧАРЫШ ЖДЁТ СВОИХ</div>
        </div>
      </div>
    </section>
  );
}
window.CSHero = CSHero;

// ───────────────────────── Карта региона (SVG) ─────────────────────────
function CSMap() {
  const cities = [
    { name: 'Омск',        x: 110, y: 188, lx: 110, ly: 168, anchor: 'middle' },
    { name: 'Новосибирск', x: 398, y: 120, lx: 398, ly: 100, anchor: 'middle' },
    { name: 'Кемерово',    x: 648, y: 138, lx: 660, ly: 134, anchor: 'start'  },
    { name: 'Новокузнецк', x: 690, y: 280, lx: 702, ly: 285, anchor: 'start'  },
  ];
  const barnaul = { x: 442, y: 330 };
  const kurort  = { x: 372, y: 452 };
  return (
    <figure className="cs-map-wrap" aria-label="Карта: курорт Чарыш и города-доноры Сибири">
      <svg viewBox="0 0 840 520" role="img"
           style={{ fontFamily: 'var(--font-sans)', width: '100%', height: 'auto', display: 'block' }}>
        <defs>
          <linearGradient id="cs-foothills" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#b48a3c" stopOpacity="0.20"/>
            <stop offset="1" stopColor="#b48a3c" stopOpacity="0.04"/>
          </linearGradient>
        </defs>

        {/* предгорья Алтая за маркером курорта */}
        <path d="M150 500 L250 430 L300 472 L372 405 L452 470 L520 438 L600 500 Z"
              fill="url(#cs-foothills)" stroke="#b48a3c" strokeOpacity="0.35" strokeWidth="1"/>

        {/* река Чарыш */}
        <path d="M250 500 C320 470 350 480 372 452 C400 418 470 432 560 400"
              fill="none" stroke="#3b6ea5" strokeOpacity="0.45" strokeWidth="2.5"/>

        {/* маршруты городов → курорт (тонкий пунктир) */}
        {cities.map(c => (
          <line key={c.name} x1={c.x} y1={c.y} x2={kurort.x} y2={kurort.y}
                stroke="#1a1a1a" strokeOpacity="0.22" strokeWidth="1" strokeDasharray="2 5"/>
        ))}

        {/* Барнаул → курорт — главный маршрут (аэропорт, 4 часа) */}
        <line x1={barnaul.x} y1={barnaul.y} x2={kurort.x} y2={kurort.y}
              stroke="#87000d" strokeWidth="2.6"/>
        <g transform="translate(385 398) rotate(-12)">
          <rect x="-58" y="-14" width="116" height="26" fill="#87000d"/>
          <text x="0" y="4" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">≈ 4 часа</text>
        </g>

        {/* города-доноры */}
        {cities.map(c => (
          <g key={c.name}>
            <circle cx={c.x} cy={c.y} r="5" fill="#1a1a1a"/>
            <text x={c.lx} y={c.ly} textAnchor={c.anchor} fill="#1a1a1a" fontSize="16" fontWeight="600">{c.name}</text>
          </g>
        ))}

        {/* Барнаул — международный аэропорт */}
        <g>
          <circle cx={barnaul.x} cy={barnaul.y} r="7" fill="#1a1a1a"/>
          <g transform={`translate(${barnaul.x - 7} ${barnaul.y - 30})`} fill="#87000d">
            <path d="M14 4 L8 9 L3 8 L0 11 L5 14 L3 20 L6 20 L10 15 L16 18 L14 22 L17 22 L20 16 L26 14 C28 13 28 10 26 10 L18 9 L16 3 C15 1 14 2 14 4 Z"/>
          </g>
          <text x={barnaul.x + 14} y={barnaul.y + 5} textAnchor="start" fill="#1a1a1a" fontSize="16" fontWeight="700">Барнаул</text>
          <text x={barnaul.x + 14} y={barnaul.y + 23} textAnchor="start" fill="#6b6b6b" fontSize="12.5">междунар. аэропорт</text>
        </g>

        {/* Курорт Чарыш */}
        <g>
          <circle cx={kurort.x} cy={kurort.y} r="11" fill="#87000d"/>
          <circle cx={kurort.x} cy={kurort.y} r="4" fill="#fff"/>
          <text x={kurort.x} y={kurort.y + 34} textAnchor="middle" fill="#87000d" fontSize="18" fontWeight="700">Чарыш · курорт</text>
          <text x={kurort.x} y={kurort.y + 54} textAnchor="middle" fill="#6b6b6b" fontSize="12.5">с. Чарышское · 62 га в собственности</text>
        </g>

        <text x="800" y="40" textAnchor="end" fill="#6b6b6b" fontSize="13" letterSpacing="0.04em">АЛТАЙСКИЙ КРАЙ · СИБИРЬ</text>
      </svg>
      <figcaption className="cs-map-cap">
        Города-доноры автотуристов и&nbsp;ближайший международный аэропорт. Гости приезжают на&nbsp;автомобиле; от&nbsp;Барнаула&nbsp;— около&nbsp;4&nbsp;часов.
      </figcaption>
    </figure>
  );
}
window.CSMap = CSMap;

// ───────────────────────── 01.5 · Location + инфраструктура (Слайд 2) ─────────────────────────
function CSLocation() {
  const infra = [
    { v: '3 км',        l: 'Дорога',            sub: 'проложена и благоустроена' },
    { v: '0,5 МВт',     l: 'Электроподстанция', sub: 'с возможностью увеличения до 3 МВт' },
    { v: '1000 Гб/с',   l: 'Оптоволокно',       sub: 'высокоскоростной интернет' },
    { v: '100 т/сут',   l: 'Водоснабжение',     sub: 'скважина + аварийный вариант' },
    { v: '✓',           l: 'Водоотвод',         sub: 'подготовлен' },
    { v: '2,65 км',     l: 'Ограждение',        sub: 'территория обнесена по периметру' },
  ];
  return (
    <section className="sec-pad" id="location" data-screen-label="02 Location">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">02</span><span className="sep">|</span>Локация</div>
          <h2 className="display h-display-l">
            <em className="redword">62 гектара</em> в&nbsp;собственности<br/>
            на&nbsp;берегу реки Чарыш.
          </h2>
        </div>
        <p className="lead" style={{ opacity: .82, maxWidth: '64ch', marginBottom: 40 }}>
          Участок у&nbsp;с.&nbsp;Чарышское Алтайского края, на&nbsp;берегу реки Чарыш, в&nbsp;4&nbsp;часах езды от&nbsp;международного аэропорта Барнаул.
        </p>

        <CSMap />

        <div className="cs-infra-head">
          <div className="cs-infra-tag">1-й этап реализован</div>
          <h3 className="cs-infra-h">Инфраструктура уже создана</h3>
        </div>
        <div className="cs-infra-grid">
          {infra.map((it, i) => (
            <div className="cs-infra-cell" key={i}>
              <div className="cs-infra-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="cs-infra-v">{it.v}</div>
              <div className="cs-infra-l">{it.l}</div>
              <div className="cs-infra-sub">{it.sub}</div>
            </div>
          ))}
        </div>
        <div className="cs-infra-foot">
          Разработана концепция туристско-рекреационного комплекса с&nbsp;различными сценариями развития — в&nbsp;том числе создание <strong>горнолыжных трасс</strong>.
        </div>
        <div className="cs-render-row">
          <figure className="cs-render-fig">
            <img src="assets/photo/charysh-location-panorama.jpg" alt="Панорама участка — долина и река Чарыш" loading="lazy" />
            <figcaption className="caption">Панорама участка — долина и&nbsp;излучина реки Чарыш</figcaption>
          </figure>
          <figure className="cs-render-fig">
            <img src="assets/photo/elder-with-stela.jpg" alt="Царские курганы Сентелека — русский Стоунхендж" loading="lazy" />
            <figcaption className="caption">Царские курганы Сентелека — «русский Стоунхендж» рядом с&nbsp;локацией</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
window.CSLocation = CSLocation;

// ───────────────────────── 02 · Основной сценарий (Слайд 3) ─────────────────────────
function CSScenario() {
  const specs = [
    { v: '197',  u: 'мест', l: 'Размещение', sub: 'коттеджи, глэмпинг, апартаменты и отель — на 500+ гостей' },
    { v: '150',  u: 'авто', l: 'Кемпинг',    sub: 'оборудованная стоянка для автопутешественников' },
    { v: '500',  u: 'чел.', l: 'Зал мероприятий и банкетов', sub: 'конференции, свадьбы, корпоративные события' },
    { v: '200',  u: 'мест', l: 'Ресторанный комплекс', sub: 'местная кухня и продукты' },
    { v: '60',   u: 'клиентов', l: 'Оздоровительный, СПА и банный комплекс', sub: 'wellness-якорь круглый год' },
    { v: 'ЗОЖ',  u: '',     l: 'Программы здорового образа жизни', sub: 'и зоны отдыха и развлечений' },
  ];
  return (
    <section className="sec-pad sec-warm" id="scenario" data-screen-label="03 Scenario">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">03</span><span className="sep">|</span>Основной&nbsp;сценарий</div>
          <h2 className="display h-display-l">
            Туристско-рекреационный комплекс<br/>
            стандарта <em className="redword">4&nbsp;звезды</em>.
          </h2>
        </div>
        <p className="lead" style={{ opacity: .82, maxWidth: '64ch', marginBottom: 48 }}>
          Круглогодичный «Деревенский курорт Чарыш»: размещение, событийная и&nbsp;ресторанная инфраструктура, отдых и&nbsp;оздоровление в&nbsp;одной точке.
        </p>
        <div className="cs-spec-grid">
          {specs.map((s, i) => (
            <div className="cs-spec-cell" key={i}>
              <div className="cs-spec-v">{s.v}{s.u && <span className="cs-spec-u">{s.u}</span>}</div>
              <div className="cs-spec-l">{s.l}</div>
              <div className="cs-spec-sub">{s.sub}</div>
            </div>
          ))}
        </div>
        <div className="cs-render-row">
          <figure className="cs-render-fig">
            <img src="assets/photo/render-coliving.jpg" alt="Архитектурный рендер — общественный центр комплекса" loading="lazy" />
            <figcaption className="caption">Концепт-рендер · общественный центр</figcaption>
          </figure>
          <figure className="cs-render-fig">
            <img src="assets/photo/render-rental.png" alt="Архитектурный рендер — сервисный корпус с прокатом" loading="lazy" />
            <figcaption className="caption">Концепт-рендер · сервис и&nbsp;прокат</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
window.CSScenario = CSScenario;

// ───────────────────────── 03 · Целевая аудитория (Слайд 4) ─────────────────────────
function CSAudience() {
  const cities = [
    { city: 'Новосибирск',            pct: 26 },
    { city: 'Барнаул',                pct: 16 },
    { city: 'Кемерово и Новокузнецк', pct: 10 },
    { city: 'Омск',                   pct: 6 },
    { city: 'Другие регионы',         pct: 42 },
  ];
  return (
    <section className="sec-pad" id="audience" data-screen-label="04 Audience">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">04</span><span className="sep">|</span>Целевая&nbsp;аудитория</div>
          <h2 className="display h-display-l">
            Семьи на&nbsp;авто из&nbsp;городов Сибири<br/>
            с&nbsp;доходом <em className="redword">от&nbsp;200&nbsp;000&nbsp;₽</em> на&nbsp;семью.
          </h2>
        </div>
        <figure className="cs-aud-photo">
          <img src="assets/photo/dance-ribbons.jpg" alt="Событийная программа курорта — фестиваль" loading="lazy" />
          <figcaption className="caption">Событийный туризм: свадьбы, юбилеи, фестивали и&nbsp;MICE-группы.</figcaption>
        </figure>
        <div className="cs-aud-grid">
          <div className="cs-aud-bars">
            <div className="cs-aud-bars-h">География спроса</div>
            {cities.map((c, i) => (
              <div className="cs-aud-row" key={i}>
                <div className="cs-aud-city">{c.city}</div>
                <div className="cs-aud-track">
                  <div className="cs-aud-fill" style={{ width: `${c.pct}%` }} />
                </div>
                <div className="cs-aud-pct">{c.pct}%</div>
              </div>
            ))}
            <div className="cs-aud-note">Семьи, предпочитающие путешествие на&nbsp;автотранспорте.</div>
          </div>
          <div className="cs-aud-side">
            <div className="cs-aud-stat">
              <div className="cs-aud-stat-v">~45 000</div>
              <div className="cs-aud-stat-l">автопутешественников ежегодно отдыхают в&nbsp;зоне локации</div>
              <div className="cs-aud-stat-sub">на&nbsp;«советских» турбазах — современной гостиничной инфраструктуры нет (данные районной администрации)</div>
            </div>
            <div className="cs-aud-groups">
              <div className="cs-aud-groups-h">Группы</div>
              <ul className="cs-aud-list">
                <li>MICE — деловой и&nbsp;корпоративный туризм</li>
                <li>Свадьбы, юбилеи и&nbsp;частные события</li>
              </ul>
              <div className="cs-aud-groups-foot">
                У&nbsp;УК&nbsp;«Чарыш&nbsp;Холдинг» есть компетенции по&nbsp;работе с&nbsp;корпоративными и&nbsp;частными группами.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.CSAudience = CSAudience;

// ───────────────────────── 04 · Экономика (Слайд 5) ─────────────────────────
function CSEconomics() {
  const stats = [
    { n: 'от 15 000', u: '₽', l: 'ADR — за юнит в сутки', sub: 'средняя цена размещения' },
    { n: '~6 000',    u: '₽', l: 'траты гостя в день',   sub: 'ресторан, программы ЗОЖ, развлечения и отдых' },
    { n: '45 → 75',   u: '%', l: 'загрузка', sub: 'рост с 1-го по 4-й год деятельности' },
    { n: '4,5',       u: 'дня', l: 'средний срок пребывания', sub: 'круглогодичная модель' },
  ];
  return (
    <section className="sec-pad sec-dark" id="economics" data-screen-label="05 Economics">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">05</span><span className="sep">|</span>Экономика</div>
          <h2 className="display h-display-l">
            Экономика круглогодичного<br/>
            <em className="redword-light">деревенского курорта</em>.
          </h2>
        </div>
        <div className="climate-grid">
          {stats.map((s, i) => (
            <div className="climate-cell" key={i}>
              <div className="climate-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="climate-value">{s.n}<span className="climate-unit">{s.u}</span></div>
              <div className="climate-label">{s.l}</div>
              <div className="climate-sub">{s.sub}</div>
            </div>
          ))}
        </div>
        <p className="cs-econ-src">
          Цифры основаны на&nbsp;анализе подобных проектов (Каталог туристических инвестиционных проектов регионов России) и&nbsp;открытой статистики.
        </p>
      </div>
    </section>
  );
}
window.CSEconomics = CSEconomics;

// ───────────────────────── 05 · Предложения для инвесторов (Слайд 6) ─────────────────────────
function CSInvest() {
  const offers = [
    {
      name: 'Отель 4★',
      spec: '40 номеров · ресторан на 200 мест · 2000 м²',
      price: '470 млн ₽',
      irr: '18%', pb: '78 мес.',
      own: 'собственность инвестора',
    },
    {
      name: 'Глэмпинг',
      spec: '23 юнита по 32 м² · управляющий корпус 150 м²',
      price: '8 млн ₽ / юнит',
      irr: '24%', pb: '60 мес.',
      own: 'дом — собственность инвестора',
    },
    {
      name: 'Коттеджи',
      spec: '50 м² (уч. 600) · 75 м² (уч. 700) · 100 м² (уч. 800)',
      price: '15 / 22 / 28 млн ₽',
      irr: '20%', pb: '65 мес.',
      own: 'под ключ · собственность инвестора',
    },
    {
      name: 'Апартаменты',
      spec: '50 м²',
      price: '12 млн ₽',
      irr: '22%', pb: '70 мес.',
      own: 'собственность инвестора',
    },
    {
      name: 'Оздоровительный комплекс и СПА',
      spec: '500 м²',
      price: '125 млн ₽',
      irr: '24%', pb: '60 мес.',
      own: 'собственность инвестора',
    },
  ];
  return (
    <section className="sec-pad" id="invest" data-screen-label="06 Invest">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">06</span><span className="sep">|</span>Инвесторам</div>
          <h2 className="display h-display-l">
            Пять форм участия —<br/>
            <em className="redword">собственность и&nbsp;доходность</em>.
          </h2>
        </div>
        <div className="cs-invest-grid">
          {offers.map((o, i) => (
            <article className="cs-invest-card" key={i}>
              <div className="cs-invest-num">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="cs-invest-name">{o.name}</h3>
              <div className="cs-invest-spec">{o.spec}</div>
              <div className="cs-invest-price">{o.price}</div>
              <div className="cs-invest-metrics">
                <div className="cs-invest-metric">
                  <span className="cs-invest-metric-l">IRR</span>
                  <span className="cs-invest-metric-v">{o.irr}</span>
                </div>
                <div className="cs-invest-metric">
                  <span className="cs-invest-metric-l">РВР</span>
                  <span className="cs-invest-metric-v">{o.pb}</span>
                </div>
              </div>
              <div className="cs-invest-own">{o.own}</div>
            </article>
          ))}
        </div>
        <div className="cs-invest-foot">
          <div className="cs-invest-foot-badge">!</div>
          <div>
            <strong>Инвестирование осуществляется поэтапно.</strong> Управление инвестициями обеспечивает УК&nbsp;«Чарыш&nbsp;Холдинг».
          </div>
        </div>

        <CSTeam />
      </div>
    </section>
  );
}
window.CSInvest = CSInvest;

// ───────────────────────── 06 · УК «Чарыш Холдинг» + команда (Слайд 7) ─────────────────────────
function CSTeam() {
  const stats = [
    { v: '280+', u: 'млн ₽', l: 'собственных средств вложено' },
    { v: '1', u: 'команда', l: 'строит и управляет — лучшая экономика комплекса' },
    { v: '✓', u: '', l: 'приобретена техника' },
    { v: '✓', u: '', l: 'отработана каркасно-соломенная технология' },
  ];
  const team = [
    { name: 'СЕО',               role: 'Генеральный директор',     img: null },
    { name: 'Главный инженер',   role: 'Строительство и инженерия', img: null },
    { name: 'Архитектор',        role: 'Проектирование комплекса',  img: null },
    { name: 'Светлана Антонова', role: 'Со-владелец · маркетинг, подбор топ-кадров', img: 'assets/team/antonova.jpg' },
    { name: 'Вячеслав Немцов',   role: 'Со-владелец · финансы, юридическое сопровождение', img: 'assets/team/nemtsov.jpg' },
    { name: 'Андрей Маслак',     role: 'Бизнес-сопровождение · гостиничный бизнес и работа с группами', img: null },
    { name: 'Тамара Маркиш',     role: 'Консультант · организация ЗОЖ-программ', img: 'assets/team/markish.jpg' },
  ];
  return (
    <div className="cs-uk-block" id="team">
      <div className="cs-uk-head">УК&nbsp;«Чарыш&nbsp;Холдинг» — кто строит и&nbsp;управляет</div>
      <p className="lead" style={{ opacity: .82, maxWidth: '62ch', marginBottom: 32 }}>
        Строительство и&nbsp;эксплуатацию ведёт <strong>одна команда</strong> — это обеспечивает лучшую экономику комплекса.
      </p>
        <div className="cs-uk-stats">
          {stats.map((s, i) => (
            <div className="cs-uk-stat" key={i}>
              <div className="cs-uk-stat-v">{s.v}{s.u && <span className="cs-uk-stat-u">{s.u}</span>}</div>
              <div className="cs-uk-stat-l">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="cs-team-head">Команда</div>
        <div className="team-grid cs-team-grid">
          {team.map((m) => (
            <div className="team-cell" key={m.name + m.role}>
              {m.img
                ? <div className="team-ph" style={{ backgroundImage: `url('${m.img}')` }} />
                : <div className="team-ph cs-team-ph-empty">{m.name.slice(0, 1)}</div>}
              <div className="team-role">{m.role}</div>
              <div className="team-name">{m.name}</div>
            </div>
          ))}
        </div>
    </div>
  );
}
window.CSTeam = CSTeam;

// ───────────────────────── 07 · Контакты ─────────────────────────
function CSContacts() {
  return (
    <section className="sec-pad" id="contacts" data-screen-label="07 Contacts">
      <div className="container">
        <div className="cs-contacts">
          <div className="crumb"><span className="num">07</span><span className="sep">|</span>Контакты</div>
          <h2 className="display h-display-l">
            Расскажем о&nbsp;проекте<br/>
            и&nbsp;покажем <em className="redword">расчёты доходности</em>.
          </h2>
          <p className="cs-contacts-lead">
            Подписывайтесь на&nbsp;наш Telegram-канал — там&nbsp;ход стройки, локация и&nbsp;детали проекта. Для&nbsp;инвесторов&nbsp;— персональная презентация.
          </p>
          <a href="https://t.me/kurort_charysh" className="btn btn-primary cs-tg-btn" target="_blank" rel="noopener noreferrer">
            Telegram-канал · @kurort_charysh <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
window.CSContacts = CSContacts;

// ───────────────────────── 08 · Footer ─────────────────────────
function CSFooter() {
  return (
    <footer className="site-footer" data-screen-label="Footer">
      <div className="container footer-row">
        <div className="footer-brand">чарыш</div>
        <div className="footer-cols">
          <div>
            <div className="fc-h">Проект</div>
            <a href="#location">Локация</a>
            <a href="#scenario">Основной сценарий</a>
            <a href="#audience">Целевая аудитория</a>
          </div>
          <div>
            <div className="fc-h">Инвесторам</div>
            <a href="#economics">Экономика</a>
            <a href="#invest">Предложения</a>
            <a href="#invest">УК «Чарыш Холдинг»</a>
          </div>
          <div>
            <div className="fc-h">Связь</div>
            <a href="https://t.me/kurort_charysh" target="_blank" rel="noopener noreferrer">Telegram · @kurort_charysh</a>
            <a href="#contacts">Контакты</a>
          </div>
        </div>
      </div>
      <div className="footer-line">
        <span>© 2026</span>
        <span className="sep">|</span>
        <span>Деревенский курорт Чарыш</span>
        <span className="sep">|</span>
        <span>Алтайский край · с. Чарышское</span>
      </div>
    </footer>
  );
}
window.CSFooter = CSFooter;
