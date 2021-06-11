const mongoose = require("mongoose");
const db = require("../models");


try {
  db.models.User.create({
    name: "morgan",
    email: "mlf@gmail.com",
    password: "password",
  }).then((res) => console.log("res", res));
} catch (error) {
  console.log(error);
}

// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/CryptoCars",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
//   }
// );
