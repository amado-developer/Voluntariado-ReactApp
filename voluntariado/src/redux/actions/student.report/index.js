import * as types from '../../types/student.report';

export const startPostingStudentReport = (hours, description, files, studentId, projectId) => ({
    type: types.POST_STUDENT_REPORT_STARTED,
    payload: {hours, description, files, studentId, projectId},
});
  
export const completePostingStudentReport = () => ({
    type: types.POST_STUDENT_REPORT_COMPLETED,
});

export const failPostingStudentReport = () => ({
    type: types.POST_STUDENT_REPORT_FAILED,
});