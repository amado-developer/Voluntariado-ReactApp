import {combineReducers} from 'redux';
import * as types from '../../types/company';

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.FETCHING_COMPANIES_COMPLETED: {
      const {entities, order} = action.payload;
      const newState = {...state};
        newState[order] = {
          ...entities[order],
      };
      return newState[order];
    }
    case types.FETCHING_COMPANIES_STARTED: {
      return {};
    }
  }
  return state;
};



const isFetching = (state = false, action) => {
    switch (action.type) {
      case types.FETCHING_COMPANIES_STARTED: {
        return true;
      }
      case types.FETCHING_COMPANIES_COMPLETED: {
        return false;
      }
      case types.FETCHING_COMPANIES_FAILED: {
        return false;
      }
      default: {
        return state;
      }
    }
};

const error = (state = null, action) => {
    switch (action.type) {
      case types.FETCHING_COMPANIES_FAILED: {
        return action.payload.error;
      }
      case types.FETCHING_COMPANIES_STARTED: {
        return null;
      }
      case types.FETCHING_COMPANIES_COMPLETED: {
        return null;
      }
      default: {
        return state;
      }
    }
};

export default combineReducers({
    byId,
    isFetching,
    error,
});

export const getCompany = state => state.byId;
export const getIsFetching = state => state.isFetching;
export const getError = state => state.error;