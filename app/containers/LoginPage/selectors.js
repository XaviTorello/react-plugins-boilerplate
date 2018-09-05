/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLogin = state => state.get('login', initialState);

const makeSelectUsername = () =>
  createSelector(selectLogin, loginState => loginState.get('username'));

const makeSelectToken = () =>
  createSelector(selectLogin, loginState => loginState.get('token'));

export { selectLogin, makeSelectUsername, makeSelectToken };
