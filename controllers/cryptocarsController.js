/* const db = require("../models/"); */
const CarInfo = require("../models/CarInfo.js");
module.exports = {
    findAll: function(req, res) {
        CarInfo
            .find(req.body)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        CarInfo
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                res.status(422).json(err)
                console.log(err)
            });
    },
    create: function(req, res) {
        CarInfo
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => {
              res.status(422).json(err)
              console.log(err)
            });
      },
    update: function(req, res) {
        CarInfo
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        CarInfo
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};