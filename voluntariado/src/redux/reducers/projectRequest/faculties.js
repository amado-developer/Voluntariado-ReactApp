import * as types from '../../types/projectRequest';
import {combineReducers} from 'redux';

const byId = (state = null, action) => {
    switch (action.type) {
      case types.FETCHING_FACULTIES_COMPLETED: {
        const {entities, order} = action.payload;
        const newState = {...state};
        order.forEach(id => {
          newState[id] = {
            ...entities[id],
          };
        });
        return newState;
      }
      case types.FETCHING_FACULTIES_STARTED: {
        return {};
      }
      default: {
        return state;
      }
    }
  };

const order = (state = [], action) => {
    switch (action.type) {
      case types.FETCHING_FACULTIES_COMPLETED: {
        return [...state, ...action.payload.order];
      }
      case types.FETCHING_FACULTIES_STARTED: {
        return [];
      }
    }
    return state;
  };
  
const isFetching = (state = false, action) => {
    switch (action.type) {
      case types.FETCHING_FACULTIES_STARTED: {
        return true;
      }
      case types.FETCHING_FACULTIES_COMPLETED: {
        return false;
      }
      case types.FETCHING_FACULTIES_FAILED: {
        return false;
      }
      default: {
        return state;
      }
    }
};
  
const error = (state = null, action) => {
    switch (action.type) {
      case types.FETCHING_FACULTIES_FAILED: {
        return action.payload.error;
      }
      case types.FETCHING_FACULTIES_STARTED: {
        return null;
      }
      case types.FETCHING_FACULTIES_COMPLETED: {
        return null;
      }
      default: {
        return state;
      }
    }
};

const selectedFaculty = (state = null, action) =>{
  switch (action.type){
    case types.SELECT_FACULTY: {
      return action.payload.faculty;
    }
  }
  return state;
};


export default combineReducers({
    byId,
    order,
    isFetching,
    error,
    selectedFaculty,
});

//SELECTORS
export const getFaculty = (state, id) => state.byId[id];

export const getFaculties = state => state.order.map(
    id => getFaculty(state, id));

export const getIsFeching = state => state.isFeching;
export const getError = state => state.error;

export const getSelectedFaculty = state => state.selectedFaculty;




