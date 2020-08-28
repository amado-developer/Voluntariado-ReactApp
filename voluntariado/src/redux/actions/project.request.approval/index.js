import * as types from '../../types/project.request.approval';

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


export const startApprovingProjectRequest = id => ({
    type: types.PATCH_REQUEST_APPROVED_STARTED,
    payload: {id}
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
export const startRejectingProjectRequest = id => ({
    type: types.DELETE_REQUEST_STARTED,
    payload: {id}
});
  
export const completeRejectingProjectRequest = id => ({
    type: types.DELETE_REQUEST_COMPLETED,
    payload: {id}
});

export const failRejectingProjectRequest = error => ({
    type: types.DELETE_REQUEST_FAILED,
    payload: {error},
});