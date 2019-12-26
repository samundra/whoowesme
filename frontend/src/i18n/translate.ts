import I18n from 'i18n-js';
import './i18n';

/**
 * Translates text.
 *
 * @param key The i18n key.
 */
export function translate(key: string) {
  return key ? I18n.t(key) : '';
}

/**
 * Translates with variables.
 *
 * @param key The i18n key
 * @param vars Additional values sure to replace.
 */
export function translateWithVars(key: string, vars: object) {
  return key ? I18n.t(key, vars) : '';
}

export function currentLocale() {
  return I18n.currentLocale();
}

export function changeLocale(locale: string) {
  I18n.locale = locale;
}

export function ifTH<T>(thValue: T, otherValue: T): T {
  if (currentLocale() === 'th') {
    return thValue;
  }
  return otherValue;
}
