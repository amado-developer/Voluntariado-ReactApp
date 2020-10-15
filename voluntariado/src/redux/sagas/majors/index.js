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
  import * as schemas from '../../schemas/majors';
  import * as types from '../../types/project.request';
  import * as actions from '../../actions/project.request';
  import {API_BASE_URL} from '../../../config'
  
  function* fetchMajors(action) {
      const {faculty} = action.payload;
      console.log(action.payload);
      console.log('gg')
    try {
        const response = yield call(
          fetch,
          `${API_BASE_URL}/majors/majors-by-faculty/?faculty=${faculty}`,
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
            entities: {majors},
            result,
          } = normalize(jsonResult, schemas.majors);

          yield put(actions.completeFetchingMajors(majors, result));
        } else {
          const {non_field_errors} = yield response.json();

          yield put(actions.failFetchingMajors(non_field_errors[0]));
        }
    } catch (error) {
      yield put(actions.failFetchingMajors(error));
      console.log(error)
    }
  }
  
export function* watchMajorFetching() {
    yield takeEvery(types.FETCHING_MAJORS_STARTED, fetchMajors);
}