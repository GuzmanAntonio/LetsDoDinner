const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Recipe = new Schema({
  publisher: {type: String},
  f2f_url: {type: String},
  ingridients: {type: Array},
  source_url: {type: String},
  recipe_id: {type: String},
  image_url: {type: String},
  social_rank: {type: String},
  publisher_url: {type: String},
  title: {type: String}
})

Recipe.methods.setRecipeData = function (requestBody) {
  this.publisher = request.publisher || this.publisher
  this.f2f_url = request.f2f_url || this.f2f_url
  this.ingridients = request.ingridients || this.f2f_url
  this.source_url = request.source_url || this.source_url
  this.recipe_id = request.recipe_id || this.recipe_id
  this.image_url = request.image_url || this.image_url
  this.social_rank = request.social_rank || this.social_rank
  this.publisher_url = request.publisher_url || this.publisher_url
  this.title = request.title || this.title
}

module.exports = mongoose.model('Recipe', Recipe)