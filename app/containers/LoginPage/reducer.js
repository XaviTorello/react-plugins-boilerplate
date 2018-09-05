import { fromJS } from 'immutable';

import { createActionTypes } from '../App/actions';

import { CHANGE_USERNAME } from './constants';

export const LOGIN = createActionTypes('LOGIN');

// The initial state of the App
export const initialState = fromJS({
  username: false,
  token: false,
  loading: false,
});

function loginReducer(state = initialState, action) {
  console.log('Reducing action', action);
  switch (action.type) {
    case CHANGE_USERNAME:
      // Delete prefixed '@' from the github username
      return state.set('username', action.name.replace(/@/gi, ''));

    case LOGIN.REQUEST:
      return state
        .set('username', false)
        .set('token', false)
        .set('loading', true)
        .set('error', false);

    case LOGIN.SUCCESS:
      return state
        .set('username', action.username)
        .set('token', action.token)
        .set('loading', false)
        .set('error', false);

    case LOGIN.FAILURE:
      return state
        .set('username', false)
        .set('token', false)
        .set('loading', false)
        .set('error', action.error.message || true);

    default:
      return state;
  }
}

export default loginReducer;
