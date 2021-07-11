import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

// export default class SignUp extends Component {
  
  
//   constructor(){
//     super();
    
//     this.state = {
//       UserName: '',
//       Password: '',
//     }

//     this.UserName = this.UserName.bind(this);
//     this.Password = this.Password.bind(this);
//     this.signUp = this.signUp.bind(this);
//   }

//   UserName(event){
//     this.setState({UserName: event.target.value})
//   }

//   Password(event){
//     this.setState({Password: event.target.value})
//   }


//   signUp(){

//     fetch('http://localhost:3000/users', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         UserName: this.state.UserName,
//         Password: this.state.Password,
//       })
//     }).then((Response) => Response.json())
//       .then((Result) => {
//         if(Result.Status == 'Success')
//           this.props.history.push("/Dashboard");
//         else
//           alert('Un-authenticated user')
//       })
//   }
  
//   render() {
//     return (
//         <form onSubmit={this.signUp}>
//           <h3>Sign Up</h3>

//           <div className="form-group">
//               <label>Username </label>
//               <input type="userName" onChange={this.UserName} placeholder="Enter username" />
//           </div>

//           <div className="form-group">
//               <label>Password</label>
//               <input type="password" onChange={this.Password} placeholder="Enter password" />
//           </div>

//           <button onClick={this.signUp} className="btn btn-primary btn-block">Sign up</button>
//         </form>
//     );   
//   }    
// }


// const SignUp = () => {
//   const [description, setDescription] = useState("");

//   const onSubmitForm = async e => {
//     e.preventDefault();
//     try {
//       const body = { description };
//       const response = await fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body)
//       });

//       window.location = "/";
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   return (
//     <Fragment>
//       <h1 className="text-center mt-5">Pern Todo List</h1>
//       <form className="d-flex mt-5" onSubmit={onSubmitForm}>
//         <input
//           type="text"
//           className="form-control"
//           value={description}
//           onChange={e => setDescription(e.target.value)}
//         />
//         <button className="btn btn-success">Add</button>
//       </form>
//     </Fragment>
//   );
// };

// export default SignUp;

export default function Signup(){
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return userName.length > 0 && password.length > 0;
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

  return (
    <div className="SignUp">
      <Form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
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
          Sign up
        </Button>
      </Form>
    </div>
  );
}
