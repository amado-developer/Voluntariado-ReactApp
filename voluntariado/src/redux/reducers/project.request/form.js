import {combineReducers} from 'redux';
import * as types from '../../types/project.request';

const byId = (state = {}, action) => {

    switch (action.type) {
   
      case types.POST_PROJECT_REQUEST_FORM_STARTED: {
        return {
          ...state, [action.payload.id]: {
              id: action.payload.id,
              company_name : action.payload.inputValues[0],
              phone_number: action.payload.inputValues[1],
              email_address: action.payload.inputValues[2],
              company_address: action.payload.inputValues[3],
              project_name : action.payload.inputValues[4],
              faculty: action.payload.faculty,
              major : action.payload.major,
              description: action.payload.description,
              requirements: action.payload.requirements,
              images: [...action.payload.images],
              links: action.payload.links,
              about_us: action.payload.aboutUs,
          }  
        };
      }

      case types.POST_PROJECT_REQUEST_FORM_COMPLETED: {
          return {}
      }
      case types.POST_PROJECT_REQUEST_FORM_FAILED: {
          return {}
      }
    }
    return state;
};


const order = (state = [], action) => {
    switch (action.type) {
        case types.POST_PROJECT_REQUEST_FORM_STARTED: {
            return [ ...state, action.payload.id];
        }
        case types.POST_PROJECT_REQUEST_FORM_FAILED:{
            return []
        }

        case types.POST_PROJECT_REQUEST_FORM_COMPLETED:{
            return []
        }
    }
    return state;
};

export default combineReducers({
    byId,
    order,
});

export const getForm = (state, id) => state.byId[id];
export const getForms = state => state.order.map(
  id => getForm(state, id)
).filter(field => field != null);