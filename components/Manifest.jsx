// Charysh Investors Site — Manifest section (Format / "Not for everyone")
function ManifestSection() {
  return (
    <section className="sec-pad" id="project" data-screen-label="02 Manifest">
      <div className="container">
        <div className="manifest-grid">
          <div className="manifest-left">
            <div className="crumb">
              <span className="num">02</span><span className="sep">|</span>Манифест
            </div>
            <h2 className="display h-display-l manifest-h">
              Не&nbsp;просто курорт.<br/>
              <em className="redword">Сообщество,</em><br/>
              которое&nbsp;живёт<br/>
              круглый год.
            </h2>
          </div>
          <div className="manifest-right">
            <p className="lead">
              Усадьбы Чарыш — закрытый клубный посёлок в&nbsp;горах юга Алтайского края. Ограниченное число резидентов с&nbsp;понятными ценностями. Каждый дом работает в&nbsp;двух режимах: вы приезжаете семьёй, а&nbsp;в&nbsp;ваше отсутствие управляющая компания сдаёт дом и&nbsp;платит долю выручки.
            </p>
            <div className="format-pair">
              <div className="format-cell">
                <div className="format-h">Семья владельца</div>
                <div className="format-t">Дом в&nbsp;собственность</div>
                <div className="format-d">Регистрация в&nbsp;Росреестре, полное право собственности на&nbsp;землю и&nbsp;дом. Гостиничный сервис круглый год.</div>
              </div>
              <div className="format-cell">
                <div className="format-h">Сдача в&nbsp;аренду</div>
                <div className="format-t">Доход через УК</div>
                <div className="format-d">В&nbsp;ваше отсутствие УК сдаёт дом гостям. Доля валовой выручки и&nbsp;ежемесячный отчёт.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.ManifestSection = ManifestSection;
