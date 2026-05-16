// Charysh — Private Camp 2 speaker landing — bespoke sections
// All sections follow the design system tokens (tokens.css + site.css).
// Numbering of crumbs is local to this page.

// ───────────────────────── 00 · Header (custom nav for this page) ─────────────────────────
function PCHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { id: 'why',          label: 'Чарыш' },
    { id: 'masterplan',   label: 'Проект' },
    { id: 'forms-fork',   label: 'Три формы' },
    { id: 'equity',       label: 'Акции АО' },
    { id: 'bonus',        label: 'Эксклюзив' },
  ];
  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} data-screen-label="PC Header">
      <a href="#top" className="brand" aria-label="Деревенский курорт Чарыш">
        <span className="brand-mark">Ч</span>
        <span className="brand-word">деревенский&nbsp;курорт&nbsp;чарыш</span>
      </a>
      <nav className="site-nav">
        {links.map(l => (
          <a key={l.id} href={`#${l.id}`} className="nav-link">{l.label}</a>
        ))}
      </nav>
      <a href="#form" className="btn btn-primary header-cta">
        Презентация <span className="arrow">→</span>
      </a>
    </header>
  );
}
window.PCHeader = PCHeader;

// ───────────────────────── 01 · Hero (custom for Private Camp) ─────────────────────────
function PCHero({ heroPhoto = 'assets/photo/upload-00105.jpg' }) {
  return (
    <section className="hero hero-A" id="top" data-screen-label="01 PC Hero">
      <div className="hero-photo" style={{ backgroundImage: `url('${heroPhoto}')` }} />
      <div className="hero-photo-overlay" />
      <div className="hero-frame">
        <div className="hero-top">
          <div className="crumb" style={{ color: '#fff' }}>
            <span className="num">01</span><span className="sep">|</span>
            Private Camp 2<span className="sep">|</span>Красная Поляна
          </div>
          <div className="hero-meta">Чарышские Усадьбы · спикер-страница</div>
        </div>
        <div className="hero-body">
          <h1 className="display h-display-xl hero-h1">
            Алтай<br/>не&nbsp;для&nbsp;всех
          </h1>
          <div className="hero-sub">
            <strong>Заповедная новая локация в&nbsp;Алтайском крае.</strong> Тупиковая долина реки Чарыш, 72&nbsp;га в&nbsp;собственности. Здесь — глубина, цифры и&nbsp;документы. Вы&nbsp;только что слушали выступление.
          </div>
        </div>
        <div className="hero-bottom">
          <div className="hero-ctas">
            <a href="#form" className="btn btn-primary">
              Презентация для&nbsp;бизнес-кемпа <span className="arrow">→</span>
            </a>
            <a href="#bonus" className="btn btn-light">
              Эксклюзив для участников <span className="arrow">→</span>
            </a>
          </div>
          <div className="hero-tagline">ЧАРЫШ&nbsp;ЖДЁТ&nbsp;СВОИХ</div>
        </div>
      </div>
    </section>
  );
}
window.PCHero = PCHero;

// ───────────────────────── 02 · Recovery курорт — full-bleed positioning ─────────────────────────
function PCScale() {
  return (
    <section className="pc-scale" id="scale" data-screen-label="02 Recovery курорт · 72 ГА">
      <div className="pc-scale-photo" style={{ backgroundImage: "url('assets/photo/nature-river-rocks.jpg')" }}/>
      <div className="pc-scale-overlay"/>
      <div className="container pc-scale-frame">
        <h2 className="display h-display-l pc-scale-h">
          Новый <em className="redword-light">recovery&nbsp;курорт</em><br/>
          для жизни и&nbsp;отдыха<br/>
          на&nbsp;72&nbsp;гектарах<br/>
          в&nbsp;Чарышском районе Алтайского края.
        </h2>
      </div>
    </section>
  );
}
window.PCScale = PCScale;

