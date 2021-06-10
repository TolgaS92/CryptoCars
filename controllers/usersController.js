const db = require("../models");


module.exports = {
    findAll: function(req, res) {
        db.User
        .find()
        .sort({ date: -1 })
        .then(dbModel => res.res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.User
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
}