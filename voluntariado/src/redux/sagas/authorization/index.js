import {
    call,
    takeEvery,
    put,
    // race,
    // all,
    delay,
    select,
  } from 'redux-saga/effects';
  
  import { API_BASE_URL } from '../../../Config';
  import * as selectors from '../../reducers';
  import * as actions from '../../actions/authorization';
  import * as types from '../../types/authorization';
  import axios from 'axios';
  
  function* login(action) {
    try {
      const response = yield call(
        fetch,
        `${API_BASE_URL}/token-auth/`,
        {
          method: 'POST',
          body: JSON.stringify(action.payload),
          headers:{
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.status === 200) {
        const { token, user } = yield response.json();
   
        yield put(actions.completeLogin(token, user));
      } else {
        const { non_field_errors } = yield response.json();
        yield put(actions.failLogin(non_field_errors[0]));
      }
    } catch (error) {
      yield put(actions.failLogin(error));
    }
  }

  function* updateCV(action){
    try{
      const isAuth = yield select(selectors.isAuthenticated);
 
      if(isAuth){
        const token = yield select(selectors.getAuthToken);
        const {id, cv, setIsuploadButtonActive} = action.payload;
        const file_data = new FormData();
   
        file_data.append('file', cv);
     
        const response = yield axios.patch(`${API_BASE_URL}/users/update-student-cv/?id=${id}`, file_data, {
            headers: {
                'content-type' : 'multipart/form-data',
                Authorization: `JWT ${token}`,
          }
        });
    
        if (response.status === 200) {
          yield put(actions.completeUpdatingCV(cv));
          yield setIsuploadButtonActive(false);
        
        }else{
          const { non_field_errors } = yield response.json();
          yield put(actions.failUpdatingCV(non_field_errors[0]));
        }
      }
    }catch (error){

      yield put(actions.failUpdatingCV(error));
    }
  }
  
  export function* watchLoginStarted() {
    yield takeEvery(
      types.AUTHENTICATION_STARTED,
      login,
    );
  }

  export function* watchUpdateCVStarted(){
    yield takeEvery(
      types.UPDATE_CV_STARTED,
      updateCV,
    );
  }