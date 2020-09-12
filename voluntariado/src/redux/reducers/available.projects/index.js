import {combineReducers} from 'redux';
import * as types from '../../types/available.projects';

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.FETCHING_AVAILABLE_PROJECTS_COMPLETED: {
      const {entities, order} = action.payload;
      const newState = {...state};
      order.forEach(id => {
        newState[id] = {
          ...entities[id],
        };
      });
      return newState;
    }
    case types.FETCHING_AVAILABLE_PROJECTS_STARTED: {
      return {};
    }

    default: {
      return state;
    }
  }
};

const imagesById = (state={}, action) => {
  switch (action.type){
    case types.FETCHING_AVAILABLE_PROJECTS_IMAGES_COMPLETED:{
      const {entities, order} = action.payload;
      const newState = {...state};
      order.forEach(id => {
        newState[id] = {
          ...entities[id],
        };
      });
      return newState;
    }
    case types.FETCHING_AVAILABLE_PROJECTS_IMAGES_STARTED:{
      return {};
    }
    case types.FETCHING_AVAILABLE_PROJECTS_IMAGES_FAILED:{
      return {};
    }
  }
  return state;
};

const linksById = (state={}, action) =>{
  switch (action.type){
    case types.FETCHING_AVAILABLE_PROJECTS_LINKS_COMPLETED:{
      const {entities, order} = action.payload;
      const newState = {...state};
      order.forEach(id => {
        newState[id] = {
          ...entities[id],
        };
      });
      return newState;
    }
    case types.FETCHING_AVAILABLE_PROJECTS_LINKS_STARTED:{
      return {};
    }
    case types.FETCHING_AVAILABLE_PROJECTS_LINKS_FAILED:{
      return {};
    }
  }
  return state;
};

const order = (state = [], action) => {
  switch (action.type) {
    case types.FETCHING_AVAILABLE_PROJECTS_COMPLETED: {
      return [...state, ...action.payload.order];
    }
    case types.FETCHING_AVAILABLE_PROJECTS_STARTED: {
      return [];
    }
    case types.FETCHING_AVAILABLE_PROJECTS_FAILED: {
      return [];
    }
  }
  return state;
};

const imagesOrder = (state = [], action) => {
  switch (action.type) {
    case types.FETCHING_AVAILABLE_PROJECTS_IMAGES_COMPLETED: {
      return [...state, ...action.payload.order];
    }
    case types.FETCHING_AVAILABLE_PROJECTS_IMAGES_STARTED: {
      return [];
    }
    case types.FETCHING_AVAILABLE_PROJECTS_IMAGES_FAILED: {
      return [];
    }
  }
  return state;
};

const linksOrder = (state = [], action) => {
  switch (action.type) {
    case types.FETCHING_AVAILABLE_PROJECTS_LINKS_COMPLETED: {
      return [...state, ...action.payload.order];
    }
    case types.FETCHING_AVAILABLE_PROJECTS_LINKS_STARTED: {
      return [];
    }
  }
  return state;
};
  
const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.FETCHING_AVAILABLE_PROJECTS_STARTED: {
      return true;
    }
    case types.FETCHING_AVAILABLE_PROJECTS_COMPLETED: {
      return false;
    }
    case types.FETCHING_AVAILABLE_PROJECTS_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const isFetchingImages = (state = false, action) => {
  switch (action.type) {
    case types.FETCHING_AVAILABLE_PROJECTS_IMAGES_STARTED: {
      return true;
    }
    case types.FETCHING_AVAILABLE_PROJECTS_IMAGES_COMPLETED: {
      return false;
    }
    case types.FETCHING_AVAILABLE_PROJECTS_IMAGES_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};


const isFetchingLinks = (state = false, action) => {
  switch (action.type) {
    case types.FETCHING_AVAILABLE_PROJECTS_LINKS_STARTED: {
      return true;
    }
    case types.FETCHING_AVAILABLE_PROJECTS_LINKS_COMPLETED: {
      return false;
    }
    case types.FETCHING_AVAILABLE_PROJECTS_LINKS_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

  
const error = (state = null, action) => {
  switch (action.type) {
    case types.FETCHING_AVAILABLE_PROJECTS_FAILED: {
      return action.payload.error;
    }
    case types.FETCHING_AVAILABLE_PROJECTS_STARTED: {
      return null;
    }
    case types.FETCHING_AVAILABLE_PROJECTS_COMPLETED: {
      return null;
    }
    default: {
      return state;
    }
  }
};

// const selectedProjectRequest = (state=null, action) =>{
//   switch (action.type){
//     case types.PROJECT_REQUEST_SELECTED:{
//       return action.payload.id;
//     }
//   }
//   return state;
// }

export default combineReducers({
    byId,
    imagesById,
    linksById,
    order,
    imagesOrder,
    linksOrder,
    isFetching,
    isFetchingImages,
    isFetchingLinks,
    error,
    // selectedProjectRequest,
});

//SELECTORS
export const getAvailableProject = (state, id) => state.byId[id];
export const getAvailableProjects = state => state.order.map(
    id => getAvailableProject(state, id));

export const getAvailableProjectImage = (state, id) => state.imagesById[id];
export const getAvailableProjectImages = state => state.imagesOrder.map(
    id => getAvailableProjectImage(state, id));
export const getIsFetchingAvailableProjectImages = state => state.isFetchingImages;

export const getAvailableProjectLink = (state, id) => state.linksById[id];
export const getAvailableProjectLinks = state => state.linksOrder.map(
    id => getAvailableProjectLink(state, id));
export const getIsFetchingAvailableProjectLinks = state => state.isFetchingLinks;

export const getIsFetching = state => state.isFetching;
export const getError = state => state.error;
// export const getSelectedProjectRequest = state => state.selectedProjectRequest;
