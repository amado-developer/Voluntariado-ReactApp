import {
    call,
    takeEvery,
    put,
    select,
  } from 'redux-saga/effects';

import * as selectors from '../../reducers';
import * as actions from '../../actions/student.report';
import * as types from '../../types/student.report';
import {API_BASE_URL} from '../../../config';
import axios from 'axios';

function* postProjectReport(action){
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if(isAuth){
        const token = yield select(selectors.getAuthToken);
        const {studentId, projectId, files, description, hours} = action.payload;
        const response = yield call(
          fetch,
          `${API_BASE_URL}/student-report/send-report/`,
          {
            method: 'POST',
            body: JSON.stringify({hours, studentId, projectId, description}),
            headers: {
              'Content-Type': 'application/json',
              Authorization: `JWT ${token}`,
            },
          },
        );
        if (response.status === 200) {
          const files_data = new FormData();
          files.map(file => files_data.append('file', file))
          yield axios.post(`${API_BASE_URL}/student-report-media/upload-files/`, files_data, {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        })
          yield put(
            actions.completePostingStudentReport());
        } else {
          yield put(actions.failPostingStudentReport());
        }
      }
    } catch (error) {
        yield put(actions.failPostingStudentReport());
    }
};


export function* watchStudentReportPosting() {
    yield takeEvery(types.POST_STUDENT_REPORT_STARTED, 
    postProjectReport)
};
