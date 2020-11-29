import {
    call,
    takeEvery,
    put,
    select,
  } from 'redux-saga/effects';
import {normalize} from 'normalizr';

import * as selectors from '../../reducers';
import * as actions from '../../actions/student.manager';
import * as types from '../../types/student.manager';
import * as schemas from '../../schemas/student.manager';
import {API_BASE_URL} from '../../../config';

function* fetchStudentManager(action){
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if(isAuth){
        const token = yield select(selectors.getAuthToken);
        const {projectId} = action.payload;
        const response = yield call(
          fetch,
          `${API_BASE_URL}/project-applications/by-id/?id=${projectId}`,
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
          console.log(jsonResult);
          const {
            entities: { studentsManager },
            result,
          } = normalize(jsonResult, schemas.studentsManager);
  
          yield put(
            actions.completeFetchingStudentManager(
              studentsManager, 
              result)
            );
        } else {
          const {non_field_errors} = yield response.json();
          yield put(actions.failFetchingStudentManager(non_field_errors[0]));
        }
      }
    } catch (error) {
        yield put(actions.failFetchingStudentManager(error));
    }
};

function* patchAcceptedStudent(action){
  try {
    const isAuth = yield select(selectors.isAuthenticated);
    if(isAuth){
      const token = yield select(selectors.getAuthToken);
      const {projectId} = action.payload;
      const response = yield call(
        fetch,
        `${API_BASE_URL}/project-applications/${projectId}/`,
        {
          method: 'PATCH',
          body: JSON.stringify({state: 'Accepted'}),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${token}`,
          },
        },
      );
      if (response.status === 200) {
        yield put(actions.completeAcceptingStudent(projectId));
      }
      else {
        yield put(actions.failAcceptingStudent('Error'));
      }
    }
  } catch (error) {
    yield put(actions.failAcceptingStudent(error));
}
      
};

function* patchRejectedStudent(action){
  try {
    const isAuth = yield select(selectors.isAuthenticated);
    if(isAuth){
      const token = yield select(selectors.getAuthToken);
      const {projectId} = action.payload;
      const response = yield call(
        fetch,
        `${API_BASE_URL}/project-applications/${projectId}/`,
        {
          method: 'PATCH',
          body: JSON.stringify({state: 'Rejected'}),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${token}`,
          },
        },
      );
      if (response.status === 200) {
        yield put(actions.completeRejectingStudent(projectId));
      }
      else {
        yield put(actions.failRejectingStudent('Error'));
      }
    }
  } catch (error) {
    yield put(actions.failRejectingStudent(error));
}
};

export function* watchStudentManagerFetching() {
    yield takeEvery(types.FETCHING_STUDENTS_MANAGER_STARTED, 
    fetchStudentManager)
};

export function* watchStudentAcceptance(){
  yield takeEvery(types.ACCEPT_STUDENT_STARTED,
    patchAcceptedStudent)
};

export function* watchStudentRejection(){
  yield takeEvery(types.REJECT_STUDENT_STARTED,
    patchRejectedStudent)
};