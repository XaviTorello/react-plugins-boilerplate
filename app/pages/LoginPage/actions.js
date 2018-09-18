import { action, createActionTypes } from 'containers/App/actions';

// Create LOGIN constants
export const LOGIN = createActionTypes('LOGIN');

// Prepare login dispatchers
export const login = {
  request: (username, password) =>
    action(LOGIN.REQUEST, { username, password }),
  success: (username, token) => action(LOGIN.SUCCESS, { username, token }),
  failure: error => action(LOGIN.FAILURE, { error }),
};
