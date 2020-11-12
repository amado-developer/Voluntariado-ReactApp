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
import {watchLoginStarted, watchUpdateCVStarted} from '../sagas/authorization';
import {
  watchAvailableProjectFetching, 
  watchAvailableProjectImagesFecthing, 
  watchAvailableProjectLinksFecthing,
  watchRecommendedProjectsFetching,
} from '../sagas/available.projects';
import {watchStudentManagerFetching} from '../sagas/student.manager';
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
    fork(watchRecommendedProjectsFetching),
    fork(watchProjectRequestEmailPosting),
    fork(watchAvailableProjectFetching),
    fork(watchAvailableProjectImagesFecthing),
    fork(watchAvailableProjectLinksFecthing),
    fork(watchUpdateCVStarted),
    fork(watchStudentManagerFetching),
  ]);
}
  
  export default mainSaga;