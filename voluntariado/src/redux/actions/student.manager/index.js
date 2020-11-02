import * as types from '../../types/student.manager';

export const startFetchingStudentManager = projectId => ({
    type: types.FETCHING_STUDENTS_MANAGER_STARTED,
    payload: {projectId},
});
  
export const completeFetchingStudentManager = (entities, order) => ({
    type: types.FETCHING_STUDENTS_MANAGER_COMPLETED,
    payload: {
      entities,
      order,
    },
});

export const failFetchingStudentManager = error => ({
    type: types.FETCHING_STUDENTS_MANAGER_FAILED,
    payload: {error},
});