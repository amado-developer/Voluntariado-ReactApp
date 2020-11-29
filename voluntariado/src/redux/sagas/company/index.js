import {
    call,
    takeEvery,
    put,
    select,
  } from 'redux-saga/effects';
import {normalize} from 'normalizr';

import * as selectors from '../../reducers';
import * as actions from '../../actions/company';
import * as types from '../../types/company';
import * as schemas from '../../schemas/company';
import {API_BASE_URL} from '../../../config';

function* fetchCompanies(action){
    try {
        const {email} = action.payload;
        const response = yield call(
          fetch,
          `${API_BASE_URL}/company-user/get-companies/?email=${email}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        
        if (response.status === 200) {
          const jsonResult = yield response.json();
       
          const {
            entities: { companies },
            result,
          } = normalize(jsonResult, schemas.company);
          yield put(
            actions.completeFetchingCompanies(
                companies, 
              result)
            );
        } else {
          const {non_field_errors} = yield response.json();
          yield put(actions.failFetchingCompanies(non_field_errors[0]));
        }
      }
    catch (error) {
        yield put(actions.failFetchingCompanies(error));
    }
};

export function* watchCompaniesFetching() {
    yield takeEvery(types.FETCHING_COMPANIES_STARTED, 
    fetchCompanies)
};
