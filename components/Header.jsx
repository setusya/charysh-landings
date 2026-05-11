// Charysh Investors Site — Header
function Header({ onCTA }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { id: 'project', label: 'Проект' },
    { id: 'place', label: 'Место' },
    { id: 'houses', label: 'Усадьбы' },
    { id: 'community', label: 'Сообщество' },
    { id: 'visit', label: 'Приехать' },
  ];
  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} data-screen-label="Header">
      <a href="#top" className="brand" aria-label="Курортная деревня Чарыш">
        <span className="brand-mark">Ч</span>
        <span className="brand-word">курортная деревня&nbsp;чарыш</span>
      </a>
      <nav className="site-nav">
        {links.map(l => (
          <a key={l.id} href={`#${l.id}`} className="nav-link">{l.label}</a>
        ))}
      </nav>
      <a href="#visit" className="btn btn-primary header-cta" onClick={onCTA}>
        Записаться <span className="arrow">→</span>
      </a>
    </header>
  );
}
window.Header = Header;
