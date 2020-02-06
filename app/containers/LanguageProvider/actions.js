/*
 *
 * LanguageProvider actions
 *
 */

import { CHANGE_LOCALE, CHANGE_MENU_ACTIVE } from './constants';

export function changeLocale(languageLocale) {
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale,
  };
}

export function changeMenuActive(menu_active) {
  return {
    type: CHANGE_MENU_ACTIVE,
    menu_active: menu_active,
  };
}
