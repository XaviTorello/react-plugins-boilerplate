import { action, createActionTypes } from '../App/actions';

// Create LOGIN constants
export const LOGIN = createActionTypes('LOGIN');

// Prepare login dispatchers
export const login = {
  request: (username, password) =>
    action(LOGIN.REQUEST, { username, password }),
  success: response => action(LOGIN.SUCCESS, { response }),
  failure: error => action(LOGIN.FAILURE, { error }),
};
