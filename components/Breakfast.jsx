// Charysh — Бизнес-завтрак, часть 2 «Концепция и место»: секции, которые есть только в этой версии.
// Остальные слайды переиспользуются из PrivateCamp.jsx / Place.jsx через пропсы (num, members, contacts…).

// ───────────────────────── 04 · Большой Алтай + География (схлопнутые слайды 04 и 05) ─────────────────────────
function BBAltaiGeo({ num = '04' } = {}) {
  const stats = [
    { v: '×3,7', l: 'рост рынка за 20 лет', sub: 'с 2010 (2,0 млн) до 2030 (7,3 млн)', cls: '' },
    { v: '5,2', u: 'млн', l: 'туристов в 2025 году', sub: 'РА 2,8 (Минэк РА) + АК 2,4 (Управление АК)', cls: 'pc-bigaltai-stat-now' },
    { v: '7,3', u: 'млн', l: 'цель нацпроекта к 2030', sub: '+40% за 5 лет · бюджетное финансирование инфраструктуры', cls: 'pc-bigaltai-stat-target' },
  ];
  const distances = [
    { city: 'Барнаул', t: '3,5 ч', sub: '290 км · новый терминал аэропорта · рейсы из Москвы 4 ч' },
    { city: 'Горно-Алтайск', t: '5 ч',  sub: '300 км · ближайший региональный аэропорт' },
    { city: 'Новосибирск', t: '7 ч',  sub: '530 км · крупнейший хаб Сибири' },
    { city: 'с. Чарышское', t: '3–5 км', sub: 'районный центр · вся инфраструктура' },
  ];
  return (
    <section className="sec-pad sec-dark pc-bigaltai" id="altai-geo" data-screen-label="04 Big Altai + Geography (compact)">
      <div className="pc-bigaltai-bg" style={{backgroundImage:"url('assets/photo/altai-belukha.webp')"}}/>
      <div className="pc-bigaltai-bg-overlay"/>
      <div className="container pc-bigaltai-inner">
        <div className="comm-head">
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Большой&nbsp;Алтай<span className="sep">|</span>Где&nbsp;это</div>
          <h2 className="display h-display-l">
            <em className="redword-light">Большой Алтай</em> —<br/>
            самый растущий туррегион России.
          </h2>
        </div>

        <p className="pc-bigaltai-hero-note">
          Республика Алтай · Алтайский край · Кузбасс — единый туристический бренд нацпроекта. Мегакурорты, миллионы гостей и&nbsp;бюджеты под&nbsp;триллион. <strong>Чарыш — русская душа Горного Алтая</strong> в&nbsp;часе от&nbsp;этих потоков.
        </p>

        <div className="pc-bigaltai-stats" style={{marginTop:0}}>
          {stats.map((st, i) => (
            <div className={`pc-bigaltai-stat ${st.cls}`} key={i}>
              <div className="pc-bigaltai-stat-v">{st.v}{st.u && <> <span className="pc-bigaltai-stat-u">{st.u}</span></>}</div>
              <div className="pc-bigaltai-stat-l">{st.l}</div>
              <div className="pc-bigaltai-stat-sub">{st.sub}</div>
            </div>
          ))}
        </div>

        <div className="bb-geo">
          <div className="bb-geo-head">
            <h3 className="display h-display-m bb-geo-h">
              Россия · Алтайский край · Чарышский район · <em className="redword-light">с.&nbsp;Чарышское</em>
            </h3>
            <div className="bb-geo-cap">51°23′ с.ш. · 83°33′ в.д. · 441 м над уровнем моря · тупиковая долина реки Чарыш · 72 га в собственности</div>
          </div>
          <div className="pc-location-grid bb-geo-grid">
            {distances.map((d, i) => (
              <div className="pc-location-cell" key={i}>
                <div className="pc-location-num">{String(i+1).padStart(2,'0')}</div>
                <div className="pc-location-city">{d.city}</div>
                <div className="pc-location-t">{d.t}</div>
                <div className="pc-location-sub">{d.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.BBAltaiGeo = BBAltaiGeo;

// ───────────────────────── 05 · Почему Чарыш — пять аргументов с источниками ─────────────────────────
function BBWhyCharysh({ num = '05' } = {}) {
  const args = [
    { h: 'Земля до якорного инвестора', d: 'После прихода Сбера в Манжерок сотка в Республике Алтай выросла на 88% за год и стоит 592 тыс ₽ — дороже всего в Сибири. Чарыш сегодня на той стадии, где Манжерок был десять лет назад.', src: 'cian,erz,iz' },
    { h: 'Там, где нет толпы', d: 'Шерегеш: 1,65 млн гостей, 95 гостиниц и 50 СПА конкурируют за одного человека. В Чарыше прямых конкурентов нет, а 45 000 автотуристов уже останавливаются здесь в гостевых домах.', src: 'ator,pdf' },
    { h: '72 га одним куском', d: 'Тупиковая долина, земля в собственности с ВРИ «туристическое обслуживание». Такой участок на Алтае больше не собрать: земля давно разбита на сотки.', src: 'pdf' },
    { h: 'Поток уже рядом', d: 'Республика Алтай — 2,8 млн туристов в 2025, рост ×2,3 за пять лет. Алтайский край — 2,4 млн, инвестиции в отрасль +51% за год. Барнаул с новым терминалом в 3,5 часах.', src: 'tolkRA,gov' },
    { h: 'Круглый год, а не сезон', d: '250 солнечных дней, 441 м над уровнем моря, без мошки. Не горнолыжные четыре месяца, а recovery-курорт на все двенадцать.', src: 'pdf' },
  ];
  return (
    <section className="sec-pad sec-warm" id="why-charysh" data-screen-label="05 Why Charysh (breakfast)">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Почему&nbsp;Чарыш</div>
          <h2 className="display h-display-l">
            Пять причин, по&nbsp;которым это место<br/>
            <em className="redword">нельзя повторить</em>.
          </h2>
        </div>
        <div className="fin-cards">
          {args.map((a, i) => (
            <article className="fin-card" key={i}>
              <div className="fin-card-num">{String(i+1).padStart(2,'0')}</div>
              <h3 className="fin-card-h">{a.h}</h3>
              <p className="fin-card-d">{a.d} <SrcRef k={a.src}/></p>
            </article>
          ))}
        </div>
        <SrcList keys={['cian','erz','iz','ator','tolkRA','gov','pdf']}/>
      </div>
    </section>
  );
}
window.BBWhyCharysh = BBWhyCharysh;

// ───────────────────────── 08 · Чем живёт Чарыш + Свадьбы и мероприятия ─────────────────────────
function BBActivities({ num = '08' } = {}) {
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
  const events = [
    'Свадьбы на берегу Чарыша — выездная церемония, банкет у реки, размещение гостей в усадьбах',
    'Юбилеи и семейные праздники — на 20–150 гостей, с местной кухней и живой музыкой',
    'Корпоративы и стратегические сессии — MICE-павильон, сплав, конный выезд, баня',
    'Фестивали и камерные концерты — на открытой поляне с видом на горы',
    'Программа «под ключ»: декор, кейтеринг, трансфер из Барнаула, фото и видео',
    'Пакеты для групп продаём с 2027 года — выручка появляется до открытия курорта',
  ];
  return (
    <section className="sec-pad sec-warm" id="activities" data-screen-label="08 Activities + Events (breakfast)">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">{num}</span><span className="sep">|</span>Чем&nbsp;живёт&nbsp;Чарыш</div>
          <h2 className="display h-display-l">
            Дома, реки и горы — это <em className="redword">оправа</em>.<br/>
            Главное — то, что мы&nbsp;здесь делаем&nbsp;<em className="redword">вместе</em>.
          </h2>
        </div>
        <p className="lead" style={{opacity:.78, maxWidth:'62ch', marginBottom:48}}>
          Сюда не&nbsp;приезжают «отдохнуть от&nbsp;людей»&nbsp;— сюда приезжают за&nbsp;настоящими людьми и&nbsp;настоящими делами. Десять направлений, в&nbsp;которых складывается жизнь резидента: что-то делаешь руками, что-то&nbsp;— ногами, что-то просто впитываешь.
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

        {/* Свадьбы и мероприятия — выделенный блок с местом под фото */}
        <article className="bb-events" id="events">
          <div className="bb-events-body">
            <div className="pc-activity-tag">10 · Свадьбы и мероприятия</div>
            <h3 className="display h-display-m bb-events-h">
              Свадьбы, юбилеи, корпоративы —<br/>
              <em className="redword">в&nbsp;долине, где нет случайных людей</em>.
            </h3>
            <ul className="pc-activity-list bb-events-list">
              {events.map((it, j) => <li key={j}>{it}</li>)}
            </ul>
          </div>
          <div className="bb-events-photos">
            <div className="bb-ph bb-events-photo bb-events-photo-main">Место для фото<br/>свадьба у реки</div>
            <div className="bb-ph bb-events-photo">Место для фото<br/>банкет</div>
            <div className="bb-ph bb-events-photo">Место для фото<br/>мероприятие</div>
          </div>
        </article>
      </div>
    </section>
  );
}
window.BBActivities = BBActivities;
