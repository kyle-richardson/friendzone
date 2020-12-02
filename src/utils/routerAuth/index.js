import React from 'react'
import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import WelcomePage from '../../components/WelcomePage'
import TodoList from '../../components/TodoList'

export const PrivateRoute = ({ component, ...rest }) => {
  const { isLoggedIn } = useSelector(state => state)
  const finalComponent = isLoggedIn ? component : WelcomePage
  return <Route {...rest} component={finalComponent} />
}

export const SignInRoute = ({ component, ...rest }) => {
  const { isLoggedIn } = useSelector(state => state)
  const finalComponent = isLoggedIn ? TodoList : component
  return <Route {...rest} component={finalComponent} />
}
