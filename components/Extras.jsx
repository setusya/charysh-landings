// Charysh Investors Site — Extras: market stats, readiness, road, team

function MarketStats() {
  const items = [
    { n: '×4',     l: 'рост турпотока в Республику Алтай за 10 лет', src: 'Алтай в 7-ке лидеров России · Росстат' },
    { n: '2,8',    u: 'млн', l: 'туристов в Республике Алтай в 2025', src: 'Правительство РА · итоги года' },
    { n: '+5',     u: '%',   l: 'прогноз роста турпотока на 2026 год', src: 'Минэкономразвития РА, апрель 2026' },
    { n: '−20',    u: '%',   l: 'снижение происшествий с туристами за год', src: 'Правительство РА, итоги 2025' },
    { n: '29',     u: '%',   l: 'россиян выбирают уединённые домики на Алтае', src: '№1 в стране · ЮMoney и Суточно.ру' },
    { n: '76',     u: '%',   l: 'россиян хотят отдых ради тишины и восстановления', src: 'ЮMoney, опрос 2025' },
  ];
  return (
    <section className="sec-pad sec-dark" id="market" data-screen-label="04 Market">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">04</span><span className="sep">|</span>Контекст</div>
          <h2 className="display h-display-l">
            Алтай — самый <em className="redword">желанный</em><br/>
            и&nbsp;безопасный регион России.
          </h2>
        </div>
        <p className="lead" style={{opacity:.75, maxWidth:'58ch', marginBottom:48}}>
          Турпоток растёт каждый год. Безопасность растёт каждый год. А&nbsp;мест, сохранивших природу и&nbsp;идентичность, становится всё меньше.
        </p>
        <div className="market-grid">
          {items.map((it, i) => (
            <div className="market-cell" key={i}>
              <div className="market-num">{String(i+1).padStart(2,'0')}</div>
              <div>
                <span className="market-v">{it.n}</span>
                {it.u && <span className="market-u">{it.u}</span>}
              </div>
              <div className="market-l">{it.l}</div>
              <div className="market-src">{it.src}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.MarketStats = MarketStats;

function ReadinessSection() {
  const rows = [
    { k: '01', t: 'Земля в собственности', d: '32 га оформлены, ВРИ — туристическое обслуживание, АО учреждено.' },
    { k: '02', t: 'Своя техника и строители', d: 'Команда работает на месте. Все этапы — под контролем основателей.' },
    { k: '03', t: 'Опытные поставщики', d: 'Проверенные подрядчики и партнёры по модульному строительству.' },
    { k: '04', t: 'Все коммуникации подведены', d: 'Электричество, вода, дороги, связь — инфраструктура готова.' },
    { k: '05', t: 'Запуск первой очереди — 2026', d: 'Модульные дома, ретрит-центр и банный комплекс — в работе.' },
  ];
  return (
    <section className="sec-pad" id="readiness" data-screen-label="06 Readiness">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">06</span><span className="sep">|</span>Готовность</div>
          <h2 className="display h-display-l">
            Не&nbsp;план. <em className="redword">Уже&nbsp;работа.</em>
          </h2>
        </div>
        <div className="readiness-list">
          {rows.map((r) => (
            <div className="readiness-row" key={r.k}>
              <div className="readiness-k">{r.k}</div>
              <div>
                <div className="readiness-t">{r.t}</div>
                <div className="readiness-d">{r.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ReadinessSection = ReadinessSection;

function RoadSection() {
  return (
    <section className="sec-pad sec-warm" id="road" data-screen-label="07 Road">
      <div className="container">
        <div className="road-head">
          <div>
            <div className="crumb"><span className="num">07</span><span className="sep">|</span>Дорога</div>
            <h2 className="display h-display-l road-h">
              4 часа в&nbsp;воздухе<br/>
              и&nbsp;<em className="redword">комфортный трансфер</em><br/>
              без&nbsp;пробок и&nbsp;светофоров.
            </h2>
          </div>
          <p className="road-intro">
            От&nbsp;Москвы до&nbsp;Барнаула — ежедневные рейсы. От&nbsp;Барнаула до&nbsp;Чарыша — 3,5&nbsp;часа комфортного трансфера по&nbsp;пустой горной дороге. Для&nbsp;тех, кто хочет ещё быстрее — <strong>вертолёт 1&nbsp;ч&nbsp;20&nbsp;мин</strong>. Дорога — это фильтр: доезжают те, кто действительно искал.
          </p>
        </div>
        <div className="road-line">
          <div className="road-stop">
            <div className="road-dot"/>
            <div className="road-name">Москва</div>
            <div className="road-meta">самолёт · 4 часа</div>
          </div>
          <div className="road-arc"><span>4 часа лёта</span></div>
          <div className="road-stop">
            <div className="road-dot"/>
            <div className="road-name">Барнаул</div>
            <div className="road-meta">пересадка</div>
          </div>
          <div className="road-arc"><span>3,5 часа авто · 1ч20 вертолёт</span></div>
          <div className="road-stop active">
            <div className="road-dot"/>
            <div className="road-name">Чарыш</div>
            <div className="road-meta">тупиковая долина</div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.RoadSection = RoadSection;

function TeamStrip() {
  const team = [
    { name: 'Светлана Антонова',  role: 'Со-основатель · идейный вдохновитель', d: 'Предприниматель и идеолог проекта. Эксперт в маркетинге и стратегическом позиционировании.', img: 'assets/team/antonova.jpg' },
    { name: 'Вячеслав Немцов',    role: 'Со-основатель · идейный вдохновитель', d: 'Тренер, писатель, журналист. Создатель многомиллиардных компаний. Инвестор в недвижимость.', img: 'assets/team/nemtsov.jpg' },
    { name: 'Андрей Немцев',      role: 'Управляющий партнёр',                  d: 'Операционное управление проектом и командой на местности. 20 лет в приключенческом туризме.', img: 'assets/team/nemtsev.jpg' },
    { name: 'Тамара Маркиш',      role: 'Директор по развитию',                 d: 'Продуктолог комплексного развития территорий. 15+ лет в курортной индустрии.', img: 'assets/team/markish.jpg' },
    { name: 'Андрей Пережогин',   role: 'Развитие и инвестиции',                d: 'Привлечение крупного капитала в девелопмент в России и за рубежом.', img: 'assets/team/perezhogin.jpg' },
  ];
  return (
    <section className="sec-pad" id="team" data-screen-label="08 Team">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">08</span><span className="sep">|</span>Команда</div>
          <h2 className="display h-display-l">
            Команда, которая <em className="redword">создаст</em><br/>
            это место и&nbsp;защитит ваш актив.
          </h2>
        </div>
        <div className="team-grid">
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
window.TeamStrip = TeamStrip;
