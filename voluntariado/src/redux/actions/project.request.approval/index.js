import * as types from '../../types/project.request.approval';

//========================================================================

export const startFetchingProjectRequest = () => ({
    type: types.FETCHING_REQUESTS_STARTED,
});
  
export const completeFetchingProjectRequest = (entities, order) => ({
    type: types.FETCHING_REQUESTS_COMPLETED,
    payload: {
      entities,
      order,
    },
});

export const failFetchingProjectRequest = error => ({
    type: types.FETCHING_REQUESTS_FAILED,
    payload: {error},
});

//=======================================================================


export const startApprovingProjectRequest = (id, email, company, project) => ({
    type: types.PATCH_REQUEST_APPROVED_STARTED,
    payload: {id, email, company, project}
});
  
export const completeApprovingProjectRequest = id => ({
    type: types.PATCH_REQUEST_APPROVED_COMPLETED,
    payload: {id}
});

export const failApprovingProjectRequest = error => ({
    type: types.PATCH_REQUEST_APPROVED_FAILED,
    payload: {error},
});


//=========================================================================

export const startRejectingProjectRequest = (id, email, company, project) => ({
    type: types.DELETE_REQUEST_STARTED,
    payload: {id, email, company, project}
});
  
export const completeRejectingProjectRequest = id => ({
    type: types.DELETE_REQUEST_COMPLETED,
    payload: {id}
});

export const failRejectingProjectRequest = error => ({
    type: types.DELETE_REQUEST_FAILED,
    payload: {error},
});

//============================================================================

export const selectProjectRequest = id => ({
    type: types.PROJECT_REQUEST_SELECTED,
    payload: {id}
});

//============================================================================

export const startFetchingProjectRequestImages = id => ({
    type: types.FETCHING_PROJECT_REQUEST_IMAGES_STARTED,
    payload: {id}
});
  
export const completeFetchingProjectRequestImages = (entities, order) => ({
    type: types.FETCHING_PROJECT_REQUEST_IMAGES_COMPLETED,
    payload: {
        entities, 
        order,
    },
});

export const failFetchingProjectRequestImages = error => ({
    type: types.FETCHING_PROJECT_REQUEST_IMAGES_FAILED,
    payload: {error},
});

//==============================================================================

export const startFetchingProjectRequestLinks = id => ({
    type: types.FETCHING_PROJECT_REQUEST_LINKS_STARTED,
    payload: {id}
});
  
export const completeFetchingProjectRequestLinks = (entities, order) => ({
    type: types.FETCHING_PROJECT_REQUEST_LINKS_COMPLETED,
    payload: {
        entities,
        order,
    },
});

export const failFetchingProjectRequestLinks = error => ({
    type: types.FETCHING_PROJECT_REQUEST_LINKS_FAILED,
    payload: {error},
});


