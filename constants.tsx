
import { CountryBasic, Translations } from './types';

export const UI_STRINGS: Translations = {
  appName: { en: 'GlobalExplorer', ru: 'ГлобалЭксплорер', ky: 'ГлобалЭксплорер' },
  searchPlaceholder: { en: 'Search countries...', ru: 'Поиск стран...', ky: 'Өлкөлөрдү издөө...' },
  login: { en: 'Login', ru: 'Войти', ky: 'Кирүү' },
  register: { en: 'Register', ru: 'Регистрация', ky: 'Каттоо' },
  logout: { en: 'Logout', ru: 'Выйти', ky: 'Чыгуу' },
  history: { en: 'History', ru: 'История', ky: 'Тарыхы' },
  ethnicities: { en: 'Ethnicities', ru: 'Этнический состав', ky: 'Этникалык курамы' },
  languages: { en: 'Languages', ru: 'Языки', ky: 'Тилдери' },
  emblem: { en: 'Coat of Arms', ru: 'Герб', ky: 'Герб' },
  welcome: { en: 'Explore the World', ru: 'Исследуй мир', ky: 'Дүйнөнү изилде' },
  loading: { en: 'Fetching geographical data...', ru: 'Загрузка географических данных...', ky: 'Географиялык маалыматтар жүктөлүүдө...' },
  readMore: { en: 'Read More', ru: 'Подробнее', ky: 'Кененирээк' },
};

// Selection of countries for the initial grid (can be expanded to 190)
export const COUNTRIES: CountryBasic[] = [
  { id: 'KG', name: { en: 'Kyrgyzstan', ru: 'Кыргызстан', ky: 'Кыргызстан' }, flag: '🇰🇬', emblem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Emblem_of_Kyrgyzstan.svg/1024px-Emblem_of_Kyrgyzstan.svg.png', capital: 'Bishkek' },
  { id: 'US', name: { en: 'United States', ru: 'США', ky: 'АКШ' }, flag: '🇺🇸', emblem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Great_Seal_of_the_United_States_%28obverse%29.svg/1024px-Great_Seal_of_the_United_States_%28obverse%29.svg.png', capital: 'Washington, D.C.' },
  { id: 'JP', name: { en: 'Japan', ru: 'Япония', ky: 'Япония' }, flag: '🇯🇵', emblem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Imperial_Seal_of_Japan.svg/1024px-Imperial_Seal_of_Japan.svg.png', capital: 'Tokyo' },
  { id: 'FR', name: { en: 'France', ru: 'Франция', ky: 'Франция' }, flag: '🇫🇷', emblem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Coat_of_arms_of_the_French_Republic.svg/1024px-Coat_of_arms_of_the_French_Republic.svg.png', capital: 'Paris' },
  { id: 'BR', name: { en: 'Brazil', ru: 'Бразилия', ky: 'Бразилия' }, flag: '🇧🇷', emblem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Coat_of_arms_of_Brazil.svg/1024px-Coat_of_arms_of_Brazil.svg.png', capital: 'Brasília' },
  { id: 'DE', name: { en: 'Germany', ru: 'Германия', ky: 'Германия' }, flag: '🇩🇪', emblem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Coat_of_arms_of_Germany.svg/1024px-Coat_of_arms_of_Germany.svg.png', capital: 'Berlin' },
  { id: 'IN', name: { en: 'India', ru: 'Индия', ky: 'Индия' }, flag: '🇮🇳', emblem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/1024px-Emblem_of_India.svg.png', capital: 'New Delhi' },
  { id: 'CA', name: { en: 'Canada', ru: 'Канада', ky: 'Канада' }, flag: '🇨🇦', emblem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Arms_of_Canada.svg/1024px-Arms_of_Canada.svg.png', capital: 'Ottawa' },
  { id: 'AU', name: { en: 'Australia', ru: 'Австралия', ky: 'Австралия' }, flag: '🇦🇺', emblem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Coat_of_Arms_of_Australia.svg/1024px-Coat_of_Arms_of_Australia.svg.png', capital: 'Canberra' },
  { id: 'GB', name: { en: 'United Kingdom', ru: 'Великобритания', ky: 'Улуу Британия' }, flag: '🇬🇧', emblem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Royal_Coat_of_Arms_of_the_United_Kingdom.svg/1024px-Royal_Coat_of_Arms_of_the_United_Kingdom.svg.png', capital: 'London' },
  { id: 'CH', name: { en: 'Switzerland', ru: 'Швейцария', ky: 'Швейцария' }, flag: '🇨🇭', emblem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Coat_of_arms_of_Switzerland.svg/1024px-Coat_of_arms_of_Switzerland.svg.png', capital: 'Bern' },
  { id: 'KR', name: { en: 'South Korea', ru: 'Южная Корея', ky: 'Түштүк Корея' }, flag: '🇰🇷', emblem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Emblem_of_South_Korea.svg/1024px-Emblem_of_South_Korea.svg.png', capital: 'Seoul' },
];
