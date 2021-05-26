// models: year, milage, carmodel, vin
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CarSchema = new Schema({
    car: [
      {
        year: {
            type: Number,
        },
        mileage: {
            type: Number,
            required: [true, "can't be blank"], 
        },
        carModel: {
            type: String,
            required: [true, "can't be blank"], 
        },
        vin: {
            type: String,
            required: [true, "can't be blank"], 
        },
      },
    ]
});

const Car = mongoose.model("Car", CarSchema);
module.exports = Car;