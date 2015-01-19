'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PokemonSchema = new Schema({
  name: String,
  picture: String,
  description: String
});

PokemonSchema.statics.isValidName = function (name, callback) {
  if (name) {
    return true;
  }
  return false;
};

module.exports = mongoose.model('Pokemon', PokemonSchema);
