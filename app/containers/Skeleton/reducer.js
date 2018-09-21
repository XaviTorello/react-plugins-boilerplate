/*
 *
 * Header reducer
 *
 */

import { fromJS } from 'immutable';

import { CHANGE_MENU } from './constants';

import { MENU } from './actions';

import * as initial from './initialState';

export const initialState = fromJS({
  ...initial,
});

function menuReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MENU:
      return state.set('menu', action.menu);

    /* ///////////
    //  MENU!  //
    /////////// */

    case MENU.REQUEST:
      return state.set('loading', true).set('error', false);

    case MENU.SUCCESS:
      return state
        .set('menu', fromJS(action.menu))
        .set('loading', false)
        .set('error', false);

    case MENU.FAILURE:
      return state
        .set('loading', false)
        .set('error', action.error.message || true);

    default:
      return state;
  }
}

export default menuReducer;
