/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

// const makeSelectUsername = () =>
//   createSelector(selectHome, homeState => homeState.get('username'));

const selectLogin = state => state.get('login', initialState);

const makeSelectUsername = () =>
  createSelector(selectLogin, loginState => loginState.get('username'));

export { selectHome, makeSelectUsername };
