const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  // _recipeId: {
  //   type: mongoose.Types.ObjectId,
  //   required: true
  // },
  recipeName: {
    type: String,
    required: true,
    trim: true
  },
  difficulty: {
    type: String,
    required: true,
    trim: true,
  },
  prepTime: {
    type: String,
    required: true,
    trim: true,
  },
  cookTime: {
    type: String,
    required: true,
    trim: true,
  },
  ingredients: {
    type: String,
    required: true,
    trim: true,
  },
  step1: {
    type: String,
    // required: true,
    trim: true,
  },
  step2: {
    type: String,
    // required: true,
    trim: true,
  },
  step3: {
    type: String,
    // required: true,
    trim: true,
  },
  step4: {
    type: String,
    // required: true,
    trim: true,
  },
  step5: {
    type: String,
    // required: true,
    trim: true,
  },
  step6: {
    type: String,
    // required: true,
    trim: true,
  },
  step7: {
    type: String,
    // required: true,
    trim: true,
  },
  step8: {
    type: String,
    // required: true,
    trim: true,
  },
  step9: {
    type: String,
    // required: true,
    trim: true,
  },
  step10: {
    type: String,
    // required: true,
    trim: true,
  },
  imgURL: {
    type: String,
    // required: true,
    trim: true,
  },
  videoURL: {
    type: String,
    // required: true,
    trim: true,
  },
  additionalLinks: {
    type: String,
    // required: true,
    trim: true,
  },
  tags: {
    type: String,
    required: true,
    trim: true,
  }
})

const recipe = mongoose.model('recipe', recipeSchema);

module.exports = { recipe };
