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

export default combineReducers({
    byId,
    order,
    isFetching,
    error,
});

//SELECTORS
export const getProjectRequest = (state, id) => state.byId[id];
export const getProjectRequests = state => state.order.map(
    id => getProjectRequest(state, id));
export const getIsFeching = state => state.isFeching;
export const getError = state => state.error;