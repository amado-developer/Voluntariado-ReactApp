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