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

const makeSelectLoading = () =>
  createSelector(selectLogin, loginState => loginState.get('loading'));

const makeSelectError = () =>
  createSelector(selectLogin, loginState => loginState.get('error'));

const makeSelectMessage = () =>
  createSelector(selectLogin, loginState => loginState.get('message'));

export {
  selectLogin,
  makeSelectUsername,
  makeSelectToken,
  makeSelectLoading,
  makeSelectError,
  makeSelectMessage,
};
