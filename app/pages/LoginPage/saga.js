/**
 * Try to login!
 */

import { call, put, takeLatest, all } from 'redux-saga/effects';
import request from 'utils/request';

import { LOGIN, login } from './actions';

// import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Perform Login throught the API
 */
export function* performLogin(payload) {
  const { username, password } = payload;

  // if (username && password)

  // Select username from store
  // const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: username,
        password,
      }),
    };
    const loginResult = yield call(request, requestURL, options);

    if (loginResult.token)
      yield put(login.success(username, loginResult.token));
    else yield put(login.failure({ message: 'Invalid credentials' }));
  } catch (err) {
    yield put(login.failure(err));
  }
}

export function* loginFlow() {
  yield takeLatest(LOGIN.REQUEST, performLogin);
  // yield takeLatest(LOGIN['FAILURE'], console.log("ERROR!!!"));
}

// Export the rootSaga
export default function* rootSaga() {
  yield all([loginFlow()]);
}
