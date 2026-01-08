
export type Language = 'en' | 'ru' | 'ky';

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface CountryBasic {
  id: string;
  name: {
    en: string;
    ru: string;
    ky: string;
  };
  flag: string;
  emblem: string;
  capital: string;
}

export interface CountryDetails extends CountryBasic {
  languages: string[];
  history: string;
  ethnicities: string[];
  population: string;
  region: string;
}

export interface Translations {
  [key: string]: {
    en: string;
    ru: string;
    ky: string;
  };
}
