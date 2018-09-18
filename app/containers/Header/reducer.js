/*
 *
 * Header reducer
 *
 */

import { fromJS } from 'immutable';

import { CHANGE_MENU } from './constants';

import * as initial from './initialState';

export const initialState = fromJS({
  ...initial,
});

function menuReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MENU:
      return state.set('menu', action.menu);
    default:
      return state;
  }
}

export default menuReducer;
