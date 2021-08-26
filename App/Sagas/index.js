// noinspection JSCheckFunctionSignatures

import API from '../Services/Api';
import {all, takeLatest} from 'redux-saga/effects';
import {FETCH_USERS} from '../Redux/UserRedux';
import {fetchUserInfo} from './UserSagas';

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
export const api = API.create();

export default function* root() {
  yield all([
    //user
    takeLatest(FETCH_USERS.TRIGGER, fetchUserInfo, api),
  ]);
}
