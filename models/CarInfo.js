// models: year, milage, carmodel, vin
const mongoose = require("mongoose");

const Schema = mongoose.Schema;


  const carSchema = new Schema({
    carModel: {
      type: String,
      required: [true, "can't be blank"],
    },
    vin: {
      type: String,
      required: [true, "can't be blank"],
    },
    price: {
      type: String,
      required: [true, "can't be blank"],
    },
    mileage: {
      type: Number,
      required: [true, "can't be blank"],
    }
});
const CarInfo = mongoose.model("CarInfo", carSchema);
module.exports = CarInfo;