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
    CHANGE_PERSON
  } from "../actions";
  
  const initialDate = new Date();
  
  const initialState = {
    user: {},
    error: '',
    errorList: [],
    isLoggingIn: false,
    isLoggingOut: false,
    isRegistering: false,
    isLoggedIn: false,
    changePerson: false  
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
            isLoggedIn: true,
            error: '',
            user: payload,
        }
    case LOGIN_FAIL:
        return {
            ...state,
            isLoggingIn: false,
            isLoggedIn: false,
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
    case LOGOUT_START:
        return { 
            ...state,
            isLoggingOut: true
        }
    case LOGOUT_SUCCESS:
        return { 
            ...state,
            isLoggingOut: false,
            isLoggedIn: false
        }
    case LOGOUT_FAIL:
        return { 
            ...state,
            isLoggingOut: false
        }
    case CHANGE_PERSON:
        return {
            ...state,
            changePerson: !changePerson
        }
    default:
        return {
          ...state,
          //do nothing
        };
    }
  };
  