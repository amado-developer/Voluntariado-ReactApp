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


//============================================================================
export const startAcceptingStudent = projectId => ({
    type: types.ACCEPT_STUDENT_STARTED,
    payload: {projectId},
});
  
export const completeAcceptingStudent = projectId => ({
    type: types.ACCEPT_STUDENT_COMPLETED,
    payload: {projectId},
});

export const failAcceptingStudent = error => ({
    type: types.ACCEPT_STUDENT_FAILED,
    payload: {error},
});
//=============================================================================
export const startRejectingStudent = projectId => ({
    type: types.REJECT_STUDENT_STARTED,
    payload: {projectId},
});
  
export const completeRejectingStudent = projectId => ({
    type: types.REJECT_STUDENT_COMPLETED,
    payload: {projectId},
});

export const failRejectingStudent = error => ({
    type: types.REJECT_STUDENT_FAILED,
    payload: {error},
});
//============================================================================