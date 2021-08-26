import Api from '../Services/ApiCaller';
import {FETCH_USERS} from '../Redux/UserRedux';
import {call, cancelled, put} from 'redux-saga/effects';
import {printLogs} from '../Config/ReactotronConfig';

export function* fetchUserInfo(api, {payload = {}}) {
  try {
    const {response} = yield call(Api.callServer, api.fetchUsers, {}, true);
    yield put(FETCH_USERS.success(response));
    printLogs({response});
  } catch ({message}) {
    yield put(FETCH_USERS.failure({message}));
  } finally {
    if (!(yield cancelled())) {
      yield put(FETCH_USERS.fulfill());
    }
  }
}
