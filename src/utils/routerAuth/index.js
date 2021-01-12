import React from 'react'
import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from '../../components/Home'

export const PrivateRoute = ({ component, ...rest }) => {
  const { isLoggedIn } = useSelector(state => state)
  const finalComponent = isLoggedIn ? component : Home
  return <Route {...rest} component={finalComponent} />
}

export const SignInRoute = ({ component, ...rest }) => {
  const { isLoggedIn } = useSelector(state => state)
  const finalComponent = isLoggedIn ? Home : component
  return <Route {...rest} component={finalComponent} />
}
