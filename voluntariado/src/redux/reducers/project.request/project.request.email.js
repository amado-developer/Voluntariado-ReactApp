import * as types from '../../types/project.request';
import {combineReducers} from 'redux';

const projectRequestEmail = (state={}, action) =>{
    switch(action.type){
        case types.SENDING_REQUEST_EMAIL_STARTED:{
            return action.payload;
        }
        case types.SENDING_REQUEST_EMAIL_COMPLETED:{
            return {};
        }
        case types.SENDING_REQUEST_EMAIL_FAILED:{
            return {};
        }
    }
    return state;
}

const isSending = (state=false, action) =>{
    switch(action.type){
        case types.SENDING_REQUEST_EMAIL_STARTED:{
            return true;
        }
        case types.SENDING_REQUEST_EMAIL_COMPLETED:{
            return false;
        }
        case types.SENDING_REQUEST_EMAIL_FAILED:{
            return false;
        }
    }
    return state;
}

const error = (state=null, action) => {
    switch(action.type){
        case types.SENDING_REQUEST_EMAIL_STARTED:{
            return false;
        }
        case types.SENDING_REQUEST_EMAIL_COMPLETED:{
            return false;
        }
        case types.SENDING_REQUEST_EMAIL_FAILED:{
            return true;
        }
    }
    return state;
}

const response = (state = null, action) =>{
    switch(action.type){
        case types.SENDING_REQUEST_EMAIL_COMPLETED:{
            return 1;
        }
        case types.SENDING_REQUEST_EMAIL_FAILED:{
            return 0;
        }
    }
    return state;
}

export default combineReducers({
    projectRequestEmail,
    isSending,
    error,
    response,
});







