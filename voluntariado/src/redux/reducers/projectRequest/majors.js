import * as types from '../../types/projectRequest';
import {combineReducers} from 'redux';

const byId = (state = null, action) => {
    switch (action.type) {
      case types.FETCHING_MAJORS_COMPLETED: {
        const {entities, order} = action.payload;
        const newState = {...state};
        order.forEach(id => {
          newState[id] = {
            ...entities[id],
          };
        });
        return newState;
      }
      case types.FETCHING_MAJORS_STARTED: {
        return {};
      }
      default: {
        return state;
      }
    }
  };

const order = (state = [], action) => {
    switch (action.type) {
      case types.FETCHING_MAJORS_COMPLETED: {
        return [...state, ...action.payload.order];
      }
      case types.FETCHING_MAJORS_STARTED: {
        return [];
      }
    }
    return state;
  };
  
const isFetching = (state = false, action) => {
    switch (action.type) {
      case types.FETCHING_MAJORS_STARTED: {
        return true;
      }
      case types.FETCHING_MAJORS_COMPLETED: {
        return false;
      }
      case types.FETCHING_MAJORS_FAILED: {
        return false;
      }
      default: {
        return state;
      }
    }
};
  
const error = (state = null, action) => {
    switch (action.type) {
      case types.FETCHING_MAJORS_FAILED: {
        return action.payload.error;
      }
      case types.FETCHING_MAJORS_STARTED: {
        return null;
      }
      case types.FETCHING_MAJORS_COMPLETED: {
        return null;
      }
      default: {
        return state;
      }
    }
};

const selectedMajor = (state = null, action) =>{
  switch (action.type){
    case types.SELECT_MAJOR: {
      return action.payload.major;
    }
  }
  return state;
};

export default combineReducers({
    byId,
    order,
    isFetching,
    error,
    selectedMajor,
});

//SELECTORS
export const getMajor = (state, id) => state.byId[id];
export const getMajors = state => state.order.map(
    id => getMajor(state, id));
export const getIsFeching = state => state.isFeching;
export const getError = state => state.error;
export const getSelectedMajor = state => state.selectedMajor;