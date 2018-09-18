import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the languageToggle state domain
 */
const selectMenu = state => state.get('menu', initialState);

/**
 * Select the language locale
 */

const makeSelectMenu = () =>
  createSelector(selectMenu, menuState => menuState.get('menu'));

export { selectMenu, makeSelectMenu };
