import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import {Route, Redirect, Switch} from "react-router"
import Landing from "./components/Landing"
import Signin from "./components/Signin"
import Register from "./components/Register"
import { PrivateRoute, SignInRoute } from './utils/routerAuth'

function App() {
return (
  <Router>
    <div className='app-container'>
      <Switch>
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/register' component={Register} />
        <PrivateRoute exact path='/home' />
        <Route
          render={() => {
              return (
                <Redirect to="/signin" /> 
              )
          }}
        />
      </Switch>
    </div>
  </Router>
)
}

export default App;
