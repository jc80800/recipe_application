import React, { Component } from "react";
import './App.css';

export default class SignUp extends Component {
  
  constructor(){
    super();
    
    this.state = {
      FirstName: '',
      LastName: '',
      UserName: '',
      Password: '',
    }

    this.FirstName = this.FirstName.bind(this);
    this.LastName = this.LastName.bind(this);
    this.UserName = this.UserName.bind(this);
    this.Password = this.Password.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  // FirstName(event){
  //   this.setState({ this.FirstName: event.target.value})
  // }

  FirstName(event){
    this.setState({FirstName: event.target.value})
  }

  LastName(event){
    this.setState({LastName: event.target.value})
  }

  UserName(event){
    this.setState({UserName: event.target.value})
  }

  Password(event){
    this.setState({Password: event.target.value})
  }


  signUp(event){

    fetch('http://localhost:3000/Signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        UserName: this.state.UserName,
        Password: this.state.Password,
      })
    }).then((Response) => Response.json())
      .then((Result) => {
        if(Result.Status == 'Success')
          this.props.history.push("/Dashboard");
        else
          alert('Un-authenticated user')
      })
  }
  
  render() {
    return (
        <form>
          <h3>Sign Up</h3>

          <div className="form-group">
              <label>First name</label>
              <input type="text" onChange={this.FirstName} placeholder="First name" />
          </div>

          <div className="form-group">
              <label>Last name</label>
              <input type="text" onChange={this.LastName} placeholder="Last name" />
          </div>

          <div className="form-group">
              <label>Username </label>
              <input type="userName" onChange={this.UserName} placeholder="Enter username" />
          </div>

          <div className="form-group">
              <label>Password</label>
              <input type="password" onChange={this.Password} placeholder="Enter password" />
          </div>

          <button onClick={this.signUp}>Sign up</button>
          {/* <button type="submit" className="btn btn-primary btn-block">Sign Up</button> */}
        </form>
    );
  }    
}

