const express = require('express');

const app = express();
const connectDB = require('./db/mongoose')

const bodyParser = require('body-parser');

// Load in the mongoose models
const { recipe } = require('./db/models/recipe_model');

connectDB()

// Load middleware
app.use(bodyParser.json());

// Retrieve recipes
app.get('/recipes', (req, res) => {
  recipe.find().then((recipes) => {
    res.send(recipes);
  }).catch((e) => {
    res.send(e);
  });
})

// Create a recipe
app.post('/recipes', (req, res) => {
  let recipeName = req.body.recipeName;

  let newRecipe = new recipe({
    recipeName
  });
  newRecipe.save().then((newRecipeDoc) => {
    res.send(newRecipeDoc);
  })
})

// Update a recipe
app.patch('/recipe-list/:id', (req, res) => {
  res.send("hello Simon");
})

// Delete a recipe
app.delete('/recipe-list/:id', (req, res) => {
  res.send("hello Simon");
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
})


// mongodb+srv://simonholmes001:CPIWgGkVC8SizQhD@cluster0.hzfck.mongodb.net/recipe_list?retryWrites=true&w=majority

