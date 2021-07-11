import React, { useState, useEffect } from "react";
// import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import './App.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Dashboard(){

    const[recipes, setRecipes] = useState([]);

    function deleteRecipe(id) {
        try {
            const deleteRecipe = fetch('http://localhost:3000/recipes/${id}', {
                method: "DELETE"
            })

            setRecipes(recipes.filter(recipes => recipes.recipes_id !== id));
        } catch (error) {
            console.error(error.message);
        }
    }

    function getRecipes(){
        try {
            const response = fetch('http://localhost:3000/recipes');
            const jsonData = response.json();

            setRecipes(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    function createRecipes(){
        // try {
        //     const response = fetch('http://localhost:3000/createRecipes', {
        //         method: 'POST',
        //         headers: {'Content-Type': 'application/json',},

        //     });
        //     const jsonData = response.json();
        // } catch (error) {
        //     console.error(error.message);
        // }
        fetch('http://localhost:3001/createRecipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        get();
      });
  }
    }

    useEffect(() => {
        getRecipes();
    }, []);

    console.log(recipes);

    return(<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/Signup"}>Recipe Domain</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/Dashboard"}>Recipes</Link>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to={"/Signup"}>Pantry</Link> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            {/* <Route exact path='/' component={Login} /> */}
            {/* <Route exact path="/Dashboard" component={Dashboard} /> */}
            {/* <Route exact path="/Signup" component={SignUp} /> */}
          </Switch>
          {/* <Switch>
              <Route exact path="/Dashboard" component={Dashboard} />
          </Switch> */}
        </div>
      </div>
    </div></Router>
    );
}