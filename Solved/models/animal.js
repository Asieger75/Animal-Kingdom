const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animalSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  synopsis: String,
  continent: { type: String },
});

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;
