import {
    call,
    takeEvery,
    put,
    select,
  } from 'redux-saga/effects';

import * as selectors from '../../reducers';
import * as actions from '../../actions/available.projects';
import * as types from '../../types/available.projects';
import * as schemas from '../../schemas/available.projects';
import * as imageSchemas from '../../schemas/project.requests.approval.images';
import * as linkSchemas from '../../schemas/project.requests.approval.links';
import {normalize} from 'normalizr';

import {API_BASE_URL} from '../../../config';

function* fetchProjectRequest(action){
  try {
    const isAuth = yield select(selectors.isAuthenticated);
    if(isAuth){
      const token = yield select(selectors.getAuthToken);
      const response = yield call(
        fetch,
        `${API_BASE_URL}/project-request/available-projects/`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${token}`,
          },
        },
      );
      
      if (response.status === 200) {
        const jsonResult = yield response.json();
       
        const {
          entities: { availableProjects },
          result,
        } = normalize(jsonResult, schemas.availableProjects);
 
        yield put(
          actions.completeFetchingAvailableProject(
            availableProjects, 
            result)
          );
      } else {
        const {non_field_errors} = yield response.json();
        yield put(actions.failFetchingAvailableProject(non_field_errors[0]));
      }
    }
  } catch (error) {
      yield put(actions.failFetchingAvailableProject(error));
  }
}

function* fetchProjectImages(action){
  try{
    const isAuth = yield select(selectors.isAuthenticated);
    if(isAuth){
      const token = yield select(selectors.getAuthToken);
      const response = yield call(
        fetch,
        `${API_BASE_URL}/project-images/get-images/?project=${action.payload.id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${token}`,
          },
        });

        if(response.status === 200){
          const jsonResult = yield response.json();
          const {
            entities: { images },
            result,
          } = normalize(jsonResult, imageSchemas.images);

          yield put(
            actions.completeFetchingAvailableProjectImages(
              images, 
              result
            )
          );
        } else {
        
          const {non_field_errors} = yield response.json();
          yield put(actions.failFetchingAvailableProjectImages(non_field_errors[0]));
        }
    }
  }catch(error){
    yield put(actions.failFetchingAvailableProjectImages(error));
  }
}

function* fetchProjectLinks(action){
  try{
    const isAuth = yield select(selectors.isAuthenticated);
    if(isAuth){
      const token = yield select(selectors.getAuthToken);
      const response = yield call(
        fetch,
        `${API_BASE_URL}/project-links/get-links/?project=${action.payload.id}`,
        {
          method: 'GET',
          headers:{
            'Content-Type': 'application/json',
            Authorization: `JWT ${token}`,
          },
        });

        if(response.status === 200){
          const jsonResult = yield response.json();
          const {
            entities : { links },
            result,
          } = normalize(jsonResult, linkSchemas.links);
        
          yield put(actions.completeFetchingAvailableProjectLinks(links, result));
        }else{
          const {non_field_errors} = yield response.json();
          yield put(actions.failFetchingAvailableProjectLinks(non_field_errors[0]));
        }
    }
  }catch (error){
    yield put(actions.failFetchingAvailableProjectLinks(error));
  }
}

export function* watchAvailableProjectFetching() {
  yield takeEvery(types.FETCHING_AVAILABLE_PROJECTS_STARTED, 
    fetchProjectRequest)
}
export function* watchAvailableProjectImagesFecthing() {
  yield takeEvery(types.FETCHING_AVAILABLE_PROJECTS_IMAGES_STARTED, 
    fetchProjectImages)
}
export function* watchAvailableProjectLinksFecthing() {
  yield takeEvery(types.FETCHING_AVAILABLE_PROJECTS_LINKS_STARTED, 
    fetchProjectLinks)
}
  