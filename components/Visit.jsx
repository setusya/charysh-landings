// Charysh — Visit / Two-tour CTA + Form + Footer
function VisitSection() {
  return (
    <section className="visit-section" id="visit" data-screen-label="06 Visit">
      <div className="container">
        <div className="crumb" style={{color:'#fff'}}>
          <span className="num">27</span><span className="sep">|</span>Приехать<span className="sep">|</span>Два формата
        </div>
        <h2 className="display h-display-l visit-h">
          Лучший способ<br/>
          почувствовать Чарыш —<br/>
          <em className="redword-light">приехать.</em>
        </h2>
        <p className="visit-lead">
          Два формата визита: душевный Душа-тур для&nbsp;знакомства с&nbsp;местом и&nbsp;Инвест-тур для&nbsp;тех, кто рассматривает покупку.
        </p>

        <div className="tours-grid">
          <article className="tour-card tour-love" id="visit-love">
            <div className="tour-photo" style={{backgroundImage:"url('assets/photo/horses-mountain.jpg')"}}/>
            <div className="tour-num">01</div>
            <div className="tour-tag">ДУША-ТУР</div>
            <h3 className="tour-name">Душа-тур<br/>3 или 5 дней</h3>
            <p className="tour-body">
              Развлекательная программа знакомства с&nbsp;Чарышом: сплав по&nbsp;реке, баня с&nbsp;травами, ужин с&nbsp;местными мастерами, конные прогулки, рыбалка и&nbsp;тёплые встречи у&nbsp;костра.
            </p>
            <ul className="tour-list">
              <li>Программа 3 или&nbsp;5 дней</li>
              <li>Сопровождение команды</li>
              <li>Природа, ремёсла, кухня</li>
              <li>Тёплая, неформальная встреча</li>
            </ul>
            <a href="#form" className="btn btn-light tour-cta">
              Получить программу <span className="arrow">→</span>
            </a>
          </article>

          <article className="tour-card tour-invest">
            <div className="tour-photo" style={{backgroundImage:"url('assets/photo/valley-pavilion.jpg')"}}/>
            <div className="tour-num">02</div>
            <div className="tour-tag">INVEST-TOUR</div>
            <h3 className="tour-name">Инвест-тур<br/>2 или 3 дня</h3>
            <p className="tour-body">
              Знакомство с&nbsp;территорией, презентация документов и&nbsp;финансовой модели, разговор с&nbsp;местными мастерами и&nbsp;командой проекта.
            </p>
            <ul className="tour-list">
              <li>Программа 2 или&nbsp;3 дня</li>
              <li>Встреча с&nbsp;командой</li>
              <li>Финансовая модель и&nbsp;документы</li>
              <li>Каталог домов после&nbsp;тура</li>
            </ul>
            <a href="#form" className="btn btn-primary tour-cta">
              Забронировать инвест-тур <span className="arrow">→</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
window.VisitSection = VisitSection;

function ContactForm() {
  const [sent, setSent] = React.useState(false);
  const [purpose, setPurpose] = React.useState('invest');
  return (
    <section className="sec-pad" id="form" data-screen-label="07 Contact form">
      <div className="container">
        <div className="form-grid">
          <div className="form-left">
            <div className="crumb"><span className="num">07</span><span className="sep">|</span>Контакты</div>
            <h2 className="display h-display-m">
              Оставьте контакты —<br/>
              <em className="redword">мы свяжемся</em><br/>
              в&nbsp;течение дня.
            </h2>
            <div className="form-contacts">
              <div className="contact-person">
                <div>Андрей Немцев</div>
                <div><a href="tel:+79635191490">+7 963 519-14-90</a></div>
              </div>
              <div className="contact-person">
                <div>Светлана Антонова</div>
                <div><a href="tel:+79037744042">+7 903 774-40-42</a></div>
              </div>
              <div>info@charysh.ru</div>
              <div>Алтайский край,<br/>Чарышский район</div>
            </div>
          </div>
          <form className="form-right" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <div className="purpose-row">
              <label className={`purpose ${purpose==='invest'?'on':''}`}>
                <input type="radio" name="p" checked={purpose==='invest'} onChange={()=>setPurpose('invest')} />
                <span>Инвест-тур</span>
              </label>
              <label className={`purpose ${purpose==='love'?'on':''}`}>
                <input type="radio" name="p" checked={purpose==='love'} onChange={()=>setPurpose('love')} />
                <span>Душа-тур</span>
              </label>
              <label className={`purpose ${purpose==='presentation'?'on':''}`}>
                <input type="radio" name="p" checked={purpose==='presentation'} onChange={()=>setPurpose('presentation')} />
                <span>Презентация</span>
              </label>
            </div>
            <Field label="Имя" placeholder="Иван Петров"/>
            <Field label="Телефон" placeholder="+7 (___) ___-__-__"/>
            <Field label="E-mail" placeholder="name@example.ru"/>
            <Field label="Комментарий" placeholder="Удобные даты, вопросы…" multi/>
            <div className="form-bottom">
              <label className="consent">
                <span className="cbox"><span className="ctick"/></span>
                Согласен на&nbsp;обработку персональных данных
              </label>
              <button type="submit" className="btn btn-primary">
                {sent ? 'Спасибо!' : 'Отправить'} <span className="arrow">→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
function Field({ label, placeholder, multi }) {
  return (
    <label className="field">
      <span className="flabel">{label}</span>
      {multi
        ? <textarea className="finput" placeholder={placeholder} rows="2"/>
        : <input className="finput" placeholder={placeholder}/>}
    </label>
  );
}
window.ContactForm = ContactForm;

function Footer() {
  return (
    <footer className="site-footer" data-screen-label="Footer">
      <div className="container footer-row">
        <div className="footer-brand">чарыш</div>
        <div className="footer-cols">
          <div>
            <div className="fc-h">Проект</div>
            <a href="#project">О проекте</a>
            <a href="#place">Природа и место</a>
            <a href="#houses">Каталог усадеб</a>
          </div>
          <div>
            <div className="fc-h">Приехать</div>
            <a href="#visit">Инвест-тур</a>
            <a href="#visit-love">Душа-тур</a>
            <a href="#form">Контакты</a>
          </div>
          <div>
            <div className="fc-h">Связь</div>
            <a href="tel:+79635191490">+7 963 519-14-90</a>
            <a href="mailto:info@charysh.ru">info@charysh.ru</a>
            <a href="#">Telegram</a>
          </div>
        </div>
      </div>
      <div className="footer-line">
        <span>© 2026</span>
        <span className="sep">|</span>
        <span>Усадьбы Чарыш · Клубный посёлок</span>
        <span className="sep">|</span>
        <span>Алтайский край</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
