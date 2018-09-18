/*
 *
 * Header actions
 *
 */

import { CHANGE_MENU } from './constants';

export function changeMenu(languageLocale) {
  return {
    type: CHANGE_MENU,
    locale: languageLocale,
  };
}
