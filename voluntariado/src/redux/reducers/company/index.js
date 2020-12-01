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

const projectsById = (state = {}, action) => {
  switch (action.type) {
    case types.FETCHING_COMPANY_PROJECTS_COMPLETED: {
      const {entities, order} = action.payload;
      const newState = {...state};
      order.forEach(id => {
        newState[id] = {
          ...entities[id],
        };
      });
      return newState;
    }
    case types.FETCHING_COMPANY_PROJECTS_STARTED: {
      return {};
    }

    default: {
      return state;
    }
  }
};

const reportsById = (state = {}, action) => {
  switch (action.type) {
    case types.FETCHING_PROJECT_REPORTS_COMPLETED: {
      const {entities, order} = action.payload;
      const newState = {...state};
      order.forEach(id => {
        newState[id] = {
          ...entities[id],
        };
      });
      return newState;
    }
    case types.FETCHING_PROJECT_REPORTS_STARTED: {
      return {};
    }

    default: {
      return state;
    }
  }
};

const reportsMediaById = (state = {}, action) => {
  switch (action.type) {
    case types.FETCHING_PROJECT_REPORTS_MEDIA_COMPLETED: {
      const {entities, order} = action.payload;
      const newState = {...state};
      order.forEach(id => {
        newState[id] = {
          ...entities[id],
        };
      });
      return newState;
    }
    case types.FETCHING_PROJECT_REPORTS_MEDIA_STARTED: {
      return {};
    }

    default: {
      return state;
    }
  }
};

const projectsOrder = (state = [], action) => {
  switch (action.type) {
    case types.FETCHING_COMPANY_PROJECTS_COMPLETED: {
      return [...state, ...action.payload.order];
    }
    case types.FETCHING_COMPANY_PROJECTS_STARTED: {
      return [];
    }
    case types.FETCHING_COMPANY_PROJECTS_FAILED: {
      return [];
    }
  }
  return state;
};

const reportsOrder = (state = [], action) => {
  switch (action.type) {
    case types.FETCHING_PROJECT_REPORTS_COMPLETED: {
      return [...state, ...action.payload.order];
    }
    case types.FETCHING_PROJECT_REPORTS_STARTED: {
      return [];
    }
    case types.FETCHING_COMPANY_PROJECTS_FAILED: {
      return [];
    }
  }
  return state;
};

const reportsMediaOrder = (state = [], action) => {
  switch (action.type) {
    case types.FETCHING_PROJECT_REPORTS_MEDIA_COMPLETED: {
      return [...state, ...action.payload.order];
    }
    case types.FETCHING_PROJECT_REPORTS_MEDIA_STARTED: {
      return [];
    }
    case types.FETCHING_PROJECT_REPORTS_MEDIA_FAILED: {
      return [];
    }
  }
  return state;
};

const isFetchingProjects = (state = false, action) => {
  switch (action.type) {
    case types.FETCHING_COMPANY_PROJECTS_STARTED: {
      return true;
    }
    case types.FETCHING_COMPANY_PROJECTS_COMPLETED: {
      return false;
    }
    case types.FETCHING_COMPANY_PROJECTS_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};


const isFetchingReports = (state = false, action) => {
  switch (action.type) {
    case types.FETCHING_PROJECT_REPORTS_STARTED: {
      return true;
    }
    case types.FETCHING_PROJECT_REPORTS_COMPLETED: {
      return false;
    }
    case types.FETCHING_COMPANY_PROJECTS_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const isFetchingReportsMedia = (state = false, action) => {
  switch (action.type) {
    case types.FETCHING_PROJECT_REPORTS_MEDIA_STARTED: {
      return true;
    }
    case types.FETCHING_PROJECT_REPORTS_MEDIA_COMPLETED: {
      return false;
    }
    case types.FETCHING_PROJECT_REPORTS_MEDIA_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
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
      case types.FETCHING_COMPANY_PROJECTS_FAILED:{
        return action.payload.error;
      }
      case types.FETCHING_PROJECT_REPORTS_FAILED:{
        return action.payload.error;
      }

      case types.FETCHING_PROJECT_REPORTS_MEDIA_FAILED:{
        return action.payload.error;
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
    projectsById,
    projectsOrder,
    isFetchingProjects,
    reportsById,
    reportsOrder,
    isFetchingReports,
    reportsMediaById,
    reportsMediaOrder,
    isFetchingReportsMedia,
});

export const getCompany = state => state.byId;
export const getIsFetching = state => state.isFetching;
export const getError = state => state.error;

export const getAvailableProject = (state, id) => state.projectsById[id];
export const getAvailableProjects = state => state.projectsOrder.map(
    id => getAvailableProject(state, id));
export const getIsFetchingProjects = state => state.isFetchingProjects;

export const getReport = (state, id) => state.reportsById[id];
export const getReports = state => state.reportsOrder.map(
    id => getReport(state, id));
export const getIsFetchingReports = state => state.isFetchingReports;

export const getReportMedia = (state, id) => state.reportsMediaById[id];
export const getReportsMedia = state => state.reportsMediaOrder.map(
    id => getReportMedia(state, id));
export const getIsFetchingReportsMedia = state => state.isFetchingReportsMedia;