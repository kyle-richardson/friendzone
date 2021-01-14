import React from 'react'
import { Route } from 'react-router-dom'
import {Redirect} from "react-router"
import { useSelector } from 'react-redux'
import Home from '../../components/Home'

export const PrivateRoute = ({...rest }) => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return user ? 
    (
      <Route {...rest} component={Home} />)
    :
    (
      <Route
          render={() => {
              return (
                <Redirect to="/signin" /> 
              )
          }}
        />
    )
}
