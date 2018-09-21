/*
 *
 * Header actions
 *
 */
import { action, createActionTypes } from 'containers/App/actions';

import { CHANGE_MENU } from './constants';

export function changeMenu(languageLocale) {
  return {
    type: CHANGE_MENU,
    locale: languageLocale,
  };
}

// Create MENU constants and dispatchers
export const MENU = createActionTypes('MENU');
export const menu = {
  request: token => action(MENU.REQUEST, { token }),
  success: items => action(MENU.SUCCESS, { menu: items }),
  failure: error => action(MENU.FAILURE, { error }),
};
