import * as types from '../../types/company';

export const startFetchingCompanies = email => ({
    type: types.FETCHING_COMPANIES_STARTED,
    payload: {email},
});
  
export const completeFetchingCompanies = (entities, order) => ({
    type: types.FETCHING_COMPANIES_COMPLETED,
    payload: {
      entities,
      order,
    },
});

export const failFetchingCompanies = error => ({
    type: types.FETCHING_COMPANIES_FAILED,
    payload: {error},
});
//========================================================================

export const startFetchingCompanyProjects = email => ({
    type: types.FETCHING_COMPANY_PROJECTS_STARTED,
    payload: {email},
});
  
export const completeFetchingCompanyProjects = (entities, order) => ({
    type: types.FETCHING_COMPANY_PROJECTS_COMPLETED,
    payload: {
      entities,
      order,
    },
});

export const failFetchingCompanyProjects = error => ({
    type: types.FETCHING_COMPANY_PROJECTS_FAILED,
    payload: {error},
});
//========================================================================
export const startFetchingProjectReports = id => ({
    type: types.FETCHING_PROJECT_REPORTS_STARTED,
    payload: {id},
});
  
export const completeFetchingProjectReports = (entities, order) => ({
    type: types.FETCHING_PROJECT_REPORTS_COMPLETED,
    payload: {
      entities,
      order,
    },
});

export const failFetchingProjectReports = error => ({
    type: types.FETCHING_PROJECT_REPORTS_FAILED,
    payload: {error},
});
//========================================================================
export const startFetchingProjectReportsMedia = id => ({
    type: types.FETCHING_PROJECT_REPORTS_MEDIA_STARTED,
    payload: {id},
});
  
export const completeFetchingProjectReportsMedia = (entities, order) => ({
    type: types.FETCHING_PROJECT_REPORTS_MEDIA_COMPLETED,
    payload: {
      entities,
      order,
    },
});

export const failFetchingProjectReportsMedia = error => ({
    type: types.FETCHING_PROJECT_REPORTS_MEDIA_FAILED,
    payload: {error},
});
//========================================================================