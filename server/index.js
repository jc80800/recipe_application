const express = require("express");
const app = express();
const recipe_model = require('./query');

app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
  });


app.get('/', (req, res) => {
    recipe_model.getRecipes()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })
  
app.post('/recipes', (req, res) => {
    recipe_model.createRecipes(req.body)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
        })
    })

app.delete('/recipes/:id', (req, res) => {
    recipe_model.deleteRecipes(req.params.id)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
        })
    })

app.listen(5000, () => {
    console.log("Server listening to 5000");
})