import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login';


ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root')

  // <Route path="/" component={ Login }>
  //   <IndexRoute component={ App } />
  //   {/* <Route path="detail/:repo" component={ Detail } /> */}
  // </Route>
 
);

