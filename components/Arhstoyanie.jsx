// Charysh — Архстояние audience landing — bespoke sections
// Acoustic: среда для работы и отдыха + recovery (травы, маралы, климат, место силы)
// + три формы участия (дом+УК, тематический инвестор, акционер АО).
// Reuses PC* components from PrivateCamp.jsx for shared building blocks.

// ───────────────────────── Header (lightweight nav, Архстояние links) ─────────────────────────
function ARHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { id: 'recovery',    label: 'Recovery' },
    { id: 'work-rest',   label: 'Среда' },
    { id: 'architecture',label: 'Архитектура' },
    { id: 'forms-fork',  label: 'Участие' },
    { id: 'form',        label: 'Контакты' },
  ];
  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} data-screen-label="AR Header">
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
        Запросить&nbsp;презентацию <span className="arrow">→</span>
      </a>
    </header>
  );
}
window.ARHeader = ARHeader;

// ───────────────────────── Recovery potential — травы · маралы · климат · место силы ─────────────────────────
function ARRecovery() {
  const pillars = [
    {
      tag: 'Климатолечение',
      title: 'Микроклимат, которого нет рядом',
      body: 'Замкнутая горами долина, 441 м над уровнем моря, 250 солнечных дней, ноль мошки в июле. Тот же уровень солнечной радиации, что на ЮБК. Это не «горный воздух» в общем — это конкретный климатический оптимум для сердца, сна и восстановления.',
      photo: 'assets/photo/valley-autumn.jpg',
    },
    {
      tag: 'Маралы',
      title: 'Пантовое хозяйство и панты',
      body: 'Маралы — фундамент алтайской wellness-традиции. На территории курорта развивается пантовое хозяйство: пантовые ванны, маральи продукты, программы восстановления — без «спа-имитации», на собственном сырье.',
      photo: 'assets/photo/house-maralnik.png',
    },
    {
      tag: 'Травы',
      title: 'Аптечный огород и фитоцех',
      body: 'Зверобой, душица, чабрец, золотой корень — Чарыш входит в зону природной фитоаптеки Алтая. Свой травник, свои сборы, своя сушильня. Гостям — не «травяной чай как декор», а реальная фито-программа.',
      photo: 'assets/photo/food-altai-bowl.webp',
    },
    {
      tag: 'Место силы',
      title: 'Тигирецкий заповедник и древняя долина',
      body: '10 000 лет непрерывной истории: скифы → казаки → староверы. Рядом — Тигирецкий биосферный заповедник. Не «энерго-туризм», а реально не тронутая земля с собственным культурным слоем. Тихо. Чисто. Имеет смысл.',
      photo: 'assets/photo/place-misty-mountains.jpg',
    },
  ];
  return (
    <section className="sec-pad sec-warm" id="recovery" data-screen-label="AR Recovery potential">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">05</span><span className="sep">|</span>Recovery&nbsp;potential</div>
          <h2 className="display h-display-l">
            Не&nbsp;«спа на&nbsp;природе». <em className="redword">Восстановление</em><br/>
            на&nbsp;четырёх собственных опорах.
          </h2>
        </div>
        <p className="lead" style={{opacity:.78, maxWidth:'66ch', marginBottom:40}}>
          Wellness работает, только если он&nbsp;опирается на&nbsp;реальную землю, а&nbsp;не&nbsp;на&nbsp;декор. У&nbsp;Чарыша четыре собственных ресурса, которые нельзя ни&nbsp;скопировать, ни&nbsp;купить рядом — климат, маралы, травы и&nbsp;культурная глубина места.
        </p>
        <div className="ar-recovery-grid">
          {pillars.map((p, i) => (
            <article className="ar-recovery-card" key={i}>
              <div className="ar-recovery-photo" style={{backgroundImage:`url('${p.photo}')`}} aria-hidden="true"/>
              <div className="ar-recovery-body">
                <div className="ar-recovery-tag">{p.tag}</div>
                <h3 className="ar-recovery-title">{p.title}</h3>
                <p className="ar-recovery-d">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ARRecovery = ARRecovery;

// ───────────────────────── Среда для работы и отдыха ─────────────────────────
function ARWorkRest() {
  const blocks = [
    {
      tag: 'Утро',
      h: 'Глубокая работа — не из кафе',
      d: 'Тихие кабинеты в коттеджах, со-воркинг в общественном центре, переговорные с видом на хребет. Стабильный интернет, бесшумные зоны, нормальная эргономика — не «лежак с ноутбуком».',
    },
    {
      tag: 'День',
      h: 'Переключение, а не «отвлечение»',
      d: 'Конюшня, тропы, сплав, баня, мастерские. Переключение запрограммировано в среду — не нужно ехать «куда-то ещё». Работа и восстановление в радиусе 15 минут пешком.',
    },
    {
      tag: 'Вечер',
      h: 'Сообщество, в котором интересно',
      d: 'Соседи — предприниматели, архитекторы, кураторы. Общая столовая «живого питания», камерные лекции, мастера-резиденты. Не пансионат, не курорт — клубная среда.',
    },
    {
      tag: 'Месяцы',
      h: 'Длинный формат пребывания',
      d: 'Дом — в собственности. Можно жить сезонами, можно отдавать в УК и приезжать к себе. Архитектура и сценарий рассчитаны на работу из Чарыша 1–3 месяца подряд, а не на двухнедельный «отпуск».',
    },
  ];
  return (
    <section className="sec-pad" id="work-rest" data-screen-label="AR Среда для работы и отдыха">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">06</span><span className="sep">|</span>Среда&nbsp;для&nbsp;работы&nbsp;и&nbsp;отдыха</div>
          <h2 className="display h-display-l">
            Место, куда можно <em className="redword">приехать работать</em>.<br/>
            И&nbsp;остаться отдыхать.
          </h2>
        </div>
        <p className="lead" style={{opacity:.78, maxWidth:'66ch', marginBottom:40}}>
          Архстояние — про среду, которая держит ритм. Чарыш мы&nbsp;строим под&nbsp;тот&nbsp;же запрос: тихие пространства для&nbsp;концентрации, продуманные сценарии переключения, и&nbsp;живое сообщество вокруг.
        </p>
        <div className="ar-rhythm-grid">
          {blocks.map((b, i) => (
            <div className="ar-rhythm-cell" key={i}>
              <div className="ar-rhythm-tag">{b.tag}</div>
              <h3 className="ar-rhythm-h">{b.h}</h3>
              <p className="ar-rhythm-d">{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ARWorkRest = ARWorkRest;

// ───────────────────────── AR Place compact — Природа + климат + локация в одном экране ─────────────────────────
function ARPlaceCompact() {
  const climate = [
    { n: '250', u: 'дн', l: 'солнечных дней' },
    { n: '441', u: 'м',  l: 'над морем' },
    { n: '0',   u: '',   l: 'комаров и мошки' },
    { n: '72',  u: 'га', l: 'в собственности' },
  ];
  return (
    <section className="sec-pad" id="place" data-screen-label="AR Place compact">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">03</span><span className="sep">|</span>Место</div>
          <h2 className="display h-display-l">
            Тупиковая долина реки&nbsp;Чарыш.<br/>
            <em className="redword">Заповедная</em> часть Алтая.
          </h2>
        </div>
        <p className="lead" style={{opacity:.78, maxWidth:'66ch', marginBottom:32}}>
          Курорт стоит в&nbsp;замкнутой горами долине на&nbsp;границе равнинного и&nbsp;горного Алтая. Дорога не&nbsp;проходящая — только к&nbsp;нам. Это редкая комбинация для&nbsp;России: климат, чистота и&nbsp;уединение в&nbsp;одной точке.
        </p>
        <div className="ar-place-hero" style={{backgroundImage:"url('assets/photo/charysh-location-panorama.jpg')"}}>
          <div className="ar-place-hero-overlay"/>
        </div>
        <div className="climate-grid" style={{marginTop:32}}>
          {climate.map((c, i) => (
            <div className="climate-cell" key={i}>
              <div className="climate-num">0{i+1}</div>
              <div className="climate-value">{c.n}<span className="climate-unit">{c.u}</span></div>
              <div className="climate-label">{c.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ARPlaceCompact = ARPlaceCompact;

// ───────────────────────── AR People compact — Команда + сообщество (одним блоком) ─────────────────────────
function ARPeopleCompact() {
  const team = [
    { name: 'Светлана Антонова',   role: 'Идеолог · со-основатель',          photo: 'assets/team/antonova.jpg' },
    { name: 'Вячеслав Немцов',     role: 'Со-основатель · операции',         photo: 'assets/team/nemtsov.jpg' },
    { name: 'Андрей Пережогин',    role: 'Развитие и инвестиции',            photo: 'assets/team/perezhogin.jpg' },
    { name: 'Антон Кочуркин',      role: 'Куратор · Никола-Ленивец',         photo: 'assets/team/kochurkin.jpg' },
    { name: 'Бюро LH47',           role: 'Архитектурный регламент',          photo: 'assets/team/markish.jpg' },
    { name: 'Александр Немцев',    role: 'Стройка и инфраструктура',         photo: 'assets/team/nemtsev.jpg' },
  ];
  return (
    <section className="sec-pad sec-warm" id="people" data-screen-label="AR People compact">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">09</span><span className="sep">|</span>Команда&nbsp;и&nbsp;кураторы</div>
          <h2 className="display h-display-l">
            Команда, которая <em className="redword">умеет строить</em>.<br/>
            Кураторы, которые умеют наполнять.
          </h2>
        </div>
        <p className="lead" style={{opacity:.78, maxWidth:'66ch', marginBottom:32}}>
          Со-основатели — серийные предприниматели и&nbsp;операторы с&nbsp;опытом масштабных проектов. Архитектурный регламент — LH47. Кураторская линия — Антон Кочуркин и&nbsp;команда «Никола-Ленивец»: культурная программа, арт-объекты, идентичность среды.
        </p>
        <div className="ar-team-grid">
          {team.map((t, i) => (
            <figure className="ar-team-cell" key={i}>
              <div className="ar-team-ph" style={{backgroundImage:`url('${t.photo}')`}} aria-hidden="true"/>
              <figcaption className="ar-team-cap">
                <div className="ar-team-name">{t.name}</div>
                <div className="ar-team-role">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ARPeopleCompact = ARPeopleCompact;

// ───────────────────────── AR Final CTA ─────────────────────────
function ARFinalCTA() {
  return (
    <section className="sec-pad" id="form" data-screen-label="AR Final CTA">
      <div className="container">
        <div className="pc-final">
          <div className="crumb"><span className="num">17</span><span className="sep">|</span>Следующий&nbsp;шаг</div>
          <h2 className="display h-display-l">
            Готовы <em className="redword">посмотреть проект</em><br/>
            глубже?
          </h2>
          <p className="pc-final-lead">
            Видеозвонок · 60 минут · любой мессенджер. Покажем мастер-план, регламент LH47, финмодель под&nbsp;ваш сценарий и&nbsp;юр.пакет. Для&nbsp;Архстояние-сообщества — индивидуальные условия инвест-тура.
          </p>
          <div className="pc-final-contacts">
            <div className="contact-person">
              <div>Светлана Антонова · со-основатель</div>
              <div><a href="tel:+79037744042">+7 903 774-40-42</a> · <a href="https://t.me/santagiving">@santagiving</a></div>
            </div>
            <div className="contact-person">
              <div>Вячеслав Немцов · со-основатель</div>
              <div><a href="tel:+79017168776">+7 901 716-87-76</a> · <a href="https://t.me/nemtsovvyacheslav">@nemtsovvyacheslav</a></div>
            </div>
            <div className="contact-person">
              <div>Андрей Пережогин · развитие и инвестиции</div>
              <div><a href="tel:+79015888858">+7 901 588-88-58</a> · <a href="https://t.me/andreiperezhoginofficial">@andreiperezhoginofficial</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.ARFinalCTA = ARFinalCTA;
