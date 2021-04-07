const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.animal
      .find(req.query)

      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.animal
      .findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },


 findByContinent: function (req, res) {
    db.animal
      .find({ continent: req.params.continent })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

};

