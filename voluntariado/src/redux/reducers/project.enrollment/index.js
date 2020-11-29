import {combineReducers} from 'redux';
import * as types from '../../types/project.enrollment';

const status = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_PROJECT_ENROLLMENT_COMPLETED: {
      console.log(action.payload);
      const {result} = action.payload;
      const newState = result;
      return newState;
    }
    case types.FETCH_PROJECT_ENROLLMENT_STARTED: {
      return {};
    }
  }
  return state;
};


const isFetching = (state = false, action) => {
    switch (action.type) {
      case types.FETCH_PROJECT_ENROLLMENT_STARTED: {
        return true;
      }
      case types.FETCH_PROJECT_ENROLLMENT_COMPLETED: {
        return false;
      }
      case types.FETCH_PROJECT_ENROLLMENT_FAILED: {
        return false;
      }
      default: {
        return state;
      }
    }
};

const error = (state = null, action) => {
    switch (action.type) {
      case types.FETCH_PROJECT_ENROLLMENT_FAILED: {
        return action.payload.error;
      }
      case types.FETCH_PROJECT_ENROLLMENT_STARTED: {
        return null;
      }
      case types.FETCH_PROJECT_ENROLLMENT_COMPLETED: {
        return null;
      }
      default: {
        return state;
      }
    }
};

export default combineReducers({
    status,
    isFetching,
    error,
});

export const getProjectEnrollmentStatus = state => state.status;
export const getIsFetching = state => state.isFetching;
export const getError = state => state.error;