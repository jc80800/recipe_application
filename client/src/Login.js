// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import "./Login.css";

// export default function Login(){
//     const [userName, setUserName] = useState("");
//     const [password, setPassword] = useState("");
  
//     function validateForm() {
//       return userName.length > 0 && password.length > 0;
//     }
  
//     function handleSubmit(event) {
//       event.preventDefault();
//     }
  
//     return (
//       <div className="Login">
//         <Form onSubmit={handleSubmit}>
//           <Form.Group size="lg" controlId="userName">
//             <Form.Label>User name</Form.Label>
//             <Form.Control
//               autoFocus
//               type="userName"
//               value={userName}
//               onChange={(e) => setUserName(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group size="lg" controlId="password">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Form.Group>
//           <Button block size="lg" type="submit" disabled={!validateForm()}>
//             Login
//           </Button>
//         </Form>
//       </div>
//     );
// }

import React, { Component } from "react";
import './App.css';

export default class Login extends Component {


  constructor(){
    super();

    this.state = {
      UserName: '',
      Password: ''
    }

    this.UserName = this.UserName.bind(this);
    this.Password = this.Password.bind(this);
    this.login = this.login.bind(this);
  }

  UserName(event){
    this.setState({UserName: event.target.value})
  }

  Password(event){
    this.setState({Password: event.target.value})
  }

  login(event){
    debugger;
    fetch('http://localhost:3000/Login', {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        UserName: this.state.UserName,
        Password: this.state.Password
      })
    }).then((Response) => Response.json())
      .then((result) => {
        console.log(result);
        if(result.Status == 'Invalid')
          alert('Invalid User')
        else
          this.props.history.push("/Dashboard");
      })
  }

  render() {
    return (
      <form>
        <h3>Sign In</h3>

        <div className="form-group">
            <label>Username</label>
            <input type="userName" onChange={this.UserName} placeholder="Enter userName" />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" onChange={this.Password} placeholder="Enter password" />
        </div>

        {/* <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
        </div> */}

        <button onClick={this.login} className="btn btn-primary btn-block">Submit</button>
      </form>
    );
  }
}