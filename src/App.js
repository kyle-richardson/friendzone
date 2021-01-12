import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Landing from "./components/Landing"
import { PrivateRoute, SignInRoute } from './utils/routerAuth'

function App() {
return (
  <Router>
    <div className='app-container'>
      <SignInRoute exact path='/' component={Landing} />
      <SignInRoute exact path='/signin' component={Landing} />
      <SignInRoute exact path='/register' component={Landing} />
      <PrivateRoute exact path='/home' component={Home} />
      {/* <Home/> */}
    </div>
  </Router>
)
}

export default App;
