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
  // Галерея — реальные фото долины Чарыша (взяты из слайда 15)
  const gallery = [
    { src: 'assets/photo/valley-overlook.jpg',    cap: 'Панорама с высоты' },
    { src: 'assets/photo/nature-river-rocks.jpg', cap: 'Берег · щебень' },
    { src: 'assets/photo/valley-autumn.jpg',      cap: 'Долина · октябрь' },
    { src: 'assets/photo/season-autumn-river.jpg',cap: 'Чарыш · сезон' },
  ];
  return (
    <section className="sec-pad" id="place" data-screen-label="04 Place — Nature">
      <div className="container">
        <div className="comm-head">
          <div className="crumb">
            <span className="num">06</span><span className="sep">|</span>Место<span className="sep">|</span>Природа
          </div>
          <h2 className="display h-display-l">
            Уникальная природа<br/>
            и&nbsp;<em className="redword">микроклимат</em>.
          </h2>
        </div>
        <p className="lead" style={{opacity:.78, maxWidth:'62ch', marginBottom:32}}>
          Чарышская долина — это не&nbsp;«ещё одна точка на&nbsp;Алтае». Это отдельный микроклимат, замкнутый горами от&nbsp;ветров, с&nbsp;числом солнечных дней выше Сочи и&nbsp;нулём мошки в&nbsp;разгар лета.
        </p>
        <div className="place-gallery">
          {gallery.map((g, i) => (
            <figure className="place-gallery-cell" key={i}>
              <div className="place-gallery-ph" style={{backgroundImage:`url('${g.src}')`}}/>
              <figcaption className="place-gallery-cap">{g.cap}</figcaption>
            </figure>
          ))}
        </div>
        <div className="climate-grid">
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
      </div>
    </section>
  );
}
window.PlaceSection = PlaceSection;
