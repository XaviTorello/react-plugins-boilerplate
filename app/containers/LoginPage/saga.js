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
  // Select username from store
  console.log('ROLF');
  console.log('username', payload);

  const { username, password } = payload;

  // if (username && password)

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
    console.log('loginResult', loginResult);

    if (loginResult.token) yield put(login.success(loginResult, username));
    else yield put(login.failure({ message: 'Invalid credentials' }));
  } catch (err) {
    console.log('err', err);
    yield put(login.failure(err));
  }
}

export function* loginFlow() {
  // Watches for LOGIN['REQUEST'] actions and calls performLogin when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOGIN.REQUEST, performLogin);
  // yield takeLatest(LOGIN['FAILURE'], console.log("ERROR!!!"));
}

// Export the rootSaga
export default function* rootSaga() {
  yield all([loginFlow()]);
}
