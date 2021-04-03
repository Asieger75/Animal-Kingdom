const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animalSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  synopsis: { type: String, required: true },
  continent: { type: String, required: true },
});

const animal = mongoose.model("animal", animalSchema);

module.exports = animal;


