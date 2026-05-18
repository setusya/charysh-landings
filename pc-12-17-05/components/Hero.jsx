// Charysh Investors Site — Hero with 3 variants
// Variant A: full-bleed photo with tagline overlay (uglichi-style)
// Variant B: split typographic — large display word + photo right
// Variant C: photo-collage rapport — three stacked frames

function Hero({ variant = 'A', heroPhoto, ornaments, onCTA }) {
  if (variant === 'A') return <HeroFullBleed heroPhoto={heroPhoto} ornaments={ornaments} onCTA={onCTA} />;
  if (variant === 'B') return <HeroSplit heroPhoto={heroPhoto} ornaments={ornaments} onCTA={onCTA} />;
  return <HeroCollage heroPhoto={heroPhoto} ornaments={ornaments} onCTA={onCTA} />;
}

function HeroFullBleed({ heroPhoto, ornaments, onCTA }) {
  return (
    <section className="hero hero-A" id="top" data-screen-label="01 Hero — Full bleed">
      <div className="hero-photo" style={{ backgroundImage: `url('${heroPhoto}')` }} />
      <div className="hero-photo-overlay" />
      <div className="hero-frame">
        <div className="hero-top">
          <div className="crumb" style={{ color: '#fff' }}>
            <span className="num">01</span><span className="sep">|</span>
            Усадьбы Чарыш<span className="sep">|</span>Алтай
          </div>
          <div className="hero-meta">Май 2026 · Клубный посёлок</div>
        </div>
        <div className="hero-body">
          <h1 className="display h-display-xl hero-h1">
            Алтай<br/>для&nbsp;искушённых
          </h1>
          <div className="hero-sub">
            Закрытый клубный посёлок в&nbsp;тупиковой долине реки Чарыш.<br/>
            Дом — в&nbsp;собственность. Сервис — гостиничный.
          </div>
        </div>
        <div className="hero-bottom">
          <div className="hero-ctas">
            <a href="#visit" className="btn btn-primary" onClick={onCTA}>
              Заброниpовать инвест-тур <span className="arrow">→</span>
            </a>
            <a href="#visit-love" className="btn btn-light" onClick={onCTA}>
              Love-tour 3 или 5 дней <span className="arrow">→</span>
            </a>
          </div>
          <div className="hero-tagline">ОТКРОЙ&nbsp;НОВОГО&nbsp;СЕБЯ</div>
        </div>
      </div>
      {ornaments && <RapportStrip variant={1} tone="whiteOnRed" height={48} />}
    </section>
  );
}

function HeroSplit({ heroPhoto, ornaments, onCTA }) {
  return (
    <section className="hero hero-B" id="top" data-screen-label="01 Hero — Split">
      <div className="hero-split-grid">
        <div className="hero-text-col">
          <div className="crumb">
            <span className="num">01</span><span className="sep">|</span>
            Усадьбы Чарыш<span className="sep">|</span>2026
          </div>
          <h1 className="display hero-h1-split">
            Твой дом<br/>
            в&nbsp;курортной<br/>
            <em className="redword">деревне</em>
          </h1>
          <div className="hero-sub-split">
            Чарыш — заповедная часть Алтая, где плотность населения 1,6 человека на километр. 32&nbsp;га собственной земли, 500&nbsp;га сельхоза, 200+&nbsp;млн&nbsp;₽ уже&nbsp;вложено.
          </div>
          <div className="hero-ctas">
            <a href="#visit" className="btn btn-primary" onClick={onCTA}>
              Инвест-тур <span className="arrow">→</span>
            </a>
            <a href="#visit-love" className="btn btn-ghost" onClick={onCTA}>
              Love-tour <span className="arrow">→</span>
            </a>
          </div>
        </div>
        <div className="hero-photo-col">
          <div className="hero-photo-frame" style={{ backgroundImage: `url('${heroPhoto}')` }}>
            <div className="hero-photo-tag">2.0 | Долина Чарыша</div>
          </div>
          <div className="hero-stat-strip">
            <Stat n="250" u="дн" l="солнца в году" />
            <Stat n="1,6" u="чел/км" l="плотность" />
            <Stat n="" u="" l="место отдыха первых лиц государства" />
          </div>
        </div>
      </div>
      {ornaments && <RapportStrip variant={2} tone="redOnWhite" height={56} />}
    </section>
  );
}

function HeroCollage({ heroPhoto, ornaments, onCTA }) {
  return (
    <section className="hero hero-C" id="top" data-screen-label="01 Hero — Collage">
      {ornaments && <RapportStrip variant={3} tone="redOnWhite" height={48} />}
      <div className="hero-collage-grid">
        <div className="hero-collage-text">
          <div className="crumb"><span className="num">01</span><span className="sep">|</span>Манифест</div>
          <h1 className="display hero-h1-collage">
            Не&nbsp;для&nbsp;всех.<br/>
            Для&nbsp;<em className="redword">своих</em>.
          </h1>
          <p className="hero-collage-lead">
            Алтай для тех, кто уже видел Чемал, Манжерок и&nbsp;Белокуриху — и&nbsp;теперь ищет нетронутый, тихий Алтай.
          </p>
          <div className="hero-ctas">
            <a href="#visit" className="btn btn-primary" onClick={onCTA}>
              Приехать в&nbsp;Чарыш <span className="arrow">→</span>
            </a>
          </div>
        </div>
        <div className="hero-collage-photos">
          <div className="hc-frame hc-1" style={{ backgroundImage: `url('${heroPhoto}')` }} />
          <div className="hc-frame hc-2" style={{ backgroundImage: `url('../assets/photo/upload-2.jpg')` }} />
          <div className="hc-frame hc-3" style={{ backgroundImage: `url('../assets/photo/dance-ribbons.jpg')` }} />
          <div className="hc-cap hc-cap-1">2.1 — РЕКА</div>
          <div className="hc-cap hc-cap-2">2.2 — ДОЛИНА</div>
          <div className="hc-cap hc-cap-3">2.3 — ЛЮДИ</div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, u, l }) {
  return (
    <div className="hero-stat">
      <div className="hero-stat-n">{n}<span className="hero-stat-u">{u}</span></div>
      <div className="hero-stat-l">{l}</div>
    </div>
  );
}

window.Hero = Hero;
