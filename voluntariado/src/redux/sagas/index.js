import { fork, all } from 'redux-saga/effects';
import {watchFacultyFetching} from '../sagas/faculties';
import {watchMajorFetching} from '../sagas/majors';
import {watchProjectRequestPosting} from '../sagas/projectRequest';
function* mainSaga() {
    yield all([
      fork(watchFacultyFetching),
      fork(watchMajorFetching),
      fork(watchProjectRequestPosting),
    ]);
  }
  
  export default mainSaga;