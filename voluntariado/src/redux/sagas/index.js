import { fork, all } from 'redux-saga/effects';
import {watchFacultyFetching} from '../sagas/faculties';
import {watchMajorFetching} from '../sagas/majors';
import {watchProjectRequestPosting, 
        watchProjectRequestFetching,
        watchProjectRequestApproval,
        watchProjectRequestRejection,
        watchProjectRequestImagesFecthing,
        watchProjectRequestLinksFecthing,
      } from '../sagas/project.request';
import {watchLoginStarted} from '../sagas/authorization';
function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchFacultyFetching),
    fork(watchMajorFetching),
    fork(watchProjectRequestPosting),
    fork(watchProjectRequestFetching),
    fork(watchProjectRequestApproval),
    fork(watchProjectRequestRejection),
    fork(watchProjectRequestImagesFecthing),
    fork(watchProjectRequestLinksFecthing),
  ]);
}
  
  export default mainSaga;