import * as types from '../../types/authorization';

//==========================================================

export const startLogin = ( email, password) => ({
    type: types.AUTHENTICATION_STARTED,
    payload: { email, password },
  });
  
  export const completeLogin = (token, user) => ({
    type: types.AUTHENTICATION_COMPLETED,
    payload: { token, user },
  });
  
  export const failLogin = error => ({
    type: types.AUTHENTICATION_FAILED,
    payload: { error },
});

//==========================================================

export const startUpdatingCV = (id, cv, setIsuploadButtonActive) => ({
  type: types.UPDATE_CV_STARTED,
  payload: { id, cv, setIsuploadButtonActive },
});

export const completeUpdatingCV= (cv) => ({
  type: types.UPDATE_CV_COMPLETED,
  payload: { cv },
});

export const failUpdatingCV = error => ({
  type: types.UPDATE_CV_FAILED,
  payload: { error },
});

//============================================================