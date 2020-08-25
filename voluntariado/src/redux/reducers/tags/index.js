import * as types from '../../types/tags';
import {combineReducers} from 'redux';
import omit from 'lodash/omit';

const byId = (state={}, action) => {
    switch (action.type){
        case types.TAG_ADDED:{
            return {
                ...state, [action.payload.id]: {
                    id: action.payload.id,
                    tag: action.payload.tag,
                }
            }
        }
        case types.TAG_DELETED:{
           return omit(state, action.payload.id);
        }
        
    }
    return state;
}

const order = (state = [], action) =>{
    switch (action.type){
        case types.TAG_ADDED: {
            return [...state, action.payload.id]
        }
        case types.TAG_DELETED:{
            return state.filter(id => id !== action.payload.id)
        }
    }

    return state;
}

export default combineReducers({
    byId,
    order
});

export const getTag = (state,id) => state.byId[id];
export const getTags = state => state.order.map(
    id => getTag(state, id)
).filter(tag => tag != null);