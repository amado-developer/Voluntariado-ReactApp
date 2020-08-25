import {
    call,
    takeEvery,
    put,
    // race,
    // all,
    delay,
    select,
  } from 'redux-saga/effects';
  
  import { API_BASE_URL } from '../../../config';
  import * as selectors from '../../reducers';
  import * as actions from '../../actions/authorization';
  import * as types from '../../types/authorization';
  
  
  function* login(action) {
    console.log(JSON.stringify(action.payload));
    try {
      const response = yield call(
        fetch,
        `${API_BASE_URL}/token-auth/`,
        {
          method: 'POST',
          body: JSON.stringify(action.payload),
          headers:{
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(response.status);
      if (response.status === 200) {
        const { token, user } = yield response.json();
        yield put(actions.completeLogin(token, user));
      } else {
        const { non_field_errors } = yield response.json();
        yield put(actions.failLogin(non_field_errors[0]));
      }
    } catch (error) {
      console.log(error)
      yield put(actions.failLogin(error));
    }
  }
  
  export function* watchLoginStarted() {
    yield takeEvery(
      types.AUTHENTICATION_STARTED,
      login,
    );
  }