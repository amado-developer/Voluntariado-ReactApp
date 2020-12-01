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
import {watchStudentManagerFetching, watchStudentAcceptance, watchStudentRejection} from '../sagas/student.manager';
import {
  watchCompaniesFetching, 
  watchCompanyProjectsFetching, 
  watchCompanyProjectReportsFetching,
  watchCompanyProjectReportsMediaFetching,
} from './company';
import {watchProjectEnrollmentFetching} from './project.enrollment';
import {watchStudentReportPosting} from './student.report';
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
    fork(watchStudentAcceptance),
    fork(watchStudentRejection),
    fork(watchCompaniesFetching),
    fork(watchProjectEnrollmentFetching),
    fork(watchStudentReportPosting),
    fork(watchCompanyProjectsFetching),
    fork(watchCompanyProjectReportsFetching),
    fork(watchCompanyProjectReportsMediaFetching),
  ]);
}
  
  export default mainSaga;