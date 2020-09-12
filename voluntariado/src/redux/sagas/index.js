import { fork, all } from 'redux-saga/effects';
import {watchFacultyFetching} from '../sagas/faculties';
import {watchMajorFetching} from '../sagas/majors';
import {watchProjectRequestPosting, 
        watchProjectRequestFetching,
        watchProjectRequestApproval,
        watchProjectRequestRejection,
        watchProjectRequestImagesFecthing,
        watchProjectRequestLinksFecthing,
        watchProjectRequestEmailPosting,
      } from '../sagas/project.request';
import {watchLoginStarted} from '../sagas/authorization';
import {
  watchAvailableProjectFetching, 
  watchAvailableProjectImagesFecthing, 
  watchAvailableProjectLinksFecthing
} from '../sagas/available.projects';
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
    fork(watchProjectRequestEmailPosting),
    fork(watchAvailableProjectFetching),
    fork(watchAvailableProjectImagesFecthing),
    fork(watchAvailableProjectLinksFecthing),
  ]);
}
  
  export default mainSaga;