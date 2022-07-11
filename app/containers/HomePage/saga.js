/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { REDACT_MESSAGE } from 'containers/App/constants';
import { messageRedacted, redactMessageError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectMessage } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select message from store
  const message = yield select(makeSelectMessage());
  const requestURL = `https://api.github.com/users/${message}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(messageRedacted(repos, message));
  } catch (err) {
    yield put(redactMessageError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for REDACT_MESSAGE actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(REDACT_MESSAGE, getRepos);
}
