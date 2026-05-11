// Charysh — Family Camp 23–27 июля · детско-родительская смена
// Speaker landing for the family/parent-child retreat curated by Нина (Marisabelь)
// + Ольга Щербакова (детская Лила).

// ─────────────────────────── Header ───────────────────────────
function FCHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { id: 'why',       label: 'Зачем' },
    { id: 'program',   label: 'Программа' },
    { id: 'curators',  label: 'Кураторы' },
    { id: 'location',  label: 'Место' },
    { id: 'tickets',   label: 'Условия' },
  ];
  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} data-screen-label="FC Header">
      <a href="#top" className="brand" aria-label="Family Camp Чарыш">
        <span className="brand-mark">Ч</span>
        <span className="brand-word">family&nbsp;camp&nbsp;чарыш</span>
      </a>
      <nav className="site-nav">
        {links.map(l => <a key={l.id} href={`#${l.id}`} className="nav-link">{l.label}</a>)}
      </nav>
      <a href="#form" className="btn btn-primary header-cta">
        Забронировать <span className="arrow">→</span>
      </a>
    </header>
  );
}
window.FCHeader = FCHeader;

// ─────────────────────────── Hero ───────────────────────────
function FCHero() {
  return (
    <section className="hero hero-A" id="top" data-screen-label="01 FC Hero">
      <div className="hero-photo" style={{ backgroundImage: "url('assets/photo/people-rafting-group.jpg')" }} />
      <div className="hero-photo-overlay" />
      <div className="hero-frame">
        <div className="hero-top">
          <div className="crumb" style={{ color: '#fff' }}>
            <span className="num">01</span><span className="sep">|</span>
            Family Camp Чарыш<span className="sep">|</span>23–27 июля 2026
          </div>
          <div className="hero-meta">5 дней · ~40 мест · усадьба Серебренникова</div>
        </div>
        <div className="hero-body">
          <h1 className="display h-display-xl hero-h1">
            Очерышеваться<br/>всей&nbsp;семьёй
          </h1>
          <div className="hero-sub">
            Не&nbsp;туризм. Не&nbsp;«отдых от&nbsp;ребёнка». Пять&nbsp;дней совместного опыта в&nbsp;тупиковой долине Чарыша. Хороводы, мастера, баня, сплав, костёр, дрова и&nbsp;супы, сваренные вместе. Возвращаешься семьёй, а&nbsp;не&nbsp;уставшим менеджером.
          </div>
        </div>
        <div className="hero-bottom">
          <div className="hero-ctas">
            <a href="#form" className="btn btn-primary">
              Забронировать&nbsp;место <span className="arrow">→</span>
            </a>
            <a href="#program" className="btn btn-light">
              Посмотреть&nbsp;программу <span className="arrow">→</span>
            </a>
          </div>
          <div className="hero-tagline">10&nbsp;МИНУТ&nbsp;СЧАСТЬЯ&nbsp;В&nbsp;ДЕНЬ</div>
        </div>
      </div>
    </section>
  );
}
window.FCHero = FCHero;

