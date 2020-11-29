import * as types from '../../types/project.enrollment';

export const startFetchingProjectEnrollment = studentId => ({
    type: types.FETCH_PROJECT_ENROLLMENT_STARTED,
    payload: {studentId},
});
  
export const completeFetchingProjectEnrollment = result => ({
    type: types.FETCH_PROJECT_ENROLLMENT_COMPLETED,
    payload: {
        result,
    },
});

export const failFetchingProjectEnrollment = error => ({
    type: types.FETCH_PROJECT_ENROLLMENT_FAILED,
    payload: {error},
});