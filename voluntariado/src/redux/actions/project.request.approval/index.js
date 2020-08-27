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