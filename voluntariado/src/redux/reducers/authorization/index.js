import { combineReducers } from 'redux';
import jwtDecode from 'jwt-decode';
import * as types from '../../types/authorization';
import {SERVER} from '../../../config';

const token = (state = null, action) => {
  switch(action.type) {
    case types.AUTHENTICATION_STARTED: {
      return null;
    }
    case types.AUTHENTICATION_COMPLETED: {
      return action.payload.token;
    }

    case types.AUTHENTICATION_FAILED: {
      return null;
    }
  }

  return state;
};

const user = (state = {}, action) =>{
    switch(action.type) {
        case types.AUTHENTICATION_STARTED: {
          return {};
        }

        case types.AUTHENTICATION_COMPLETED: {
          return action.payload.user;
        }
        
        case types.AUTHENTICATION_FAILED: {
          return {};
        }

        case types.UPDATE_CV_COMPLETED:{
          const {cv} = action.payload;
          let newState = state;
          newState.cv = `${SERVER}/media/${cv.name}`;
          return newState;
        }
      }
      return state;
}

const decoded = (state = null, action) => {
  switch(action.type) {
    case types.AUTHENTICATION_STARTED: {
      return null;
    }
    case types.AUTHENTICATION_COMPLETED: {
      return jwtDecode(action.payload.token);
    }
    
    case types.AUTHENTICATION_FAILED: {
      return null;
    }
  }

  return state;
};

const isAuthenticating = (state = false, action) => {
  switch(action.type) {
    case types.AUTHENTICATION_STARTED: {
      return true;
    }
    case types.AUTHENTICATION_COMPLETED: {
      return false;
    }
    case types.AUTHENTICATION_FAILED: {
      return false;
    }
  }

  return state;
};

const error = (state = null, action) => {
  switch(action.type) {
    case types.AUTHENTICATION_STARTED: {
      return null;
    }
    case types.AUTHENTICATION_COMPLETED: {
      return null;
    }
    case types.AUTHENTICATION_FAILED: {
      return action.payload.error;
    }
  }

  return state;
};



export default combineReducers({
  token,
  decoded,
  isAuthenticating,
  error,
  user,
});


export const getAuthToken = state => state.token;
export const getIsAuthenticating = state => state.isAuthenticating;
export const getAuthenticatingError = state => state.error;
export const getAuthUserID = state => state.decoded ? state.decoded.user_id : null;
export const getAuthExpiration = state => state.decoded ? state.decoded.exp : null;
export const getAuthUser = state => state.user;
