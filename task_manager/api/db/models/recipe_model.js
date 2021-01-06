const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  _recipeId: {
    type: mongoose.Types.ObjectId,
    // required: true
  },
  recipeName: {
    type: String,
    required: true,
    trim: true
  },
  difficulty: {
    type: String,
    // required: true,
    trim: true,
  },
  prepTime: {
    type: String,
    // required: true,
    trim: true,
  },
  cookingTime: {
    type: String,
    // required: true,
    trim: true,
  },
  ingredients: {
    type: String,
    // required: true,
    trim: true,
  },
  instructions: {
    type: String,
    // required: true,
    trim: true,
  },
  imgURL: {
    type: String,
    // required: true,
    trim: true,
  },
  tags: {
    type: String,
    // required: true,
    trim: true,
  }
})

const recipe = mongoose.model('recipe', recipeSchema);

module.exports = { recipe };
