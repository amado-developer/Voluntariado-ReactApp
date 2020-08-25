import * as types from '../../types/authorization';

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