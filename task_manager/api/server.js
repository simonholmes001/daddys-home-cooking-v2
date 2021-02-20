const express = require('express');

const app = express();
const connectDB = require('./db/mongoose')

const bodyParser = require('body-parser');

// Load in the mongoose models
const { recipe } = require('./db/models/recipe_model');

// For environmeent variables for Twilio connection
require('dotenv').config();

// Connect to monogDB database
connectDB()

// Load middleware
app.use(bodyParser.json());

// CORS headers middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
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

app.get('/modify-recipes/:id', (req, res) => {
  recipe.findById({
    _id: req.params.id
  }).then((recipes) => {
    res.send(recipes);
  });
})

// Create a recipe
app.post('/create-recipes', (req, res) => {
  let recipeName = req.body.recipeName;
  let difficulty = req.body.difficulty;
  let prepTime = req.body.prepTime;
  let cookTime = req.body.cookTime;
  let ingredients = req.body.ingredients;
  let step1 = req.body.step1;
  let step2 = req.body.step2;
  let step3 = req.body.step3;
  let step4 = req.body.step4;
  let step5 = req.body.step5;
  let step6 = req.body.step6;
  let step7 = req.body.step7;
  let step8 = req.body.step8;
  let step9 = req.body.step9;
  let step10 = req.body.step10;
  let imgURL = req.body.imgURL;
  let videoURL = req.body.videoURL;
  let additionalLinks = req.body.additionalLinks;
  let tags = req.body.tags;

  let newRecipe = new recipe({
    recipeName,
    difficulty,
    prepTime,
    cookTime,
    ingredients,
    step1,
    step2,
    step3,
    step4,
    step5,
    step6,
    step7,
    step8,
    step9,
    step10,
    imgURL,
    videoURL,
    additionalLinks,
    tags
  });
  newRecipe.save().then((newRecipeDoc) => {
    res.send(newRecipeDoc);
  })
})

// Update a recipe
app.patch('/list-recipes/:id', (req, res) => {
  recipe.findOneAndUpdate({ _id: req.params.id }, {
    $set: req.body
  }).then(() => {
    res.sendStatus(200);
  });
})

// Delete a recipe
app.delete('/list-recipes/:id', (req, res) => {
  recipe.findByIdAndRemove({
    _id: req.params.id
  }).then((removedRecipeDoc) => {
    res.send(removedRecipeDoc);
  });
})


// Send a sms notification

// Create a recipe
app.get('/sendSMS', (req, res) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);

  client.messages
    .create({
      body: "Quick! Daddy's Home Cooking has just released a new recipe #yum",
      from: '+12487800071',
      to: '+33631292338'
    })
    .then(message => res.send(`The message to ${message.to} was sent. Noice!`))
    .catch(err => console.log(err)) ;
  })

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
})


// mongodb+srv://simonholmes001:CPIWgGkVC8SizQhD@cluster0.hzfck.mongodb.net/recipe_list?retryWrites=true&w=majority

