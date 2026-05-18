// Charysh — Houses catalog (2 catalog spreads × 4 house types)
// Sizes: Кедр 100, Маральник 110, Беркут 120, Беляк 160 m².
function HousesSection() {
  const houses = [
    {
      name: 'Кедр',
      tag: 'Стартовый',
      pos: 'Дом для пары и одного ребёнка',
      total: '100', living: '50', terr: '30',
      bedrooms: '1', baths: '2', sleeps: '4',
      layout: 'Евро-зал · прачечная · прихожая',
      price: 'от 15 млн ₽',
      essence: 'Самый компактный и быстрый вход в курорт. Одна спальня и просторный евро-зал, где днём собирается семья, а вечером раскладывается дополнительное спальное место. Два санузла, прачечная и прихожая закрывают весь бытовой контур.',
      ph: '../assets/photo/house-kedr.png',
    },
    {
      name: 'Маральник',
      tag: 'Семейный',
      pos: 'Семейный дом для двух поколений',
      total: '110', living: '63', terr: '34',
      bedrooms: '2', baths: '2', sleeps: '6',
      layout: 'Евро-зал · прачечная · прихожая',
      essence: 'Тот самый размер, когда родители и дети не мешают друг другу. Две полноценные спальни, евро-зал с обеденной группой, два санузла. До шести спальных мест — берите детей и старшее поколение, места хватит всем.',
      ph: '../assets/photo/house-maralnik.png',
    },
    {
      name: 'Беркут',
      tag: 'С простором',
      pos: 'Просторный дом для долгих визитов',
      total: '120', living: '72', terr: '40',
      bedrooms: '2', baths: '2', sleeps: '6',
      layout: 'Евро-зал · прачечная · прихожая',
      essence: 'Те же две спальни, что у Маральника, но с заметным запасом по жилой площади — больше воздуха в евро-зале, шире спальни, удобнее санузлы. Дом для тех, кто приезжает не на выходные, а на месяцы — и хочет жить, а не размещаться.',
      ph: '../assets/photo/house-berkut.png',
    },
    {
      name: 'Беляк',
      tag: 'Флагман',
      pos: 'Большой дом для рода и больших компаний',
      total: '160', living: '101', terr: '52',
      bedrooms: '3', baths: '4', sleeps: '8',
      layout: 'Евро-зал · прачечная · прихожая',
      essence: 'Флагман каталога. Три спальни, четыре санузла, восемь спальных мест — большая семья, друзья или несколько поколений умещаются без компромиссов. Лучший экономический сценарий для сдачи: премиальная аренда даёт максимальную долю выручки на квадратный метр.',
      ph: '../assets/photo/house-belyak.png',
    },
  ];

  const [page1, page2] = [houses.slice(0, 2), houses.slice(2, 4)];

  return (
    <section className="sec-pad" id="houses" data-screen-label="04 Houses">
      <div className="container">
        <div className="houses-head">
          <div className="crumb"><span className="num">13</span><span className="sep">|</span>Каталог</div>
          <h2 className="display h-display-l houses-h">
            Дом для семьи,<br/>
            <em className="redword">доход от аренды.</em>
          </h2>
          <p className="houses-intro">
            Четыре типа домов от&nbsp;100 до&nbsp;160&nbsp;м². Каждый дом — твоя собственность с&nbsp;регистрацией в&nbsp;Росреестре. Семья приезжает когда хочет — в&nbsp;ваше отсутствие УК сдаёт дом и&nbsp;платит долю валовой выручки.
          </p>
        </div>

        <HouseSpread index={1} total={2} caption="Стартовый и семейный форматы" houses={page1} startIdx={0} />

        <div className="houses-divider" aria-hidden="true">
          <span className="houses-divider-l"></span>
          <span className="houses-divider-mark">•</span>
          <span className="houses-divider-l"></span>
        </div>

        <HouseSpread index={2} total={2} caption="Просторный формат и флагман" houses={page2} startIdx={2} />

        <div className="houses-foot">
          <a href="#form" className="btn btn-primary houses-foot-cta">
            Получить цены и&nbsp;условия <span className="arrow">→</span>
          </a>
          <span className="houses-foot-note">Оставьте контакты — пришлём прайс-лист и&nbsp;каталог в&nbsp;течение дня</span>
        </div>
      </div>
    </section>
  );
}

function HouseSpread({ index, total, caption, houses, startIdx }) {
  return (
    <div className="houses-spread">
      <div className="houses-spread-head">
        <span className="houses-spread-pg">Страница {index} / {total}</span>
        <span className="houses-spread-cap">{caption}</span>
      </div>
      <div className="houses-spread-grid">
        {houses.map((h, i) => (
          <article className="card-house card-house-lg" key={h.name}>
            <div className="house-photo house-photo-lg" style={{ backgroundImage: `url('${h.ph}')` }}>
              <div className="house-num">0{startIdx + i + 1}</div>
              <div className="house-tag">{h.tag}</div>
              <div className="house-area-badge">
                <span className="house-area-num">{h.total}</span>
                <span className="house-area-unit">м²</span>
              </div>
            </div>
            <div className="house-body house-body-lg">
              <div className="house-head-row">
                <h3 className="house-name">{h.name}</h3>
                {h.price && <span className="house-price">{h.price}</span>}
              </div>
              <div className="house-pos">{h.pos}</div>
              <p className="house-essence">{h.essence}</p>
              <div className="house-specs house-specs-lg">
                <div><span className="house-spec-l">Общая площадь</span><span className="house-spec-v">{h.total} м²</span></div>
                <div><span className="house-spec-l">Жилая площадь</span><span className="house-spec-v">{h.living} м²</span></div>
                <div><span className="house-spec-l">Терраса</span><span className="house-spec-v">{h.terr} м²</span></div>
                <div><span className="house-spec-l">Спальни</span><span className="house-spec-v">{h.bedrooms}</span></div>
                <div><span className="house-spec-l">Санузлы</span><span className="house-spec-v">{h.baths}</span></div>
                {h.sleeps && <div><span className="house-spec-l">Спальных мест</span><span className="house-spec-v">{h.sleeps}</span></div>}
                <div><span className="house-spec-l">Также</span><span className="house-spec-v house-spec-v-text">{h.layout}</span></div>
              </div>
              <a href="#visit" className="house-cta">Узнать подробнее <span className="arrow">→</span></a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

window.HousesSection = HousesSection;
