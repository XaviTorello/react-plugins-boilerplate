import { fromJS } from 'immutable';

import { LOGIN } from './actions';

export const initialState = fromJS({
  username: false,
  token: false,
  loading: false,
  error: false,
});

function loginReducer(state = initialState, action) {
  console.log('Reducing action', action);
  switch (action.type) {
    // ////////////
    //  LOGIN!  //
    // ////////////

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
