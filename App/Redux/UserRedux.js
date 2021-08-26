import {createRoutine} from 'redux-saga-routines';

export const FETCH_USERS = createRoutine('FETCH_USERS');

export const INITIAL_STATE = {
  users: [],
  fetchUsersLoading: false,
  fetchUsersError: '',
};

export const reducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case FETCH_USERS.TRIGGER:
      return {...state, fetchUsersLoading: true};
    case FETCH_USERS.SUCCESS: {
      return {...state, users: payload};
    }
    case FETCH_USERS.FAILURE: {
      const {message} = payload || {};
      return {...state, fetchUsersError: message};
    }
    case FETCH_USERS.FULFILL:
      return {...state, fetchUsersLoading: false};

    default:
      return state;
  }
};
