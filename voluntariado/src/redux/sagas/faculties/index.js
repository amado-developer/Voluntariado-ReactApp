import {
    call,
    takeEvery,
    put,
    race,
    all,
    delay,
    select,
  } from 'redux-saga/effects';

  import {normalize} from 'normalizr';
  import * as schemas from '../../schemas/faculties';
  import * as types from '../../types/project.request';
  import * as actions from '../../actions/project.request';
  import {API_BASE_URL} from '../../../Config'
  
  function* fetchFaculties(action) {
    try {
        const response = yield call(
          fetch,
          `${API_BASE_URL}/faculties/`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
  
      
        if (response.status === 200) {
          const jsonResult = yield response.json();
          const {
            entities: {faculties},
            result,
          } = normalize(jsonResult, schemas.faculties);

          yield put(actions.completeFetchingFaculties(faculties, result));
        } else {
          const {non_field_errors} = yield response.json();

          yield put(actions.failFetchingFaculties(non_field_errors[0]));
        }
    } catch (error) {
      yield put(actions.failFetchingFaculties(error));
      console.log(error)
    }
  }
  
export function* watchFacultyFetching() {
    yield takeEvery(types.FETCHING_FACULTIES_STARTED, fetchFaculties);
}