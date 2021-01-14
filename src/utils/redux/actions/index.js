import axios from "axios"
import {useHistory} from "react-router-dom"
// export const GET_EVENTS_SUCCESS = "GET_EVENTS_SUCCESS";

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGOUT_START = 'LOGOUT_START'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAIL = 'LOGOUT_FAIL'
export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS ='REGISTER_SUCCESS'
export const REGISTER_FAIL ='REGISTER_FAIL'

export const login = credentials => dispatch => {
    // event.preventDefault()
    dispatch({ type: LOGIN_START });
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/users/login`, credentials)
      .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data})
      })
      .catch(err => {
        console.log(err)
        dispatch({ type: LOGIN_FAIL, payload: err })
      });
  };
  
  export const register = credentials => dispatch => {
    // event.preventDefault()
    axios
    .post(`${process.env.REACT_APP_BASE_URL}/users/register`, {...credentials, "postal_code": 11111})
    .then(res => {
        dispatch({ type: REGISTER_SUCCESS, payload: res })
        dispatch(login(credentials))
    })
    .catch(err => {
        console.log(err.message)
        const eList = [err.message]
        dispatch({ type: REGISTER_FAIL, payload: eList })
    });
    }