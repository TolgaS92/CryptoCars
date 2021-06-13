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
    },
    user_id: {
      ref: "User",
      type: Schema.Types.ObjectId,
      required: true
    },
    date: { 
      type: Date, default: Date.now 
    }
});
const CarInfo = mongoose.model("CarInfo", carSchema);
module.exports = CarInfo;