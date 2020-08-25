import {
    call,
    takeEvery,
    put,
    // race,
    // all,
    delay,
    select,
  } from 'redux-saga/effects';

import * as selectors from '../../reducers';
import * as actions from '../../actions/projectRequest';
import * as types from '../../types/projectRequest';
import {API_BASE_URL} from '../../../Config';
import axios from 'axios';

function* postProjectRequest(action) {
  console.log(action.payload);
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

  export function* watchProjectRequestPosting() {
    yield takeEvery(types.POST_PROJECT_REQUEST_FORM_STARTED, postProjectRequest);
  }
  