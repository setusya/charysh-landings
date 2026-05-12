// Charysh — Place / Nature / Climate section
function PlaceSection() {
  const climate = [
    { n: '250', u: 'дн', l: 'солнечных дней в году', sub: 'Дольше, чем в Сочи и Кисловодске' },
    { n: '120', u: 'ккал', l: 'солнечной радиации см²', sub: 'Как на Южном берегу Крыма' },
    { n: '0',   u: '',    l: 'комаров и мошки',         sub: 'Горный воздух — естественный фильтр' },
    { n: '441', u: 'м',   l: 'над уровнем моря',        sub: 'Идеальная высота для здоровья' },
    { n: '−16',  u: '°',  l: 'средняя январская',       sub: 'Сухой горный мороз без сырости' },
    { n: '+19',  u: '°',  l: 'средняя июльская',        sub: 'Не жарко даже летом' },
  ];
  const naturePhotos = [
    { src: 'assets/photo/girls-haystack.jpg',  cap: '2.1 — Лето в долине' },
    { src: 'assets/photo/father-daughter.jpg', cap: '2.2 — Прогулка у реки' },
    { src: 'assets/photo/horses-autumn.jpg',   cap: '2.3 — Осень, верхом' },
    { src: 'assets/photo/river-summer-1.jpg',  cap: '2.4 — Утро на Чарыше' },
  ];
  return (
    <section id="place" data-screen-label="03 Place — Nature">
      <div className="place-photo" style={{ backgroundImage: "url('assets/photo/sunset-hills.jpg')" }}>
        <div className="place-photo-overlay" />
        <div className="container place-photo-frame">
          <div className="crumb" style={{ color: '#fff' }}>
            <span className="num">05</span><span className="sep">|</span>Место<span className="sep">|</span>Природа
          </div>
          <h2 className="display h-display-l place-photo-h">
            Уникальная природа<br/>
            и&nbsp;микроклимат.
          </h2>
          <div className="place-photo-cap">2.0 — Долина реки Чарыш, июнь</div>
        </div>
      </div>
      <div className="container climate-grid">
        {climate.map((c, i) => (
          <div className="climate-cell" key={i}>
            <div className="climate-num">0{i+1}</div>
            <div className="climate-value">
              {c.n}<span className="climate-unit">{c.u}</span>
            </div>
            <div className="climate-label">{c.l}</div>
            <div className="climate-sub">{c.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.PlaceSection = PlaceSection;
