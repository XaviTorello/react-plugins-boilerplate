/**
 * Try to login!
 */

import { call, put, takeLatest, all } from 'redux-saga/effects';
import request from 'utils/request';

import { menu } from 'containers/Skeleton/actions';

import { LOGIN, login } from './actions';

// import { makeSelectUsername } from 'containers/HomePage/selectors';

const api = '/api/v1';

/**
 * Perform Login throught the API
 */

export function* performLogin(payload) {
  const { username, password } = payload;

  // if (username && password)

  // Select username from store
  // const username = yield select(makeSelectUsername());
  const requestURL = `${api}/login`;

  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    };
    const result = yield call(request, requestURL, options);

    if (!result.error && result.token) {
      yield put(login.success(username, result));
    } else
      yield put(
        login.failure({ message: login.message || 'Invalid credentials' }),
      );

    yield put(menu.request(result.token));
  } catch (err) {
    yield put(login.failure(err));
    yield put(menu.request(''));
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
