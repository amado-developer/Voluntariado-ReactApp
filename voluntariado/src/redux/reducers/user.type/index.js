import { combineReducers } from 'redux';
import * as types from '../../types/authorization';

const userType = (state = 'UVG', action) => {
    switch (action.type){
      case types.CHANGE_USER_TYPE: {
        return action.payload.type;
      }
    }
    return state;
};

export default combineReducers({
    userType,
});

export const getUserType = state => state.userType;