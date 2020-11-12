import omit from 'lodash/omit';
import {combineReducers} from 'redux';
import * as types from '../../types/student.manager';

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.FETCHING_STUDENTS_MANAGER_COMPLETED: {
      const {entities, order} = action.payload;
      const newState = {...state};
      order.forEach(id => {
        newState[id] = {
          ...entities[id],
        };
      });
      return newState;
    }
    case types.FETCHING_STUDENTS_MANAGER_STARTED: {
      return {};
    }
  }
  return state;
};

const order = (state = [], action) => {
    switch (action.type) {
      case types.FETCHING_STUDENTS_MANAGER_COMPLETED: {
        return [...state, ...action.payload.order];
      }
      case types.FETCHING_STUDENTS_MANAGER_STARTED: {
        return [];
      }
    }
    return state;
  };

const isFetching = (state = false, action) => {
    switch (action.type) {
      case types.FETCHING_STUDENTS_MANAGER_STARTED: {
        return true;
      }
      case types.FETCHING_STUDENTS_MANAGER_COMPLETED: {
        return false;
      }
      case types.FETCHING_STUDENTS_MANAGER_FAILED: {
        return false;
      }
      default: {
        return state;
      }
    }
};

const error = (state = null, action) => {
    switch (action.type) {
      case types.FETCHING_STUDENTS_MANAGER_FAILED: {
        return action.payload.error;
      }
      case types.FETCHING_STUDENTS_MANAGER_STARTED: {
        return null;
      }
      case types.FETCHING_STUDENTS_MANAGER_COMPLETED: {
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

export const getStudentManager = (state, id) => state.byId[id];
export const getStudentsManager = state => state.order.map(
    id => getStudentManager(state, id));
export const getOrderedStudentsManager = state => state.order;
export const getIsFetching = state => state.isFetching;
export const getError = state => state.error;