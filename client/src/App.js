
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
            <Route exact path='/' component={Login} />
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={SignUp} />
          </Switch>
          <Switch>
              <Route path="/Dashboard" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;

// import React, {useState, useEffect} from 'react';
// function App() {
//   const [merchants, setMerchants] = useState(false);
//   useEffect(() => {
//     getMerchant();
//   }, []);
//   function getMerchant() {
//     fetch('http://localhost:3001')
//       .then(response => {
//         return response.text();
//       })
//       .then(data => {
//         setMerchants(data);
//       });
//   }
//   function createMerchant() {
//     let name = prompt('Enter merchant name');
//     let email = prompt('Enter merchant email');
//     fetch('http://localhost:3001/merchants', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({name, email}),
//     })
//       .then(response => {
//         return response.text();
//       })
//       .then(data => {
//         alert(data);
//         getMerchant();
//       });
//   }
//   function deleteMerchant() {
//     let id = prompt('Enter merchant id');
//     fetch(`http://localhost:3001/merchants/${id}`, {
//       method: 'DELETE',
//     })
//       .then(response => {
//         return response.text();
//       })
//       .then(data => {
//         alert(data);
//         getMerchant();
//       });
//   }
//   return (
//     <div>
//       {merchants ? merchants : 'There is no merchant data available'}
//       <br />
//       <button onClick={createMerchant}>Add merchant</button>
//       <br />
//       <button onClick={deleteMerchant}>Delete merchant</button>
//     </div>
//   );
// }
// export default App;