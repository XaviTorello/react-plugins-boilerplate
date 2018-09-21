/**
 * Try to fetch the menu!
 */

import { call, put, takeLatest, all } from 'redux-saga/effects';
import request from 'utils/request';

import { MENU, menu } from './actions';

// import { makeSelectUsername } from 'containers/HomePage/selectors';

const api = '/api/v1';

export function* getMenu(payload) {
  const { username } = payload;

  // if (username)

  // Select username from store
  // const username = yield select(makeSelectUsername());
  const requestURL = `${api}/menu`;

  try {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const loginResult = yield call(request, requestURL, options);

    const { items, itemsNumber, limit, offset, error } = loginResult;

    if (!error) yield put(menu.success(items));
    else yield put(menu.failure({ message: 'Invalid credentials' }));
  } catch (err) {
    yield put(menu.failure(err));
  }
}

export function* menuFlow() {
  yield takeLatest(MENU.REQUEST, getMenu);
}

export default function* rootSaga() {
  yield all([menuFlow()]);
}
