/* const db = require("../models/"); */
const { models } = require("../models");
module.exports = {
    findAll: function(req, res) {
      models.User
        .find(req.body)
        .sort({ date: -1 })
        .then(dbModel => res.res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
      models.User.findById(req.params.id)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    },
    create: function(req, res) {
      models.User
          .create(req.body)  
          .then(dbModel => res.json(dbModel))
          .catch(err => {
              console.log(err);
              res.status(422).json(err)
            });
      },
      update: function (req, res) {
        models.User.findOneAndUpdate({ _id: req.params.id }, req.body)
          .then((dbModel) => res.json(dbModel))
          .catch((err) => res.status(422).json(err));
      },
      remove: function (req, res) {
        models.User.findById({ _id: req.params.id })
          .then((dbModel) => dbModel.remove())
          .then((dbModel) => res.json(dbModel))
          .catch((err) => res.status(422).json(err));
      },
};