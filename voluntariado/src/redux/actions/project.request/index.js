import * as types from '../../types/project.request';

export const startFetchingFaculties = () => ({
    type: types.FETCHING_FACULTIES_STARTED,
  });
  
export const completeFetchingFaculties = (entities, order) => ({
    type: types.FETCHING_FACULTIES_COMPLETED,
    payload: {
      entities,
      order,
    },
  });

export const failFetchingFaculties = error => ({
    type: types.FETCHING_FACULTIES_FAILED,
    payload: {error},
  });


//MAJORS
export const startFetchingMajors = faculty => ({
    type: types.FETCHING_MAJORS_STARTED,
    payload: {faculty},
  });
  
export const completeFetchingMajors = (entities, order) => ({
    type: types.FETCHING_MAJORS_COMPLETED,
    payload: {
      entities,
      order,
    },
  });

export const failFetchingMajors = error => ({
    type: types.FETCHING_MAJORS_FAILED,
    payload: {error},
  });

export const startPostProjectRequestForm = (
  id, inputValues, description, requirements, faculty, major, aboutUs, images, links, tags
  ) => ({
  type: types.POST_PROJECT_REQUEST_FORM_STARTED,
  payload: {id, inputValues, description, requirements, faculty, major, aboutUs, images, links, tags},
});

export const completePostProjectRequestForm = (response) => ({
  type: types.POST_PROJECT_REQUEST_FORM_COMPLETED,
  payload: {response}
});

export const failPostProjectRequestForm = error => ({
  type: types.POST_PROJECT_REQUEST_FORM_FAILED,
  payload: {error},
});

export const selectFaculty = faculty => ({
  type: types.SELECT_FACULTY,
  payload: {faculty},
});

export const selectMajor = major => ({
  type: types.SELECT_MAJOR,
  payload: {major},
});

export const startSendingRequestEmail = (major, company, projectName, email) =>({
  type: types.SENDING_REQUEST_EMAIL_STARTED,
  payload: {major, company, projectName, email},
});

export const completeSendingRequestEmail = (response) =>({
  type: types.SENDING_REQUEST_EMAIL_COMPLETED,
  payload: {response},
});

export const failSendingRequestEmail = (error) =>({
  type: types.SENDING_REQUEST_EMAIL_FAILED,
  payload: {error},
});