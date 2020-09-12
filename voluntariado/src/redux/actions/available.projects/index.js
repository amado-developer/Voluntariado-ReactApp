import * as types from '../../types/available.projects';

//========================================================================

export const startFetchingAvailableProjects = () => ({
    type: types.FETCHING_AVAILABLE_PROJECTS_STARTED,
});
  
export const completeFetchingAvailableProject = (entities, order) => ({
    type: types.FETCHING_AVAILABLE_PROJECTS_COMPLETED,
    payload: {
      entities,
      order,
    },
});

export const failFetchingAvailableProject = error => ({
    type: types.FETCHING_AVAILABLE_PROJECTS_FAILED,
    payload: {error},
});

//=======================================================================

export const startFetchingAvailableProjectImages = id => ({
    type: types.FETCHING_AVAILABLE_PROJECTS_IMAGES_STARTED,
    payload: {id}
});
  
export const completeFetchingAvailableProjectImages = (entities, order) => ({
    type: types.FETCHING_AVAILABLE_PROJECTS_IMAGES_COMPLETED,
    payload: {
        entities, 
        order,
    },
});

export const failFetchingAvailableProjectImages = error => ({
    type: types.FETCHING_AVAILABLE_PROJECTS_IMAGES_FAILED,
    payload: {error},
});

//==============================================================================

export const startFetchingAvailableProjectLinks = id => ({
    type: types.FETCHING_AVAILABLE_PROJECTS_LINKS_STARTED,
    payload: {id}
});
  
export const completeFetchingAvailableProjectLinks = (entities, order) => ({
    type: types.FETCHING_AVAILABLE_PROJECTS_LINKS_COMPLETED,
    payload: {
        entities,
        order,
    },
});

export const failFetchingAvailableProjectLinks = error => ({
    type: types.FETCHING_AVAILABLE_PROJECTS_LINKS_FAILED,
    payload: {error},
});


