// Charysh — Community / Life / Gallery
function CommunitySection() {
  return (
    <section className="sec-pad" id="community" data-screen-label="05 Community">
      <div className="container">
        <div className="comm-head">
          <div className="crumb"><span className="num">05</span><span className="sep">|</span>Сообщество</div>
          <h2 className="display h-display-l">
            10&nbsp;000 лет истории<br/>
            на&nbsp;<em className="redword">одной долине.</em>
          </h2>
        </div>
        <div className="timeline">
          {[
            { era: 'V в. до н.э.', who: 'Скифы', t: 'Около 50 курганов в долине Сентелека. Царский курган — скифская обсерватория.' },
            { era: 'XVIII век',   who: 'Казаки', t: 'Чарышское основано в 1765 году как казачья станица. Хор «Канареечка» побеждает на конкурсах Сибири.' },
            { era: 'XIX век',     who: 'Старообрядцы', t: 'Особая философия согласия с природой, сезонные обряды, мараловодство, ремёсла.' },
            { era: 'Сегодня',     who: 'Первые лица', t: 'Место отдыха первых лиц государства. Чарыш на федеральной карте.' },
          ].map((e, i) => (
            <div className="tl-row" key={i}>
              <div className="tl-era">{e.era}</div>
              <div className="tl-who">{e.who}</div>
              <div className="tl-t">{e.t}</div>
            </div>
          ))}
        </div>

        <div className="gallery-grid">
          <figure className="g-1"><img src="../assets/photo/dance-ribbons.jpg" alt="Празднование жизни"/><figcaption>01 — Празднование жизни</figcaption></figure>
          <figure className="g-2"><img src="../assets/photo/girls-haystack.jpg" alt="Девичьи разговоры"/><figcaption>02 — Девичьи разговоры</figcaption></figure>
          <figure className="g-3"><img src="../assets/photo/family-time.jpg" alt="Время с семьёй"/><figcaption>03 — Время с семьёй</figcaption></figure>
          <figure className="g-4"><img src="../assets/photo/community-rafts.jpg" alt="Сплав"/><figcaption>04 — Сплав по Чарышу</figcaption></figure>
          <figure className="g-5"><img src="../assets/photo/horses-autumn.jpg" alt="Верхом"/><figcaption>05 — Конная прогулка</figcaption></figure>
          <figure className="g-6"><img src="../assets/photo/nature-camera.jpg" alt="Исследование природы"/><figcaption>06 — Исследование природы</figcaption></figure>
          <figure className="g-7"><img src="../assets/photo/picnic-friends.jpg" alt="Пикник на природе"/><figcaption>07 — Пикник на природе</figcaption></figure>
          <figure className="g-8"><img src="../assets/photo/river-autumn.jpg" alt="Рыбалка на хариуса"/><figcaption>08 — Рыбалка на хариуса</figcaption></figure>
          <figure className="g-9"><img src="../assets/photo/ritual-dolls.jpg" alt="Изготовление обрядовых кукол"/><figcaption>09 — Изготовление обрядовых кукол</figcaption></figure>
          <figure className="g-10"><img src="../assets/photo/jeep-tour.jpg" alt="Джип-туры"/><figcaption>10 — Джип-туры</figcaption></figure>
        </div>
      </div>
    </section>
  );
}
window.CommunitySection = CommunitySection;
