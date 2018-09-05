/**
 * Try to login!
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { LOGIN, login } from './actions';

// import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Perform Login throught the API
 */
export function* performLogin(payload) {
  // Select username from store
  console.log('ROLF');
  console.log('username', payload);

  const username = payload.username || '';

  // const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(login.success(repos, username));
  } catch (err) {
    yield put(login.failure(err));
  }
}

export default function* loginFlow() {
  // Watches for LOGIN['REQUEST'] actions and calls performLogin when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOGIN.REQUEST, performLogin);
  // yield takeLatest(LOGIN['FAILURE'], console.log("ERROR!!!"));
}
