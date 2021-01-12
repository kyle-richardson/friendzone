import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_START,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    REGISTER_START,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
  } from "../actions";
  
  const initialDate = new Date();
  
  const initialState = {
    user: {},
    error: '',
    errorList: [],
    isLoggingIn: false,
    isLoggingOut: false,
    isRegistering: false,
    isLoggedIn: false
  };
  
  export const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_START:
        return {
            ...state,
            isLoggingIn: true,
            error: ''
        }
    case LOGIN_SUCCESS:
        sessionStorage.setItem(
            "user",
            JSON.stringify(payload)
          );
        return {
            ...state,
            isLoggingIn: false,
            error: '',
            user: payload,
            
        }
    case LOGIN_FAIL:
        return {
            ...state,
            isLoggingIn: false,
            error: 'Invalid Username or Password'
        }
    case REGISTER_START:
        return {
            ...state,
            isRegistering: true,
            error: ''
        }
    case REGISTER_SUCCESS:
        return {
            ...state,
            isRegistering: false,
            error: ''
        }
    case REGISTER_FAIL:
        let serverError = payload[0]
        return {
            ...state,
            isRegistering: false,
            errorList: serverError==='Request failed with status code 500' ? ['Username not available.'] : payload
        }
      default:
        return {
          ...state,
          //do nothing
        };
    }
  };
  