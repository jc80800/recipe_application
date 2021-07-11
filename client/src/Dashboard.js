import React, { Component } from "react";
import './App.css';

const DashBoard = () => {

    const [recipes, setRecipes] =  useState([]);

    const getRecipes= async() =>{
        try {
            const response = await fetch("http://localhost:3000/recipes");
            const jsonData = await response.json();

            setRecipes(jsonData);
        } catch (error) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getRecipes();
      }, []);

    console.log(recipes);

    return(
        
    );
}

export default DashBoard;