// ─────────────────────────── Manifest «Зачем» ───────────────────────────
function FCWhy() {
  return (
    <section className="sec-pad" id="why" data-screen-label="02 FC Why">
      <div className="container">
        <div className="manifest-grid">
          <div className="manifest-left">
            <div className="crumb"><span className="num">02</span><span className="sep">|</span>Зачем</div>
            <h2 className="display h-display-l manifest-h">
              Не&nbsp;курорт. <em className="redword">Совместный опыт.</em>
            </h2>
          </div>
          <div className="manifest-right">
            <p className="lead">
              В&nbsp;городе родители и&nbsp;дети живут параллельно: школа, работа, бытовые задачи. Здесь мы&nbsp;собираем семьи, чтобы они&nbsp;прожили <em className="redword">какой-то совместный красивый опыт настоящества</em>. Не&nbsp;«отдохнуть от&nbsp;ребёнка», а&nbsp;вместе с&nbsp;ним поколоть дрова, сварить суп, потанцевать хоровод, помолчать у&nbsp;костра.
            </p>
            <div className="format-pair">
              <div className="format-cell">
                <div className="format-h">Что забираете домой</div>
                <div className="format-t">Восстановленный контакт</div>
                <div className="format-d">Дети дружат, родители выдохнули, в&nbsp;семье — общая память. Не&nbsp;«я&nbsp;пережил отпуск», а&nbsp;«мы&nbsp;стали ближе».</div>
              </div>
              <div className="format-cell">
                <div className="format-h">Чего здесь нет</div>
                <div className="format-t">Анимации и SPA-программ</div>
                <div className="format-d">Никто не&nbsp;развлекает. Жизнь сама&nbsp;по&nbsp;себе и&nbsp;есть программа: природа, мастера, ремесло, баня.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.FCWhy = FCWhy;

// ─────────────────────────── Программа 5 дней ───────────────────────────
function FCProgram() {
  const days = [
    {
      d: 'День 1', date: '23 июля', t: 'Знакомство и хоровод',
      pts: [
        'Заезд, размещение в усадьбе Серебренникова',
        'Прогулка к реке, знакомство с долиной',
        'Хоровод-знакомство — за 15 минут все одна большая семья',
        'Ужин у костра с местными жителями',
      ],
    },
    {
      d: 'День 2', date: '24 июля', t: 'Гении места',
      pts: [
        'Встреча с мастером Александром — дровокол собственного изобретения',
        'Мастер-класс по обрядовым куклам',
        'Дети — у местных хозяек учиться печь хлеб',
        'Парная баня семьями · купель в реке',
      ],
    },
    {
      d: 'День 3', date: '25 июля', t: 'Река и природа',
      pts: [
        'Сплав по Чарышу (детские рафты, безопасность)',
        'Пикник на белом мраморе у реки',
        'Свободное время для чтения, сна, тишины',
        'Вечер: мифы Алтая и сказки староверов',
      ],
    },
    {
      d: 'День 4', date: '26 июля', t: 'Совместный быт',
      pts: [
        'Утро: дрова, костёр, общий завтрак',
        'Конная прогулка по тропам (под присмотром)',
        'Семейная игра «Детская Лила» с Ольгой Щербаковой',
        'Звёздное небо и ночные разговоры',
      ],
    },
    {
      d: 'День 5', date: '27 июля', t: 'Прощание и обещание',
      pts: [
        'Утренний круг: что забираем с собой',
        'Совместное приготовление обеда из местных продуктов',
        'Открытка от семьи — для следующего приезда',
        'Трансфер в Барнаул',
      ],
    },
  ];
  return (
    <section className="sec-pad sec-warm" id="program" data-screen-label="03 FC Program">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">03</span><span className="sep">|</span>Программа · 5 дней</div>
          <h2 className="display h-display-l">
            <em className="redword">Режиссура</em>, а не расписание.<br/>
            Пять дней совместной жизни.
          </h2>
        </div>
        <p className="lead" style={{opacity:.78, maxWidth:'62ch', marginBottom:48}}>
          Программа — драфт, не расписание. Каждый день строится так, чтобы было пространство и&nbsp;для&nbsp;общих ритуалов, и&nbsp;для&nbsp;тишины. Дети и&nbsp;родители друг от&nbsp;друга тоже отдыхают — это важно.
        </p>
        <div className="fc-program-grid">
          {days.map((d, i) => (
            <article className="fc-day" key={i}>
              <div className="fc-day-num">{d.d}</div>
              <div className="fc-day-date">{d.date}</div>
              <div className="fc-day-t">{d.t}</div>
              <ul className="fc-day-list">
                {d.pts.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.FCProgram = FCProgram;

// ─────────────────────────── Кураторы ───────────────────────────
function FCCurators() {
  return (
    <section className="sec-pad" id="curators" data-screen-label="04 FC Curators">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">04</span><span className="sep">|</span>Кураторы</div>
          <h2 className="display h-display-l">
            Те, кто <em className="redword">собирает</em><br/>
            этот опыт под&nbsp;вашу семью.
          </h2>
        </div>
        <div className="fc-curators-grid">
          <article className="fc-curator">
            <div className="fc-curator-photo" style={{backgroundImage:"url('assets/photo/people-craft-circle.jpg')"}}/>
            <div className="fc-curator-body">
              <div className="fc-curator-tag">Главный куратор · режиссура</div>
              <h3 className="fc-curator-name">Нина</h3>
              <p className="fc-curator-d">
                Восемь лет проекту «Новое родительство». Продюсер фестивалей и&nbsp;камерных событий для&nbsp;родителей и&nbsp;детей. Влюблена в&nbsp;Чарыш — приезжает не&nbsp;первый сезон. Знает всех мастеров и&nbsp;маршрутов, простраивает режиссуру так, чтобы получился настоящий совместный опыт.
              </p>
              <div className="fc-curator-meta">Команда Marisabelь · ABC Lab</div>
            </div>
          </article>
          <article className="fc-curator">
            <div className="fc-curator-photo" style={{backgroundImage:"url('assets/photo/people-girls-folk.jpg')"}}/>
            <div className="fc-curator-body">
              <div className="fc-curator-tag">Со-куратор · игропрактика</div>
              <h3 className="fc-curator-name">Ольга Щербакова</h3>
              <p className="fc-curator-d">
                Создатель <em>«Детской Лилы»</em>&nbsp;— игры-проводника для&nbsp;семьи. 12&nbsp;лет провела как&nbsp;игровой проводник, наблюдая, как&nbsp;через игру открываются и&nbsp;дети, и&nbsp;родители. Привезёт игру с&nbsp;собой — поиграем семьями.
              </p>
              <div className="fc-curator-meta">Автор «Детской Лилы»</div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
window.FCCurators = FCCurators;

// ─────────────────────────── Аудитория ───────────────────────────
function FCAudience() {
  const items = [
    'Семьи с детьми любого возраста — от 3 до 17',
    'Любящие искусство, путешествия, секретные локации',
    'Умеющие договариваться с детьми, а не подкупать их',
    'Чувствующие новое время — предприниматели, топ-менеджмент, творческие люди',
    'Готовые к жизни без анимации и шведского стола',
    'Те, кому важно «10 минут счастья в день» больше, чем «5★ all-inclusive»',
  ];
  return (
    <section className="sec-pad sec-warm" data-screen-label="05 FC Audience">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">05</span><span className="sep">|</span>Кто едет</div>
          <h2 className="display h-display-l">
            Не для всех. <em className="redword">Для своих.</em>
          </h2>
        </div>
        <ul className="fc-audience-list">
          {items.map((it, i) => (
            <li key={i}>
              <span className="fc-audience-num">{String(i+1).padStart(2,'0')}</span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
window.FCAudience = FCAudience;

// ─────────────────────────── Локация ───────────────────────────
function FCLocation() {
  return (
    <section id="location" data-screen-label="06 FC Location">
      <div className="place-photo" style={{ backgroundImage: "url('assets/photo/valley-overlook.jpg')", minHeight: '70vh' }}>
        <div className="place-photo-overlay" />
        <div className="container place-photo-frame">
          <div className="crumb" style={{ color: '#fff' }}>
            <span className="num">06</span><span className="sep">|</span>Место<span className="sep">|</span>Усадьба Серебренникова
          </div>
          <h2 className="display h-display-l place-photo-h">
            Тупиковая долина Чарыша.<br/>
            <em className="redword-light">Там, где нет случайных.</em>
          </h2>
          <div className="place-photo-cap">село Чарышское, Алтайский край · ~40 мест · 2 дома (хаус + коттедж)</div>
        </div>
      </div>
      <div className="container">
        <div className="climate-grid">
          {[
            { n: '40', u: 'мест', l: 'размещение в усадьбе', sub: '2 дома (хаус + коттедж), ~20 номеров' },
            { n: '4', u: 'ч',  l: 'лёт Москва — Барнаул',   sub: 'Ежедневные рейсы из всех хабов' },
            { n: '3,5', u: 'ч', l: 'трансфер Барнаул — Чарыш', sub: 'По хорошей дороге без пробок' },
            { n: '441', u: 'м', l: 'над уровнем моря',       sub: 'Клималечебная горная высота' },
          ].map((c, i) => (
            <div className="climate-cell" key={i}>
              <div className="climate-num">0{i+1}</div>
              <div className="climate-value">{c.n}<span className="climate-unit">{c.u}</span></div>
              <div className="climate-label">{c.l}</div>
              <div className="climate-sub">{c.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.FCLocation = FCLocation;

// ─────────────────────────── Условия и цена ───────────────────────────
function FCTickets() {
  return (
    <section className="sec-pad" id="tickets" data-screen-label="07 FC Tickets">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">07</span><span className="sep">|</span>Условия</div>
          <h2 className="display h-display-l">
            Места <em className="redword">ограничены</em>.<br/>
            Закрепляются предоплатой.
          </h2>
        </div>
        <div className="fc-tickets-grid">
          <div className="fc-ticket-cell">
            <div className="fc-ticket-tag">Даты</div>
            <div className="fc-ticket-v">23–27 июля</div>
            <div className="fc-ticket-d">5 дней / 4 ночи. Заезд 23-го утром, выезд 27-го после обеда.</div>
          </div>
          <div className="fc-ticket-cell">
            <div className="fc-ticket-tag">Размещение</div>
            <div className="fc-ticket-v">~40 мест</div>
            <div className="fc-ticket-d">Усадьба Серебренникова — 2 дома, ~20 номеров. Бронирование по очереди.</div>
          </div>
          <div className="fc-ticket-cell">
            <div className="fc-ticket-tag">Стоимость</div>
            <div className="fc-ticket-v">обсуждается</div>
            <div className="fc-ticket-d">Зависит от размера семьи и типа размещения. Первая встреча по Zoom — бесплатно.</div>
          </div>
          <div className="fc-ticket-cell">
            <div className="fc-ticket-tag">Бронирование</div>
            <div className="fc-ticket-v">10% предоплата</div>
            <div className="fc-ticket-d">Закрепляет место за вашей семьёй. Возвратная при отмене за 30 дней.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.FCTickets = FCTickets;

// ─────────────────────────── CTA + контакты ───────────────────────────
function FCFinalCTA() {
  const [sent, setSent] = React.useState(false);
  return (
    <section className="sec-pad sec-dark" id="form" data-screen-label="08 FC CTA">
      <div className="container">
        <div className="form-grid">
          <div className="form-left">
            <div className="crumb" style={{color:'rgba(255,255,255,.6)'}}><span className="num">08</span><span className="sep">|</span>Забронировать</div>
            <h2 className="display h-display-m" style={{color:'#fff'}}>
              Соберём <em className="redword-light">вашу семью</em><br/>
              в эту смену.
            </h2>
            <p style={{fontSize:'15px', lineHeight:1.6, opacity:.78, maxWidth:'42ch', marginTop:8, color:'#fff'}}>
              Оставьте контакты — Нина или&nbsp;Оля свяжутся в&nbsp;течение дня. Расскажем про&nbsp;программу, обсудим состав семьи и&nbsp;условия размещения. Без скриптов продаж — это&nbsp;разговор о&nbsp;вашей поездке.
            </p>
            <div className="form-contacts" style={{marginTop:24, color:'#fff', opacity:.85}}>
              <div className="contact-person">
                <div>Нина · куратор смены</div>
                <div style={{opacity:.7}}>контакт в Telegram — пришлём после заявки</div>
              </div>
              <div className="contact-person">
                <div>Ольга Щербакова · со-куратор · «Детская Лила»</div>
                <div style={{opacity:.7}}>контакт в Telegram — пришлём после заявки</div>
              </div>
            </div>
          </div>
          <form className="form-right" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <Field label="Имя родителя" placeholder="Иван Петров"/>
            <Field label="Состав семьи" placeholder="2 взрослых + 2 ребёнка (возраст детей)"/>
            <Field label="Телефон / Telegram" placeholder="+7 (___) ___-__-__ · @username"/>
            <Field label="Что для вас важно в этой поездке" placeholder="Контакт с детьми · отдых от города · искусство · ремёсла…" multi/>
            <div className="form-bottom">
              <label className="consent" style={{color:'#fff'}}>
                <span className="cbox" style={{borderColor:'rgba(255,255,255,.4)'}}><span className="ctick"/></span>
                Согласен на&nbsp;обработку персональных данных
              </label>
              <button type="submit" className="btn btn-primary" style={{background:'#fff', color:'var(--accent)', borderColor:'#fff'}}>
                {sent ? 'Спасибо! Свяжемся в течение дня.' : 'Забронировать место'} <span className="arrow">→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
window.FCFinalCTA = FCFinalCTA;
