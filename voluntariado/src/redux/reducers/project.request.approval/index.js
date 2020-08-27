import * as types from '../../types/project.request.approval';
import {combineReducers} from 'redux';

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