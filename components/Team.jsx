// Charysh — единый состав команды и контакты для бизнес-завтрака (обе презентации).
// Роли — как в финансовой презентации А. Маслака. Фото Маслака и Нодельмана взяты из неё же (слайд «Команда и УК»).

const CH_TEAM = [
  { name: 'Светлана Антонова', role: 'Со-основатель · маркетинг, руководитель проекта', d: 'Предприниматель и идеолог. Маркетинг и стратегическое позиционирование.', img: 'assets/team/antonova.jpg' },
  { name: 'Вячеслав Немцов', role: 'Со-основатель · ретрит-программы', d: 'Тренер, писатель, журналист. Создатель многомиллиардных компаний. Инвестор в недвижимость.', img: 'assets/team/nemtsov.jpg' },
  { name: 'Андрей Маслак', role: 'MICE и управление отелем', d: 'Гостиничный бизнес, работа с группами, привлечение групп в низкий сезон.', img: 'assets/team/maslak.jpg', pos: '85% 35%' },
  { name: 'Андрей Немцев', role: 'Девелопмент', d: 'Операционное управление проектом. 20 лет в приключенческом туризме.', img: 'assets/team/nemtsev.jpg' },
  { name: 'Тамара Маркиш', role: 'СПА-программы', d: 'Продуктолог комплексного развития территорий. 15+ лет в курортной индустрии.', img: 'assets/team/markish.jpg' },
  { name: 'Лев Нодельман', role: 'Главный архитектор', d: 'Архитектура комплекса и мастер-план 72 га.', img: 'assets/team/nodelman.jpg', pos: '50% 30%' },
];
window.CH_TEAM = CH_TEAM;

// Полный состав (МИПИФ): плюс партнёр по инвестициям и архитектор 8 Lines — с инвест-лендинга.
const CH_TEAM_FULL = [
  ...CH_TEAM,
  { name: 'Андрей Пережогин', role: 'Партнёр по инвестициям', d: 'Привлечение крупного капитала в девелопмент в России и за рубежом.', img: 'assets/team/perezhogin.jpg' },
  { name: 'Антон Кочуркин', role: 'Архитектор · основатель 8 Lines', d: 'Соавтор Арт-парка Никола-Ленивец (ЮНЕСКО). Лауреат архитектурных конкурсов.', img: 'assets/photo/web/kochurkin.jpg' },
];
window.CH_TEAM_FULL = CH_TEAM_FULL;

const CH_CONTACT_ANTONOVA = { who: 'Светлана Антонова · со-основатель', tel: '+7 903 774-40-42', tg: 'santagiving' };
const CH_CONTACT_MASLAK = { who: 'Андрей Маслак · MICE и управление отелем', tel: '+7 903 726-98-99', tg: 'MaslakAndrey', email: 'maslak@invest-portal.com', extra: 'WhatsApp · MAX' };
const CH_CONTACT_CHANNEL = { who: 'Telegram-канал проекта', tg: 'KURORT_CHARYSH' };
window.CH_CONTACT_ANTONOVA = CH_CONTACT_ANTONOVA;
window.CH_CONTACT_MASLAK = CH_CONTACT_MASLAK;
window.CH_CONTACT_CHANNEL = CH_CONTACT_CHANNEL;
