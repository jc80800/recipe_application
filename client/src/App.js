
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./Login";
import SignUp from "./Signup";
import Dashboard from './Dashboard';

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/Signup"}>Recipe Domain</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/Login"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Signup"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            {/* <Route exact path='/' component={Login} /> */}
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Signup" component={SignUp} />
          </Switch>
          <Switch>
              <Route exact path="/Dashboard" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );

    // return(
    //     <div>
    //         <SignUp />
    //     </div>
    // )
}

export default App;