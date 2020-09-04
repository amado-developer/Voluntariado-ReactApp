import {
    call,
    takeEvery,
    put,
    select,
  } from 'redux-saga/effects';

import * as selectors from '../../reducers';
import * as actions from '../../actions/project.request';
import * as types from '../../types/project.request';
import * as schemas from '../../schemas/project.request.approval';
import * as imageSchemas from '../../schemas/project.requests.approval.images';
import * as linkSchemas from '../../schemas/project.requests.approval.links';
import {normalize} from 'normalizr';
import * as projectRequestApprovalTypes from '../../types/project.request.approval';
import * as projectRequestApprovalActions from '../../actions/project.request.approval';

import {API_BASE_URL} from '../../../config';
import axios from 'axios';

function* postProjectRequest(action) {
    try {
        const {aboutUs, description, faculty, images, inputValues, links, major, requirements, tags} = action.payload;
        const body = {
            company_name : inputValues[0], 
            phone_number : inputValues[1],
            email_address: inputValues[2],
            company_address: inputValues[3],
            project_name: inputValues[4],
            faculty,
            major,
            description,
            requirements,
            tags,
            about_us : aboutUs,
        }
        console.log(body);

        const response = yield call(
          fetch,
          `${API_BASE_URL}/solicitud-proyecto/post-request/`,
          {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
  
        if (response.status === 200) {
          const jsonResult = yield response.json();
          yield put(actions.completePostProjectRequestForm(jsonResult));

          const images_data = new FormData();
   
          images.map(image => images_data.append('image', image))

          yield axios.post(`${API_BASE_URL}/project-images/save-images/`, images_data, {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        })

          const links_data = new FormData();
          links.map(link => links_data.append('link', link))

          yield axios.post(`${API_BASE_URL}/project-links/save-links/`, links_data, {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        })
        } else {
          const {non_field_errors} = yield response.json();
          yield put(actions.failPostProjectRequestForm(non_field_errors[0]));
        }
    } catch (error) {
        yield put(actions.failPostProjectRequestForm(error));
    }
}

function* fetchProjectRequest(action){
  try {
    const isAuth = yield select(selectors.isAuthenticated);

    if(isAuth){
      const token = yield select(selectors.getAuthToken);
      const response = yield call(
        fetch,
        `${API_BASE_URL}/solicitud-proyecto/pending-requests/`,
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
          entities: { requests },
          result,
        } = normalize(jsonResult, schemas.requests);

        yield put(
          projectRequestApprovalActions.completeFetchingProjectRequest(
            requests, 
            result)
          );
      } else {
        const {non_field_errors} = yield response.json();
        yield put(projectRequestApprovalActions.failFetchingProjectRequest(non_field_errors[0]));
      }
    }
  } catch (error) {
      yield put(projectRequestApprovalActions.failFetchingProjectRequest(error));
  }
}

function* approveProjectRequest(action){
  try {
    const isAuth = yield select(selectors.isAuthenticated);
    if(isAuth){
      const token = yield select(selectors.getAuthToken);
      const response = yield call(
        fetch,
        `${API_BASE_URL}/solicitud-proyecto/${action.payload.id}/`,
        {
          method: 'PATCH',
          body: JSON.stringify({is_approved: true}),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${token}`,
          },
        },
      );
      
      if (response.status === 200) {
        yield put(
          projectRequestApprovalActions.completeApprovingProjectRequest(action.payload.id))
      } else {
        const {non_field_errors} = yield response.json();
        yield put(projectRequestApprovalActions.failApprovingProjectRequest(non_field_errors[0]));
      }
    }
  } catch (error) {
      yield put(projectRequestApprovalActions.failApprovingProjectRequest(error));
  }
}

function* rejectProjectRequest(action){
  try {
    const isAuth = yield select(selectors.isAuthenticated);
    if(isAuth){
      const token = yield select(selectors.getAuthToken);
      const response = yield call(
        fetch,
        `${API_BASE_URL}/solicitud-proyecto/${action.payload.id}/`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${token}`,
          },
        },
      );
      console.log(response.status);
      if (response.status === 204) {
        yield put(
          projectRequestApprovalActions.completeRejectingProjectRequest(action.payload.id))
      } else {
        const {non_field_errors} = yield response.json();
        yield put(projectRequestApprovalActions.failRejectingProjectRequest(non_field_errors[0]));
      }
    }
  } catch (error) {
      yield put(projectRequestApprovalActions.failRejectingProjectRequest(error));
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
            projectRequestApprovalActions.completeFetchingProjectRequestImages(
              images, 
              result
            )
          );
        } else {
        
          const {non_field_errors} = yield response.json();
          yield put(projectRequestApprovalActions.failFetchingProjectRequestImages(non_field_errors[0]));
        }
    }
  }catch(error){
    yield put(projectRequestApprovalActions.failFetchingProjectRequestImages(error));
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
        
          yield put(projectRequestApprovalActions.completeFetchingProjectRequestLinks(links, result));
        }else{
          const {non_field_errors} = yield response.json();
          yield put(projectRequestApprovalActions.failFetchingProjectRequestLinks(non_field_errors[0]));
        }
    }
  }catch (error){
    yield put(projectRequestApprovalActions.failFetchingProjectRequestLinks(error));
  }
}

export function* watchProjectRequestPosting() {
  yield takeEvery(types.POST_PROJECT_REQUEST_FORM_STARTED, postProjectRequest);
}
export function* watchProjectRequestFetching() {
  yield takeEvery(projectRequestApprovalTypes.FETCHING_REQUESTS_STARTED, 
    fetchProjectRequest)
}
export function* watchProjectRequestImagesFecthing() {
  yield takeEvery(projectRequestApprovalTypes.FETCHING_PROJECT_REQUEST_IMAGES_STARTED, 
    fetchProjectImages)
}
export function* watchProjectRequestLinksFecthing() {
  yield takeEvery(projectRequestApprovalTypes.FETCHING_PROJECT_REQUEST_LINKS_STARTED, 
    fetchProjectLinks)
}
export function* watchProjectRequestApproval(){
  yield takeEvery(projectRequestApprovalTypes.PATCH_REQUEST_APPROVED_STARTED, 
    approveProjectRequest)
}
export function* watchProjectRequestRejection(){
  yield takeEvery(projectRequestApprovalTypes.DELETE_REQUEST_STARTED, 
    rejectProjectRequest)
}
  