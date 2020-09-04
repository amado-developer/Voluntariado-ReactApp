import omit from 'lodash/omit';
import {combineReducers} from 'redux';
import * as types from '../../types/project.request.approval';


const byId = (state = {}, action) => {
  switch (action.type) {
    case types.FETCHING_REQUESTS_COMPLETED: {
      const {entities, order} = action.payload;
      const newState = {...state};
      order.forEach(id => {
        newState[id] = {
          ...entities[id],
        };
      });
      return newState;
    }
    case types.FETCHING_REQUESTS_STARTED: {
      return {};
    }
    case types.PATCH_REQUEST_APPROVED_COMPLETED:{
      return omit(state, action.payload.id);
    }
    case types.DELETE_REQUEST_COMPLETED:{
      return omit(state, action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const imagesById = (state={}, action) => {
  switch (action.type){
    case types.FETCHING_PROJECT_REQUEST_IMAGES_COMPLETED:{
      const {entities, order} = action.payload;
      const newState = {...state};
      order.forEach(id => {
        newState[id] = {
          ...entities[id],
        };
      });
      return newState;
    }
    case types.FETCHING_PROJECT_REQUEST_IMAGES_STARTED:{
      return {};
    }
    case types.FETCHING_PROJECT_REQUEST_IMAGES_FAILED:{
      return {};
    }
  }
  return state;
};

const linksById = (state={}, action) =>{
  switch (action.type){
    case types.FETCHING_PROJECT_REQUEST_LINKS_COMPLETED:{
      const {entities, order} = action.payload;
      const newState = {...state};
      order.forEach(id => {
        newState[id] = {
          ...entities[id],
        };
      });
      
      return newState;
    }
    case types.FETCHING_PROJECT_REQUEST_LINKS_STARTED:{
      return {};
    }
    case types.FETCHING_PROJECT_REQUEST_LINKS_FAILED:{
      return {};
    }
  }
  return state;
};

const order = (state = [], action) => {
  switch (action.type) {
    case types.FETCHING_REQUESTS_COMPLETED: {
      return [...state, ...action.payload.order];
    }
    case types.FETCHING_REQUESTS_STARTED: {
      return [];
    }
    case types.PATCH_REQUEST_APPROVED_COMPLETED:{
      return state.filter(id => id !== action.payload.id);
    }
    case types.DELETE_REQUEST_COMPLETED:{
      return state.filter(id => id !== action.payload.id);
    }
  }
  return state;
};

const imagesOrder = (state = [], action) => {
  switch (action.type) {
    case types.FETCHING_PROJECT_REQUEST_IMAGES_COMPLETED: {
      return [...state, ...action.payload.order];
    }
    case types.FETCHING_PROJECT_REQUEST_IMAGES_STARTED: {
      return [];
    }
  }
  return state;
};

const linksOrder = (state = [], action) => {
  switch (action.type) {
    case types.FETCHING_PROJECT_REQUEST_LINKS_COMPLETED: {
      return [...state, ...action.payload.order];
    }
    case types.FETCHING_PROJECT_REQUEST_LINKS_STARTED: {
      return [];
    }
  }
  return state;
};
  
const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.FETCHING_REQUESTS_STARTED: {
      return true;
    }
    case types.FETCHING_REQUESTS_COMPLETED: {
      return false;
    }
    case types.FETCHING_REQUESTS_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const isFetchingImages = (state = false, action) => {
  switch (action.type) {
    case types.FETCHING_PROJECT_REQUEST_IMAGES_STARTED: {
      return true;
    }
    case types.FETCHING_PROJECT_REQUEST_IMAGES_COMPLETED: {
      return false;
    }
    case types.FETCHING_PROJECT_REQUEST_IMAGES_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};


const isFetchingLinks = (state = false, action) => {
  switch (action.type) {
    case types.FETCHING_PROJECT_REQUEST_LINKS_STARTED: {
      return true;
    }
    case types.FETCHING_PROJECT_REQUEST_LINKS_COMPLETED: {
      return false;
    }
    case types.FETCHING_PROJECT_REQUEST_LINKS_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

  
const error = (state = null, action) => {
  switch (action.type) {
    case types.FETCHING_REQUESTS_FAILED: {
      return action.payload.error;
    }
    case types.FETCHING_REQUESTS_STARTED: {
      return null;
    }
    case types.FETCHING_REQUESTS_COMPLETED: {
      return null;
    }
    default: {
      return state;
    }
  }
};

const selectedProjectRequest = (state=null, action) =>{
  switch (action.type){
    case types.PROJECT_REQUEST_SELECTED:{
      return action.payload.id;
    }
  }
  return state;
}


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
    selectedProjectRequest,
});

//SELECTORS
export const getProjectRequest = (state, id) => state.byId[id];
export const getProjectRequests = state => state.order.map(
    id => getProjectRequest(state, id));

export const getProjectImage = (state, id) => state.imagesById[id];
export const getProjectImages = state => state.imagesOrder.map(
    id => getProjectImage(state, id));
export const getIsFetchingProjectImages = state => state.isFetchingImages;

export const getProjectLink = (state, id) => state.linksById[id];
export const getProjectLinks = state => state.linksOrder.map(
    id => getProjectLink(state, id));
export const getIsFetchingProjectLinks = state => state.isFetchingLinks;

export const getIsFetching = state => state.isFetching;
export const getError = state => state.error;
export const getSelectedProjectRequest = state => state.selectedProjectRequest;
