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
import {API_BASE_URL} from '../../../Config';

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

  export function* watchStudentManagerFetching() {
    yield takeEvery(types.FETCHING_STUDENTS_MANAGER_STARTED, 
    fetchStudentManager)
  }