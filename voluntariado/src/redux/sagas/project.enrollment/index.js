import {
    call,
    takeEvery,
    put,
    select,
  } from 'redux-saga/effects';
import {normalize} from 'normalizr';

import * as selectors from '../../reducers';
import * as actions from '../../actions/project.enrollment';
import * as types from '../../types/project.enrollment';
import * as schemas from '../../schemas/project.enrollment';
import {API_BASE_URL} from '../../../config';

function* fetchProjectEnrollment(action){
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if(isAuth){
        const token = yield select(selectors.getAuthToken);
        const {studentId} = action.payload;
        const response = yield call(
          fetch,
          `${API_BASE_URL}/project-applications/is-enrolled/?id=${studentId}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `JWT ${token}`,
            },
          },
        );
        
        if (response.status === 200) {
          const jsonResult = yield response.json();
  
          yield put(
            actions.completeFetchingProjectEnrollment(jsonResult));
        } else {
          const {non_field_errors} = yield response.json();
          yield put(actions.failFetchingProjectEnrollment(non_field_errors[0]));
        }
      }
    } catch (error) {
        yield put(actions.failFetchingProjectEnrollment(error));
    }
};


export function* watchProjectEnrollmentFetching() {
    yield takeEvery(types.FETCH_PROJECT_ENROLLMENT_STARTED, 
    fetchProjectEnrollment)
};
