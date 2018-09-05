/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { CHANGE_USERNAME, LOG_IN } from './constants';
import { action, createActionTypes } from '../App/actions';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name,
  };
}

export function logIn(username, password) {
  return {
    type: LOG_IN,
    name,
  };
}

// Create LOGIN constants
export const LOGIN = createActionTypes('LOGIN');
console.log(LOGIN);

//Prepare login dispatchers
export const login = {
  request: (username, password) => action(LOGIN['REQUEST'], {username, password}),
  success: (payload, response) => action(LOGIN['SUCCESS'], {payload, response}),
  failure: (payload, error) => action(LOGIN['FAILURE'], {payload, error}),
}
console.log(login);