// ───────────────────────── 02 · Why Charysh — 4 facts that can't be copied ─────────────
function PCWhy() {
  const facts = [
    { n: '441', u: 'м', l: 'над уровнем моря', d: 'Клималечебная горная высота. Не равнина, не высокогорье — оптимум для сердца и сна.' },
    { n: '120', u: 'ккал/см²', l: 'солнечной радиации', d: 'Тот же уровень, что на Южном берегу Крыма. 250 солнечных дней в году.' },
    { n: '0', u: '', l: 'случайных людей', d: 'Тупиковая долина. Автобус не ходит. Доезжают только те, кто знает, зачем едет.' },
    { n: '10 000', u: 'лет', l: 'непрерывной истории', d: 'Скифы, казаки, староверы — живые хранители традиций. Тигирецкий заповедник рядом.' },
  ];
  return (
    <section className="sec-pad" id="why" data-screen-label="02 Why Charysh">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">02</span><span className="sep">|</span>Почему&nbsp;Чарыш</div>
          <h2 className="display h-display-l">
            Место, которое <em className="redword">нельзя скопировать</em>.<br/>
            Четыре факта.
          </h2>
        </div>
        <div className="climate-grid">
          {facts.map((f, i) => (
            <div className="climate-cell" key={i}>
              <div className="climate-num">0{i+1}</div>
              <div className="climate-value">
                {f.n}<span className="climate-unit">{f.u}</span>
              </div>
              <div className="climate-label">{f.l}</div>
              <div className="climate-sub">{f.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.PCWhy = PCWhy;

// ───────────────────────── 02 · SPEAKER — Светлана Антонова ─────────────────────────
function PCSpeaker() {
  return (
    <section className="sec-pad" id="speaker" data-screen-label="02 Speaker — Антонова">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">03</span><span className="sep">|</span>Спикер</div>
          <h2 className="display h-display-l">
            Сегодня проект представляет<br/>
            <em className="redword">Светлана Антонова.</em>
          </h2>
        </div>
        <div className="pc-speaker-grid">
          <figure className="pc-speaker-photo">
            <img src="assets/photo/svetlana-cowboy-hat.jpg" alt="Светлана Антонова — со-основатель Чарышских Усадеб"/>
            <figcaption className="pc-speaker-cap">Светлана Антонова</figcaption>
          </figure>
          <div className="pc-speaker-body">
            <div className="pc-speaker-tagline">Идеолог · со-основатель · инвестор курорта Чарыш</div>

            <div className="pc-speaker-block">
              <div className="pc-speaker-block-h">Образование</div>
              <ul className="pc-speaker-list">
                <li>Почвовед-эколог &mdash; МГУ им. М.&nbsp;В.&nbsp;Ломоносова</li>
                <li>Востоковед-экономист &mdash; МГУ</li>
                <li>Стратегический маркетолог &mdash; MBA</li>
              </ul>
            </div>

            <div className="pc-speaker-block">
              <div className="pc-speaker-block-h">Серийный предприниматель</div>
              <ul className="pc-speaker-list">
                <li>Основатель <strong>10+ успешных бизнесов и&nbsp;проектов</strong> в&nbsp;разных сферах — от&nbsp;производства до&nbsp;девелопмента.</li>
                <li><strong>2006</strong> &mdash; создала нишу и&nbsp;компанию по&nbsp;тёплым полам. Действующий бизнес уже&nbsp;20&nbsp;лет.</li>
                <li><strong>2020–2022</strong> &mdash; вместе с&nbsp;партнёрами построила бизнес с&nbsp;годовым оборотом <strong>4&nbsp;млрд&nbsp;₽</strong>.</li>
              </ul>
            </div>

            <div className="pc-speaker-tags">
              <div className="pc-speaker-tag-group">
                <div className="pc-speaker-tag-l">Сильные стороны</div>
                <div className="pc-speaker-tag-v">Создание продукта · маркетинг · партнёрство · энергия · чувство времени</div>
              </div>
              <div className="pc-speaker-tag-group">
                <div className="pc-speaker-tag-l">Семья</div>
                <div className="pc-speaker-tag-v">С мужем — 6 детей</div>
              </div>
              <div className="pc-speaker-tag-group">
                <div className="pc-speaker-tag-l">Хобби</div>
                <div className="pc-speaker-tag-v">Путешествия · духовные практики · природа</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.PCSpeaker = PCSpeaker;

// ───────────────────────── 02.3 · BIG ALTAI MARKET — определение + динамика 2010→2030 ─────────────────────────
function PCAltaiMarket() {
  // Bar chart: турпоток в Большой Алтай, млн чел./год — 2010-2030
  const chart = [
    { year: '2010', v: 2.0, label: '~2,0 млн', src: 'оценка' },
    { year: '2015', v: 3.0, label: '~3,0 млн', src: 'оценка' },
    { year: '2020', v: 4.0, label: '~4,0 млн', src: 'оценка' },
    { year: '2025', v: 5.2, label: '5,2 млн',  src: 'официально', highlight: true },
    { year: '2030', v: 7.3, label: '7,3 млн',  src: 'цель',       highlight: true, target: true },
  ];
  const maxV = 8.0;
  // Большие региональные проекты, которые гонят турпоток в Большой Алтай
  const flagships = [
    { name: 'Шерегеш',           sub: 'Горнолыжный курорт',    where: 'Кемеровская обл.',  fact: '>2 млн гостей/год' },
    { name: 'Сибирская монета',  sub: 'Игорная зона',          where: 'Алтайский край',    fact: '1 из 5 в России' },
    { name: 'Манжерок',          sub: 'Премиум курорт Сбера',  where: 'Республика Алтай',  fact: '~1,5 млн гостей/год' },
    { name: 'Белокуриха',        sub: 'Курорт федер. значения', where: 'Алтайский край',   fact: '~250 тыс гостей/год' },
    { name: 'Бирюзовая Катунь',  sub: 'Особая эконом. зона',   where: 'Алтайский край',    fact: 'Туристический кластер' },
    { name: 'Аэропорт Горно-Алтайск', sub: 'Малая авиация · реконструкция дорог', where: 'Республика Алтай', fact: 'Растущий хаб региона' },
    { name: 'Чарыш',             sub: 'Recovery курорт · 72 ГА', where: 'Алтайский край',  fact: 'Русская душа Горного Алтая' },
  ];
  return (
    <section className="sec-pad sec-dark pc-bigaltai" id="altai-market" data-screen-label="04 Big Altai context">
      {/* Декоративная подложка — Белуха, главный пик Алтая */}
      <div className="pc-bigaltai-bg" style={{backgroundImage:"url('assets/photo/altai-belukha.webp')"}}/>
      <div className="pc-bigaltai-bg-overlay"/>
      <div className="container pc-bigaltai-inner">
        <div className="comm-head">
          <div className="crumb"><span className="num">04</span><span className="sep">|</span>Большой&nbsp;Алтай</div>
          <h2 className="display h-display-l">
            <em className="redword-light">Большой Алтай</em> —<br/>
            самый растущий туррегион России.
          </h2>
        </div>

        <p className="pc-bigaltai-hero-note">
          Большой Алтай — это уже мегакурорты, миллионы гостей и&nbsp;бюджеты под&nbsp;триллион. <strong>Чарыш — русская душа Горного Алтая</strong> в&nbsp;часе от&nbsp;этих потоков.
        </p>

        {/* Что такое Большой Алтай — определение в 3 пунктах */}
        <div className="pc-bigaltai-def">
          <div className="pc-bigaltai-def-cell">
            <div className="pc-bigaltai-def-l">Что это</div>
            <div className="pc-bigaltai-def-v">Макротерритория</div>
            <div className="pc-bigaltai-def-d">Объединение трёх регионов в&nbsp;единый туристический бренд и&nbsp;план развития нацпроекта «Туризм и&nbsp;индустрия гостеприимства».</div>
          </div>
          <div className="pc-bigaltai-def-cell">
            <div className="pc-bigaltai-def-l">Кто входит</div>
            <div className="pc-bigaltai-def-v">3 региона</div>
            <div className="pc-bigaltai-def-d">Республика Алтай · Алтайский край · Кемеровская область (Кузбасс). Координированная стратегия с&nbsp;2021 года.</div>
          </div>
          <div className="pc-bigaltai-def-cell">
            <div className="pc-bigaltai-def-l">Где Чарыш</div>
            <div className="pc-bigaltai-def-v">Русское сердце</div>
            <div className="pc-bigaltai-def-d">Чарышский район&nbsp;— часть Алтайского края, прямо на&nbsp;границе с&nbsp;Республикой Алтай. Тупиковая долина, нетронутая часть.</div>
          </div>
        </div>

        {/* Большая шкала 2010→2030 */}
        <div className="pc-chart-wrap">
          <div className="pc-chart-h">Турпоток Большого Алтая, млн человек/год · 2010→2030</div>
          <div className="pc-chart">
            {chart.map((p, i) => (
              <div className={`pc-bar-col ${p.target ? 'pc-bar-col-target' : ''}`} key={i}>
                <div className="pc-bar-value">{p.label}</div>
                <div className={`pc-bar ${p.target ? 'pc-bar-target' : ''}`} style={{height: (p.v/maxV*100) + '%'}}/>
                <div className="pc-bar-year">
                  {p.year}
                  <span className="pc-bar-src">{p.src}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="pc-chart-src">2010–2020 — оценочные данные региональных управлений · 2025 — официальные итоги (Минэк РА + Управление АК) · 2030 — цель межрегиональной схемы «Большой Алтай»</div>
        </div>

        {/* 3 ключевые цифры — компактно */}
        <div className="pc-bigaltai-stats">
          <div className="pc-bigaltai-stat">
            <div className="pc-bigaltai-stat-v">×3,7</div>
            <div className="pc-bigaltai-stat-l">рост рынка за 20 лет</div>
            <div className="pc-bigaltai-stat-sub">с 2010 (2,0 млн) до 2030 (7,3 млн)</div>
          </div>
          <div className="pc-bigaltai-stat pc-bigaltai-stat-now">
            <div className="pc-bigaltai-stat-v">5,2 <span className="pc-bigaltai-stat-u">млн</span></div>
            <div className="pc-bigaltai-stat-l">туристов в 2025 году</div>
            <div className="pc-bigaltai-stat-sub">РА 2,8 (Минэк РА) + АК 2,4 (Управление АК)</div>
          </div>
          <div className="pc-bigaltai-stat pc-bigaltai-stat-target">
            <div className="pc-bigaltai-stat-v">7,3 <span className="pc-bigaltai-stat-u">млн</span></div>
            <div className="pc-bigaltai-stat-l">цель нацпроекта к 2030</div>
            <div className="pc-bigaltai-stat-sub">+40% за 5 лет · бюджетное финансирование инфраструктуры</div>
          </div>
        </div>

        {/* Отбивка — большие региональные проекты, которые гонят поток */}
        <div className="pc-bigaltai-flagships">
          <div className="pc-bigaltai-flagships-h">Большие проекты, которые гонят поток в&nbsp;регион</div>
          <div className="pc-bigaltai-flagships-grid">
            {flagships.map((f, i) => (
              <article className="pc-bigaltai-flagship" key={i}>
                <div className="pc-bigaltai-flagship-name">{f.name}</div>
                <div className="pc-bigaltai-flagship-sub">{f.sub}</div>
                <div className="pc-bigaltai-flagship-fact">{f.fact}</div>
                <div className="pc-bigaltai-flagship-where">{f.where}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.PCAltaiMarket = PCAltaiMarket;


// ───────────────────────── 02.4 · ALTAI VIABILITY — доказательство и 3 сценария оборота ─────────────────────────
function PCAltaiViability() {
  const scenarios = [
    {
      tag: 'Консервативный',
      sub: 'Тестовый нижний порог',
      adr: '15 000 ₽',
      load: '60%',
      mix: 'единый тариф для всего фонда',
      year: '~565 млн',
      cum: '~1,53 млрд',
      yearV: 565,
      tone: 'paper',
    },
    {
      tag: 'Базовый mix',
      sub: 'Реалистичный mid-market',
      adr: '~23 200 ₽',
      load: '60%',
      mix: 'взвешенно по типам: дом 1–3 спальни, коливинг, ретрит, апарт',
      year: '~874 млн',
      cum: '~2,36 млрд',
      yearV: 874,
      tone: 'warm',
    },
  ];
  const ramp = [0.30, 0.60, 0.80, 1.00];
  const years = ['2027', '2028', '2029', '2030'];
  return (
    <section className="sec-pad sec-dark" id="altai-viability" data-screen-label="02.4 Altai viability + scenarios">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">23</span><span className="sep">|</span>Доказательство · оборот</div>
          <h2 className="display h-display-l">
            Для реализации Чарышу необходимо привлечь<br/>
            <em className="redword-light">всего 0,36% турпотока Большого Алтая</em>.
          </h2>
        </div>
        <p className="lead" style={{opacity:.85, maxWidth:'66ch', marginBottom:48}}>
          При полной ёмкости 600&nbsp;мест и&nbsp;целевой 60% годовой загрузке нам нужно ~26&nbsp;тыс. гостей в&nbsp;год — это <strong>0,36%</strong> от&nbsp;цели Большого Алтая на&nbsp;2030 (7,3&nbsp;млн туристов). Ниже — расчёт реалистичности и&nbsp;три сценария оборота при&nbsp;разных ADR.
        </p>

        <div className="pc-reality-math">
          <div className="pc-reality-step">
            <div className="pc-reality-step-l">Шаг 01 · Рынок 2030</div>
            <div className="pc-reality-step-v">7,3 млн</div>
            <div className="pc-reality-step-d">Цель Большого Алтая по&nbsp;межрегиональной схеме нацпроекта «Туризм и&nbsp;индустрия гостеприимства».</div>
          </div>
          <div className="pc-reality-step">
            <div className="pc-reality-step-l">Шаг 02 · Номерной фонд</div>
            <div className="pc-reality-step-v">172 ключа</div>
            <div className="pc-reality-step-d">100 гостевых домов в&nbsp;ротации УК (из&nbsp;150) + 4 коливинга × 8 номеров (32) + 16 домиков ретрит-зоны + 24 апартамента.</div>
          </div>
          <div className="pc-reality-step">
            <div className="pc-reality-step-l">Шаг 03 · Загрузка</div>
            <div className="pc-reality-step-v">172 × 60%</div>
            <div className="pc-reality-step-d">172 номера × 60% годовой загрузки × 365 дней = 37&nbsp;668 номеро-ночей в&nbsp;год.</div>
          </div>
          <div className="pc-reality-step">
            <div className="pc-reality-step-l">Шаг 04 · Гостей в год</div>
            <div className="pc-reality-step-v">~26 300</div>
            <div className="pc-reality-step-d">~600 человеко-мест × 60% × 365 ÷ 5 ночей (средний визит на&nbsp;курортном Алтае) = уникальных гостей в&nbsp;год.</div>
          </div>
          <div className="pc-reality-step pc-reality-step-final">
            <div className="pc-reality-step-l">Итог · Доля рынка 2030</div>
            <div className="pc-reality-step-v">0,36%</div>
            <div className="pc-reality-step-d">26&nbsp;300 ÷ 7,3&nbsp;млн. Этой доли достаточно для&nbsp;60% годовой загрузки 172&nbsp;номеров.</div>
          </div>
        </div>

        {/* 3 сценария оборота */}
        <div className="pc-scenarios-head">
          <div className="pc-scenarios-eyebrow">Три сценария оборота · ramp-up 2027 → 2030</div>
          <h3 className="display h-display-m pc-scenarios-h">
            От <em className="redword-light">~1,5&nbsp;млрд&nbsp;₽</em> до <em className="redword-light">~3,6&nbsp;млрд&nbsp;₽</em><br/>
            кумулятивного оборота за&nbsp;4 года.
          </h3>
        </div>
        <div className="pc-scenarios-grid">
          {scenarios.map((s, i) => (
            <article className={`pc-scenario pc-scenario-tone-${s.tone}`} key={i}>
              <div className="pc-scenario-tag">{s.tag}</div>
              <div className="pc-scenario-sub">{s.sub}</div>
              <div className="pc-scenario-meta">
                <div><span className="pc-scenario-meta-l">ADR</span><span className="pc-scenario-meta-v">{s.adr}</span></div>
                <div><span className="pc-scenario-meta-l">Загрузка</span><span className="pc-scenario-meta-v">{s.load}</span></div>
              </div>
              <div className="pc-scenario-mix">{s.mix}</div>
              <div className="pc-scenario-ramp">
                {ramp.map((r, j) => (
                  <div className="pc-scenario-ramp-row" key={j}>
                    <span className="pc-scenario-ramp-y">{years[j]} · {Math.round(r*100)}%</span>
                    <span className="pc-scenario-ramp-v">~{Math.round(s.yearV*r)} млн</span>
                  </div>
                ))}
              </div>
              <div className="pc-scenario-totals">
                <div className="pc-scenario-target">
                  <span className="pc-scenario-target-l">2030 target / год</span>
                  <span className="pc-scenario-target-v">{s.year}</span>
                </div>
                <div className="pc-scenario-cum">
                  <span className="pc-scenario-cum-l">Σ 2027–2030</span>
                  <span className="pc-scenario-cum-v">{s.cum}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="pc-reality-foot" style={{marginTop:32}}>
          <strong>Базовый сценарий</strong> — взвешенный ADR по&nbsp;типам: гост. дом 1 спальня 18&nbsp;К&nbsp;₽, 2 спальни 28&nbsp;К&nbsp;₽, 3 спальни (флагман) 45&nbsp;К&nbsp;₽; коливинг 9&nbsp;К&nbsp;₽, домик ретрита 12&nbsp;К&nbsp;₽, апартамент с&nbsp;видом 32&nbsp;К&nbsp;₽. <strong>Чувствительность</strong>: при&nbsp;3&nbsp;ночах среднего визита требуется 0,60% рынка 2030, при&nbsp;7&nbsp;ночах — 0,26%. В&nbsp;любом сценарии — меньше&nbsp;1% официально подтверждённого рынка. <em>Источники: Минэкономразвития Республики Алтай · Управление Алтайского края по&nbsp;развитию туризма · Межрегиональная схема «Большой Алтай», 2025 · Нацпроект «Туризм и&nbsp;индустрия гостеприимства».</em>
        </p>

      </div>
    </section>
  );
}
window.PCAltaiViability = PCAltaiViability;

// ───────────────────────── 02.5 · Where is Charysh — geography section ─────────────────────────
function PCLocation() {
  const distances = [
    { city: 'Барнаул', t: '3,5 ч', sub: 'трансфер · ежедневные рейсы из Москвы 4 ч' },
    { city: 'Горно-Алтайск', t: '5 ч',  sub: 'ближайший региональный аэропорт' },
    { city: 'Новосибирск', t: '7 ч',  sub: 'крупнейший хаб Сибири' },
    { city: 'с. Чарышское', t: '3–5 км', sub: 'районный центр · вся инфраструктура' },
  ];
  return (
    <section id="location" data-screen-label="02.5 Where is Charysh">
      <div className="place-photo pc-location-photo" style={{ backgroundImage: "url('assets/photo/altai-pik-shangina.jpg')" }}>
        <div className="place-photo-overlay" />
        <div className="container place-photo-frame">
          <div className="crumb" style={{ color: '#fff' }}>
            <span className="num">05</span><span className="sep">|</span>География<span className="sep">|</span>Где&nbsp;это
          </div>
          <h2 className="display h-display-l place-photo-h">
            Россия · Алтайский край ·<br/>
            Чарышский район ·<br/>
            <em className="redword-light">с.&nbsp;Чарышское</em>.
          </h2>
          <div className="place-photo-cap">51°23′ с.ш. · 83°33′ в.д. · 441 м над уровнем моря</div>
        </div>
      </div>
      <div className="container">
        <div className="pc-location-grid">
          {distances.map((d, i) => (
            <div className="pc-location-cell" key={i}>
              <div className="pc-location-num">{String(i+1).padStart(2,'0')}</div>
              <div className="pc-location-city">{d.city}</div>
              <div className="pc-location-t">{d.t}</div>
              <div className="pc-location-sub">{d.sub}</div>
            </div>
          ))}
        </div>
        <div className="pc-location-narrative">
          <div className="pc-location-narrative-l">
            <div className="format-h">Тупиковая долина</div>
            <p className="house-essence" style={{maxWidth:'52ch', marginTop:8}}>
              Чарыш — река, долина и&nbsp;село на&nbsp;юге Алтайского края, у&nbsp;подножия Тигирецкого заповедника. Дальше дороги нет: автобус не&nbsp;ходит, случайные люди не&nbsp;доезжают. Доезжают только те, кто знает, зачем едет.
            </p>
          </div>
          <div className="pc-location-narrative-r">
            <div className="format-h">Не равнина · не высокогорье</div>
            <p className="house-essence" style={{maxWidth:'52ch', marginTop:8}}>
              441&nbsp;м&nbsp;над уровнем моря — оптимум для&nbsp;сердца и&nbsp;сна. Горный микроклимат: 250&nbsp;солнечных дней, 120&nbsp;ккал/см² солнечной радиации (как Южный берег Крыма), нет комаров и&nbsp;мошки.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
window.PCLocation = PCLocation;

// ───────────────────────── 03 · Master Plan ─────────────────────────
// ───────── Slide 1: 6 sectors of the master plan ─────────
function PCMasterPlan() {
  const sectors = [
    {
      n: '01', name: 'Чарышские усадьбы с богатым общественным центром',
      sub: 'Сердце посёлка · жизнь и быт',
      d: '150–200 гостевых домов на участках 6–7 соток + общественный центр (визит-центр, фермерское кафе, smart cafe, ярмарка, прокат, спорт, парковка).',
      status: 'Проектируется',
    },
    {
      n: '02', name: 'Ретрит-зона',
      sub: '«Резиденция Чарыш»',
      d: 'Ретрит-центр, 4 двухэтажных гостевых дома, 11 одиночных + 5 дуплексов в лесу, банный комплекс, MICE-павильон.',
      status: 'Готов · студия 8 Lines',
    },
    {
      n: '03', name: 'Видовая зона «Гора»',
      sub: 'Высота над долиной',
      d: 'Smart cafe, 2–3 видовые беседки, костровище. Гибкое размещение по рельефу.',
      status: 'Концепция',
    },
    {
      n: '04', name: 'Кластер горных лыж',
      sub: 'Зимний спорт',
      d: 'Горнолыжный склон примыкает к территории. Зимняя инфраструктура — основа 365-дневного сценария.',
      status: 'Обозначено',
    },
    {
      n: '05', name: 'Конный двор',
      sub: 'Конные тропы и клуб',
      d: 'Якорный объект для семей. Конные прогулки, обучение, природная академия.',
      status: 'Обозначено',
    },
    {
      n: '06', name: 'Recovery кластер',
      sub: 'Физическое · ментальное · сексуальное здоровье',
      d: 'Местные курортные факторы: моралы, фитотравы, артезианская вода, лечебные грязи, биокосметика + новые технологии (IV-терапия, биохакинг, recovery протоколы).',
      status: 'Якорь wellness-программы',
    },
  ];
  return (
    <section className="sec-pad sec-warm" id="masterplan" data-screen-label="14 Master Plan — 7 sectors">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">12</span><span className="sep">|</span>Мастер-план</div>
          <h2 className="display h-display-l">
            Шесть секторов на&nbsp;<em className="redword">72 га</em>.<br/>
            Автономное и&nbsp;безопасное пространство.
          </h2>
        </div>
        <p className="lead" style={{opacity:.78, maxWidth:'64ch', marginBottom:48}}>
          Село Красный Партизан, Алтайский край. Цель — круглогодичное размещение владельцев и&nbsp;гостей: оздоровление, отдых, культурно-досуговые программы. Каждый сектор — автономная инфраструктура с&nbsp;собственными потоками.
        </p>
        <div className="pc-sectors-grid">
          {sectors.map((s, i) => (
            <article className="pc-sector-card" key={i}>
              <div className="pc-sector-num">{s.n}</div>
              <div className="pc-sector-name">{s.name}</div>
              <div className="pc-sector-sub">{s.sub}</div>
              <p className="pc-sector-d">{s.d}</p>
              <div className="pc-sector-status">{s.status}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.PCMasterPlan = PCMasterPlan;

// ───────────────────────── 16 · Master Plan render — empty placeholder ─────────────────────────
function PCMasterPlanRender() {
  return (
    <section className="sec-pad pc-mp-render-placeholder" id="masterplan-render" data-screen-label="16 Master plan render">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">13</span><span className="sep">|</span>Рендер мастер-плана</div>
          <h2 className="display h-display-l">
            Здесь будет <em className="redword">визуализация</em> мастер-плана.
          </h2>
        </div>
        <div className="pc-mp-render-box">
          <div className="pc-mp-render-hint">
            Подложка для рендера / макета посёлка<br/>
            <span className="pc-mp-render-hint-meta">Сохрани изображение в <code>assets/photo/masterplan-render.jpg</code> — оно появится здесь</span>
          </div>
        </div>
      </div>
    </section>
  );
}
window.PCMasterPlanRender = PCMasterPlanRender;

// ───────── Slide 2: Detailed breakdown — частные резиденции + общественный центр ─────────
function PCMasterPlanDetail() {
  const residences = {
    title: 'Зона частных резиденций',
    sub: 'Четыре подсектора с разной архитектурой и потоками',
    blocks: [
      { tag: 'Сектор А', name: 'Долгосрочное проживание', d: 'Капитальные дома ближе к Красному Партизану. Участки до 10 соток с ландшафтом и беседками. Просторные дороги, навес у дома, зона пляжа рядом.' },
      { tag: 'Сектор Б', name: 'Модульные дома · сервис', d: 'Дома 50–120 м², участки 6–7 соток. Беззаборное пространство. Парковка общая на въезде. Доставка багажа служебным электромобилем.' },
      { tag: 'Сектор В', name: 'Кластер для семей с детьми', d: 'Рядом с детскими и прогулочными площадками, верёвочный парк. Безопасная обзорная среда — родители всегда видят детей.' },
      { tag: 'Сектор Д', name: 'Апартаменты с видом на реку', d: '2 корпуса по 16 юнитов = 32 апартамента. Двухэтажный блок: гостиная-кухня сверху с видом на реку, спальня снизу. Парковка на 35–40 машин.' },
      { tag: 'По возможности', name: 'Творческий кластер · «Красный проспект»', d: 'Мини-площадки для встреч, мастер-классы на природе, кинотеатр на траве. Парадная улица-визитная карточка от центральной входной группы.' },
    ],
  };
  const publicCenter = {
    title: 'Общественный центр',
    sub: 'Двенадцать объектов вокруг центральной входной группы',
    blocks: [
      { tag: '01', name: 'Визит-центр · 150 м²', d: 'Видовой панорамный холл, большой макет комплекса, зона консьерж-гида, дегустационная зона, лаундж-зал и чайная.' },
      { tag: '02', name: 'Фермерское кафе · 1 000 м² · 150 человек', d: 'Два этажа, панорамные виды. Модульная конструкция, которая «растёт» с проектом. Уже нанесено на генплан.' },
      { tag: '03', name: 'Банный комплекс · 2 бани', d: 'Холодная родниковая и подогреваемая купель. Каждая баня 60–80 м², вместимость 4 / 6–8 / 12 человек.' },
      { tag: '04', name: 'Круглогодичный детский центр · ~300 м²', d: 'Школа года, кружки и студии, зимняя анимация, праздники и тематические смены. Семейный сценарий — круглый год.' },
      { tag: '05', name: 'Мастерские · дерево, керамика, текстиль, кузня', d: 'Открытые мастерские для резидентов и гостей. Мастера-резиденты ведут программы, лучшие работы — на продажу в витрине-магазине.' },
      { tag: '06', name: 'Smart cafe · 100 м²', d: 'Бесконтактное самообслуживание. В жилой застройке — для быстрого перекуса в любое время.' },
      { tag: '07', name: 'Уличная ярмарка · 100 м²', d: 'Торговля фермерскими продуктами с локальных хозяйств.' },
      { tag: '08', name: 'Озеро · пляж · водные объекты', d: 'Лежаки, шезлонги, кабинки, песочница. Прогулочные дорожки, пирсы, искусственный водопад с подсветкой и акустикой.' },
      { tag: '09', name: 'Спортивные активности у пляжа', d: 'Падл-корты, воркаут-площадки, волейбол.' },
      { tag: '10', name: 'Прокатный центр · 70 м²', d: 'Мобильный склад на основе декоративно обшитого морского контейнера. SUP, каяки, вёсла, лыжи.' },
      { tag: '11', name: 'Гриль-беседки у реки', d: 'Панорамные смотровые беседки. По возможности.' },
      { tag: '12', name: 'Парковка · 40 машин', d: 'У центральной входной группы под охраной с КПП.' },
    ],
  };
  return (
    <section className="sec-pad" id="masterplan-detail" data-screen-label="03.5 Master Plan Detail">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">15</span><span className="sep">|</span>Что внутри</div>
          <h2 className="display h-display-l">
            Два сектора — <em className="redword">сердце посёлка</em>.<br/>
            Где живут и где собираются.
          </h2>
        </div>
        <div className="pc-mp-detail-grid">
          <div className="pc-mp-col">
            <div className="pc-mp-col-head">
              <div className="pc-mp-col-tag">Раздел 01</div>
              <h3 className="pc-mp-col-title">{residences.title}</h3>
              <div className="pc-mp-col-sub">{residences.sub}</div>
            </div>
            <ul className="pc-mp-blocks">
              {residences.blocks.map((b, i) => (
                <li className="pc-mp-block" key={i}>
                  <div className="pc-mp-block-tag">{b.tag}</div>
                  <div className="pc-mp-block-body">
                    <div className="pc-mp-block-name">{b.name}</div>
                    <div className="pc-mp-block-d">{b.d}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="pc-mp-foot">
              <strong>Поддерживающая инфраструктура:</strong> гаражно-складской ангар, центральная прачечная, общественная модульная баня, придомовые костровища и&nbsp;барбекю, КПП, площадки сбора ТБО.
            </div>
          </div>
          <div className="pc-mp-col">
            <div className="pc-mp-col-head">
              <div className="pc-mp-col-tag">Раздел 02</div>
              <h3 className="pc-mp-col-title">{publicCenter.title}</h3>
              <div className="pc-mp-col-sub">{publicCenter.sub}</div>
            </div>
            <ul className="pc-mp-blocks">
              {publicCenter.blocks.map((b, i) => (
                <li className="pc-mp-block" key={i}>
                  <div className="pc-mp-block-tag">{b.tag}</div>
                  <div className="pc-mp-block-body">
                    <div className="pc-mp-block-name">{b.name}</div>
                    <div className="pc-mp-block-d">{b.d}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="pc-mp-foot">
              <strong>Принцип:</strong> прямой пешеходный доступ из&nbsp;коттеджного посёлка. Раздельность от&nbsp;ретрит-зоны и&nbsp;частных резиденций.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.PCMasterPlanDetail = PCMasterPlanDetail;

// ───────────────────────── 12 · Architecture & Russian visual code ─────────────────────────
function PCArchitecture() {
  const arch = [
    { tag: 'Регламент',  name: 'Бюро LH47',                              d: 'Единый архитектурный регламент посёлка: материал, форма, посадка на участок. Свобода планировок внутри общего языка.' },
    { tag: 'Соавтор',    name: 'Студия 8 Lines · Никола-Ленивец',        d: 'Соавторство павильонов ретрит-зоны. Международное признание и культурный контекст ЮНЕСКО — без курортного формализма.' },
    { tag: 'Форма',      name: 'Двускатные кровли · панорамное остекление', d: 'Современная форма с архетипом избы. Графит, дерево, ниши под поленницы — узнаваемо русское без китча.' },
    { tag: 'Среда',      name: 'Модульность и пешеходные оси',           d: 'Объекты могут «расти» вместе с проектом. Сквозные пешеходные оси, видовые точки, мягкая посадка под ландшафт.' },
  ];
  const code = [
    { tag: 'Корни',     name: 'Скифы → Казаки → Староверы → Сегодня', d: '10 000 лет на одной долине. Курорт продолжает линию, а не цитирует её формально.' },
    { tag: 'Цвет',      name: 'Охра · графит · лён · тёплое дерево',   d: 'Природная палитра Алтая в архитектуре, текстиле, керамике и графике. Нет глянца, нет «евростандарта».' },
    { tag: 'Деталь',    name: 'Резьба, наличники, орнамент',           d: 'Авторские паттерны (раппорт) — переосмысленные старинные мотивы. На фасадах, в текстиле, в визуале курорта.' },
    { tag: 'Ритуал',    name: 'Ремёсла как часть среды',               d: 'Хороводы, обрядовые куклы, керамика, ковка, валяние — не музей, а живая практика мастеров-резидентов.' },
  ];
  const strip = [
    { img: 'assets/photo/modular-house.webp',      cap: 'Современный модуль · LH47' },
    { img: 'assets/photo/house-belyak.png',        cap: 'Капитальный дом · «на поколения»' },
    { img: 'assets/photo/cossacks-khorovod.jpg',   cap: 'Хоровод · живая традиция' },
    { img: 'assets/photo/founders-with-master.jpg', cap: 'Мастера · среда курорта' },
  ];
  return (
    <section className="sec-pad sec-warm" id="architecture" data-screen-label="12 Architecture & Russian code">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">12</span><span className="sep">|</span>Архитектура и&nbsp;русский код</div>
          <h2 className="display h-display-l">
            Современная архитектура<br/>
            с <em className="redword">русскими корнями</em>.
          </h2>
        </div>
        <p className="lead" style={{opacity:.78, maxWidth:'66ch', marginBottom:32}}>
          Курорт собран по&nbsp;архитектурному регламенту бюро LH47. Современные формы, прочитываемые как&nbsp;русское: двускатные кровли, открытая древесина, графитовые фасады. Айдентика, паттерны и&nbsp;ремёсла — линия от&nbsp;скифов до&nbsp;сегодня.
        </p>

        {/* Узкая фото-полоска: современный модуль / капитальный дом / хоровод / мастера */}
        <div className="pc-arch-strip">
          {strip.map((s, i) => (
            <figure className="pc-arch-strip-cell" key={i}>
              <div className="pc-arch-strip-ph" style={{backgroundImage:`url('${s.img}')`}}/>
              <figcaption className="pc-arch-strip-cap">{s.cap}</figcaption>
            </figure>
          ))}
        </div>

        <div className="pc-mp-detail-grid">
          <div className="pc-mp-col">
            <div className="pc-mp-col-head">
              <div className="pc-mp-col-tag">Раздел 01</div>
              <h3 className="pc-mp-col-title">Архитектура</h3>
              <div className="pc-mp-col-sub">Бюро LH47 + студия 8&nbsp;Lines</div>
            </div>
            <ul className="pc-mp-blocks">
              {arch.map((b, i) => (
                <li className="pc-mp-block" key={i}>
                  <div className="pc-mp-block-tag">{b.tag}</div>
                  <div className="pc-mp-block-body">
                    <div className="pc-mp-block-name">{b.name}</div>
                    <div className="pc-mp-block-d">{b.d}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="pc-mp-foot">
              <strong>Принцип:</strong> архитектурный регламент задаёт язык, но&nbsp;не&nbsp;превращает посёлок в&nbsp;«одинаковый». Каждый дом — авторский в&nbsp;общей логике.
            </div>
          </div>
          <div className="pc-mp-col">
            <div className="pc-mp-col-head">
              <div className="pc-mp-col-tag">Раздел 02</div>
              <h3 className="pc-mp-col-title">Русский визуальный код</h3>
              <div className="pc-mp-col-sub">Цвет · деталь · ритуал</div>
            </div>
            <ul className="pc-mp-blocks">
              {code.map((b, i) => (
                <li className="pc-mp-block" key={i}>
                  <div className="pc-mp-block-tag">{b.tag}</div>
                  <div className="pc-mp-block-body">
                    <div className="pc-mp-block-name">{b.name}</div>
                    <div className="pc-mp-block-d">{b.d}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="pc-mp-foot">
              <strong>Принцип:</strong> русское — не&nbsp;декорация и&nbsp;не&nbsp;стилизация. Это материал, цвет, ритм жизни, ремёсла. Живая среда вместо музея.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.PCArchitecture = PCArchitecture;

// ───────────────────────── 04 · Year-round (4 seasons) ─────────────────────────
// ───────── Slide 1: 4 seasons — POSTER (большие фото, минимум текста) ─────────
function PCYearRound() {
  const seasons = [
    { s: 'Весна', cap: 'Цветущие холмы',     img: 'assets/photo/season-spring-hills.jpg' },
    { s: 'Лето',  cap: 'Закат над долиной',   img: 'assets/photo/season-summer-family.jpg' },
    { s: 'Осень', cap: 'Долина у локации',    img: 'assets/photo/season-autumn-river.jpg' },
    { s: 'Зима',  cap: 'Морозное утро · −25', img: 'assets/photo/season-winter-frost.jpg' },
  ];
  return (
    <section className="sec-pad" id="yearround" data-screen-label="04 Year-round seasons">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">09</span><span className="sep">|</span>Круглый&nbsp;год</div>
          <h2 className="display h-display-l">
            <em className="redword">365 дней.</em><br/>
            Каждый по-своему живой.
          </h2>
        </div>
        <p className="lead" style={{opacity:.78, maxWidth:'62ch', marginBottom:48}}>
          Чарыш не&nbsp;«сезонный курорт»&nbsp;— здесь интересно жить весь год. Каждый сезон открывает свой ландшафт, свою активность, свой ритм. Не&nbsp;нужно уезжать, чтобы дождаться нужной погоды.
        </p>
        <div className="pc-poster-grid">
          {seasons.map((s, i) => (
            <figure className="pc-poster-card" key={i}>
              <div className="pc-poster-photo" style={{backgroundImage:`url('${s.img}')`}}>
                <div className="pc-poster-overlay"/>
                <figcaption className="pc-poster-cap">
                  <div className="pc-poster-num">{String(i+1).padStart(2,'0')}</div>
                  <div className="pc-poster-name">{s.s}</div>
                  <div className="pc-poster-sub">{s.cap}</div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
window.PCYearRound = PCYearRound;

// ───────── Slide 2: Activities — все активности Чарыша (6 категорий) ─────────
function PCActivities() {
  const cats = [
    {
      tag: 'Река и вода',
      img: 'assets/photo/activity-marble-river.jpg',
      items: ['Рафтинг на Чарыше (кат. I–II)', 'SUP, байдарки, горная рыбалка', 'Прогулки вдоль берега из белого мрамора', 'Лодочные пирсы, корм рыбкам'],
    },
    {
      tag: 'Горы и тропы',
      img: 'assets/photo/activity-mountain-hikes.jpg',
      items: ['Походы в горы — от детских до многодневных', 'Исследование неизвестных локаций с гидом', 'Скалолазание · велотреккинг', 'Видовые точки над поймой Чарыша'],
    },
    {
      tag: 'Конные походы',
      img: 'assets/photo/people-horseback.jpg',
      items: ['Конные прогулки по тропам', 'Обучение для детей и взрослых', 'Природная академия при конном центре', 'Многодневные походы с гидом'],
    },
    {
      tag: 'Наблюдения за природой',
      img: 'assets/photo/activity-nature-watching.jpg',
      items: ['Тихие смотровые маршруты — утром и на закате', 'Птицы, сурки, маралы — на расстоянии вытянутой руки', 'Гид-натуралист по запросу', 'Фотоохота — без выстрелов'],
    },
    {
      tag: 'Живые мастера',
      img: 'assets/photo/people-craft-circle.jpg',
      items: ['Керамика, валяние, обрядовые куклы', 'Камнерезное искусство', 'Фольклор и народные инструменты', 'Этноспорт: казачий спас, фланкировка'],
    },
    {
      tag: 'Природа и деревня',
      img: 'assets/photo/season-autumn-cows.jpg',
      items: ['Экскурсии на мараловодческое хозяйство', 'Уличная фермерская ярмарка', 'Стадо коров — главный местный «пробка-генератор»', 'Жизнь как она есть — без декораций'],
    },
    {
      tag: 'Встречи с друзьями',
      img: 'assets/photo/picnic-friends.jpg',
      items: ['Ужин у реки с местными жителями', 'Чайхана и неспешные разговоры', 'Костёр и звёзды — формат тёплых вечеров', 'Сообщество резидентов круглый год'],
    },
    {
      tag: 'Ретриты и события',
      img: 'assets/photo/object-retreat-interior.jpg',
      items: ['Йога-программы и дыхательные практики', 'Авторские ретриты от приглашённых мастеров', 'MICE-павильон для корпоративных событий', 'Семейные смены и Family Camp'],
    },
    {
      tag: 'Живая еда',
      img: 'assets/photo/food-cauliflower.jpg',
      items: ['Своё КФХ: молоко, сыр, овощи, зелень', 'Ресторан здорового питания на собственном сырье', 'Уличная ярмарка фермерских продуктов', 'Кулинарные мастер-классы у местных хозяек'],
    },
  ];
  return (
    <section className="sec-pad sec-warm" id="activities" data-screen-label="04.5 Activities">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">09</span><span className="sep">|</span>Чем&nbsp;живёт&nbsp;Чарыш</div>
          <h2 className="display h-display-l">
            Дома, реки и горы — это <em className="redword">оправа</em>.<br/>
            Главное — то, что мы&nbsp;здесь делаем&nbsp;<em className="redword">вместе</em>.
          </h2>
        </div>
        <p className="lead" style={{opacity:.78, maxWidth:'62ch', marginBottom:48}}>
          Сюда не&nbsp;приезжают «отдохнуть от&nbsp;людей»&nbsp;— сюда приезжают за&nbsp;настоящими людьми и&nbsp;настоящими делами. Девять направлений, в&nbsp;которых складывается жизнь резидента: что-то делаешь руками, что-то&nbsp;— ногами, что-то просто впитываешь.
        </p>
        <div className="pc-activities-grid">
          {cats.map((c, i) => (
            <article className="pc-activity-card" key={i}>
              <div className="pc-activity-photo" style={{backgroundImage:`url('${c.img}')`}}>
                <div className="pc-activity-num">{String(i+1).padStart(2,'0')}</div>
              </div>
              <div className="pc-activity-body">
                <div className="pc-activity-tag">{c.tag}</div>
                <ul className="pc-activity-list">
                  {c.items.map((it, j) => <li key={j}>{it}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="pc-people-quote" style={{marginTop:80}}>
          <div className="pc-people-quote-mark">«</div>
          <div className="pc-people-quote-text">
            Резидентов сюда отбираем не&nbsp;по&nbsp;размеру кошелька. <em className="redword">По&nbsp;тому, как человек смотрит на&nbsp;закат и&nbsp;на&nbsp;соседского ребёнка.</em>
          </div>
          <div className="pc-people-quote-by">— Светлана Антонова, со-основатель</div>
        </div>
      </div>
    </section>
  );
}
window.PCActivities = PCActivities;

// ───────────────────────── 05 · Resident types (6 portraits) ─────────────────────────
function PCResidents() {
  const types = [
    {
      t: 'Высокоэффективный человек и семья из крупных городов',
      age: 'Москва · Петербург · Новосибирск · 35–55 лет, дети 8+',
      pts: [
        'Устали платить за успех качеством жизни',
        'Дефицит не денег — а тишины и восстановления',
        'Природный опыт для детей важнее репетиторов',
        'Видели Европу — хотят такого же дома в России',
        'Думают на 10–20 лет: семейный актив, не потребление',
      ],
    },
    {
      t: 'Творец и созерцатель',
      age: 'Тишина — рабочая среда',
      pts: [
        'Контакт с настоящим: без имитаций',
        'Мягкая трансформация через ремесло и природу',
        'Оздоровление жизнью, а не SPA-программами',
      ],
    },
    {
      t: 'Продвинутые семьи из сибирского региона',
      age: 'Новосибирск, Барнаул, Кемерово, Томск, Красноярск',
      pts: [
        'СФО — ~17 млн человек, ~3 млн семей с детьми',
        'Алтай — региональная гордость, ближняя локация',
        'Семейный летний/зимний дом «своих» в часе-двух авто-полёта',
        'Готовы стать первыми резидентами и амбассадорами',
        'Локальная сеть знакомств + быстрый возврат к семье',
      ],
    },
    {
      t: 'Родитель новой волны',
      age: 'Природный опыт развития — выше репетиторов',
      pts: [
        'Казачья культура · ремёсла · живая история',
        'Среда, в которой дети вырастают иначе',
        'Сезонность и природные ритмы — настоящее воспитание',
      ],
    },
    {
      t: 'Искатель мест силы и ЗОЖ',
      age: 'Активный отдых на природе',
      pts: [
        'Горный треккинг, сплавы, рафтинг, велосипеды',
        'Квадроциклы, падл-корты, воркаут у реки',
        'Без семьи — есть сообщество равных духом',
      ],
    },
    {
      t: 'Предприниматели, управленцы, специалисты',
      age: 'Ценят локации с концепцией и культурным кодом',
      pts: [
        'Высокооплачиваемые профессионалы, уставшие от шаблонных курортов',
        'Ищут смысл и контекст — а не «всё включено»',
        'Готовы платить за подлинность, а не за бренд',
        'Сообщество равных по уровню и по ценностям',
      ],
    },
  ];
  return (
    <section className="sec-pad sec-warm" id="residents" data-screen-label="05 Residents">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">16</span><span className="sep">|</span>Кто&nbsp;здесь&nbsp;живёт</div>
          <h2 className="display h-display-l">
            Тщательно отобранное<br/>
            <em className="redword">сообщество</em> — наша защита<br/>
            и главный актив.
          </h2>
        </div>
        <p className="lead" style={{opacity:.78, maxWidth:'62ch', marginBottom:48}}>
          Резидент рассматривает Алтай как 3-й или 4-й дом — ликвидный актив и&nbsp;убежище на&nbsp;случай некомфортного развития событий. Шесть портретов, которые мы&nbsp;видим и&nbsp;принимаем в&nbsp;посёлок.
        </p>
        <div className="pc-residents-strip">
          <figure><img src="assets/photo/people-father-daughter.jpg" alt="Семья"/><figcaption>Высокоэффективная семья</figcaption></figure>
          <figure><img src="assets/photo/people-woman-camera.jpg" alt="Творец"/><figcaption>Творец и созерцатель</figcaption></figure>
          <figure><img src="assets/photo/people-girls-folk.jpg" alt="Дети"/><figcaption>Родитель новой волны</figcaption></figure>
          <figure><img src="assets/photo/people-horseback.jpg" alt="Искатель"/><figcaption>Искатель мест силы</figcaption></figure>
        </div>
        <div className="pc-residents-grid">
          {types.map((r, i) => (
            <div className="pc-resident" key={i}>
              <div className="pc-resident-num">{String(i+1).padStart(2,'0')}</div>
              <div className="pc-resident-t">{r.t}</div>
              <div className="pc-resident-age">{r.age}</div>
              <ul className="pc-resident-list">
                {r.pts.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.PCResidents = PCResidents;

// ───────────────────────── 10 · DNA convergence — основатели · место · люди ─────────────────────────
function PCDNA() {
  const founders = [
    {
      name: 'Вячеслав Немцов',
      role: 'Со-основатель',
      img: 'assets/team/nemtsov.jpg',
      keys: ['Семья', 'Честь имею', 'Сильный род'],
      d: 'Родовая память, верность слову, мужская честь — стержень, на&nbsp;котором держится семья и&nbsp;проект.',
    },
    {
      name: 'Светлана Антонова',
      role: 'Со-основатель',
      img: 'assets/team/antonova.jpg',
      keys: ['Гармония с природой', 'Духовные практики', 'Эстетика'],
      d: 'Соединение тонкого мира и&nbsp;материального. Видение красоты, уважение к&nbsp;ритуалам, женское начало.',
    },
    {
      name: 'Андрей Немцев',
      role: 'Управляющий партнёр',
      img: 'assets/team/nemtsev.jpg',
      keys: ['Настоящее', 'Сибирское слово', 'Человек дела'],
      d: 'Сила здесь и&nbsp;сейчас. Сказано — сделано. Знание земли, людей, природы изнутри.',
    },
  ];
  const place = [
    'Тупиковая долина — фильтр случайных',
    'Чистая вода, воздух, целебные травы',
    '10 000 лет истории на одной долине',
    'Русское сердце на границе РА и АК',
    'Тишина и приватность как природа',
    'Особый микроклимат предгорий',
  ];
  const locals = [
    'Казаки · 1765, станица Чарышская',
    'Староверы · согласие с природой',
    'Мастера · резьба, гончарство, валяние',
    'Сибирское слово · прямота речи',
    'Хор «Канареечка», хороводы, обряды',
    'Жизнь по правде, община, гостеприимство',
  ];
  return (
    <section className="sec-pad sec-warm" id="dna" data-screen-label="10 DNA convergence">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">11</span><span className="sep">|</span>Где&nbsp;сходятся&nbsp;три&nbsp;ДНК</div>
          <h2 className="display h-display-l">
            ДНК основателей · ДНК места · ДНК людей —<br/>
            <em className="redword">сходятся в&nbsp;одной точке</em>.
          </h2>
        </div>
        <p className="lead" style={{opacity:.78, maxWidth:'66ch', marginBottom:32}}>
          Чарышские Усадьбы — это не&nbsp;девелопмент-проект. Это сочетание трёх ДНК. Каждое сильное само по&nbsp;себе. Вместе они дают характер места.
        </p>

        {/* Hero — реальная панорама локации (визуальный якорь для ДНК места) */}
        <figure className="pc-dna-hero">
          <div className="pc-dna-hero-ph" style={{backgroundImage:"url('assets/photo/charysh-location-panorama.jpg')"}}/>
          <figcaption className="pc-dna-hero-cap">Чарышская долина · вид с локации</figcaption>
        </figure>

        {/* Уровень 1 — ДНК основателей */}
        <div className="pc-dna-section-head">
          <span className="pc-dna-section-num">01</span>
          <span className="pc-dna-section-h">ДНК основателей</span>
          <span className="pc-dna-section-meta">Три характера · три ноты</span>
        </div>
        <div className="pc-dna-founders">
          {founders.map((f, i) => (
            <article className="pc-dna-founder" key={i}>
              <div className="pc-dna-founder-ph" style={{backgroundImage:`url('${f.img}')`}}/>
              <div className="pc-dna-founder-body">
                <div className="pc-dna-founder-role">{f.role}</div>
                <h3 className="pc-dna-founder-name">{f.name}</h3>
                <div className="pc-dna-founder-keys">
                  {f.keys.map((k, j) => <span key={j} className="pc-dna-key">{k}</span>)}
                </div>
                <p className="pc-dna-founder-d" dangerouslySetInnerHTML={{__html: f.d}}/>
              </div>
            </article>
          ))}
        </div>

        {/* Уровень 2 — ДНК места и людей */}
        <div className="pc-dna-pair">
          <div className="pc-dna-pair-col">
            <div className="pc-dna-section-head">
              <span className="pc-dna-section-num">02</span>
              <span className="pc-dna-section-h">ДНК места</span>
              <span className="pc-dna-section-meta">Чарышская долина</span>
            </div>
            <ul className="pc-dna-list">
              {place.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
          <div className="pc-dna-pair-col">
            <div className="pc-dna-section-head">
              <span className="pc-dna-section-num">03</span>
              <span className="pc-dna-section-h">ДНК местных жителей</span>
              <span className="pc-dna-section-meta">Чарышцы · 10 000 лет</span>
            </div>
            <ul className="pc-dna-list">
              {locals.map((l, i) => <li key={i}>{l}</li>)}
            </ul>
          </div>
        </div>

        {/* Фото-полоска реальной локации (под колонками с буллетами) */}
        <div className="pc-dna-photo-strip">
          <div className="pc-dna-photo-cell" style={{backgroundImage:"url('assets/photo/location-5882.jpg')"}}/>
          <div className="pc-dna-photo-cell" style={{backgroundImage:"url('assets/photo/location-5902.jpg')"}}/>
          <div className="pc-dna-photo-cell" style={{backgroundImage:"url('assets/photo/location-5934.jpg')"}}/>
          <div className="pc-dna-photo-cell" style={{backgroundImage:"url('assets/photo/location-5963.jpg')"}}/>
        </div>

        {/* Уровень 3 — сходимость */}
        <div className="pc-dna-converge">
          <div className="pc-dna-converge-arrow" aria-hidden="true">↓</div>
          <div className="pc-dna-converge-h">Что получается на&nbsp;пересечении</div>
          <p className="pc-dna-converge-d">
            <strong>Recovery курорт на&nbsp;Алтае</strong> с&nbsp;<strong>красотой</strong>, <strong>функциональностью</strong> и&nbsp;<strong>глубиной</strong> — собран на&nbsp;земле, которая <strong>300&nbsp;лет</strong> хранит свой культурный код, и&nbsp;рядом с&nbsp;людьми, которые его носят живым.
          </p>
          <div className="pc-dna-product-strip">
            <div className="pc-dna-product">
              <div className="pc-dna-product-label">Recovery</div>
              <div className="pc-dna-product-meta">Здоровье · longevity · восстановление</div>
            </div>
            <div className="pc-dna-product">
              <div className="pc-dna-product-label">Mini MICE</div>
              <div className="pc-dna-product-meta">Корпоративные сессии · ретриты команд · стратсессии</div>
            </div>
            <div className="pc-dna-product">
              <div className="pc-dna-product-label">Ретриты</div>
              <div className="pc-dna-product-meta">Авторские программы мастеров и кураторов</div>
            </div>
          </div>
          <p className="pc-dna-converge-tag">Чарыш — не&nbsp;проект про курорт. Это место, которое возвращает домой.</p>
        </div>
      </div>
    </section>
  );
}
window.PCDNA = PCDNA;

// ───────────────────────── 18 · Why we are confident — 4 pillars ─────────────────────────
function PCSecurity() {
  const pillars = [
    {
      h: 'Юридически чистый актив',
      pts: [
        'Земля 72 га в собственности',
        'ВРИ — туристическое обслуживание',
        'АО учреждено и зарегистрировано',
      ],
      photo: 'assets/photo/nature-river-rocks.jpg',
    },
    {
      h: 'Инфраструктура подведена',
      pts: [
        'Электричество, вода, дороги, связь',
        'Действующая вертолётная площадка',
        'Локации под взлётную полосу и ГЛТ',
      ],
      photo: 'assets/photo/valley-overlook.jpg',
    },
    {
      h: 'Локация на линии трендов',
      pts: [
        'Большой Алтай · +5% турпотока на 2026',
        'Уникальная недооценённая земля',
        'Тупиковая долина · приватность природы',
      ],
      photo: 'assets/photo/valley-autumn.jpg',
    },
    {
      h: 'Команда и операционка внутри',
      pts: [
        'Своя строительно-монтажная организация',
        'Своя управляющая организация',
        'Опыт в российском и международном бизнесе',
        'Команда основателей сопровождает лично',
        'Контроль качества и сроков — у основателей',
      ],
      photo: 'assets/photo/season-autumn-river.jpg',
    },
    {
      h: 'Пересечение трёх ДНК',
      pts: [
        'ДНК места · 300 лет живого культурного кода',
        'ДНК основателей · красота, функциональность, глубина',
        'ДНК местных жителей · казаки, староверы, мастера',
        'Сходятся в одной точке — характер места',
        'Не «над», а «вместе» — рядом с теми, кто его носит',
      ],
      photo: 'assets/photo/local-community-elders.jpg',
    },
  ];
  return (
    <section className="sec-pad sec-dark" id="security" data-screen-label="18 Why we are confident">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">26</span><span className="sep">|</span>Почему&nbsp;мы&nbsp;уверены&nbsp;в&nbsp;проекте</div>
          <h2 className="display h-display-l">
            Не&nbsp;идея и&nbsp;не&nbsp;план.<br/>
            <em className="redword-light">Сходятся пять драйверов проекта</em> — одновременно.
          </h2>
        </div>
        <div className="pc-pillars-hero" style={{backgroundImage:"url('assets/photo/nature-panorama.jpg')"}}/>
        <div className="pc-pillars-grid">
          {pillars.map((p, i) => (
            <article className="pc-pillar" key={i}>
              <div className="pc-pillar-num">{String(i+1).padStart(2,'0')}</div>
              <h3 className="pc-pillar-h">{p.h}</h3>
              <ul className="pc-pillar-list">
                {p.pts.map((pt, j) => <li key={j}>{pt}</li>)}
              </ul>
              {p.photo && (
                <div className="pc-pillar-photo" style={{backgroundImage:`url('${p.photo}')`}}/>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.PCSecurity = PCSecurity;

// ───────────────────────── 19 · Trends — на пересечении трендов ─────────────────────────
function PCTrends() {
  const keyShifts = [
    { tag: 'Безопасность',                       d: 'Запрос на физическую и финансовую защищённость — главный сдвиг эпохи' },
    { tag: 'Создание комплексной среды',         d: 'Не дом, не отель — экосистема: жильё + сервис + инфраструктура + сообщество' },
    { tag: 'Поиск локаций для нового времени',   d: 'Россия и Сибирь как новая фронтьер для жизни и инвестиций' },
  ];
  const main12 = [
    { tag: 'Тихая роскошь',         d: 'Privacy as luxury · anti-Instagram' },
    { tag: 'Внутренний туризм',     d: 'Алтай — в топ-5 регионов России' },
    { tag: 'Аутентичность',         d: 'Настоящие казаки, староверы, мастера' },
    { tag: 'Корневые ценности',     d: 'Традиция как ресурс, не нафталин' },
    { tag: 'Семья на поколения',    d: 'Родовое имение, наследуемый актив' },
    { tag: 'Slow living',           d: 'Долгие сезоны, ритм природы' },
    { tag: 'Wellness и ретрит',     d: 'Здоровье как ежедневная практика' },
    { tag: 'Сообщество',            d: 'Племя единомышленников, не ЖК' },
    { tag: 'Природа как актив',     d: 'Заповедная долина, не турбаза' },
    { tag: 'Реальные активы',       d: 'Земля в собственности · hedge' },
    { tag: 'Современный русский',   d: 'LH47 + традиция, без китча' },
    { tag: 'Большой Алтай',         d: 'Структурный рост, бюджет под триллион' },
  ];
  return (
    <section className="sec-pad" id="trends" data-screen-label="02 Совпадение десятилетия">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">10</span><span className="sep">|</span>Совпадение&nbsp;десятилетия</div>
          <h2 className="display h-display-l">
            Тренды десятилетия —<br/>
            <em className="redword">сошлись здесь</em>. Одновременно.
          </h2>
        </div>
        <p className="lead" style={{opacity:.78, maxWidth:'66ch', marginBottom:32}}>
          Чарыш стоит на&nbsp;пересечении главных трендов десятилетия. Три ключевых сдвига времени — и&nbsp;двенадцать рыночных трендов. Каждый сам по&nbsp;себе — уже рынок. Здесь они работают вместе.
        </p>

        {/* Три ключевых сдвига — выделены красным */}
        <div className="pc-trends-key">
          {keyShifts.map((t, i) => (
            <article className="pc-trend-key" key={i}>
              <div className="pc-trend-key-num">{String(i+1).padStart(2,'0')}</div>
              <div className="pc-trend-key-tag">{t.tag}</div>
              <div className="pc-trend-key-d">{t.d}</div>
            </article>
          ))}
        </div>

        <div className="pc-trends-divider" aria-hidden="true">
          <span/>
          <span className="pc-trends-divider-mark">12 рыночных трендов</span>
          <span/>
        </div>

        <div className="pc-trends-main12">
          {main12.map((t, i) => (
            <article className="pc-trend-main" key={i}>
              <div className="pc-trend-main-num">{String(i+1).padStart(2,'0')}</div>
              <div className="pc-trend-main-tag">{t.tag}</div>
              <div className="pc-trend-main-d">{t.d}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.PCTrends = PCTrends;

// ───────────────────────── XX · Семьи с детьми 8+ — целевая аудитория ─────────────────────────
function PCFamily() {
  const stats = [
    { v: '~5 млн', l: 'семей в РФ с детьми 8–14', sub: 'Целевой возраст «окна осознанного выбора родителей»' },
    { v: '+22%',   l: 'рост рынка детского туризма за 2 года', sub: 'РСТ · итоги 2025 · структурный тренд' },
    { v: '76%',    l: 'россиян хотят «отдых ради тишины»', sub: 'Замер ЮMoney 2025 — мотивации поездок' },
    { v: '29%',    l: 'выбирают уединённые домики на Алтае', sub: '№ 1 в РФ · ЮMoney и Суточно.ру' },
  ];
  return (
    <section className="sec-pad sec-warm" id="family" data-screen-label="Family 8+ audience">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">10</span><span className="sep">|</span>Семьи&nbsp;с&nbsp;детьми&nbsp;8+</div>
          <h2 className="display h-display-l">
            Курорт для семей с&nbsp;детьми <em className="redword">8+</em>.<br/>
            Серьёзно занимаемся главным.
          </h2>
        </div>
        <p className="lead" style={{opacity:.78, maxWidth:'68ch', marginBottom:40}}>
          Возраст 8–14 — окно, когда ребёнок ещё с&nbsp;удовольствием едет с&nbsp;родителями, но&nbsp;уже готов к&nbsp;настоящим делам. Чарыш собран под&nbsp;этот сегмент: дети заняты осмысленным трудом и&nbsp;приключениями круглый год, родители — собой.
        </p>

        <div className="pc-family-grid">
          <article className="pc-family-col">
            <div className="pc-family-col-tag">Детям</div>
            <h3 className="pc-family-col-h">Настоящие сибирские дела</h3>
            <ul className="pc-family-list">
              <li>Конные походы и&nbsp;конный клуб</li>
              <li>Рафтинг, SUP, рыбалка на&nbsp;Чарыше</li>
              <li>Скалолазание, велотреккинг, тропы</li>
              <li>Мастерские: дерево, керамика, кузня, валяние</li>
              <li>Природные академии: травы, мараловодство, скифские курганы</li>
              <li>Зимой: горнолыжный кластер · санки · ледовый трек</li>
              <li>Круглогодичный детский центр на&nbsp;~300 м²</li>
            </ul>
          </article>
          <article className="pc-family-col">
            <div className="pc-family-col-tag">Родителям</div>
            <h3 className="pc-family-col-h">Своё пространство и&nbsp;покой</h3>
            <ul className="pc-family-list">
              <li>Recovery программы и&nbsp;medi-spa</li>
              <li>Тишина, приватность, тупиковая долина</li>
              <li>Сообщество единомышленников · клуб</li>
              <li>Гибкая работа: коворкинг + интернет 1&nbsp;Гбит</li>
              <li>Долгие визиты возможны — 2–4&nbsp;недели как норма</li>
              <li>Безопасная среда — родители всегда видят детей</li>
            </ul>
          </article>
        </div>

        <div className="pc-family-stats">
          {stats.map((s, i) => (
            <div className="pc-family-stat" key={i}>
              <div className="pc-family-stat-num">{String(i+1).padStart(2,'0')}</div>
              <div className="pc-family-stat-v">{s.v}</div>
              <div className="pc-family-stat-l">{s.l}</div>
              <div className="pc-family-stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="pc-family-market">
          <div className="pc-family-market-h">Оценка рынка для&nbsp;Чарыша</div>
          <div className="pc-family-market-row">
            <div><strong>5&nbsp;млн</strong> семей с&nbsp;детьми 8–14 в&nbsp;РФ</div>
            <div className="arrow">→</div>
            <div><strong>~2,5%</strong> верхне-средний сегмент (≈125&nbsp;тыс. семей)</div>
            <div className="arrow">→</div>
            <div><strong>0,2%</strong> готовы к&nbsp;курорту-усадьбе (≈250&nbsp;семей в&nbsp;год)</div>
            <div className="arrow">→</div>
            <div><strong>Чарыш на&nbsp;200&nbsp;семей-владельцев</strong> + 2–3&nbsp;тыс. гостевых визитов</div>
          </div>
          <div className="pc-family-market-meta">
            Тренды: осознанное родительство · slow parenting · образование вне города (homeschool, unschool) · альтернатива летним лагерям с&nbsp;программами «на&nbsp;глубину»
          </div>
        </div>
      </div>
    </section>
  );
}
window.PCFamily = PCFamily;

// ───────────────────────── 07 · Investment Economics ─────────────────────────
function PCEconomics() {
  const stats = [
    { n: 'от 14,8', u: 'млн ₽', l: 'вход в проект', sub: 'Дом с участком 6 соток и полной меблировкой' },
    { n: '60', u: '%', l: 'чистого дохода — на ваш счёт', sub: 'УК управляет без вашего участия' },
    { n: '6', u: 'лет', l: 'окупаемость инвестиции', sub: 'Рассчитано при достижении загрузки 60%' },
    { n: 'до 95', u: '%', l: 'загрузка в пиковый сезон', sub: 'Дефицитная локация · растущий спрос' },
    { n: '16,6', u: '%', l: 'таргетная доходность ДУ', sub: 'Доверительное управление недвижимостью' },
    { n: 'Buy-back', u: '', l: 'через 5 лет', sub: 'Преимущественное право выкупа по ориентировочной цене' },
  ];
  return (
    <section className="sec-pad" id="economics" data-screen-label="07 Economics">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">18</span><span className="sep">|</span>Экономика</div>
          <h2 className="display h-display-l">
            Зарабатывает, когда вы в&nbsp;городе.<br/>
            <em className="redword">Восстанавливает</em>, когда вы&nbsp;здесь.
          </h2>
        </div>
        <p className="lead" style={{opacity:.78, maxWidth:'62ch', marginBottom:48}}>
          УК берёт на&nbsp;себя строительство, ввод в&nbsp;эксплуатацию, отельный сервис 24/7. Вы&nbsp;получаете ежемесячный отчёт об&nbsp;аренде и&nbsp;управляете системами удалённо.
        </p>
        <div className="climate-grid pc-economics-grid">
          {stats.map((s, i) => (
            <div className="climate-cell" key={i}>
              <div className="climate-num">{String(i+1).padStart(2,'0')}</div>
              <div className="climate-value">
                {s.n}<span className="climate-unit">{s.u}</span>
              </div>
              <div className="climate-label">{s.l}</div>
              <div className="climate-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.PCEconomics = PCEconomics;

// ───────────────────────── 08 · Entry Formats (5 готовностей) ─────────────────────────
function PCFormats() {
  const formats = [
    { t: 'Под ключ с тапками', sub: 'Полная комплектация', d: 'Заезжай и живи. Мебель, техника, текстиль, посуда, декор — всё готово. Сдаётся в аренду или принимает семью на следующий день.' },
    { t: 'Под ключ с встроенной мебелью', sub: 'Готово к проживанию', d: 'Полная отделка, встроенная мебель, кухня. Возможно создать интерьер вашей мечты. Идеально для быстрого старта аренды.' },
    { t: 'Под ключ без мебели', sub: 'Чистовая отделка', d: 'Финишная отделка, сантехника, свет. Меблируете сами. Максимальная персонализация при быстром вводе в эксплуатацию.' },
    { t: 'White box', sub: 'Чистовое основание', d: 'Стяжка, штукатурка, разводка всех коммуникаций. Для уникального дизайнерского интерьера.' },
    { t: 'Участок с подрядом', sub: 'Без отделки', d: 'Конструктив и коммуникации. Минимальный порог входа. Строите в своём темпе и стиле.' },
  ];
  return (
    <section className="sec-pad sec-warm" id="formats" data-screen-label="08 Entry Formats">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">14</span><span className="sep">|</span>Форматы&nbsp;входа</div>
          <h2 className="display h-display-l">
            Пять уровней готовности —<br/>
            <em className="redword">от&nbsp;15&nbsp;млн&nbsp;₽</em>.
          </h2>
        </div>
        <p className="lead" style={{opacity:.78, maxWidth:'62ch', marginBottom:48}}>
          Выбирайте форму входа: участок с&nbsp;подрядом — любой уровень готовности под&nbsp;ваш запрос.
        </p>
        <div className="pc-formats-list">
          {formats.map((f, i) => (
            <div className="pc-format-row" key={i}>
              <div className="pc-format-num">{String(i+1).padStart(2,'0')}</div>
              <div className="pc-format-body">
                <div className="pc-format-head">
                  <div className="pc-format-t">{f.t}</div>
                  <div className="pc-format-sub">{f.sub}</div>
                </div>
                <div className="pc-format-d">{f.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.PCFormats = PCFormats;

// ───────────────────────── 09 · Co-partnership (9 directions) ─────────────────────────
function PCCoPartnership() {
  const dirs = [
    { t: 'Сельскохозяйственный кооператив', d: 'Теплицы (овощи, зелень), молочное животноводство с крафтовой сыроварней, рыбное хозяйство.' },
    { t: 'Банный комплекс', d: 'Банный комплекс для резидентов посёлка. Высокомаржинальный объект с постоянным трафиком.' },
    { t: 'Ресторан ЗОЖ', d: 'Фермерские продукты, ЗОЖ-меню, доставка. Производственный цех переработки местного сырья.' },
    { t: 'Детско-родительская среда', d: 'Детский центр, конный клуб, природная академия. Якорный объект, привлекающий семьи.' },
    { t: 'Центр практик и творчества', d: 'Мастерские, ретриты, арт-резиденции, семинары. Аренда пространства круглый год.' },
    { t: 'Прокат и маршруты', d: 'Велосипеды, SUP, снегоходы, лыжи. Хранение личной техники. Маршруты с гидом.' },
    { t: 'Тропы и теренкуры', d: 'Сеть маршрутов с разметкой и картами. Изучение и защита природы Алтая.' },
    { t: 'Спортивная инфраструктура', d: 'Спортплощадки и зоны тренировок внутри посёлка и за его пределами.' },
    { t: 'Выращивание и заготовка трав', d: 'Лекарственные растения Алтая. Совместное выращивание, сбор, переработка. Уникальный продукт с историей места.' },
  ];
  return (
    <section className="sec-pad" id="copartnership" data-screen-label="09 Co-partnership">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">09</span><span className="sep">|</span>Сопартнёрство</div>
          <h2 className="display h-display-l">
            Войдите как <em className="redword">со-партнёр</em> —<br/>
            долю в общей инфраструктуре.
          </h2>
        </div>
        <p className="lead" style={{opacity:.78, maxWidth:'62ch', marginBottom:48}}>
          Девять направлений, в&nbsp;которые можно зайти параллельно с&nbsp;покупкой дома. Минимальный вход обсуждается индивидуально.
        </p>
        <div className="pc-cop-grid">
          {dirs.map((d, i) => (
            <div className="pc-cop-cell" key={i}>
              <div className="pc-cop-num">{String(i+1).padStart(2,'0')}</div>
              <div className="pc-cop-t">{d.t}</div>
              <div className="pc-cop-d">{d.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.PCCoPartnership = PCCoPartnership;

// ───────────────────────── 10 · Legal Cleanliness ─────────────────────────
function PCLegal() {
  const blocks = [
    {
      h: 'Статус земли подтверждён',
      pts: [
        'Земли поселений, ВРИ — туристическое обслуживание',
        'Подтверждено выпиской ЕГРН',
        'Соответствует Генплану поселения',
        'Земля и дом оформляются в собственность покупателя',
      ],
    },
    {
      h: 'Что такое Гостевой Дом',
      pts: [
        'Индивидуальный частный жилой дом',
        'Постоянное проживание хозяина — разрешено',
        'Для туристического обслуживания — законно',
        'Сдача целиком или частично в аренду — разрешено',
      ],
    },
    {
      h: 'Защита ваших инвестиций',
      pts: [
        'Сделка — договор купли-продажи',
        'Право собственности регистрируется в Росреестре',
        'Никаких серых схем — только прозрачная процедура',
        'Полный пакет документов на онлайн-презентации',
      ],
    },
  ];
  return (
    <section className="sec-pad sec-warm" id="legal" data-screen-label="10 Legal">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">27</span><span className="sep">|</span>Юридика</div>
          <h2 className="display h-display-l">
            Земля оформлена. Документы в&nbsp;порядке.<br/>
            <em className="redword">Сделка прозрачна.</em>
          </h2>
        </div>
        <div className="pc-legal-banner">
          Земли рекреации Р-2 · строить дом ✓ &nbsp; жить самому ✓ &nbsp; сдавать в аренду ✓ &nbsp; всё кроме прописки
        </div>
        <div className="pc-legal-grid">
          {blocks.map((b, i) => (
            <div className="pc-legal-col" key={i}>
              <div className="pc-legal-num">{String(i+1).padStart(2,'0')}</div>
              <div className="pc-legal-h">{b.h}</div>
              <ul className="pc-legal-list">
                {b.pts.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.PCLegal = PCLegal;

// ───────────────────────── 11 · What's Built ─────────────────────────
function PCWhatsBuilt() {
  const items = [
    { v: '15+', u: 'итераций', l: 'концепции до выхода в рынок', d: 'Реальный проект — не бизнес-план. Собственные средства вложены, технологии отлажены.' },
    { v: '83', u: 'га', l: 'земли в Чарышском районе', d: '40 га переведены в категорию рекреационных. Документы в порядке.' },
    { v: '72', u: 'га', l: 'мастер-план готов', d: 'Бюро LH47 (Никола-Ленивец, ЮНЕСКО). Концепция — Лаборатория смыслов ABC Lab.' },
    { v: '4', u: 'км', l: 'дорога подведена', d: 'Ширина 7 м, щебёночная, благоустроенные броды, дренажные трубы.' },
    { v: '500', u: 'кВт', l: 'электричество КТП', d: 'Оптоволокно 1 Гб/сек. Скважина питьевого качества.' },
    { v: '500', u: 'хвойных', l: 'деревьев высажено', d: 'Озеро · аутентичный забор · 4 водоёма (2+ га) · оздоровление леса 7 га.' },
  ];
  return (
    <section className="sec-pad sec-dark" id="built" data-screen-label="11 Whats Built">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">24</span><span className="sep">|</span>Что&nbsp;уже&nbsp;сделано</div>
          <h2 className="display h-display-l">
            Не план. <em className="redword-light">Уже&nbsp;работа.</em>
          </h2>
        </div>
        <p className="lead" style={{opacity:.75, maxWidth:'62ch', marginBottom:48}}>
          Каркасно-соломенная технология строительства — 100% экологический утеплитель. Подрядчики обучены, бригады и&nbsp;техника — на&nbsp;месте. Дом основателей строится на&nbsp;локации.
        </p>
        <div className="pc-built-strip">
          <figure><img src="assets/photo/location-aerial-1.jpg" alt="Локация Чарыш · вид с высоты"/><figcaption>Локация с&nbsp;высоты</figcaption></figure>
          <figure><img src="assets/photo/location-aerial-2.jpg" alt="Долина и водоёмы"/><figcaption>Долина и&nbsp;водоёмы</figcaption></figure>
          <figure><img src="assets/photo/location-aerial-3.jpg" alt="Скала и обустроенный пруд"/><figcaption>Скала и&nbsp;пруд</figcaption></figure>
          <figure><img src="assets/photo/location-aerial-4.jpg" alt="Чарыш и меандр"/><figcaption>Меандр Чарыша</figcaption></figure>
        </div>
        <div className="market-grid">
          {items.map((it, i) => (
            <div className="market-cell" key={i}>
              <div className="market-num">{String(i+1).padStart(2,'0')}</div>
              <div>
                <span className="market-v">{it.v}</span>
                {it.u && <span className="market-u">{it.u}</span>}
              </div>
              <div className="market-l">{it.l}</div>
              <div className="market-src" style={{textTransform:'none', letterSpacing:0, opacity:.7, marginTop:'auto'}}>{it.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.PCWhatsBuilt = PCWhatsBuilt;

// ───────────────────────── 12 · Roadmap ─────────────────────────
function PCRoadmap() {
  // Прошлое — из ДДС «Чарыш Партнёрс» (май 2023 → сегодня)
  const past = [
    {
      n: '1', when: 'Май 2023', t: 'Старт проекта',
      pts: ['Учреждено ООО «Чарыш Партнёрс»', 'Взнос уставного капитала, открытие р/с в Сбербанке', 'Первые проектировочные и юридические работы'],
    },
    {
      n: '2', when: '2023 – 2024', t: 'Земля и периметр',
      pts: ['Выкуп ключевых земельных участков (~67 млн ₽ в кассе)', 'Перевод части земель в категорию рекреации', 'Межевание, оформление в собственность'],
    },
    {
      n: '3', when: '2024 – 2025', t: 'Стройка инфраструктуры',
      pts: ['Дорога 4 км отсыпана · 4 озера выкопаны', 'Электричество (КТП) и оптоволокно подведены, скважина', 'Аренда техники, бригады, склад, проектная документация'],
    },
    {
      n: '4', when: '2025 – Май 2026', t: 'Текущая фаза',
      pts: ['Архитектурный регламент (LH47 · 8 Lines · Никола-Ленивец)', 'Финмодель ретрит-комплекса и АО учреждено', 'Подготовка к первой очереди · 200+ млн собственных средств вложено'],
    },
  ];
  // Будущее — план запуска
  const future = [
    {
      n: '5', when: '2026 – 2027', t: 'Первая очередь · открытие весна 2027',
      pts: ['Первые 20 домов · банный комплекс · Recovery medi-spa', 'Запуск управляющей компании', 'Создание сельхозкооператива'],
    },
    {
      n: '6', when: '2027 – 2028', t: 'Основная застройка',
      pts: ['Строительство номерного фонда (150–200 домов)', 'Набережная, конный центр, детский центр', 'Ретрит-комплекс на 48 номеров'],
    },
    {
      n: '7', when: '2028+', t: 'Развитие',
      pts: ['Эксплуатация и приём гостей', 'Освоение горнолыжного склона', 'Природная академия · программы longevity'],
    },
  ];
  return (
    <section className="sec-pad" id="roadmap" data-screen-label="27 Roadmap">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">25</span><span className="sep">|</span>Дорожная&nbsp;карта</div>
          <h2 className="display h-display-l">
            Три года <em className="redword">уже работы</em>.<br/>
            Вы входите сейчас — в&nbsp;самый нужный момент.
          </h2>
        </div>
        <p className="lead" style={{opacity:.78, maxWidth:'62ch', marginBottom:32}}>
          Не план и&nbsp;не&nbsp;идея. ООО «Чарыш Партнёрс» работает с&nbsp;мая 2023. Земля выкуплена, коммуникации подведены, проекты согласованы, бригады на&nbsp;месте.
        </p>

        <div className="pc-roadmap-section-h">Что уже сделано (2023 → 2026)</div>
        <div className="pc-roadmap-grid pc-roadmap-grid-past">
          {past.map((s, i) => (
            <div className={`pc-stage pc-stage-past ${i === past.length - 1 ? 'pc-stage-active' : ''}`} key={i}>
              <div className="pc-stage-n">0{s.n}</div>
              <div className="pc-stage-when">{s.when}</div>
              <div className="pc-stage-t">{s.t}</div>
              <ul className="pc-stage-list">
                {s.pts.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="pc-roadmap-section-h" style={{marginTop:48}}>Что впереди (2026+)</div>
        <div className="pc-roadmap-grid">
          {future.map((s, i) => (
            <div className="pc-stage" key={i}>
              <div className="pc-stage-n">0{s.n}</div>
              <div className="pc-stage-when">{s.when}</div>
              <div className="pc-stage-t">{s.t}</div>
              <ul className="pc-stage-list">
                {s.pts.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.PCRoadmap = PCRoadmap;

// ───────────────────────── 13 · Team + Ambassadors ─────────────────────────
function PCTeam() {
  const team = [
    { name: 'Вячеслав Немцов', role: 'Со-основатель · идейный вдохновитель', d: 'Тренер, писатель, журналист. Создатель многомиллиардных компаний. Инвестор в недвижимость.', img: 'assets/team/nemtsov.jpg' },
    { name: 'Светлана Антонова', role: 'Со-основатель · идейный вдохновитель', d: 'Предприниматель и идеолог. Маркетинг и стратегическое позиционирование.', img: 'assets/team/antonova.jpg' },
    { name: 'Андрей Немцев', role: 'Управляющий партнёр', d: 'Операционное управление проектом. 20 лет в приключенческом туризме.', img: 'assets/team/nemtsev.jpg' },
    { name: 'Андрей Пережогин', role: 'Партнёр по инвестициям', d: 'Привлечение крупного капитала в девелопмент в России и за рубежом.', img: 'assets/team/perezhogin.jpg' },
    { name: 'Тамара Маркиш', role: 'Директор по развитию', d: 'Продуктолог комплексного развития территорий. 15+ лет в курортной индустрии.', img: 'assets/team/markish.jpg' },
    { name: 'Антон Кочуркин', role: 'Архитектор проекта', d: 'Соавтор Арт-парка Никола-Ленивец (ЮНЕСКО). Лауреат архитектурных конкурсов.', img: 'assets/team/kochurkin.jpg' },
  ];
  return (
    <section className="sec-pad sec-warm" id="team" data-screen-label="13 Team">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">10</span><span className="sep">|</span>Команда&nbsp;и&nbsp;амбассадоры</div>
          <h2 className="display h-display-l">
            Команда, которая <em className="redword">создаст</em> это место.
          </h2>
        </div>
        <div className="team-grid pc-team-grid">
          {team.map((m) => (
            <div className="team-cell" key={m.name}>
              <div className="team-ph" style={{backgroundImage:`url('${m.img}')`}}/>
              <div className="team-role">{m.role}</div>
              <div className="team-name">{m.name}</div>
              <div className="team-d">{m.d}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
window.PCTeam = PCTeam;

// ───────────────────────── ACT 1.4 · COMMUNITY (override of CommunitySection) ─────────────────────────
// Replaces the shared CommunitySection on this page so we control the gallery contents.
function PCCommunity() {
  const eras = [
    { era: 'V в. до н.э.', who: 'Скифы',       t: 'Около 50 курганов в долине Сентелека. Царский курган — скифская обсерватория.', img: 'assets/photo/elder-with-stela.jpg' },
    { era: 'XVIII век',    who: 'Казаки',       t: 'Чарышское основано в 1765 году как казачья станица. Хор «Канареечка» — победитель Сибири.', img: 'assets/photo/cossacks-khorovod.jpg' },
    { era: 'XIX век',      who: 'Старообрядцы', t: 'Особая философия согласия с природой, сезонные обряды, мараловодство, ремёсла.', img: 'assets/photo/old-believers.jpg' },
    { era: 'Сегодня',      who: 'Живые легенды места', t: 'Изобретатели, народные умельцы, гончары, камнерезы, валяльщики. Не музей — те, кого можно встретить в субботу на ярмарке.', img: 'assets/photo/founders-with-master.jpg' },
  ];
  return (
    <section className="sec-pad" id="community" data-screen-label="ACT 1.4 Community">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">08</span><span className="sep">|</span>10 000 лет на одной долине</div>
          <h2 className="display h-display-l">
            Скифы. Казаки. Староверы.<br/>
            <em className="redword">Живые легенды места.</em>
          </h2>
        </div>
        <div className="pc-eras-grid">
          {eras.map((e, i) => (
            <article className="pc-era-card" key={i}>
              <div className="pc-era-photo" style={{backgroundImage:`url('${e.img}')`}}/>
              <div className="pc-era-body">
                <div className="pc-era-era">{e.era}</div>
                <div className="pc-era-who">{e.who}</div>
                <div className="pc-era-t">{e.t}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.PCCommunity = PCCommunity;

// ───────────────────────── ACT 1.5 · PEOPLE — «Чарыш это прежде всего люди» ─────────────────────────
function PCPeople() {
  return (
    <section className="sec-pad pc-people-section" id="people" data-screen-label="ACT 1.5 People">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">06.5</span><span className="sep">|</span>Чарыш — это люди</div>
          <h2 className="display h-display-l">
            Дома, реки и&nbsp;горы — это <em className="redword">оправа</em>.<br/>
            Главное в&nbsp;Чарыше — кто рядом.
          </h2>
        </div>
        <p className="lead" style={{opacity:.78, maxWidth:'62ch', marginBottom:48}}>
          Сюда не&nbsp;приезжают «отдохнуть от&nbsp;людей». Сюда приезжают за&nbsp;настоящими людьми — тем, кого в&nbsp;городе встретить почти невозможно. Местные мастера, казаки, староверы, дети, которые знают слова к&nbsp;старым песням. И&nbsp;соседи, которые тебя ждали.
        </p>
        <div className="pc-people-grid">
          <figure className="pc-people-fig pc-people-fig-hero">
            <img src="assets/photo/people-rafting-group.jpg" alt="Сплав на Чарыше — большая группа в спасжилетах"/>
            <figcaption>01 — Сплав по Чарышу. Свои, привезённые своими.</figcaption>
          </figure>
          <figure className="pc-people-fig pc-people-fig-2">
            <img src="assets/photo/people-folk-dance.jpg" alt="Хоровод в народных костюмах"/>
            <figcaption>02 — Хоровод. Не реконструкция — живая традиция.</figcaption>
          </figure>
          <figure className="pc-people-fig pc-people-fig-3">
            <img src="assets/photo/people-father-daughter.jpg" alt="Отец с дочерью"/>
            <figcaption>03 — Между поколениями.</figcaption>
          </figure>
          <figure className="pc-people-fig pc-people-fig-4">
            <img src="assets/photo/people-girls-folk.jpg" alt="Три девочки в народных костюмах на сене"/>
            <figcaption>04 — Девичьи разговоры на сеновале.</figcaption>
          </figure>
          <figure className="pc-people-fig pc-people-fig-5">
            <img src="assets/photo/people-craft-circle.jpg" alt="Группа женщин с обрядовыми куклами"/>
            <figcaption>05 — Мастер-класс по обрядовым куклам.</figcaption>
          </figure>
          <figure className="pc-people-fig pc-people-fig-6">
            <img src="assets/photo/people-horseback.jpg" alt="Конная прогулка в горах"/>
            <figcaption>06 — Конная тропа над долиной.</figcaption>
          </figure>
          <figure className="pc-people-fig pc-people-fig-7">
            <img src="assets/photo/denis-with-dog.jpg" alt="Денис с щенком на ферме"/>
            <figcaption>07 — Денис со щенком. Местные, к которым возвращаются.</figcaption>
          </figure>
        </div>
        <div className="pc-people-quote">
          <div className="pc-people-quote-mark">«</div>
          <div className="pc-people-quote-text">
            Резидентов сюда отбираем не&nbsp;по&nbsp;размеру кошелька. <em className="redword">По&nbsp;тому, как человек смотрит на&nbsp;закат и&nbsp;на&nbsp;соседского ребёнка.</em>
          </div>
          <div className="pc-people-quote-by">— Светлана Антонова, со-основатель</div>
        </div>
      </div>
    </section>
  );
}
window.PCPeople = PCPeople;

// ───────────────────────── ACT 2 · Retreat-center showcase (full-bleed render) ─────────────────────────
function PCRetreatShowcase() {
  return (
    <section id="retreat" data-screen-label="ACT 2 Retreat showcase">
      <div className="place-photo pc-showcase-photo" style={{ backgroundImage: "url('assets/photo/object-retreat.jpg')" }}>
        <div className="place-photo-overlay" />
        <div className="container place-photo-frame">
          <div className="crumb" style={{ color: '#fff' }}>
            <span className="num">20</span><span className="sep">|</span>Опция&nbsp;3<span className="sep">|</span>Станьте&nbsp;акционером
          </div>
          <h2 className="display h-display-l place-photo-h">
            <em className="redword-light">Ретрит и&nbsp;MICE комплекс</em><br/>
            Резиденции Чарыш — на&nbsp;48&nbsp;номеров.<br/>
            Запуск — весна 2027.
          </h2>
          <div className="place-photo-cap">Климатолечебная зона · моралы · фитотравы · своё органическое сырьё · банный комплекс как wellness-якорь</div>
        </div>
      </div>
    </section>
  );
}
window.PCRetreatShowcase = PCRetreatShowcase;

// ───────────────────────── ACT 3.0 · Three forms — the FORK ─────────────────────────
function PCThreeForms() {
  const forms = [
    {
      letter: 'А',
      tag: 'Места размещения',
      title: 'Участок + подряд + сдача',
      sub: 'Модульный или капитальный дом',
      bullets: [
        'Покупка участка 6–7 соток + подряд на дом',
        'Модульный — 4 месяца · капитальный — 9 месяцев',
        '50% дохода через УК · окупаемость от 3.5 лет',
      ],
      ticket: 'от 14 млн ₽',
      cta: 'Каталог домов и подряд',
      href: '#construction',
      tone: 'paper',
    },
    {
      letter: 'Б',
      tag: 'Тематический инвестор',
      title: 'Доля в инфраструктурном объекте',
      sub: 'Отдельное ООО под объект',
      bullets: [
        'Приоритет: банный комплекс, ресторан, прокат',
        'Доля операционной прибыли объекта',
        'Со-управление и бренд проекта',
      ],
      ticket: 'индивидуально',
      cta: 'Объекты для входа',
      href: '#objects',
      tone: 'warm',
    },
    {
      letter: 'В',
      tag: 'Акции АО',
      title: 'Акционер курорта',
      sub: 'Дивиденды + рост стоимости акций',
      bullets: [
        'АО · 49% капитала размещается',
        'Дивиденды 10–15% годовых',
        'Рост акций ×2 за 5 лет · выкуп',
      ],
      ticket: 'от 500 000 ₽',
      cta: 'Условия размещения',
      href: '#equity',
      tone: 'ink',
    },
    {
      letter: 'Г',
      tag: 'Эксклюзивный партнёр',
      title: 'Стратегический партнёр проекта',
      sub: 'Существенное влияние на капитализацию',
      bullets: [
        'Тот, кто может и&nbsp;готов существенно повлиять на&nbsp;капитализацию проекта',
        'Располагает соответствующими ресурсами — капитал, экспертиза, связи',
        'Индивидуальные условия и&nbsp;структура сделки',
      ],
      ticket: 'индивидуально',
      cta: 'Запросить персональные условия',
      href: '#form',
      tone: 'gold',
    },
  ];
  return (
    <section className="sec-pad" id="forms-fork" data-screen-label="ACT 3 Three Forms Fork">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">14</span><span className="sep">|</span>Четыре&nbsp;формы&nbsp;участия</div>
          <h2 className="display h-display-l">
            Вход — это <em className="redword">выбор</em>,<br/>
            а не покупка.
          </h2>
        </div>
        <p className="lead" style={{opacity:.78, maxWidth:'62ch', marginBottom:48}}>
          Резиденция Тишины открыта для&nbsp;трёх форм участия одновременно. Можно зайти в&nbsp;одну, можно совмещать. Эта развилка — для&nbsp;ориентации; на&nbsp;личной презентации проектируем под&nbsp;ваш случай.
        </p>
        <div className="pc-forms-grid">
          {forms.map((f, i) => (
            <article className={`pc-form-card pc-form-tone-${f.tone}`} key={i}>
              <div className="pc-form-letter">{f.letter}</div>
              <div className="pc-form-tag">{f.tag}</div>
              <h3 className="pc-form-title">{f.title}</h3>
              <div className="pc-form-sub">{f.sub}</div>
              <ul className="pc-form-list">
                {f.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              <div className="pc-form-ticket">
                <span className="pc-form-ticket-l">Минимальный вход</span>
                <span className="pc-form-ticket-v">{f.ticket}</span>
              </div>
              <a href={f.href} className="btn pc-form-cta">
                {f.cta} <span className="arrow">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.PCThreeForms = PCThreeForms;

// ───────────────────────── ACT 3.B · Form B — Specific infrastructure objects ─────────────────────────
function PCFormBObjects() {
  const objects = [
    {
      img: 'assets/photo/object-banya.jpg',
      tag: 'Приоритет 2026',
      name: 'Recovery medi-spa',
      sub: 'Wellness-якорь курорта · восстановление тела и нервной системы',
      d: 'Программы recovery на&nbsp;стыке местных бальнеологических факторов и&nbsp;современных протоколов. Алтайские травы, маральи ванны, ИК-сауны, криозоны, IV-терапия, остеопатия.',
      facts: [
        ['Площадь', '~600 м²'],
        ['Целевая загрузка', '95% сезон'],
        ['Старт операции', '2027'],
      ],
    },
    {
      img: 'assets/photo/food-cauliflower.jpg',
      tag: 'Приоритет 2026',
      name: 'Ресторан здорового питания',
      sub: 'Живая еда · переработка местного сырья · доставка по&nbsp;посёлку',
      d: 'Якорный объект ретрит-комплекса и&nbsp;точка притяжения для&nbsp;резидентов курорта. Производственный цех — часть концепции.',
      facts: [
        ['Концепция', 'Живая еда + локальное'],
        ['Сырьё', 'свой кооператив'],
        ['Старт операции', '2027'],
      ],
    },
    {
      img: 'assets/photo/object-rental-bikes.png',
      tag: 'Приоритет 2026',
      name: 'Центр проката',
      sub: 'Велосипеды · SUP · снегоходы · лыжи · хранение личной техники · маршруты с&nbsp;гидом',
      d: 'Сервисный объект, замыкающий 365-дневный сценарий жизни. Стабильный трафик резидентов и&nbsp;гостей ретрита.',
      facts: [
        ['Сезонность', '12 месяцев'],
        ['Целевая аудитория', 'дом + ретрит'],
        ['Старт операции', '2027'],
      ],
    },
    {
      img: 'assets/photo/object-coworking-steford.jpg',
      tag: 'Приоритет 2026',
      name: 'Коворкинг',
      sub: 'Деловое пространство в&nbsp;общественном центре · удалённая работа с&nbsp;видом на&nbsp;долину',
      d: 'Архитектура в&nbsp;языке коливинга ЗОВ + Stafford-референс: дерево + стекло + металлические акценты. Закрытые переговорные, общий зал, кофе-точка, видовые балконы.',
      facts: [
        ['Площадь', '~250 м²'],
        ['Целевая аудитория', 'резиденты + гости ретрита'],
        ['Старт операции', '2027'],
      ],
    },
  ];
  return (
    <section className="sec-pad" id="objects" data-screen-label="ACT 3.B Objects">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">19</span><span className="sep">|</span>Станьте&nbsp;нашим&nbsp;тематическим&nbsp;партнёром</div>
          <h2 className="display h-display-l">
            Станьте нашим <em className="redword">тематическим партнёром</em>.<br/>
            Отдельное ООО, отдельная экономика.
          </h2>
        </div>
        <p className="lead" style={{opacity:.78, maxWidth:'62ch', marginBottom:48}}>
          Каждый объект ретрит-комплекса — отдельное ООО, со своим бизнес-планом, своим P&amp;L и&nbsp;своим минимальным чеком. Со-партнёр получает долю операционной прибыли объекта.
        </p>
        <div className="pc-objects-grid">
          {objects.map((o, i) => (
            <article className="pc-object-card" key={i}>
              <div className="pc-object-photo" style={{backgroundImage:`url('${o.img}')`}}>
                <div className="pc-object-num">{String(i+1).padStart(2,'0')}</div>
                <div className="pc-object-tag">{o.tag}</div>
              </div>
              <div className="pc-object-body">
                <h3 className="pc-object-name">{o.name}</h3>
                <div className="pc-object-sub" dangerouslySetInnerHTML={{__html: o.sub}}/>
                <p className="pc-object-d" dangerouslySetInnerHTML={{__html: o.d}}/>
                <div className="pc-object-facts">
                  {o.facts.map(([l, v], j) => (
                    <div className="pc-object-fact" key={j}>
                      <span className="pc-object-fact-l">{l}</span>
                      <span className="pc-object-fact-v">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="houses-foot" style={{marginTop:48}}>
          <a href="#form" className="btn btn-primary">
            Запросить P&amp;L по объектам <span className="arrow">→</span>
          </a>
          <span className="houses-foot-note">Минимальный вход обсуждается индивидуально под&nbsp;каждый объект</span>
        </div>
      </div>
    </section>
  );
}
window.PCFormBObjects = PCFormBObjects;

// ───────────────────────── ACT 3.A · Construction Timeline — модульный vs капитальный ─────────────────────────
function PCConstructionTimeline() {
  const types = [
    {
      tag: 'Модульный дом',
      months: 4,
      monthsLabel: 'месяца',
      sub: 'Быстрый вход в курорт',
      img: 'assets/photo/modular-house.webp',
      d: 'Заводская сборка под контролем единого подрядчика. Привозится секциями, монтируется на готовом фундаменте.',
      points: [
        'Заводское качество — ниже сезонная зависимость',
        'Каркасно-соломенная технология (100% эко-утеплитель)',
        'Быстрый ввод в эксплуатацию и сдачу через УК',
        'Старт окупаемости — уже в первый сезон',
      ],
    },
    {
      tag: 'Капитальный дом',
      months: 9,
      monthsLabel: 'месяцев',
      sub: 'Дом «на поколения» · для семьи нового времени с детьми 8+',
      img: 'assets/photo/house-belyak.png',
      d: 'Основа — <strong>соломенно-каркасная технология</strong>: полностью экологична, технологична, восстанавливает здоровье человека. Стационарный дом с&nbsp;полноценным фундаментом и&nbsp;инженерией. Подряд от&nbsp;команды проекта на&nbsp;месте.',
      points: [
        'Соломенно-каркасная технология · 100% эко-утеплитель',
        'Долговечная конструкция, расширение возможно',
        'Любая планировка под индивидуальный запрос',
        'Высшая ликвидность при перепродаже',
        'Полное соответствие архитектурному регламенту',
      ],
    },
  ];
  return (
    <section className="sec-pad" id="construction" data-screen-label="ACT 3.A Construction Timeline">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">17</span><span className="sep">|</span>Опция 1 · Участок + подряд</div>
          <h2 className="display h-display-l">
            Участок + подряд = <em className="redword">ключи в&nbsp;руках</em>.<br/>
            Два срока, одна ответственность.
          </h2>
        </div>
        <p className="lead" style={{opacity:.78, maxWidth:'62ch', marginBottom:48}}>
          Вы&nbsp;покупаете участок 6–7 соток и&nbsp;заказываете дом подрядом у&nbsp;команды проекта. Не&nbsp;ищете прорабов и&nbsp;поставщиков — приезжаете и&nbsp;живёте. Срок — ваш выбор: модульный за&nbsp;4&nbsp;месяца или&nbsp;капитальный за&nbsp;9.
        </p>
        <div className="pc-construction-grid">
          {types.map((t, i) => (
            <article className="pc-construction-card" key={i}>
              <div className="pc-construction-photo" style={{backgroundImage:`url('${t.img}')`}}>
                <div className="pc-construction-months">
                  <span className="pc-construction-months-n">{t.months}</span>
                  <span className="pc-construction-months-u">{t.monthsLabel}</span>
                </div>
              </div>
              <div className="pc-construction-body">
                <div className="pc-construction-tag">{t.tag}</div>
                <div className="pc-construction-sub">{t.sub}</div>
                <p className="pc-construction-d" dangerouslySetInnerHTML={{__html: t.d}}/>
                <ul className="pc-construction-list">
                  {t.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="pc-construction-foot">
          <div className="pc-construction-foot-h">Что входит в подряд</div>
          <div className="pc-construction-foot-grid">
            <div><strong>01 · Участок</strong> в&nbsp;границах посёлка с&nbsp;коммуникациями (электричество, вода, оптоволокно, септик глубокой очистки)</div>
            <div><strong>02 · Проект</strong> по&nbsp;архитектурному регламенту бюро LH47</div>
            <div><strong>03 · Строительство</strong> — единый подрядчик и&nbsp;команда на&nbsp;месте</div>
            <div><strong>04 · Сдача через УК</strong> — мебель, текстиль, сервис, отчётность с&nbsp;первого месяца</div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.PCConstructionTimeline = PCConstructionTimeline;

// ───────────────────────── ACT 3.D · ANNOUNCE — КФХ как отдельный проект ─────────────────────────
function PCAnnounceFarming() {
  return (
    <section className="sec-pad sec-warm" id="farming-announce" data-screen-label="ACT 3.D Announce — КФХ">
      <div className="container">
        <div className="pc-announce-frame">
          <div className="crumb"><span className="num">22</span><span className="sep">|</span>Анонс · отдельный проект</div>
          <h2 className="display h-display-l pc-announce-h">
            Земли под <em className="redword">крестьянско-фермерское хозяйство</em><br/>
            — следующая инвестиционная волна.
          </h2>
          <p className="pc-announce-lead">
            Параллельно с&nbsp;курортом мы&nbsp;готовим отдельный проект — <strong>КФХ</strong> на&nbsp;собственных землях. Кооператив резидентов, продовольственная независимость посёлка, ресторан ЗОЖ на&nbsp;своём сырье, локальная переработка. Это не&nbsp;часть текущего размещения — это самостоятельный актив, который мы&nbsp;откроем для&nbsp;инвесторов отдельно.
          </p>
          <div className="pc-announce-grid">
            <div className="pc-announce-cell">
              <div className="pc-announce-cell-l">Площадь под КФХ</div>
              <div className="pc-announce-cell-v">500 га</div>
              <div className="pc-announce-cell-d">Выщелочные чернозёмы — один из&nbsp;самых плодородных типов почв в&nbsp;России. Теплицы, молочное животноводство с&nbsp;крафтовой сыроварней, рыбное хозяйство, заготовка алтайских трав.</div>
            </div>
            <div className="pc-announce-cell">
              <div className="pc-announce-cell-l">Минимальный участок</div>
              <div className="pc-announce-cell-v">от 2,6 га</div>
              <div className="pc-announce-cell-d">Нарезка под индивидуальное фермерское хозяйство. Земля оформляется в&nbsp;собственность инвестора, направление деятельности — по&nbsp;согласованию с&nbsp;кооперативом.</div>
            </div>
            <div className="pc-announce-cell">
              <div className="pc-announce-cell-l">Минимальный вход</div>
              <div className="pc-announce-cell-v">от 1 млн ₽</div>
              <div className="pc-announce-cell-d">Самый доступный порог среди форм участия. Долевое участие резидентов посёлка как&nbsp;приоритет; внешние тематические инвесторы — по&nbsp;индивидуальным условиям.</div>
            </div>
            <div className="pc-announce-cell">
              <div className="pc-announce-cell-l">Когда открывается</div>
              <div className="pc-announce-cell-v">2027–2028</div>
              <div className="pc-announce-cell-d">Запуск синхронно с&nbsp;вводом ретрит-комплекса и&nbsp;первой очереди резиденций. Подробности — на&nbsp;запрос.</div>
            </div>
          </div>
          <div className="pc-announce-cta-row">
            <a href="#form" className="btn btn-primary">
              Получить инвест-меморандум по КФХ <span className="arrow">→</span>
            </a>
            <span className="pc-announce-meta">Ранний доступ для&nbsp;участников Private Camp 2</span>
          </div>
        </div>
      </div>
    </section>
  );
}
window.PCAnnounceFarming = PCAnnounceFarming;

// ───────────────────────── ACT 3.C · Form C — AO Equity ─────────────────────────
function PCFormCEquity() {
  const stats = [
    { v: '2 500', u: '₽',     l: 'стоимость 1 акции',          sub: 'Номинал при размещении' },
    { v: '500',   u: 'тыс ₽', l: 'минимальный вход',           sub: 'Самый доступный порог среди форм участия' },
    { v: '80',    u: '%',     l: 'обыкновенные акции',         sub: 'Участвуют в распределении 80% прибыли' },
    { v: '20',    u: '%',     l: 'привилегированные акции',    sub: 'Гарантированный доход 20% от прибыли' },
    { v: '285',   u: '%',     l: 'рост стоимости акций',       sub: 'За 5 лет · базовый сценарий' },
    { v: 'от 2 850', u: '₽',  l: 'преимущественное право выкупа', sub: 'Договор заключается сразу · ориентировочная цена выкупа за акцию' },
  ];
  const advantages = [
    'Юридическая структура: акционерное общество (АО) — российское публичное право, понятный регулятор',
    'Привилегированные акции — приоритет в получении дивидендов; обыкновенные — голос на собрании акционеров',
    'Преимущественное право выкупа — договор заключается сразу, заранее зафиксированный механизм выхода',
    'Целевое использование средств — строительство всей ретрит-зоны «Резиденция Чарыш»',
  ];
  // 3 ключевых объекта ретрит-зоны: ретрит-центр, банный, 4 ретрит-дома
  const objects = [
    {
      tag: 'Сердце',
      name: 'Ретрит-центр',
      img: 'assets/photo/object-retreat.jpg',
      d: 'Атмосферный павильон у&nbsp;реки. Залы для&nbsp;групповых практик, чайная, лобби, чтения, тишины.',
      facts: [['Холлы и залы', '~400 м²'], ['Строительство', '2027 · ввод 2028']],
      size: 'hero',
    },
    {
      tag: 'Тело и пар',
      name: 'Банный комплекс',
      img: 'assets/photo/object-banya.jpg',
      d: 'Три бани разных традиций — Алтайская (главная), Русичи, Горная казацкая. Купели: родниковая + подогреваемая.',
      facts: [['Главная баня', '35–40 чел'], ['+ 2 малые бани', '48 + 35 м²']],
      size: 'wide',
    },
    {
      tag: 'Ретритные группы',
      name: '4 ретрит-дома',
      img: 'assets/photo/object-coliving.jpg',
      d: 'Двухэтажные гостевые дома для&nbsp;групп с&nbsp;наставниками. Эскизный проект готов.',
      facts: [['Номеров', '4 × 8 = 32'], ['До', '16 чел/дом']],
      size: 'full',
    },
    {
      tag: 'Уединение',
      name: '16 модульных домов',
      img: 'assets/photo/modular-house-16.webp',
      d: '11 одиночных + 5 дуплексов в&nbsp;лесной части ретрит-зоны. Для&nbsp;индивидуального проживания участников ретритов — тишина, природа, личный темп.',
      facts: [['Одиночных', '11'], ['Дуплексов', '5'], ['Срок монтажа', '~4 месяца/дом']],
      size: 'full',
    },
  ];
  return (
    <section className="sec-pad sec-dark" id="equity" data-screen-label="ACT 3.C Equity AO">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">21</span><span className="sep">|</span>Стать&nbsp;сонаследником</div>
          <h2 className="display h-display-l">
            Войдите в&nbsp;долю <em className="redword-light">Резиденции Чарыш</em>.<br/>
            Строительство 2027 · ввод в&nbsp;эксплуатацию 2028.
          </h2>
        </div>
        <p className="lead" style={{opacity:.78, maxWidth:'64ch', marginBottom:24}}>
          Самый тёплый порог входа — от&nbsp;500&nbsp;000&nbsp;₽. Деньги совладельцев строят всю ретрит-зону: ретрит-центр, банный комплекс, ретрит-дома и&nbsp;модульные дома в&nbsp;лесу. Ниже — условия и&nbsp;четыре объекта, в&nbsp;которые вы&nbsp;входите.
        </p>
        <div className="pc-equity-firstround">
          <span className="pc-equity-firstround-l">Первый объём привлекаемых инвестиций</span>
          <span className="pc-equity-firstround-v">300 млн ₽</span>
        </div>

        {/* 6 финансовых условий компактно */}
        <div className="market-grid">
          {stats.map((s, i) => (
            <div className="market-cell" key={i}>
              <div className="market-num">{String(i+1).padStart(2,'0')}</div>
              <div>
                <span className="market-v">{s.v}</span>
                {s.u && <span className="market-u">{s.u}</span>}
              </div>
              <div className="market-l">{s.l}</div>
              <div className="market-src" style={{textTransform:'none', letterSpacing:0, opacity:.7, marginTop:'auto'}}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Что строит АО — 4 объекта в равной 2×2 сетке */}
        <div className="pc-retreat-showcase-h">Четыре объекта ретрит-зоны</div>
        <div className="pc-equity-objects-2x2">
          {objects.map((o, i) => (
            <article className="pc-equity-obj-card" key={i}>
              <div className="pc-equity-obj-photo" style={{backgroundImage:`url('${o.img}')`}}>
                <div className="pc-equity-obj-num">{String(i+1).padStart(2,'0')}</div>
                <div className="pc-equity-obj-tag">{o.tag}</div>
              </div>
              <div className="pc-equity-obj-body">
                <h4 className="pc-equity-obj-name">{o.name}</h4>
                <p className="pc-equity-obj-d" dangerouslySetInnerHTML={{__html: o.d}}/>
                <div className="pc-equity-obj-facts">
                  {o.facts.map(([k, v], j) => (
                    <div className="pc-equity-obj-fact" key={j}>
                      <span className="pc-equity-obj-fact-l">{k}</span>
                      <span className="pc-equity-obj-fact-v">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="pc-equity-foot-block">
          <div className="pc-equity-foot-h">Юридическая структура и&nbsp;ликвидность</div>
          <ul className="pc-equity-list pc-equity-list-2col">
            {advantages.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
          <div className="pc-equity-foot-actions">
            <a href="#form" className="btn btn-light">
              Запросить условия размещения <span className="arrow">→</span>
            </a>
            <span className="pc-equity-foot-meta">Строительство 2027 · ввод в&nbsp;эксплуатацию 2028</span>
          </div>
        </div>
      </div>
    </section>
  );
}
window.PCFormCEquity = PCFormCEquity;

// ───────────────────────── 14 · Bonus for Private Camp 2 participants ─────────────────────────
function PCBonus() {
  return (
    <section className="sec-pad pc-bonus-section" id="bonus" data-screen-label="14 Private Camp Bonus">
      <div className="container">
        <div className="pc-bonus-frame">
          <div className="crumb" style={{color:'rgba(255,255,255,.65)'}}>
            <span className="num">27</span><span className="sep">|</span>Эксклюзив&nbsp;для&nbsp;Private&nbsp;Camp&nbsp;2
          </div>
          <h2 className="display h-display-l pc-bonus-h">
            Персональные условия —<br/>
            <em className="redword-light">Инвест-тур</em> и <em className="redword-light">Душа-тур</em>.<br/>
            Только для участников.
          </h2>
          <p className="pc-bonus-lead">
            Два формата визита, оба на&nbsp;индивидуальных условиях для&nbsp;Private&nbsp;Camp 2. Инвест-тур — для&nbsp;тех, кто рассматривает покупку дома или&nbsp;долю в&nbsp;инфраструктуре. Душа-тур — чтобы влюбиться в&nbsp;Чарыш всей семьёй и&nbsp;понять, ваше ли&nbsp;это место.
          </p>
          <div className="pc-bonus-tours">
            <article className="pc-bonus-tour pc-bonus-tour-invest" id="visit-invest">
              <div className="pc-bonus-tour-photo" style={{backgroundImage:"url('assets/photo/nature-expedition.jpg')"}}/>
              <div className="pc-bonus-tour-body">
                <div className="pc-bonus-tour-tag">Инвест-тур · 2–3 дня</div>
                <h3 className="pc-bonus-tour-h">Инвест-тур</h3>
                <p className="pc-bonus-tour-d">
                  Точечная программа с&nbsp;командой основателей. Земля, мастер-план LH47, дом в&nbsp;стройке, финмодель, юр. пакет — всё на&nbsp;месте.
                </p>
                <ul className="pc-bonus-tour-list">
                  <li>Команда основателей сопровождает лично — не менеджер по продажам</li>
                  <li>Прогулка по&nbsp;72&nbsp;га · выбор участка с&nbsp;видом</li>
                  <li>Финмодель под ваш сценарий, ЕГРН, генплан, договор</li>
                  <li>Ужин у&nbsp;реки, баня, конная прогулка — чтобы прочувствовать</li>
                </ul>
                <div className="pc-bonus-tour-foot">
                  <a href="#form" className="btn btn-light">
                    Запросить&nbsp;инвест-тур <span className="arrow">→</span>
                  </a>
                  <span className="pc-bonus-tour-meta">Для покупателей дома и со-партнёров</span>
                </div>
              </div>
            </article>
            <article className="pc-bonus-tour pc-bonus-tour-love" id="visit-love">
              <div className="pc-bonus-tour-photo" style={{backgroundImage:"url('assets/photo/nature-misty-bank.jpg')"}}/>
              <div className="pc-bonus-tour-body">
                <div className="pc-bonus-tour-tag">Душа-тур · 3 или 5 дней</div>
                <h3 className="pc-bonus-tour-h">Душа-тур</h3>
                <p className="pc-bonus-tour-d">
                  Семейный «очерышевывающий» тур. Знакомство с&nbsp;местными мастерами, хороводы, сплавы, баня, ужин с&nbsp;местными жителями.
                </p>
                <ul className="pc-bonus-tour-list">
                  <li>Программа собирается под&nbsp;вашу семью или&nbsp;группу</li>
                  <li>Сплав по&nbsp;Чарышу, рыбалка, конные прогулки</li>
                  <li>Хороводы, керамика, обрядовые куклы — живая традиция</li>
                  <li>Тёплая встреча у&nbsp;костра, чай у&nbsp;местных</li>
                </ul>
                <div className="pc-bonus-tour-foot">
                  <a href="#form" className="btn btn-light">
                    Запросить&nbsp;Душа-тур <span className="arrow">→</span>
                  </a>
                  <span className="pc-bonus-tour-meta">Для семей и тематических партнёров</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
window.PCBonus = PCBonus;

// ───────────────────────── 15 · Final CTA ─────────────────────────
function PCFinalCTA() {
  return (
    <section className="sec-pad" id="form" data-screen-label="29 Final CTA">
      <div className="container">
        <div className="pc-final">
          <div className="crumb"><span className="num">28</span><span className="sep">|</span>Следующий&nbsp;шаг</div>
          <h2 className="display h-display-l">
            Вы уже <em className="redword">очарышованы</em>?<br/>
            Покажем место, дома, расчёты доходности.
          </h2>
          <p className="pc-final-lead">
            Видеозвонок · 60 минут · любой мессенджер. Бесплатно, без обязательств, без скриптов продаж. Давайте дышать вместе. Чарыш ждёт вас.
          </p>
          <div className="pc-final-contacts">
            <div className="contact-person">
              <div>Вячеслав Немцов · со-основатель</div>
              <div><a href="tel:+79017168776">+7 901 716-87-76</a> · <a href="https://t.me/nemtsovvyacheslav">@nemtsovvyacheslav</a></div>
            </div>
            <div className="contact-person">
              <div>Светлана Антонова · со-основатель</div>
              <div><a href="tel:+79037744042">+7 903 774-40-42</a> · <a href="https://t.me/santagiving">@santagiving</a></div>
            </div>
            <div className="contact-person">
              <div>Андрей Пережогин · развитие и инвестиции</div>
              <div><a href="tel:+79015888858">+7 901 588-88-58</a> · <a href="https://t.me/andreiperezhoginofficial">@andreiperezhoginofficial</a></div>
            </div>
            <div className="contact-person">
              <div>Андрей Немцев · управляющий партнёр</div>
              <div><a href="tel:+79635191490">+7 963 519-14-90</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.PCFinalCTA = PCFinalCTA;
