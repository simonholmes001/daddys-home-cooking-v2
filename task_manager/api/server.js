const express = require('express');

const app = express();
const connectDB = require('./db/mongoose')

const bodyParser = require('body-parser');

// Load in the mongoose models
const { recipe } = require('./db/models/recipe_model');

connectDB()

// Load middleware
app.use(bodyParser.json());

// CORS headers middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// Retrieve recipes
app.get('/list-recipes', (req, res) => {
  recipe.find().then((recipes) => {
    res.send(recipes);
  }).catch((e) => {
    res.send(e);
  });
})

// Create a recipe
app.post('/create-recipes', (req, res) => {
  let recipeName = req.body.recipeName;
  let difficulty = req.body.difficulty;
  let prepTime = req.body.prepTime;
  let cookTime = req.body.cookTime;
  let ingredients = req.body.ingredients;
  let instructions = req.body.instructions;
  let imgURL = req.body.imgURL;
  let videoURL = req.body.videoURL;
  let tags = req.body.tags;

  let newRecipe = new recipe({
    recipeName,
    difficulty,
    prepTime,
    cookTime,
    ingredients,
    instructions,
    imgURL,
    videoURL,
    tags
  });
  newRecipe.save().then((newRecipeDoc) => {
    res.send(newRecipeDoc);
  })
})

// Update a recipe
app.patch('/create-recipes/:id', (req, res) => {
  recipe.findOneAndUpdate({ _id: req.params.id }, {
    $set: req.body
  }).then(() => {
    res.sendStatus(200);
  });
})

// Delete a recipe
app.delete('/create-recipes/:id', (req, res) => {
  recipe.findByIdAndRemove({
    _id: req.params.id
  }).then((removedRecipeDoc) => {
    res.send(removedRecipeDoc);
  });
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
})


// mongodb+srv://simonholmes001:CPIWgGkVC8SizQhD@cluster0.hzfck.mongodb.net/recipe_list?retryWrites=true&w=majority

