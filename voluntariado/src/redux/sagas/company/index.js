import {
    call,
    takeEvery,
    put,
  } from 'redux-saga/effects';
import {normalize} from 'normalizr';


import * as actions from '../../actions/company';
import * as types from '../../types/company';
import * as schemas from '../../schemas/company';
import * as projectsSchemas from '../../schemas/company/company.projects';
import * as projectReportsMediaSchemas from '../../schemas/company/company.reports.media';
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

function* fetchCompanyProject(action){
  try {
      const {email} = action.payload;
      const response = yield call(
        fetch,
        `${API_BASE_URL}/project-request/company-projects/?email=${email}`,
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
          entities: { companyProjects },
          result,
        } = normalize(jsonResult, projectsSchemas.companyProjects);
        yield put(
          actions.completeFetchingCompanyProjects(
            companyProjects, 
            result)
          );
      } else {
        const {non_field_errors} = yield response.json();
        yield put(actions.failFetchingCompanyProjects(non_field_errors[0]));
      }
    }
  catch (error) {
      yield put(actions.failFetchingCompanyProjects(error));
  }
};

function* fetchProjectReports(action){
  try {
      const {id} = action.payload;
      const response = yield call(
        fetch,
        `${API_BASE_URL}/student-report/get-report/?id=${id}`,
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
          entities: { companyProjects },
          result,
        } = normalize(jsonResult, projectsSchemas.companyProjects);
        yield put(
          actions.completeFetchingProjectReports(
            companyProjects, 
            result)
          );
      } else {
        const {non_field_errors} = yield response.json();
        yield put(actions.failFetchingProjectReports(non_field_errors[0]));
      }
    }
  catch (error) {
      yield put(actions.failFetchingProjectReports(error));
  }
};

function* fetchProjectReportsMedia(action){
  try {
      const {id} = action.payload;
      const response = yield call(
        fetch,
        `${API_BASE_URL}/student-report-media/get-media/?project_id=${id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.status === 200) {
        const jsonResult = yield response.json();
        let counter = 0;
        let order = []
        let entities = {}
        jsonResult.map(media=>{
          entities[counter] = {media}
          order = [...order, counter];
          counter++;
        });
        
        yield put(
          actions.completeFetchingProjectReportsMedia(
            entities, 
            order)
          );
      } else {
        const {non_field_errors} = yield response.json();
        yield put(actions.failFetchingProjectReportsMedia(non_field_errors[0]));
      }
    }
  catch (error) {
      yield put(actions.failFetchingProjectReportsMedia(error));
  }
};

export function* watchCompaniesFetching() {
  yield takeEvery(types.FETCHING_COMPANIES_STARTED, 
    fetchCompanies)
};

export function* watchCompanyProjectsFetching() {
  yield takeEvery(types.FETCHING_COMPANY_PROJECTS_STARTED, 
    fetchCompanyProject)
};

export function* watchCompanyProjectReportsFetching() {
  yield takeEvery(types.FETCHING_PROJECT_REPORTS_STARTED, 
    fetchProjectReports)
};

export function* watchCompanyProjectReportsMediaFetching() {
  yield takeEvery(types.FETCHING_PROJECT_REPORTS_MEDIA_STARTED, 
    fetchProjectReportsMedia)
};