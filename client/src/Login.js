import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Login(){
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState("");
  
    function validateForm() {
      getUser();
      console.log(users);
      // return userName.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      try {
        const body = {userName, password};
        const response = fetch("http://localhost:3000/users", {
          method: "POST", 
          headers: {"Content-Type": "applicaton/json"},
          body: JSON.stringify(body)
        });

        window.location = "/Dashboard";
      } catch (error) {
        console.error(error.message);
      }
    }


    useEffect(() => {
      getUser();
    }, []);

    function getUser(){
      fetch('http://localhost:3000/users')
        .then(res => {
          console.log(res);
          return res.text();
        })
        .then(data => {
          setUsers(data);
        });
    }


  
    return (
      <div className="Login">
        <Form onSubmit={handleSubmit}>
        <h3>Login</h3>
          {/* {users ? users : 'There is not user data available'} */}
          <Form.Group size="lg" controlId="userName">
            <Form.Label>User name</Form.Label>
            <Form.Control
              autoFocus
              type="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Form>
      </div>
    );
}

// import React, { Component } from "react";
// import './App.css';
// export default class Login extends Component {


//   constructor(){
//     super();

//     this.state = {
//       UserName: '',
//       Password: ''
//     }

//     this.UserName = this.UserName.bind(this);
//     this.Password = this.Password.bind(this);
//     this.login = this.login.bind(this);
//   }

//   UserName(event){
//     this.setState({UserName: event.target.value})
//   }

//   Password(event){
//     this.setState({Password: event.target.value})
//   }

//   login(event){
//     console.log(event)
    
//     fetch('http://localhost:3000/users', {
//       method: 'POST',
//       headers: {
//         'Accept' : 'application/json',
//         'Content-Type' : 'application/json'
//       },
//       body: JSON.stringify({
//         UserName: this.state.UserName,
//         Password: this.state.Password
//       })
//     }).then((Response) => Response.json())
//       .then((event) => {
//         console.log(event);
//         // if(result.Status == 'Invalid')
//         //   alert('Invalid User')
//         // else
//           this.props.history.push("/Dashboard");
//       })
//   }

//   render() {
//     return (
//       <form onSubmit={this.login}>
//         <h3>Login</h3>

//         <div className="form-group">
//             <label>Username</label>
//             <input type="userName" onChange={this.UserName} placeholder="Enter userName" />
//         </div>

//         <div className="form-group">
//             <label>Password</label>
//             <input type="password" onChange={this.Password} placeholder="Enter password" />
//         </div>

//         <button onClick={this.login} className="btn btn-primary btn-block">Submit</button>
//       </form>
//     );
//   }
// }